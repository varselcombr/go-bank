import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userController from '../app/controllers/userController';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.options('*', cors());
app.use('/gb/v1/auth', userController.auth);

export default app;
