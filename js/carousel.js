/* ════════════════════════════════════════
   Carousel — controla os slides
════════════════════════════════════════ */
const Carousel = (() => {
  const TRANSITION_MS = 600;

  let activeIndex = 0;
  let isPaused    = false;
  let timer       = null;
  let progStart   = null;
  let progTimer   = null;
  let isAnimating = false;

  /* Elementos do DOM */
  const stage    = document.getElementById('main-stage');
  const progBar  = document.getElementById('progress-bar');
  const dotGroup = document.getElementById('dot-group');
  const counter  = document.getElementById('slide-counter');
  const duration = document.getElementById('slide-duration');
  const logo     = document.getElementById('logo');
  const frame    = document.getElementById('page-frame');
  const shell    = document.getElementById('page-shell');
  const btn      = document.getElementById('toggle-btn');
  const btnIcon  = document.getElementById('btn-icon');
  const btnLabel = document.getElementById('btn-label');

  const PAUSE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
  const PLAY_ICON  = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;

  /* ── Dots ── */
  function buildDots() {
    dotGroup.innerHTML = slides.map((s, i) => `
      <button class="dot${i === 0 ? ' active' : ''}"
              aria-label="Ir para slide ${i + 1}"
              data-index="${i}"></button>
    `).join('');

    dotGroup.addEventListener('click', e => {
      const btn = e.target.closest('.dot');
      if (btn) goTo(parseInt(btn.dataset.index));
    });
  }

  function updateDots(index) {
    dotGroup.querySelectorAll('.dot').forEach((d, i) =>
      d.classList.toggle('active', i === index));
  }

  /* ── Meta footer ── */
  function updateMeta(index) {
    counter.textContent  = `${index + 1} / ${slides.length}`;
    duration.textContent = `${Math.round(slides[index].duration / 1000)}s de leitura`;
  }

  /* ── Logo e tema ── */
  function applyTheme(slide) {
    const isLight = slide.theme === 'light';
    frame.className = `page-frame ${isLight ? 'theme-light' : 'theme-dark'}`;
    shell.className = `page-shell ${isLight ? 'theme-light' : 'theme-dark'}`;
    logo.src = isLight ? 'assets/azul.png' : 'assets/logo.png';
    logo.onerror = () => { logo.src = 'assets/azul.png'; };
  }

  /* ── Progress bar ── */
  function startProgress(slide) {
    progBar.style.transition = 'none';
    progBar.style.width      = '0%';
    progBar.style.background = slide.accent;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progBar.style.transition = `width ${slide.duration}ms linear`;
        progBar.classList.add('running');
        progBar.style.width = '100%';
      });
    });
  }

  function pauseProgress() {
    const w = progBar.getBoundingClientRect().width;
    const total = progBar.parentElement.getBoundingClientRect().width;
    progBar.style.transition = 'none';
    progBar.style.width = `${(w / total) * 100}%`;
    progBar.classList.remove('running');
  }

  function resumeProgress() {
    const slide = slides[activeIndex];
    const current = parseFloat(progBar.style.width) / 100;
    const remaining = (1 - current) * slide.duration;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progBar.style.transition = `width ${remaining}ms linear`;
        progBar.classList.add('running');
        progBar.style.width = '100%';
      });
    });
  }

  /* ── Criar slide element ── */
  function createSlideEl(slide) {
    const el = document.createElement('div');
    el.className = 'slide-surface';
    el.dataset.id = slide.id;

    const content = document.createElement('div');
    content.className = `slide-content${slide.fullscreen ? ' fullscreen' : ''}`;

    if (!slide.fullscreen) {
      content.innerHTML = `
        <div class="slide-heading">
          <span class="eyebrow">${slide.eyebrow}</span>
          <h2>${slide.title}</h2>
          ${slide.subtitle ? `<p>${slide.subtitle}</p>` : ''}
        </div>
        <div class="slide-body">${slide.render()}</div>`;
    } else {
      content.innerHTML = `<div class="slide-body">${slide.render()}</div>`;
    }

    el.appendChild(content);
    return el;
  }

  /* ── Transição entre slides ── */
  function goTo(newIndex, force = false) {
    if ((isAnimating && !force) || newIndex === activeIndex) return;
    isAnimating = true;

    clearTimeout(timer);
    const slide = slides[newIndex];
    const prevSlide = slides[activeIndex];

    /* Saída do slide atual */
    const currentEl = stage.querySelector('.slide-surface');
    if (currentEl) {
      currentEl.classList.add(prevSlide.exitAnim);
      setTimeout(() => currentEl.remove(), TRANSITION_MS);
    }

    /* Entrada do novo slide */
    const newEl = createSlideEl(slide);
    newEl.classList.add(slide.enterAnim);
    stage.appendChild(newEl);

    /* Força reflow antes de remover a classe de entrada */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        newEl.classList.remove(slide.enterAnim);
        triggerSlideAnimations(newEl);
        isAnimating = false;
      });
    });

    activeIndex = newIndex;
    applyTheme(slide);
    updateDots(newIndex);
    updateMeta(newIndex);
    startProgress(slide);

    if (!isPaused) scheduleNext();
  }

  /* ── Timer automático ── */
  function scheduleNext() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      goTo((activeIndex + 1) % slides.length);
    }, slides[activeIndex].duration);
  }

  /* ── Pause / Resume ── */
  function togglePause() {
    isPaused = !isPaused;

    if (isPaused) {
      clearTimeout(timer);
      pauseProgress();
      btnIcon.innerHTML = PLAY_ICON;
      btnLabel.textContent = 'Retomar';
    } else {
      resumeProgress();
      btnLabel.textContent = 'Pausar';
      btnIcon.innerHTML = PAUSE_ICON;

      /* Recalcula o tempo restante baseado na progress bar */
      const current = parseFloat(progBar.style.width) / 100;
      const remaining = (1 - current) * slides[activeIndex].duration;
      timer = setTimeout(() => {
        goTo((activeIndex + 1) % slides.length);
      }, remaining);
    }
  }

  /* ── Init ── */
  function init() {
    buildDots();
    btn.addEventListener('click', togglePause);
    goTo(0, true);
  }

  return { init };
})();
