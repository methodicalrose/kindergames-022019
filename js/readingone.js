const readbox = document.querySelectorAll('.readpic-card');
const textbox = document.querySelectorAll('.readtext-card');

readbox.addEventListener("click", pairone);
textbox.addEventListener("click", pairone);

function pairone (el){
  this.classList.toggle("pairone");
  if(el.className === "this"){
    el.className = "pairone";
  } else {
    el.className = "this";
  }
}