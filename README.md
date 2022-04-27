# unicons

### Generate types file
RUN go run types.go > types.ts

### Generate icon name file
RUN go run app.go > generator/cmd/genbundle/bundle.txt

