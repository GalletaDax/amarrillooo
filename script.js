// xd recursos :v
const btnSorpresa = document.getElementById('btnSorpresa');
const overlay = document.getElementById('overlay');
const btnCerrar = document.getElementById('btnCerrar');
const musica = document.getElementById('musica');
const btnMusica = document.getElementById('btnMusica');

let musicaIniciada = false;

// Mostrar la foto
btnSorpresa.addEventListener('click', () => {
  overlay.classList.add('visible');

  // Iniciar la música la primera vez que se abre la foto
  if (!musicaIniciada) {
    musica.play().catch(() => {
      // Si el navegador bloquea la reproducción automática, no pasa nada creo xd
    });
    musicaIniciada = true;
    btnMusica.textContent = '🔊';
  }
});

// Cerrar la foto
btnCerrar.addEventListener('click', () => {
  overlay.classList.remove('visible');
});

// Cerrar también si se hace clic fuera de la tarjeta
overlay.addEventListener('click', (evento) => {
  if (evento.target === overlay) {
    overlay.classList.remove('visible');
  }
});

// Control de música (pausar / reproducir)
btnMusica.addEventListener('click', () => {
  if (musica.paused) {
    musica.play().catch(() => {});
    btnMusica.textContent = '🔊';
  } else {
    musica.pause();
    btnMusica.textContent = '🔈';
  }
  musicaIniciada = true;
});
