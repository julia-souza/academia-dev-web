import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { errorHandling } from './utils/error.js';
import routesAlunos from './routes/routesAlunos.js';
import routesInstrutores from './routes/routesInstrutor.js';
import routesFichas from './routes/routesFichas.js';
import routesGruposMusculares from './routes/routesGruposMusculares.js';
import routesTiposExerxixios from './routes/routesTiposExercicios.js';
import connectDatabase from './database/database.js';
import routesAuthorization from './routes/routesAuthorization.js';

const app = express();

dotenv.config();

app.use(
  express.json(),
  cors(),
  cookieParser(),
  express.urlencoded({ extended: true }),
  errorHandling,
);
connectDatabase();

app.use('/api/alunos', routesAlunos);
app.use('/api/instrutores', routesInstrutores);
app.use('/api/fichas', routesFichas);
app.use('/api/gruposmusculares', routesGruposMusculares);
app.use('/api/tipoexercicios', routesTiposExerxixios);
app.use('/api/auth', routesAuthorization);

export default app;
