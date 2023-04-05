let iphones = document.querySelectorAll(".wrapper-middle__iphone");
let projectWrappers = document.querySelectorAll(".project__wrapper");
let descriptions = document.querySelectorAll(".description");
let Title = document.querySelectorAll(".title");
let Progressbar = document.querySelectorAll(".progressbar");
let wrapperMediumLefts = document.getElementsByClassName(
  "wrapper-medium__left"
);
let bottomWrapper = document.getElementById("bottom-main");
let projects = document.getElementsByClassName("wrapper-medium__right");
let wrapperMiddleAnimation = document.querySelectorAll(
  ".wrapper-middle__animation"
);
let progressbarBacks = document.getElementsByClassName("progressbar");
let progressbarTrips = document.getElementsByClassName("progressbar__trip");
let widthProgBar;
let squareRequest = document.querySelector(".square");
let Mainnextprojectbtnclosedesc = document.querySelectorAll(
  ".next-project-btn-close-desc"
);
let MainnextprojectbtnclosedescTop = document.querySelectorAll(
  ".next-project-btn-close-desc-top"
);
let Mainbackprojectbtnclosedesc = document.querySelectorAll(
  ".back-project-btn-close-desc"
);
let MainbackprojectbtnclosedescTop = document.querySelectorAll(
  ".back-project-btn-close-desc-top"
);
let descProj = document.getElementById("desc-proj");
let children = document.querySelectorAll(".children");
let nextProjectSide = document.querySelectorAll(".children");


let j;

squareRequest.addEventListener("click", () => {
  document.querySelector(".mini-square").classList.toggle("mini-square-active");
});

try {
  for (let i = 0; i <= iphones.length; i++) {
    if ((i = iphones.length)) {
      j = i;
    }
  }
} catch {}

try {
  for (let i = 0; i <= iphones.length; i++) {
    widthProgBar = progressbarBacks[i].clientWidth;
    progressbarTrips[i].style.width = `${widthProgBar / j}px`;
    progressbarTrips[i].style.transform = `translateX(${
      (widthProgBar / j) * i
    }px)`;
  }
} catch {}

let descOpen = () => {};

try {
  for (let i = 0; i <= iphones.length; i++) {
    iphones[i].addEventListener("click", () => {
      menuTop.classList.toggle("unlimit-dark-mode-project");
      menuMiddle.classList.toggle("unlimit-dark-mode-project");
      menuBottom.classList.toggle("unlimit-dark-mode-project");
      caseTitle.classList.toggle("unlimit-dark-mode-project");
      caseVector.classList.toggle("unlimit-dark-mode-project");
      caseImg.classList.toggle("unlimit-dark-mode-project");
      wrapperMediumLefts[i].classList.toggle("wrapper-medium__left-show");
      projects[i].classList.toggle("project-wrap-right-change");
      projectWrappers[i].classList.toggle("project-change-for-description");
      descriptions[i].classList.toggle("description-open");
      descriptions[i].classList.toggle("description-open-small");
      Title[i + i].classList.toggle("title-show");
      Progressbar[i].classList.toggle("progbar-show");
      wrapperMiddleAnimation[i].classList.toggle("animation-png-small");
    });

    try{
      document.getElementById("next-project-side").addEventListener("click", () => {

        setTimeout(() => {
          menuTop.classList.remove("unlimit-dark-mode-project");
          menuMiddle.classList.remove("unlimit-dark-mode-project");
          menuBottom.classList.remove("unlimit-dark-mode-project");
          caseTitle.classList.remove("unlimit-dark-mode-project");
          caseVector.classList.remove("unlimit-dark-mode-project");
          caseImg.classList.remove("unlimit-dark-mode-project");
          wrapperMediumLefts[i].classList.remove("wrapper-medium__left-show");
          projects[i].classList.remove("project-wrap-right-change");
          projectWrappers[i].classList.remove("project-change-for-description");
          descriptions[i].classList.remove("description-open");
          descriptions[i].classList.remove("description-open-small");
          Title[i + i].classList.remove("title-show");
          Progressbar[i].classList.remove("progbar-show");
          wrapperMiddleAnimation[i].classList.remove("animation-png-small");
          descriptions[i].classList.remove("description-open-small-i");
        }, 300);
        setTimeout(()=>{
          descriptions[i].classList.add("description-open-small-i");
        },400)
        for (let j = 0; j <= children.length; j++) {
          if (swiperProject.activeIndex == 6) {
            if (!children[j].classList.contains("swiper-slide-active")) {
              for(let k=1;k<=children.length-2;k++){
                children[k].classList.add("n-show");
                setTimeout(() => {
                  children[k].classList.remove("n-show");
                }, 310);
              }
            }
            swiperProject.slideTo(0, 300, true);
            setTimeout(() => {
              swiperProject.slideTo(0, 0, true);
            }, 10);
          }
        }
      });
    }catch{}
    try{
      document.getElementById("next-project-side-top").addEventListener("click", () => {

        setTimeout(() => {
          menuTop.classList.remove("unlimit-dark-mode-project");
          menuMiddle.classList.remove("unlimit-dark-mode-project");
          menuBottom.classList.remove("unlimit-dark-mode-project");
          caseTitle.classList.remove("unlimit-dark-mode-project");
          caseVector.classList.remove("unlimit-dark-mode-project");
          caseImg.classList.remove("unlimit-dark-mode-project");
          wrapperMediumLefts[i].classList.remove("wrapper-medium__left-show");
          projects[i].classList.remove("project-wrap-right-change");
          projectWrappers[i].classList.remove("project-change-for-description");
          descriptions[i].classList.remove("description-open");
          descriptions[i].classList.remove("description-open-small");
          Title[i + i].classList.remove("title-show");
          Progressbar[i].classList.remove("progbar-show");
          wrapperMiddleAnimation[i].classList.remove("animation-png-small");
          descriptions[i].classList.remove("description-open-small-i");
        }, 300);
        setTimeout(()=>{
          descriptions[i].classList.add("description-open-small-i");
        },400)
        for (let j = 0; j <= children.length; j++) {
          if (swiperProject.activeIndex == 6) {
            if (!children[j].classList.contains("swiper-slide-active")) {
              for(let k=1;k<=children.length-2;k++){
                children[k].classList.add("n-show");
                setTimeout(() => {
                  children[k].classList.remove("n-show");
                }, 310);
              }
            }
            swiperProject.slideTo(0, 300, true);
            setTimeout(() => {
              swiperProject.slideTo(0, 0, true);
            }, 10);
          }
        }
      });
    }catch{}
    try{
      document.getElementById("back-project-side").addEventListener("click", () => {
        setTimeout(() => {
          menuTop.classList.remove("unlimit-dark-mode-project");
          menuMiddle.classList.remove("unlimit-dark-mode-project");
          menuBottom.classList.remove("unlimit-dark-mode-project");
          caseTitle.classList.remove("unlimit-dark-mode-project");
          caseVector.classList.remove("unlimit-dark-mode-project");
          caseImg.classList.remove("unlimit-dark-mode-project");
          wrapperMediumLefts[i ].classList.remove("wrapper-medium__left-show");
          projects[i ].classList.remove("project-wrap-right-change");
          projectWrappers[i ].classList.remove(
            "project-change-for-description"
          );
          descriptions[i ].classList.remove("description-open");
          descriptions[i ].classList.remove("description-open-small");
          Title[i + i].classList.remove("title-show");
          Progressbar[i ].classList.remove("progbar-show");
          wrapperMiddleAnimation[i ].classList.remove("animation-png-small");
          descriptions[i].classList.remove("description-open-small-i");
        }, 300);
        setTimeout(()=>{
          descriptions[i].classList.add("description-open-small-i");
        },400)
        for (let j = 0; j <= children.length; j++) {
          if (swiperProject.activeIndex == 0) {
            if (!children[j].classList.contains("swiper-slide-active")) {
              for(let k=1;k<=children.length-2;k++){
                children[k].classList.add("n-show");
                setTimeout(()=>{
                  swiperProject.slideTo(6, 300, true);
                },10)
                setTimeout(() => {
                  children[k].classList.remove("n-show");
                }, 310);
              }
            }
           
          }
        }
      });
    }catch{}
    try{
      document.getElementById("back-project-side-top").addEventListener("click", () => {

        setTimeout(() => {
          menuTop.classList.remove("unlimit-dark-mode-project");
          menuMiddle.classList.remove("unlimit-dark-mode-project");
          menuBottom.classList.remove("unlimit-dark-mode-project");
          caseTitle.classList.remove("unlimit-dark-mode-project");
          caseVector.classList.remove("unlimit-dark-mode-project");
          caseImg.classList.remove("unlimit-dark-mode-project");
          wrapperMediumLefts[i ].classList.remove("wrapper-medium__left-show");
          projects[i ].classList.remove("project-wrap-right-change");
          projectWrappers[i ].classList.remove(
            "project-change-for-description"
          );
          descriptions[i ].classList.remove("description-open");
          descriptions[i ].classList.remove("description-open-small");
          Title[i + i].classList.remove("title-show");
          Progressbar[i ].classList.remove("progbar-show");
          wrapperMiddleAnimation[i ].classList.remove("animation-png-small");
          descriptions[i].classList.remove("description-open-small-i");
        }, 300);
        setTimeout(()=>{
          descriptions[i].classList.add("description-open-small-i");
        },400)
        for (let j = 0; j <= children.length; j++) {
          if (swiperProject.activeIndex == 0) {
            if (!children[j].classList.contains("swiper-slide-active")) {
              for(let k=1;k<=children.length-2;k++){
                children[k].classList.add("n-show");
                setTimeout(()=>{
                  swiperProject.slideTo(6, 300, true);
                },10)
                setTimeout(() => {
                  children[k].classList.remove("n-show");
                }, 310);
              }
            }
           
          }
        }
      });
    }catch{}
    try{
      Mainnextprojectbtnclosedesc[i].addEventListener("click", () => {
        setTimeout(() => {
          menuTop.classList.remove("unlimit-dark-mode-project");
          menuMiddle.classList.remove("unlimit-dark-mode-project");
          menuBottom.classList.remove("unlimit-dark-mode-project");
          caseTitle.classList.remove("unlimit-dark-mode-project");
          caseVector.classList.remove("unlimit-dark-mode-project");
          caseImg.classList.remove("unlimit-dark-mode-project");
          wrapperMediumLefts[i].classList.remove("wrapper-medium__left-show");
          projects[i].classList.remove("project-wrap-right-change");
          projectWrappers[i].classList.remove("project-change-for-description");
          descriptions[i].classList.remove("description-open");
          descriptions[i].classList.remove("description-open-small");
          Title[i + i ].classList.remove("title-show");
          Progressbar[i].classList.remove("progbar-show");
          wrapperMiddleAnimation[i].classList.remove("animation-png-small");
          descriptions[i].classList.remove("description-open-small-i");
        }, 300);
        setTimeout(()=>{
          descriptions[i].classList.add("description-open-small-i");
        },350)
      });
    }catch{}
    try{
      MainnextprojectbtnclosedescTop[i].addEventListener("click", () => {
        setTimeout(() => {
          menuTop.classList.remove("unlimit-dark-mode-project");
          menuMiddle.classList.remove("unlimit-dark-mode-project");
          menuBottom.classList.remove("unlimit-dark-mode-project");
          caseTitle.classList.remove("unlimit-dark-mode-project");
          caseVector.classList.remove("unlimit-dark-mode-project");
          caseImg.classList.remove("unlimit-dark-mode-project");
          wrapperMediumLefts[i].classList.remove("wrapper-medium__left-show");
          projects[i].classList.remove("project-wrap-right-change");
          projectWrappers[i].classList.remove("project-change-for-description");
          descriptions[i].classList.remove("description-open");
          descriptions[i].classList.remove("description-open-small");
          Title[i + i ].classList.remove("title-show");
          Progressbar[i].classList.remove("progbar-show");
          wrapperMiddleAnimation[i].classList.remove("animation-png-small");
          descriptions[i].classList.remove("description-open-small-i");
        }, 300);
        setTimeout(()=>{
          descriptions[i].classList.add("description-open-small-i");
        },350)
      });
    }catch{}
    try{
      Mainbackprojectbtnclosedesc[i].addEventListener("click", () => {
        setTimeout(() => {
          menuTop.classList.remove("unlimit-dark-mode-project");
          menuMiddle.classList.remove("unlimit-dark-mode-project");
          menuBottom.classList.remove("unlimit-dark-mode-project");
          caseTitle.classList.remove("unlimit-dark-mode-project");
          caseVector.classList.remove("unlimit-dark-mode-project");
          caseImg.classList.remove("unlimit-dark-mode-project");
          wrapperMediumLefts[i ].classList.remove("wrapper-medium__left-show");
          projects[i ].classList.remove("project-wrap-right-change");
          projectWrappers[i ].classList.remove(
            "project-change-for-description"
          );
          descriptions[i ].classList.remove("description-open");
          descriptions[i ].classList.remove("description-open-small");
          Title[i +i ].classList.remove("title-show");
          Progressbar[i ].classList.remove("progbar-show");
          wrapperMiddleAnimation[i ].classList.remove("animation-png-small");
          descriptions[i].classList.remove("description-open-small-i");
        }, 300);
        setTimeout(()=>{
          descriptions[i].classList.add("description-open-small-i");
        },350)
      });
    }catch{}
    try{
      MainbackprojectbtnclosedescTop[i].addEventListener("click", () => {
        setTimeout(() => {
          menuTop.classList.remove("unlimit-dark-mode-project");
          menuMiddle.classList.remove("unlimit-dark-mode-project");
          menuBottom.classList.remove("unlimit-dark-mode-project");
          caseTitle.classList.remove("unlimit-dark-mode-project");
          caseVector.classList.remove("unlimit-dark-mode-project");
          caseImg.classList.remove("unlimit-dark-mode-project");
          wrapperMediumLefts[i ].classList.remove("wrapper-medium__left-show");
          projects[i ].classList.remove("project-wrap-right-change");
          projectWrappers[i ].classList.remove(
            "project-change-for-description"
          );
          descriptions[i ].classList.remove("description-open");
          descriptions[i ].classList.remove("description-open-small");
          Title[i +i ].classList.remove("title-show");
          Progressbar[i ].classList.remove("progbar-show");
          wrapperMiddleAnimation[i ].classList.remove("animation-png-small");
          descriptions[i].classList.remove("description-open-small-i");
        }, 300);
        setTimeout(()=>{
          descriptions[i].classList.add("description-open-small-i");
        },350)
      });
    }catch{}
    try{
      document.getElementById("caseTitle").addEventListener("click", () => {
        setTimeout(() => {
          menuTop.classList.remove("unlimit-dark-mode-project");
          menuMiddle.classList.remove("unlimit-dark-mode-project");
          menuBottom.classList.remove("unlimit-dark-mode-project");
          caseTitle.classList.remove("unlimit-dark-mode-project");
          caseVector.classList.remove("unlimit-dark-mode-project");
          wrapperMediumLefts[i].classList.remove("wrapper-medium__left-show");
          projects[i].classList.remove("project-wrap-right-change");
          projectWrappers[i].classList.remove("project-change-for-description");
          descriptions[i].classList.remove("description-open");
          descriptions[i].classList.remove("description-open-small");
          Title[i + i].classList.remove("title-show");
          Progressbar[i].classList.remove("progbar-show");
          wrapperMiddleAnimation[i].classList.remove("animation-png-small");
        }, 300);
      });
    }catch{}
    try{
      document.getElementById("menu").addEventListener("click", () => {
        setTimeout(() => {
          menuTop.classList.remove("unlimit-dark-mode-project");
          menuMiddle.classList.remove("unlimit-dark-mode-project");
          menuBottom.classList.remove("unlimit-dark-mode-project");
          caseTitle.classList.remove("unlimit-dark-mode-project");
          caseVector.classList.remove("unlimit-dark-mode-project");
          wrapperMediumLefts[i].classList.remove("wrapper-medium__left-show");
          projects[i].classList.remove("project-wrap-right-change");
          projectWrappers[i].classList.remove("project-change-for-description");
          descriptions[i].classList.remove("description-open");
          descriptions[i].classList.remove("description-open-small");
          Title[i + i].classList.remove("title-show");
          Progressbar[i].classList.remove("progbar-show");
          wrapperMiddleAnimation[i].classList.remove("animation-png-small");
          descriptions[i].classList.remove("description-open-small-i");
        }, 300);
        setTimeout(()=>{
          descriptions[i].classList.add("description-open-small-i");
        },400)
      });
    }catch{}
    try{
      document
      .querySelectorAll(".request-close-proj")
      [i].addEventListener("click", () => {
        setTimeout(() => {
          menuTop.classList.remove("unlimit-dark-mode-project");
          menuMiddle.classList.remove("unlimit-dark-mode-project");
          menuBottom.classList.remove("unlimit-dark-mode-project");
          caseTitle.classList.remove("unlimit-dark-mode-project");
          caseVector.classList.remove("unlimit-dark-mode-project");
          caseImg.classList.remove("unlimit-dark-mode-project");
          wrapperMediumLefts[i].classList.remove("wrapper-medium__left-show");
          projects[i].classList.remove("project-wrap-right-change");
          projectWrappers[i].classList.remove("project-change-for-description");
          descriptions[i].classList.remove("description-open");
          descriptions[i].classList.remove("description-open-small");
          Title[i + i].classList.remove("title-show");
          Progressbar[i].classList.remove("progbar-show");
          wrapperMiddleAnimation[i].classList.remove("animation-png-small");
          descriptions[i].classList.remove("description-open-small-i");
        }, 300);
        setTimeout(()=>{
          descriptions[i].classList.add("description-open-small-i");
        },400)  
      });
    }catch{}
  }
} catch {}

let anchors = document.querySelectorAll(".anchor");
try {
  for (let [i, anchor] of anchors.entries()) {
    anchors[i].addEventListener("click", function (e) {
      e.preventDefault();

      descriptions[i].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
} catch {}

