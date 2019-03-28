// SETTING VARIABLES

const carp = document.getElementById("carpic");
const cart = document.getElementById("cartext");
const catp = document.getElementById("catpic");
const catt = document.getElementById("cattext");
const doorp = document.getElementById("doorpic");
const doort = document.getElementById("doortext");
const btn = document.getElementById("buttonreading");
const modalread = document.getElementById("modalreading");
const closer = document.getElementsByClassName("close");

// PAIR ONE

carp.addEventListener("click", pairone);
cart.addEventListener("click", pairone);

function pairone (el){
  this.classList.toggle("pairone");
  if(el.className === "this"){
    el.className = "pairone";
  } else {
    el.className = "this";
  }
}

// PAIR TWO 

catp.addEventListener("click", pairtwo);
catt.addEventListener("click", pairtwo);

function pairtwo (el){
  this.classList.toggle("pairtwo");
  if(el.className === "this"){
    el.className = "pairtwo";
  } else {
    el.className = "this";
  }
}

// PAIR THREE

doorp.addEventListener("click", pairthree);
doort.addEventListener("click", pairthree);

function pairthree (el){
  this.classList.toggle("pairthree");
  if(el.className === "this"){
    el.className = "pairthree";
  } else {
    el.className = "this";
  }
}

// MODAL FOR NEW LEVEL

btn.onclick = function() {
  modalread.style.display = "block";
}

closer.onclick = function() {
  modalread.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalread) {
    modalread.style.display = "none";
  }
}