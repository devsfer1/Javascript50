const bars = document.getElementById('bars');
const navList = document.getElementById('nav-list');

// nav toggle

function navToggle() {
    navList.classList.toggle('active');
    bars.firstElementChild.classList.toggle('fa-times');
} 

bars.addEventListener('click', navToggle);