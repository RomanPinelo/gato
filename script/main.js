//Vantana que muestra el mensaje de modo de juego -> Uno 
//o dos jugadores.

Swal.fire({
  title: '¿Qué modo de juego quieres?',
  icon: "question",
  showDenyButton: true,
  showCancelButton: false,
  confirmButtonText: 'Un jugador',
  denyButtonText: `Dos jugadores`,
  confirmButtonColor: "#00f",
  denyButtonColor: "#f00",
}).then((result) => {
  if (result.isConfirmed) {
    setTimeout( function() { window.location.href = "../html/unjugador.html"; }, 1000 );
  } else if (result.isDenied) {
    setTimeout( function() { window.location.href = "../html/dosjugadores.html"; }, 1000 );
  }
})