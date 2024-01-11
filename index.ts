import express from 'express';
import 'dotenv/config';
import connectDb from "./config/db";
import * as jwt from 'jsonwebtoken';
import morgan from 'morgan';

import linkRoutes from './routes/links.routes';

require('dotenv').config();

const app = express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

const port = process.env.PORT || 3000;
const mongo_uri = process.env.MONGO_URI;
const base = process.env.BASE;

connectDb(mongo_uri).catch((error) => {
    console.error(`Se produjo un error contactando a la DB: `, error);
});

app.get('/', (req, res) => {
    res.send('This is a test for my API');
});

app.use('/links', linkRoutes);

app.listen(port, () => {
    console.info(`Service up and running on: ${base}:${port}`);
});