.PHONY: migrateup migratedown

# Paths and Environments
GOPATH := $(shell go env GOPATH)
PROJECT_ROOT := $(shell pwd)

# Migration Tools
MIGRATE := $(GOPATH)/bin/migrate
DB_PATH := $(PROJECT_ROOT)/internal/database/db.db
MIGRATION_PATH := $(PROJECT_ROOT)/internal/database/migrations

dbpath:
	echo $(MIGRATION_PATH)

migrate-up:
	$(MIGRATE) --path $(MIGRATION_PATH) --database "sqlite3://$(DB_PATH)" -verbose up

migrate-down:
	$(MIGRATE) --path $(MIGRATION_PATH) --database "sqlite3://$(DB_PATH)" -verbose down

