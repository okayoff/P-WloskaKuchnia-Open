var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1 }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 10000);
}

var slideIndex1 = 1;
showDivs1(slideIndex1);
function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}
function showDivs1(n) {
  var i;
  var x1 = document.getElementsByClassName("mySlides1");
  if (n > x1.length) { slideIndex1 = 1 }
  if (n < 1) { slideIndex1 = x1.length }
  for (i = 0; i < x1.length; i++) {
    x1[i].style.display = "none";
  }
  x1[slideIndex1 - 1].style.display = "block";
}
var slideIndex1 = 0;
carousel1();

function carousel1() {
  var i;
  var x1 = document.getElementsByClassName("mySlides1");
  for (i = 0; i < x1.length; i++) {
    x1[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > x1.length) { slideIndex1 = 1 }
  x1[slideIndex1 - 1].style.display = "block";
  setTimeout(carousel1, 10000);
}

var slideIndex2 = 1;
showDivs2(slideIndex2);
function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}
function showDivs2(n) {
  var i;
  var x2 = document.getElementsByClassName("mySlides2");
  if (n > x2.length) { slideIndex2 = 1 }
  if (n < 1) { slideIndex2 = x2.length }
  for (i = 0; i < x2.length; i++) {
    x2[i].style.display = "none";
  }
  x2[slideIndex2 - 1].style.display = "block";
}
var slideIndex2 = 0;
carousel2();

function carousel2() {
  var i;
  var x2 = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x2.length; i++) {
    x2[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > x2.length) { slideIndex2 = 1 }
  x2[slideIndex2 - 1].style.display = "block";
  setTimeout(carousel2, 10000);
}

var slideIndex3 = 1;
showDivs3(slideIndex3);
function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}
function showDivs3(n) {
  var i;
  var x3 = document.getElementsByClassName("mySlides3");
  if (n > x3.length) { slideIndex3 = 1 }
  if (n < 1) { slideIndex3 = x.length }
  for (i = 0; i < x3.length; i++) {
    x3[i].style.display = "none";
  }
  x3[slideIndex3 - 1].style.display = "block";
}
var slideIndex3 = 0;
carousel3();

function carousel3() {
  var i;
  var x3 = document.getElementsByClassName("mySlides3");
  for (i = 0; i < x3.length; i++) {
    x3[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > x3.length) { slideIndex3 = 1 }
  x3[slideIndex3 - 1].style.display = "block";
  setTimeout(carousel3, 10000);
}

var slideIndex4 = 1;
showDivs4(slideIndex4);
function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}
function showDivs4(n) {
  var i;
  var x4 = document.getElementsByClassName("mySlides4");
  if (n > x4.length) { slideIndex4 = 1 }
  if (n < 1) { slideIndex4 = x4.length }
  for (i = 0; i < x4.length; i++) {
    x4[i].style.display = "none";
  }
  x4[slideIndex4 - 1].style.display = "block";
}
var slideIndex4 = 0;
carousel4();

function carousel4() {
  var i;
  var x4 = document.getElementsByClassName("mySlides4");
  for (i = 0; i < x4.length; i++) {
    x4[i].style.display = "none";
  }
  slideIndex4++;
  if (slideIndex4 > x4.length) { slideIndex4 = 1 }
  x4[slideIndex4 - 1].style.display = "block";
  setTimeout(carousel4, 10000);
}

var slideIndex5 = 1;
showDivs5(slideIndex5);
function plusDivs5(n) {
  showDivs5(slideIndex5 += n);
}
function showDivs5(n) {
  var i;
  var x5 = document.getElementsByClassName("mySlides5");
  if (n > x5.length) { slideIndex5 = 1 }
  if (n < 1) { slideIndex5 = x5.length }
  for (i = 0; i < x5.length; i++) {
    x5[i].style.display = "none";
  }
  x5[slideIndex5 - 1].style.display = "block";
}
var slideIndex5 = 0;
carousel5();

function carousel5() {
  var i;
  var x5 = document.getElementsByClassName("mySlides5");
  for (i = 0; i < x5.length; i++) {
    x5[i].style.display = "none";
  }
  slideIndex5++;
  if (slideIndex5 > x5.length) { slideIndex5 = 1 }
  x5[slideIndex5 - 1].style.display = "block";
  setTimeout(carousel5, 10000);
}

// pizza
let modalPizza1 = document.getElementById('pizza1');
let btnPizza1 = document.getElementById("btnPizza1");
let spanPizza1 = document.getElementsByClassName("closePizza1")[0];
btnPizza1.onclick = function() {
    modalPizza1.style.display = "block";
}
spanPizza1.onclick = function() {
    modalPizza1.style.display = "none";
}
window.onclick = function(eventPizza1) {
    if (eventPizza1.target == modalPizza1) {
        modalPizza1.style.display = "none";
    }
}

let modalPizza2 = document.getElementById('pizza2');
let btnPizza2 = document.getElementById("btnPizza2");
let spanPizza2 = document.getElementsByClassName("closePizza2")[0];
btnPizza2.onclick = function() {
  modalPizza2.style.display = "block";
}
spanPizza2.onclick = function() {
  modalPizza2.style.display = "none";
}
window.onclick = function(eventPizza2) {
  if (eventPizza2.target == modalPizza2) {
      modalPizza2.style.display = "none";
  }
}

let modalPizza3 = document.getElementById('pizza3');
let btnPizza3 = document.getElementById("btnPizza3");
let spanPizza3 = document.getElementsByClassName("closePizza3")[0];
btnPizza3.onclick = function() {
  modalPizza3.style.display = "block";
}
spanPizza3.onclick = function() {
  modalPizza3.style.display = "none";
}
window.onclick = function(eventPizza3) {
  if (eventPizza3.target == modalPizza3) {
      modalPizza3.style.display = "none";
  }
}

// napoje
let modalNapoje1 = document.getElementById('napoje1');
let btnNapoje1 = document.getElementById("btnNapoje1");
let spanNapoje1 = document.getElementsByClassName("closeNapoje1")[0];
btnNapoje1.onclick = function() {
    modalNapoje1.style.display = "block";
}
spanNapoje1.onclick = function() {
    modalNapoje1.style.display = "none";
}
window.onclick = function(eventNapoje1) {
    if (eventNapoje1.target == modalNapoje1) {
        modalNapoje1.style.display = "none";
    }
}

let modalNapoje2 = document.getElementById('napoje2');
let btnNapoje2 = document.getElementById("btnNapoje2");
let spanNapoje2 = document.getElementsByClassName("closeNapoje2")[0];
btnNapoje2.onclick = function() {
    modalNapoje2.style.display = "block";
}
spanNapoje2.onclick = function() {
    modalNapoje2.style.display = "none";
}
window.onclick = function(eventNapoje2) {
    if (eventNapoje2.target == modalNapoje2) {
        modalNapoje2.style.display = "none";
    }
}

let modalNapoje3 = document.getElementById('napoje3');
let btnNapoje3 = document.getElementById("btnNapoje3");
let spanNapoje3 = document.getElementsByClassName("closeNapoje3")[0];
btnNapoje3.onclick = function() {
    modalNapoje3.style.display = "block";
}
spanNapoje3.onclick = function() {
    modalNapoje3.style.display = "none";
}
window.onclick = function(eventNapoje3) {
    if (eventNapoje3.target == modalNapoje3) {
        modalNapoje3.style.display = "none";
    }
}

// deser
let modalDeser1 = document.getElementById('deser1');
let btnDeser1 = document.getElementById("btnDeser1");
let spanDeser1 = document.getElementsByClassName("closeDeser1")[0];
btnDeser1.onclick = function() {
    modalDeser1.style.display = "block";
}
spanDeser1.onclick = function() {
    modalDeser1.style.display = "none";
}
window.onclick = function(eventDeser1) {
    if (eventDeser1.target == modalDeser1) {
        modalDeser1.style.display = "none";
    }
}
let modalDeser2 = document.getElementById('deser2');
let btnDeser2 = document.getElementById("btnDeser2");
let spanDeser2 = document.getElementsByClassName("closeDeser2")[0];
btnDeser2.onclick = function() {
    modalDeser2.style.display = "block";
}
spanDeser2.onclick = function() {
    modalDeser2.style.display = "none";
}
window.onclick = function(eventDeser2) {
    if (eventDeser2.target == modalDeser2) {
        modalDeser2.style.display = "none";
    }
}
let modalDeser3 = document.getElementById('deser3');
let btnDeser3 = document.getElementById("btnDeser3");
let spanDeser3 = document.getElementsByClassName("closeDeser3")[0];
btnDeser3.onclick = function() {
    modalDeser3.style.display = "block";
}
spanDeser3.onclick = function() {
    modalDeser3.style.display = "none";
}
window.onclick = function(eventDeser3) {
    if (eventDeser3.target == modalDeser3) {
        modalDeser3.style.display = "none";
    }
}
// makaron
let modalMakaron1 = document.getElementById('makaron1');
let btnMakaron1 = document.getElementById("btnMakaron1");
let spanMakaron1 = document.getElementsByClassName("closeMakaron1")[0];
btnMakaron1.onclick = function() {
    modalMakaron1.style.display = "block";
}
spanMakaron1.onclick = function() {
    modalMakaron1.style.display = "none";
}
window.onclick = function(eventMakaron1) {
    if (eventMakaron1.target == modalMakaron1) {
        modalMakaron1.style.display = "none";
    }
}
let modalMakaron2 = document.getElementById('makaron2');
let btnMakaron2 = document.getElementById("btnMakaron2");
let spanMakaron2 = document.getElementsByClassName("closeMakaron2")[0];
btnMakaron2.onclick = function() {
    modalMakaron2.style.display = "block";
}
spanMakaron2.onclick = function() {
    modalMakaron2.style.display = "none";
}
window.onclick = function(eventMakaron2) {
    if (eventMakaron2.target == modalMakaron2) {
        modalMakaron2.style.display = "none";
    }
}
let modalMakaron3 = document.getElementById('makaron3');
let btnMakaron3 = document.getElementById("btnMakaron3");
let spanMakaron3 = document.getElementsByClassName("closeMakaron3")[0];
btnMakaron3.onclick = function() {
    modalMakaron3.style.display = "block";
}
spanNapoje3.onclick = function() {
    modalMakaron3.style.display = "none";
}
window.onclick = function(eventMakaron3) {
    if (eventMakaron3.target == modalMakaron3) {
        modalMakaron3.style.display = "none";
    }
}
// salatka
let modalSalatka1 = document.getElementById('salatka1');
let btnSalatka1 = document.getElementById("btnSalatka1");
let spanSalatka1 = document.getElementsByClassName("closeSalatka1")[0];
btnSalatka1.onclick = function() {
    modalSalatka1.style.display = "block";
}
spanSalatka1.onclick = function() {
    modalSalatka1.style.display = "none";
}
window.onclick = function(eventSalatka1) {
    if (eventSalatka1.target == modalSalatka1) {
        modalSalatka1.style.display = "none";
    }
}
let modalSalatka2 = document.getElementById('salatka2');
let btnSalatka2 = document.getElementById("btnSalatka2");
let spanSalatka2 = document.getElementsByClassName("closeSalatka2")[0];
btnSalatka2.onclick = function() {
    modalSalatka2.style.display = "block";
}
spanSalatka2.onclick = function() {
    modalSalatka2.style.display = "none";
}
window.onclick = function(eventSalatka2) {
    if (eventSalatka2.target == modalSalatka2) {
        modalSalatka2.style.display = "none";
    }
}
let modalSalatka3 = document.getElementById('salatka3');
let btnSalatka3 = document.getElementById("btnSalatka3");
let spanSalatka3 = document.getElementsByClassName("closeSalatka3")[0];
btnSalatka3.onclick = function() {
    modalSalatka3.style.display = "block";
}
spanSalatka3.onclick = function() {
    modalSalatka3.style.display = "none";
}
window.onclick = function(eventSalatka3) {
    if (eventSalatka3.target == modalSalatka3) {
        modalSalatka3.style.display = "none";
    }
}
// wege
let modalWege1 = document.getElementById('wege1');
let btnWege1 = document.getElementById("btnWege1");
let spanWege1 = document.getElementsByClassName("closeWege1")[0];
btnWege1.onclick = function() {
    modalWege1.style.display = "block";
}
spanWege1.onclick = function() {
    modalWege1.style.display = "none";
}
window.onclick = function(eventWege1) {
    if (eventWege1.target == modalWege1) {
        modalWege1.style.display = "none";
    }
}
let modalWege2 = document.getElementById('wege2');
let btnWege2 = document.getElementById("btnWege2");
let spanWege2 = document.getElementsByClassName("closeWege2")[0];
btnWege2.onclick = function() {
    modalWege2.style.display = "block";
}
spanWege2.onclick = function() {
    modalWege2.style.display = "none";
}
window.onclick = function(eventWege2) {
    if (eventWege2.target == modalWege2) {
        modalWege2.style.display = "none";
    }
}
let modalWege3 = document.getElementById('wege3');
let btnWege3 = document.getElementById("btnWege3");
let spanWege3 = document.getElementsByClassName("closeWege3")[0];
btnWege3.onclick = function() {
    modalWege3.style.display = "block";
}
spanWege3.onclick = function() {
    modalWege3.style.display = "none";
}
window.onclick = function(eventWege3) {
    if (eventWege3.target == modalWege3) {
        modalWege3.style.display = "none";
    }
}