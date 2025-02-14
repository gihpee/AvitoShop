package handlers

import (
	"net/http"

	"avito-tech-internship/internal/services"

	"github.com/gin-gonic/gin"
)

func RegisterMerchRoutes(r *gin.RouterGroup, merchService *services.MerchService) {
	r.GET("/buy/:item", func(c *gin.Context) {
		userID := c.GetString("user_id")
		itemName := c.Param("item")

		err := merchService.BuyMerch(userID, itemName)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"errors": err.Error()})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "Item purchased successfully"})
	})
}
