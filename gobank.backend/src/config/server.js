const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Routes
const AuthRoute = require('../app/routes/auth.route');
const UserRoute = require('../app/routes/user.route');
const Mailer = require('../app/routes/services/mailer.service')

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.options('*', cors());

// # Data Routes
app.use(AuthRoute);
app.use(UserRoute);

// # Service API Routes
app.use(Mailer);


module.exports = app;
