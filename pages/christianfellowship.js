/* ===================================================
   CHRISTIAN FELLOWSHIP — Projects data & logic
=================================================== */

const projects = [
  {
    img: '../images/F1 general program.jpg',
    type: 'Event Program',
    name: 'General Program — Vol. 1',
    blurb: 'Fellowship general program poster featuring the schedule, theme, and community spirit.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'A clean, structured general program poster for a fellowship event. Designed to communicate key details — time, theme, and speaker — while maintaining a bold and unified visual identity that reflects the heart of the community.'
  },
  {
    img: '../images/F2 general program.png',
    type: 'Event Program',
    name: 'General Program — Vol. 2',
    blurb: 'Second edition of the fellowship general program series with an updated visual treatment.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'The second in the general program series, this poster builds on the established visual language while introducing refreshed color balance and typographic hierarchy to keep the series feeling alive and consistent.'
  },
  {
    img: '../images/F3 general program.png',
    type: 'Event Program',
    name: 'General Program — Vol. 3',
    blurb: 'Third fellowship general program poster, continuing the series with refined composition.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'The third installment of the general program series. Subtle layout refinements and updated content make this edition feel both familiar and fresh — a testament to building a consistent design language across events.'
  },
  {
    img: '../images/F4 general program.jpg',
    type: 'Event Program',
    name: 'General Program — Vol. 4',
    blurb: 'Fourth fellowship general program — evolving visual system with each edition.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'Volume 4 of the general program poster series. The design continues to evolve — refined spacing, updated iconography, and a stronger color contrast give this edition a more impactful presence.'
  },
  {
    img: '../images/F5 general program.png',
    type: 'Event Program',
    name: 'General Program — Vol. 5',
    blurb: 'Fifth edition of the fellowship program series, bold and community-centered.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'The fifth general program poster in the series. By this point the visual system is mature and confident — the design speaks fluently in the fellowship\'s visual language while remaining engaging and easy to read.'
  },
  {
    img: '../images/F6 general program and GC goodbye.png',
    type: 'Event Program & Farewell',
    name: 'General Program & GC Goodbye',
    blurb: 'A combined program and heartfelt farewell poster for the General Coordinator.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'A dual-purpose poster: announcing the general program while also celebrating and bidding farewell to the outgoing General Coordinator. Warm in tone, structured in layout — a piece that carries both information and emotion.'
  },
  {
    img: '../images/F7 I4U and Prayers retreat program.jpg',
    type: 'Retreat Program',
    name: 'I4U & Prayers Retreat Program',
    blurb: 'Dedicated program poster for the I4U and Prayers spiritual retreat event.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'A purpose-built program poster for the I4U and Prayers retreat. The design communicates a sense of reverence and expectation — clean structure, soft spiritual tones, and clear typographic hierarchy guide attendees through the program at a glance.'
  },
  {
    img: '../images/F7 count down 0 days left.jpg',
    type: 'Countdown Series',
    name: 'Event Countdown — 0 Days Left',
    blurb: 'Final countdown post: the day is here. Bold energy and anticipation.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'The final piece of a 4-day countdown series. "0 Days Left" signals the arrival of the event — designed to peak excitement and urgency. The visual energy is at its highest here: bold type, maximum contrast, and a strong call to presence.'
  },
  {
    img: '../images/F7 count down 1 days left.jpg',
    type: 'Countdown Series',
    name: 'Event Countdown — 1 Day Left',
    blurb: 'Penultimate countdown post building anticipation for tomorrow\'s event.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'One day to go. This post in the countdown series cranks up the anticipation — the design shifts to a more urgent, energetic tone while keeping the series visually cohesive with consistent layout and color treatment.'
  },
  {
    img: '../images/F7 count down 2 days left.jpg',
    type: 'Countdown Series',
    name: 'Event Countdown — 2 Days Left',
    blurb: 'Second countdown post in the series, building steady excitement.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'Two days to the event. The countdown series is in full swing — this post maintains the momentum established in the opener, gradually increasing the visual weight and energy as the event draws closer.'
  },
  {
    img: '../images/F7 count down 3 days left.jpg',
    type: 'Countdown Series',
    name: 'Event Countdown — 3 Days Left',
    blurb: 'Opening post of the 4-day countdown series, setting the tone for what\'s coming.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: 'The first post of a 4-part event countdown series. "3 Days Left" introduces the visual system that will carry through to launch day — bold numerals, a unified color palette, and clear event branding to build awareness and excitement.'
  },
  {
    img: '../images/F8 good luck on exam wish.png',
    type: 'Community Graphic',
    name: 'Good Luck on Your Exams',
    blurb: 'A warm, encouraging graphic wishing the fellowship community success on their exams.',
    tools: ['Canva Pro'],
    detail: 'A heartfelt community graphic created to encourage and uplift fellowship members during exam season. Simple, warm, and genuine — designed to feel like a message from a friend rather than a broadcast, reminding students they\'re supported and prayed for.'
  },
  {
    img: '../images/F9 romans 15 13 verse poster.png',
    type: 'Scripture Poster',
    name: 'Romans 15:13 — God of Hope',
    blurb: 'Verse poster for Romans 15:13, centered on the God of hope, joy, and peace.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: '"May the God of hope fill you with all joy and peace as you trust in him." Romans 15:13 comes alive in this typographic poster — the layout breathes openness, the color palette evokes peace, and every design choice points toward the abundant hope the verse promises.'
  },
  {
    img: '../images/F10 galacians 3 13 verse poster.png',
    type: 'Scripture Poster',
    name: 'Galatians 3:13 — Redeemed',
    blurb: 'Powerful verse poster for Galatians 3:13, declaring freedom through Christ\'s redemption.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: '"Christ redeemed us from the curse of the law." Galatians 3:13 is rendered here with weight and conviction. Bold typography and a strong contrast palette give this piece the gravity the verse deserves — a declaration of freedom, not a quiet whisper.'
  },
  {
    img: '../images/F11 2nd samuel 22 33 verse poster.png',
    type: 'Scripture Poster',
    name: '2 Samuel 22:33 — My Strength',
    blurb: 'Verse poster for 2 Samuel 22:33 — God as the source of strength and protection.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: '"It is God who arms me with strength and keeps my way secure." This poster treats 2 Samuel 22:33 as a battle cry — structured, powerful, and confident. The design mirrors the verse: solid, immovable, grounded in something greater than the self.'
  },
  {
    img: '../images/F12 hebrews 11 1 verse poster.png',
    type: 'Scripture Poster',
    name: 'Hebrews 11:1 — Faith',
    blurb: 'The definition of faith — a minimalist poster for the most iconic verse on belief.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: '"Now faith is confidence in what we hope for and assurance about what we do not see." Hebrews 11:1 is perhaps the most foundational verse on faith in all of scripture. This poster treats it with the reverence it deserves — clean, minimal, and quietly powerful.'
  },
  {
    img: '../images/F13 philipians 1 19 verse poster.jpg',
    type: 'Scripture Poster',
    name: 'Philippians 1:19 — Deliverance',
    blurb: 'Verse poster for Philippians 1:19, trusting in the Spirit\'s provision for deliverance.',
    tools: ['Canva Pro', 'Photoshop'],
    detail: '"For I know that through your prayers and God\'s provision of the Spirit of Jesus Christ what has happened to me will turn out for my deliverance." Philippians 1:19 speaks of deep trust in divine provision — this poster reflects that trust with a composed, faith-rooted visual treatment.'
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
