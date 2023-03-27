// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const span = document.getElementById('value');

decrement.addEventListener('click', onRemoveNumber);
increment.addEventListener('click', onAddNumber);

function onAddNumber() {
  counterValue += 1;
  span.textContent = counterValue;
}

function onRemoveNumber() {
  counterValue -= 1;
  span.textContent = counterValue;
}
