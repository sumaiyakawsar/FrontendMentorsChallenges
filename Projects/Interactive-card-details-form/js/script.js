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

const form = document.getElementById("form");
regexNumbers = /^[0-9]+$/;
regexAlpha = /^[a-zA-Z]+$/;
function rtimenameupdate() {
  cardName.innerHTML = cNameI.value;
}
cardNo.innerHTML = "0000 0000 0000 0000";
function rtimenoupdate() {
  
  if (cNoI.value.match(regexAlpha)) {
    cardNoI = cNoI.value;
    cNoI.value = cardNoI.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
    cardNo.innerHTML = cardNoI.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
  }else{
    document.getElementById("errorMsg-cardNo").innerHTML = "";
  }

  if(cNoI.value){

  }
}

function rtimeexpmmupdate() {
  expMM.innerHTML = expMMI.value;
  if (expMMI.value == ""){
    
  }
}

function rtimeexpyyupdate() {
  expYY.innerHTML = expYYI.value;
}

function rtimecvcupdate() {
  cardcvv.innerHTML = cCVCI.value;
}

form.addEventListener('submit',(e)=>{
  e.preventDefault;

})