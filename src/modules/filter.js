export default function filter() {
    const catalogCards = document.querySelectorAll('#goods .card');
    const discountCheckbox = document.getElementById('discount-checkbox');
    const minPriceField = document.getElementById('min');
    const maxPriceField = document.getElementById('max');
    const activeLi = document.querySelector('#catalog-list li.is-active');

    catalogCards.forEach((card) => {
        const cardSale = card.querySelector('.card-sale');
        const cardPrice = card.querySelector('.card-price');
        const price = parseFloat(cardPrice.textContent);

        card.parentNode.style.display = '';
        if ((minPriceField.value && price < minPriceField.value) || (maxPriceField.value && price > maxPriceField.value)) {
            card.parentNode.style.display = 'none';
        } else if (discountCheckbox.checked && !cardSale) {
            card.parentNode.style.display = 'none';
        } else if (activeLi) {
            if (card.dataset.category !== activeLi.textContent ) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        }
    });
}