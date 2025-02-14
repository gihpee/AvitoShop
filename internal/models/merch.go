package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Merch struct {
	ID    uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()" json:"id"`
	Name  string    `gorm:"unique;not null" json:"name"`
	Price int       `gorm:"not null" json:"price"`
}

func MigrateMerch(db *gorm.DB) {
	db.AutoMigrate(&Merch{})

	merchItems := []Merch{
		{Name: "t-shirt", Price: 80},
		{Name: "cup", Price: 20},
		{Name: "book", Price: 50},
		{Name: "pen", Price: 10},
		{Name: "powerbank", Price: 200},
		{Name: "hoody", Price: 300},
		{Name: "umbrella", Price: 200},
		{Name: "socks", Price: 10},
		{Name: "wallet", Price: 50},
		{Name: "pink-hoody", Price: 500},
	}

	for _, item := range merchItems {
		var existing Merch
		result := db.Where("name = ?", item.Name).First(&existing)
		if result.Error != nil {
			db.Create(&item)
		}
	}
}
