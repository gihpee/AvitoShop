package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	ID        uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid();index" json:"id"`
	Username  string    `gorm:"unique;not null;index" json:"username"`
	Password  string    `json:"-"`
	Coins     int       `gorm:"not null;default:1000" json:"coins"`
	CreatedAt time.Time `json:"created_at"`
}

func MigrateUsers(db *gorm.DB) {
	db.AutoMigrate(&User{})
}
