package services

import (
	"errors"

	"avito-tech-internship/internal/models"
	"avito-tech-internship/internal/repository"

	"github.com/google/uuid"
)

type TransactionService struct {
	userRepo  repository.UserRepository
	transRepo repository.TransactionRepository
}

func NewTransactionService(userRepo repository.UserRepository, transRepo repository.TransactionRepository) *TransactionService {
	return &TransactionService{userRepo: userRepo, transRepo: transRepo}
}

func (s *TransactionService) SendCoins(fromUserID, toUsername string, amount int) error {
	if amount <= 0 {
		return errors.New("invalid amount")
	}

	fromUser, err := s.userRepo.GetUserByID(fromUserID)
	if err != nil {
		return err
	}

	toUser, err := s.userRepo.GetUserByUsername(toUsername)
	if err != nil {
		return err
	}

	if fromUser.Coins < amount {
		return errors.New("not enough coins")
	}

	fromUser.Coins -= amount
	toUser.Coins += amount

	err = s.userRepo.UpdateUser(fromUser)
	if err != nil {
		return err
	}

	err = s.userRepo.UpdateUser(toUser)
	if err != nil {
		return err
	}

	tx := &models.Transaction{
		ID:         uuid.New(),
		FromUserID: fromUser.ID,
		ToUserID:   toUser.ID,
		Amount:     amount,
	}

	return s.transRepo.CreateTransaction(tx)
}

func (s *TransactionService) GetUserTransactions(userID string) (map[string][]map[string]interface{}, error) {
	transactions, err := s.transRepo.GetTransactionsByUser(userID)
	if err != nil {
		return nil, err
	}

	history := map[string][]map[string]interface{}{
		"received": {},
		"sent":     {},
	}

	shopUUID := uuid.MustParse("00000000-0000-0000-0000-000000000000")

	for _, tx := range transactions {
		if tx.ToUserID.String() == userID {
			fromUser, _ := s.userRepo.GetUserByID(tx.FromUserID.String())
			history["received"] = append(history["received"], map[string]interface{}{
				"fromUser": fromUser.Username,
				"amount":   tx.Amount,
			})
		} else {
			var toUserName string
			if tx.ToUserID == shopUUID {
				toUserName = "shop"
			} else {
				toUser, _ := s.userRepo.GetUserByID(tx.ToUserID.String())
				toUserName = toUser.Username
			}

			history["sent"] = append(history["sent"], map[string]interface{}{
				"toUser": toUserName,
				"amount": tx.Amount,
			})
		}
	}

	return history, nil
}
