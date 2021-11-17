const authorization = async (req, res, next) => {
  const token = req.headers.authorization
    if (token === process.env.API_TOKEN) {
      next()
    } else {
      res.json({ state: 'unauthorized', message: 'JWT Token  is invalid or Expired.' })
  }
}
module.exports = authorization