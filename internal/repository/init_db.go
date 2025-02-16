package repository

import (
	"fmt"
	"log"
	"time"

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

	sqlDB, _ := db.DB()
	sqlDB.SetMaxOpenConns(50)
	sqlDB.SetMaxIdleConns(10)
	sqlDB.SetConnMaxLifetime(5 * time.Minute)

	models.MigrateUsers(db)
	models.MigrateTransactions(db)
	models.MigrateMerch(db)

	log.Println("Database connected and migrated successfully")
	return db
}
