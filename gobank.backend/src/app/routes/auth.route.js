const Router = require('express').Router();
const AuthModel = require('../models/auth.model.js');
const jwt = require('../middleware/jwt.js')


Router.post('/v1/auth/register', async (req, res) => {
  try {
    const user = await AuthModel.register(req.body)
    const jwToken = jwt.sign({user: user.user_id})
    
    return  res.status(200).json({user, jwToken})
    
  } catch (error) {
    return  res.status(400).send(error)
  }
})

Router.get('/v1/auth/login', async (req, res) => {
    const [hashName, hash] = req.headers.authorization.split(' ')
    const [email, pass] = Buffer.from(hash, 'base64').toString().split(':')

    try {
      const user = await AuthModel.login({email, pass})

      if (!user) {
        return res.status(401).json({state: 'unauthorized', message: 'Incorrect email or password.'})
      }

      const jwToken = jwt.sign({user: user.user_id})
      return  res.status(200).json({user, jwToken})
      
    } catch (error) {
      return res.status(400).send(error)
    }
});

module.exports = Router