const Mailer = require('../lib/mailer');

module.exports = {
  key: 'MailingTask',

  async handle(data) {
      const { name, from, fromName, to, subject, html} = data.data;

      Mailer.sendMail({
        to: `${name} < ${to} >`,
        from: `${fromName} < ${from} >`,
        subject: subject,
        html: html
      })
  }
};