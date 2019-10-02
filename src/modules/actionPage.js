import filter from './filter';

export default function actionPage() {
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
        });
    });
}