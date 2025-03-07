const cart = JSON.parse(localStorage.getItem('cart')) || [];
const products = [
    { id: 1, name: "Футболка: MichaelDosin", price: 290, description: "Белая футболка из 100% хлопка. Удобная и стильная. Вышла в честь новго трека.", image: "images/tshirt_dosin_morgen.png" },
    { id: 2, name: "Кепка: MichaelDosin", price: 25, description: "Черная кепка с оригинальным логотипом.", image: "images/cap_dosin.png" },
    { id: 3, name: "Толстовка: ForDalaran", price: 150, description: "Толстовка с капюшоном и карманами. Теплая и удобная.", image: "images/hoodie_fordalaran.png" },
    { id: 4, name: "Футболка: DanikGruZOV", price: 85, description: "Белая футболка из 100% хлопка. Удобная и стильная.", image: "images/tshirt_danik_gruzov.png" }

];

document.addEventListener("DOMContentLoaded", function() {
    const cartButton = document.getElementById('cartButton');
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    
    if (cartButton) {
        cartButton.textContent = `Корзина (${cart.length})`;
    }

    if (cartItems) {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const listItem = document.createElement('div');
            listItem.classList.add('cart-item');
            listItem.innerHTML = `
                <img src="${item.image}" alt="${item.product}">
                <h3>${item.product} - ${item.price} BYN.</h3>
                <button onclick="removeFromCart(${index})">Удалить</button>
            `;
            cartItems.appendChild(listItem);
            total += item.price;
        });
        totalPrice.textContent = total;
    }

    const productDetails = document.getElementById('productDetails');
    const productId = new URLSearchParams(window.location.search).get('id');
    
    if (productDetails && productId) {
        const product = products.find(p => p.id == productId);
        
        if (product) {
            productDetails.innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.image}" alt="${product.name}">
                <p>${product.description}</p>
                <p class="price">Цена: ${product.price} BYN.</p>
                <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">Добавить в корзину</button>
            `;
        }
    }
});

function addToCart(id, product, price, image) {
    cart.push({ id, product, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartButton();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartButton();
    location.reload();
}

function updateCartButton() {
    const cartButton = document.getElementById('cartButton');
    cartButton.textContent = `Корзина (${cart.length})`;
                     }
