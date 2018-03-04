
#build stage
FROM golang:alpine AS builder
WORKDIR /go/src/app
COPY . .

# RUN apk add git mercurial 
# RUN apk add --no-cache git mercurial 

ENV GOPATH=/go/src/app
# RUN ls -la
WORKDIR /go/src/app/src/github.com/sly321/rest
# RUN go get -d -v ./...
RUN go install

# RUN apk del git mercurial

#final stage
FROM alpine:latest
RUN apk --no-cache add ca-certificates
COPY --from=builder /go/src/app/bin/rest /app
ENTRYPOINT ./app
LABEL Name=rest Version=0.0.1
EXPOSE 4000
