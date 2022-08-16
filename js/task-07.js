
const inputElement = document.getElementById('font-size-control');
const spanElement = document.getElementById('text');
inputElement.addEventListener('change', (event) => {
 spanElement.style.fontSize = `${event.target.value}px`;
});

