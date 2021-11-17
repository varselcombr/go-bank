const Queue = require('bull');
const redis = require('../../config/redis');
const Mailer = require('../task/mailer.job');

// Mailer Queue
const MailingTask = new Queue(Mailer.key, redis);


module.exports = MailingTask;