import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import testController from '../app/controllers/testController';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.options('*', cors());
app.use('/v1/mailer/send', testController.mail);

export default app;
