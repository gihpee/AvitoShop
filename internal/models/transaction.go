package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Transaction struct {
	ID         uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()" json:"id"`
	FromUserID uuid.UUID `gorm:"not null;index" json:"from_user_id"`
	ToUserID   uuid.UUID `gorm:"not null;index" json:"to_user_id"`
	Amount     int       `gorm:"not null" json:"amount"`
	Item       string    `json:"item"`
	CreatedAt  time.Time `json:"created_at"`
}

func MigrateTransactions(db *gorm.DB) {
	db.AutoMigrate(&Transaction{})
}
