const carp = document.getElementById("carpic");
const cart = document.getElementById("cartext");
const catp = document.getElementById("catpic");
const catt = document.getElementById("cattext");
const doorp = document.getElementById("doorpic");
const doort = document.getElementById("doortext");

carp.addEventListener("click", pairone);
cart.addEventListener("click", pairone);

function parione (el){
  this.classList.toggle("pairone");
  if(el.className === "this"){
    el.className = "pairone";
  } else {
    el.className = "this";
  }
}

catp.addEventListener("click", purple);
catt.addEventListener("click", purple);

function purple (){
  this.style.borderColor = "#8A7090";
}

doorp.addEventListener("click", yellow);
doort.addEventListener("click", yellow);

function yellow (){
  this.style.borderColor = "#63D2FF";
}
