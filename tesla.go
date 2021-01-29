package main

import (
    "net/http"
)

func tesla() http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
        http.Redirect(w, req, "http://ts.la/nichole52645", http.StatusPermanentRedirect)
    })
}
