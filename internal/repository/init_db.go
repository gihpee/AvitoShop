package repository

import (
	"fmt"
	"log"

	"avito-tech-internship/config"
	"avito-tech-internship/internal/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func InitDB(cfg *config.Config) *gorm.DB {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable", cfg.DBHost, cfg.DBUser, cfg.DBPassword, cfg.DBName, cfg.DBPort)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}

	models.MigrateUsers(db)
	models.MigrateTransactions(db)
	models.MigrateMerch(db)

	log.Println("Database connected and migrated successfully")
	return db
}
