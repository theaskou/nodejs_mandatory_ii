import express from 'express';
import db from './database/connection.js'

const app = express();

app.use(express.json());

import frontpageRouter from './routers/frontpageRouter.js';
app.use(frontpageRouter);




const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));