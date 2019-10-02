export default function addToCart() {
    const catalogCards = document.querySelectorAll('#goods .card');
    const cartWrapper = document.querySelector('.js-cart-wrapper');
    const cartEmpty = document.getElementById('cart-empty');
    const cartCounter = document.querySelector('.js-cart-counter');
    const cartTotalPrice = document.querySelector('.js-cart-total');
    const cartConfirmBtn = document.getElementById('js-cart-confirm');

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
            cartConfirmBtn.classList.remove('disabled');
        } else {
            cartWrapper.appendChild(cartEmpty);
            cartConfirmBtn.classList.add('disabled');
        }
    }
}