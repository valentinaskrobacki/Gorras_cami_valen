// Menú
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mainNav.querySelector('ul').classList.toggle('active');
    });

     // Cerrar el menú cuando se hace clic en una opción
     const navLinks = document.querySelectorAll('.main-nav ul li a');
     navLinks.forEach(link => {
         link.addEventListener('click', function() {
             // Ocultar el menú
             menuToggle.classList.remove('active'); 
             mainNav.querySelector('ul').classList.remove('active'); 
         });
     });
});


window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.parallax');

    
    if (window.innerWidth > 768) {
        parallax.style.backgroundPositionY = (scrolled * 0.5) + 'px';
    } else {
        parallax.style.backgroundPositionY = (scrolled * 0.3) + 'px';
    }
});


