const categoryEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoryEl.length);
console.log('Category:', categoryEl[0].firstElementChild.textContent);

const categoryListEl = document.querySelectorAll('.item__list');
console.log('Elements:', categoryListEl[0].children.length);

console.log('Category:', categoryEl[1].firstElementChild.textContent);
console.log('Elements:', categoryListEl[1].children.length);

console.log('Category:', categoryEl[2].firstElementChild.textContent);
console.log('Elements:', categoryListEl[2].children.length);