const translations = {
  'pt-br': {
    about: 'Sobre mim',
    'about-text': 'Sou uma pessoa curiosa por natureza, gosto de entender como as coisas funcionam, de aprender algo novo todos os dias e de transformar pequenas descobertas em algo útil. Tenho um lado bem analítico, mas também criativo: adoro resolver problemas, pensar em soluções diferentes e ver ideias ganharem forma.',
    'about-text-2': 'Nos momentos livres, gosto de jogar videogame, ler, estar perto da natureza e participar das atividades do movimento escoteiro, que me ensinou muito sobre empatia, liderança e serviço ao próximo.',
    'about-text-3': 'Sou movida por desafios, por conexões genuínas e pela vontade constante de crescer como profissional, mas principalmente como pessoa.',
    'about-photo-alt': 'Foto de Dhara Simic',
    
    experience: 'Experiências',
    'experience-text': 'Aqui você pode descrever suas experiências profissionais, projetos realizados, tecnologias utilizadas e conquistas na área de Quality Assurance.',
    'experience-text-2': 'Detalhe seus principais trabalhos, responsabilidades e como cada experiência contribuiu para seu crescimento profissional.',
    'experience-photo-alt': 'Experiência Profissional de Dhara',
    
    curiosities: 'Curiosidades',
    'curiosities-text': 'Sou escoteira desde 2018 e cresci dentro do movimento, que me ensinou sobre trabalho em equipe, liderança e cuidado com as pessoas e com o mundo. Participo de ações de limpeza, trilhas e experiências que me lembram que conhecimento de vida é tão importante quanto o técnico.',
    'curiosities-text-2': 'Fora do uniforme, minha curiosidade me levou ao mundo da tecnologia. Antes de entrar na área de QA, atuei por seis meses como estagiária de Help Desk em uma empresa de TI. Foi uma fase intensa e desafiadora, que me ensinou a lidar com situações sob pressão, a conhecer um produto de ponta a ponta e a valorizar a comunicação clara com o usuário. Foi ali que descobri meu interesse em garantir qualidade, não só técnica, mas também na experiência das pessoas com o software.',
    'curiosities-photo-alt': 'Atividades de Voluntariado',
    
    academic: 'Vida Acadêmica',
    'academic-text': 'Atualmente curso Análise e Desenvolvimento de Sistemas na FATEC Rubens Lara, onde venho construindo minha base em tecnologia e explorando diferentes áreas que me despertam interesse.',
    'academic-text-2': 'Apesar de a faculdade ser apenas uma parte do meu caminho, sempre busco ir além do conteúdo das aulas. Tenho aprendido muito por conta própria, fazendo cursos e projetos paralelos (disponíveis no meu GitHub), e gosto de transformar esses aprendizados em experiências práticas.',
    'academic-text-3': 'Pra mim, estudar é mais sobre curiosidade e evolução constante do que sobre títulos, e é isso que guia minha jornada acadêmica até aqui.',
    'academic-photo-alt': 'Vida Acadêmica de Dhara',
    
    // Timeline translations
    'timeline-date-1': 'Fevereiro 2025',
    'timeline-title-1': 'Início na Consultoria ModalGR',
    'timeline-desc-1': 'Iniciei na consultoria ModalGR (atual Mosten) através do processo de formação como QA estagiária, dando meus primeiros passos na área de Quality Assurance.',
    'modalgr-photo-alt': 'ModalGR/Mosten',
    
    'timeline-date-2': 'Abril 2025',
    'timeline-title-2': 'Efetivação QA Jr',
    'timeline-desc-2': 'Fui efetivada em tempo recorde na empresa, me tornando QA Jr e demonstrando meu comprometimento e capacidade de aprendizado na área.',
    
    'timeline-date-3': 'Atualmente',
    'timeline-title-3': 'QA Jr na Mosten',
    'timeline-desc-3': 'Sigo como QA Jr na empresa Mosten, executando testes manuais e testes automatizados via Cypress. Utilizo o Azure DevOps para organizar tasks e manter uma pipeline de testes automatizados que executa a cada alteração em produção, mantendo um fluxo de testes contínuos e evitando erros humanos.',
    'current-work-photo-alt': 'Trabalho Atual',
    
    // Modal translations
    'modal-requirements-title': 'Análise de Requisitos',
    'modal-development-title': 'Desenvolvimento de Testes',
    'modal-reports-title': 'Relatórios e Documentação',
    'test-matrix-title': 'Matriz de Testes',
    'test-feature': 'Funcionalidade',
    'test-scenario': 'Cenário',
    'test-priority': 'Prioridade',
    'test-type': 'Tipo',
    'high': 'Alta',
    'medium': 'Média',
    'low': 'Baixa',
    'functional': 'Funcional',
    'responsive': 'Responsivo',
    'ui': 'Interface',
    'e2e': 'Ponta a Ponta',
    'api': 'API',
    'regression': 'Regressão',
    'accessibility': 'Acessibilidade',
    
    // Modal content translations
    'cypress-example-title': 'Exemplo Real - Cypress TypeScript',
    'bug-report-title': 'Exemplo de Bug Report',
    'nav-menu': 'Menu de Navegação',
    'nav-scenario': 'Navegação suave entre seções',
    'lang-selector': 'Seletor de Idioma',
    'lang-scenario': 'Alternância PT/EN funcional',
    'dark-mode': 'Modo Escuro',
    'dark-scenario': 'Toggle preserva preferência',
    'responsive': 'Responsividade',
    'responsive-scenario': 'Layout adaptável mobile/desktop',
    'modal-workflow': 'Modal Workflow',
    'modal-scenario': 'Abertura/fechamento modais',
    'image-fallback': 'Imagens Fallback',
    'fallback-scenario': 'Placeholder para imagens faltantes',
    
    // Cypress code translations
    'cypress-comment-navigation': '// Teste da navegação principal',
    'cypress-comment-lang': '// Teste do seletor de idioma',
    'cypress-comment-initial': '// Verificar idioma inicial',
    'cypress-comment-switch': '// Trocar para inglês',
    'cypress-comment-persistence': '// Verificar persistência do idioma',
    'cypress-comment-modal': '// Teste de abertura/fechamento de modais',
    'cypress-comment-navigate': '// Navegar para seção workflow',
    'cypress-comment-open': '// Testar abertura de modal',
    'cypress-comment-close': 'Fechar modal com ESC',
    
    // Bug report translations
    'bug-report-content': '[BUG][PORTFÓLIO - FRONT] Imagem da seção Curiosidade não é exibida no modo escuro\n\nContexto:\nDado que estou na tela Portfólio\nE clico no toggle de modo escuro\nEntão noto que a imagem da seção Curiosidade não é exibida.\n\nResultado Esperado:\nA imagem da seção Curiosidade deve ser exibida corretamente tanto no modo claro quanto no modo escuro, sem perda de visibilidade ou contraste.',
    
    // Navigation
    'home': 'Início',
    'about': 'Sobre',
    'skills': 'Habilidades',
    'experience': 'Experiência',
    'workflow': 'Processo',
    'curiosities': 'Curiosidades',
    'contact': 'Contato',
    'email': 'Email',
    'phone': 'Telefone',
    'github': 'GitHub',
    'linkedin': 'LinkedIn',
    'skills': 'Habilidades Técnicas',
    'skills-automation-title': 'Automação e Testes',
    'skills-cypress-desc': 'Testes E2E integrados ao CI/CD',
    'skills-azure-desc': 'Pipelines de automação e reports de bugs',
    'skills-manual-tests': 'Testes manuais e exploratórios',
    'skills-test-cases': 'Caderno e roteiro de testes',
    'skills-ci-title': 'Integração Contínua e Versionamento',
    'skills-cicd-desc': 'Azure DevOps pipelines',
    'skills-git-desc': 'Versionamento de automação',
    'skills-auto-exec': 'Execução automatizada em produção',
    'skills-quality-title': 'Qualidade e Documentação',
    'skills-requirements': 'Levantamento de requisitos',
    'skills-documentation': 'Documentação técnica e funcional',
    'skills-bug-management': 'Gestão de bugs e métricas de qualidade',
    'workflow-title': 'Meu Workflow de QA Automatizado',
    'workflow-step-1-title': 'Análise de Requisitos',
    'workflow-step-1-desc': 'Análise dos requisitos e definição de cenários de teste',
    'workflow-step-2-title': 'Desenvolvimento de Testes',
    'workflow-step-2-desc': 'Escrita dos testes E2E com Cypress (TypeScript)',
    'workflow-step-3-title': 'Integração CI/CD',
    'workflow-step-3-desc': 'Integração com pipeline do Azure DevOps',
    'workflow-step-4-title': 'Execução Automática',
    'workflow-step-4-desc': 'Execução automática após deploy',
    'workflow-step-5-title': 'Relatórios e Documentação',
    'workflow-step-5-desc': 'Report de resultados e documentação no Azure DevOps',
    
    'qa-engineer': 'ANALISTA DE QUALIDADE',
    'portfolio-subtitle': 'Portfólio de Quality Assurance',
    'get-in-touch': 'Entre em contato',
    'add-photo': 'Adicione sua foto aqui',
    
    // Contact section
    'contact': 'Contatos',
    'email': 'Email',
    'phone': 'Telefone',
    'github': 'GitHub',
    'linkedin': 'LinkedIn'
  },
  en: {
    about: 'About Me',
    'about-text': 'I am naturally curious, I like to understand how things work, to learn something new every day, and to transform small discoveries into something useful. I have both an analytical and creative side: I love solving problems, thinking of different solutions, and seeing ideas take shape.',
    'about-text-2': 'In my free time, I enjoy playing video games, reading, being close to nature, and participating in scouting activities, which has taught me a lot about empathy, leadership, and service to others.',
    'about-text-3': 'I am driven by challenges, genuine connections, and the constant desire to grow as a professional, but mainly as a person.',
    'about-photo-alt': 'Photo of Dhara Simic',
    
    experience: 'Experience',
    'experience-text': 'Here you can describe your professional experiences, completed projects, technologies used, and achievements in the Quality Assurance field.',
    'experience-text-2': 'Detail your main jobs, responsibilities, and how each experience contributed to your professional growth.',
    'experience-photo-alt': 'Dhara\'s Professional Experience',
    
    curiosities: 'Curiosities',
    'curiosities-text': 'I have been a scout since 2018 and grew up within the movement, which taught me about teamwork, leadership, and caring for people and the world. I participate in cleanup actions, hiking, and experiences that remind me that life knowledge is as important as technical knowledge.',
    'curiosities-text-2': 'Outside the uniform, my curiosity led me to the world of technology. Before entering the QA field, I worked for six months as a Help Desk intern at an IT company. It was an intense and challenging phase that taught me to handle situations under pressure, to understand a product from end to end, and to value clear communication with users. That\'s where I discovered my interest in ensuring quality, not only technical, but also in people\'s experience with software.',
    'curiosities-photo-alt': 'Volunteer Activities',
    
    academic: 'Academic Life',
    'academic-text': 'I am currently studying Systems Analysis and Development at FATEC Rubens Lara, where I have been building my foundation in technology and exploring different areas that spark my interest.',
    'academic-text-2': 'Although college is just one part of my journey, I always seek to go beyond classroom content. I have learned a lot on my own, taking courses and working on side projects (available on my GitHub), and I enjoy transforming these learnings into practical experiences.',
    'academic-text-3': 'For me, studying is more about curiosity and constant evolution than about titles, and that is what guides my academic journey so far.',
    'academic-photo-alt': 'Dhara\'s Academic Life',
    
    // Timeline translations
    'timeline-date-1': 'February 2025',
    'timeline-title-1': 'Started at ModalGR Consulting',
    'timeline-desc-1': 'I started at ModalGR consulting (now Mosten) through the training process as a QA intern, taking my first steps in the Quality Assurance field.',
    'modalgr-photo-alt': 'ModalGR/Mosten',
    
    'timeline-date-2': 'April 2025',
    'timeline-title-2': 'Promoted to QA Jr',
    'timeline-desc-2': 'I was promoted in record time at the company, becoming a QA Jr and demonstrating my commitment and learning ability in the field.',
    
    'timeline-date-3': 'Currently',
    'timeline-title-3': 'QA Jr at Mosten',
    'timeline-desc-3': 'I continue as QA Jr at Mosten, executing manual tests and automated tests via Cypress. I use Azure DevOps to organize tasks and maintain an automated test pipeline that runs with every production change, maintaining continuous testing flow and avoiding human errors.',
    'current-work-photo-alt': 'Current Work',
    
    // Skills section
    'skills': 'Technical Skills',
    'skills-automation-title': 'Automation and Testing',
    'skills-cypress-desc': 'E2E tests integrated with CI/CD',
    'skills-azure-desc': 'Automation pipelines and bug reports',
    'skills-manual-tests': 'Manual and exploratory testing',
    'skills-test-cases': 'Test cases and documentation',
    'skills-ci-title': 'Continuous Integration and Versioning',
    'skills-cicd-desc': 'Azure DevOps pipelines',
    'skills-git-desc': 'Automation versioning',
    'skills-auto-exec': 'Automated execution in production',
    'skills-quality-title': 'Quality and Documentation',
    'skills-requirements': 'Requirements gathering',
    'skills-documentation': 'Technical and functional documentation',
    'skills-bug-management': 'Bug management and quality metrics',
    
    // Workflow translations
    'workflow-title': 'My Automated QA Workflow',
    'workflow-step-1-title': 'Requirements Analysis',
    'workflow-step-1-desc': 'Requirements analysis and test scenario definition',
    'workflow-step-2-title': 'Test Development',
    'workflow-step-2-desc': 'Writing E2E tests with Cypress (TypeScript)',
    'workflow-step-3-title': 'CI/CD Integration',
    'workflow-step-3-desc': 'Integration with Azure DevOps pipeline',
    'workflow-step-4-title': 'Automated Execution',
    'workflow-step-4-desc': 'Automatic execution after deploy',
    'workflow-step-5-title': 'Reports and Documentation',
    'workflow-step-5-desc': 'Results reporting and documentation in Azure DevOps',
    
    // Modal translations
    'modal-requirements-title': 'Requirements Analysis',
    'modal-development-title': 'Test Development',
    'modal-reports-title': 'Reports and Documentation',
    'test-matrix-title': 'Test Matrix',
    'test-feature': 'Feature',
    'test-scenario': 'Scenario',
    'test-priority': 'Priority',
    'test-type': 'Type',
    'high': 'High',
    'medium': 'Medium',
    'low': 'Low',
    'functional': 'Functional',
    'responsive': 'Responsive',
    'ui': 'Interface',
    'e2e': 'End-to-End',
    'api': 'API',
    'regression': 'Regression',
    'accessibility': 'Accessibility',
    
    // Modal content translations
    'cypress-example-title': 'Real Example - Cypress TypeScript',
    'bug-report-title': 'Bug Report Example',
    'nav-menu': 'Navigation Menu',
    'nav-scenario': 'Smooth navigation between sections',
    'lang-selector': 'Language Selector',
    'lang-scenario': 'PT/EN toggle functional',
    'dark-mode': 'Dark Mode',
    'dark-scenario': 'Toggle preserves preference',
    'responsive': 'Responsiveness',
    'responsive-scenario': 'Adaptable mobile/desktop layout',
    'modal-workflow': 'Modal Workflow',
    'modal-scenario': 'Opening/closing modals',
    'image-fallback': 'Image Fallback',
    'fallback-scenario': 'Placeholder for missing images',
    
    // Cypress code translations
    'cypress-comment-navigation': '// Test main navigation',
    'cypress-comment-lang': '// Test language selector',
    'cypress-comment-initial': '// Verify initial language',
    'cypress-comment-switch': '// Switch to English',
    'cypress-comment-persistence': '// Verify language persistence',
    'cypress-comment-modal': '// Test modal opening/closing',
    'cypress-comment-navigate': '// Navigate to workflow section',
    'cypress-comment-open': '// Test modal opening',
    'cypress-comment-close': '// Close modal with ESC',
    
    // Bug report translations
    'bug-report-content': '[BUG][PORTFOLIO - FRONT] Curiosity section image not displayed in dark mode\n\nContext:\nGiven I am on the Portfolio screen\nAnd I click the dark mode toggle\nThen I notice that the Curiosity section image is not displayed.\n\nExpected Result:\nThe Curiosity section image should be displayed correctly in both light and dark modes, without loss of visibility or contrast.',
    'workflow-title': 'My Automated QA Workflow',
    'workflow-step-1-title': 'Requirements Analysis',
    'workflow-step-1-desc': 'Requirements analysis and test scenario definition',
    'workflow-step-2-title': 'Test Development',
    'workflow-step-2-desc': 'Writing E2E tests with Cypress (TypeScript)',
    'workflow-step-3-title': 'CI/CD Integration',
    'workflow-step-3-desc': 'Integration with Azure DevOps pipeline',
    'workflow-step-4-title': 'Automated Execution',
    'workflow-step-4-desc': 'Automatic execution after deployment',
    'workflow-step-5-title': 'Reports and Documentation',
    'workflow-step-5-desc': 'Results reporting and documentation in Azure DevOps',
    
    // Navigation
    'home': 'Home',
    'about': 'About',
    'skills': 'Skills',
    'experience': 'Experience',
    'workflow': 'Workflow',
    'curiosities': 'Curiosities',
    'contact': 'Contact',
    
    'qa-engineer': 'QUALITY ANALYST',
    'portfolio-subtitle': 'Quality Assurance Portfolio',
    'get-in-touch': 'Get in touch',
    'add-photo': 'Add your photo here',
    
    // Contact section
    'email': 'Email',
    'phone': 'Phone',
    'github': 'GitHub',
    'linkedin': 'LinkedIn'
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Salvar preferência de idioma
  localStorage.setItem('portfolio-language', lang);
  
  // Atualiza conteúdo dos modais quando idioma muda (passando o idioma como parâmetro)
  updateModalContent(lang);
}

// Navegação suave
function smoothScroll() {
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Seletor de idioma personalizado
function initLanguageSelector() {
  const languageToggle = document.getElementById('language-toggle');
  const languageDropdown = document.getElementById('language-dropdown');
  const languageOptions = document.querySelectorAll('.language-option');
  
  // Toggle dropdown
  languageToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    languageDropdown.classList.toggle('show');
  });
  
  // Fechar dropdown ao clicar fora
  document.addEventListener('click', () => {
    languageDropdown.classList.remove('show');
  });
  
  // Prevenir fechamento ao clicar no dropdown
  languageDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  
  // Event listeners para opções de idioma
  languageOptions.forEach(option => {
    option.addEventListener('click', () => {
      const selectedLang = option.getAttribute('data-lang');
      setLanguage(selectedLang);
      updateLanguageDisplay(selectedLang);
      languageDropdown.classList.remove('show');
    });
  });
}

function updateLanguageDisplay(lang) {
  const currentLanguageSpan = document.getElementById('current-language');
  currentLanguageSpan.textContent = lang === 'pt-br' ? 'PT' : 'EN';
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Carregar idioma salvo ou padrão
  const savedLanguage = localStorage.getItem('portfolio-language') || 'pt-br';
  setLanguage(savedLanguage);
  updateLanguageDisplay(savedLanguage);
  
  // Inicializar seletor de idioma
  initLanguageSelector();
  
  // Inicializar funcionalidades
  smoothScroll();
  
  // Debug para imagens que não carregam
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Verificar se já foi processada
    if (img.dataset.processed) return;
    img.dataset.processed = 'true';
    
    // Verificar se a imagem existe
    const testImg = new Image();
    testImg.onload = function() {
      // Imagem existe, manter visível
      img.style.display = 'block';
    };
    
    testImg.onerror = function() {
      // Imagem não existe, criar placeholder
      console.log('Imagem não encontrada:', img.src);
      img.style.display = 'none';
      
      // Verificar se já existe placeholder no container
      const container = img.parentNode;
      if (container.querySelector('.image-placeholder-custom')) {
        return; // Já existe placeholder
      }
      
      // Criar placeholder personalizado
      const placeholder = document.createElement('div');
      placeholder.className = 'image-placeholder-custom';
      placeholder.textContent = 'Adicione sua foto aqui';
      
      // Determinar tamanho baseado no contexto
      const isTimeline = img.closest('.timeline-image');
      const size = isTimeline ? '280px' : '350px';
      const borderRadius = isTimeline ? '15px' : '20px';
      
      placeholder.style.cssText = `
        width: ${size};
        height: ${size};
        background: var(--bg-secondary);
        border-radius: ${borderRadius};
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-secondary);
        border: 3px solid var(--accent-primary);
        font-size: 1rem;
        text-align: center;
        box-shadow: 0 15px 35px var(--shadow);
        position: relative;
        margin: 0 auto;
      `;
      
      // Adicionar elemento decorativo
      const decoration = document.createElement('div');
      decoration.style.cssText = `
        position: absolute;
        top: 30%;
        left: 30%;
        width: 40%;
        height: 40%;
        background: var(--accent-secondary);
        border-radius: 50%;
        opacity: 0.3;
        z-index: -1;
      `;
      placeholder.appendChild(decoration);
      
      container.appendChild(placeholder);
    };
    
    testImg.src = img.src;
    
    img.addEventListener('load', function() {
      console.log('Imagem carregada com sucesso:', this.src);
    });
  });
});

// Language selector functions
function initializeLanguageSelector() {
    const languageButton = document.getElementById('languageButton');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (!languageButton || !languageDropdown) return;
    
    // Toggle dropdown
    languageButton.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        languageDropdown.classList.remove('show');
    });
    
    // Handle language selection
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
            languageDropdown.classList.remove('show');
        });
    });
}

// Dark Mode Functions
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (!darkModeToggle) return;
    
    // Load saved theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        // Update icon
        darkModeToggle.textContent = isDark ? '☀️' : '🌙';
        
        // Save preference
        localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    });
}

// Funcionalidades dos Modais
function initializeModals() {
  console.log('🔧 Inicializando modais...');
  
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const modals = document.querySelectorAll('.modal');
  const closeBtns = document.querySelectorAll('.close');

  console.log('📊 Elementos encontrados:');
  console.log('- Modal triggers:', modalTriggers.length);
  console.log('- Modals:', modals.length);
  console.log('- Close buttons:', closeBtns.length);

  // Abrir modais
  modalTriggers.forEach((trigger, index) => {
    console.log(`🎯 Adicionando listener ao trigger ${index + 1}:`, trigger.getAttribute('data-modal'));
    
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal');
      console.log('🔓 Tentando abrir modal:', modalId);
      
      const modal = document.getElementById(modalId);
      if (modal) {
        console.log('✅ Modal encontrado, abrindo...');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      } else {
        console.error('❌ Modal não encontrado:', modalId);
      }
    });
  });

  // Fechar modais - botão X
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('❌ Fechando modal via botão X');
      const modal = btn.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Fechar modais - clique fora do conteúdo
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        console.log('❌ Fechando modal via clique fora');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Fechar modais - tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal[style*="block"]');
      if (openModal) {
        console.log('❌ Fechando modal via ESC');
        openModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }
  });
}

// Função para definir conteúdo dinâmico dos modais
function getModalContent(modalId, language) {
  const modalContents = {
    requirementsModal: {
      'pt-br': `<div class="modal-matrix">
        <h4>Matriz de Requisitos - Funcionalidade Dark Mode</h4>
        <table class="requirements-table">
          <tr>
            <th>Requisito Funcional</th>
            <th>Critério de Aceitação</th>
            <th>Status</th>
            <th>Prioridade</th>
          </tr>
          <tr>
            <td>Toggle Dark/Light Mode</td>
            <td>Usuário deve conseguir alternar entre modos com um clique</td>
            <td><span class="status completed">✓ Implementado</span></td>
            <td><span class="priority high">Alta</span></td>
          </tr>
          <tr>
            <td>Persistência da Preferência</td>
            <td>Modo escolhido deve ser salvo no localStorage</td>
            <td><span class="status completed">✓ Implementado</span></td>
            <td><span class="priority high">Alta</span></td>
          </tr>
          <tr>
            <td>Feedback Visual</td>
            <td>Ícone do toggle deve refletir o modo atual</td>
            <td><span class="status completed">✓ Implementado</span></td>
            <td><span class="priority medium">Média</span></td>
          </tr>
          <tr>
            <td>Transição Suave</td>
            <td>Mudança de modo deve ter animação CSS</td>
            <td><span class="status completed">✓ Implementado</span></td>
            <td><span class="priority low">Baixa</span></td>
          </tr>
        </table>
      </div>`,
      'en': `<div class="modal-matrix">
        <h4>Requirements Matrix - Dark Mode Functionality</h4>
        <table class="requirements-table">
          <tr>
            <th>Functional Requirement</th>
            <th>Acceptance Criteria</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
          <tr>
            <td>Toggle Dark/Light Mode</td>
            <td>User should be able to switch between modes with one click</td>
            <td><span class="status completed">✓ Implemented</span></td>
            <td><span class="priority high">High</span></td>
          </tr>
          <tr>
            <td>Preference Persistence</td>
            <td>Chosen mode should be saved in localStorage</td>
            <td><span class="status completed">✓ Implemented</span></td>
            <td><span class="priority high">High</span></td>
          </tr>
          <tr>
            <td>Visual Feedback</td>
            <td>Toggle icon should reflect current mode</td>
            <td><span class="status completed">✓ Implemented</span></td>
            <td><span class="priority medium">Medium</span></td>
          </tr>
          <tr>
            <td>Smooth Transition</td>
            <td>Mode change should have CSS animation</td>
            <td><span class="status completed">✓ Implemented</span></td>
            <td><span class="priority low">Low</span></td>
          </tr>
        </table>
      </div>`
    },
    developmentModal: {
      'pt-br': `<div class="modal-code">
        <h4>Exemplo Real - Cypress com Page Object Model</h4>
        <div class="code-section">
          <h5>📁 portfolio.page.elements.ts</h5>
          <div class="code-block">
            <pre class="cypress-code">// portfolio.page.elements.ts
export const portfolioPageElements = {
    header: 'nav.top-nav',
    navLinks: '.nav-links a',
    main: 'main.content',
    sections: 'section[id]',
    darkModeToggle: '#dark-mode-toggle',
    languageToggle: '#language-toggle',
    languageOptions: '.language-option',
    heroSection: '.hero',
    skillsSection: '#habilidades',
    workflowSteps: '.workflow-step-clickable',
    modalTriggers: '[data-modal]',
    modals: '.modal',
    contactLinks: '.contact-item-link',
    externalLinks: 'a[target="_blank"]',
    images: 'img'
};</pre>
          </div>
        </div>
        
        <div class="code-section">
          <h5>📁 portfolio.page.ts</h5>
          <div class="code-block">
            <pre class="cypress-code">// portfolio.page.ts
import { portfolioPageElements } from './portfolio.page.elements';

class PortfolioPage {
    elements = portfolioPageElements;
    url = 'https://dharasimic.github.io/portfolio';

    visit() {
        cy.visit(this.url);
    }

    request() {
        return cy.request({ url: this.url, failOnStatusCode: false });
    }

    getNavLinks() {
        return cy.get(this.elements.navLinks);
    }

    getDarkModeToggle() {
        return cy.get(this.elements.darkModeToggle);
    }

    getLanguageToggle() {
        return cy.get(this.elements.languageToggle);
    }

    getLanguageOptions() {
        return cy.get(this.elements.languageOptions);
    }

    getWorkflowSteps() {
        return cy.get(this.elements.workflowSteps);
    }

    getContactLinks() {
        return cy.get(this.elements.contactLinks);
    }

    clickNavLink(section) {
        return cy.get(\`[href="#\${section}"]\`).click();
    }

    toggleDarkMode() {
        return this.getDarkModeToggle().click();
    }

    selectLanguage(lang) {
        this.getLanguageToggle().click();
        return cy.get(\`[data-lang="\${lang}"]\`).click();
    }
}

export default new PortfolioPage();</pre>
          </div>
        </div>
        
        <div class="code-section">
          <h5>📁 portfolio.spec.ts</h5>
          <div class="code-block">
            <pre class="cypress-code">// portfolio.spec.ts
import PortfolioPage from '../../pages/portfolioPage/portfolio.page';

describe('Portfolio QA - Dhara Simic', () => {
    const portfolio = PortfolioPage;

    beforeEach(() => {
        portfolio.visit();
    });

    it('carrega a página com sucesso (status 200)', () => {
        portfolio.request().its('status').should('eq', 200);
    });

    it('renderiza elementos principais', () => {
        cy.get('body').should('not.be.empty');
        cy.get('main.content').should('exist');
        portfolio.getNavLinks().its('length').should('be.gte', 5);
        cy.get('img').its('length').should('be.gte', 1);
    });

    it('navegação entre seções funciona corretamente', () => {
        portfolio.clickNavLink('sobre');
        cy.url().should('include', '#sobre');
        cy.get('#sobre').should('be.visible');
        
        portfolio.clickNavLink('habilidades');
        cy.url().should('include', '#habilidades');
        cy.get('#habilidades').should('be.visible');
    });

    it('modo escuro funciona corretamente', () => {
        // Verifica modo claro inicial
        cy.get('body').should('not.have.class', 'dark-mode');
        
        // Ativa modo escuro
        portfolio.toggleDarkMode();
        cy.get('body').should('have.class', 'dark-mode');
        
        // Verifica persistência após reload
        cy.reload();
        cy.get('body').should('have.class', 'dark-mode');
    });

    it('seletor de idioma funciona', () => {
        // Verifica idioma inicial
        cy.get('[data-i18n="qa-engineer"]')
          .should('contain', 'ANALISTA DE QUALIDADE');
        
        // Muda para inglês
        portfolio.selectLanguage('en');
        cy.get('[data-i18n="qa-engineer"]')
          .should('contain', 'QUALITY ANALYST');
        
        // Volta para português
        portfolio.selectLanguage('pt-br');
        cy.get('[data-i18n="qa-engineer"]')
          .should('contain', 'ANALISTA DE QUALIDADE');
    });

    it('workflow de QA é interativo', () => {
        portfolio.clickNavLink('habilidades');
        
        // Testa abertura de modal
        portfolio.getWorkflowSteps().first().click();
        cy.get('.modal').should('be.visible');
        
        // Fecha modal
        cy.get('body').type('{esc}');
        cy.get('.modal').should('not.be.visible');
    });

    it('links de contato funcionam', () => {
        portfolio.clickNavLink('contato');
        
        portfolio.getContactLinks().each(($link) => {
            const href = $link.attr('href');
            expect(href).to.match(/^(mailto:|https:\/\/)/);
        });
    });
});</pre>
          </div>
        </div>
      </div>`,
      'en': `<div class="modal-code">
        <h4>Real Example - Cypress with Page Object Model</h4>
        <div class="code-section">
          <h5>📁 portfolio.page.elements.ts</h5>
          <div class="code-block">
            <pre class="cypress-code">// portfolio.page.elements.ts
export const portfolioPageElements = {
    header: 'nav.top-nav',
    navLinks: '.nav-links a',
    main: 'main.content',
    sections: 'section[id]',
    darkModeToggle: '#dark-mode-toggle',
    languageToggle: '#language-toggle',
    languageOptions: '.language-option',
    heroSection: '.hero',
    skillsSection: '#habilidades',
    workflowSteps: '.workflow-step-clickable',
    modalTriggers: '[data-modal]',
    modals: '.modal',
    contactLinks: '.contact-item-link',
    externalLinks: 'a[target="_blank"]',
    images: 'img'
};</pre>
          </div>
        </div>
        
        <div class="code-section">
          <h5>📁 portfolio.page.ts</h5>
          <div class="code-block">
            <pre class="cypress-code">// portfolio.page.ts
import { portfolioPageElements } from './portfolio.page.elements';

class PortfolioPage {
    elements = portfolioPageElements;
    url = 'https://dharasimic.github.io/portfolio';

    visit() {
        cy.visit(this.url);
    }

    request() {
        return cy.request({ url: this.url, failOnStatusCode: false });
    }

    getNavLinks() {
        return cy.get(this.elements.navLinks);
    }

    getDarkModeToggle() {
        return cy.get(this.elements.darkModeToggle);
    }

    getLanguageToggle() {
        return cy.get(this.elements.languageToggle);
    }

    getLanguageOptions() {
        return cy.get(this.elements.languageOptions);
    }

    getWorkflowSteps() {
        return cy.get(this.elements.workflowSteps);
    }

    getContactLinks() {
        return cy.get(this.elements.contactLinks);
    }

    clickNavLink(section) {
        return cy.get(\`[href="#\${section}"]\`).click();
    }

    toggleDarkMode() {
        return this.getDarkModeToggle().click();
    }

    selectLanguage(lang) {
        this.getLanguageToggle().click();
        return cy.get(\`[data-lang="\${lang}"]\`).click();
    }
}

export default new PortfolioPage();</pre>
          </div>
        </div>
        
        <div class="code-section">
          <h5>📁 portfolio.spec.ts</h5>
          <div class="code-block">
            <pre class="cypress-code">// portfolio.spec.ts
import PortfolioPage from '../../pages/portfolioPage/portfolio.page';

describe('Portfolio QA - Dhara Simic', () => {
    const portfolio = PortfolioPage;

    beforeEach(() => {
        portfolio.visit();
    });

    it('loads page successfully (status 200)', () => {
        portfolio.request().its('status').should('eq', 200);
    });

    it('renders main elements', () => {
        cy.get('body').should('not.be.empty');
        cy.get('main.content').should('exist');
        portfolio.getNavLinks().its('length').should('be.gte', 5);
        cy.get('img').its('length').should('be.gte', 1);
    });

    it('navigation between sections works correctly', () => {
        portfolio.clickNavLink('sobre');
        cy.url().should('include', '#sobre');
        cy.get('#sobre').should('be.visible');
        
        portfolio.clickNavLink('habilidades');
        cy.url().should('include', '#habilidades');
        cy.get('#habilidades').should('be.visible');
    });

    it('dark mode works correctly', () => {
        // Check initial light mode
        cy.get('body').should('not.have.class', 'dark-mode');
        
        // Enable dark mode
        portfolio.toggleDarkMode();
        cy.get('body').should('have.class', 'dark-mode');
        
        // Check persistence after reload
        cy.reload();
        cy.get('body').should('have.class', 'dark-mode');
    });

    it('language selector works', () => {
        // Check initial language
        cy.get('[data-i18n="qa-engineer"]')
          .should('contain', 'QUALITY ANALYST');
        
        // Change to Portuguese
        portfolio.selectLanguage('pt-br');
        cy.get('[data-i18n="qa-engineer"]')
          .should('contain', 'ANALISTA DE QUALIDADE');
        
        // Back to English
        portfolio.selectLanguage('en');
        cy.get('[data-i18n="qa-engineer"]')
          .should('contain', 'QUALITY ANALYST');
    });

    it('QA workflow is interactive', () => {
        portfolio.clickNavLink('habilidades');
        
        // Test modal opening
        portfolio.getWorkflowSteps().first().click();
        cy.get('.modal').should('be.visible');
        
        // Close modal
        cy.get('body').type('{esc}');
        cy.get('.modal').should('not.be.visible');
    });

    it('contact links work', () => {
        portfolio.clickNavLink('contato');
        
        portfolio.getContactLinks().each(($link) => {
            const href = $link.attr('href');
            expect(href).to.match(/^(mailto:|https:\/\/)/);
        });
    });
});</pre>
          </div>
        </div>
      </div>`
    },
    reportsModal: {
      'pt-br': `<div class="modal-report">
        <h4>[BUG][PORTFÓLIO - FRONT] Imagem da seção Curiosidade não é exibida no modo escuro</h4>
        <div class="bug-report-content">
          <div class="bug-header">
            <span class="bug-id">BUG-2024-002</span>
            <span class="bug-severity medium">SEVERIDADE: Média</span>
            <span class="bug-status open">STATUS: Aberto</span>
          </div>
          
          <div class="bug-details">
            <h5>📋 Contexto</h5>
            <p>Dado que estou na tela Portfólio<br>
            E clico no toggle de modo escuro<br>
            Então noto que a imagem da seção Curiosidade não é exibida.</p>
            
            <h5>✅ Resultado Esperado</h5>
            <p>A imagem da seção Curiosidade deve ser exibida corretamente tanto no modo claro quanto no modo escuro, sem perda de visibilidade ou contraste.</p>
            
            <h5>🔍 Passos para Reproduzir</h5>
            <ol>
              <li>Acesse o portfólio</li>
              <li>Navegue até a seção "Curiosidades"</li>
              <li>Ative o modo escuro clicando no toggle</li>
              <li>Observe a visibilidade da imagem na seção</li>
            </ol>
            
            <h5>❌ Resultado Atual</h5>
            <p>A imagem da seção Curiosidade perde visibilidade ou não é exibida adequadamente no modo escuro.</p>
            
            <h5>🔧 Investigação</h5>
            <p>Necessário verificar CSS para modo escuro e ajustar propriedades de visibilidade, opacidade ou filtros da imagem.</p>
            
            <h5>💡 Possível Solução</h5>
            <p>Ajustar propriedades CSS específicas para modo escuro ou aplicar filtros de contraste adequados.</p>
          </div>
        </div>
      </div>`,
      'en': `<div class="modal-report">
        <h4>[BUG][PORTFOLIO - FRONT] Curiosities section image not displayed in dark mode</h4>
        <div class="bug-report-content">
          <div class="bug-header">
            <span class="bug-id">BUG-2024-002</span>
            <span class="bug-severity medium">SEVERITY: Medium</span>
            <span class="bug-status open">STATUS: Open</span>
          </div>
          
          <div class="bug-details">
            <h5>📋 Context</h5>
            <p>Given that I am on the Portfolio screen<br>
            And I click on the dark mode toggle<br>
            Then I notice that the Curiosities section image is not displayed.</p>
            
            <h5>✅ Expected Result</h5>
            <p>The Curiosities section image should be displayed correctly in both light and dark modes, without loss of visibility or contrast.</p>
            
            <h5>🔍 Steps to Reproduce</h5>
            <ol>
              <li>Access the portfolio</li>
              <li>Navigate to the "Curiosities" section</li>
              <li>Enable dark mode by clicking the toggle</li>
              <li>Observe the image visibility in the section</li>
            </ol>
            
            <h5>❌ Current Result</h5>
            <p>The Curiosities section image loses visibility or is not properly displayed in dark mode.</p>
            
            <h5>🔧 Investigation</h5>
            <p>Need to check CSS for dark mode and adjust image visibility, opacity, or filter properties.</p>
            
            <h5>💡 Possible Solution</h5>
            <p>Adjust specific CSS properties for dark mode or apply appropriate contrast filters.</p>
          </div>
        </div>
      </div>`
    }
  };
  
  return modalContents[modalId] && modalContents[modalId][language] 
    ? modalContents[modalId][language] 
    : modalContents[modalId]['pt-br'];
}

// Função para atualizar conteúdo dos modais baseado no idioma
function updateModalContent(language = null) {
  const currentLang = language || localStorage.getItem('portfolio-language') || 'pt-br';
  
  // Atualiza conteúdo do modal de requisitos
  const requirementsContent = document.getElementById('requirementsModalContent');
  if (requirementsContent) {
    requirementsContent.innerHTML = getModalContent('requirementsModal', currentLang);
  }
  
  // Atualiza conteúdo do modal de desenvolvimento
  const developmentContent = document.getElementById('developmentModalContent');
  if (developmentContent) {
    developmentContent.innerHTML = getModalContent('developmentModal', currentLang);
  }
  
  // Atualiza conteúdo do modal de relatórios
  const reportsContent = document.getElementById('reportsModalContent');
  if (reportsContent) {
    reportsContent.innerHTML = getModalContent('reportsModal', currentLang);
  }
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageSelector();
    initializeDarkMode();
    initializeModals(); // Inicialização dos modais
    smoothScroll();
    
    // Set initial language
    const savedLang = localStorage.getItem('portfolio-language') || 'pt-br';
    setLanguage(savedLang);
});
