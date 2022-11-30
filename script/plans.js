import planNav from "../components/planNav.js";
import { cQues } from "../components/commonQuestions.js";
import { adjustSupport } from "../components/Nav.js";

document.querySelector(".navbar").innerHTML = planNav();
document.querySelector(".comman_questions").innerHTML = cQues();

adjustSupport();
// =============>
// let plans = document.querySelectorAll('input[name="radio"]');

// const findSelected = () => {
//   let selected = document.querySelector('input[name="radio"]:checked').value;
//   console.log(selected);
//   alert(selected);
// };

// plans.forEach((selectedplan) => {
//   selectedplan.addEventListener("change", findSelected);
// });
