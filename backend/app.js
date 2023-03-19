/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import cors from 'cors';

import * as dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/Router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const port = process.env.PORT;

// config Json and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
// Uploads directoryS
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// DB connections
import('./config/db.js');
// routes

app.use(router);

app.listen(port, () => {
  console.log(`app rodando na porta ${port}`);
});
