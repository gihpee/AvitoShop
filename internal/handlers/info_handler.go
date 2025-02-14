package handlers

import (
	"net/http"

	"avito-tech-internship/internal/services"

	"github.com/gin-gonic/gin"
)

func RegisterInfoRoutes(r *gin.RouterGroup, userService *services.UserService, transService *services.TransactionService) {
	r.GET("/info", func(c *gin.Context) {
		userID := c.GetString("user_id")

		user, err := userService.GetUserByID(userID)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"errors": "User not found"})
			return
		}

		transactions, err := transService.GetUserTransactions(userID)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"errors": "Failed to fetch transactions"})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"coins":       user.Coins,
			"inventory":   userService.GetUserInventory(userID),
			"coinHistory": transactions,
		})
	})
}
