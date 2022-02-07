// -------------------------- vars
const menuResponsive = document.querySelector('#menuResponsive');
const links = document.querySelectorAll('#navLinks li a');
const upButton = document.querySelector('#upButton');

//---------- events
// documen already
document.addEventListener('DOMContentLoaded', () => {
   const spinn = document.querySelector('#spinner');
   spinn.style.display = 'none';
   document.querySelector('body').classList.remove('loading');
});

// up button
upButton.addEventListener('click', () => scrollTo({top: 0}));
document.addEventListener('scroll', () => window.scrollY >= 500 ? upButton.classList.remove('fade-up-button') :upButton.classList.add('fade-up-button'));

// menu-responsive
menuResponsive.addEventListener('click', () => document.querySelector('#navLinks').classList.toggle('fade'));

// class active links
const checkActiveClass = (e) => {
   const isActive = e.target.classList.contains('active');
   if (!isActive) {
      removeActiveClass();
      e.target.classList.add('active');
      document.querySelector('#navLinks').classList.add('fade');
   }
}
const removeActiveClass = () => links.forEach(link => link.classList.remove('active'));

links.forEach(link => link.addEventListener('click', checkActiveClass));


// SECTIONS ANIMATION
ScrollReveal().reveal('section', {
   viewFactor:0.1,
   easing: 'ease-in-out',
   scale: 0.3
});