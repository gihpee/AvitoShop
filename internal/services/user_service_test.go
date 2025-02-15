package services

import (
	"avito-tech-internship/internal/models"
	"avito-tech-internship/internal/services/mocks"
	"testing"

	"github.com/google/uuid"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

func TestGetUserByID(t *testing.T) {
	mockUserRepo := new(mocks.MockUserRepo)
	service := NewUserService(mockUserRepo, nil, nil)

	userID := uuid.New().String()
	mockUser := &models.User{ID: uuid.MustParse(userID), Username: "test"}

	mockUserRepo.On("GetUserByID", userID).Return(mockUser, nil)

	user, err := service.GetUserByID(userID)

	assert.NoError(t, err)
	assert.NotNil(t, user)
	assert.Equal(t, "test", user.Username)
}

func TestCreateUser(t *testing.T) {
	mockUserRepo := new(mocks.MockUserRepo)
	service := NewUserService(mockUserRepo, nil, nil)

	username := "test"
	password := "rootroot"

	mockUserRepo.On("CreateUser", mock.AnythingOfType("*models.User")).Return(nil)

	user, err := service.CreateUser(username, password)

	assert.NoError(t, err)
	assert.NotNil(t, user)
	assert.Equal(t, username, user.Username)
	assert.Equal(t, 1000, user.Coins)
}

func TestGetUserInventory(t *testing.T) {
	mockUserRepo := new(mocks.MockUserRepo)
	mockTransRepo := new(mocks.MockTransactionRepo)
	service := NewUserService(mockUserRepo, nil, mockTransRepo)

	userID := uuid.New().String()

	mockTransactions := []models.Transaction{
		{ToUserID: uuid.MustParse("00000000-0000-0000-0000-000000000000"), Item: "t-shirt"},
		{ToUserID: uuid.MustParse("00000000-0000-0000-0000-000000000000"), Item: "t-shirt"},
		{ToUserID: uuid.MustParse("00000000-0000-0000-0000-000000000000"), Item: "book"},
	}

	mockTransRepo.On("GetTransactionsByUser", userID).Return(mockTransactions, nil)

	inventory := service.GetUserInventory(userID)

	assert.Len(t, inventory, 2)
	assert.Equal(t, "t-shirt", inventory[0]["type"])
	assert.Equal(t, 2, inventory[0]["quantity"])
	assert.Equal(t, "book", inventory[1]["type"])
	assert.Equal(t, 1, inventory[1]["quantity"])
}
