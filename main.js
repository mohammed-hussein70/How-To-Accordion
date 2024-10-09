// first button
// const bottom = document.querySelector(".sect");
// const pra = document.querySelector("p");
// const span = document.querySelector("span");
// const spn = document.querySelector(".hide");

// bottom.addEventListener("click", function () {
//   pra.classList.toggle("text");
//   span.classList.toggle("hide");
//   spn.classList.toggle("hide");
// });
// all buttons
const buttons = document.querySelectorAll(".sect");
const paragraphs = document.querySelectorAll("p");
const spans = document.querySelectorAll("span");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    paragraphs[i].classList.toggle("text");

    const plus = buttons[i].querySelector("#plus");
    const mini = buttons[i].querySelector("#mini");

    plus.classList.toggle("hide");
    mini.classList.toggle("hide");
  });
}
