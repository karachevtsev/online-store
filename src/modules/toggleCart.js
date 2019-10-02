export default function toggleCart() {
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