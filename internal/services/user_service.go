package services

import (
	"avito-tech-internship/internal/models"
	"avito-tech-internship/internal/repository"

	"github.com/google/uuid"
)

type UserService struct {
	userRepo  *repository.UserRepo
	merchRepo *repository.MerchRepo
	transRepo *repository.TransactionRepo
}

func NewUserService(userRepo *repository.UserRepo, merchRepo *repository.MerchRepo, transRepo *repository.TransactionRepo) *UserService {
	return &UserService{userRepo: userRepo, merchRepo: merchRepo, transRepo: transRepo}
}

func (s *UserService) GetUserByID(id string) (*models.User, error) {
	return s.userRepo.GetUserByID(id)
}

func (s *UserService) CreateUser(username, password string) (*models.User, error) {
	user := &models.User{
		ID:       uuid.New(),
		Username: username,
		Password: password, //todo: хеширование
		Coins:    1000,
	}

	err := s.userRepo.CreateUser(user)
	return user, err
}

func (s *UserService) GetUserInventory(userID string) []map[string]interface{} {
	var inventory []map[string]interface{}

	transactions, err := s.transRepo.GetTransactionsByUser(userID)
	if err != nil {
		return inventory
	}

	merchCount := make(map[string]int)

	for _, tx := range transactions {
		if tx.ToUserID.String() == "00000000-0000-0000-0000-000000000000" {
			merchCount[tx.Item]++
		}
	}

	for name, count := range merchCount {
		inventory = append(inventory, map[string]interface{}{
			"type":     name,
			"quantity": count,
		})
	}

	return inventory
}
