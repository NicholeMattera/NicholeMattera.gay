package cmd

import (
	"log"
	"net/http"

	"git.nicholemattera.com/NicholeMattera/NicholeMattera.com/internal/routes"
)

// Init initializes the HTTP Server
func Init() {
	http.Handle("/", routes.MakeHomeHandler())
	// http.Handle("/mer", routes.MakeGaymerHandler())

	log.Fatal(http.ListenAndServe(":8082", nil))
}
