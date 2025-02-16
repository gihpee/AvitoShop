## Запуск сервиса
1. Сперва необходимо создать `.env` файл в корне проекта и заполнить его по аналогии с `.env.example`
2. Собрать и запустить контейнеры командой `docker-compose up -d --build` — после этого сервис будет доступен на порте 8080

## Стек
Golang, PostgreSQL, GORM, Redis

## Тестирование
1. Бизнес-логика (пакет services) покрыта юнит-тестами на 88% ![image](https://github.com/user-attachments/assets/b435788a-0447-486d-bba6-2824350ab2bb)
2. Интеграционные тесты вынесены в отдельный пакет tests, реализованы оба сценария из задания (покупка мерча и передача монеток)
3. Нагрузочное тестирование выполнял при помощи jmeter, сам сервис был размещен на VDS с такой конфигурацией:<br>1 x 3.3 ГГц CPU | 2 ГБ RAM | 30 ГБ NVMe<br>Провел 3 теста:
   - Регистрация 1000 новых пользователей по заранее сгенерированной таблице с логинами и паролями (Number of Threads: 1000, Loop Count: 1)<br>**Результаты:** Error%: 0.00%; Avg: 538; RPS: 27 ![image](https://github.com/user-attachments/assets/fb984d5d-19a8-4faa-aeec-fe83d35b5986)
   - Авторизация одного пользователя (Number of Threads: 500, Loop Count: 100)<br>**Результаты:** Error%: 0.00%; Avg: 296; RPS: 1629 ![image](https://github.com/user-attachments/assets/c53d4b72-51b6-4752-ae86-7a2a5c2127b2)
   - Запрос на api/info одного пользователя (Number of Threads: 500, Loop Count: 100)<br>**Результаты:** Error%: 0.00%; Avg: 333; RPS: 1377 ![image](https://github.com/user-attachments/assets/d187fee9-6d48-4eaa-8bea-dd5d79767ac7)
   
   С подробными отчетами можно ознакомиться в папке `reports` (52% JS в репозитории это именно они)

## Оптимизация
- Поставил Redis для кеширования пользователей и токенов — значительно улучшились показатели
- Создал индексы для основных столбцов в таблицах (`user.id`, `user.username`, `transaction.fromUserID`, `transaction.toUserID`) — незначительно повлияло на работу
- Пытался использовать argon2 вместо bcrypt для хеширования паролей — стало хуже
- Оборачивал генерацию и проверку хешей bcrypt в горутины — стало хуже
- Уменьшил cost в bcrypt со стандартного до 6 — стало лучше
- Ограничил максимальное количество подключений к бд и время их жизни — стало значительно лучше

## Проблемы, с которыми столкнулся
1. Задание само по себе предпологает использование модели транзакций (с данными об отправителе, получателе, сумме и т.д.) для получении информации о перемещении монеток пользователя. Очевидно, что покупки в
   магазине также считаются перемещением монет и должны быть указаны в ответе на api/info. Так как в задании не было явно указано как мы идентифицируем покупку в магазине, то я решил зарезервировать
   uuid `00000000-0000-0000-0000-000000000000` для всех покупок в магазине в поле `ToUserID`. В отчете о перемещении монет поле `toUser` у таких транзакций всегда равно `shop`.<br><img src="https://github.com/user-attachments/assets/3c7f0af6-ff17-4422-a72a-a4af73db9c7b" width="300">
   2. Кеширование пользователей. Изначально я хотел чтобы все методы в services работали с пользователями из кеша. Т.е. сначала искали бы их в кеше, и если их там нет то только тогда лезли в БД. Но т.к. Redis принимает
   json-сериализованный объект, в котором я исключил наличие поля `password`, получилось так, что методы, которые изменяют по ходу своей работы объект пользователя, брали его из кеша без пароля и также записывали его 
   в БД тоже без пароля. Т.е. пароль терялся и пользователь больше не мог авторизоваться. Из соображений безопасности я не стал допускать хранение хешей паролей в кеше и отказался от идеи брать пользователя из кеша в запросах
    на покупку мерча и перевод монеток.
