package main

import (
    "log"
    "net/http"
)

func main() {
    homeHandler := home()
    if homeHandler == nil {
        return
    }
    http.Handle("/", homeHandler)

    http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))

    log.Fatal(http.ListenAndServe(":8082", nil))
}
