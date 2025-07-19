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



///hero page


let balconyLight = false;
let parkingLight = false;

function toggleBalconyLight() {
    balconyLight = !balconyLight;
    document.getElementById('balconyOffBtn').style.display = balconyLight ? 'none' : 'block';
    document.getElementById('balconyOnBtn').style.display = balconyLight ? 'block' : 'none';
    updateHouseImage();
}

function toggleParkingLight() {
    parkingLight = !parkingLight;
    document.getElementById('parkingOffBtn').style.display = parkingLight ? 'none' : 'block';
    document.getElementById('parkingOnBtn').style.display = parkingLight ? 'block' : 'none';
    updateHouseImage();
}

function updateHouseImage() {
    document.getElementById('allLightsOff').style.display = balconyLight || parkingLight ? 'none' : 'block';
    document.getElementById('balconyLightOn').style.display = balconyLight && !parkingLight ? 'block' : 'none';
    document.getElementById('parkingLightOn').style.display = !balconyLight && parkingLight ? 'block' : 'none';
    document.getElementById('allLightsOn').style.display = balconyLight && parkingLight ? 'block' : 'none';
}

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("clock").innerText = timeString;
}

setInterval(updateClock, 1000);
updateClock();
// Cursor Animation
document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});


// second page for home automation


document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");

    function handleScroll() {
        fadeInElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on page load
});

    // Scroll animation using ScrollReveal.js
    ScrollReveal().reveal('.animate', { 
        distance: '50px', 
        origin: 'bottom', 
        duration: 1000, 
        delay: 200, 
        easing: 'ease-in-out',
        reset: true
    });



    //third page


    document.addEventListener("DOMContentLoaded", function() {
            let elements = document.querySelectorAll(".fade-in");
            elements.forEach(el => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            });
        });



        //fourth page


        document.addEventListener("DOMContentLoaded", function () {
            const elements = document.querySelectorAll(".fade-in");
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            }, { threshold: 0.3 });

            elements.forEach(el => observer.observe(el));
        });


        //counter page


        