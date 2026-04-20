import db from './connection.js';
import seedData from "./seedData.js";
import pwdHashing from '../utils/passwordHashing.js';

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name VARCHAR(60) NOT NULL UNIQUE,
    pwd VARCHAR(100) NOT NULL,
    verified INTEGER NOT NULL DEFAULT 0
    );
`);

const seed = db.prepare(`INSERT INTO users (user_name, pwd, verified) VALUES (?, ?, ?)`);

for (const user of seedData.users) {
    const hashedPwd = await pwdHashing(user.pwd);
    seed.run(user.user_name, hashedPwd, user.verified ? 1 : 0);
}





