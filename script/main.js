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
var tie = document.getElementById("Tie");
var turno = true;


function inicio() {
  casilla11.addEventListener('click', () => {
    if (turno) {
      let filled = casilla11.hasChildNodes();
      if (!filled) {
        casilla11.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
      }
    } else {
      let filled = casilla11.hasChildNodes();
      if (!filled) {
        casilla11.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
      }
    }
  });

  casilla12.addEventListener('click', () => {
    if (turno) {
      let filled = casilla12.hasChildNodes();
      if (!filled) {
        casilla12.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
      }
    } else {
      let filled = casilla12.hasChildNodes();
      if (!filled) {
        casilla12.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
      }
    }
  });

  casilla13.addEventListener('click', () => {
    if (turno) {
      let filled = casilla13.hasChildNodes();
      if (!filled) {
        casilla13.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
      }
    } else {
      let filled = casilla13.hasChildNodes();
      if (!filled) {
        casilla13.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
      }
    }
  });

  casilla21.addEventListener('click', () => {
    if (turno) {
      let filled = casilla21.hasChildNodes();
      if (!filled) {
        casilla21.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
      }
    } else {
      let filled = casilla21.hasChildNodes();
      if (!filled) {
        casilla21.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
      }
    }
  });

  casilla22.addEventListener('click', () => {
    if (turno) {
      let filled = casilla22.hasChildNodes();
      if (!filled) {
        casilla22.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
      }
    } else {
      let filled = casilla22.hasChildNodes();
      if (!filled) {
        casilla22.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
      }
    }
  });

  casilla23.addEventListener('click', () => {
    if (turno) {
      let filled = casilla23.hasChildNodes();
      if (!filled) {
        casilla23.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
      }
    } else {
      let filled = casilla23.hasChildNodes();
      if (!filled) {
        casilla23.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
      }
    }
  });

  casilla31.addEventListener('click', () => {
    if (turno) {
      let filled = casilla31.hasChildNodes();
      if (!filled) {
        casilla31.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
      }
    } else {
      let filled = casilla31.hasChildNodes();
      if (!filled) {
        casilla31.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
      }
    }
  });

  casilla32.addEventListener('click', () => {
    if (turno) {
      let filled = casilla32.hasChildNodes();
      if (!filled) {
        casilla32.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
      }
    } else {
      let filled = casilla32.hasChildNodes();
      if (!filled) {
        casilla32.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
      }
    }
  });

  casilla33.addEventListener('click', () => {
    if (turno) {
      let filled = casilla33.hasChildNodes();
      if (!filled) {
        casilla33.innerHTML = '<img src="./img/equis1.png" style="width:100%; height:100%;">';
        console.log('equis');
        nuPlayer.innerHTML = '2';
        turno = false;
      }
    } else {
      let filled = casilla33.hasChildNodes();
      if (!filled) {
        casilla33.innerHTML = '<img src="./img/circulo1.png" style="width:100%; height:100%;">';
        console.log('circulo');
        nuPlayer.innerHTML = '1';
        turno = true;
      }
    }
  });
}



inicio();
