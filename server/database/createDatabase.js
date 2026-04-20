import db from './connection.js';
import seedData from "./seedData.js";

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name VARCHAR(60) NOT NULL UNIQUE,
    pwd VARCHAR(100) NOT NULL,
    verified INTEGER NOT NULL DEFAULT 0
    );
`);

seedData.users.forEach((user) => { 
    db.prepare(`
        INSERT INTO users (user_name, pwd, verified) VALUES ('${user.user_name}', '${user.pwd}', ${user.verified ? true : false})`)
        .run()
});





