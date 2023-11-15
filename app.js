// selecting buttons
const btn1 = document.querySelector("#grey");
const btn2 = document.querySelector("#white");
const btn3 = document.querySelector("#blue");
const btn4 = document.querySelector("#yellow");

// Method 1 => add event to every button separately
// btn1.addEventListener("click", () => {
//   document.body.style.backgroundColor = "grey";
// });

// btn2.addEventListener("click", () => {
//   document.body.style.backgroundColor = "white";
// });

// btn3.addEventListener("click", () => {
//   document.body.style.backgroundColor = "blue";
// });

// btn4.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });

// Method 2 => select all buttons then loop over them
const btn = document.querySelectorAll(".button");

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    document.body.style.background = e.target.id;
  });
});
