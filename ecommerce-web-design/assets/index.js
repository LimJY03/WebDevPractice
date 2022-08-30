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

// Change Product Main Image
const inProductPage = document.getElementById('product-details');

if (inProductPage) {

    const mainImage = document.getElementById('main-image');
    const smallImage = document.getElementsByClassName('small-image');
    
    [...smallImage].forEach((elem, i) => elem.addEventListener('click', () => mainImage.src = smallImage[i].src))
}

// Calculate Cart Total
const inCartPage = document.getElementById('cart');

if (inCartPage) {

    const productCount = document.getElementsByClassName('product-count');
    const productTotal = document.getElementsByClassName('product-total');
    const productSubtotal = document.getElementById('cart-subtotal');
    const productFinalTotal = document.getElementById('final-total');

    function update(id) {
        productTotal[id].innerHTML = `$${118.19 * productCount[id].value}`;
        productSubtotal.innerHTML = `$${[...productTotal].map(elem => parseFloat(elem.innerHTML.slice(1))).reduce((a, b) => a + b).toFixed(2)}`;
        productFinalTotal.childNodes[0].innerHTML = productSubtotal.innerHTML;
    }

    [...productCount].forEach((elem, i) => elem.addEventListener('change', () => update(i)))
}