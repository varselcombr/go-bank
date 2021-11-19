let chatContainer = document.querySelector('.chatContainer')
let userInput = document.querySelector('#inputMsg')
let sendBtn = document.querySelector('#sendMsg')

const messages = {
   msg1: "Olá!",
   msg2: "Vamos começar o processo de abertura da sua conta.",
   msg3: "Como deseja ser chamado?",
   msg4: `Para continuar você precisa estar de acordo com os nossos Termos de Uso e política de privacidade <a href="#" class="terms">ABRIR TERMOS DE USO</a>`,
   msg5: 'Agora, qual é o número do seu CPF?'
}

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
      userMsg.innerHTML = `${userInput.value}`
      chatContainer.appendChild(userMsg)
      callback(userInput.value)
      userInput.value = ''
      scrollDown()
   }
}

function sendSistemMsg(msg){
   let sistemMsg = document.createElement('div')
   sistemMsg.classList.add('sistemMsg')
   sistemMsg.innerHTML = `${msg}`
   chatContainer.appendChild(sistemMsg)
   userInput.value = ''
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
   if(e.which === 13){sendUserMsg(getConfirm)}
}
const handleKeyup3 = (e) => {
   if(e.which === 13){sendUserMsg(getCpf)}
}

const handleClick1 = () => {
   sendUserMsg(getName)
}
const handleClick2 = () => {
   sendUserMsg(getConfirm)
}
const handleClick3 = () => {
   sendUserMsg(getCpf)
}

function getName(value){
   const name = value
   console.log(name)

   userInput.removeEventListener('keyup', handleKeyup1)
   sendBtn.removeEventListener('click', handleClick1)
   requestConfirm()
}

function requestConfirm(){
   setTimeout(function(){
      sendSistemMsg(messages.msg4)
      userInput.addEventListener('keyup', handleKeyup2)
      sendBtn.addEventListener('click', handleClick2)
   }, 1000)
}

function getConfirm(value){
   const confirm = value
   console.log(confirm)

   userInput.removeEventListener('keyup', handleKeyup2)
   sendBtn.removeEventListener('click', handleClick2)
   requestCpf()
}

function requestCpf(){
   setTimeout(function(){
      sendSistemMsg(messages.msg5)
      userInput.addEventListener('keyup', handleKeyup3)
      sendBtn.addEventListener('click', handleClick3)
   }, 1000)
}

function getCpf(value){
   const CPF = value
   console.log(CPF)
}

function initChat(){
   sendSistemMessages1()
   setTimeout(function(){
      userInput.addEventListener('keyup', handleKeyup1)
      sendBtn.addEventListener('click', handleClick1)
      console.log('finish')
   }, 3000)
}

initChat()