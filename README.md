# nodejs_mandatory_ii

An authentication system assignment built with Node.js, Express, and Svelte.

## Overview

This project implements a full authentication system with a Svelte frontend and a Node.js/Express backend. It features user registration, login, session management, password hashing, email verification, rate limiting, and a SQLite3 database.

## Tech Stack

### Backend

| Package                                                                        | Purpose               |
| ------------------------------------------------------------------------------ | --------------------- |
| [Express v5](https://expressjs.com/)                                           | Web framework         |
| [bcrypt](https://github.com/kelektiv/node.bcrypt.js)                           | Password hashing      |
| [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)                   | SQLite database       |
| [express-session](https://github.com/expressjs/session)                        | Session management    |
| [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit) | Rate limiting         |
| [helmet](https://helmetjs.github.io/)                                          | Security headers      |
| [nodemailer](https://nodemailer.com/)                                          | Email sending         |
| [dotenv](https://github.com/motdotla/dotenv)                                   | Environment variables |

### Frontend

| Package                                                            | Purpose                 |
| ------------------------------------------------------------------ | ----------------------- |
| [Svelte v5](https://svelte.dev/)                                   | UI framework            |
| [Vite](https://vite.dev/)                                          | Build tool & dev server |
| [svelte-routing](https://github.com/EmilTholin/svelte-routing)     | Client-side routing     |
| [@zerodevx/svelte-toast](https://github.com/zerodevx/svelte-toast) | Toast notifications     |

The frontend dev server proxies `/api` requests to the backend running on `http://localhost:8080`.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/theaskou/nodejs_mandatory_ii.git
   cd nodejs_mandatory_ii
   ```

2. Install dependencies for both backend and frontend:

   ```bash
   npm install
   ```

3. Set up your environment variables by creating a `.env` file in both /server and /client directory.  
   See the `.env.example` file for what to include.

## Running the App

### Seeding the database

Create a `seedData.js` file in `/server/database`.  
See the `seedData.js.example` for how to populate the tables.

### Create the database

Create the `seedData.js` file before creating the database (see above), then run:

```bash
node createDatabase.js
```

### Start the backend

```bash
node app.js
```

### Start the frontend

```bash
# Development (with hot reload)
cd client
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Email Verification

Nodemailer is a temporary first version solution for verifying user accounts. To test it, open the Ethereal email simulation link printed in the terminal when a user is created successfully, and follow the verification link in the email. When clicked, the attribute "verified" on the user switches from false to true.

> **Note:** Verification tokens and user IDs are currently stored in a `Map` in memory and will not persist across server restarts.
