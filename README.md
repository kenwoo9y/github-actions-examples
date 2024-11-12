# CI/CD Workflow Guide

This repository uses GitHub Actions to automate code quality checks for each language and framework. On creating a Pull Request, the following workflows are triggered, running tests, linters, and formatters.

## Workflow Overview

| Language/Framework          | GitHub Action File       | Testing Tools               | Linter                  | Formatter                |
|-----------------------------|--------------------------|-----------------------------|-------------------------|--------------------------|
| Go                          | `pr-go-ci.yml`           | `go test`                   | `go vet`                | `go fmt`                 |
| Python                      | `pr-python-ci.yml`       | `pytest`, `pytest-cov`      | `Ruff`                  | `Ruff` (with formatting) |
| Ruby on Rails (Ruby)                       | `pr-ruby-ci.yml`         | `RSpec`                     | `Rubocop`               | `Rubocop`                |
| Spring Boot (Java)                        | `pr-java-ci.yml`         | `JUnit`, `Jacoco`           | `Spotless`, `Checkstyle`| `Spotless`               |
| React (TypeScript) | `pr-react-ci.yml`     | `Vitest`                    | `ESLint`                | `Prettier`               |

## Details for Each Language/Tool

### 1. **Go**
For Go, we use the following tools to ensure code quality:
- **Testing**: `go test`  
  - A standard testing tool for unit tests and coverage measurement.
- **Linter**: `go vet`  
  - Identifies potential bugs and deprecated code usage.
- **Formatter**: `go fmt`  
  - Automatically formats the code to follow Go conventions.

### 2. **Python**
In Python, the following tools are used:
- **Testing**: `pytest`, `pytest-cov`  
  - `pytest` is a flexible testing framework, and `pytest-cov` provides coverage measurement.
- **Linter/Formatter**: `Ruff`  
  - A fast Python linter with built-in formatting capabilities.

### 3. **Ruby on Rails (Ruby)**
For Ruby projects, we use:
- **Testing**: `RSpec`  
  - A popular testing framework for Ruby.
- **Linter/Formatter**: `Rubocop`  
  - Checks code quality and automatically formats the code.

### 4. **Spring Boot (Java)**
Java projects use the following tools:
- **Testing**: `JUnit`, `Jacoco`  
  - `JUnit` is a standard testing framework, while `Jacoco` measures code coverage.
- **Linter/Formatter**: `Spotless`, `Checkstyle`  
  - `Spotless` formats the code, and `Checkstyle` checks code style.

### 5. **React (JavaScript/TypeScript)**
For React projects (including TypeScript), we use:
- **Testing**: `Vitest`  
  - A fast testing framework well-suited for testing React components.
- **Linter**: `ESLint`  
  - Performs static analysis to identify code issues.
- **Formatter**: `Prettier`  
  - Standardizes code formatting to improve readability.

## How to Use

The GitHub Actions workflows are automatically triggered on Pull Requests. You can also manually run tests, linters, and formatters locally using the following commands.

### Running Locally

#### Go
```
$ go fmt ./...
$ go vet ./...
$ go test ./... -v -cover
```

#### Python
```
$ ruff check .
$ pytest --cov
```

#### Ruby on Rails (Ruby)
```
$ bundle exec rubocop
$ bundle exec rspec
```

#### Spring Boot (Java)
```
$ ./gradlew spotlessCheck
$ ./gradlew check
$ ./gradlew clean test jacocoTestReport
```

#### React (TypeScript)
```
$ yarn lint
$ yarn format
$ yarn coverage
```

## Additional Notes
- Coverage Thresholds  
For languages like Java, Go, and Python, coverage thresholds are set. Tests will fail if the coverage is below a specified level (e.g., 80%).
- Code Consistency  
Using formatters ensures that the code style is consistent, making reviews easier.
- Automated Checks  
With GitHub Actions, code checks are automatically performed on Pull Request creation. Developers should ensure to run tests, linters, and formatters locally to maintain high code quality.