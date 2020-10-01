const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src='img/undraw_web_developer_dark.png';
    image2.src='img/undraw_predictive_analytics_dark.png';
    image3.src='img/undraw_mobile_marketing_dark.png';
}

// Light Mode Styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src='img/undraw_web_developer_light.png';
    image2.src='img/undraw_predictive_analytics_light.png';
    image3.src='img/undraw_mobile_marketing_light.png';
}

// 'change' event, instead of 'click'
toggleSwitch.addEventListener('change', () => {
    //console.log(event);
    if (toggleSwitch.checked) {
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
    }
});