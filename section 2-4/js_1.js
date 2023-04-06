// === section 2 ===
document.getElementsByClassName("main");
document.getElementById("name").innerHTML = "Nama saya akbar" //contoh 1 section 2
document.querySelector('h3').innerHTML = "selamat datanG" //contoh 2 section 

// === section 3 ===
const parent = document.getElementsByTagName('h1')[0].parentElement; //contoh 3 section 2, dan contoh 1 section 3
const firstChild = parent.firstElementChild; //contoh 2 section 3
const secondChild = firstChild.nextElementSibling; //contoh 3 section 3

// === section 4 ===
const newEl = document.createElement('p') //contoh 1 section 4
newEl.innerHTML = "ini project saya" //contoh 2 section 4
parent.appendChild(newEl); //contoh 3 section 4

console.log("parent : ",parent)
console.log("firstChild : ",firstChild)
console.log("secondChild : ",secondChild)