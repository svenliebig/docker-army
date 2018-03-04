package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"runtime"
	"time"

	"github.com/sly321/repository"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type Model struct {
	Wert string `json:"wert,omitempty"`
}

type GoalResponseModel struct {
	Id          int    `json:"id,omitempty"`
	Name        string `json:"name,omitempty"`
	Description string `json:"description,omitempty"`
	Period      string `json:"period,omitempty"`
}

type DatabaseStatus struct {
	Status string `json:"status,omitempty"`
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/get/goals", GetGoals).Methods("GET")
	router.HandleFunc("/smoketest", Smoketest).Methods("GET")

	// router.HandleFunc("/{number}", GetSomethingWithNumber).Methods("GET")

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
	originsOk := handlers.AllowedOrigins([]string{"http://localhost:3000"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	fmt.Println("Started")
	log.Fatal(http.ListenAndServe(":4000", handlers.CORS(headersOk, originsOk, methodsOk)(router)))
}

func Smoketest(w http.ResponseWriter, r *http.Request) {
	start := time.Now()
	repo := repository.CreateRepository("")

	dbOnline := repo.IsDatabaseOnline()
	dbStatus := fmt.Sprintf("Database Online: %s, Response time: [%.5fs] Seconds", dbOnline, time.Since(start).Seconds())

	json.NewEncoder(w).Encode(DatabaseStatus{dbStatus})
}

func GetGoals(w http.ResponseWriter, r *http.Request) {
	start := time.Now()

	repo := repository.CreateRepository("")
	goals := repo.GetAllGoals()

	response := make([]GoalResponseModel, 0, len(goals))

	for _, goal := range goals {
		response = append(response, GoalResponseModel{goal.Id, goal.Name, goal.Description, goal.Period})
	}

	json.NewEncoder(w).Encode(response)

	fmt.Printf("Total Read and Response Time: [%.5fs]\n", time.Since(start).Seconds())
	response = nil
	goals = nil
	runtime.GC()
}

// func GetSomethingWithNumber(w http.ResponseWriter, r *http.Request) {
// 	var modelValue Model
// 	fmt.Printf("\n[%s] - GetSomethingWithNumber", time.Now())
// 	modelValue = Model{Wert: "Hello go +" + mux.Vars(r)["number"]}
// 	json.NewEncoder(w).Encode(modelValue)
// }
