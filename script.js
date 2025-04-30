// === Mobile Menu Toggle ===
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// === Learn More Button ===
const learnBtn = document.getElementById('learn-btn');
const learnText = document.getElementById('learn-text');

if (learnBtn && learnText) {
  learnBtn.addEventListener('click', () => {
    learnText.classList.toggle('hidden');
  });
}

// === Lightbox Open Logic ===
document.querySelectorAll('.open-lightbox').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.id;
    const lightbox = document.getElementById(`lightbox-${id}`);
    if (lightbox) {
      lightbox.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Prevent scroll
    }
  });
});

// === Lightbox Close Logic ===
document.querySelectorAll('.close-lightbox').forEach(button => {
  button.addEventListener('click', () => {
    const lightbox = button.closest('.lightbox');
    if (lightbox) {
      lightbox.classList.add('hidden');
      document.body.style.overflow = ''; // Restore scroll
    }
  });
});

// === Click outside lightbox content closes it ===
document.querySelectorAll('.lightbox').forEach(lightbox => {
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });
});

// ========== 4. Optional: Section navigation for single-page apps ==========
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const target = link.getAttribute('href').substring(1);
    const section = document.getElementById(`${target}-content`);
    if (section) {
      e.preventDefault();
      document.querySelectorAll('.content-section, .hero').forEach(s => s.style.display = 'none');
      if (target === 'home') {
        document.getElementById('home').style.display = 'flex';
      } else {
        section.style.display = 'block';
      }
      history.pushState(null, null, `#${target}`);
    }
  });
});

window.addEventListener('load', () => {
  const hash = window.location.hash.substring(1) || 'home';
  const section = document.getElementById(`${hash}-content`);
  if (section) {
    document.querySelectorAll('.content-section, .hero').forEach(s => s.style.display = 'none');
    if (hash === 'home') {
      document.getElementById('home').style.display = 'flex';
    } else {
      section.style.display = 'block';
    }
  }
});
