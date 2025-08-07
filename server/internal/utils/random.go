package utils

import "github.com/brianvoe/gofakeit/v7"

func RandomPassword() string {
	return gofakeit.Password(true, true, true, true, true, 8)
}
