import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Controllers
import userController from '../app/controllers/userController';

// Routes
import mailerRoute from '../app/routes/mailerRoute';

// Middleware
import checkAuth from '../app/middleware/checkAuth';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.options('*', cors());
app.use(checkAuth);
app.use('/v1/auth', userController.auth);
app.use('/v1/mailer/send', mailerRoute.sendMail);

export default app;
