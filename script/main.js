var nuPlayer = document.getElementById("numPlayer");
var casilla11 = document.getElementById("cas1");
var casilla12 = document.getElementById("cas2");
var casilla13 = document.getElementById("cas3");
var casilla21 = document.getElementById("cas4");
var casilla22 = document.getElementById("cas5");
var casilla23 = document.getElementById("cas6");
var casilla31 = document.getElementById("cas7");
var casilla32 = document.getElementById("cas8");
var casilla33 = document.getElementById("cas9");
var tie = document.getElementById("Tie");
var turno = true;
var tiros = 9;


function insertaX() {
  casilla11.addEventListener('click', () => {
    casilla11.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
    console.log('casilla 1 llena');
    turno = false;
    inicio();
  });
  casilla12.addEventListener('click', () => {
    casilla12.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
    console.log('casilla 2 llena');
    turno = false;
    inicio();
  });
  casilla13.addEventListener('click', () => {
    casilla13.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
    console.log('casilla 3 llena');
    turno = false;
    inicio();
  });
  casilla21.addEventListener('click', () => {
    casilla21.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
    console.log('casilla 4 llena'); 
    turno = false;
    inicio();
  });
  casilla22.addEventListener('click', () => {
    casilla22.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
    console.log('casilla 5 llena');
    turno = false;
    inicio();
  });
  casilla23.addEventListener('click', () => {
    casilla23.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
    console.log('casilla 6 llena');
    turno = false;
    inicio();
  });
  casilla31.addEventListener('click', () => {
    casilla31.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
    console.log('casilla 7 llena');
    turno = false;
    inicio();
  });
  casilla32.addEventListener('click', () => {
    casilla32.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
    console.log('casilla 8 llena');
    turno = false;
    inicio();
  });
  casilla33.addEventListener('click', () => {
    casilla33.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
    console.log('casilla 9 llena');
    turno = false;
    inicio();
  });
}

function insertaO() {
  casilla11.addEventListener('click', () => {
    casilla11.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
    console.log('casilla 2 llena');
    turno = true;
    inicio();
  });
  casilla12.addEventListener('click', () => {
    casilla12.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
    console.log('casilla 2 llena');
    turno = true;
    inicio();
  });
  casilla13.addEventListener('click', () => {
    casilla13.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
    console.log('casilla 3 llena');
    turno = true;
    inicio();
  });
  casilla21.addEventListener('click', () => {
    casilla21.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
    console.log('casilla 4 llena');
    turno = true;
    inicio();
  });
  casilla22.addEventListener('click', () => {
    casilla22.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
    console.log('casilla 5 llena');
    turno = true;
    inicio();
  });
  casilla23.addEventListener('click', () => {
    casilla23.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
    console.log('casilla 6 llena');
    turno = true;
    inicio();
  });
  casilla31.addEventListener('click', () => {
    casilla31.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
    console.log('casilla 7 llena');
    turno = true;
    inicio();
  });
  casilla32.addEventListener('click', () => {
    casilla32.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
    console.log('casilla 8 llena');
    turno = true;
    inicio();
  });
  casilla33.addEventListener('click', () => {
    casilla33.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
    console.log('casilla 9 llena');
    turno = true;
    inicio();
  });
}

function inicio() {
  if (turno) {
    nuPlayer.innerHTML = '1';
    insertaX();
  } else { 
    nuPlayer.innerHTML = '2';
    insertaO();
  }
}

inicio();

//tie.classList.toggle('visible');