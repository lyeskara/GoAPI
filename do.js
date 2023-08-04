/*
FROM golang:latest

# setting the directory inside the container

WORKDIR /home/app

# copy dependencies into the container

COPY go.* ./

# downloading the dependencies 

RUN go mod download

# Copy rest of application

COPY . .

# Build the app

RUN go build -o /cmd/main .

# expose the port 

EXPOSE 8000

ENTRYPOINT [ "/cmd/main" ]
*/