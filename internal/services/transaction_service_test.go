package services

import (
	"avito-tech-internship/internal/models"
	"avito-tech-internship/internal/services/mocks"
	"errors"
	"testing"

	"github.com/google/uuid"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

func TestSendCoins(t *testing.T) {
	mockUserRepo := new(mocks.MockUserRepo)
	mockTransRepo := new(mocks.MockTransactionRepo)
	service := NewTransactionService(mockUserRepo, mockTransRepo)

	fromUserID := uuid.New().String()
	toUserID := uuid.New().String()

	fromUser := &models.User{ID: uuid.MustParse(fromUserID), Username: "test1", Coins: 500}
	toUser := &models.User{ID: uuid.MustParse(toUserID), Username: "test2", Coins: 100}

	mockUserRepo.On("GetUserByID", fromUserID).Return(fromUser, nil)
	mockUserRepo.On("GetUserByUsername", "test2").Return(toUser, nil)
	mockUserRepo.On("UpdateUser", mock.Anything).Return(nil).Twice()
	mockTransRepo.On("CreateTransaction", mock.Anything).Return(nil)

	err := service.SendCoins(fromUserID, "test2", 100)

	assert.NoError(t, err)
	assert.Equal(t, 400, fromUser.Coins)
	assert.Equal(t, 200, toUser.Coins)
}

func TestSendCoins_NotEnoughCoins(t *testing.T) {
	mockUserRepo := new(mocks.MockUserRepo)
	mockTransRepo := new(mocks.MockTransactionRepo)
	service := NewTransactionService(mockUserRepo, mockTransRepo)

	fromUserID := uuid.New().String()
	toUserID := uuid.New().String()

	fromUser := &models.User{ID: uuid.MustParse(fromUserID), Username: "test1", Coins: 50}
	toUser := &models.User{ID: uuid.MustParse(toUserID), Username: "test2", Coins: 100}

	mockUserRepo.On("GetUserByID", fromUserID).Return(fromUser, nil)
	mockUserRepo.On("GetUserByUsername", "test2").Return(toUser, nil)

	err := service.SendCoins(fromUserID, "test2", 100)

	assert.Error(t, err)
	assert.Equal(t, "not enough coins", err.Error())
}

func TestSendCoins_UserNotFound(t *testing.T) {
	mockUserRepo := new(mocks.MockUserRepo)
	mockTransRepo := new(mocks.MockTransactionRepo)
	service := NewTransactionService(mockUserRepo, mockTransRepo)

	fromUserID := uuid.New().String()

	mockUserRepo.On("GetUserByID", fromUserID).Return(nil, errors.New("user not found"))

	err := service.SendCoins(fromUserID, "test", 100)

	assert.Error(t, err)
	assert.Equal(t, "user not found", err.Error())
}

func TestGetUserTransactions(t *testing.T) {
	mockUserRepo := new(mocks.MockUserRepo)
	mockTransRepo := new(mocks.MockTransactionRepo)
	service := NewTransactionService(mockUserRepo, mockTransRepo)

	userID := uuid.New().String()

	mockTransactions := []models.Transaction{
		{FromUserID: uuid.MustParse(userID), ToUserID: uuid.New(), Amount: 100},
		{FromUserID: uuid.New(), ToUserID: uuid.MustParse(userID), Amount: 50},
		{FromUserID: uuid.MustParse(userID), ToUserID: uuid.MustParse("00000000-0000-0000-0000-000000000000"), Amount: 200},
	}

	mockTransRepo.On("GetTransactionsByUser", userID).Return(mockTransactions, nil)
	mockUserRepo.On("GetUserByID", mock.Anything).Return(&models.User{Username: "test"}, nil)

	history, err := service.GetUserTransactions(userID)

	assert.NoError(t, err)
	assert.Len(t, history["sent"], 2)
	assert.Len(t, history["received"], 1)
	assert.Equal(t, "shop", history["sent"][1]["toUser"])
}
