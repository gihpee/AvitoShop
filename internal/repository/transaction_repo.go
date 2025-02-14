package repository

import (
	"avito-tech-internship/internal/models"

	"gorm.io/gorm"
)

type TransactionRepo struct {
	db *gorm.DB
}

func NewTransactionRepo(db *gorm.DB) *TransactionRepo {
	return &TransactionRepo{db: db}
}

func (r *TransactionRepo) CreateTransaction(tx *models.Transaction) error {
	return r.db.Create(tx).Error
}

func (r *TransactionRepo) GetTransactionsByUser(userID string) ([]models.Transaction, error) {
	var transactions []models.Transaction
	err := r.db.Where("from_user_id = ? OR to_user_id = ?", userID, userID).Find(&transactions).Error
	return transactions, err
}
