import bull from '../lib/bull';

export default {
  async auth(req, res) {
    // Waiting for Gabriel's code.

    const user = {
      name: 'Vítor Ribeiro',
      from: 'noreply@gobank.com.br',
      fromName: 'GoBank',
      to: 'vitorsheik@gmail.com',
      subject: 'Novo login em sua conta GoBank!',
      html: 'Olá, <b>Vítor Ribeiro</b>.<br> Hoje ás 12:30 foi feito um login em sua conta em: <b>Santa Rosa</b> com o ip: <b>172.162.33.455</b>! <br>Se foi você apenas desconsidere está mensagem <br><br><br> Att: Equipe GoBank.',
    };

    await bull.add(user);
    return res.status(200).json({ isAuthenticated: true });
  },
};
