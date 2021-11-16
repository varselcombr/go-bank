let slider = document.querySelector('.sliders')
let btn = document.querySelector('.container button')
let dots = document.querySelectorAll('.dot')
slider.addEventListener('scroll', active)
btn.addEventListener('click', pageSlide)

function pageSlide(){
   if(slider.scrollLeft > 0){
      console.log('Next screen')
   }else{
      slider.scrollBy(400, 0)
   }
}

function active() {
   if(slider.scrollLeft > 0){
      btn.innerHTML = 'CONFIGURAR SEGURANÇA'
      dots.forEach(i => {
         i.classList.remove('active')
      })
      dots[1].classList.add('active')
   }else{
      btn.innerHTML = 'PRÓXIMO'
      dots.forEach(i => {
         i.classList.remove('active')
      })
      dots[0].classList.add('active')
   }
}