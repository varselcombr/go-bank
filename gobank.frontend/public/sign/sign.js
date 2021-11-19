let chatContainer = document.querySelector('.chatContainer')
let userInput = document.querySelector('#inputMsg')
let sendBtn = document.querySelector('#sendMsg')

const messages = {
   msg1: "Olá!",
   msg2: "Vamos começar o processo de abertura da sua conta.",
   msg3: "Como deseja ser chamado?"
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
   if(userInput.value.length > 3){
      let userMsg = document.createElement('div')
      userMsg.classList.add('userMsg')
      userMsg.innerHTML = `${userInput.value}`
      callback(userInput.value)
      userInput.value = ''
      chatContainer.appendChild(userMsg)
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

function getName(value){
   const name = value
   console.log(name)
}

function initChat(){
   sendSistemMessages1()
   setTimeout(function(){
      userInput.addEventListener('keyup', e => {if(e.which === 13){sendUserMsg(getName)}})
      sendBtn.addEventListener('click', () => {sendUserMsg(getName)})
      console.log('finish')
   }, 3000)
}

initChat()