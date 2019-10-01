'use strict';

const filterCheckbox = document.querySelectorAll('.js-filter-checkbox');
const cart = document.querySelector('.js-modal-cart');
const btnOpenCart = document.querySelector('.js-cart-open');
const btnCloseCart = document.querySelector('.js-cart-close');

filterCheckbox.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
});

btnOpenCart.addEventListener('click', () => {
    cart.classList.add('is-active');
    document.body.classList.add('modal-open');
});

btnCloseCart.addEventListener('click', () => {
    cart.classList.remove('is-active');
    document.body.classList.remove('modal-open');
});

const catalogCards = document.querySelectorAll('#goods .card');
const cartWrapper = document.querySelector('.js-cart-wrapper');
const cartEmpty = document.getElementById('cart-empty');
const cartCounter = document.querySelector('.js-cart-counter');
const cartTotalPrice = document.querySelector('.js-cart-total');

catalogCards.forEach((card) => {
    const btnAddToCart = card.querySelector('button');

    btnAddToCart.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        const btnRemoveFromCart = cardClone.querySelector('.btn');

        cartWrapper.appendChild(cardClone);
        btnRemoveFromCart.textContent = 'Удалить из корзины';
        showCartData();

        btnRemoveFromCart.addEventListener('click', () => {
            cardClone.remove();
            showCartData();
        });
    });
});

function showCartData() {
    const cartCards = cartWrapper.querySelectorAll('.card');
    const cardsPrice = cartWrapper.querySelectorAll('.card-price');
    let total = 0;

    cartCounter.textContent = cartCards.length;

    cardsPrice.forEach((cardPrice) => {
        let price = parseFloat(cardPrice.textContent);
        total += price;
    });

    cartTotalPrice.textContent = total;

    if (cartCards.length !== 0) {
        cartEmpty.remove();
    } else {
        cartWrapper.appendChild(cartEmpty);
    }
}

const discountCheckbox = document.getElementById('discount-checkbox');

discountCheckbox.addEventListener('click', filter);

function filter() {
    catalogCards.forEach((card) => {
        const cardSale = card.querySelector('.card-sale');

        card.parentNode.style.display = '';

        if (discountCheckbox.checked && !cardSale) {
            card.parentNode.style.display = 'none';
        }
    });
}

