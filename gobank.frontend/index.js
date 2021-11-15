const express = require('express')
const app = express()

app.use(express.static(__dirname))

app.get("/", function(req, res){
   res.sendFile(__dirname + "/intro/intro.html")
})

app.get("/sign", function(req, res){
   res.sendFile(__dirname + "/sign/sign.html")
})

app.get("/login", function(req, res){
   res.sendFile(__dirname + "/login/login.html")
})

app.get("/login/first", function(req, res){
   res.sendFile(__dirname + "/firstAcess/first.html")
})

app.listen(3300)