const botao1 = document.getElementById("cartao1");
const botao2 = document.getElementById("cartao2");
const card1 = document.getElementById("creditCard1");
const card2 = document.getElementById("creditCard2");
const carousel = document.querySelector('.carousel')

carousel.addEventListener('scroll', activeBtns)

function moveCard2() {
  carousel.scroll({
    left: 250,
    behavior: 'smooth'
  })

  activeBtns()
}

function moveCard1() {
  carousel.scroll({
    left: -250,
    behavior: "smooth"
  })

  activeBtns()
}

function activeBtns(){
  if(carousel.scrollLeft > 200 ){
    botao1.style.background = "#D0D5DB"
    botao2.style.background = "#873F8C"
  }else if(carousel.scrollLeft <= 10){
    botao1.style.background = "#873F8C"
    botao2.style.background = "#D0D5DB"
  }
}