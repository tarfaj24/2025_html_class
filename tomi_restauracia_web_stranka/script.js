//nav menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_menu_mobil');

const buttons = document.querySelectorAll('.controls button');
document.addEventListener('DOMContentLoaded', () => {
  
const sections = document.querySelectorAll('.jedalny_listok_papier');




  // Najprv skryjeme všetky okrem prvej sekcie
  sections.forEach((section, index) => {
    if (index === 0) {
      section.classList.remove('hidden');
      section.setAttribute('aria-hidden', 'false');
    } else {
      section.classList.add('hidden');
      section.setAttribute('aria-hidden', 'true');
    }
  });

  // Funkcia na zobrazenie sekcie podľa tlačidla
  function showSection(targetId) {
    sections.forEach(section => {
      if (section.id === targetId) {
        section.classList.remove('hidden');
        section.setAttribute('aria-hidden', 'false');
      } else {
        section.classList.add('hidden');
        section.setAttribute('aria-hidden', 'true');
      }
    });

    buttons.forEach(btn => {
      if (btn.getAttribute('aria-controls') === targetId) {
        btn.setAttribute('aria-pressed', 'true');
        
        
      } else {
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  // Event listenery pre všetky tlačidlá
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('aria-controls');
      showSection(targetId);
    });
  });
});






buttons.forEach(btn => {
  const targetId = btn.getAttribute('aria-controls');
  const sect = document.getElementById(targetId);

  if (!sect) return; // ak sekcia neexistuje, preskočíme

  // funkcia na update z-indexu podľa hoveru a aria-pressed
  const updateZIndex = () => {
    if (btn.getAttribute('aria-pressed') === 'true' && sect.matches(':hover')) {
      btn.style.zIndex = '1000';
    } else {
      btn.style.zIndex = '';
    }
  };

  // hover listener na sekciu
  sect.addEventListener('mouseenter', updateZIndex);
  sect.addEventListener('mouseleave', updateZIndex);

  // klik na tlačidlo zmení aria-pressed, treba okamžite update
  btn.addEventListener('click', () => {
    // predpokladáme, že tu meníš aria-pressed podľa logiky
    buttons.forEach(b => {
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });
    updateZIndex();
  });
});

hamburger.addEventListener('click', () => {
  nav_menu_mobil.classList.toggle('active');
});
 

