package services

import (
	"errors"

	"avito-tech-internship/internal/models"
	"avito-tech-internship/internal/repository"

	"github.com/google/uuid"
)

type MerchService struct {
	merchRepo repository.MerchRepository
	userRepo  repository.UserRepository
	transRepo repository.TransactionRepository
}

func NewMerchService(merchRepo repository.MerchRepository, userRepo repository.UserRepository, transRepo repository.TransactionRepository) *MerchService {
	return &MerchService{merchRepo: merchRepo, userRepo: userRepo, transRepo: transRepo}
}

func (s *MerchService) BuyMerch(userID, merchName string) error {
	user, err := s.userRepo.GetUserByID(userID)
	if err != nil {
		return err
	}

	//todo: проверка merchName

	merch, err := s.merchRepo.GetMerchByName(merchName)
	if err != nil {
		return err
	}

	if user.Coins < merch.Price {
		return errors.New("not enough coins")
	}

	user.Coins -= merch.Price
	err = s.userRepo.UpdateUser(user)
	if err != nil {
		return err
	}

	tx := &models.Transaction{
		FromUserID: user.ID,
		ToUserID:   uuid.MustParse("00000000-0000-0000-0000-000000000000"),
		Amount:     merch.Price,
		Item:       merchName,
	}

	return s.transRepo.CreateTransaction(tx)
}
