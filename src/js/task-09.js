// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
const changeColorBtn = document.querySelector('.change-color');
const span = document.querySelector(".color")

changeColorBtn.addEventListener('click', onBtnClick);

function onBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
}
