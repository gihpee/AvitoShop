package services

import (
	"avito-tech-internship/internal/models"
	"avito-tech-internship/internal/services/mocks"
	"errors"
	"testing"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/google/uuid"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"golang.org/x/crypto/bcrypt"
)

func TestAuthenticate_ExistingUser(t *testing.T) {
	mockUserRepo := new(mocks.MockUserRepo)
	service := NewAuthService(mockUserRepo, "rootroot")

	username := "test"
	password := "password"
	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)

	mockUser := &models.User{ID: uuid.New(), Username: username, Password: string(hashedPassword)}

	mockUserRepo.On("GetUserByUsername", username).Return(mockUser, nil)

	token, err := service.Authenticate(username, password)

	assert.NoError(t, err)
	assert.NotEmpty(t, token)
}

func TestAuthenticate_NewUse(t *testing.T) {
	mockUserRepo := new(mocks.MockUserRepo)
	service := NewAuthService(mockUserRepo, "rootroot")

	username := "test"
	password := "password"

	mockUserRepo.On("GetUserByUsername", username).Return(nil, errors.New("user not found"))
	mockUserRepo.On("CreateUser", mock.Anything).Return(nil)

	token, err := service.Authenticate(username, password)

	assert.NoError(t, err)
	assert.NotEmpty(t, token)
}

func TestAuthenticate_InvalidPassword(t *testing.T) {
	mockUserRepo := new(mocks.MockUserRepo)
	service := NewAuthService(mockUserRepo, "rootroot")

	username := "test"
	password := "password"
	wrongPassword := "wrongpassword"
	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)

	mockUser := &models.User{ID: uuid.New(), Username: username, Password: string(hashedPassword)}

	mockUserRepo.On("GetUserByUsername", username).Return(mockUser, nil)

	token, err := service.Authenticate(username, wrongPassword)

	assert.Error(t, err)
	assert.Equal(t, "invalid password", err.Error())
	assert.Empty(t, token)
}

func TestParseToken(t *testing.T) {
	mockUserRepo := new(mocks.MockUserRepo)
	service := NewAuthService(mockUserRepo, "rootroot")

	userID := uuid.New()
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"user_id": userID.String(),
		"exp":     time.Now().Add(time.Hour * 24).Unix(),
	})

	tokenString, _ := token.SignedString([]byte("rootroot"))

	parsedUserID, err := service.ParseToken(tokenString)

	assert.NoError(t, err)
	assert.Equal(t, userID.String(), parsedUserID)
}

func TestParseToken_InvalidToken(t *testing.T) {
	mockUserRepo := new(mocks.MockUserRepo)
	service := NewAuthService(mockUserRepo, "rootroot")

	invalidToken := "invalid.token.string"

	parsedUserID, err := service.ParseToken(invalidToken)

	assert.Error(t, err)
	assert.Empty(t, parsedUserID)
}
