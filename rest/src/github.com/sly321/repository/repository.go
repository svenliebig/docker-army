package repository

import (
	"database/sql"
	"runtime"

	_ "github.com/lib/pq"
)

type Repository struct {
	Url string
}

func CreateRepository(url string) Repository {
	repo := Repository{
		Url: url,
	}
	return repo
}

func (r *Repository) getConnectionString() string {
	return "postgresql://postgres:password@db/postgres?sslmode=disable"
	// return "postgresql://postgres:password@localhost?sslmode=disable"
}

type Goal struct {
	Id          int
	Name        string
	Description string
	Period      string
	Owner       int
}

func (r *Repository) IsDatabaseOnline() bool {
	db, err := sql.Open("postgres", r.getConnectionString())

	defer db.Close()

	if err != nil {
		panic(err)
	}

	err = db.Ping()

	if err != nil {
		return false
	} else {
		return true
	}
}

// select goals.id, goals.name, goals.description, goals.period from goals INNER JOIN users ON (users.id = goals.owner) where users.email = 'yomamail';

// func

func (r *Repository) GetAllGoals() []Goal {
	db, err := sql.Open("postgres", r.getConnectionString())
	defer db.Close()

	if err != nil {
		panic(err)
	}

	rows, err := db.Query("SELECT * FROM GOALS")
	defer rows.Close()

	if err != nil {
		panic(err)
	}

	var id, owner int
	var name, description, period string

	resultsArray := make([]Goal, 0, 10)

	for rows.Next() {
		err := rows.Scan(&id, &name, &description, &period, &owner)
		if err != nil {
			panic(err)
		}
		resultsArray = append(resultsArray, Goal{id, name, description, period, owner})
	}

	result := make([]Goal, len(resultsArray))
	copy(result, resultsArray)
	resultsArray = nil
	runtime.GC()

	return result
}

func (r *Repository) get(from string) {

}
