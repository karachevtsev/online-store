export default function toggleCart() {
    const cart = document.querySelector('.js-modal-cart');
    const btnOpenCart = document.querySelector('.js-cart-open');
    const btnCloseCart = document.querySelector('.js-cart-close');

    btnOpenCart.addEventListener('click', () => {
        cart.classList.add('is-open');
        document.body.classList.add('modal-open');
    });

    btnCloseCart.addEventListener('click', () => {
        cart.classList.remove('is-open');
        document.body.classList.remove('modal-open');
    });
    
    document.body.addEventListener('click', (event) =>  {
        if ( event.target.classList.contains('js-modal-cart') ) {
            cart.classList.remove('is-open');
            document.body.classList.remove('modal-open');
        }
    })
}