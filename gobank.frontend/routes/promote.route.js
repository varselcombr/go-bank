const Router =  require('express').Router();
const path = require('path')



Router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '../../public/intro/intro.html'))
})

Router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../../public/intro/intro.html"))
})

Router.get("/sign", (req, res) => {
  res.sendFile(path.join(__dirname + "../../public/sign/sign.html"))
})

Router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname + "../../public/login/login.html"))
})

Router.get("/login/first", (req, res) => {
  res.sendFile(path.join(__dirname + "../../public/firstAcess/first.html"))
})

module.exports = Router