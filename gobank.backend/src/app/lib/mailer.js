const nodemailer = require('nodemailer');
const transport = require('../../config/transport');

module.exports = nodemailer.createTransport(transport);
