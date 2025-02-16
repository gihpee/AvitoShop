package services

import (
	"avito-tech-internship/internal/cache"
	"avito-tech-internship/internal/models"
	"avito-tech-internship/internal/repository"

	"github.com/google/uuid"
)

type UserService struct {
	userRepo  repository.UserRepository
	merchRepo repository.MerchRepository
	transRepo repository.TransactionRepository
}

func NewUserService(userRepo repository.UserRepository, merchRepo repository.MerchRepository, transRepo repository.TransactionRepository) *UserService {
	return &UserService{userRepo: userRepo, merchRepo: merchRepo, transRepo: transRepo}
}

func (s *UserService) GetUserByID(userID string) (*models.User, error) {
	user, err := cache.GetCachedUser(userID)
	if err != nil || user == nil {
		user, err = s.userRepo.GetUserByID(userID)
		if err != nil {
			return nil, err
		}
		cache.CacheUser(user)
	}
	return user, nil
}

func (s *UserService) CreateUser(username, password string) (*models.User, error) {
	user := &models.User{
		ID:       uuid.New(),
		Username: username,
		Password: password,
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
