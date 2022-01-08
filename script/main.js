var nuPlayer = document.getElementById("numPlayer");
nuPlayer.innerHTML = '1';
var casilla11 = document.getElementById("cas1");
var casilla12 = document.getElementById("cas2");
var casilla13 = document.getElementById("cas3");
var casilla21 = document.getElementById("cas4");
var casilla22 = document.getElementById("cas5");
var casilla23 = document.getElementById("cas6");
var casilla31 = document.getElementById("cas7");
var casilla32 = document.getElementById("cas8");
var casilla33 = document.getElementById("cas9");
var displayTurn = document.getElementById("turn");
var tie = document.getElementById("Tie");
var turno = true;


function inicio() {
  casilla11.addEventListener('click', () => {
    if (turno) {
      let filled = casilla11.hasChildNodes();
      if (!filled) {
        casilla11.innerHTML = '<img id="equis11" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        empate();
      }
    } else {
      let filled = casilla11.hasChildNodes();
      if (!filled) {
        casilla11.innerHTML = '<img id="circulo11" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        empate();
      }
    }
  });

  casilla12.addEventListener('click', () => {
    if (turno) {
      let filled = casilla12.hasChildNodes();
      if (!filled) {
        casilla12.innerHTML = '<img id="equis12" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        empate();
      }
    } else {
      let filled = casilla12.hasChildNodes();
      if (!filled) {
        casilla12.innerHTML = '<img id="circulo12" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        empate();
      }
    }
  });

  casilla13.addEventListener('click', () => {
    if (turno) {
      let filled = casilla13.hasChildNodes();
      if (!filled) {
        casilla13.innerHTML = '<img id="equis13" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        empate();
      }
    } else {
      let filled = casilla13.hasChildNodes();
      if (!filled) {
        casilla13.innerHTML = '<img id="circulo13" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        empate();
      }
    }
  });

  casilla21.addEventListener('click', () => {
    if (turno) {
      let filled = casilla21.hasChildNodes();
      if (!filled) {
        casilla21.innerHTML = '<img id="equis21" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        empate();
      }
    } else {
      let filled = casilla21.hasChildNodes();
      if (!filled) {
        casilla21.innerHTML = '<img id="circulo21" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        empate();
      }
    }
  });

  casilla22.addEventListener('click', () => {
    if (turno) {
      let filled = casilla22.hasChildNodes();
      if (!filled) {
        casilla22.innerHTML = '<img id="equis22" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        empate();
      }
    } else {
      let filled = casilla22.hasChildNodes();
      if (!filled) {
        casilla22.innerHTML = '<img id="circulo22" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        empate();
      }
    }
  });

  casilla23.addEventListener('click', () => {
    if (turno) {
      let filled = casilla23.hasChildNodes();
      if (!filled) {
        casilla23.innerHTML = '<img id="equis23" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        empate();
      }
    } else {
      let filled = casilla23.hasChildNodes();
      if (!filled) {
        casilla23.innerHTML = '<img id="circulo23" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        empate();
      }
    }
  });

  casilla31.addEventListener('click', () => {
    if (turno) {
      let filled = casilla31.hasChildNodes();
      if (!filled) {
        casilla31.innerHTML = '<img id="equis31" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        empate();
      }
    } else {
      let filled = casilla31.hasChildNodes();
      if (!filled) {
        casilla31.innerHTML = '<img id="circulo31" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        empate();
      }
    }
  });

  casilla32.addEventListener('click', () => {
    if (turno) {
      let filled = casilla32.hasChildNodes();
      if (!filled) {
        casilla32.innerHTML = '<img id="equis32" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        empate();
      }
    } else {
      let filled = casilla32.hasChildNodes();
      if (!filled) {
        casilla32.innerHTML = '<img id="circulo32" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        empate();
      }
    }
  });

  casilla33.addEventListener('click', () => {
    if (turno) {
      let filled = casilla33.hasChildNodes();
      if (!filled) {
        casilla33.innerHTML = '<img id="equis33" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        empate();
      }
    } else {
      let filled = casilla33.hasChildNodes();
      if (!filled) {
        casilla33.innerHTML = '<img id="circulo33" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        empate();
      }
    }
  });
}

function empate() {
  let allFilled = casilla11.hasChildNodes() && casilla12.hasChildNodes() && casilla13.hasChildNodes() && casilla21.hasChildNodes() && casilla22.hasChildNodes() && casilla23.hasChildNodes() && casilla31.hasChildNodes() && casilla32.hasChildNodes() && casilla33.hasChildNodes();
  console.log(allFilled);
  if (allFilled) {
    tie.classList.toggle('visible');
    displayTurn.classList.toggle('noVisible');
    reinicio();
  }
}

function reinicio() {
  setTimeout(() => {
    let opcion = confirm("¿Deseas empezar un juego nuevo?");
    if (opcion == true) {
      location.reload();
    }
  }, 1000);
}

inicio();