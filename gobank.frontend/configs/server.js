const express = require('express');
const path = require('path');
const app = express();


// Routes 
const UserExperience = require('../routes/promote.route')

app.use(express.static(path.join(__dirname + '../../public')))
app.use(UserExperience)

module.exports = app