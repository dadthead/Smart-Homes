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
// navItems.forEach(item => {
//     item.addEventListener('click', function () {
//         navItems.forEach(link => link.classList.remove('active'));
//         this.classList.add('active');
//     });
// });

//------------------------------------------>

//third section fan animation 

//   function toggleimage() {
//     const bg = document.getElementById("automation-section");
//     bg.classList.toggle("light-on");
//   }


//services-----

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("visible");
        }, index * 200);
    });
});


//ripple animation

document.addEventListener("DOMContentLoaded", function() {
    const switchImage = document.getElementById("switchImage");
    setTimeout(() => {
        switchImage.classList.add("active");
    }, 500);
});

