//     // const btnSushi = document.getElementById('showSushi');
//     // const btnMenu2 = document.getElementById('showMenu2');

//     // const sushi = document.getElementById('jedalny_listok_sushi_menu');
//     // const menu2 = document.getElementById('menu2');

//     // sushi.classList.add('hidden');
//     // sushi.setAttribute('aria-hidden', 'true');
    

//     // // funkcia, ktorá prepne viditeľnosť
//     // function showSection(showEl, hideEl, buttonToPress, otherButton) {
//     //   // skryjeme ten, čo má zmiznúť
//     //   hideEl.classList.add('hidden');
//     //   hideEl.setAttribute('aria-hidden', 'true');

//     //   // zobrazíme ten, čo má byť viditeľný
//     //   showEl.classList.remove('hidden');
//     //   showEl.setAttribute('aria-hidden', 'false');

//     //   // aktualizujeme stav tlačidiel (pre a11y)
//     //   buttonToPress.setAttribute('aria-pressed', 'true');
//     //   otherButton.setAttribute('aria-pressed', 'false');
//     // }

//     // // pripojíme event listenery
//     // btnSushi.addEventListener('click', () => {
//     //   showSection(sushi, menu2, btnSushi, btnMenu2);
//     // });

//     // btnMenu2.addEventListener('click', () => {
//     //   showSection(menu2, sushi, btnMenu2, btnSushi);
//     // });

//   // vyberieme všetky tlačidlá a všetky sekcie

//   // Vyberieme všetky tlačidlá a sekcie

//   // Vyberieme všetky tlačidlá v ovládacom paneli

  document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.controls button');
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