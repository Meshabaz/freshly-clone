import { adjustSupport } from "../components/Nav.js";
import { dayNav } from "../components/dayNav.js";
import { cQues } from "../components/commonQuestions.js";

document.querySelector(".navbar").innerHTML = dayNav();
adjustSupport();
document.querySelector(".comman_questions").innerHTML = cQues();

// =================>   MY FUNCTIONS    <======================//
let parent = document.querySelector("#parent");
parent.addEventListener("click", dosomething, false);

function dosomething(e) {
  if (e.target !== e.currentTarget) {
    let clickedItem = e.target.id;
    document.querySelector(".delivery_date").innerHTML = clickedItem;
    // alert(clickedItem);
    localStorage.setItem("delivery_date", clickedItem);
  }
  e.stopPropagation();
}

// =============> MESSAGE CODE  <================= //

// parent.addEventListener("click", show_message, false);

// const toast = document.querySelector(".theToast"),
//   closeIcon = document.querySelector(".close"),
//   progress = document.querySelector(".progress");

// function show_message(e) {
//   toast.classList.add("active");
//   progress.classList.add("active");

//   setTimeout(() => {
//     toast.classList.remove("active");
//   }, 4000);
//   setTimeout(() => {
//     progress.classList.remove("active");
//   }, 4300);
// }

// closeIcon.addEventListener("click", () => {
//   toast.classList.remove("active");
//   progress.classList.add("active");

//   setTimeout(() => {
//     progress.classList.remove("active");
//   }, 300);
// });
