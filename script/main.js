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
        casilla11.innerHTML = '<img class="equis11" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        ganador1();
        ganador2();
        empate();
      }
    } else {
      let filled = casilla11.hasChildNodes();
      if (!filled) {
        casilla11.innerHTML = '<img class="circulo11" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        ganador1();
        ganador2();
        empate();
      }
    }
  });

  casilla12.addEventListener('click', () => {
    if (turno) {
      let filled = casilla12.hasChildNodes();
      if (!filled) {
        casilla12.innerHTML = '<img class="equis12" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        ganador1();
        ganador2();
        empate();
      }
    } else {
      let filled = casilla12.hasChildNodes();
      if (!filled) {
        casilla12.innerHTML = '<img class="circulo12" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        ganador1();
        ganador2();
        empate();
      }
    }
  });

  casilla13.addEventListener('click', () => {
    if (turno) {
      let filled = casilla13.hasChildNodes();
      if (!filled) {
        casilla13.innerHTML = '<img class="equis13" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        ganador1();
        ganador2();
        empate();
      }
    } else {
      let filled = casilla13.hasChildNodes();
      if (!filled) {
        casilla13.innerHTML = '<img class="circulo13" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        ganador1();
        ganador2();
        empate();
      }
    }
  });

  casilla21.addEventListener('click', () => {
    if (turno) {
      let filled = casilla21.hasChildNodes();
      if (!filled) {
        casilla21.innerHTML = '<img class="equis21" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        ganador1();
        ganador2();
        empate();
      }
    } else {
      let filled = casilla21.hasChildNodes();
      if (!filled) {
        casilla21.innerHTML = '<img class="circulo21" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        ganador1();
        ganador2();
        empate();
      }
    }
  });

  casilla22.addEventListener('click', () => {
    if (turno) {
      let filled = casilla22.hasChildNodes();
      if (!filled) {
        casilla22.innerHTML = '<img class="equis22" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        ganador1();
        ganador2();
        empate();
      }
    } else {
      let filled = casilla22.hasChildNodes();
      if (!filled) {
        casilla22.innerHTML = '<img class="circulo22" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        ganador1();
        ganador2();
        empate();
      }
    }
  });

  casilla23.addEventListener('click', () => {
    if (turno) {
      let filled = casilla23.hasChildNodes();
      if (!filled) {
        casilla23.innerHTML = '<img class="equis23" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        ganador1();
        ganador2();
        empate();
      }
    } else {
      let filled = casilla23.hasChildNodes();
      if (!filled) {
        casilla23.innerHTML = '<img class="circulo23" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        ganador1();
        ganador2();
        empate();
      }
    }
  });

  casilla31.addEventListener('click', () => {
    if (turno) {
      let filled = casilla31.hasChildNodes();
      if (!filled) {
        casilla31.innerHTML = '<img class="equis31" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        ganador1();
        ganador2();
        empate();
      }
    } else {
      let filled = casilla31.hasChildNodes();
      if (!filled) {
        casilla31.innerHTML = '<img class="circulo31" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        ganador1();
        ganador2();
        empate();
      }
    }
  });

  casilla32.addEventListener('click', () => {
    if (turno) {
      let filled = casilla32.hasChildNodes();
      if (!filled) {
        casilla32.innerHTML = '<img class="equis32" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        ganador1();
        ganador2();
        empate();
      }
    } else {
      let filled = casilla32.hasChildNodes();
      if (!filled) {
        casilla32.innerHTML = '<img class="circulo32" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        ganador1();
        ganador2();
        empate();
      }
    }
  });

  casilla33.addEventListener('click', () => {
    if (turno) {
      let filled = casilla33.hasChildNodes();
      if (!filled) {
        casilla33.innerHTML = '<img class="equis33" src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
        ganador1();
        ganador2();
        empate();
      }
    } else {
      let filled = casilla33.hasChildNodes();
      if (!filled) {
        casilla33.innerHTML = '<img class="circulo33" src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
        ganador1();
        ganador2();
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

function ganador1() {
  horizontal1 = casilla11.hasChildNodes() && casilla12.hasChildNodes() && casilla13.hasChildNodes();
  horizontal2 = casilla21.hasChildNodes() && casilla22.hasChildNodes() && casilla23.hasChildNodes();
  horizontal3 = casilla31.hasChildNodes() && casilla32.hasChildNodes() && casilla33.hasChildNodes();
  vertical1 = casilla11.hasChildNodes() && casilla21.hasChildNodes() && casilla31.hasChildNodes();
  vertical2 = casilla12.hasChildNodes() && casilla22.hasChildNodes() && casilla32.hasChildNodes();
  vertical3 = casilla13.hasChildNodes() && casilla23.hasChildNodes() && casilla33.hasChildNodes();
  diagonal1 = casilla11.hasChildNodes() && casilla22.hasChildNodes() && casilla33.hasChildNodes();
  diagonal2 = casilla31.hasChildNodes() && casilla22.hasChildNodes() && casilla13.hasChildNodes();
  if (horizontal1) {
    let imagen1 = casilla11.getElementsByTagName("IMG")[0];
    let imagen2 = casilla12.getElementsByTagName("IMG")[0];
    let imagen3 = casilla13.getElementsByTagName("IMG")[0];
    if ((imagen1.classList.contains("equis11")) && (imagen2.classList.contains("equis12")) && (imagen3.classList.contains("equis13"))) {
      console.log("Gano el jugador 1");

      reinicio();
    }
  }
  if (horizontal2) {
    let imagen1 = casilla21.getElementsByTagName("IMG")[0];
    let imagen2 = casilla22.getElementsByTagName("IMG")[0];
    let imagen3 = casilla23.getElementsByTagName("IMG")[0];
    if ((imagen1.classList.contains("equis21")) && (imagen2.classList.contains("equis22")) && (imagen3.classList.contains("equis23"))) {
      console.log("Gano el jugador 1");

      reinicio();
    }
  }
  if (horizontal3) {
    let imagen1 = casilla31.getElementsByTagName("IMG")[0];
    let imagen2 = casilla32.getElementsByTagName("IMG")[0];
    let imagen3 = casilla33.getElementsByTagName("IMG")[0];
    if ((imagen1.classList.contains("equis31")) && (imagen2.classList.contains("equis32")) && (imagen3.classList.contains("equis33"))) {
      console.log("Gano el jugador 1");

      reinicio();
    }
  }
  if (vertical1) {
    let imagen1 = casilla11.getElementsByTagName("IMG")[0];
    let imagen2 = casilla21.getElementsByTagName("IMG")[0];
    let imagen3 = casilla31.getElementsByTagName("IMG")[0];
    if ((imagen1.classList.contains("equis11")) && (imagen2.classList.contains("equis21")) && (imagen3.classList.contains("equis31"))) {
      console.log("Gano el jugador 1");

      reinicio();
    }
  }
  if (vertical2) {
    let imagen1 = casilla12.getElementsByTagName("IMG")[0];
    let imagen2 = casilla22.getElementsByTagName("IMG")[0];
    let imagen3 = casilla32.getElementsByTagName("IMG")[0];
    if ((imagen1.classList.contains("equis12")) && (imagen2.classList.contains("equis22")) && (imagen3.classList.contains("equis32"))) {
      console.log("Gano el jugador 1");

      reinicio();
    }
  }
  if (vertical3) {
    let imagen1 = casilla13.getElementsByTagName("IMG")[0];
    let imagen2 = casilla23.getElementsByTagName("IMG")[0];
    let imagen3 = casilla33.getElementsByTagName("IMG")[0];
    if ((imagen1.classList.contains("equis13")) && (imagen2.classList.contains("equis23")) && (imagen3.classList.contains("equis33"))) {
      console.log("Gano el jugador 1");

      reinicio();
    }
  }
  if (diagonal1) {
    let imagen1 = casilla11.getElementsByTagName("IMG")[0];
    let imagen2 = casilla22.getElementsByTagName("IMG")[0];
    let imagen3 = casilla33.getElementsByTagName("IMG")[0];
    if ((imagen1.classList.contains("equis11")) && (imagen2.classList.contains("equis22")) && (imagen3.classList.contains("equis33"))) {
      console.log("Gano el jugador 1");

      reinicio();
    }
  }
  if (diagonal2) {
    let imagen1 = casilla31.getElementsByTagName("IMG")[0];
    let imagen2 = casilla22.getElementsByTagName("IMG")[0];
    let imagen3 = casilla13.getElementsByTagName("IMG")[0];
    if ((imagen1.classList.contains("equis31")) && (imagen2.classList.contains("equis22")) && (imagen3.classList.contains("equis13"))) {
      console.log("Gano el jugador 1");

      reinicio();
    }
  }
}

function ganador2() {
  console.log("soy la función ganador2");
}

function reinicio() {
  setTimeout(() => {
    let opcion = confirm("¿Deseas empezar un juego nuevo?");
    if (opcion == true) {
      location.reload();
    }
  }, 1500);
}

inicio();