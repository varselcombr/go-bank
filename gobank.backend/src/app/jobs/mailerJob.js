import mailer from '../lib/mailer';

export default {
  key: 'mailerJob',

  async handle(data) {
    const {
      name, from, fromName, to, subject, html,
    } = data.data;

    await mailer.sendMail({
      to: `${name} < ${to} >`,
      from: `${fromName} <${from}>`,
      subject,
      html,
    });
  },
};
