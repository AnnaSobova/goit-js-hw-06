const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navLinkFirstEl= document.createElement('li')
navLinkFirstEl.classList.add('item');
navLinkFirstEl.textContent= 'Potatoes';

const navLinkSecondEl= document.createElement('li')
navLinkSecondEl.classList.add('item');
navLinkSecondEl.textContent= 'Mushrooms';

const navLinkThirdEl= document.createElement('li')
navLinkThirdEl.classList.add('item');
navLinkThirdEl.textContent= 'Garlic';

const navLinkFourthEl= document.createElement('li')
navLinkFourthEl.classList.add('item');
navLinkFourthEl.textContent= 'Tomatos';

const navLinkFifthEl= document.createElement('li')
navLinkFifthEl.classList.add('item');
navLinkFifthEl.textContent= 'Herbs';

const navLinkSixthEl= document.createElement('li')
navLinkSixthEl.classList.add('item');
navLinkSixthEl.textContent= 'Condiments';

const navEl = document.querySelector ("#ingredients");
navEl.append(navLinkFirstEl,navLinkSecondEl,navLinkThirdEl,navLinkFourthEl,navLinkFifthEl,navLinkSixthEl);

console.log(navEl)