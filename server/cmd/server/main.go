package main

import (
	"net/http"

	"emphemeral.io/server/internal/routes/v1"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Get("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
	})

	r.Mount("/api/v1", routes.ApiRouterV1)

	http.ListenAndServe(":3000", r)
}
