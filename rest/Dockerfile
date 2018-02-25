
#build stage
FROM golang:alpine AS builder
WORKDIR /go/src/app
COPY . .

# RUN apk add git mercurial 
RUN apk add --no-cache git mercurial 

RUN go get -d -v ./...
RUN go install -v ./...

# RUN apk del git mercurial

#final stage
FROM alpine:latest
RUN apk --no-cache add ca-certificates
COPY --from=builder /go/bin/app /app
ENTRYPOINT ./app
LABEL Name=rest Version=0.0.1
EXPOSE 8080
