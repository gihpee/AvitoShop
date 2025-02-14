package main

import (
	"avito-tech-internship/config"
	"avito-tech-internship/internal/handlers"
	"avito-tech-internship/internal/middleware"
	"avito-tech-internship/internal/repository"
	"avito-tech-internship/internal/services"
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	cfg := config.LoadConfig()

	db := repository.InitDB(cfg)

	userRepo := repository.NewUserRepo(db)
	merchRepo := repository.NewMerchRepo(db)
	transRepo := repository.NewTransactionRepo(db)

	authService := services.NewAuthService(userRepo, cfg.JWTSecret)
	userService := services.NewUserService(userRepo, merchRepo, transRepo)
	merchService := services.NewMerchService(merchRepo, userRepo, transRepo)
	transService := services.NewTransactionService(userRepo, transRepo)

	router := gin.Default()

	// Подключаем маршруты
	handlers.RegisterAuthRoutes(router, authService)

	// Группируем защищенные маршруты
	authGroup := router.Group("/api")
	authGroup.Use(middleware.JWTMiddleware(authService))

	handlers.RegisterInfoRoutes(authGroup, userService, transService)
	handlers.RegisterTransactionRoutes(authGroup, transService)
	handlers.RegisterMerchRoutes(authGroup, merchService)

	log.Println("Server running on port 8080")
	router.Run(":8080")
}
