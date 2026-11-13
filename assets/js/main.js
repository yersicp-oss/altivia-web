(function () {
  'use strict';
  const $ = (query, root=document) => root.querySelector(query);
  const $$ = (query, root=document) => Array.from(root.querySelectorAll(query));
  const nav = $('#main-sidebar');
  const mobileBtn = $('#mobile-menu');
  const scrim = $('#mobile-scrim');
  function toggleNav(open) {
    if (!nav || !mobileBtn || !scrim) return;
    nav.classList.toggle('open', open);
    scrim.classList.toggle('open', open);
    mobileBtn.setAttribute('aria-expanded', String(open));
    mobileBtn.setAttribute('aria-label', open ? 'Cerrar navegación' : 'Abrir navegación');
    document.body.classList.toggle('menu-open', open);
  }
  mobileBtn?.addEventListener('click', () => toggleNav(!nav.classList.contains('open')));
  scrim?.addEventListener('click', () => toggleNav(false));
  $$('.nav-link').forEach(link => link.addEventListener('click', () => toggleNav(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { toggleNav(false); closeModal(); } });

  const cards = $$('.project-card[data-category]');
  const filters = $$('.filter-btn[data-filter]');
  const search = $('#projects-search');
  const count = $('#projects-count');
  const empty = $('#projects-empty');
  let currentCategory = 'todos';
  function normalize(str) { return (str||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''); }
  function filterProjects() {
    if (!cards.length) return;
    const query = normalize(search?.value.trim());
    let n = 0;
    cards.forEach(card => {
      const byCategory = currentCategory === 'todos' || card.dataset.category === currentCategory;
      const byText = !query || normalize([card.dataset.title, card.dataset.description, card.dataset.category, card.dataset.areas].join(' ')).includes(query);
      const visible = byCategory && byText;
      card.classList.toggle('hidden-card', !visible);
      if (visible) n++;
    });
    if (count) count.textContent = `${n} ${n === 1 ? 'registro' : 'registros'} de experiencia`;
    if (empty) empty.hidden = n !== 0;
  }
  filters.forEach(btn => btn.addEventListener('click', () => {
    currentCategory = btn.dataset.filter;
    filters.forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', String(b===btn)); });
    filterProjects();
  }));
  search?.addEventListener('input', filterProjects);
  filterProjects();

  const modalOverlay = $('#project-modal');
  const modalImg = $('#modal-image');
  const modalTitle = $('#modal-title');
  const modalDesc = $('#modal-description');
  const modalList = $('#modal-list');
  const modalCategory = $('#modal-category');
  let previousFocus = null;
  function openModal(card) {
    if (!modalOverlay || !card) return;
    previousFocus = document.activeElement;
    if (modalImg) { modalImg.src = $('img', card)?.src||''; modalImg.alt = $('img',card)?.alt||''; }
    if (modalTitle) modalTitle.textContent = card.dataset.title||'';
    if (modalDesc) modalDesc.textContent = card.dataset.description||'';
    if (modalCategory) modalCategory.textContent = card.dataset.label||'Experiencia';
    if (modalList) {
      modalList.replaceChildren();
      (card.dataset.tasks||'').split('|').filter(Boolean).forEach(task => {
        const li = document.createElement('li'); li.textContent = task; modalList.appendChild(li);
      });
    }
    modalOverlay.hidden = false;
    document.body.classList.add('modal-open');
    $('.modal-close',modalOverlay)?.focus();
  }
  function closeModal() {
    if (!modalOverlay || modalOverlay.hidden) return;
    modalOverlay.hidden = true;
    document.body.classList.remove('modal-open');
    if (previousFocus?.focus) previousFocus.focus();
  }
  cards.forEach(card => {
    card.addEventListener('click', e => { if (e.target.closest('a')) return; openModal(card); });
    card.addEventListener('keydown', e => { if(e.key === 'Enter'||e.key === ' ') { e.preventDefault(); openModal(card); }});
  });
  $$('.modal-close,[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  modalOverlay?.addEventListener('click', e => { if(e.target === modalOverlay) closeModal(); });
  modalOverlay?.addEventListener('keydown', e => {
    if(e.key !== 'Tab') return;
    const controls = $$('button,a,input,[tabindex]:not([tabindex="-1"])',modalOverlay).filter(el => !el.disabled);
    if(!controls.length) return;
    const first=controls[0],last=controls[controls.length-1];
    if (e.shiftKey && document.activeElement===first){e.preventDefault();last.focus()}
    else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus()}
  });

  const settings = window.ALTIVIA_CONFIG||{};
  $$('[data-contact-email]').forEach(el => { if(settings.email){el.textContent=settings.email; el.href='mailto:'+settings.email;} else el.hidden=true; });
  $$('[data-linkedin]').forEach(el => { if(settings.linkedin) el.href=settings.linkedin; else el.hidden=true; });
  const contactForm = $('#contact-form');
  contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    if (!contactForm.reportValidity()) return;
    const status = $('#form-status');
    if (!settings.email || !/^\S+@\S+\.\S+$/.test(settings.email)) {
      if(status){status.textContent='Antes de utilizar el formulario, el administrador debe configurar el correo corporativo en assets/js/config.js.';status.classList.add('show');status.setAttribute('role','alert');}
      return;
    }
    const data = new FormData(contactForm);
    const clean=(name)=>String(data.get(name)||'').trim();
    const subject = `[ALTIVIA Web] ${clean('servicio')||'Consulta profesional'} — ${clean('nombre')}`;
    const body = [
      'Solicitud de contacto desde ALTIVIA Web','',
      'Nombre: '+clean('nombre'), 'Empresa: '+clean('empresa'), 'Correo: '+clean('correo'),
      'Servicio: '+clean('servicio'), '', 'Mensaje:', clean('mensaje')
    ].join('\n');
    // Se abre el programa de correo del visitante. No se envía automáticamente.
    window.location.href=`mailto:${encodeURIComponent(settings.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if(status){status.textContent='Se abrió tu aplicación de correo con la consulta preparada. Revisa el mensaje y pulsa Enviar desde tu correo.';status.classList.add('show');status.setAttribute('role','status');}
  });
  const year = $('#year'); if(year) year.textContent = String(new Date().getFullYear());
})();
