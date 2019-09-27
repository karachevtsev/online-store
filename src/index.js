'use strict';

const filterCheckbox = document.querySelectorAll('.js-filter-checkbox');
const btnOpenCart = document.getElementById('cart');
const cart = document.querySelector('.js-modal-cart');
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
