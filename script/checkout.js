import { adjustSupport } from "../components/Nav.js";
import { checkoutNav } from "../components/checkoutNav.js";
import { cQues } from "../components/commonQuestions.js";

let comingDate = localStorage.getItem("delivery_date");
let flag = false;
let TotalnoOfMeals = localStorage.getItem("noOfMeals");
let pricePerMeal = localStorage.getItem("pricePerMeal");

document.querySelector(".navbar").innerHTML = checkoutNav();
adjustSupport();
document.querySelector(".comman_questions").innerHTML = cQues();

let addPromo = document.querySelector(".promo");

addPromo.addEventListener("click", () => {
  event.preventDefault();
  document.querySelector(".promoDiv").style.display = "flex";
  addPromo.style.display = "none";
});

let cancelPromo = document.querySelector(".cancle");

cancelPromo.addEventListener("click", () => {
  event.preventDefault();
  addPromo.style.display = "block";
  document.querySelector(".promoDiv").style.display = "none";
});

document.querySelector(".date").addEventListener("click", () => {
  let date = document.querySelector(".date").value;
  console.log(date);
  localStorage.setItem("delivery_date", date);
});

const display = () => {
  let shippingCharge = document.querySelector(".shippingAmount").innerText;
  let totalamount = document.querySelector(".totalAmount");

  document.querySelector(".meals").innerText = TotalnoOfMeals;
  document.querySelector(".noOfMealsAmount").innerText = `$${pricePerMeal}-/`;
  let data =
    parseFloat(TotalnoOfMeals) * parseFloat(pricePerMeal) +
    parseFloat(shippingCharge);
  data = flag ? data - 50 : data;
  // data = Math.round(data, 2);
  data = Number(data.toFixed(2));
  console.log("data", data, flag);
  totalamount.innerHTML = `$${data}`;
  document.querySelector(".date").value = localStorage.getItem("delivery_date");
};

// document.querySelector("select").addEventListener("click", display);
display();

const applyPromo = () => {
  event.preventDefault();
  let codeEntered = document.querySelector(".promoCode").value;
  if (codeEntered === "masai") {
    flag = true;
  } else {
    flag = false;
  }
  display();
  document.querySelector(".promoCode").value = null;
};

document.querySelector(".apply").addEventListener("click", applyPromo);
