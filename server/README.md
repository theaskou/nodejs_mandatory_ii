# nodejs_mandatory_ii

An authentication system assignment built with Node.js and Express.

## Tech Stack

| Package | Purpose |
|---|---|
| [Express v5](https://expressjs.com/) | Web framework |
| [bcrypt](https://github.com/kelektiv/node.bcrypt.js) | Password hashing |
| [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) | SQLite database |
| [express-session](https://github.com/expressjs/session) | Session management |
| [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit) | Rate limiting |
| [helmet](https://helmetjs.github.io/) | Security headers |
| [nodemailer](https://nodemailer.com/) | Email sending |
| [dotenv](https://github.com/motdotla/dotenv) | Environment variables |

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

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables by creating a `.env` file in the root directory. 
See the .env.example file for what to include.

### Running the App

```bash
node app.js
```

## How to run the current version of the App

### Seeding the database
Create a seedData.js file in /server/database. 
See the seedData.js.example for how to populate the tables.

### Create the Database
Create the seedData.js file before creating the Database (see above).
run the createDatabase file:
```bash
node createDatabase.js
```

### Email verifications

Nodemailer is a temporary first version solution for verifying a user account. 
To test it, open the link to the Ethereal email simulation in the terminal, when a user is created successfully. Follow the link in the email to verify the account.