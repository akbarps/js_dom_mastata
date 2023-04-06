const parent = document.getElementById('main');
const textFont = document.getElementsByTagName('h1')[0]

textFont.innerHTML = 'ini dubah dari js' //contoh 1 section 4
textFont.style.color = 'red' //contoh 1 section 6
textFont.prepend('alohauwww () ')
console.log(textFont.textContent);
const input = document.createElement("input"); //contoh 2 section 4

input.setAttribute('type', 'text'); //contoh 1 section 5
input.setAttribute('value', 'its added from js'); //contoh 2 section 5
input.hasAttribute('type');
const style = getComputedStyle(textFont) //contoh 2 section 6
console.log(style.color)

parent.appendChild(input);