package repository

import (
	"avito-tech-internship/internal/models"

	"gorm.io/gorm"
)

type MerchRepository interface {
	GetMerchByName(name string) (*models.Merch, error)
}

type MerchRepo struct {
	db *gorm.DB
}

func NewMerchRepo(db *gorm.DB) *MerchRepo {
	return &MerchRepo{db: db}
}

func (r *MerchRepo) GetMerchByName(name string) (*models.Merch, error) {
	var merch models.Merch
	err := r.db.Where("name = ?", name).First(&merch).Error
	if err != nil {
		return nil, err
	}
	return &merch, nil
}
