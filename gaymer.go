package main

import (
    "log"
	"net/http"
	"strings"
    "text/template"
)
type GaymerData struct {}

func gaymer() http.Handler {
    template, err := template.ParseFiles("./templates/gaymer.gohtml")
    if err != nil {
        log.Fatal("Error: Unable to parse the template file. (Gaymer)")
        return nil
    }

    return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		if !strings.HasSuffix(req.Host, "gay") {
			http.Redirect(w, req, "https://nicholemattera.gay/mer", http.StatusPermanentRedirect)
            return
		}
        
        data := GaymerData {}
        template.Execute(w, data)
    })
}
