export default function getData() {
    const goodsContainer = document.getElementById('goods');

    return fetch('./db/db.json')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Can\'t resolve data, error: ' + response.status);
            }
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.warn(err);
            goodsContainer.innerHTML = '<div class="col"><div class="alert alert-danger m-3 text-center" role="alert">Ooops, something went wrong!</div></div>';
        });
}