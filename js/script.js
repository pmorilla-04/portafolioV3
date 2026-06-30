/* =========================================================
   🔗 SMOOTH SCROLL NAVIGATION
   Smooth scroll for anchor links (#sections)
   ========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

/* =========================================================
   ⬆️ BACK TO TOP BUTTON
   Show/hide button based on scroll position
   ========================================================= */
const topBtn = document.querySelector('.top-btn');

// Show button when scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});

// Scroll to top when clicked
topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


/* =========================================================
   🎯 PROJECT FILTER SYSTEM
   Filters projects by category (HTML / JS / Java / All)
   ========================================================= */
const buttons = document.querySelectorAll('.filter-buttons button');
const projects = document.querySelectorAll('.project-card, .project-info');

buttons.forEach(button => {
  button.addEventListener('click', () => {

    const filter = button.getAttribute('data-filter');

    projects.forEach(project => {
      const category = project.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });

  });
});


/* =========================================================
   ✨ SCROLL ANIMATION (REVEAL EFFECT)
   Adds animation when elements enter viewport
   ========================================================= */
const hiddenElements = document.querySelectorAll('.hidden');


// Checks element position and reveals it when visible
function showOnScroll() {
  hiddenElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add('show');
    }
  });
}


// Trigger animation on scroll and initial load
window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);


//MENU
const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu-list');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
  });