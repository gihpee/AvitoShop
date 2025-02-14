package handlers

import (
	"net/http"

	"avito-tech-internship/internal/services"

	"github.com/gin-gonic/gin"
)

func RegisterTransactionRoutes(r *gin.RouterGroup, transService *services.TransactionService) {
	r.POST("/sendCoin", func(c *gin.Context) {
		userID := c.GetString("user_id")

		var req struct {
			ToUser string `json:"toUser"`
			Amount int    `json:"amount"`
		}

		if err := c.BindJSON(&req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"errors": "Invalid request"})
			return
		}

		err := transService.SendCoins(userID, req.ToUser, req.Amount)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"errors": err.Error()})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "Coins sent successfully"})
	})
}
