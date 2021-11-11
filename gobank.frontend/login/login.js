document.querySelector('#login').addEventListener('click', displayPassword)
const main = document.querySelector('main')

function displayPassword(){
   main.innerHTML = ''

   let container2 = document.createElement('div')
   container2.classList.add('container')
   container2.classList.add('container2')
   container2.innerHTML = `
      <div class="user">
          <div class="img"></div>
          <label for="password">Insira sua senha de acesso</label>
          <input type="password" name="userPassword" id="password">
      </div>
      <div class="btns">
          <a href="#" class="ok"><button>OK</button></a>
          <a href="#" class="forgot"><small>Esqueci ou não tenho uma senha</small></a>
      </div>
   `
   main.appendChild(container2)
   document.querySelector('.ok').addEventListener('click', getPassword)
   document.querySelector('.forgot').addEventListener('click', displayUser)
}

function displayUser() {
   // voltar com a rota do express
   document.location.reload()
}

function getPassword(){
   let password = document.querySelector('#password').value
   console.log(password)
   displayFirtAcess(password)
}

function displayFirtAcess(pass){
   if(pass === 'admin123'){
      main.innerHTML = ''

      let container3 = document.createElement('div')
      container3.classList.add('container')
      container3.classList.add('container3')
      container3.innerHTML = `
         <h3><strong>Samantha</strong>, sua conta já está aberta</h3>
         <img src="../src/img/illustration 1.png" alt="one word trade illustration">
         <p><small>Pode começar a comemorar e criar planos, com nosso apoio você finalmente poderá sonhar alto</small></p>
         <a href="#"><button>PRIMEIROS PASSOS</button></a>
      `
      main.appendChild(container3)
   }
}