let swiperProject = new Swiper(".slider-project", {
  slidesPerView: 1,
  simulateTouch: false,
  allowSlideNext:false,
  // loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: 'creative',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next-project-btn",
    prevEl: ".back-project-btn",
  },
  creativeEffect: {
    slideToClickedSlide:true,
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -0.1],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 1],
    },
  }, 
});
swiperProject.allowSlideNext = true

window.addEventListener('click',()=>{
  swiperProject.autoplay.stop ()
})

try{
  for(let i=0;i<=Mainprojects.length;i++){
  
    Mainprojects[i].addEventListener('scroll',()=>{
      swiperProject.autoplay.stop ()
    })
  }

}catch{}


