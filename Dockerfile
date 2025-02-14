FROM golang:1.22

WORKDIR ${GOPATH}/avito-shop/

COPY . .

RUN go build -o /build ./cmd/main.go \
    && go clean -cache -modcache

EXPOSE 8080

CMD ["/build"]
