'use strict';

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

