console.log('heytfdlkuw  yedfgo');

// set year

const yearEL = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

//mobile nav

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.open-on-top');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// smoth

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile naviagtion

    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});
