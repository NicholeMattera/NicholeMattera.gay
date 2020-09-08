package main

import (
    "log"
    "math/rand"
    "net/http"
    "os"
    "path/filepath"
    "strings"
    "text/template"
    "time"
)

type TemplateData struct {
    IncludeServiceWorker    bool
    Pride                   bool
}

func fileExists(path string) bool {
    info, err := os.Stat(path)
    if os.IsNotExist(err) {
        return false
    }
    return !info.IsDir()
}

func main() {
    cwd, err := os.Getwd()
    if err != nil {
        log.Fatal("Error: Unable to get current working directory.")
    }

    mainTemplate, err := template.ParseFiles("./templates/main.tmpl")
    if err != nil {
        log.Fatal("Error: Unable to parse the template file.")
    }

    http.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
        // Serve static files.
        if fileExists("./static" + req.URL.Path) {
            path, err := filepath.Abs("./static" + req.URL.Path)
            if err == nil && strings.HasPrefix(path, cwd + "/static") {
                http.ServeFile(w, req, "./static" + req.URL.Path)
                return
            }
        }

        // Redirect all HTTP traffic to HTTPS.
        if req.TLS != nil {
            http.Redirect(w, req, "https://" + req.Host + "/", http.StatusPermanentRedirect)
        }

        // For the month of June redirect all traffic to lgbt or gay TLD.
        if time.Now().Month() == 6 && (!strings.HasSuffix(req.Host, "lgbt") || !strings.HasSuffix(req.Host, "gay")) {
            rand.Seed(time.Now().UnixNano())

            tld := "lgbt"
            if rand.Intn(2) == 1 {
                tld = "gay"
            }

            http.Redirect(w, req, "https://nicholemattera." + tld + "/", http.StatusTemporaryRedirect)
            return
        }

        // Templates & Redirect
        if req.URL.Path == "/" || req.URL.Path == "/offline" {
            data := TemplateData {
                IncludeServiceWorker:   req.URL.Path == "/",
                Pride:                  strings.HasSuffix(req.Host, "lgbt") || strings.HasSuffix(req.Host, "gay"),
            }

            mainTemplate.Execute(w, data)
        } else {
            http.Redirect(w, req, "https://" + req.Host + "/", http.StatusPermanentRedirect)
        }
    })

    log.Fatal(http.ListenAndServe(":8082", nil))
}
