// Toggle class active
const navbarPencet = document.querySelector('.navbar-pencet');
// Ketika menu diklik
document.querySelector('.menu-outline'). onclick = () => {
    navbarPencet.classList.toggle('active');
};

// Klik di luar side bar
const menu = document.querySelector('.menu-outline')

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarPencet.contains(e.target)) {
        navbarPencet.classList.remove('active');
    }
})