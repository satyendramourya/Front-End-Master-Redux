// console.log("dom.js");
// redSquare.style.backgroundColor = "blue";
// redSquare.style.width = "200px";
// redSquare.classList.add("blue-square");

// const element = document.querySelectorAll(".js-target");
// for (let i = 0; i < element.length; i++) {
//   element[i].style.backgroundColor = "yellow";
//   element[i].innerText = "modified";
//   element[i].display = "inline-block";
// }

// button.addEventListener("click", () => {
//   text.innerText = "clicked";
//   //   text.innerText = "not clicked";
//   console.log("clicked");
// });

// input.addEventListener("change", () => {
//   text.innerText = input.value;
// });

const redSquare = document.querySelector(".red-square");

const button = document.querySelector(".event");

const text = document.querySelector(".apper");

const input = document.querySelector(".input-text");

button.addEventListener("click", () => {
  text.innerText = input.value;
  redSquare.style.backgroundColor = input.value;
});
