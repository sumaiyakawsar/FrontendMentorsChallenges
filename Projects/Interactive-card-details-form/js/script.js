let cardNo = document.getElementById("cardNo");
let cardName = document.getElementById("cardName");
let expMM = document.getElementById("expMM");
let expYY = document.getElementById("expYY");
let cardcvv = document.getElementById("cardcvv");

let cNoI = document.getElementById("cardNoI");
let cNameI = document.getElementById("cardNameI");
let expMMI = document.getElementById("expMMI");
let expYYI = document.getElementById("expYYI");
let cCVCI = document.getElementById("cardCVCI");

function rtimenameupdate() {
  cardName.innerHTML = cNameI.value;
}
cardNo.innerHTML = "0000 0000 0000 0000";
function rtimenoupdate() {
  cNoI.value = cNoI.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
  cardNo.innerHTML = cNoI.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
  if(!cNoI.value){
    
  }
}

function rtimeexpmmupdate() {
  expMM.innerHTML = expMMI.value;
}

function rtimeexpyyupdate() {
  expYY.innerHTML = expYYI.value;
}

function rtimecvcupdate() {
  cardcvv.innerHTML = cCVCI.value;
}
