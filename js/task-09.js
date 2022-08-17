function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divWidget = document.querySelector('.widget');
const span = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click',()=>{
 const color = getRandomHexColor();
  divWidget.style.backgroundColor = color;
  span.textContent = color;
})