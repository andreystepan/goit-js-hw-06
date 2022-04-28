const categoryEl = document.querySelectorAll('.item')
console.log('Number of categories:', categoryEl.length)

const categoryElList = document.querySelectorAll('.item')

    .forEach((category) => {
        console.log('Category:', category.firstElementChild.textContent);
        console.log('Elements:', category.lastElementChild.children.length);
    });
    