const Router = require('express').Router();
const UserModel = require('../models/user.model');
const jwt = require('../middleware/jwt.js');
const userModel = require('../models/user.model');

const SilentAuth = async (req, res, next) => {
  const [, token] = req.headers.authorization.split(' ');

  try {
    const payload = await jwt.verify(token);
    const user = await UserModel.me(payload.user);

    if (!user) {
      return res.status(401).json({ state: 'unauthorized', message: 'JWT Token  is invalid or Expired.' });
    }
    req.auth = payload.user;

    next();
  } catch (error) {
    return res.status(401).json({ state: 'unauthorized', message: 'JWT Token  is invalid or Expired.' });
  }
};

Router.get('/v1/user/data', SilentAuth, async (req, res) => {
  try {
    const user = await userModel.me(req.auth);
    res.status(200).json(user);
  } catch (error) {
    res.send(error);
  }
});

module.exports = Router;
