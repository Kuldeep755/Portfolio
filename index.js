const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

const navLinks = document.querySelectorAll('.nav_link');

function linkAction() {
  navMenu.classList.remove('show');
}

navLinks.forEach(link => link.addEventListener('click', linkAction));

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav_menu a[href*=${sectionId}]`).classList.add('active');
    } else {
      document.querySelector(`.nav_menu a[href*=${sectionId}]`).classList.remove('active');
    }
  });
}

window.addEventListener('scroll', scrollActive);
