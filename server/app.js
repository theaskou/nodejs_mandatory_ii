import express from 'express';

const app = express();

app.use(express.json());

import 'dotenv/config';

import session from 'express-session';

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 
  }
}));

import helmet from "helmet";
app.use(helmet());

import loginRouter from './routers/loginRouter.js';
app.use(loginRouter);

import signUpRouter from './routers/signUpRouter.js';
app.use(signUpRouter);

import landingpageRouter from './routers/landingpageRouter.js';
app.use(landingpageRouter);

import logoutRouter from './routers/logoutRouter.js';
app.use(logoutRouter);



const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));