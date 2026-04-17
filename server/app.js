import express from 'express';

const app = express();

import frontpageRouter from './routers/frontpageRouter.js';
app.use(frontpageRouter);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));