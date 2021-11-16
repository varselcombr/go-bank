const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.token.split(' ')[1];
    if (process.env.API_TOKEN === token) {
      next();
    }
  } catch (error) {
    res.status(401).json({ state: 'unauthorized', message: 'Your API Token is Expired or Invalid.' });
  }
};

module.exports = checkAuth()