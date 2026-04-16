const ICONS = {
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  grad: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`,
  map: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  bell: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  building: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 0-2 2h-2"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  extlink: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
};

function badge(icon, label, value, extraClass = '') {
  return `<div class="metric-badge ${extraClass}" data-anim="fade-up">
    <span class="metric-icon">${icon}</span>
    <div><small>${label}</small><strong>${value}</strong></div>
  </div>`;
}

function chip(icon, text) {
  return `<div class="info-chip">${icon}<span>${text}</span></div>`;
}

const slides = [
  {
    id: 'matriculas',
    theme: 'dark',
    fullscreen: true,
    duration: 13000,
    enterAnim: 'enter-y-up',
    exitAnim: 'exit-y-up',
    eyebrow: '',
    title: '',
    subtitle: '',
    accent: 'linear-gradient(90deg, #245fff, #51d3ff)',
    render() {
      return `
      <div class="bb-layout">
        <img src="assets/aluno.png" alt="Estudantes das ETECs" class="bb-bg">
        <div class="bb-overlay"></div>
        <div class="bb-glow-orb"></div>

        <div class="bb-particle bb-p1"></div>
        <div class="bb-particle bb-p2"></div>
        <div class="bb-particle bb-p3"></div>
        <div class="bb-particle bb-p4"></div>

        <div class="bb-accent-bar" data-anim="clip-left" data-delay="0.04"></div>

        <div class="bb-content">
          <div class="bb-badge" data-anim="fade-down" data-delay="0.08">
            ${ICONS.grad}<span>ETECs • Educação profissional em movimento</span>
          </div>
          <h1 class="bb-title" data-anim="fade-up" data-delay="0.16">
            Uma rede que cresce e fortalece a educação profissional.
          </h1>
          <div class="bb-divider" data-anim="clip-left" data-delay="0.24"></div>
          <div class="bb-number-row">
            <strong class="bb-number count-up" data-target="10600" data-anim="fade-up" data-delay="0.28">0</strong>
            <div class="bb-number-aside" data-anim="fade-left" data-delay="0.40">
              <span class="bb-n-main">alunos matriculados</span>
              <span class="bb-n-sub">hoje, nos cursos técnicos ofertados pelas ETECs</span>
            </div>
          </div>
        </div>

        </div>
      </div>`;
    }
  },

  {
    id: 'processo',
    theme: 'light',
    fullscreen: false,
    duration: 14000,
    enterAnim: 'enter-x-right',
    exitAnim: 'exit-x-right',
    eyebrow: 'PROCESSO SELETIVO DE ALUNO EM ANDAMENTO',
    title: 'INSCRI&Ccedil;&Otilde;ES ONLINE',
    subtitle: 'Seciteci abre inscri&ccedil;&otilde;es para cursos t&eacute;cnicos gratuitos',
    accent: 'linear-gradient(90deg, #1d63ff, #31b8ff)',
    render() {
      const ranking = [
        { id: '23', curso: 'Enfermagem | Cuiaba', inscritos: 1107, pct: 100 },
        { id: '21', curso: 'Enfermagem | Caceres', inscritos: 608, pct: 55 },
        { id: '29', curso: 'Recursos Humanos | Cuiaba', inscritos: 513, pct: 46 },
      ];

      const colors = ['linear-gradient(90deg, #2057c5, #34b6ff)', 'linear-gradient(90deg, #2f78ff, #72dcff)', 'linear-gradient(90deg, #52b5ff, #7be0ff)'];

      const bars = ranking.map((item, index) => `
        <div class="bar-row">
          <span class="bar-label">${item.curso}</span>
          <div class="bar-track">
            <div class="bar-fill" style="--w:${item.pct}%; background:${colors[index]}"></div>
          </div>
          <span class="bar-val">${item.inscritos.toLocaleString('pt-BR')}</span>
        </div>`).join('');

      const items = ranking.map((item, index) => `
        <div class="ranking-item" data-delay="${0.10 * (index + 1)}">
          <div class="ranking-index">${index + 1}</div>
          <div class="ranking-texts">
            <strong>${item.id} - ${item.curso}</strong>
            <span>Curso entre os maiores volumes de inscri&ccedil;&otilde;es desta janela.</span>
          </div>
          <div class="ranking-value">${item.inscritos.toLocaleString('pt-BR')}</div>
        </div>`).join('');

      return `
      <div class="selection-layout">
        <div class="glass-panel summary-panel">
          <div class="summary-top">
            ${badge(ICONS.users, 'Inscritos', '4.893', 'kpi-strong')}
            ${badge(ICONS.grad, 'Vagas ofertadas', '1.430', 'kpi-strong')}
            ${badge(ICONS.map, 'Cidades atendidas', '22', 'kpi-strong')}
          </div>
          <div class="chart-card">
            <div class="chart-header">
              <h3>Top inscri&ccedil;&otilde;es</h3>
              <span>Comparativo de procura por curso e munic&iacute;pio no processo atual.</span>
            </div>
            <div class="bar-chart">${bars}</div>
          </div>
        </div>

      </div>`;
    }
  },
  {
    id: 'etecs',
    theme: 'dark',
    fullscreen: true,
    duration: 15000,
    enterAnim: 'enter-fade',
    exitAnim: 'exit-fade',
    eyebrow: 'Expansão da rede',
    title: 'Escolas Técnicas Estaduais',
    subtitle: '',
    accent: 'linear-gradient(90deg, #84b42e, #d2ef69)',
    render() {
      return `
      <div class="etecs-dashboard">
        <img src="assets/etecs.png" alt="Escolas Técnicas Estaduais" class="etecs-bg">
        <div class="etecs-overlay"></div>

        <div class="etecs-copy">
          <div class="etecs-top-block">
            <span class="etecs-eyebrow-tag" data-anim="fade-down" data-delay="0.06">Crescimento de 70% em 3 anos — 2022 a 2025</span>
            <h2 class="etecs-title" data-anim="fade-up" data-delay="0.14">
              De 10 para 17 ETECs:<span class="etecs-title-sub"> o maior ciclo de expansão técnica da história de Mato Grosso</span>
            </h2>
            <p class="etecs-summary" data-anim="fade-up" data-delay="0.22">Em apenas 3 anos, o estado saiu de 10 para 17 Escolas Técnicas Estaduais — crescimento de 70%. Os municípios atendidos quase dobraram e os cursos gratuitos cresceram mais de 85%. Uma transformação real, com infraestrutura e alcance territorial sem precedentes.</p>
          </div>
          <div class="chip-row" data-anim="fade-up" data-delay="0.32">
            ${chip(ICONS.building, 'Rede pública estadual em expansão')}
            ${chip(ICONS.sparkles, '+70% de crescimento desde 2022')}
          </div>
        </div>

        <div class="etecs-side">
          <div class="etecs-stat-card etecs-stat-card--compact" data-anim="fade-left" data-delay="0.16">
            <small class="etecs-stat-label">ETECs em operação — 2024</small>
            <div class="etecs-compact-row">
              <strong class="count-up" data-target="15">0</strong>
              <span>Partindo de 10 em 2022 — a rede cresceu 50% em apenas dois anos.</span>
            </div>
          </div>
          <div class="etecs-stat-card etecs-stat-card--compact" data-anim="fade-left" data-delay="0.24">
            <small class="etecs-stat-label">Novas escolas construídas desde 2022</small>
            <div class="etecs-compact-row">
              <strong class="count-up" data-target="7">0</strong>
              <span>Unidades entregues no ciclo, ampliando a presença em novos municípios.</span>
            </div>
          </div>
          <div class="etecs-stat-card etecs-stat-card--featured" data-anim="fade-left" data-delay="0.34">
            <small class="etecs-stat-label">ETECs em operação — 2025</small>
            <div class="etecs-featured-row">
              <strong class="count-up" data-target="17">0</strong>
              <span class="etecs-featured-desc">O maior número de escolas técnicas estaduais já registrado em Mato Grosso — crescimento exponencial desde 2022</span>
            </div>
          </div>

        </div>
      </div>`;
    }
  },
  {
    id: 'aprendizagem',
    theme: 'light',
    fullscreen: true,
    duration: 15000,
    enterAnim: 'enter-x-right',
    exitAnim: 'exit-x-right',
    eyebrow: 'Aprendizagem profissional',
    title: 'Programa de Aprendizagem Profissional',
    subtitle: '',
    accent: 'linear-gradient(90deg, #2057c5, #34b6ff)',
    render() {
      return `
      <div class="aprend-layout">
        <div class="glass-panel aprend-left">
          <div class="aprend-head">
            <div class="aprend-eyebrow" data-anim="fade-up" data-delay="0.08">Programa de Aprendizagem Profissional</div>
            <h2 class="aprend-title" data-anim="fade-up" data-delay="0.14">Dashboard de acompanhamento com foco em presença institucional, cursos e alcance de aprendizes</h2>
            <p class="aprend-support" data-anim="fade-up" data-delay="0.20">A leitura agora valoriza KPIs, blocos de contexto e uma imagem integrada ao conjunto, aproximando a tela de um produto institucional premium.</p>
          </div>

          <div class="aprend-kpis">
            <div class="aprend-kpi" data-anim="fade-up" data-delay="0.26">
              <strong class="count-up" data-target="15">0</strong>
              <span>ETECs cadastradas no CNAP para operação do programa.</span>
            </div>
            <div class="aprend-kpi" data-anim="fade-up" data-delay="0.32">
              <strong class="count-up" data-target="31">0</strong>
              <span>Cursos registrados compondo a carteira ativa de oferta.</span>
            </div>
            <div class="aprend-kpi" data-anim="fade-up" data-delay="0.38">
              <strong class="count-up" data-target="107">0</strong>
              <span>Aprendizes vinculados ao programa em monitoramento institucional.</span>
            </div>
          </div>

          <div class="aprend-insights">
            <div class="insight-card" data-anim="fade-right" data-delay="0.34">
              <strong>Mais clareza visual</strong>
              <span>KPIs em cards independentes melhoram leitura, contraste e memorabilidade em exibição contínua.</span>
            </div>
            <div class="insight-card" data-anim="fade-right" data-delay="0.40">
              <strong>Imagem com função narrativa</strong>
              <span>A fotografia deixa de ser apenas decorativa e passa a equilibrar o lado analitico do dashboard.</span>
            </div>
          </div>
        </div>

        <div class="aprend-right" data-anim="fade-left" data-delay="0.22">
          <img src="assets/ja01.png" alt="Aprendizes em atividade" class="aprend-photo">
          <div class="aprend-photo-overlay"></div>
          <div class="aprend-photo-panel">
            <strong>Formação conectada ao mundo do trabalho</strong>
            <span>Composição premium com melhor distribuição entre texto, indicadores e imagem para apresentação institucional em grande formato.</span>
          </div>
        </div>
      </div>`;
    }
  },
  {
    id: 'recytec',
    theme: 'dark',
    fullscreen: true,
    duration: 14500,
    enterAnim: 'enter-x-left',
    exitAnim: 'exit-x-left',
    eyebrow: 'Notícia em destaque',
    title: 'Seciteci inicia Caravana Recytec em seis cidades de Mato Grosso',
    subtitle: '',
    accent: 'linear-gradient(90deg, #1c6d94, #44d296)',
    render() {
      return `
      <div class="fullbg-layout">
        <img src="assets/recytec.png" alt="Caravana Recytec" class="fullbg-img">
        <div class="fullbg-overlay--bottom"></div>

        <div class="fullbg-header" data-anim="fade-down" data-delay="0.10">
          <span class="eyebrow">Notícia em destaque</span>
          <h2 class="fullbg-title">Seciteci inicia Caravana Recytec em seis cidades de Mato Grosso</h2>
          <p class="news-meta">Iniciativa com foco em descarte correto de resíduos eletrônicos, educação ambiental e mobilização da população.</p>
        </div>

        <div class="fullbg-bottom-bar" data-anim="fade-up" data-delay="0.24">
          <div class="news-panel">
            <h3>Resumo executivo</h3>
            <p>A caravana começou em 9 de abril e segue até 28 de abril, percorrendo seis municípios e fortalecendo a agenda de sustentabilidade com ação territorial, serviço e visibilidade institucional.</p>
          </div>
          <div class="news-sidebar">
            <div class="news-stats">
              <div class="news-stat">
                <strong>6</strong>
                <span>Municípios atendidos pela agenda itinerante.</span>
              </div>
              <div class="news-stat">
                <strong>20</strong>
                <span>Dias de mobilização previstos na caravana.</span>
              </div>
            </div>
            <a href="https://www.secitec.mt.gov.br/w/seciteci-inicia-caravana-recytec-em-seis-cidades-de-mato-grosso" target="_blank" rel="noreferrer" class="news-link">
              ${ICONS.extlink}<span>Ler notícia completa</span>
            </a>
          </div>
        </div>
      </div>`;
    }
  },
  {
    id: 'vagas',
    theme: 'light',
    fullscreen: false,
    duration: 14000,
    theme: 'dark',
    exitAnim: 'exit-x-right',
    eyebrow: 'Formação profissional',
    title: 'Evolu&ccedil;&atilde;o das Vagas T&eacute;cnicas Ofertadas',
    subtitle: 'Distribui&ccedil;&atilde;o ao longo dos anos',
    accent: 'linear-gradient(90deg, #1d63ff, #31b8ff)',
    render() {
      const years = [
        { year: '2022', subseq: 1650, inter: 0,    fic: 3057 },
        { year: '2023', subseq: 688,  inter: 0,    fic: 2552 },
        { year: '2024', subseq: 1960, inter: 1645, fic: 2205 },
        { year: '2025', subseq: 1820, inter: 4025, fic: 920  },
        { year: '2026', subseq: 1800, inter: 7105, fic: 2880 },
      ];


      const series = years.map((d) => ({
        year: d.year,
        tecnico: d.subseq + d.inter,
        fic: d.fic,
      }));

      const maxValue = Math.max(...series.flatMap((d) => [d.tecnico, d.fic]));
      const roundedMax = maxValue;
      const tickCount = 5;
      const ticks = Array.from({ length: tickCount + 1 }, (_, index) => {
        const value = roundedMax - (roundedMax / tickCount) * index;
        return `<span>${value.toLocaleString('pt-BR')}</span>`;
      }).join('');
      const gridlines = Array.from({ length: tickCount + 1 }, () => '<div class="vagas-gridline"></div>').join('');

      const xStart = 4;
      const xEnd = 96;
      const xStep = (xEnd - xStart) / (series.length - 1);
      const plotTop = 2;
      const plotBottom = 90;
      const toY = (value) => plotBottom - ((value / roundedMax) * (plotBottom - plotTop));

      const techPoints = series.map((d, index) => `${(index * xStep).toFixed(2)},${toY(d.tecnico).toFixed(2)}`).join(' ');
      const techArea = `${xStart},${plotBottom} ${techPoints} ${xEnd},${plotBottom}`;
      const pointGroups = series.map((d, index) => `
        <div class="vpoint vpoint-tech" style="left:${(xStart + index * xStep).toFixed(2)}%; top:${toY(d.tecnico).toFixed(2)}%; width:0; height:0; overflow:visible;" data-delay="${(0.22 + index * 0.08).toFixed(2)}">
          <span class="vpoint-value" style="position:absolute; left:50%; top:-42px; transform:translateX(-50%); margin:0;">${d.tecnico.toLocaleString('pt-BR')}</span>
        </div>`).join('');
      const xLabels = series.map((d, index) => `
        <span class="vagas-x-label" style="left:${(xStart + index * xStep).toFixed(2)}%">${d.year}</span>`).join('');

      return `
      <div class="vagas-layout">
        <div class="vagas-legend-row" data-anim="fade-down" data-delay="0.06">
          <div class="vleg-item"><span class="vleg-dot vleg-tech"></span>T&eacute;cnicos (Subsequente + Intercomplementar)</div>

        </div>
        <div class="vagas-chart-area">
          <div class="vagas-y-axis">${ticks}</div>
          <div class="vagas-chart-inner">
            <div class="vagas-gridlines">${gridlines}</div>
            <svg class="vagas-line-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="vagas-tech-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#38c97a" />
                  <stop offset="100%" stop-color="#4aaeff" />
                </linearGradient>
              </defs>
              <polygon class="vagas-area-tech" points="${techArea}"></polygon>
              <polyline class="vagas-line vagas-line-tech" points="${techPoints}"></polyline>
            </svg>
            <div class="vagas-points-layer">${pointGroups}</div>
            <div class="vagas-x-axis">${xLabels}</div>
          </div>
        </div>
      </div>`;

    }
  },

  {
    id: 'finep',
    theme: 'dark',
    fullscreen: true,
    duration: 15000,
    enterAnim: 'enter-zoom',
    exitAnim: 'exit-zoom',
    eyebrow: 'Inovação e fomento',
    title: 'Finep pelo Brasil apresenta em MT chamadas públicas que somam R$ 3,3 bilhões',
    subtitle: '',
    accent: 'linear-gradient(90deg, #294dbd, #5f77ff)',
    render() {
      return `
      <div class="fullbg-layout">
        <img src="assets/finep.png" alt="Finep pelo Brasil" class="fullbg-img">
        <div class="fullbg-overlay--bottom"></div>

        <div class="fullbg-header" data-anim="fade-down" data-delay="0.10">
          <span class="eyebrow">Inovação e fomento</span>
          <h2 class="fullbg-title">Finep pelo Brasil apresenta em MT chamadas públicas que somam R$ 3,3 bilhões</h2>
          <p class="news-meta">Agenda orientada ao financiamento de pesquisa, inovação e desenvolvimento de projetos estratégicos em Mato Grosso.</p>
        </div>

        <div class="fullbg-bottom-bar" data-anim="fade-up" data-delay="0.24">
          <div class="news-panel">
            <h3>Leitura institucional</h3>
            <p>Mato Grosso receberá duas edições do programa Finep pelo Brasil, ampliando a visibilidade das oportunidades de fomento para ecossistemas de pesquisa, empresas e projetos de inovação estratégica.</p>
          </div>
          <div class="news-sidebar">
            <div class="news-stats">
              <div class="news-stat">
                <strong>R$ 3,3 bi</strong>
                <span>Montante somado das chamadas públicas apresentadas.</span>
              </div>
              <div class="news-stat">
                <strong>2</strong>
                <span>Edições do programa previstas em Mato Grosso.</span>
              </div>
            </div>
            <a href="https://www.secitec.mt.gov.br/w/apoiada-pela-seciteci-finep-pelo-brasil-apresenta-em-mt-chamadas-p%C3%BAblicas-que-somam-r-3-3-bilh%C3%B5es" target="_blank" rel="noreferrer" class="news-link">
              ${ICONS.extlink}<span>Ler notícia</span>
            </a>
          </div>
        </div>
      </div>`;
    }
  },
  {
    id: 'arco-servicos-administrativos',
    theme: 'light',
    fullscreen: true,
    duration: 16000,
    enterAnim: 'enter-zoom',
    exitAnim: 'exit-zoom',
    eyebrow: '',
    title: '',
    subtitle: '',
    accent: 'linear-gradient(90deg, #1c50dc, #2d7bff)',
    render() {
      return `
      <div class="arco-l-layout">

        <div class="arco-l-top">

          <!-- R1 C1: texto principal -->
          <div class="arco-l-text-section" data-anim="fade-up" data-delay="0.06">
            <div class="arco-l-badge" data-anim="fade-down" data-delay="0.08">Coordenação de Educação a Distância</div>
            <h2 class="arco-l-title" data-anim="typewriter" data-delay="0.14">Trilha de qualificação profissional em EAD</h2>
            <p class="arco-l-subtitle" data-anim="fade-up" data-delay="0.60">Arco de Serviços Administrativos</p>
          </div>

          <!-- R2 C1: card azul -->
          <div class="arco-l-current" data-anim="fade-up" data-delay="0.18">
            <img src="assets/serv.png" alt="Serviços Administrativos" class="arco-l-current-bg">
            <div class="arco-l-current-overlay"></div>
            <div class="arco-l-current-chip">Oferta atual</div>
            <div class="arco-l-current-row">
              <strong class="arco-l-number count-up" data-target="260" data-anim="fade-up" data-delay="0.22">0</strong>
              <div class="arco-l-current-texts">
                <span class="arco-l-current-title">Qualificação em Auxiliar de Pessoal EAD</span>
                <span class="arco-l-current-sub">alunos matriculados • início em 13/04/2026</span>
              </div>
            </div>
          </div>

          <div class="arco-l-right-section" data-anim="fade-left" data-delay="0.10">
            <div class="arco-l-courses-hdr">
              <span class="arco-l-courses-title">Cursos já ofertados no arco</span>
              <span class="arco-l-courses-kicker">Concluintes</span>
            </div>

            <!-- R2 C2: grid de cursos -->
            <div class="arco-l-courses-grid">
              <div class="arco-l-course-card" data-anim="fade-up" data-delay="0.18">
                <div class="arco-l-course-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>
                </div>
                <span class="arco-l-course-name">Habilidades Profissionais para a Vida Profissional</span>
                <strong class="arco-l-course-num count-up" data-target="97">0</strong>
                <span class="arco-l-course-label">concluintes</span>
              </div>
              <div class="arco-l-course-card" data-anim="fade-up" data-delay="0.22">
                <div class="arco-l-course-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                </div>
                <span class="arco-l-course-name">Auxiliar de Escritório</span>
                <strong class="arco-l-course-num count-up" data-target="22">0</strong>
                <span class="arco-l-course-label">concluintes</span>
              </div>
              <div class="arco-l-course-card" data-anim="fade-up" data-delay="0.26">
                <div class="arco-l-course-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 0-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
                </div>
                <span class="arco-l-course-name">Assistente Administrativo</span>
                <strong class="arco-l-course-num count-up" data-target="103">0</strong>
                <span class="arco-l-course-label">concluintes</span>
              </div>
              <div class="arco-l-course-card" data-anim="fade-up" data-delay="0.30">
                <div class="arco-l-course-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
                </div>
                <span class="arco-l-course-name">Informática Básica</span>
                <strong class="arco-l-course-num count-up" data-target="44">0</strong>
                <span class="arco-l-course-label">concluintes</span>
              </div>
            </div>
          </div>

        </div>

        <div class="arco-l-closing" data-anim="fade-up" data-delay="0.40">
          <strong>Uma trilha de qualificação que cresce e fortalece o desenvolvimento profissional.</strong>
        </div>
      </div>`;
    }
  },
  {
    id: 'regulacao-supervisao-es',
    theme: 'dark',
    fullscreen: true,
    duration: 17000,
    enterAnim: 'enter-zoom',
    exitAnim: 'exit-zoom',
    eyebrow: '',
    title: '',
    subtitle: '',
    accent: 'linear-gradient(90deg, #1c50dc, #2d7bff)',
    render() {
      const products = [
        { name: 'Avalia&ccedil;&atilde;o de Cursos Superiores', y2023: 10, y2024: 17, y2025: 24, y2026: 29 },
        { name: 'Credenciamento de Institui&ccedil;&otilde;es', y2023: 0, y2024: 0, y2025: 1, y2026: 1 },
        { name: 'Forma&ccedil;&atilde;o Continuada', y2023: 3, y2024: 4, y2025: 3, y2026: 6 },
        { name: 'Publica&ccedil;&atilde;o Revista C&amp;T', y2023: 1, y2024: 1, y2025: 1, y2026: 0 },
      ];
      const totals = {
        y2023: products.reduce((s, p) => s + p.y2023, 0),
        y2024: products.reduce((s, p) => s + p.y2024, 0),
        y2025: products.reduce((s, p) => s + p.y2025, 0),
        y2026: products.reduce((s, p) => s + p.y2026, 0),
      };

      const rows = products.map((item, i) => `
        <div class='rg2-row' data-anim='fade-up' data-delay='${(0.22 + i * 0.07).toFixed(2)}'>
          <div class='rg2-cell rg2-cell-name'>${item.name}</div>
          <div class='rg2-cell rg2-cell-val'>${item.y2023}</div>
          <div class='rg2-cell rg2-cell-val'>${item.y2024}</div>
          <div class='rg2-cell rg2-cell-val'>${item.y2025}</div>
          <div class='rg2-cell rg2-cell-val rg2-cell-accent'>${item.y2026}</div>
        </div>`).join('');

      const productTags = products.map(p =>
        `<span class='rg2-ptag'>${p.name}</span>`).join('');

      return `
      <div class='rg2-layout'>
        <div class='rg2-bg-grid'></div>
        <div class='rg2-bg-glow'></div>
        <div class='rg2-fade-bottom'></div>

        <div class='rg2-main' data-anim='fade-up' data-delay='0.06'>
          <span class='rg2-eyebrow' data-anim='fade-down' data-delay='0.08'>Coordenadoria de Regula&ccedil;&atilde;o e Supervis&atilde;o da Educa&ccedil;&atilde;o Superior</span>
          <h2 class='rg2-headline' data-anim='fade-up' data-delay='0.14'>
            Regulando e fortalecendo<br>a educa&ccedil;&atilde;o superior<br><span class='rg2-headline-hi'>em Mato Grosso</span>
          </h2>
          <p class='rg2-lead' data-anim='fade-up' data-delay='0.22'>Produtos de avalia&ccedil;&atilde;o, credenciamento, forma&ccedil;&atilde;o e publica&ccedil;&atilde;o cient&iacute;fica acompanhados com crescimento expressivo de 2023 a 2026.</p>
          <div class='rg2-ptags' data-anim='fade-up' data-delay='0.28'>${productTags}</div>
        </div>

        <div class='rg2-bottom' data-anim='fade-up' data-delay='0.32'>
          <div class='rg2-card-wide'>
            <strong class='rg2-card-title'>Leitura institucional</strong>
            <p class='rg2-card-text'>A Coordenadoria registra evolu&ccedil;&atilde;o cont&iacute;nua em seus produtos entre 2023 e 2026, com destaque para a Avalia&ccedil;&atilde;o de Cursos Superiores — que saltou de 10 para 29 a&ccedil;&otilde;es — e Forma&ccedil;&atilde;o Continuada, que passou de 3 para 6 produtos previstos.</p>
          </div>

          <div class='rg2-card-stat'>
            <strong class='rg2-stat-num count-up' data-target='${totals.y2026}'>0</strong>
            <span class='rg2-stat-label'>entregas previstas<br>em 2026</span>
          </div>

          <div class='rg2-card-stat rg2-card-stat--green'>
            <div class='rg2-stat-row'>
              <svg class='rg2-spark' viewBox='0 0 72 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <defs>
                  <linearGradient id='sg1' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0%' stop-color='#60e0a0'/><stop offset='100%' stop-color='rgba(40,180,110,0.15)'/>
                  </linearGradient>
                  <linearGradient id='sg2' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0%' stop-color='#a0ffcc'/><stop offset='100%' stop-color='rgba(60,220,140,0.20)'/>
                  </linearGradient>
                </defs>
                <rect x='0'  y='34' width='14' height='22' rx='3' fill='url(#sg1)' opacity='0.5'/>
                <rect x='19' y='22' width='14' height='34' rx='3' fill='url(#sg1)' opacity='0.68'/>
                <rect x='38' y='10' width='14' height='46' rx='3' fill='url(#sg1)' opacity='0.84'/>
                <rect x='57' y='0'  width='14' height='56' rx='3' fill='url(#sg2)'/>
                <polyline points='7,34 26,22 45,10 64,1' stroke='#60e0a0' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' opacity='0.60'/>
                <circle cx='64' cy='1' r='4' fill='#a0ffcc'/>
              </svg>
              <strong class='rg2-stat-num rg2-stat-num--green'>+157%</strong>
            </div>
            <span class='rg2-stat-label'>crescimento<br>desde 2023</span>
          </div>

          <div class='rg2-card-stat rg2-card-stat--years'>
            <div class='rg2-years-col'>
              <div class='rg2-yrow'><small>2023</small><strong>${totals.y2023}</strong></div>
              <div class='rg2-yrow'><small>2024</small><strong>${totals.y2024}</strong></div>
              <div class='rg2-yrow'><small>2025</small><strong>${totals.y2025}</strong></div>
              <div class='rg2-yrow rg2-yrow--hi'><small>2026 &#9733;</small><strong>${totals.y2026}</strong></div>
            </div>
            <span class='rg2-stat-label'>total de<br>entregas/ano</span>
          </div>
        </div>
      </div>`;
    }
  },
  {
    id: 'saberes-digitais-docentes',
    theme: 'dark',
    fullscreen: true,
    duration: 22000,
    enterAnim: 'enter-zoom',
    exitAnim: 'exit-zoom',
    eyebrow: '',
    title: '',
    subtitle: '',
    accent: 'linear-gradient(90deg, #1c50dc, #39c0ff)',
    render() {
      return `
      <div class="saberes-layout">
        <div class="saberes-bg-grid"></div>
        <div class="saberes-glow saberes-glow-a"></div>
        <div class="saberes-glow saberes-glow-b"></div>
        <div class="saberes-photo-stage" data-anim="fade-right" data-delay="0.22">
          <img src="assets/saberes.png" alt="Professores e profissionais da educação" class="saberes-photo">
          <div class="saberes-photo-overlay"></div>
        </div>

        <div class="saberes-topbar">
          <div class="saberes-top-text" data-anim="fade-down" data-delay="0.06">
            Coordenação de Educação a Distância
          </div>
        </div>

        <div class="saberes-main">
          <div class="saberes-copy">
            <div class="saberes-pretitle" data-anim="fade-up" data-delay="0.14">
              Curso de Formação em
            </div>

            <h2 class="saberes-title" data-anim="fade-up" data-delay="0.18">
              SABERES <span class="saberes-title-accent">DIGITAIS</span><br>DOCENTES EAD
            </h2>

            <p class="saberes-subtitle" data-anim="fade-up" data-delay="0.24">
              Em parceria com Chapada dos Guimarães
            </p>

            <div class="saberes-number-wrap" data-anim="fade-up" data-delay="0.30">
              <strong class="saberes-number count-up" data-target="160">0</strong>
              <span class="saberes-number-label">matriculados</span>
            </div>

            <div class="saberes-meta" data-anim="fade-up" data-delay="0.36">
              <span>320 HORAS</span>
              <span>1 ANO</span>
              <span>EaD</span>
            </div>

            <p class="saberes-support" data-anim="fade-up" data-delay="0.42">
              Tecnologia e inova&ccedil;&atilde;o para transformar a pr&aacute;tica pedag&oacute;gica
            </p>
          </div>
        </div>
      </div>`;
    }
  }
];



