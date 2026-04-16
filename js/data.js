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
    duration: 10000,
    enterAnim: 'enter-y-up',
    exitAnim: 'exit-y-up',
    eyebrow: 'Panorama da rede',
    title: '',
    subtitle: '',
    accent: 'linear-gradient(90deg, #245fff, #51d3ff)',
    render() {
      return `
      <div class="hero-grid">
        <div class="hero-copy">
          <div class="hero-number-block" data-anim="fade-up" data-delay="0.08">
            <span class="hero-number-label">Alunos matriculados</span>
            <strong class="hero-number count-up" data-target="10000">0</strong>
          </div>
          <h1 class="hero-title" data-anim="fade-up" data-delay="0.18">Formacao profissional em rede com presenca estadual</h1>
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
    eyebrow: 'Processo seletivo em andamento',
    title: '4.893 inscritos, 1.430 vagas e leitura executiva das maiores procuras',
    subtitle: 'Composicao em formato de dashboard para destacar volume, distribuicao de demanda e ranking de cursos mais procurados.',
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
            <span>Curso entre os maiores volumes de inscricao desta janela.</span>
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
          <div class="dashboard-card" data-anim="fade-up" data-delay="0.16">
            <strong style="display:block; font-size:30px; margin-bottom:8px;">Atualizacao executiva</strong>
            <span style="display:block; color:rgba(18,35,72,0.68); font-size:16px; line-height:1.6;">Dados organizados para leitura rapida em tela institucional, com foco nos indicadores mais relevantes do processo seletivo e comparacao imediata entre cursos.</span>
          </div>
          <div class="chart-card">
            <div class="chart-header">
              <h3>Top inscricoes</h3>
              <span>Comparativo de procura por curso e municipio no processo atual.</span>
            </div>
            <div class="bar-chart">${bars}</div>
          </div>
        </div>

        <div class="glass-panel ranking-panel">
          <div class="ranking-header">
            <h3>Ranking de maior procura</h3>
            <span>Leitura complementar com destaque numerico e ordem de relevancia.</span>
          </div>
          <div class="ranking-list">${items}</div>
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
    eyebrow: 'Expansao da rede',
    title: 'Escolas Tecnicas Estaduais',
    subtitle: '',
    accent: 'linear-gradient(90deg, #84b42e, #d2ef69)',
    render() {
      return `
      <div class="etecs-dashboard">
        <img src="assets/etecs.png" alt="Escolas Tecnicas Estaduais" class="etecs-bg">
        <div class="etecs-overlay"></div>

        <div class="etecs-copy">
          <div>
            <span class="eyebrow" data-anim="fade-down" data-delay="0.08">Expansao da rede</span>
            <h2 class="etecs-title" data-anim="fade-up" data-delay="0.16">Expansao fisica e presenca territorial da educacao tecnica em Mato Grosso</h2>
            <p class="etecs-summary" data-anim="fade-up" data-delay="0.24">A composicao combina imagem, contexto e cards estrategicos para comunicar crescimento, estrutura e capilaridade da rede em exibicao institucional.</p>
          </div>
          <div class="chip-row" data-anim="fade-up" data-delay="0.34">
            ${chip(ICONS.building, 'Rede estadual em consolidacao')}
            ${chip(ICONS.calendar, 'Ciclo 2024 e 2025')}
          </div>
        </div>

        <div class="etecs-side">
          <div class="etecs-stat-card" data-anim="fade-left" data-delay="0.18">
            <strong class="count-up" data-target="14">0</strong>
            <span>Escolas Tecnicas Estaduais em funcionamento com predio proprio no ano de 2024.</span>
          </div>
          <div class="etecs-stat-card" data-anim="fade-left" data-delay="0.28">
            <strong class="count-up" data-target="5">0</strong>
            <span>Escolas inauguradas ou implantadas no ciclo de expansao de 2025.</span>
          </div>
          <div class="etecs-grid">
            <div class="etecs-mini" data-anim="fade-up" data-delay="0.34">
              <strong>19</strong>
              <span>Presencas institucionais entre operacao e novas entregas.</span>
            </div>
            <div class="etecs-mini" data-anim="fade-up" data-delay="0.40">
              <strong>Rede</strong>
              <span>Atuacao distribuida para formacao profissional regionalizada.</span>
            </div>
            <div class="etecs-mini" data-anim="fade-up" data-delay="0.46">
              <strong>Infra</strong>
              <span>Leitura visual de patrimonio, expansao e oferta de servicos educacionais.</span>
            </div>
            <div class="etecs-mini" data-anim="fade-up" data-delay="0.52">
              <strong>Impacto</strong>
              <span>Mais capacidade de atendimento para estudantes em diferentes territorios.</span>
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
            <h2 class="aprend-title" data-anim="fade-up" data-delay="0.14">Dashboard de acompanhamento com foco em presenca institucional, cursos e alcance de aprendizes</h2>
            <p class="aprend-support" data-anim="fade-up" data-delay="0.20">A leitura agora valoriza KPIs, blocos de contexto e uma imagem integrada ao conjunto, aproximando a tela de um produto institucional premium.</p>
          </div>

          <div class="aprend-kpis">
            <div class="aprend-kpi" data-anim="fade-up" data-delay="0.26">
              <strong class="count-up" data-target="15">0</strong>
              <span>ETECs cadastradas no CNAP para operacao do programa.</span>
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
              <span>KPIs em cards independentes melhoram leitura, contraste e memorabilidade em exibicao continua.</span>
            </div>
            <div class="insight-card" data-anim="fade-right" data-delay="0.40">
              <strong>Imagem com funcao narrativa</strong>
              <span>A fotografia deixa de ser apenas decorativa e passa a equilibrar o lado analitico do dashboard.</span>
            </div>
          </div>
        </div>

        <div class="aprend-right" data-anim="fade-left" data-delay="0.22">
          <img src="assets/ja01.png" alt="Aprendizes em atividade" class="aprend-photo">
          <div class="aprend-photo-overlay"></div>
          <div class="aprend-photo-panel">
            <strong>Formacao conectada ao mundo do trabalho</strong>
            <span>Composicao premium com melhor distribuicao entre texto, indicadores e imagem para apresentacao institucional em grande formato.</span>
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
    eyebrow: 'Noticia em destaque',
    title: 'Seciteci inicia Caravana Recytec em seis cidades de Mato Grosso',
    subtitle: '',
    accent: 'linear-gradient(90deg, #1c6d94, #44d296)',
    render() {
      return `
      <div class="fullbg-layout">
        <img src="assets/recytec.png" alt="Caravana Recytec" class="fullbg-img">
        <div class="fullbg-overlay--bottom"></div>

        <div class="fullbg-header" data-anim="fade-down" data-delay="0.10">
          <span class="eyebrow">Noticia em destaque</span>
          <h2 class="fullbg-title">Seciteci inicia Caravana Recytec em seis cidades de Mato Grosso</h2>
          <p class="news-meta">Iniciativa com foco em descarte correto de residuos eletronicos, educacao ambiental e mobilizacao da populacao.</p>
        </div>

        <div class="fullbg-bottom-bar" data-anim="fade-up" data-delay="0.24">
          <div class="news-panel">
            <h3>Resumo executivo</h3>
            <p>A caravana comecou em 9 de abril e segue ate 28 de abril, percorrendo seis municipios e fortalecendo a agenda de sustentabilidade com acao territorial, servico e visibilidade institucional.</p>
          </div>
          <div class="news-sidebar">
            <div class="news-stats">
              <div class="news-stat">
                <strong>6</strong>
                <span>Municipios atendidos pela agenda itinerante.</span>
              </div>
              <div class="news-stat">
                <strong>20</strong>
                <span>Dias de mobilizacao previstos na caravana.</span>
              </div>
            </div>
            <a href="https://www.secitec.mt.gov.br/w/seciteci-inicia-caravana-recytec-em-seis-cidades-de-mato-grosso" target="_blank" rel="noreferrer" class="news-link">
              ${ICONS.extlink}<span>Ler noticia completa</span>
            </a>
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
    eyebrow: 'Inovacao e fomento',
    title: 'Finep pelo Brasil apresenta em MT chamadas publicas que somam R$ 3,3 bilhoes',
    subtitle: '',
    accent: 'linear-gradient(90deg, #294dbd, #5f77ff)',
    render() {
      return `
      <div class="fullbg-layout">
        <img src="assets/finep.png" alt="Finep pelo Brasil" class="fullbg-img">
        <div class="fullbg-overlay--bottom"></div>

        <div class="fullbg-header" data-anim="fade-down" data-delay="0.10">
          <span class="eyebrow">Inovacao e fomento</span>
          <h2 class="fullbg-title">Finep pelo Brasil apresenta em MT chamadas publicas que somam R$ 3,3 bilhoes</h2>
          <p class="news-meta">Agenda orientada a financiamento de pesquisa, inovacao e desenvolvimento de projetos estrategicos em Mato Grosso.</p>
        </div>

        <div class="fullbg-bottom-bar" data-anim="fade-up" data-delay="0.24">
          <div class="news-panel">
            <h3>Leitura institucional</h3>
            <p>Mato Grosso recebera duas edicoes do programa Finep pelo Brasil, ampliando a visibilidade de oportunidades de fomento para ecossistemas de pesquisa, empresas e projetos de inovacao estrategica.</p>
          </div>
          <div class="news-sidebar">
            <div class="news-stats">
              <div class="news-stat">
                <strong>R$ 3,3 bi</strong>
                <span>Montante somado das chamadas publicas apresentadas.</span>
              </div>
              <div class="news-stat">
                <strong>2</strong>
                <span>Edicoes do programa previstas em Mato Grosso.</span>
              </div>
            </div>
            <a href="https://www.secitec.mt.gov.br/w/apoiada-pela-seciteci-finep-pelo-brasil-apresenta-em-mt-chamadas-p%C3%BAblicas-que-somam-r-3-3-bilh%C3%B5es" target="_blank" rel="noreferrer" class="news-link">
              ${ICONS.extlink}<span>Ler noticia</span>
            </a>
          </div>
        </div>
      </div>`;
    }
  }
];
