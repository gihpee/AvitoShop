package handlers

import (
	"net/http"

	"avito-tech-internship/internal/services"

	"github.com/gin-gonic/gin"
)

func RegisterAuthRoutes(r *gin.Engine, authService *services.AuthService) {
	r.POST("/api/auth", func(c *gin.Context) {
		var req struct {
			Username string `json:"username"`
			Password string `json:"password"`
		}

		if err := c.ShouldBindJSON(&req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"errors": "Invalid request"})
			return
		}

		token, err := authService.Authenticate(req.Username, req.Password)
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"errors": err.Error()})
			return
		}

		c.JSON(http.StatusOK, gin.H{"token": token})
	})
}
