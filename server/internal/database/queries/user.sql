-- name: CreateUser :one
INSERT INTO users (
  id,
  pseudonym,
  email,
  password,
  avatar
) VALUES ( ?, ?, ?, ?, ? )
RETURNING *;

-- name: GetUser :one
SELECT id, pseudonym, avatar FROM users
WHERE id = ? LIMIT 1;

-- name: ListUser :many
SELECT id, pseudonym, avatar FROM users
ORDER BY id
LIMIT ? OFFSET ?;

-- name: UpdateUser :one
UPDATE users
SET email = ?,
password = ?,
avatar = ?
WHERE id = ?
RETURNING *;

