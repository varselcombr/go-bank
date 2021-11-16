const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_TOKEN


module.exports = {
  sign: sign = payload => jwt.sign(payload, secret, { expiresIn: 86400 }),
  verify: verify = token => jwt.verify(token, secret)
}