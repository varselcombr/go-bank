let chatContainer = document.querySelector('.chatContainer')
let userInput = document.querySelector('#inputMsg')
userInput.addEventListener('keyup', e => {if(e.which === 13){sendMsg()}})
document.querySelector('.sendMsg').addEventListener('click', sendMsg)


function sendMsg(){
   let userMsg = document.createElement('div')
   userMsg.classList.add('userMsg')
   userMsg.innerHTML = `${userInput.value}`
   chatContainer.appendChild(userMsg)
   userInput.value = ''
   let chatHeight = chatContainer.scrollHeight
   chatContainer.scrollTo(0, chatHeight)
}