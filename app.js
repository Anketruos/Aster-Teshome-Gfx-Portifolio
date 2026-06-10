/* ===================================================
   CURSOR
=================================================== */
const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

let rx = 0, ry = 0, dx = 0, dy = 0;

document.addEventListener('mousemove', e => {
  dx = e.clientX;
  dy = e.clientY;
  cursorDot.style.left = dx + 'px';
  cursorDot.style.top  = dy + 'px';
});

(function animateRing() {
  rx += (dx - rx) * 0.18;
  ry += (dy - ry) * 0.18;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

document.addEventListener('mouseover', e => {
  if (e.target.closest('a, button, .cat-card, .skill-tag, .form-input'))
    document.body.classList.add('cursor-hover');
});
document.addEventListener('mouseout', e => {
  if (e.target.closest('a, button, .cat-card, .skill-tag, .form-input'))
    document.body.classList.remove('cursor-hover');
});

/* ===================================================
   NAV SCROLL TINT
=================================================== */
const nav = document.getElementById('mainNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ===================================================
   SCROLL REVEAL — category cards on home page
=================================================== */
const revealEls = document.querySelectorAll('.cat-card');
if (revealEls.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

/* ===================================================
   CONTACT FORM (about.html / contact.html)
=================================================== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const success = document.createElement('div');
    success.className = 'form-success';
    success.style.display = 'block';
    success.innerHTML = '✦ Message sent!<br /><span style="font-size:0.85rem;color:var(--muted)">I\'ll get back to you shortly.</span>';
    contactForm.replaceWith(success);
  });
}
