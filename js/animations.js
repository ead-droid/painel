/* ════════════════════════════════════════
   Contador animado (count-up)
════════════════════════════════════════ */
function runCountUp(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1200;
  let start = null;

  function step(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    el.textContent = Math.floor(progress * target).toLocaleString('pt-BR');
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

/* ════════════════════════════════════════
   Dispara animações de entrada dos elementos
   de um slide recém inserido no DOM
════════════════════════════════════════ */
function triggerSlideAnimations(slideEl) {
  /* Contadores */
  slideEl.querySelectorAll('.count-up').forEach(el => runCountUp(el));

  /* Barras do gráfico */
  slideEl.querySelectorAll('.bar-fill').forEach(el => {
    setTimeout(() => el.classList.add('animated'), 200);
  });

  /* Itens do ranking */
  slideEl.querySelectorAll('.ranking-item').forEach(el => {
    const delay = parseFloat(el.dataset.delay || 0) * 1000;
    setTimeout(() => el.classList.add('animated'), delay + 100);
  });

  /* Elementos com data-anim */
  slideEl.querySelectorAll('[data-anim]').forEach(el => {
    const delay = parseFloat(el.dataset.delay || 0) * 1000;
    setTimeout(() => el.classList.add('animated'), delay + 60);
  });
}
