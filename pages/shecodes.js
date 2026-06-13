/* ===================================================
   SHECODES AASTU — Projects data & logic
=================================================== */

const projects = [
  {
    img: '../images/S1 ada lovalence first female programer made to inspire girls for the club.webp',
    type: 'Inspirational Poster',
    name: 'Ada Lovelace — First Female Programmer',
    blurb: 'A tribute poster to Ada Lovelace, designed to inspire girls to join and believe in the SheCodes club.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'Designed to inspire. This poster celebrates Ada Lovelace — the world\'s first computer programmer — as a symbol of what women can achieve in technology. Created specifically to motivate girls to join the SheCodes AASTU club, the design balances historical reverence with a modern, bold visual identity.'
  },
  {
    img: '../images/S2 make for the she codes problem solving week.webp',
    type: 'Event Poster',
    name: 'Problem Solving Week',
    blurb: 'A bold poster created for the SheCodes AASTU problem-solving week event.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'Built for SheCodes\' problem-solving week, this poster channels the spirit of analytical thinking and creative challenge. The design is sharp and direct — communicating the technical energy of the event while keeping the brand warm and empowering for its audience.'
  },
  {
    img: '../images/S3 made to celebrate the 100 new followers of shecodes telegram channel.webp',
    type: 'Milestone Graphic',
    name: '100 Followers Milestone',
    blurb: 'Celebratory graphic marking 100 new followers on the SheCodes AASTU Telegram channel.',
    tools: ['Canva Pro'],
    detail: 'A community celebration graphic marking a significant growth milestone — 100 new followers on the SheCodes AASTU Telegram channel. Energetic, celebratory, and shareable. Designed to feel like a party in poster form — because every milestone deserves recognition.'
  },
  {
    img: '../images/S4 made to motivate and cheris the girls that are learning int he club this is for the star of the week.webp',
    type: 'Recognition Graphic',
    name: 'Star of the Week',
    blurb: 'Weekly recognition graphic celebrating a standout member of the SheCodes AASTU club.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'The Star of the Week series is designed to do one thing: make someone feel genuinely celebrated. Each week a club member is highlighted with this graphic — warm, personal, and visually joyful. Designed to motivate and cherish the girls who are putting in the work to learn and grow.'
  },
  {
    img: '../images/S5 this is made to say happy holiday saying happy easter to the memeber of shecode.webp',
    type: 'Holiday Greeting',
    name: 'Happy Easter — SheCodes',
    blurb: 'A warm Easter greeting graphic sent to SheCodes AASTU members.',
    tools: ['Canva Pro'],
    detail: 'A holiday greeting graphic designed to wish SheCodes AASTU members a happy Easter. Warm, friendly, and community-focused — the design prioritizes connection over formality, reminding members that the club sees and appreciates them beyond just the learning environment.'
  },
  {
    img: '../images/S6 this is made for the final program poster of the shecode closing ceremony.webp',
    type: 'Closing Ceremony',
    name: 'SheCodes Closing Ceremony — Program',
    blurb: 'Official program poster for the SheCodes AASTU closing ceremony.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'The official program poster for the SheCodes AASTU closing ceremony. This piece marks the end of a chapter — designed to feel commemorative and celebratory. Clear structure, strong branding, and a tone that honors the hard work every member put into the year.'
  },
  {
    img: '../images/S7 thisis the closing banner made for the shecodes closing ceremony.webp',
    type: 'Event Banner',
    name: 'SheCodes Closing Ceremony — Banner',
    blurb: 'Large-format closing ceremony banner for the SheCodes AASTU end-of-year event.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'The closing ceremony banner for SheCodes AASTU — designed for large-format display at the event venue. Bold, proud, and unmistakably SheCodes. The banner anchors the visual identity of the closing ceremony and serves as the backdrop for a year\'s worth of achievement, growth, and community.'
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
