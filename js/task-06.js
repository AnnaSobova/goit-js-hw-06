
const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur',InputBlur);

function InputBlur(event){
const input = event.currentTarget;
const inputLength = Number(input.dataset.length);
if (input.value.length ===inputLength){
input.classList.add('valid');
input.classList.remove('invalid');
}else{
input.classList.add('invalid');
input.classList.remove('valid');
}
};