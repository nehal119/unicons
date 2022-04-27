GO = GO111MODULE=on go

build-all: ## Build all Go files.
	@echo "building types.ts file"
	$(GO) run types.go > dist/types.ts
	@echo "building bundle.txt file"
	$(GO) run app.go > dist/bundle.txt
	@echo "building iconBundle.ts file"
	$(GO) run main.go > dist/iconBundle.ts