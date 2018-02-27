package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"runtime"
	"time"

	"./repository"

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
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/", GetSomething).Methods("GET")
	// router.HandleFunc("/{number}", GetSomethingWithNumber).Methods("GET")

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
	originsOk := handlers.AllowedOrigins([]string{"http://localhost:3000"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(headersOk, originsOk, methodsOk)(router)))
	fmt.Println("Started")
}

func GetSomething(w http.ResponseWriter, r *http.Request) {
	start := time.Now()

	repo := repository.CreateRepository("asdf")
	goals := repo.GetAllGoals()

	response := make([]GoalResponseModel, 0, len(goals))

	for _, goal := range goals {
		response = append(response, GoalResponseModel{goal.Id, goal.Name, goal.Description})
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
