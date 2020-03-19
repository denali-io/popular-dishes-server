const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
console.log(carouselImages)

let counter = 1;
// const size = carouselImages[0].clientWidth;
console.log(carouselImages[0].id)
const size = 268


// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', ()=>{
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter+=3;
  if (counter >= carouselImages.length-3) {
    counter=carouselImages.length-3;

  }
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', ()=>{
  console.log(counter)
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter-=3;
  if (counter <1) {
    counter = 0;
  }
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

// carouselSlide.addEventListener('transitionend', ()=>{
//   if (counter < 0){
//     console.log('hey');
//     carouselSlide.style.transition='none'
//     counter=0;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//   }else if (counter >= carouselImages.length){
//     carouselSlide.style.transition='none'
//     counter=carouselImages.length-3;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//   }
// })  