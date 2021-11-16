const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


// Routes
const AuthRoute = require('../app/routes/auth.route')
const UserRoute = require('../app/routes/user.route')

// Middleware

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.options('*', cors());


// Assign Routes
app.use(AuthRoute);
app.use(UserRoute);


module.exports = app