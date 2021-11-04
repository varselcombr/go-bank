import Mailer from '../lib/mailer';

export default {
  async mail(req, res) {
    const { user, email, message } = req.body;

    await Mailer.sendMail({
      from: 'Gobank <noreply@gobank.io>',
      to: 'Vítor Ribeiro <vitorsheik@varsel.com.br>',
      subject: 'Obrigado por criar a sua conta.',
      html: `Olá, ${user} seja bem vindo a GoBank.`,
    });

    return res.status(200).json({
      message: 'Email successfully sent',
      data: {
        user,
        email,
        message,
      },
    });
  },
};
