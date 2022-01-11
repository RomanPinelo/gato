//Generar números aleatorios.
// 0 -> 10
// Math.floor(Math.random() * 11);
// 1 -> 10
// Math.floor(Math.random() * 10) + 1;
// 5 -> 20
// Math.floor(Math.random() * 16) + 5;
// -10 -> (-2)
// Math.floor(Math.random() * 9) - 10;
// 1 -> 9

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
var playerWinner = document.getElementById("win");
var cpuWinner = document.getElementById("win1");
var turno = true;

function playerTurn() {
  console.log(`Soy la función playerTurn`);

  casilla11.addEventListener('click', () => {
    let filled1 = casilla11.hasChildNodes();
    if (!filled1) {
      casilla11.innerHTML = '<img class="equis11" src="../img/equis1.png" style="width:100%; height:100%;">';
      console.log('equis');
      turno = false;
      winnerOrTie();
    }
  });
  
  casilla12.addEventListener('click', () => {
    let filled2 = casilla12.hasChildNodes();
    if (!filled2) {
      casilla12.innerHTML = '<img class="equis12" src="../img/equis1.png" style="width:100%; height:100%;">';
      console.log('equis');
      turno = false;
      winnerOrTie();
    }
  });
  
  casilla13.addEventListener('click', () => {
    let filled3 = casilla13.hasChildNodes();
    if (!filled3) {
      casilla13.innerHTML = '<img class="equis13" src="../img/equis1.png" style="width:100%; height:100%;">';
      console.log('equis');
      turno = false;
      winnerOrTie();
    }
  });
  
  casilla21.addEventListener('click', () => {
    let filled4 = casilla21.hasChildNodes();
    if (!filled4) {
      casilla21.innerHTML = '<img class="equis21" src="../img/equis1.png" style="width:100%; height:100%;">';
      console.log('equis');
      turno = false;
      winnerOrTie();
    }
  });
  
  casilla22.addEventListener('click', () => {
    let filled5 = casilla22.hasChildNodes();
    if (!filled5) {
      casilla22.innerHTML = '<img class="equis22" src="../img/equis1.png" style="width:100%; height:100%;">';
      console.log('equis');
      turno = false;
      winnerOrTie();
    }
  });
  
  casilla23.addEventListener('click', () => {
    let filled6 = casilla23.hasChildNodes();
    if (!filled6) {
      casilla23.innerHTML = '<img class="equis23" src="../img/equis1.png" style="width:100%; height:100%;">';
      console.log('equis');
      turno = false;
      winnerOrTie();
    }
  });
  
  casilla31.addEventListener('click', () => {
    let filled7 = casilla31.hasChildNodes();
    if (!filled7) {
      casilla31.innerHTML = '<img class="equis31" src="../img/equis1.png" style="width:100%; height:100%;">';
      console.log('equis');
      turno = false;
      winnerOrTie();
    }
  });
  
  casilla32.addEventListener('click', () => {
    let filled8 = casilla32.hasChildNodes();
    if (!filled8) {
      casilla32.innerHTML = '<img class="equis32" src="../img/equis1.png" style="width:100%; height:100%;">';
      console.log('equis');
      turno = false;
      winnerOrTie();
    }
  });
  
  casilla33.addEventListener('click', () => {
    let filled9 = casilla33.hasChildNodes();
    if (!filled9) {
      casilla33.innerHTML = '<img class="equis33" src="../img/equis1.png" style="width:100%; height:100%;">';
      console.log('equis');
      turno = false;
      winnerOrTie();
    }
  });
}

function cpuTurn() {
  let verifica = true;

  while (verifica) {
    let numRand = Math.floor(Math.random() * 9) + 1;
    console.log(`Soy la función cpuTurn y genere el número aleatorio ${numRand}`);

    switch (numRand) {
      case 1:
        let filled1 = casilla11.hasChildNodes();
        if (!filled1) {
          casilla11.innerHTML = '<img class="circulo11" src="../img/circulo1.png" style="width:100%; height:100%;">';
          console.log('circulo');
          turno = true;
          verifica = false;
          winnerOrTie();
        }

        break;

      case 2:
        let filled2 = casilla12.hasChildNodes();
        if (!filled2) {
          casilla12.innerHTML = '<img class="circulo12" src="../img/circulo1.png" style="width:100%; height:100%;">';
          console.log('circulo');
          turno = true;
          verifica = false;
          winnerOrTie();
        }

        break;

      case 3:
        let filled3 = casilla13.hasChildNodes();
        if (!filled3) {
          casilla13.innerHTML = '<img class="circulo13" src="../img/circulo1.png" style="width:100%; height:100%;">';
          console.log('circulo');
          turno = true;
          verifica = false;
          winnerOrTie();
        }

        break;

      case 4:
        let filled4 = casilla21.hasChildNodes();
        if (!filled4) {
          casilla21.innerHTML = '<img class="circulo21" src="../img/circulo1.png" style="width:100%; height:100%;">';
          console.log('circulo');
          turno = true;
          verifica = false;
          winnerOrTie();
        }

        break;

      case 5:
        let filled5 = casilla22.hasChildNodes();
        if (!filled5) {
          casilla22.innerHTML = '<img class="circulo22" src="../img/circulo1.png" style="width:100%; height:100%;">';
          console.log('circulo');
          turno = true;
          verifica = false;
          winnerOrTie();
        }

        break;

      case 6:
        let filled6 = casilla23.hasChildNodes();
        if (!filled6) {
          casilla23.innerHTML = '<img class="circulo23" src="../img/circulo1.png" style="width:100%; height:100%;">';
          console.log('circulo');
          turno = true;
          verifica = false;
          winnerOrTie();
        }

        break;

      case 7:
        let filled7 = casilla31.hasChildNodes();
        if (!filled7) {
          casilla31.innerHTML = '<img class="circulo31" src="../img/circulo1.png" style="width:100%; height:100%;">';
          console.log('circulo');
          turno = true;
          verifica = false;
          winnerOrTie();
        }

        break;

      case 8:
        let filled8 = casilla32.hasChildNodes();
        if (!filled8) {
          casilla32.innerHTML = '<img class="circulo32" src="../img/circulo1.png" style="width:100%; height:100%;">';
          console.log('circulo');
          turno = true;
          verifica = false;
          winnerOrTie();
        }

        break;

      case 9:
        let filled9 = casilla33.hasChildNodes();
        if (!filled9) {
          casilla33.innerHTML = '<img class="circulo33" src="../img/circulo1.png" style="width:100%; height:100%;">';
          console.log('circulo');
          turno = true;
          verifica = false;
          winnerOrTie();
        }

        break;
    }
  }
}

function winnerOrTie() {
  let horizontal1 = casilla11.hasChildNodes() && casilla12.hasChildNodes() && casilla13.hasChildNodes();
  let horizontal2 = casilla21.hasChildNodes() && casilla22.hasChildNodes() && casilla23.hasChildNodes();
  let horizontal3 = casilla31.hasChildNodes() && casilla32.hasChildNodes() && casilla33.hasChildNodes();
  let vertical1 = casilla11.hasChildNodes() && casilla21.hasChildNodes() && casilla31.hasChildNodes();
  let vertical2 = casilla12.hasChildNodes() && casilla22.hasChildNodes() && casilla32.hasChildNodes();
  let vertical3 = casilla13.hasChildNodes() && casilla23.hasChildNodes() && casilla33.hasChildNodes();
  let diagonal1 = casilla11.hasChildNodes() && casilla22.hasChildNodes() && casilla33.hasChildNodes();
  let diagonal2 = casilla31.hasChildNodes() && casilla22.hasChildNodes() && casilla13.hasChildNodes();

  let allFilled = casilla11.hasChildNodes() && casilla12.hasChildNodes() && casilla13.hasChildNodes() && casilla21.hasChildNodes() && casilla22.hasChildNodes() && casilla23.hasChildNodes() && casilla31.hasChildNodes() && casilla32.hasChildNodes() && casilla33.hasChildNodes();

  if (horizontal1) {
    let imagen1 = casilla11.getElementsByTagName("IMG")[0];
    let imagen2 = casilla12.getElementsByTagName("IMG")[0];
    let imagen3 = casilla13.getElementsByTagName("IMG")[0];

    if ((imagen1.classList.contains("equis11")) && (imagen2.classList.contains("equis12")) && (imagen3.classList.contains("equis13"))) {
      playerWinner.classList.toggle("visible1");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }

    if ((imagen1.classList.contains("circulo11")) && (imagen2.classList.contains("circulo12")) && (imagen3.classList.contains("circulo13"))) {
      cpuWinner.classList.toggle("visible2");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }
  }

  if (horizontal2) {
    let imagen1 = casilla21.getElementsByTagName("IMG")[0];
    let imagen2 = casilla22.getElementsByTagName("IMG")[0];
    let imagen3 = casilla23.getElementsByTagName("IMG")[0];

    if ((imagen1.classList.contains("equis21")) && (imagen2.classList.contains("equis22")) && (imagen3.classList.contains("equis23"))) {
      playerWinner.classList.toggle("visible1");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }

    if ((imagen1.classList.contains("circulo21")) && (imagen2.classList.contains("circulo22")) && (imagen3.classList.contains("circulo23"))) {
      cpuWinner.classList.toggle("visible2");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }
  }

  if (horizontal3) {
    let imagen1 = casilla31.getElementsByTagName("IMG")[0];
    let imagen2 = casilla32.getElementsByTagName("IMG")[0];
    let imagen3 = casilla33.getElementsByTagName("IMG")[0];
    
    if ((imagen1.classList.contains("equis31")) && (imagen2.classList.contains("equis32")) && (imagen3.classList.contains("equis33"))) {
      playerWinner.classList.toggle("visible1");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }

    if ((imagen1.classList.contains("circulo31")) && (imagen2.classList.contains("circulo32")) && (imagen3.classList.contains("circulo33"))) {
      cpuWinner.classList.toggle("visible2");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }
  }

  if (vertical1) {
    let imagen1 = casilla11.getElementsByTagName("IMG")[0];
    let imagen2 = casilla21.getElementsByTagName("IMG")[0];
    let imagen3 = casilla31.getElementsByTagName("IMG")[0];
    
    if ((imagen1.classList.contains("equis11")) && (imagen2.classList.contains("equis21")) && (imagen3.classList.contains("equis31"))) {
      playerWinner.classList.toggle("visible1");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }

    if ((imagen1.classList.contains("circulo11")) && (imagen2.classList.contains("circulo21")) && (imagen3.classList.contains("circulo31"))) {
      cpuWinner.classList.toggle("visible2");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }
  }

  if (vertical2) {
    let imagen1 = casilla12.getElementsByTagName("IMG")[0];
    let imagen2 = casilla22.getElementsByTagName("IMG")[0];
    let imagen3 = casilla32.getElementsByTagName("IMG")[0];
    
    if ((imagen1.classList.contains("equis12")) && (imagen2.classList.contains("equis22")) && (imagen3.classList.contains("equis32"))) {
      playerWinner.classList.toggle("visible1");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }

    if ((imagen1.classList.contains("circulo12")) && (imagen2.classList.contains("circulo22")) && (imagen3.classList.contains("circulo32"))) {
      cpuWinner.classList.toggle("visible2");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }
  }

  if (vertical3) {
    let imagen1 = casilla13.getElementsByTagName("IMG")[0];
    let imagen2 = casilla23.getElementsByTagName("IMG")[0];
    let imagen3 = casilla33.getElementsByTagName("IMG")[0];
    
    if ((imagen1.classList.contains("equis13")) && (imagen2.classList.contains("equis23")) && (imagen3.classList.contains("equis33"))) {
      playerWinner.classList.toggle("visible1");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }

    if ((imagen1.classList.contains("circulo13")) && (imagen2.classList.contains("circulo23")) && (imagen3.classList.contains("circulo33"))) {
      cpuWinner.classList.toggle("visible2");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }
  }

  if (diagonal1) {
    let imagen1 = casilla11.getElementsByTagName("IMG")[0];
    let imagen2 = casilla22.getElementsByTagName("IMG")[0];
    let imagen3 = casilla33.getElementsByTagName("IMG")[0];
    
    if ((imagen1.classList.contains("equis11")) && (imagen2.classList.contains("equis22")) && (imagen3.classList.contains("equis33"))) {
      playerWinner.classList.toggle("visible1");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }

    if ((imagen1.classList.contains("circulo11")) && (imagen2.classList.contains("circulo22")) && (imagen3.classList.contains("circulo33"))) {
      cpuWinner.classList.toggle("visible2");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }
  }

  if (diagonal2) {
    let imagen1 = casilla31.getElementsByTagName("IMG")[0];
    let imagen2 = casilla22.getElementsByTagName("IMG")[0];
    let imagen3 = casilla13.getElementsByTagName("IMG")[0];
    
    if ((imagen1.classList.contains("equis31")) && (imagen2.classList.contains("equis22")) && (imagen3.classList.contains("equis13"))) {
      playerWinner.classList.toggle("visible1");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }

    if ((imagen1.classList.contains("circulo31")) && (imagen2.classList.contains("circulo22")) && (imagen3.classList.contains("circulo13"))) {
      cpuWinner.classList.toggle("visible2");
      allFilled = false;
      clearInterval(game);
      reinicio();
    }
  }

  if (allFilled) {
    tie.classList.toggle('visible');
    clearInterval(game);
    reinicio();
  }
}

function reinicio() {
  setTimeout(() => {
    Swal.fire({
      title: '¿Deseas empezar un nuevo juego?',
      text: "",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        location.reload();
      } else {
        setTimeout( function() { window.location.href = "../index.html"; }, 1000 );
      }
    })
  }, 1500);
}

function inicio() {
  if (turno) {
    playerTurn();
  } else {
    cpuTurn();
  }
}


var game = setInterval(() => {
  inicio();
}, 100);