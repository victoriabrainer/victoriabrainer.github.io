// Burger Menu

const showIcon = document.querySelector('.show-icon');
const closeIcon = document.querySelector('.close-icon');
const menuMobile = document.querySelector('.mobile-menu');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

mobileMenuBtn.addEventListener('click', () => {
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    showIcon.style.display = 'flex';
    closeIcon.style.display = 'none';
  } else {
    menuMobile.classList.add('open');
    showIcon.style.display = 'none';
    closeIcon.style.display = 'flex';
  }
});

// Stars Effect

const sceneContainer = document.getElementById('scene-container');
const numStars = 200; // Reduza o número de estrelas

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDuration = `${Math.random() * 10 + 5}s`; // Ajuste a duração da animação
  sceneContainer.appendChild(star);
}

// Autotyping Effect

const secondText = document.querySelector('.second-text');
const phrases = ['Victória Brainer.', 'Desenvolvedora Web.'];
let currentPhraseIndex = 0;
let index = 0;

function typeText() {
  if (index < phrases[currentPhraseIndex].length) {
    secondText.textContent += phrases[currentPhraseIndex].charAt(index);
    index++;
    setTimeout(typeText, 100); // Ajuste o valor para tornar a digitação mais lenta
  } else {
    setTimeout(eraseText, 1500);
  }
}

function eraseText() {
  if (secondText.textContent.length > 0) {
    secondText.textContent = secondText.textContent.slice(0, -1);
    setTimeout(eraseText, 50); // Ajuste o valor para tornar a exclusão mais lenta
  } else {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    index = 0;
    setTimeout(typeText, 1000); // Aguarde mais tempo antes de começar a digitação da próxima frase
  }
}

typeText();

// About Details Icon

const aboutDetail = document.querySelectorAll('.about-details');

aboutDetail.forEach(detailsElement => {
  const aboutSummary = detailsElement.querySelector('.about-details__title');
  const aboutIcon = aboutSummary.querySelector('.about-icon');

  aboutSummary.addEventListener('click', () => {
    // Change the details element icon between right and down angle
    if (detailsElement.open) {
      aboutIcon.classList.remove('fa-angle-down');
      aboutIcon.classList.add('fa-angle-right');
    } else {
      aboutIcon.classList.remove('fa-angle-right');
      aboutIcon.classList.add('fa-angle-down');
    }
  });
});
