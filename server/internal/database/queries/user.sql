-- name: CreateUser :one
INSERT INTO users (
  id,
  pseudonym,
  email,
  password,
  avatar
) VALUES ( ?, ?, ?, ?, ? )
RETURNING *;

