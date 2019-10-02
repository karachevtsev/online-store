'use strict';

function toggleCheckbox() {
    const filterCheckbox = document.querySelectorAll('.js-filter-checkbox');

    filterCheckbox.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                this.nextElementSibling.classList.add('checked');
            } else {
                this.nextElementSibling.classList.remove('checked');
            }
        });
    });
}

function toggleCart() {
    const cart = document.querySelector('.js-modal-cart');
    const btnOpenCart = document.querySelector('.js-cart-open');
    const btnCloseCart = document.querySelector('.js-cart-close');

    btnOpenCart.addEventListener('click', () => {
        cart.classList.add('is-active');
        document.body.classList.add('modal-open');
    });

    btnCloseCart.addEventListener('click', () => {
        cart.classList.remove('is-active');
        document.body.classList.remove('modal-open');
    });
}

function addToCart() {
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
}

function actionPage() {
    const catalogCards = document.querySelectorAll('#goods .card');
    const discountCheckbox = document.getElementById('discount-checkbox');
    const minPriceField = document.getElementById('min');
    const maxPriceField = document.getElementById('max');
    const searchField = document.getElementById('search-field');
    const searchBtn = document.getElementById('search-btn');

    discountCheckbox.addEventListener('click', filter);
    minPriceField.addEventListener('change', filter);
    maxPriceField.addEventListener('change', filter);

    searchBtn.addEventListener('click', () => {
        const searchText = new RegExp(searchField.value.trim(), 'i');

        catalogCards.forEach((card) => {
            const cardTitle = card.querySelector('.card-title');
            card.parentNode.style.display = '';

            if (!searchText.test(cardTitle.textContent)) {
                card.parentNode.style.display = 'none';
            }
        })
    });
}

const catalogCards = document.querySelectorAll('#goods .card');
const discountCheckbox = document.getElementById('discount-checkbox');
const minPriceField = document.getElementById('min');
const maxPriceField = document.getElementById('max');

function filter() {
    catalogCards.forEach((card) => {
        const cardSale = card.querySelector('.card-sale');
        const cardPrice = card.querySelector('.card-price');
        const price = parseFloat(cardPrice.textContent);

        card.parentNode.style.display = '';
        if ((minPriceField.value && price < minPriceField.value) || (maxPriceField.value && price > maxPriceField.value)) {
            card.parentNode.style.display = 'none';
        } else if (discountCheckbox.checked && !cardSale) {
            card.parentNode.style.display = 'none';
        }
    });
}

toggleCheckbox();
addToCart();
toggleCart();
actionPage();