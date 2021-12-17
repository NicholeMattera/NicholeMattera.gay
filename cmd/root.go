package cmd

import (
	"log"
	"net/http"

	"git.nicholemattera.com/NicholeMattera/NicholeMattera.com/internal/routes"
)

// Init initializes the HTTP Server
func Init() {
	http.Handle("/", routes.MakeHomeHandler())
	http.Handle("/mer", routes.MakeGaymerHandler())
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))

	log.Fatal(http.ListenAndServe(":8082", nil))
}
