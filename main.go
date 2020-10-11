package main

import (
    "log"
    "net/http"
)

func main() {
    http.Handle("/", home())
    http.Handle("/mer", gaymer())
    http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))

    log.Fatal(http.ListenAndServe(":8082", nil))
}
