const translations = {
  pt: {
    nav: { about: 'Sobre', stack: 'Stack', projects: 'Projetos', education: 'Formação', competition: 'Competição', contact: 'Contato' },
    hero: {
      available: 'Disponível para oportunidades e novos projetos',
      kicker: 'DESENVOLVEDOR BACKEND',
      description: 'Desenvolvedor focado em backend, APIs REST e bancos de dados, criando aplicações organizadas, escaláveis e com experiências simples para quem usa.',
      projectsButton: 'Ver projetos', contactButton: 'Entrar em contato', started: 'Início na programação', focus: 'Foco principal'
    },
    about: {
      label: 'SOBRE MIM', title: 'Código com propósito, não só por aparência.',
      p1: 'Comecei a programar em 2023 e desde então venho direcionando meus estudos para desenvolvimento backend, arquitetura de aplicações, APIs REST e bancos de dados.',
      p2: 'Gosto de transformar problemas reais em sistemas úteis: automações, integrações, ferramentas internas, plataformas web e projetos que conectam software a dispositivos físicos.'
    },
    stack: { label: 'TECNOLOGIAS', title: 'Minha stack e ferramentas do dia a dia.' },
    projects: {
      label: 'PROJETOS', title: 'Projetos que representam como eu trabalho.', featured: 'Destaque',
      cotasmart: 'Plataforma SaaS de pesquisa e comparação de preços com interpretação de busca por IA, catálogo próprio, histórico de preços, assinatura e integração com fontes externas.',
      automationTitle: 'Automação de Publicações', automation: 'Automação em Python para validação, sincronização e publicação de documentos, com Playwright, conversão de arquivos e geração de relatórios.',
      budgetTitle: 'Sistema de Orçamentos', budget: 'Sistema web para cadastro de itens, três cotações, comparação automática e histórico, com recursos de IA para auxiliar descrições e organização.',
      iotTitle: 'ESP32 + MQTT', iot: 'Projeto IoT integrando ESP32, MQTT, aplicação web e controle de dispositivos, com comandos em tempo real, logs e interface de acompanhamento.'
    },
    education: { label: 'FORMAÇÃO', title: 'Minha base acadêmica e técnica.', degree: 'Graduação', current: 'Atual', technical: 'Curso Técnico', completed: 'Concluído / em formação técnica' },
    competition: {
      label: 'COMPETIÇÃO', title: 'Desenvolvimento Web sob pressão, precisão e tempo.',
      description: 'Participação em seletivas e simulados da modalidade Desenvolvimento Web, trabalhando fidelidade visual, responsividade, PHP, JavaScript, sessões, JSON, APIs, banco de dados e resolução rápida de problemas.'
    },
    contact: { label: 'CONTATO', title: 'Tem um projeto ou oportunidade? Vamos conversar.', description: 'Estou aberto a oportunidades de desenvolvimento, projetos, colaboração e networking.' },
    footer: { back: 'Voltar ao topo' }
  },
  en: {
    nav: { about: 'About', stack: 'Stack', projects: 'Projects', education: 'Education', competition: 'Competition', contact: 'Contact' },
    hero: {
      available: 'Open to opportunities and new projects', kicker: 'BACKEND DEVELOPER',
      description: 'Backend developer focused on REST APIs and databases, building organized, scalable applications with simple experiences for users.',
      projectsButton: 'View projects', contactButton: 'Get in touch', started: 'Started coding', focus: 'Main focus'
    },
    about: {
      label: 'ABOUT ME', title: 'Code with purpose, not just appearance.',
      p1: 'I started programming in 2023 and since then I have focused my studies on backend development, application architecture, REST APIs and databases.',
      p2: 'I like turning real problems into useful systems: automations, integrations, internal tools, web platforms and projects that connect software to physical devices.'
    },
    stack: { label: 'TECHNOLOGIES', title: 'My stack and everyday tools.' },
    projects: {
      label: 'PROJECTS', title: 'Projects that represent how I work.', featured: 'Featured',
      cotasmart: 'SaaS platform for product search and price comparison with AI query interpretation, an internal catalog, price history, subscriptions and external data sources.',
      automationTitle: 'Publishing Automation', automation: 'Python automation for validating, synchronizing and publishing documents using Playwright, file conversion and report generation.',
      budgetTitle: 'Quotation System', budget: 'Web system for item registration, three supplier quotations, automatic comparison and history, with AI features to support descriptions and organization.',
      iotTitle: 'ESP32 + MQTT', iot: 'IoT project integrating ESP32, MQTT, a web application and device control with real-time commands, logs and a monitoring interface.'
    },
    education: { label: 'EDUCATION', title: 'My academic and technical foundation.', degree: 'Bachelor / Degree', current: 'Current', technical: 'Technical Course', completed: 'Completed / technical training' },
    competition: {
      label: 'COMPETITION', title: 'Web development under pressure, precision and time constraints.',
      description: 'Participation in selection rounds and simulations for Web Development, working with visual fidelity, responsiveness, PHP, JavaScript, sessions, JSON, APIs, databases and fast problem-solving.'
    },
    contact: { label: 'CONTACT', title: 'Have a project or opportunity? Let’s talk.', description: 'I am open to development opportunities, projects, collaboration and networking.' },
    footer: { back: 'Back to top' }
  }
};

let currentLanguage = localStorage.getItem('portfolio-language') || 'pt';

function translatePage() {
  document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : 'en';
  document.getElementById('currentLanguage').textContent = currentLanguage.toUpperCase();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.dataset.i18n.split('.');
    let value = translations[currentLanguage];
    keys.forEach(key => value = value?.[key]);
    if (value) el.textContent = value;
  });
}

document.getElementById('languageToggle').addEventListener('click', () => {
  currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
  localStorage.setItem('portfolio-language', currentLanguage);
  translatePage();
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 20));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('currentYear').textContent = new Date().getFullYear();
translatePage();
