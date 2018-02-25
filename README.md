# Run

## With Docker

### Build and execute front end

`cd server`
`docker build -t name/frontend .`
`docker run -p 3000:8080 -d name/frontend`

### Build and execute rest service

`cd rest`
`docker build -t name/rest-service .`
`docker run -p 4000:8080 -d name/rest-service`

## Without Docker

### Build and execute front end

#### With Yarn

`cd server && yarn && yarn start -- 3000`

#### With NPM

`cd server && npm install && npm start -- 3000`

### Build and execute rest service

First change port in `main.go` file from 8080 to 4000. Then:

`cd rest && go build && ./rest`

### Open

Navigate to `localhost:3000` and open console, there should be a response from the docker api.