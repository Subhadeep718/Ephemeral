package db

import (
	"context"
	"database/sql"
	"testing"

	"emphemeral.io/server/internal/utils"
	"github.com/brianvoe/gofakeit/v7"
	"github.com/stretchr/testify/require"
)

func TestCreateUser(t *testing.T) {
	arg := CreateUserParams{
		ID:        gofakeit.UUID(),
		Pseudonym: gofakeit.Username(),
		Email:     gofakeit.Email(),
		Password:  utils.RandomPassword(),
		Avatar: sql.NullString{
			String: gofakeit.URL(),
		},
	}

	user, err := testQueries.CreateUser(context.Background(), arg)
	require.NoError(t, err)
	require.NotEmpty(t, user)

	require.Equal(t, arg.ID, user.ID)
	require.Equal(t, arg.Pseudonym, user.Pseudonym)
	require.Equal(t, arg.Email, user.Email)
	require.Equal(t, arg.Password, user.Password)

	if arg.Avatar.Valid {
		require.True(t, user.Avatar.Valid)
		require.Equal(t, arg.Avatar.String, user.Avatar.String)
	}

	require.NotZero(t, user.CreatedAt)
	require.NotZero(t, user.LastActiveAt)
}
