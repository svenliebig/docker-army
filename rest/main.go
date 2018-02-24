package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type Model struct {
	Wert string `json:"wert,omitempty"`
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/", GetSomething).Methods("GET")
	router.HandleFunc("/{number}", GetSomethingWithNumber).Methods("GET")

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
	originsOk := handlers.AllowedOrigins([]string{"http://localhost:3000"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(headersOk, originsOk, methodsOk)(router)))
}

func GetSomething(w http.ResponseWriter, r *http.Request) {
	var modelValue Model
	modelValue = Model{Wert: "Hello go"}
	fmt.Printf("\n[%s] - GetSomething", time.Now())
	json.NewEncoder(w).Encode(modelValue)
}

func GetSomethingWithNumber(w http.ResponseWriter, r *http.Request) {
	var modelValue Model
	fmt.Printf("\n[%s] - GetSomethingWithNumber", time.Now())
	modelValue = Model{Wert: "Hello go +" + mux.Vars(r)["number"]}
	json.NewEncoder(w).Encode(modelValue)
}
