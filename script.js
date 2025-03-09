const cart = JSON.parse(localStorage.getItem('cart')) || [];
const products = [
    { id: 1, name: "Футболка: MichaelDosin", price: 290, description: "Белая футболка. Вышла в честь новго трека.", image: "images/tshirt_dosin_morgen.png" },
    { id: 2, name: "Кепка: MichaelDosin", price: 25, description: "Чёрная кепка с оригинальным логотипом.", image: "images/cap_dosin.png" },
    { id: 3, name: "Толстовка: ForDalaran", price: 150, description: "Белая толстовка. Этот парень явно знает толк в моде.", image: "images/hoodie_fordalaran.png" },
    { id: 4, name: "Футболка: DanikGruZOV", price: 85, description: "Белая футболка. Лазеры из глаз, он думает что крут.", image: "images/tshirt_danik_gruzov.png" },
    { id: 5, name: "Футболка: KievEg", price: 1000, description: "Белая легендарная футболка. Удобная и стильная как родинка киев ега.", image: "images/tshirt_kieveg.png" },
    { id: 6, name: "Рюкзак: Karmannik", price: 95, description: "Чёрный рюкзак. Этот парень кажется вам знакомым.", image: "images/danik_karmannik_bag.png" },
    { id: 7, name: "Кружка: Danilov", price: 15, description: "Белая кружка. Больше нечего добавить.", image: "images/mug_danilov.png" },
    { id: 8, name: "Брелок: KievEg", price: 10, description: "Белый брелок, наверное это забанят.", image: "images/kieveg_keychain.png" },
    { id: 9, name: "Рюкзак: VovaVaginov", price: 50, description: "Чёрный рюкзак. Этот парень должен мне 50 рублей.", image: "images/vova_vaginov_bag.png" },
    { id: 10, name: "Футболка: KievEg", price: 175, description: "Белая футболка. Я явно видел его в Roblox.", image: "images/tshirt_kieveg_cartoon.png" },
    { id: 11, name: "Наклейка на карту: KievEg", price: 10, description: "Наклейка на карту. Не самый лучший дизайн.", image: "images/kieveg_card.png" },
    { id: 12, name: "Значок: DanikGruZOV", price: 10, description: "Чёрный значок. Вы слышите знакомую мелодию: тун тудудун тудудун тун...", image: "images/icon_danik_gruzov.png" }
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
