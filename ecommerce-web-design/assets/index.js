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

const mainImage = document.getElementById('main-image');
const smallImage = document.getElementsByClassName('small-image');

// Change Product Main Image
if (smallImage) {
    smallImage[0].addEventListener('click', () => mainImage.src = smallImage[0].src);
    smallImage[1].addEventListener('click', () => mainImage.src = smallImage[1].src);
    smallImage[2].addEventListener('click', () => mainImage.src = smallImage[2].src);
    smallImage[3].addEventListener('click', () => mainImage.src = smallImage[3].src);
}