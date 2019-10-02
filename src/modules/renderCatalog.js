import filter from './filter';

export default function renderCatalog() {
    const catalogCards = document.querySelectorAll('#goods .card');
    const catalogList = document.getElementById('catalog-list');
    const catalogBtn = document.getElementById('catalog-button');
    const catalogContainer = document.getElementById('catalog');
    const filterTitle = document.querySelector('#filter-title h5');
    const categories = new Set();

    catalogCards.forEach((card) => {
        categories.add(card.dataset.category);
    });

    categories.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        catalogList.appendChild(li);
    });

    const allLi = catalogList.querySelectorAll('li');

    catalogBtn.addEventListener('click', (event) => {
        if (catalogContainer.classList) {
            catalogContainer.classList.toggle('is-open');
        } else {
            const classes = catalogContainer.className.split(" ");
            const i = classes.indexOf('is-open');

            if (i >= 0) {
                classes.splice(i, 1);
            } else {
                classes.push('is-open');
            }
            catalogContainer.className = classes.join(" ");
        }

        if (event.target.tagName === 'LI') {
            allLi.forEach((elem) => {
                if (elem === event.target) {
                    elem.classList.add('is-active');
                } else {
                    elem.classList.remove('is-active');
                }
            });
            filterTitle.textContent = event.target.textContent;
            filter();
        }
    });


}