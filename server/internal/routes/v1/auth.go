package routes

import (
	"emphemeral.io/server/internal/handlers/v1"
	"github.com/go-chi/chi/v5"
)

var AuthRouter = chi.NewRouter()

func init() {
	AuthRouter.Get("/login", handlers.LoginHandler)
	AuthRouter.Get("/signup", handlers.SignupHandler)
}
