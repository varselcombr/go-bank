const bull = require('./app/lib/bull');
const MailingTask = require('./app/task/mailer.job')

bull.process(MailingTask.handle);



bull.on('failed', (job, err) => {
  console.log('Job is Failed: ', MailingTask.key)
})