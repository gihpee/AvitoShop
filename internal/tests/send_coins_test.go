package tests

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestSendCoins(t *testing.T) {
	router := setupServer()

	//регистрируем отправителя
	sender := map[string]string{
		"username": "sender",
		"password": "root",
	}
	senderJSON, _ := json.Marshal(sender)

	req := httptest.NewRequest("POST", "/api/auth", bytes.NewBuffer(senderJSON))
	req.Header.Set("Content-Type", "application/json")
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)

	var senderAuthResponse map[string]string
	json.Unmarshal(w.Body.Bytes(), &senderAuthResponse)
	senderToken := senderAuthResponse["token"]

	//регистрируем получателя
	receiver := map[string]string{
		"username": "receiver",
		"password": "password123",
	}
	receiverJSON, _ := json.Marshal(receiver)

	req = httptest.NewRequest("POST", "/api/auth", bytes.NewBuffer(receiverJSON))
	req.Header.Set("Content-Type", "application/json")
	w = httptest.NewRecorder()
	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)

	var receiverAuthResponse map[string]string
	json.Unmarshal(w.Body.Bytes(), &receiverAuthResponse)
	receiverToken := receiverAuthResponse["token"]

	//получаем начальные балансы
	req = httptest.NewRequest("GET", "/api/info", nil)
	req.Header.Set("Authorization", "Bearer "+senderToken)
	w = httptest.NewRecorder()
	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)

	var senderInfo map[string]interface{}
	json.Unmarshal(w.Body.Bytes(), &senderInfo)
	initialSenderCoins := int(senderInfo["coins"].(float64))

	req = httptest.NewRequest("GET", "/api/info", nil)
	req.Header.Set("Authorization", "Bearer "+receiverToken)
	w = httptest.NewRecorder()
	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)

	var receiverInfo map[string]interface{}
	json.Unmarshal(w.Body.Bytes(), &receiverInfo)
	initialReceiverCoins := int(receiverInfo["coins"].(float64))

	//отправляем 100 монет
	sendRequest := map[string]interface{}{
		"toUser": "receiver",
		"amount": 100,
	}
	sendJSON, _ := json.Marshal(sendRequest)

	req = httptest.NewRequest("POST", "/api/sendCoin", bytes.NewBuffer(sendJSON))
	req.Header.Set("Authorization", "Bearer "+senderToken)
	req.Header.Set("Content-Type", "application/json")
	w = httptest.NewRecorder()
	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)

	//проверяем баланс получателя
	req = httptest.NewRequest("GET", "/api/info", nil)
	req.Header.Set("Authorization", "Bearer "+senderToken)
	w = httptest.NewRecorder()
	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)

	json.Unmarshal(w.Body.Bytes(), &senderInfo)
	newSenderCoins := int(senderInfo["coins"].(float64))
	expectedSenderCoins := initialSenderCoins - 100
	assert.Equal(t, expectedSenderCoins, newSenderCoins)

	//проверяем баланс отправителя
	req = httptest.NewRequest("GET", "/api/info", nil)
	req.Header.Set("Authorization", "Bearer "+receiverToken)
	w = httptest.NewRecorder()
	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)

	json.Unmarshal(w.Body.Bytes(), &receiverInfo)
	newReceiverCoins := int(receiverInfo["coins"].(float64))
	expectedReceiverCoins := initialReceiverCoins + 100
	assert.Equal(t, expectedReceiverCoins, newReceiverCoins)

	//проверяем транзакцию появилась в истории отправителя
	coinHistory := senderInfo["coinHistory"].(map[string]interface{})
	sentTransactions := coinHistory["sent"].([]interface{})
	assert.NotEmpty(t, sentTransactions)

	found := false
	for _, tx := range sentTransactions {
		transaction := tx.(map[string]interface{})
		if transaction["toUser"] == "receiver" && int(transaction["amount"].(float64)) == 100 {
			found = true
			break
		}
	}

	assert.True(t, found)

	//проверяем транзакцию в истории получателя
	coinHistory = receiverInfo["coinHistory"].(map[string]interface{})
	receivedTransactions := coinHistory["received"].([]interface{})
	assert.NotEmpty(t, receivedTransactions)

	found = false
	for _, tx := range receivedTransactions {
		transaction := tx.(map[string]interface{})
		if transaction["fromUser"] == "sender" && int(transaction["amount"].(float64)) == 100 {
			found = true
			break
		}
	}

	assert.True(t, found)
}
