package db

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"testing"

	"github.com/golang-migrate/migrate/v4"
	_ "github.com/golang-migrate/migrate/v4/database/sqlite3"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	_ "github.com/mattn/go-sqlite3"
)

const (
	dbDriver   = "sqlite3"
	testDBName = "test.db"
)

var (
	testQueries *Queries
	testDB      *sql.DB
	dbSource    string
)

func runMigrations(dbPath string) error {
	migrationsPath, err := filepath.Abs(filepath.Join("..", "migrations"))
	if err != nil {
		return fmt.Errorf("failed to get migrations path: %w", err)
	}

	migrationsURL := "file://" + migrationsPath
	dbURL := fmt.Sprintf("sqlite3://%s", dbPath)

	m, err := migrate.New(migrationsURL, dbURL)
	if err != nil {
		return fmt.Errorf("failed to create migrate instance: %w", err)
	}

	if err := m.Up(); err != nil && err != migrate.ErrNoChange {
		return fmt.Errorf("failed to run migrations: %w", err)
	}

	return nil
}

func TestMain(m *testing.M) {
	tempDir, err := os.MkdirTemp("", "ephemeral-test-global-")
	if err != nil {
		log.Fatalf("failed to create temp directory: %v", err)
	}
	defer os.RemoveAll(tempDir)

	dbSource = filepath.Join(tempDir, testDBName)

	testDB, err = sql.Open(dbDriver, dbSource)
	if err != nil {
		log.Fatalf("failed to open test database: %v", err)
	}

	err = runMigrations(dbSource)
	if err != nil {
		log.Fatalf("failed to run migrations: %v", err)
	}

	testQueries = New(testDB)

	code := m.Run()
	os.Exit(code)
}
