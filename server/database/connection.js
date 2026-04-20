import Database from 'better-sqlite3';

const db = new Database('./database/users.db');

export default db;