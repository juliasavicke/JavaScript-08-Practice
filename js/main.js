"use strict";
console.log("main.js");

const h1El = document.querySelector("h1");
console.log("h1El ===", h1El);
h1El.style.color = "tomato";

const h2El = document.querySelector("#article__title");
console.log("h2El ===", h2El);
h2El.style.fontWeight = "normal";

const loremEl = document.querySelector("#article__p2");
console.log("loremEl ===", loremEl);

loremEl.textContent = "man pavyko dinamiskai atnaujinti teksta";

const liEl = document.querySelectorAll(".list li");
console.log("liEl ===", liEl);

for (let items of liEl) {
  items.style.fontSize = "34px";
}

liEl[1].style.color = "green";

const btn1El = document.querySelector("#btn1");
btn1El.addEventListener("click", () => {
  h1El.textContent = "Pakeiciau su mygtuku";
});

const timeEl = document.querySelector(".time");
console.log("timeEl ===", timeEl);
let date = new Date();
timeEl.textContent = date.toLocaleTimeString("en-US", { hour12: false });
timeEl.style.fontWeight = "bold";

//liEl[0].remove();

const btn2El = document.querySelector("#btn2");
btn2El.addEventListener("click", () => {
  const articleEl = document.querySelector("article");
  articleEl.style.backgroundColor = "grey";
  articleEl.style.color = "white";
});

const btn3El = document.querySelector("#btn3");
btn3El.addEventListener("click", () => {
  liEl[0].remove();
});

// 10. susikurti masyva su spalvomis red, green, blue, violet, pink, black
// 10.1 sugeneruoti li elementu stringa is masyvo
// 10.2 i <ol> elemento vidu ideti ta stringa (olEl.innerHTML = generatedString)
// 10.3 padaryti kad kiekvienas elementas turetu fono spalva tokia kokia yra irasyta tarp li tagu.
// 11. <button>change h1 color to blue</button> paspaudus daro tai kas parasyta
// 12. gauti ir iskonsolinti kiek elementu yra ol saraso elemente.
// 13. su js padidinti visu ol li elementu teksto raides i upperCase

const colorsArr = ["red", "green", "blue", "violet", "pink", "black"];
let listStr = ``;
for (let color of colorsArr) {
  listStr += `<li id=${color}>${color}</li>`;
}
console.log("listStr ===", listStr);

const olEl = document.querySelector(".list");
olEl.innerHTML = listStr;

//console.log("olLiEl ===", olLiEl);
let count = 0;

for (let color of colorsArr) {
  //console.log("color ===", color);
  //console.log("olEl ===", olEl.children);
  const olLiEl = document.querySelectorAll(".list li");
  for (let list of olLiEl) {
    if (list.id === color) {
      list.style.backgroundColor = color;
    }
  }
}

const btn4El = document.querySelector("#btn4");
//console.log("btn4El ===", btn4El);
btn4El.addEventListener("click", () => {
  h1El.style.backgroundColor = "blue";
});

const olLiEl = document.querySelectorAll(".list li");
let text = "";
for (let list of olLiEl) {
  count++;
  console.log("list ===", list.textContent);
  list.style.textTransform = "uppercase";
  list.style.color = "white";
}
console.log("count ===", count);

// 14. prie esamos  <h3 class="blog__title">Hello people</h3> prideti teksta '--Naujiena--'
// 15. prie esamos  <p class="blog__text">Sveiki cia James.</p> prideti "as esu is Londono"
// 16.  <button>light</button> padaro <article class="blog"> fona juoda o teksta balta
// 17.  <button>dark</button> padaro <article class="blog"> texta juoda o fona balta

const blogTitleEl = document.querySelector(".blog__title");
blogTitleEl.append("--Naujiena--");

const blogTextEl = document.querySelector(".blog__text");
blogTextEl.append(" As esu is Londono");

const btn5El = document.querySelector("#btn5");
btn5El.addEventListener("click", () => {
  const blogEl = document.querySelector(".blog");
  blogEl.style.backgroundColor = "black";
  blogEl.style.color = "white";
});
const btn6El = document.querySelector("#btn6");
btn6El.addEventListener("click", () => {
  const blogEl = document.querySelector(".blog");
  blogEl.style.backgroundColor = "white";
  blogEl.style.color = "black";
});
const btn7El = document.querySelector("#btn7");
btn7El.addEventListener("click", () => {
  const blogEl = document.querySelector(".blog");
  blogEl.remove();
});

// 19. <div class="box-container"></div> i vidu ikelti paragrafa su tekstu "i am dynamic" (innerHTML)
// 20.  <button>add paragraph</button> paspaudus ivyksta 19ta uzduotis
// 21. <button>Turn <span>dark</span> mode on</button> paspaudus pakeiciam teksta dark i light
// 22. <button>Turn <span>dark</span> mode on</button> kiekviena karta paspaudus keiciam teksta dark i light ir atvirksciai

function createParagraph() {
  const boxContainerEl = document.querySelector(".box-container");
  boxContainerEl.innerHTML += "<p>i am dynamic</p>";
}

const btn8El = document.querySelector("#btn8");
btn8El.addEventListener("click", createParagraph);

const btn9El = document.querySelector("#btn9");
const spanEl = document.querySelector("#span");
btn9El.addEventListener("click", () => {
  if (btn9El.style.color === "black") {
    btn9El.style.color = "white";
    spanEl.textContent = "dark";
  } else {
    btn9El.style.color = "black";
    spanEl.textContent = "light";
  }
});
