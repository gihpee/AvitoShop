package mocks

import (
	"avito-tech-internship/internal/models"

	"github.com/stretchr/testify/mock"
)

type MockUserRepo struct {
	mock.Mock
}

func (m *MockUserRepo) CreateUser(user *models.User) error {
	args := m.Called(user)
	return args.Error(0)
}

func (m *MockUserRepo) UpdateUser(user *models.User) error {
	args := m.Called(user)
	return args.Error(0)
}

func (m *MockUserRepo) GetUserByID(id string) (*models.User, error) {
	args := m.Called(id)
	if args.Get(0) != nil {
		return args.Get(0).(*models.User), args.Error(1)
	}
	return nil, args.Error(1)
}

func (m *MockUserRepo) GetUserByUsername(username string) (*models.User, error) {
	args := m.Called(username)
	if args.Get(0) != nil {
		return args.Get(0).(*models.User), args.Error(1)
	}
	return nil, args.Error(1)
}

type MockTransactionRepo struct {
	mock.Mock
}

func (m *MockTransactionRepo) GetTransactionsByUser(userID string) ([]models.Transaction, error) {
	args := m.Called(userID)
	if args.Get(0) != nil {
		return args.Get(0).([]models.Transaction), args.Error(1)
	}
	return nil, args.Error(1)
}

func (m *MockTransactionRepo) CreateTransaction(transaction *models.Transaction) error {
	args := m.Called(transaction)
	return args.Error(0)
}

type MockMerchRepo struct {
	mock.Mock
}

func (m *MockMerchRepo) GetMerchByName(name string) (*models.Merch, error) {
	args := m.Called(name)
	if args.Get(0) != nil {
		return args.Get(0).(*models.Merch), args.Error(1)
	}
	return nil, args.Error(1)
}
