package tests

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestBuyMerch(t *testing.T) {
	router := setupServer()

	user := map[string]string{
		"username": "test5",
		"password": "rootroot",
	}
	userJSON, _ := json.Marshal(user)

	//регистрация пользователя test
	req := httptest.NewRequest("POST", "/api/auth", bytes.NewBuffer(userJSON))
	req.Header.Set("Content-Type", "application/json")
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)

	var authResponse map[string]string
	json.Unmarshal(w.Body.Bytes(), &authResponse)
	token := authResponse["token"]

	//сохранение начального количества монет
	req = httptest.NewRequest("GET", "/api/info", nil)
	req.Header.Set("Authorization", "Bearer "+token)
	w = httptest.NewRecorder()
	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)

	var infoResponse map[string]interface{}
	json.Unmarshal(w.Body.Bytes(), &infoResponse)
	initialCoins := int(infoResponse["coins"].(float64))

	//покупка мерча
	req = httptest.NewRequest("GET", "/api/buy/t-shirt", nil)
	req.Header.Set("Authorization", "Bearer "+token)
	w = httptest.NewRecorder()
	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)

	//проверка количества монет после покупки
	req = httptest.NewRequest("GET", "/api/info", nil)
	req.Header.Set("Authorization", "Bearer "+token)
	w = httptest.NewRecorder()
	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)

	json.Unmarshal(w.Body.Bytes(), &infoResponse)
	remainingCoins := int(infoResponse["coins"].(float64))

	assert.Equal(t, remainingCoins, initialCoins-80)

	//проверка истории транзакций
	coinHistory := infoResponse["coinHistory"].(map[string]interface{})
	sentTransactions := coinHistory["sent"].([]interface{})
	assert.NotEmpty(t, sentTransactions)

	found := false
	for _, tx := range sentTransactions {
		transaction := tx.(map[string]interface{})
		if transaction["toUser"] == "shop" && int(transaction["amount"].(float64)) == 80 {
			found = true
			break
		}
	}

	assert.True(t, found)
}
