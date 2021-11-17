const botao1 = document.getElementById("cartao1");
const botao2 = document.getElementById("cartao2");
const card1 = document.getElementById("creditCard1");
const card2 = document.getElementById("creditCard2");


function moveCard2() {
  card1.style.transform = "translateX(-280px)"
  card2.style.transform = "translateX(-280px)"

  botao1.style.background = "#D0D5DB"
  botao2.style.background = "#873F8C"
}

function moveCard1() {
  card1.style.transform = "translateX(10px)"
  card2.style.transform = "translateX(10px)"

  botao1.style.background = "#873F8C"
  botao2.style.background = "#D0D5DB"
}