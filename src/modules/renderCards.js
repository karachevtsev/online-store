export default function renderCards(data) {
    if (data.hasOwnProperty('goods')) {
        data.goods.forEach((good) => {
            const goodsContainer = document.getElementById('goods');
            const card = document.createElement('div');
            card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
            card.innerHTML = `
                <div class="card" data-category="${good.category}">
                    ${good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                    <div class="card-img-wrapper">
                        <picture class="card-img-top">
                           ${good.imgWebp ? `<source srcset=${good.imgWebp} type="image/webp">` : ''}
                            <img src="${good.img}" alt="${good.title}" class="img-fluid mx-auto d-block"  data-hover="${good.hoverImg}">
                        </picture>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price" style="${good.sale ? 'color: red;' : ''}">${good.price} ₽</div>
                        <h5 class="card-title">${good.title}</h5>
                        <button class="btn btn-primary">В корзину</button>
                    </div>
                </div>
            `;
            goodsContainer.appendChild(card);
        });
    }
}