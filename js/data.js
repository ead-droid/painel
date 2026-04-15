/* ════════════════════════════════════════
   Ícones SVG (Lucide - MIT License)
════════════════════════════════════════ */
const ICONS = {
  users:     `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  grad:      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`,
  map:       `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  bell:      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
  calendar:  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  building:  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 0-2 2h-2"/></svg>`,
  sparkles:  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  extlink:   `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
};

/* ════════════════════════════════════════
   Helpers HTML
════════════════════════════════════════ */
function badge(icon, label, value) {
  return `<div class="metric-badge" data-anim="fade-up">
    <span class="metric-icon">${icon}</span>
    <div><small>${label}</small><strong>${value}</strong></div>
  </div>`;
}

function miniStat(icon, label, value) {
  return `<div class="mini-stat">
    <span class="mini-icon">${icon}</span>
    <small>${label}</small>
    <strong>${value}</strong>
  </div>`;
}

function chip(icon, text) {
  return `<div class="info-chip">${icon}<span>${text}</span></div>`;
}

/* ════════════════════════════════════════
   DEFINIÇÃO DOS SLIDES
════════════════════════════════════════ */
const slides = [

  /* ── 1. Matrículas ── */
  {
    id: 'matriculas',
    theme: 'dark',
    fullscreen: false,
    duration: 9000,
    enterAnim: 'enter-y-up',
    exitAnim:  'exit-y-up',
    eyebrow:  'Panorama da rede',
    title:    '10.000 alunos matriculados nas escolas técnicas estaduais da Seciteci/MT',
    subtitle: 'Painel institucional para exibição contínua, com leitura rápida, identidade visual do Governo de Mato Grosso e atualização simples.',
    accent:   'linear-gradient(135deg, rgba(21,54,153,0.95), rgba(14,151,227,0.84))',
    render() {
      return `
      <div class="hero-grid">
        <div class="hero-copy">
          ${badge(ICONS.users, 'Alunos matriculados', '10.000')}
          <h1 data-anim="fade-up" data-delay="0.15">Formação profissional em rede e com alcance estadual</h1>
          <p data-anim="fade-up" data-delay="0.25">Uma estrutura pensada para TV institucional, dashboards em navegador e incorporação no Google Sites sem precisar criar várias páginas separadas.</p>
          <div class="chip-row" data-anim="fade-up" data-delay="0.35">
            ${chip(ICONS.grad,     'Educação profissional')}
            ${chip(ICONS.building, 'Escolas técnicas estaduais')}
            ${chip(ICONS.sparkles, 'Página única em carrossel')}
          </div>
        </div>

        <div class="glass-panel stats-panel" data-anim="fade-left" data-delay="0.15">
          <div class="number-block">
            <strong class="count-up" data-target="10000">0</strong>
            <span class="number-label">matrículas destacadas no painel institucional</span>
          </div>
          <div class="mini-grid">
            ${miniStat(ICONS.map,      'Cobertura',       'Mato Grosso')}
            ${miniStat(ICONS.bell,     'Troca automática','Por tempo de leitura')}
            ${miniStat(ICONS.calendar, 'Formato',         'Página única')}
            ${miniStat(ICONS.sparkles, 'Publicação',      'GitHub / Vercel')}
          </div>
        </div>
      </div>`;
    }
  },

  /* ── 2. Processo Seletivo ── */
  {
    id: 'processo',
    theme: 'light',
    fullscreen: false,
    duration: 14000,
    enterAnim: 'enter-x-right',
    exitAnim:  'exit-x-right',
    eyebrow:  'Processo seletivo em andamento',
    title:    '4.893 inscritos, 1.430 vagas ofertadas e presença em 22 cidades',
    subtitle: 'Atualizado em 15/04/2026 às 09:31. O painel reúne os indicadores centrais e o ranking das maiores inscrições.',
    accent:   'linear-gradient(135deg, rgba(16,113,181,0.95), rgba(32,183,140,0.85))',
    render() {
      const ranking = [
        { id:'23', curso:'Enfermagem | Cuiabá',         inscritos: 1107, pct: 100 },
        { id:'21', curso:'Enfermagem | Cáceres',         inscritos:  608, pct:  55 },
        { id:'29', curso:'Recursos Humanos | Cuiabá',   inscritos:  513, pct:  46 },
      ];
      const colors = ['#8fdbff','#5ecbff','#3fb3ff'];

      const bars = ranking.map(r => `
        <div class="bar-row">
          <span class="bar-label">${r.curso}</span>
          <div class="bar-track">
            <div class="bar-fill" style="--w:${r.pct}%; background:${colors[ranking.indexOf(r)]}"></div>
          </div>
          <span class="bar-val">${r.inscritos.toLocaleString('pt-BR')}</span>
        </div>`).join('');

      const items = ranking.map((r, i) => `
        <div class="ranking-item" data-delay="${0.12 * (i + 1)}">
          <div class="ranking-index">${i + 1}</div>
          <div class="ranking-texts">
            <strong>${r.id} - ${r.curso}</strong>
            <span>${r.inscritos.toLocaleString('pt-BR')} inscritos</span>
          </div>
        </div>`).join('');

      return `
      <div class="selection-layout">
        <div class="glass-panel summary-panel">
          <div class="summary-top">
            ${badge(ICONS.users, 'Inscritos',        '4.893')}
            ${badge(ICONS.grad,  'Vagas ofertadas',  '1.430')}
            ${badge(ICONS.map,   'Cidades',          '22')}
          </div>
          <div class="chart-card">
            <div class="chart-header">
              <h3>Top inscrições</h3>
              <span>Procura por curso e município</span>
            </div>
            <div class="bar-chart">${bars}</div>
          </div>
        </div>
        <div class="glass-panel ranking-panel">
          <div class="ranking-header">
            <h3>Ranking de maior procura</h3>
            <span>Atualização de leitura imediata</span>
          </div>
          <div class="ranking-list">${items}</div>
        </div>
      </div>`;
    }
  },

  /* ── 3. Escolas Técnicas (fullscreen + tarjas) ── */
  {
    id: 'etecs',
    theme: 'dark',
    fullscreen: true,
    duration: 16000,
    enterAnim: 'enter-fade',
    exitAnim:  'exit-fade',
    eyebrow:  'Expansão da rede',
    title:    'Escolas Técnicas Estaduais em Mato Grosso',
    subtitle: '',
    accent:   'linear-gradient(135deg, rgba(90,140,30,0.95), rgba(40,100,20,0.85))',
    render() {
      const stats = [
        { n:'14', title:'Escolas Técnicas', sub:'em funcionamento no ano de 2024 (Prédio próprio)', delay:0.2 },
        { n:'05', title:'Escolas Técnicas', sub:'inauguradas/implantadas em 2025',                  delay:0.55 },
      ];

      const tarjas = stats.map(s => `
        <div class="etecs-tarja-group">
          <div class="etecs-tarja--number" data-anim="clip-left" data-delay="${s.delay}">
            <span data-anim="fade-up" data-delay="${s.delay + 0.25}">${s.n}</span>
          </div>
          <div class="etecs-tarja--text" data-anim="clip-left" data-delay="${s.delay + 0.15}">
            <div data-anim="fade-up" data-delay="${s.delay + 0.4}">
              <strong>${s.title}</strong>
              <span>${s.sub}</span>
            </div>
          </div>
        </div>`).join('');

      return `
      <div class="etecs-full">
        <img src="assets/etecs.png" alt="" class="etecs-full-img">
        <div class="etecs-full-overlay"></div>
        <div class="etecs-eyebrow" data-anim="fade-down" data-delay="0.1">Expansão da rede</div>
        <div class="etecs-full-stats">${tarjas}</div>
      </div>`;
    }
  },

  /* ── 4. Aprendizagem Profissional (fundo branco) ── */
  {
    id: 'aprendizagem',
    theme: 'light',
    fullscreen: true,
    duration: 15000,
    enterAnim: 'enter-x-right',
    exitAnim:  'exit-x-right',
    eyebrow:  'Aprendizagem Profissional',
    title:    'Programa de Aprendizagem Profissional',
    subtitle: '',
    accent:   'linear-gradient(135deg, rgba(21,54,153,0.95), rgba(14,151,227,0.84))',
    render() {
      const stats = [
        { value:  15, label: 'ETECs cadastradas no CNAP', delay: 0.3  },
        { value:  31, label: 'cursos registrados',         delay: 0.5  },
        { value: 107, label: 'aprendizes',                 delay: 0.7  },
      ];

      const rows = stats.map(s => `
        <div class="aprend-stat" data-anim="fade-right" data-delay="${s.delay}">
          <div class="aprend-number">
            <strong class="count-up" data-target="${s.value}">0</strong>
          </div>
          <div class="aprend-stat-divider"></div>
          <span class="aprend-label">${s.label}</span>
        </div>`).join('');

      return `
      <div class="aprend-layout">
        <div class="aprend-left">
          <div class="aprend-eyebrow" data-anim="fade-up" data-delay="0.1">Programa de Aprendizagem Profissional</div>
          <h2 class="aprend-title" data-anim="fade-up" data-delay="0.18">Atualmente, o programa conta com:</h2>
          <div class="aprend-stats">${rows}</div>
        </div>
        <div class="aprend-right" data-anim="fade-left" data-delay="0.25">
          <img src="assets/ja01.png" alt="Aprendizes" class="aprend-photo">
        </div>
      </div>`;
    }
  },

  /* ── 5. Recytec (fullscreen fundo + barra inferior) ── */
  {
    id: 'recytec',
    theme: 'dark',
    fullscreen: true,
    duration: 14500,
    enterAnim: 'enter-x-left',
    exitAnim:  'exit-x-left',
    eyebrow:  'Notícia em destaque',
    title:    'Seciteci inicia Caravana Recytec em seis cidades de Mato Grosso',
    subtitle: '',
    accent:   'linear-gradient(135deg, rgba(18,84,122,0.95), rgba(32,170,90,0.84))',
    render() {
      return `
      <div class="fullbg-layout">
        <img src="assets/recytec.png" alt="" class="fullbg-img">
        <div class="fullbg-overlay--bottom"></div>

        <div class="fullbg-header" data-anim="fade-down" data-delay="0.1">
          <span class="eyebrow">Notícia em destaque</span>
          <h2 class="fullbg-title">Seciteci inicia Caravana Recytec<br>em seis cidades de Mato Grosso</h2>
        </div>

        <div class="fullbg-bottom-bar" data-anim="fade-up" data-delay="0.25">
          <div class="fullbg-bottom-chips">
            <span class="soft-chip">Seis municípios</span>
            <span class="soft-chip">Até 28 de abril</span>
            <span class="soft-chip">Descarte correto</span>
            <span class="soft-chip">Educação ambiental</span>
          </div>
          <div class="fullbg-bottom-row">
            <p class="fullbg-bottom-text">A iniciativa começou em 9 de abril e segue até 28 de abril, com passagem por seis municípios, mobilizando a população para o descarte ambientalmente correto de resíduos eletrônicos.</p>
            <a href="https://www.secitec.mt.gov.br/w/seciteci-inicia-caravana-recytec-em-seis-cidades-de-mato-grosso"
               target="_blank" rel="noreferrer" class="news-link">
              ${ICONS.extlink} <span>Ler notícia completa</span>
            </a>
          </div>
        </div>
      </div>`;
    }
  },

  /* ── 6. Finep (fullscreen fundo + barra inferior) ── */
  {
    id: 'finep',
    theme: 'dark',
    fullscreen: true,
    duration: 15000,
    enterAnim: 'enter-zoom',
    exitAnim:  'exit-zoom',
    eyebrow:  'Inovação e fomento',
    title:    'Finep pelo Brasil apresenta em MT chamadas públicas que somam R$ 3,3 bilhões',
    subtitle: '',
    accent:   'linear-gradient(135deg, rgba(24,47,122,0.95), rgba(83,89,222,0.84))',
    render() {
      return `
      <div class="fullbg-layout">
        <img src="assets/finep.png" alt="" class="fullbg-img">
        <div class="fullbg-overlay--bottom"></div>

        <div class="fullbg-header" data-anim="fade-down" data-delay="0.1">
          <span class="eyebrow">Inovação e fomento</span>
          <h2 class="fullbg-title">Finep pelo Brasil apresenta em MT<br>chamadas públicas que somam R$ 3,3 bilhões</h2>
        </div>

        <div class="fullbg-bottom-bar" data-anim="fade-up" data-delay="0.25">
          <div class="fullbg-bottom-chips">
            <span class="soft-chip">R$ 3,3 bilhões</span>
            <span class="soft-chip">Pesquisa e inovação</span>
            <span class="soft-chip">Primavera do Leste</span>
            <span class="soft-chip">Rondonópolis</span>
          </div>
          <div class="fullbg-bottom-row">
            <p class="fullbg-bottom-text">Mato Grosso receberá duas edições do programa Finep pelo Brasil para apresentar novas oportunidades de financiamento voltadas ao desenvolvimento de projetos estratégicos.</p>
            <a href="https://www.secitec.mt.gov.br/w/apoiada-pela-seciteci-finep-pelo-brasil-apresenta-em-mt-chamadas-p%C3%BAblicas-que-somam-r-3-3-bilh%C3%B5es"
               target="_blank" rel="noreferrer" class="news-link">
              ${ICONS.extlink} <span>Ler notícia</span>
            </a>
          </div>
        </div>
      </div>`;
    }
  },

];
