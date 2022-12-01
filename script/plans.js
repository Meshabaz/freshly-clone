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

let parent = document.querySelector("#parent");
parent.addEventListener("click", dosomething, false);

function dosomething(e) {
  if (e.target !== e.currentTarget) {
    let noOfMeals = parseInt(e.target.id);
    let pricePerMeal = parseFloat(e.target.className);
    console.log(noOfMeals, pricePerMeal);
    // document.querySelector(".delivery_date").innerHTML = clickedItem;
    // alert(pricePerMeal, noOfMeals);
    localStorage.setItem("noOfMeals", noOfMeals);
    localStorage.setItem("pricePerMeal", pricePerMeal);
  }
  e.stopPropagation();
}
