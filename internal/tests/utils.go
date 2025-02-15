package tests

import (
	"avito-tech-internship/config"
	"avito-tech-internship/internal/handlers"
	"avito-tech-internship/internal/middleware"
	"avito-tech-internship/internal/repository"
	"avito-tech-internship/internal/services"

	"github.com/gin-gonic/gin"
)

func setupServer() *gin.Engine {
	cfg := config.LoadConfig()
	db := repository.InitDB(cfg)

	userRepo := repository.NewUserRepo(db)
	merchRepo := repository.NewMerchRepo(db)
	transRepo := repository.NewTransactionRepo(db)

	authService := services.NewAuthService(userRepo, cfg.JWTSecret)
	userService := services.NewUserService(userRepo, merchRepo, transRepo)
	merchService := services.NewMerchService(merchRepo, userRepo, transRepo)
	transService := services.NewTransactionService(userRepo, transRepo)

	router := gin.Default()
	handlers.RegisterAuthRoutes(router, authService)

	authGroup := router.Group("/api")
	authGroup.Use(middleware.JWTMiddleware(authService))

	handlers.RegisterInfoRoutes(authGroup, userService, transService)
	handlers.RegisterTransactionRoutes(authGroup, transService)
	handlers.RegisterMerchRoutes(authGroup, merchService)

	return router
}
