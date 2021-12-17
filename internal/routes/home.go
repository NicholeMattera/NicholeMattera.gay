package routes

import (
	"log"
	"math/rand"
	"net/http"
	"strings"
	"text/template"
	"time"

	"git.nicholemattera.com/NicholeMattera/NicholeMattera.com/internal/models"
)

func shouldRedirect() bool {
	// Month of June (Pride Month) and October (LGBTQ+ History Month)
	return time.Now().Month() == 6 || time.Now().Month() == 10
}

func randomizeTLD() string {
	rand.Seed(time.Now().UnixNano())

	if rand.Intn(2) == 1 {
		return "gay"
	}

	return "lgbt"
}

// MakeHomeHandler make the route handler for the Home endpoint
func MakeHomeHandler() http.Handler {
	template, err := template.ParseFiles("./templates/home.gohtml")
	if err != nil {
		log.Fatal("Error: Unable to parse the template file. (Home)")
		return nil
	}

	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		data := models.HomeData{
			Pride: strings.HasSuffix(req.Host, "lgbt") || strings.HasSuffix(req.Host, "gay"),
		}

		if shouldRedirect() && !data.Pride {
			http.Redirect(w, req, "https://nicholemattera."+randomizeTLD()+"/", http.StatusTemporaryRedirect)
			return
		}

		template.Execute(w, data)
	})
}
