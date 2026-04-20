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
            <div class="arco-l-badge" data-anim="fade-down" data-delay="0.08" style="background: rgba(37, 99, 235, 0.08); border-color: rgba(59, 130, 246, 0.24); color: #2563eb;">Coordenação de Educação a Distância</div>
            <h2 class="arco-l-title" data-anim="typewriter" data-delay="0.14" style="background: linear-gradient(100deg, #1e3a8a 0%, #2563eb 55%, #3b82f6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Trilha de qualificação profissional em EAD</h2>
            <p class="arco-l-subtitle" data-anim="fade-up" data-delay="0.60" style="color: #2563eb;">Arco de Serviços Administrativos</p>
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
                <div class="arco-l-course-icon" style="background: rgba(37, 99, 235, 0.08); border-color: rgba(59, 130, 246, 0.18); color: #2563eb;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>
                </div>
                <span class="arco-l-course-name">Habilidades Profissionais para a Vida Profissional</span>
                <strong class="arco-l-course-num count-up" data-target="97">0</strong>
                <span class="arco-l-course-label">concluintes</span>
              </div>
              <div class="arco-l-course-card" data-anim="fade-up" data-delay="0.22">
                <div class="arco-l-course-icon" style="background: rgba(37, 99, 235, 0.08); border-color: rgba(59, 130, 246, 0.18); color: #2563eb;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                </div>
                <span class="arco-l-course-name">Auxiliar de Escritório</span>
                <strong class="arco-l-course-num count-up" data-target="22">0</strong>
                <span class="arco-l-course-label">concluintes</span>
              </div>
              <div class="arco-l-course-card" data-anim="fade-up" data-delay="0.26">
                <div class="arco-l-course-icon" style="background: rgba(37, 99, 235, 0.08); border-color: rgba(59, 130, 246, 0.18); color: #2563eb;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 0-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
                </div>
                <span class="arco-l-course-name">Assistente Administrativo</span>
                <strong class="arco-l-course-num count-up" data-target="103">0</strong>
                <span class="arco-l-course-label">concluintes</span>
              </div>
              <div class="arco-l-course-card" data-anim="fade-up" data-delay="0.30">
                <div class="arco-l-course-icon" style="background: rgba(37, 99, 235, 0.08); border-color: rgba(59, 130, 246, 0.18); color: #2563eb;">
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
    id: 'produtos-educacao-superior-2023-2026',
    theme: 'light',
    fullscreen: true,
    duration: 18000,
    enterAnim: 'enter-zoom',
    exitAnim: 'exit-zoom',
    eyebrow: '',
    title: '',
    subtitle: '',
    accent: 'linear-gradient(90deg, #032c4f, #ffffff)',
    render() {
      return `
      <div style="height:100%;padding:16px 22px;box-sizing:border-box;background:transparent;overflow:hidden;position:relative;">
        <div style="position:absolute;inset:0;background:radial-gradient(circle at 20% 18%, rgba(15,66,126,0.22) 0%, rgba(15,66,126,0) 28%), radial-gradient(circle at 82% 24%, rgba(15,66,126,0.12) 0%, rgba(15,66,126,0) 24%), linear-gradient(135deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0) 42%);"></div>
        <div style="position:relative;z-index:1;height:100%;border-radius:26px;background:linear-gradient(180deg, #081635 0%, #02203c 52%, #032c4f 100%);box-shadow:0 14px 28px rgba(0,0,0,0.20);padding:22px 26px 16px;display:grid;grid-template-rows:auto minmax(0,1fr) auto;row-gap:16px;box-sizing:border-box;overflow:hidden;border:1px solid rgba(255,255,255,0.05);">
          <div style="display:grid;grid-template-columns:minmax(0, 1fr) 200px;align-items:start;column-gap:22px;">
            <div style="display:flex;flex-direction:column;align-items:flex-start;gap:9px;max-width:840px;min-width:0;">
              <div style="display:inline-flex;align-items:center;padding:9px 16px;border-radius:999px;border:1px solid rgba(15,66,126,0.55);background:rgba(15,66,126,0.18);color:#ffffff;font:700 11px/1 'Inter', 'Segoe UI', sans-serif;letter-spacing:1.35px;text-transform:uppercase;">Coordenadoria de Regulação e Supervisão da Educação Superior</div>
              <div style="display:flex;flex-direction:column;gap:5px;">
                <h2 style="margin:0;color:#ffffff;font:800 46px/0.92 'Poppins', 'Inter', sans-serif;letter-spacing:-1.8px;max-width:760px;">Evolução dos Produtos<br>da Educação Superior</h2>
                <p style="margin:0;color:rgba(255,255,255,0.82);font:600 16px/1.14 'Inter', 'Segoe UI', sans-serif;">Resultados e previsão de 2023 a 2026</p>
              </div>
            </div>

            <div style="justify-self:end;display:flex;flex-direction:column;align-items:flex-end;gap:4px;padding-top:2px;text-align:right;max-width:200px;min-width:0;">
              <span style="color:#ffffff;font:800 11px/1 'Inter', sans-serif;letter-spacing:1.45px;text-transform:uppercase;">Panorama 2026</span>
              <strong style="color:#dff0ff;font:800 44px/0.88 'Poppins', 'Inter', sans-serif;">36</strong>
              <span style="color:rgba(255,255,255,0.88);font:600 12px/1.24 'Inter', sans-serif;">entregas monitoradas em avaliação, credenciamento, formação e publicação</span>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:minmax(0, 0.98fr) minmax(0, 1.22fr);gap:20px;align-items:stretch;min-height:0;overflow:hidden;">
            <div style="display:flex;flex-direction:column;gap:12px;min-height:0;height:100%;overflow:hidden;">
              <div style="border-radius:20px;background:linear-gradient(135deg, #032c4f 0%, #0f427e 100%);box-shadow:0 12px 22px rgba(0,0,0,0.18);padding:16px 18px 14px;display:flex;flex-direction:column;gap:12px;position:relative;overflow:hidden;min-height:0;height:100%;">
                <div style="display:inline-flex;align-items:center;align-self:flex-start;padding:7px 13px;border-radius:999px;border:1px solid rgba(255,255,255,0.16);background:rgba(255,255,255,0.08);color:#ffffff;font:800 11px/1 'Inter', sans-serif;letter-spacing:1.35px;text-transform:uppercase;">Destaques</div>

                <div style="position:relative;border-radius:16px;padding:13px 14px 11px;background:linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);border:1px solid rgba(255,255,255,0.08);min-height:118px;overflow:hidden;display:flex;align-items:flex-start;">
                  <div style="position:absolute;left:22px;top:50%;transform:translateY(-50%);color:rgba(255,255,255,0.58);text-shadow:0 6px 18px rgba(0,0,0,0.16);font:800 88px/0.88 'Poppins', 'Inter', sans-serif;letter-spacing:-2.8px;pointer-events:none;">29</div>
                  <div style="position:relative;z-index:1;display:flex;flex-direction:column;justify-content:center;gap:8px;max-width:390px;margin:0 auto;min-height:92px;padding-left:84px;box-sizing:border-box;">
                    <span style="color:#ffffff;font:800 22px/1.02 'Poppins', 'Inter', sans-serif;letter-spacing:-0.6px;">Avaliação de Cursos Superiores lidera a expansão.</span>
                    <span style="color:rgba(255,255,255,0.84);font:500 13px/1.3 'Inter', sans-serif;">Crescimento contínuo entre 2023 e 2026, concentrando a maior evolução do portfólio regulatório.</span>
                  </div>
                </div>

                <div style="display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:12px;align-items:stretch;">
                  <div style="border-radius:16px;background:rgba(255,255,255,0.95);padding:12px 14px;box-shadow:0 12px 22px rgba(0,0,0,0.10);border:1px solid rgba(15,66,126,0.18);display:flex;flex-direction:column;justify-content:space-between;gap:7px;min-height:96px;box-sizing:border-box;">
                    <div style="color:#081635;font:800 10px/1 'Inter', sans-serif;letter-spacing:1.35px;text-transform:uppercase;">Crescimento</div>
                    <div style="color:#032c4f;font:800 34px/1 'Poppins', sans-serif;">+157%</div>
                    <div style="color:#081635;font:600 11px/1.28 'Inter', sans-serif;opacity:0.88;">em relação ao total de 2023</div>
                  </div>
                  <div style="border-radius:16px;background:rgba(255,255,255,0.95);padding:12px 14px;box-shadow:0 12px 22px rgba(0,0,0,0.10);border:1px solid rgba(15,66,126,0.18);display:flex;flex-direction:column;justify-content:space-between;gap:7px;min-height:96px;box-sizing:border-box;">
                    <div style="color:#081635;font:800 10px/1 'Inter', sans-serif;letter-spacing:1.35px;text-transform:uppercase;">Sinal de atenção</div>
                    <div style="color:#032c4f;font:800 34px/1 'Poppins', sans-serif;">1</div>
                    <div style="color:#081635;font:600 11px/1.28 'Inter', sans-serif;opacity:0.88;">última referência da Revista C&amp;T no período monitorado</div>
                  </div>
                </div>
              </div>
            </div>

            <div style="border-radius:20px;background:rgba(255,255,255,0.96);box-shadow:0 12px 22px rgba(0,0,0,0.16);border:1px solid rgba(15,66,126,0.16);padding:16px 18px 12px;display:grid;grid-template-rows:auto minmax(0,1fr);gap:10px;min-height:0;overflow:hidden;box-sizing:border-box;">
              <div style="display:flex;flex-direction:column;gap:10px;min-width:0;">
                <div style="display:inline-flex;align-items:center;align-self:flex-start;padding:7px 13px;border-radius:999px;border:1px solid rgba(15,66,126,0.16);background:rgba(255,255,255,0.12);color:#081635;font:800 11px/1 'Inter', sans-serif;letter-spacing:1.35px;text-transform:uppercase;">Indicadores principais de 2026</div>
                <div style="color:#032c4f;font:600 13px/1.22 'Inter', sans-serif;opacity:0.9;">Leitura rápida dos resultados monitorados</div>
              </div>

              <div style="display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:10px;align-items:stretch;min-height:0;">
                <div style="border-radius:16px;background:linear-gradient(180deg, #ffffff 0%, #f5f9ff 100%);border:1px solid rgba(15,66,126,0.18);box-shadow:0 12px 22px rgba(15,66,126,0.05);padding:12px 16px 10px;display:flex;flex-direction:column;justify-content:space-between;min-height:112px;">
                  <div style="color:#081635;font:700 13px/1.18 'Inter', sans-serif;">Avaliação de Cursos</div>
                  <div style="color:#032c4f;font:800 58px/0.9 'Poppins', 'Inter', sans-serif;letter-spacing:-2px;">29</div>
                  <div style="color:#0f427e;font:700 10px/1 'Inter', sans-serif;letter-spacing:1.15px;text-transform:uppercase;opacity:0.92;">2026</div>
                </div>

                <div style="border-radius:16px;background:linear-gradient(180deg, #ffffff 0%, #f5f9ff 100%);border:1px solid rgba(15,66,126,0.18);box-shadow:0 12px 22px rgba(15,66,126,0.05);padding:12px 16px 10px;display:flex;flex-direction:column;justify-content:space-between;min-height:112px;">
                  <div style="color:#081635;font:700 13px/1.18 'Inter', sans-serif;">Credenciamento</div>
                  <div style="color:#032c4f;font:800 58px/0.9 'Poppins', 'Inter', sans-serif;letter-spacing:-2px;">1</div>
                  <div style="color:#0f427e;font:700 10px/1 'Inter', sans-serif;letter-spacing:1.15px;text-transform:uppercase;opacity:0.92;">2026</div>
                </div>

                <div style="border-radius:16px;background:linear-gradient(180deg, #ffffff 0%, #f5f9ff 100%);border:1px solid rgba(15,66,126,0.18);box-shadow:0 12px 22px rgba(15,66,126,0.05);padding:12px 16px 10px;display:flex;flex-direction:column;justify-content:space-between;min-height:112px;">
                  <div style="color:#081635;font:700 13px/1.18 'Inter', sans-serif;">Formação Continuada</div>
                  <div style="color:#032c4f;font:800 58px/0.9 'Poppins', 'Inter', sans-serif;letter-spacing:-2px;">6</div>
                  <div style="color:#0f427e;font:700 10px/1 'Inter', sans-serif;letter-spacing:1.15px;text-transform:uppercase;opacity:0.92;">2026</div>
                </div>

                <div style="border-radius:16px;background:linear-gradient(180deg, #ffffff 0%, #f5f9ff 100%);border:1px solid rgba(15,66,126,0.18);box-shadow:0 12px 22px rgba(15,66,126,0.05);padding:12px 16px 10px;display:flex;flex-direction:column;justify-content:space-between;min-height:112px;">
                  <div style="color:#081635;font:700 13px/1.18 'Inter', sans-serif;">Revista C&amp;T</div>
                  <div style="color:#032c4f;font:800 58px/0.9 'Poppins', 'Inter', sans-serif;letter-spacing:-2px;">0</div>
                  <div style="color:#0f427e;font:700 10px/1 'Inter', sans-serif;letter-spacing:1.15px;text-transform:uppercase;opacity:0.92;">2026</div>
                </div>
              </div>
            </div>
          </div>

          <div style="max-width:900px;color:rgba(255,255,255,0.92);font:600 16px/1.24 'Poppins', 'Inter', sans-serif;letter-spacing:-0.12px;padding-bottom:2px;">A expansão das avaliações demonstra fortalecimento da regulação, enquanto alguns produtos demandam reestruturação estratégica.</div>
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
  },

  /* ── Slide Mapa ETECs ── */
  {
    id: 'mapa-etecs',
    theme: 'dark',
    fullscreen: true,
    duration: 20000,
    enterAnim: 'enter-fade',
    exitAnim: 'exit-fade',
    eyebrow: '',
    title: '',
    subtitle: '',
    accent: 'linear-gradient(90deg, #84b42e, #d2ef69)',
    render() {
      /*
       * Contorno do Mato Grosso — coordenadas geográficas reais mapeadas para viewBox 900×575.
       * lon [-61.5, -50.0] xScale=78.26 | lat [-6.5, -17.5] yScale=52.27
       * x = (lon + 61.5) * 78.26   y = (-6.5 - lat) * 52.27
       */
      /*
       * Path traçado do mapa de referência real (imagem com municípios MT).
       * viewBox 900×575. Bbox ref: left=190,top=100,w=860,h=700
       * xScale=1.047  yScale=0.821
       * Inclui feição NW (Aripuanã), spike norte, lóbulo leste e península Cáceres.
       */
      const MT = 'M108,12 L150,26 L200,13 L244,0 L286,5 L348,9 L420,22 L453,30 L515,25 L588,38 L660,55 L745,83 L828,150 L892,206 L900,290 L892,364 L840,398 L808,413 L760,440 L723,453 L680,468 L638,478 L596,482 L555,490 L516,492 L474,492 L430,488 L390,492 L358,505 L325,510 L286,511 L244,502 L224,519 L202,544 L186,568 L170,575 L150,568 L117,544 L86,511 L64,486 L43,461 L22,430 L6,396 L0,363 L5,315 L11,265 L32,232 L54,198 L75,167 L86,134 L65,100 L28,59 L44,33 L75,16 L108,12 Z';

      /*
       * Posições lidas da imagem de referência (pins vermelhos).
       * [nome, x, y, delay, labelDx, labelDy, anchor]
       */
      const cities = [
        ['Alta Floresta',      389, 111, 0.7,   0,  22, 'middle'],
        ['Barra do Garças',    713, 431, 2.4,   0,  22, 'middle'],
        ['Cáceres',            268, 510, 1.8,   0,  22, 'middle'],
        ['Campo Verde',        534, 439, 2.9,  28,   3, 'start' ],
        ['Cuiabá',             440, 443, 0.4,   0, -21, 'middle'],
        ['Diamantino',         393, 345, 1.1,   0, -21, 'middle'],
        ['Juara',              315, 168, 2.1,   0,  22, 'middle'],
        ['Lucas do Rio Verde', 419, 283, 0.9,   0,  22, 'middle'],
        ['Matupá',             482, 111, 1.6,   0,  22, 'middle'],
        ['Poxoréu',            556, 455, 3.1, -28,   3, 'end'   ],
        ['Primavera do Leste', 572, 429, 2.6,  28,   3, 'start' ],
        ['Rondonópolis',       536, 468, 2.0,   0,  22, 'middle'],
        ['Sinop',              471, 213, 0.6,   0, -21, 'middle'],
        ['Sorriso',            448, 247, 1.4,   0,  22, 'middle'],
        ['Tangará da Serra',   315, 374, 1.9, -28,   3, 'end'   ],
        ['Várzea Grande',      452, 455, 0.5,  28,   3, 'start' ],
      ];

      const pins = cities.map(([name, x, y, d, ldx, ldy, anchor]) => `
        <g class="ms-pin" transform="translate(${x},${y})" style="animation-delay:${d}s">
          <circle r="17" fill="rgba(32,90,230,0.18)" stroke="rgba(110,175,255,0.30)" stroke-width="1.5"/>
          <circle r="12" fill="#0e205e" stroke="rgba(130,190,255,0.85)" stroke-width="1.8"/>
          <image href="assets/etec.png" x="-9" y="-9" width="18" height="18"
                 preserveAspectRatio="xMidYMid meet" clip-path="url(#ms-pin-clip)"/>
          <text x="${ldx}" y="${ldy}" text-anchor="${anchor}" class="ms-lbl">${name}</text>
        </g>`).join('');

      return `
      <div class="ms-wrap">

        <div class="ms-header" data-anim="fade-down" data-delay="0.06">
          <div class="ms-badge">ETECs • Mato Grosso</div>
          <h2 class="ms-title">Onde Estamos</h2>
          <p class="ms-desc">Nossa rede chega a 16 municípios estratégicos de Mato Grosso com educação profissional gratuita e presencial.</p>
          <div class="ms-kpi">
            <strong class="count-up" data-target="16">0</strong>
            <span>municípios</span>
          </div>
        </div>

        <div class="ms-map-area" data-anim="fade-up" data-delay="0.14">
          <svg class="ms-svg" viewBox="0 0 900 575"
               xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <defs>
              <clipPath id="ms-pin-clip" clipPathUnits="objectBoundingBox">
                <circle cx="0.5" cy="0.5" r="0.5"/>
              </clipPath>
              <linearGradient id="ms-fill" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%"   stop-color="#2a6ae8"/>
                <stop offset="55%"  stop-color="#1848cc"/>
                <stop offset="100%" stop-color="#0c2680"/>
              </linearGradient>
              <radialGradient id="ms-shine" cx="38%" cy="35%" r="52%">
                <stop offset="0%"   stop-color="#60a0ff" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="#1030a0" stop-opacity="0.00"/>
              </radialGradient>
              <filter id="ms-border-glow" x="-4%" y="-4%" width="108%" height="108%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="ms-pin-shadow" x="-100%" y="-100%" width="300%" height="300%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000" flood-opacity="0.65"/>
              </filter>
            </defs>

            <!-- Estado: preenchimento sólido visível -->
            <path d="${MT}" fill="url(#ms-fill)"/>
            <!-- Brilho interno (radial) -->
            <path d="${MT}" fill="url(#ms-shine)"/>
            <!-- Contorno luminoso -->
            <path d="${MT}" fill="none"
                  stroke="rgba(148,210,255,0.92)" stroke-width="2.2" stroke-linejoin="round"
                  filter="url(#ms-border-glow)"/>

            <!-- Marcadores com sombra agrupada -->
            <g filter="url(#ms-pin-shadow)">
              ${pins}
            </g>
          </svg>

          <div class="ms-zoom-controls">
            <button class="ms-zoom-btn" onclick="msZoomMap(this,1)" title="Ampliar">+</button>
            <button class="ms-zoom-btn" onclick="msZoomMap(this,-1)" title="Diminuir">−</button>
            <button class="ms-zoom-btn ms-zoom-reset" onclick="msZoomMap(this,0)" title="Redefinir">↺</button>
          </div>
        </div>

      </div>`;
    }
  }
];

window.msZoomMap = function(btn, dir) {
  const svg = btn.closest('.ms-map-area').querySelector('.ms-svg');
  let z = parseFloat(svg.dataset.zoom || '1');
  if (dir === 1)  z = Math.min(z * 1.2, 4.0);
  else if (dir === -1) z = Math.max(z / 1.2, 0.4);
  else z = 1;
  svg.dataset.zoom = z;
  svg.style.transformOrigin = 'center center';
  svg.style.transform = z === 1 ? '' : `scale(${z})`;
};















































