/* ════════════════════════════════════════
   app.js — Inicialização e escala responsiva
════════════════════════════════════════ */

const BASE_W = 1600;
const BASE_H = 900;
const canvas = document.getElementById('stage-canvas');

function applyScale() {
  const scale = Math.min(window.innerWidth / BASE_W, window.innerHeight / BASE_H);
  canvas.style.width     = BASE_W + 'px';
  canvas.style.height    = BASE_H + 'px';
  canvas.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', applyScale);
applyScale();

/* Inicia o carrossel após o DOM estar pronto */
document.addEventListener('DOMContentLoaded', () => {
  Carousel.init();
});
