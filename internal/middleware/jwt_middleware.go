package middleware

import (
	"net/http"
	"strings"

	"avito-tech-internship/internal/services"

	"github.com/gin-gonic/gin"
)

func JWTMiddleware(authService *services.AuthService) gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"errors": "Authorization header is required"})
			c.Abort()
			return
		}

		tokenParts := strings.Split(authHeader, " ")
		if len(tokenParts) != 2 || tokenParts[0] != "Bearer" {
			c.JSON(http.StatusUnauthorized, gin.H{"errors": "Invalid Authorization header format"})
			c.Abort()
			return
		}

		userID, err := authService.ParseToken(tokenParts[1])
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"errors": err.Error()})
			c.Abort()
			return
		}

		c.Set("user_id", userID)
		c.Next()
	}
}
