import bull from '../lib/bull';

export default {
  async sendMail(req, res) {
    const {
      name, from, fromName, to, subject, html,
    } = req.body;

    const user = {
      name,
      from,
      fromName,
      to,
      subject,
      html,
    };

    await bull.add(user);
    return res.status(200).json({ state: 'success', data: user });
  },
};
