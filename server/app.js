import express from 'express';
import db from './database/connection.js'

const app = express();

app.use(express.json());

import frontpageRouter from './routers/frontpageRouter.js';
app.use(frontpageRouter);

app.get('/users', (req, res) => {
    const users = db.prepare('SELECT * FROM users').all();
    res.send({ data: users });
});

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));