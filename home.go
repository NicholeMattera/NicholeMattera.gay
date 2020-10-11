package main

import (
    "log"
    "math/rand"
    "net/http"
    "strings"
    "text/template"
    "time"
)

type HomeData struct {
    IncludeServiceWorker    bool
    Pride                   bool
}

func home() http.Handler {
    template, err := template.ParseFiles("./templates/home.gohtml")
    if err != nil {
        log.Fatal("Error: Unable to parse the template file. (Home)")
        return nil
    }

    return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
        data := HomeData {
            IncludeServiceWorker:   req.URL.Query().Get("offline") == "1",
            Pride:                  strings.HasSuffix(req.Host, "lgbt") || strings.HasSuffix(req.Host, "gay"),
        }

        // For the month of June and Oct 11th redirect all traffic to lgbt or gay TLD.
        if (time.Now().Month() == 6 || (time.Now().Month() == 10 && time.Now().Day() == 11)) && !data.Pride {
            rand.Seed(time.Now().UnixNano())

            tld := "lgbt"
            if rand.Intn(2) == 1 {
                tld = "gay"
            }

            http.Redirect(w, req, "https://nicholemattera." + tld + "/", http.StatusTemporaryRedirect)
            return
        }

        template.Execute(w, data)
    })
}
