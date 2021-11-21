let chatContainer = document.querySelector('.chatContainer')
let userInput = document.querySelector('#inputMsg')
let inputBox = document.querySelector('.userInput')
let sendBtn = document.querySelector('#sendMsg')

const messages = {
   msg1: "Olá!",
   msg2: "Vamos começar o processo de abertura da sua conta.",
   msg3: "Como deseja ser chamado?",
   msg4: 'Agora, gostariamos do seu nome completo.',
   msg5: 'Qual seu  primeiro nome?',
   msg6: 'E sobrenome(s)?',
   msg7: 'Conte-nos qual sua idade!',
   msg8: `Para continuar você precisa estar de acordo com os nossos Termos de Uso e política de privacidade <a href="#" target="_blank" class="terms">ABRIR TERMOS DE USO</a>`,
   msg9: 'Agora, qual é o número do seu CPF?',
   msg10: 'Insira um CPF válido!',
   msg11: 'Otimo!, informe-nos um e-mail para te atualizar sobre seu cadastro.',
   msg12: 'Estamos quase lá!, informe um número de telefone para contato.',
   msg13: 'gostariamos de uma foto para apresentarmos no seu perfil!',
   msg131: 'informe um link de acesso remoto a sua foto (Temporário)',
   msg14: 'Agora, digite uma senha númerica de 8 dígitos para acessar sua conta',
   msg15: 'Para finalizar, digite uma palavra-chave ou frase para usarmos no caso de perda de senha de acesso',
}

let userInfos = {}

function scrollDown(){
   if(chatContainer.scrollHeight >= 0.8 * window.innerHeight){
      let chatHeight = chatContainer.scrollHeight
      chatContainer.scroll({
         top: chatHeight,
         behavior: "smooth"
      })
   }
}

function sendUserMsg(callback){
   if(userInput.value.length > 0){
      let userMsg = document.createElement('div')
      userMsg.classList.add('userMsg')
      if(callback == getPassword){
         for (const i of userInput.value) {
            userMsg.innerText += `*`
         }
      }else{
         userMsg.innerHTML = `${userInput.value}`
      }
      chatContainer.appendChild(userMsg)
      callback(userInput.value)
      userInput.value = ''
      scrollDown()
   }
}

function alertUser(){
   inputBox.style.border = '1px solid red'
}

function sendSistemMsg(msg){
   let sistemMsg = document.createElement('div')
   sistemMsg.classList.add('sistemMsg')
   sistemMsg.innerHTML = `${msg}`
   chatContainer.appendChild(sistemMsg)
   userInput.value = ''
   scrollDown()
}

function sendSistemMessages1(){
   setTimeout(function(){
      return sendSistemMsg(messages.msg1)
   }, 1000)
   
   setTimeout(function() {
      return sendSistemMsg(messages.msg2)
   }, 2000)

   setTimeout(function(){
      return sendSistemMsg(messages.msg3)
   }, 3000)
}

const handleKeyup1 = (e) => {
   if(e.which === 13){sendUserMsg(getName)}
}
const handleKeyup2 = (e) => {
   if(e.which === 13){sendUserMsg(getFname)}
}
const handleKeyup3 = (e) => {
   if(e.which === 13){sendUserMsg(getLname)}
}
const handleKeyup4 = (e) => {
   if(e.which === 13){sendUserMsg(getAge)}
}
const handleKeyup5 = (e) => {
   if(e.which === 13){sendUserMsg(getConfirm)}
}
const handleKeyup6 = (e) => {
   if(e.which === 13){sendUserMsg(getCpf)}
}
const handleKeyup7 = (e) => {
   if(e.which === 13){sendUserMsg(getEmail)}
}
const handleKeyup8 = (e) => {
   if(e.which === 13){sendUserMsg(getPhone)}
}
const handleKeyup9 = (e) => {
   if(e.which === 13){sendUserMsg(getAvatar)}
}
const handleKeyup10 = (e) => {
   if(e.which === 13){sendUserMsg(getPassword)}
}
const handleKeyup11 = (e) => {
   if(e.which === 13){sendUserMsg(getRecovery)}
}

const handleClick1 = () => {
   sendUserMsg(getName)
}
const handleClick2 = () => {
   sendUserMsg(getFname)
}
const handleClick3 = () => {
   sendUserMsg(getLname)
}
const handleClick4 = () => {
   sendUserMsg(getAge)
}
const handleClick5 = () => {
   sendUserMsg(getConfirm)
}
const handleClick6 = () => {
   sendUserMsg(getCpf)
}
const handleClick7 = () => {
   sendUserMsg(getEmail)
}
const handleClick8 = () => {
   sendUserMsg(getPhone)
}
const handleClick9 = () => {
   sendUserMsg(getAvatar)
}
const handleClick10 = () => {
   sendUserMsg(getPassword)
}
const handleClick11 = () => {
   sendUserMsg(getRecovery)
}

function getName(value){
   userInfos.username = value
   userInput.removeEventListener('keyup', handleKeyup1)
   sendBtn.removeEventListener('click', handleClick1)
   requestFname()
}

function requestFname(){
   const request1 = setTimeout(function(){
      sendSistemMsg(messages.msg4)
      clearTimeout(request1)
   },1000)
   const request2 = setTimeout(function(){
      sendSistemMsg(messages.msg5)
      userInput.setAttribute('placeholder', 'Digite seu primeiro nome')
      userInput.addEventListener('keyup', handleKeyup2)
      sendBtn.addEventListener('click', handleClick2)
      clearTimeout(request2)
   }, 2000)
}

function getFname(value){
   userInfos.personal = {}
   userInfos.personal.fname = value
   userInput.removeEventListener('keyup', handleKeyup2)
   sendBtn.removeEventListener('click', handleClick2)
   requestLname()
}

function requestLname(){
   const request = setTimeout(function(){
      sendSistemMsg(messages.msg6)
      userInput.setAttribute('placeholder', 'Digite seu(s) sobrenome(s)')
      userInput.addEventListener('keyup', handleKeyup3)
      sendBtn.addEventListener('click', handleClick3)
      clearTimeout(request)
   }, 1000)
}

function getLname(value){
   userInfos.personal.lname = value
   userInput.removeEventListener('keyup', handleKeyup3)
   sendBtn.removeEventListener('click', handleClick3)
   requestAge()
}

function requestAge(){
   const request = setTimeout(function(){
      sendSistemMsg(messages.msg7)
      userInput.setAttribute('placeholder', 'Digite sua idade')
      userInput.addEventListener('keyup', handleKeyup4)
      sendBtn.addEventListener('click', handleClick4)
      clearTimeout(request)
   }, 1000)
}

function getAge(value){
   userInfos.personal.age = value
   userInput.removeEventListener('keyup', handleKeyup4)
   sendBtn.removeEventListener('click', handleClick4)
   requestConfirm()
}

function requestConfirm(){
   const request = setTimeout(function(){
      sendSistemMsg(messages.msg8)
      userInput.setAttribute('placeholder', 'Digite \"Ok\" para continuar')
      userInput.addEventListener('keyup', handleKeyup5)
      sendBtn.addEventListener('click', handleClick5)
      clearTimeout(request)
   }, 1000)
}

function getConfirm(){
   userInput.removeEventListener('keyup', handleKeyup5)
   sendBtn.removeEventListener('click', handleClick5)
   requestCpf()
}

function requestCpf(){
   const request = setTimeout(function(){
      sendSistemMsg(messages.msg9)
      userInput.setAttribute('placeholder', 'Digite seu CPF')
      userInput.addEventListener('keyup', handleKeyup6)
      sendBtn.addEventListener('click', handleClick6)
      clearTimeout(request)
   }, 1000)
}

function getCpf(value){
   if(value.length === 11){
      userInfos.cpf = value
      userInput.removeEventListener('keyup', handleKeyup6)
      sendBtn.removeEventListener('click', handleClick6)
      requestEmail()
   }else{
      sendSistemMsg(messages.msg10)
   }
}

function requestEmail(){
   const request = setTimeout(function(){
      sendSistemMsg(messages.msg11)
      userInput.setAttribute('placeholder', 'Digite seu E-mail')
      userInput.setAttribute('type', 'email')
      userInput.addEventListener('keyup', handleKeyup7)
      sendBtn.addEventListener('click', handleClick7)
      clearTimeout(request)
   }, 1000)
}

function getEmail(value){
   userInfos.email = value
   userInput.removeEventListener('keyup', handleKeyup7)
   sendBtn.removeEventListener('click', handleClick7)
   requestPhone()
}

function requestPhone(){
   const request = setTimeout(function(){
      sendSistemMsg(messages.msg12)
      userInput.setAttribute('placeholder', 'Digite seu número')
      userInput.setAttribute('type', 'number')
      userInput.addEventListener('keyup', handleKeyup8)
      sendBtn.addEventListener('click', handleClick8)
      clearTimeout(request)
   }, 1000)
}

function getPhone(value){
   userInfos.phone = value
   userInput.removeEventListener('keyup', handleKeyup8)
   sendBtn.removeEventListener('click', handleClick8)
   requestAvatar()
}

function requestAvatar(){
   const request1 = setTimeout(function(){
      sendSistemMsg(messages.msg13)
      clearTimeout(request1)
   }, 1000)
   const request2 = setTimeout(function(){
      sendSistemMsg(messages.msg131)
      userInput.setAttribute('placeholder', 'Digite um link para sua foto')
      userInput.setAttribute('type', 'text')
      userInput.addEventListener('keyup', handleKeyup9)
      sendBtn.addEventListener('click', handleClick9)
      clearTimeout(request2)
   }, 2000)
}

function getAvatar(value){
   userInfos.personal.avatar = value
   userInput.removeEventListener('keyup', handleKeyup9)
   sendBtn.removeEventListener('click', handleClick9)
   requestPassword()
}

function requestPassword(){
   const request = setTimeout(function(){
      sendSistemMsg(messages.msg14)
      userInput.setAttribute('placeholder', 'Digite uma senha')
      userInput.setAttribute('type', 'password')
      userInput.setAttribute('maxlength', '8')
      userInput.addEventListener('keyup', handleKeyup10)
      sendBtn.addEventListener('click', handleClick10)
      clearTimeout(request)
   }, 1000)
}

function getPassword(value){
   userInfos.pass = value
   userInput.removeEventListener('keyup', handleKeyup10)
   sendBtn.removeEventListener('click', handleClick10)
   requestRecovery()
}

function requestRecovery(){
   const request = setTimeout(function(){
      sendSistemMsg(messages.msg15)
      userInput.setAttribute('placeholder', 'Digite uma frase para recuperação')
      userInput.setAttribute('type', 'text')
      userInput.removeAttribute('maxlength')
      userInput.addEventListener('keyup', handleKeyup11)
      sendBtn.addEventListener('click', handleClick11)
      clearTimeout(request)
   }, 1000)
}

function getRecovery(value){
   userInfos.recovery = value
   userInput.removeEventListener('keyup', handleKeyup11)
   sendBtn.removeEventListener('click', handleClick11)

   console.log(userInfos)

   // ending
}

function initChat(){
   sendSistemMessages1()
   setTimeout(function(){
      userInput.addEventListener('keyup', handleKeyup1)
      sendBtn.addEventListener('click', handleClick1)
   }, 3000)
}

initChat()