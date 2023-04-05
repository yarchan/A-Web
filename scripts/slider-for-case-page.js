let quantityCase = 3

if (window.innerWidth >= 2000 ){
  quantityCase = 4
}
if (window.innerWidth >= 1150 && window.innerWidth <= 1350 ){
  quantityCase = 2.5
}
if (window.innerWidth >= 950 && window.innerWidth <= 1150 ){
  quantityCase = 2
}
if (window.innerWidth >= 750 && window.innerWidth <= 950 ){
  quantityCase = 1.5
}
if ( window.innerWidth <= 750 ){
  quantityCase = 1
}

let swiperCase = new Swiper('.swiper-case',{
  slidesPerView: quantityCase,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
})

