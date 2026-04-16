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
   Typewriter — letra a letra
════════════════════════════════════════ */
function runTypewriter(el) {
  const text = el.textContent;
  el.textContent = '';
  el.style.opacity = '1';
  let i = 0;
  const speed = 28;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
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

  /* Barras empilhadas (vagas) */
  slideEl.querySelectorAll('.vagas-bar').forEach(el => {
    const delay = parseFloat(el.dataset.delay || 0) * 1000;
    setTimeout(() => el.classList.add('animated'), delay + 360);
  });

  /* Linhas do gráfico de progressão (vagas) */
  slideEl.querySelectorAll('.vagas-line').forEach((el) => {
    const length = el.getTotalLength();
    el.style.strokeDasharray = String(length);
    el.style.strokeDashoffset = String(length);
    setTimeout(() => {
      el.style.transition = 'stroke-dashoffset 1.35s cubic-bezier(0.22, 1, 0.36, 1)';
      el.style.strokeDashoffset = '0';
    }, 320);
  });

  slideEl.querySelectorAll('.vpoint').forEach(el => {
    const delay = parseFloat(el.dataset.delay || 0) * 1000;
    setTimeout(() => el.classList.add('animated'), delay + 420);
  });

  /* Typewriter letra a letra */
  slideEl.querySelectorAll('[data-anim="typewriter"]').forEach(el => {
    const delay = parseFloat(el.dataset.delay || 0) * 1000;
    setTimeout(() => runTypewriter(el), delay + 60);
  });

  /* Demais elementos com data-anim (exceto typewriter) */
  slideEl.querySelectorAll('[data-anim]:not([data-anim="typewriter"])').forEach(el => {
    const delay = parseFloat(el.dataset.delay || 0) * 1000;
    setTimeout(() => el.classList.add('animated'), delay + 60);
  });
}
