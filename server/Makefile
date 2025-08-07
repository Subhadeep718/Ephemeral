.PHONY: migrateup migratedown

# Load environment variables from .env file
ifneq ("$(wildcard .env)","")
    include .env
    export
endif

# Paths and Environments
GOPATH := $(shell go env GOPATH)
PROJECT_ROOT := $(shell pwd)

# Migration Tools
MIGRATE := $(GOPATH)/bin/migrate
DB_PATH := $(PROJECT_ROOT)/$(DB_PATH)
TEST_DB_PATH := $(PROJECT_ROOT)/internal/database/sqlc/test/test.db
MIGRATION_PATH := $(PROJECT_ROOT)/internal/database/migrations

dbpath:
	echo $(MIGRATION_PATH)

migrate-up:
	$(MIGRATE) --path $(MIGRATION_PATH) --database "sqlite3://$(DB_PATH)" -verbose up

migrate-down:
	$(MIGRATE) --path $(MIGRATION_PATH) --database "sqlite3://$(DB_PATH)" -verbose down

test-migrate-up:
	$(MIGRATE) --path $(MIGRATION_PATH) --database "sqlite3://$(TEST_DB_PATH)" -verbose up

test-migrate-down:
	$(MIGRATE) --path $(MIGRATION_PATH) --database "sqlite3://$(TEST_DB_PATH)" -verbose down
	
