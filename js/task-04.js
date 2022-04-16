let counterValue = 0;
const btnValue = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
console.log(btnDecrement)

const counterDecrement = function handleDecrementBtnClick() {
    counterValue -= 1;
    btnValue.textContent = counterValue;
}

btnDecrement.addEventListener('click', counterDecrement)
 

const btnIncrement = document.querySelector('[data-action="increment"]');
console.log(btnIncrement)

const counterIncrement = function handleIncrementBtnClick() {
    counterValue += 1;
    btnValue.textContent = counterValue;
}

btnIncrement.addEventListener('click', counterIncrement)



