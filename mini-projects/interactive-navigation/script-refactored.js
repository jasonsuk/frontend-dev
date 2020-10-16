const menuIcon = document.getElementById('menu-icon');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(direciton1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direciton1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    })
}

function menuToggle() {
    // Toggle navbar(menu bar) icon
    menuIcon.classList.toggle('change');

    // Toggle overlay 
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate In - nav Items
        navAnimation('out', 'in');
    } else {
        // Animate Out - overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate Out - nav items
        navAnimation('in', 'out');
    }
}

menuIcon.addEventListener('click', menuToggle);
navItems.forEach((nav) => {
    nav.addEventListener('click', menuToggle)
})

