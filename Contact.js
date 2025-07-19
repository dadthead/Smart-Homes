const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navItems = document.querySelectorAll('.nav-links a');

function toggleMenu() {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
    closeIcon.classList.toggle('active');
}

function closeMenu() {
    navLinks.classList.remove('active');
    menuIcon.classList.remove('active');
    closeIcon.classList.remove('active');
}

// Handle Active State Change
navItems.forEach(item => {
    item.addEventListener('click', function () {
        navItems.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
