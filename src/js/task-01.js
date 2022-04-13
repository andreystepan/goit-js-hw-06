const categoryEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoryEl);
console.log('Category:', categoryEl[0].firstElementChild.textContent);

const categoryListEl = document.querySelectorAll('.item__list');
console.log('Elements:', categoryListEl[0].children);

console.log('Category:', categoryEl[1].firstElementChild.textContent);
console.log('Elements:', categoryListEl[1].children);

console.log('Category:', categoryEl[2].firstElementChild.textContent);
console.log('Elements:', categoryListEl[2].children);