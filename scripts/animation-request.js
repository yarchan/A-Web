let subcontentChanges = document.querySelectorAll(".choose-request");
let confirmCond = document.querySelectorAll(".confirm")


try{
  for (let i = 0; i <= subcontentChanges.length; i++) {
    subcontentChanges[i].addEventListener("click", () => {
      confirmCond[i].classList.toggle("confirm-true")
      subcontentChanges[i].classList.toggle("subcontent-change");
    });
  }
}catch{

}
