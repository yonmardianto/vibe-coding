# Project Implementation Plan: Elysia JS + Drizzle + MySQL

## Overview
This document outlines the high-level design and steps to initialize and build a scalable REST API using Bun, Elysia JS, Drizzle ORM, and a local MySQL database. It is intended to guide a developer, junior programmer, or AI agent through the implementation process sequentially and logically.

## Technology Stack
- **Runtime & Package Manager:** Bun
- **Web Framework:** Elysia JS (Fast, TypeScript-first web framework)
- **ORM:** Drizzle ORM (Type-safe and lightweight ORM)
- **Database:** Local MySQL server (No Docker)

## 1. Project Initialization & Dependencies
1. Initialize a new Bun project in the current directory (`bun init` or `bun create elysia .`).
2. Install the necessary dependencies:
   - **Core:** `elysia`, `drizzle-orm`, `mysql2` (MySQL driver)
   - **Dev Tools:** `drizzle-kit` (for managing migrations), `@types/bun`

## 2. Directory Structure & Architecture
Adopt a feature-based, modular architecture. This keeps the application simple initially but allows it to scale easily as the codebase grows.

```text
├── src/
│   ├── config/          # Environment variables and central configuration
│   │   └── db.ts        # Drizzle client and MySQL connection initialization
│   ├── db/
│   │   └── schema.ts    # Drizzle schema definitions (tables)
│   ├── modules/         # Feature modules (e.g., users, posts)
│   │   └── user/
│   │       ├── user.controller.ts # Handles HTTP requests and responses
│   │       ├── user.service.ts    # Contains business logic and DB calls
│   │       └── user.routes.ts     # Elysia route definitions for this module
│   └── index.ts         # Main entry point for the Elysia application
├── drizzle.config.ts    # Drizzle Kit configuration file
├── .env                 # Environment variables (DB credentials)
├── package.json
└── tsconfig.json
```

## 3. Database Configuration (Local MySQL)
1. Ensure the local MySQL service is running on your machine.
2. Create a new database for the project via your preferred MySQL client (e.g., `CREATE DATABASE vibe_db;`).
3. Set up the `.env` file to hold the connection string:
   ```env
   DATABASE_URL="mysql://username:password@localhost:3306/vibe_db"
   ```

## 4. Drizzle ORM Setup
1. Define the initial database schema in `src/db/schema.ts` (e.g., a simple `users` table).
2. Configure `drizzle.config.ts` to link to your schema and database credentials for migrations.
3. Use `drizzle-kit` to push the schema changes to the local MySQL database.

## 5. Application Flow Implementation
1. **Database Setup:** Implement `src/config/db.ts` to initialize the database connection pool using `mysql2` and `drizzle-orm`.
2. **Domain Logic:** Build out a module (e.g., the `user` module):
   - **Service:** Create functions to interact with the database (find users, create user).
   - **Controller:** Create functions that use the Service and format the API response.
   - **Routes:** Create an Elysia instance for the module and map route paths (e.g., `GET /users`) to the Controller functions.
3. **Server Initialization:** In `src/index.ts`, start the main Elysia server, register the module routes, and listen on a specific port (e.g., 3000).

## 6. Execution Steps for the Developer/Agent
To begin implementation, follow these strict ordered steps:
1. Initialize the Bun project and `package.json`.
2. Install the required dependencies (`elysia`, `drizzle-orm`, `mysql2`, `drizzle-kit`).
3. Write the necessary configurations (`.env`, `drizzle.config.ts`, `src/config/db.ts`).
4. Define your first table in `src/db/schema.ts`.
5. Sync the database using `drizzle-kit push`.
6. Implement the modular directory structure and a basic "Hello World" or "User CRUD" module.
7. Run the development server and verify the API with local requests.
