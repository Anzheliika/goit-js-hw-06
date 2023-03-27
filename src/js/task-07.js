// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontControler = document.getElementById('font-size-control');
const text = document.getElementById('text');

text.style.fontSize = fontControler.value + 'px';

fontControler.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    text.style.fontSize = event.currentTarget.value + 'px'
}