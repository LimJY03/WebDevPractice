const menuElem = document.getElementById('menu');
const menuCloseElem = document.getElementById('menu-close');
const navElem = document.getElementById('navigation-bar');

// Open Sidebar
if (menuElem) {
    menuElem.addEventListener('click', () => navElem.classList.add('active'));
}

// Close Sidebar
if (menuCloseElem) {
    menuCloseElem.addEventListener('click', () => navElem.classList.remove('active'));
}