const Router = require('express').Router();
const AuthModel = require('../models/auth.model');
const UserModel = require('../models/user.model')
const jwt = require('../middleware/jwt');
const Bull = require('../lib/bull');


Router.post('/v1/auth/register', async (req, res) => {
  try {
    const user = await AuthModel.register(req.body);
    const jwToken = jwt.sign({ user: user.user_id });

    return res.status(200).json({ user, jwToken });
  } catch (error) {
    return res.status(400).send(error);
  }
});

Router.get('/v1/auth/login', async (req, res) => {
    const [hashName, hash] = req.headers.authorization.split(' ');
      const [email, pass] = Buffer.from(hash, 'base64').toString().split(':');

    try {
      const user = await AuthModel.login({ email, pass });

        if (!user) {
          return res.status(401).json({ state: 'unauthorized', message: 'Incorrect email or password.' });
        }

    const jwToken = jwt.sign({ user: user.user_id });
    const { Personal } = await UserModel.me(user.user_id);
    const date = new Date();
        
    Bull.add({
        name: `${Personal[0].personal_fname} ${Personal[0].personal_lname}`,
        from: 'noreply@gobank.me',
        fromName: 'Go Bank Instituição de Pagamentos S.A',
        to: email,
        subject: `${Personal[0].personal_fname}, um novo login foi feito em sua conta GoBank!`,
        html: `
          Olá ${Personal[0].personal_fname} ${Personal[0].personal_lname}, parece que um novo login acaba de ser efetuado em sua conta  GoBank!
            <br>
            <br>
              Cidade: <b>Santa Rosa.</b>
            <br>
              Horario: <b>${date.getHours()}:${date.getMinutes()}</b>.
            <br>
              Ip: 
            <br>
            <br>
        Se foi você, apenas desconsidere este email.<br>
        Atenciosamente, <b>Equipe GoBank</b>
      `
    })

    return res.status(200).json({ user, jwToken });
  } catch (error) {
    return res.status(400).send(error);
  }
});


module.exports = Router;