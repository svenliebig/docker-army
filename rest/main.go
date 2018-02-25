package main

import (
	"database/sql"
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

var db sql.DB

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/", GetSomething).Methods("GET")
	router.HandleFunc("/{number}", GetSomethingWithNumber).Methods("GET")

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
	originsOk := handlers.AllowedOrigins([]string{"http://localhost:3000"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	fmt.Printf("serve")
	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(headersOk, originsOk, methodsOk)(router)))

	connStr := "postgres://postgres:password@localhost:5432?sslmode=verfiy-full"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}

	db.Query("SELECT *")
	fmt.Printf("%d Open Connections", db.Stats().OpenConnections)
}

func GetSomething(w http.ResponseWriter, r *http.Request) {
	var modelValue Model
	modelValue = Model{Wert: "Hello go"}
	fmt.Printf("\n[%s] - GetSomething", time.Now())
	json.NewEncoder(w).Encode(modelValue)

	fmt.Printf("%d Open Connections", db.Stats().OpenConnections)
}

func GetSomethingWithNumber(w http.ResponseWriter, r *http.Request) {
	var modelValue Model
	fmt.Printf("\n[%s] - GetSomethingWithNumber", time.Now())
	modelValue = Model{Wert: "Hello go +" + mux.Vars(r)["number"]}
	json.NewEncoder(w).Encode(modelValue)
}
