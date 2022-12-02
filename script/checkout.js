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
  let totalprice = document.querySelector(".totalPrice");

  document.querySelector(".mealsCount").innerText = TotalnoOfMeals;
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
  totalprice.innerHTML = `$${data}`;
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

const pay = document.querySelector(".pay");
pay.addEventListener("click", () => {
  document.querySelector(".drop").style.display = "flex";
});

document.querySelector(".close_p").addEventListener("click", () => {
  document.querySelector(".drop").style.display = "none";
});

document.querySelector(".send_otp").addEventListener("click", () => {
  alert("1234");
  document.querySelector(".drop").style.display = "none";
  document.querySelector(".dropon").style.display = "flex";
});
document.querySelector(".verify_otp").addEventListener("click", () => {
  let otp = document.querySelector(".otp").value;
  if (otp === "1234") {
    alert("congratulation ! Order Placed.");
    document.querySelector(".dropon").style.display = "none";
    otp.value = null;
  } else {
    alert("OOP's ! You entred wrong otp, Please Try Again.");
    otp.value = null;
  }
});

////////////=======> APPLIYING THE POPS <=======/////////////

// const pay = document.querySelector(".pay");
// pay.addEventListener("click", () => {
//   const model_body = document.querySelector(".modal-content");
//   // model_body.innerHTML = "hi";
//   // alert("hi");
//   model_body.innerHTML = `
//                 <div class="modal-header">
//                     <h1 class="modal-title fs-5" id="staticBackdropLabel">Proceed To Payment</h1>
//                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div class="modal-body phonepe">
//                     <div class="my-4">
//                         <h4><strong>
//                                 Scan & Pay via PhonePe
//                             </strong></h4>

//                         <img src="assets/QR.jpeg" alt="">
//                     </div>
//                     <h4 class="or">OR</h4>
//                     <div>
//                         <h4><strong>
//                                 Enter Your Mobile Number
//                             </strong></h4>
//                         <input type="number" placeholder="0 0 0 0 0 - 0 0 0 0 0" class="form-control my-4"
//                             id="exampleFormControlInput1">
//                         <button class="next send_otp btn btn-primary">Send OTP</button>
//                     </div>
//                 </div>
//             `;
// });

// <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
//       aria-labelledby="staticBackdropLabel" aria-hidden="true">

//       <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
//           <div class="modal-content">
// </div>
//       </div>
//   </div>`;
