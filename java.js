window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var welcomeImage = document.querySelector('.welcomeimage');
    welcomeImage.classList.remove('hidden');
    setTimeout(function() {
        welcomeImage.style.opacity = 1; // Maak de afbeelding langzaam zichtbaar
    }, 100); // Wacht een korte tijd voordat de overgang begint
});

function toggleMenu() {
    var navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.toggle('active');
}

