document.querySelector('#login').addEventListener('click', displayPassword)
const main = document.querySelector('main')

function displayPassword(){
   main.innerHTML = ''

   let container2 = document.createElement('div')
   container2.classList.add('container')
   container2.classList.add('container2')
   container2.innerHTML = `
      <div class="user">
          <div class="img"></div>       <!-- adicionar imagem da api aqui  -->
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
}