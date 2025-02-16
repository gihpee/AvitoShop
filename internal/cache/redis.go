package cache

import (
	"context"
	"encoding/json"
	"time"

	"avito-tech-internship/config"
	"avito-tech-internship/internal/models"

	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

var rdb *redis.Client

func InitRedis(cfg *config.Config) {
	rdb = redis.NewClient(&redis.Options{
		Addr: cfg.RedisHost + ":" + cfg.RedisPort,
	})
}

func GetCachedUser(userID string) (*models.User, error) {
	cached, err := rdb.Get(ctx, "user:"+userID).Result()
	if err != nil {
		return nil, err
	}

	var user models.User
	err = json.Unmarshal([]byte(cached), &user)
	if err != nil {
		return nil, err
	}

	return &user, nil
}

func CacheUser(user *models.User) {
	data, err := json.Marshal(user)
	if err != nil {
		return
	}

	rdb.Set(ctx, "user:"+user.ID.String(), data, time.Hour)
}

func GetCachedToken(username string) (string, error) {
	return rdb.Get(ctx, "token:"+username).Result()
}

func CacheToken(username string, token string) {
	rdb.Set(ctx, "token:"+username, token, 12*time.Hour)
}
