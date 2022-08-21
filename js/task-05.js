
    const input = document.querySelector('#name-input');
    const span = document.querySelector('#name-output');

    input.addEventListener('input', onInputChange);

    
    function onInputChange(a){
    span.textContent = a.currentTarget.value;

   if (a.currentTarget.value === ""){
    span.textContent = "Anonymous";
   }
  
  }

console.log(input.value)