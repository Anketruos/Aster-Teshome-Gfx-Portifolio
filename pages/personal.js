/* ===================================================
   PERSONAL PROJECTS — Projects data & logic
=================================================== */

const projects = [
  {
    img: '../images/P1 belt of truth worked on it based on benaiah ministry.jpg',
    type: 'Ministry Graphic',
    name: 'Belt of Truth — Benaiah Ministry',
    blurb: 'A personal piece exploring the Armor of God, created in connection with Benaiah Ministry.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'A personal project rooted in faith and creativity. The "Belt of Truth" is the first piece of the Armor of God described in Ephesians 6 — foundational, grounding, essential. This graphic was worked on in connection with Benaiah Ministry, combining deep theological meaning with intentional visual design. Bold, structured, and spiritually anchored.'
  }
];

/* ── init ── */
initCursor();
buildGrid('projectsGrid', projects);
initNav();

/* ── helpers ── */
function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let rx = 0, ry = 0, dx = 0, dy = 0;
  document.addEventListener('mousemove', e => {
    dx = e.clientX; dy = e.clientY;
    dot.style.left = dx + 'px'; dot.style.top = dy + 'px';
  });
  (function loop() {
    rx += (dx - rx) * 0.18; ry += (dy - ry) * 0.18;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a,button,.project-card,.skill-tag,.form-input'))
      document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a,button,.project-card,.skill-tag,.form-input'))
      document.body.classList.remove('cursor-hover');
  });
}

function buildGrid(gridId, data) {
  const grid = document.getElementById(gridId);
  data.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = (i * 0.06) + 's';
    card.innerHTML = `
      <div class="project-thumb">
        <img src="${p.img}" alt="${p.name}" class="project-thumb-img" />
      </div>
      <div class="project-info">
        <div class="project-type">${p.type}</div>
        <div class="project-name">${p.name}</div>
        <p class="project-blurb">${p.blurb}</p>
        <div class="project-open-hint">↗ View details</div>
      </div>`;
    card.addEventListener('click', () => openModal(p));
    grid.appendChild(card);
  });
}

function openModal(p) {
  const overlay = document.getElementById('modalOverlay');
  const ph = document.getElementById('modalImgPlaceholder');
  ph.innerHTML = `<img src="${p.img}" alt="${p.name}" class="modal-real-img" />`;
  document.getElementById('modalTag').textContent   = p.type;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalBody').textContent  = p.detail;
  document.getElementById('modalTools').innerHTML   = p.tools.map(t => `<span class="tool-chip">${t}</span>`).join('');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  const overlay = document.getElementById('modalOverlay');
  if (e && e.target !== overlay) return;
  overlay.classList.add('hidden');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('modalOverlay').classList.add('hidden');
    document.body.style.overflow = '';
  }
});

function initNav() {
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}
