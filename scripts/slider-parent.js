

let cond = false;

let swiper = new Swiper(".slider-parent", {
  simulateTouch: false,
  effect: "creative",
  breakpointsBase: "window",
  slideActiveClass: "swiper-slide-active",
  initialSlide: 1,
  allowTouchMove: false,
  creativeEffect: {
    slideToClickedSlide: true,
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -0.1],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ["100%", 0, 0.1],
    },
  },
});

let gotoCases = document.querySelectorAll(".gotoCases");
let caseTransactions = document.querySelectorAll(".case-transaction");
let allBlocks = document.querySelectorAll(".parent");
let active = document.querySelector(".swiper-slide-active");
let condition = false;
let gotoRequests = document.querySelectorAll(".goto-requests");
let logo = document.getElementById("logo");
let logoSeconddary = document.querySelectorAll(".logo");
let menuTop = document.getElementById("menuTop");
let menuMiddle = document.getElementById("menuMiddle");
let menuBottom = document.getElementById("menuBottom");
let menu = document.querySelectorAll(".menu");
let bottomMain = document.getElementById("bottom-main");
let whatsappCircle = document.getElementById("whatsapp-circle");
let whatsapp = document.getElementById("whatsapp");
let telegramCircle = document.getElementById("telegram");
let telegram = document.getElementById("telegram-circle");
let caseImg = document.getElementById("caseImg");
let caseTitle = document.getElementById("caseTitle");
let caseVector = document.getElementById("case-vector");
let menuLineTop = document.getElementById("menu-line-top");
let menuLineBottom = document.getElementById("menu-line-bottom");
let Mainprojects = document.querySelectorAll(".project")
let nextProjects =  document.querySelectorAll(".next-project-btn")
let prevProjects =  document.querySelectorAll(".back-project-btn")
let condcaseTit = true

let menuPage = document.getElementById("menuPage")
let leaveRequest = document.getElementById("goto-leave-request")


try{
  for(let i=0; i<=prevProjects.length;i++){
    prevProjects[i].addEventListener('click',()=>{
      removeScrollChangeHeader()
      removeScrollChangeFooter()
    })
    nextProjects[i].addEventListener('click',()=>{
      removeScrollChangeHeader()
      removeScrollChangeFooter()
    })
  }

}catch{}

let scrollChangeHeader=()=>{
  menuTop.classList.add("scroll-unlimit-dark-mode");
  menuMiddle.classList.add("scroll-unlimit-dark-mode");
  menuBottom.classList.add("scroll-unlimit-dark-mode");
  logo.classList.add("scroll-unlimit-dark-mode");
}
let removeScrollChangeHeader=()=>{
  menuTop.classList.remove("scroll-unlimit-dark-mode");
  menuMiddle.classList.remove("scroll-unlimit-dark-mode");
  menuBottom.classList.remove("scroll-unlimit-dark-mode");
  logo.classList.remove("scroll-unlimit-dark-mode");
}
let scrollChangeFooter=()=>{
  caseTitle.classList.add("scroll-unlimit-dark-mode");
  caseVector.classList.add("scroll-unlimit-dark-mode");
  caseImg.classList.add("scroll-unlimit-dark-mode");
  whatsapp.classList.add("scroll-unlimit-dark-mode");
  whatsappCircle.classList.add("scroll-unlimit-dark-mode");
  telegramCircle.classList.add("scroll-unlimit-dark-mode");
  telegram.classList.add("scroll-unlimit-dark-mode");
}
let removeScrollChangeFooter=()=>{
  caseTitle.classList.remove("scroll-unlimit-dark-mode");
  caseVector.classList.remove("scroll-unlimit-dark-mode");
  caseImg.classList.remove("scroll-unlimit-dark-mode");
  whatsapp.classList.remove("scroll-unlimit-dark-mode");
  whatsappCircle.classList.remove("scroll-unlimit-dark-mode");
  telegramCircle.classList.remove("scroll-unlimit-dark-mode");
  telegram.classList.remove("scroll-unlimit-dark-mode");
}
try{
  const elem = document.getElementById('top-avatars');

  for(let i=0;i<=Mainprojects.length;i++){
    Mainprojects[i].addEventListener('scroll', ()=>{
      if(Mainprojects[i].scrollTop>elem.clientHeight*0.02){
        scrollChangeFooter()
      }else{
        removeScrollChangeFooter()
      }
      if(Mainprojects[i].scrollTop>elem.clientHeight*0.9){
        scrollChangeHeader()
      }else{
        removeScrollChangeHeader()
      }
    });
  }
}catch{}
try{
  menuPage.addEventListener('scroll',()=>{
    if(menuPage.scrollTop>menuPage.clientHeight*0.2){
      scrollChangeHeader()
    }else{
      removeScrollChangeHeader()
    }
  })
}catch{}
try{
  leaveRequest.addEventListener('scroll',()=>{
    if(leaveRequest.scrollTop>leaveRequest.clientHeight*0.1){
      scrollChangeHeader()
    }else{
      removeScrollChangeHeader()
    }
  })
}catch{}
try {
  for (let i = 0; i < caseTransactions.length; i++) {
    caseTransactions[i].addEventListener("click", () => {
      condcaseTit = !condcaseTit
      removeScrollChangeHeader
      swiper.slideTo(1, 300, true);
      swiperProject.slideTo(i, 0, true);
      menuLineTop.classList.remove("menu-transform-top")
      menuLineBottom.classList.remove("menu-transform-bottom")
      if(!descriptions[i].classList.contains("description-open")){
        menuTop.classList.remove("unlimit-dark-mode-project");
        menuMiddle.classList.remove("unlimit-dark-mode-project");
        menuBottom.classList.remove("unlimit-dark-mode-project");
        caseTitle.classList.remove("unlimit-dark-mode-project");
        caseVector.classList.remove("unlimit-dark-mode-project");
        caseImg.classList.remove("unlimit-dark-mode-project");
      }
    });
  }
} catch {}

try {
  for (let i = 0; i <= gotoRequests.length; i++) {
    gotoRequests[i].addEventListener("click", () => {
      logo.classList.remove("unlimit-dark-mode","dark-mode-small-off")
      menuTop.classList.remove("unlimit-dark-mode");
      menuMiddle.classList.remove("unlimit-dark-mode");
      menuBottom.classList.remove("unlimit-dark-mode");
      menuTop.classList.remove("dark-mode-small-off");
      menuMiddle.classList.remove("dark-mode-small-off");
      menuBottom.classList.remove("dark-mode-small-off");
      caseTitle.classList.remove("unlimit-dark-mode");
      caseVector.classList.remove("unlimit-dark-mode");
      caseImg.classList.remove("unlimit-dark-mode");
      swiper.slideTo(0, 300, true);
    });
  }
} catch {}
try {
  for (let i = 0; i <= gotoCases.length; i++) {
    gotoCases[i].addEventListener("click", () => {
      condcaseTit = !condcaseTit
      condition = false;
      swiper.slideTo(2, 300, true);
    });
  }
} catch {}
  try {
    window.addEventListener("click", () => {
      for (let i = 0; i <= allBlocks.length; i++) {
        try{
          if (
            allBlocks[i].classList.contains("flag") &&
            allBlocks[i].classList.contains("swiper-slide-active")
          ) {
            logo.classList.add("unlimit-dark-mode");
            whatsapp.classList.add("unlimit-dark-mode");
            whatsappCircle.classList.add("unlimit-dark-mode");
            telegramCircle.classList.add("unlimit-dark-mode");
            telegram.classList.add("unlimit-dark-mode");
            menuTop.classList.add("unlimit-dark-mode");
            menuMiddle.classList.add("unlimit-dark-mode");
            menuBottom.classList.add("unlimit-dark-mode");
            caseTitle.classList.add("unlimit-dark-mode");
            caseVector.classList.add("unlimit-dark-mode");
            caseImg.classList.add("unlimit-dark-mode");
          }
        }catch{}
        try{

          if (
            allBlocks[i].classList.contains("flag-right") &&
            allBlocks[i].classList.contains("swiper-slide-active")
          ) {
            logo.classList.remove("unlimit-dark-mode","dark-mode-small-off");
            whatsapp.classList.remove("unlimit-dark-mode");
            whatsappCircle.classList.remove("unlimit-dark-mode");
            telegramCircle.classList.remove("unlimit-dark-mode");
            telegram.classList.remove("unlimit-dark-mode");
            menuTop.classList.remove("unlimit-dark-mode");
            menuMiddle.classList.remove("unlimit-dark-mode");
            menuBottom.classList.remove("unlimit-dark-mode");
            menuTop.classList.add("dark-mode-small-off");
            menuMiddle.classList.add("dark-mode-small-off");
            menuBottom.classList.add("dark-mode-small-off");
            caseTitle.classList.add("unlimit-dark-mode");
            caseVector.classList.add("unlimit-dark-mode");
            caseImg.classList.add("unlimit-dark-mode");
            whatsapp.classList.add("dark-mode-small-on");
            whatsappCircle.classList.add("dark-mode-small-on");
            telegramCircle.classList.add("dark-mode-small-on");
            telegram.classList.add("dark-mode-small-on");
          }
        }catch{}
        try{

          if (
            allBlocks[i].classList.contains("flag-left") &&
            allBlocks[i].classList.contains("swiper-slide-active")
          ) {
            logo.classList.add("dark-mode-small-off");
            whatsapp.classList.add("unlimit-dark-mode");
            whatsappCircle.classList.add("unlimit-dark-mode");
            telegramCircle.classList.add("unlimit-dark-mode");
            telegram.classList.add("unlimit-dark-mode");
            caseTitle.classList.add("dark-mode-small-on");
            caseVector.classList.add("dark-mode-small-on");
            caseImg.classList.add("dark-mode-small-on");
          }
        }catch{}
        try{

        }catch{}
        try{
          if (
            !allBlocks[i].classList.contains("flag") &&
            allBlocks[i].classList.contains("swiper-slide-active") &&
            !allBlocks[i].classList.contains("flag-right") &&
            !allBlocks[i].classList.contains("flag-left")
          ) {
            logo.classList.remove("unlimit-dark-mode","dark-mode-small-off");
            whatsapp.classList.remove("unlimit-dark-mode","dark-mode-small-on");
            whatsappCircle.classList.remove("unlimit-dark-mode","dark-mode-small-on");
            telegramCircle.classList.remove("unlimit-dark-mode" ,"dark-mode-small-on");
            telegram.classList.remove("unlimit-dark-mode","dark-mode-small-on");
            menuTop.classList.remove("unlimit-dark-mode","dark-mode-small-off");
            menuMiddle.classList.remove("unlimit-dark-mode","dark-mode-small-off");
            menuBottom.classList.remove("unlimit-dark-mode","dark-mode-small-off");
            caseTitle.classList.remove("unlimit-dark-mode");
            caseVector.classList.remove("unlimit-dark-mode","dark-mode-small-on");
            caseImg.classList.remove("unlimit-dark-mode");
          }
        }catch{}
      }
    });
  } catch {}

try{
  document.getElementById("caseTitle").addEventListener('click',()=>{
    if(condcaseTit){
      if (condition) {
        menuLineTop.classList.add("menu-transform-top")
        menuLineBottom.classList.add("menu-transform-bottom")
        swiper.slideTo(3, 300, true);
      } else {
        menuLineTop.classList.remove("menu-transform-top")
        menuLineBottom.classList.remove("menu-transform-bottom")
        swiper.slideTo(1, 300, true);
      }
      condition = false;
      swiper.slideTo(1, 300, true);
    }
  })
}catch{}
try{
  document.getElementById("about-company").addEventListener("click", () => {
    condition = false;
    swiper.slideTo(4, 300, true);
  });
}catch{}
try{
  for (let i=0;i<=menu.length;i++ ){
    menu[i].addEventListener("click", () => {
      condcaseTit = true
      condition = !condition;
      if (condition) {
        menuLineTop.classList.add("menu-transform-top")
        menuLineBottom.classList.add("menu-transform-bottom")
        swiper.slideTo(3, 300, true);
      } else {
        menuLineTop.classList.remove("menu-transform-top")
        menuLineBottom.classList.remove("menu-transform-bottom")
        swiper.slideTo(1, 300, true);
      }
    });
  }
}catch{}
try{
  document.getElementById("backImg").addEventListener("click", () => {
    menuLineTop.classList.remove("menu-transform-top")
    menuLineBottom.classList.remove("menu-transform-bottom")
    condition = false;
    swiper.slideTo(1, 300, true);
  });
}catch{}
try{
  document.getElementById("backImg-request").addEventListener("click", () => {
    caseImg.classList.remove("dark-mode-small-on");
    menuLineTop.classList.remove("menu-transform-top")
    menuLineBottom.classList.remove("menu-transform-bottom")
    caseTitle.classList.remove("dark-mode-small-on")
    condition = false;
    swiper.slideTo(1, 300, true);
  });
}catch{}
try{
  document.getElementById("gotoContacts").addEventListener("click", () => {
    condition = false;
    swiper.slideTo(5, 300, true);
  });
}catch{}
try{
  for(let i=0;i<=logoSeconddary.length;i++){
    logoSeconddary[i].addEventListener('click',()=>{
      swiper.slideTo(1, 300, true);
    })
  }
}catch{}
try{
  document.getElementById("logo").addEventListener("click", () => {
    menuLineTop.classList.remove("menu-transform-top")
    menuLineBottom.classList.remove("menu-transform-bottom")
    condition = false;
    swiper.slideTo(1, 300, true);
  });
}catch{}










// for
