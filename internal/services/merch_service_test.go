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

func TestBuyMerch(t *testing.T) {
	mockUserRepo := new(mocks.MockUserRepo)
	mockMerchRepo := new(mocks.MockMerchRepo)
	mockTransRepo := new(mocks.MockTransactionRepo)
	service := NewMerchService(mockMerchRepo, mockUserRepo, mockTransRepo)

	userID := uuid.New().String()

	user := &models.User{ID: uuid.MustParse(userID), Username: "test", Coins: 1000}
	merch := &models.Merch{Name: "t-shirt", Price: 80}

	mockUserRepo.On("GetUserByID", userID).Return(user, nil)
	mockMerchRepo.On("GetMerchByName", "t-shirt").Return(merch, nil)
	mockUserRepo.On("UpdateUser", mock.Anything).Return(nil)
	mockTransRepo.On("CreateTransaction", mock.Anything).Return(nil)

	err := service.BuyMerch(userID, "t-shirt")

	assert.NoError(t, err)
	assert.Equal(t, 920, user.Coins)
}

func TestBuyMerch_MerchNotFound(t *testing.T) {
	mockUserRepo := new(mocks.MockUserRepo)
	mockMerchRepo := new(mocks.MockMerchRepo)
	mockTransRepo := new(mocks.MockTransactionRepo)
	service := NewMerchService(mockMerchRepo, mockUserRepo, mockTransRepo)

	userID := uuid.New().String()
	user := &models.User{ID: uuid.MustParse(userID), Username: "test"}

	mockUserRepo.On("GetUserByID", userID).Return(user, nil)
	mockMerchRepo.On("GetMerchByName", "noname").Return(nil, errors.New("merch not found"))

	err := service.BuyMerch(userID, "noname")

	assert.Error(t, err)
	assert.Equal(t, "merch not found", err.Error())
}

func TestBuyMerch_NotEnoughCoins(t *testing.T) {
	mockUserRepo := new(mocks.MockUserRepo)
	mockMerchRepo := new(mocks.MockMerchRepo)
	mockTransRepo := new(mocks.MockTransactionRepo)
	service := NewMerchService(mockMerchRepo, mockUserRepo, mockTransRepo)

	userID := uuid.New().String()

	user := &models.User{ID: uuid.MustParse(userID), Username: "test", Coins: 50}
	merch := &models.Merch{Name: "t-shirt", Price: 80}

	mockUserRepo.On("GetUserByID", userID).Return(user, nil)
	mockMerchRepo.On("GetMerchByName", "t-shirt").Return(merch, nil)

	err := service.BuyMerch(userID, "t-shirt")

	assert.Error(t, err)
	assert.Equal(t, "not enough coins", err.Error())
}
