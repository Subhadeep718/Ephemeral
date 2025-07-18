// Package routes
package routes

import "github.com/go-chi/chi/v5"

var ApiRouterV1 = chi.NewRouter()

func init() {
	ApiRouterV1.Mount("/auth", AuthRouter)
}
