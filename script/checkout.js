import { adjustSupport } from "../components/Nav.js";
import { checkoutNav } from "../components/checkoutNav.js";
import { cQues } from "../components/commonQuestions.js";

let cartArr = JSON.parse(localStorage.getItem("cartproduct")) || [];
let currDate = localStorage.getItem("delivery_date");

let distinct = [];
let duplicates = [];
cartArr.forEach((item, index, object) => {
  if (distinct.find((current) => current.id === item.id)) {
    console.info("duplicate found");

    duplicates.push(item);
  } else {
    distinct.push(item);
  }
});

function showMeals() {
  let menuTypes = document.querySelector(".mealsDetail");
  menuTypes.innerHTML = "";
  let text = "";
  distinct.map((e) => {
    text += `
     <div class="types">
                    <label>x
                            <h5>
                            <strong class="mealsCount">${e.quantity}</strong>
                        </h5>
                    </label>
                        <img src=${e.pic.url2}
                            alt="">
                    
                            </div>
                    `;
  });
  menuTypes.innerHTML = text;
}
window.onload = showMeals();

console.info("duplicates:", duplicates);
console.info("distinct:", distinct);

let comingDate = localStorage.getItem("delivery_date");
let flag = false;
let TotalnoOfMeals = localStorage.getItem("noOfMeals");
if (TotalnoOfMeals < cartArr.length) {
  TotalnoOfMeals = cartArr.length;
}
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
  // console.log("crt len:", cartArr.length);

  let shippingCharge = document.querySelector(".shippingAmount");
  let totalamount = document.querySelector(".totalAmount");
  let totalprice = document.querySelector(".totalPrice");
  let topay = document.querySelector(".topay");

  shippingCharge.innerHTML = `$ 9.99`;
  // document.querySelector(".mealsCount").innerText = TotalnoOfMeals;
  document.querySelector(".meals").innerText = TotalnoOfMeals;
  document.querySelector(".noOfMealsAmount").innerText = `$ ${pricePerMeal}`;
  let data = parseFloat(TotalnoOfMeals) * parseFloat(pricePerMeal) + 9.99;
  data = flag ? data - 50 : data;
  // data = Math.round(data, 2);
  data = Number(data.toFixed(2));
  console.log("data", data, flag);
  totalamount.innerHTML = `$ ${data}`;
  totalprice.innerHTML = `$ ${data}`;
  topay.innerHTML = data;
  document.querySelector(".date").value = currDate;
  console.log("date:", currDate);
};

// document.querySelector("select").addEventListener("click", display);
display();

// =============> CORRECT MESSAGE CODE  <================= //

const toast = document.querySelector(".theToast"),
  closeIcon = document.querySelector(".close"),
  progress = document.querySelector(".progress");

function show_message() {
  toast.classList.add("active");
  progress.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 4000);
  setTimeout(() => {
    progress.classList.remove("active");
  }, 4300);
}

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");
  progress.classList.add("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);
});

// =============> WRONG MESSAGE CODE  <================= //

const toastf = document.querySelector(".theToastf"),
  closeIconf = document.querySelector(".closef"),
  progressf = document.querySelector(".progressf");

function show_messagef() {
  toastf.classList.add("active");
  progressf.classList.add("active");

  setTimeout(() => {
    toastf.classList.remove("active");
  }, 4000);
  setTimeout(() => {
    progressf.classList.remove("active");
  }, 4300);
}

closeIconf.addEventListener("click", () => {
  toastf.classList.remove("active");
  progressf.classList.add("active");

  setTimeout(() => {
    progressf.classList.remove("active");
  }, 300);
});

const applyPromo = () => {
  event.preventDefault();
  let codeEntered = document.querySelector(".promoCode").value;
  if (codeEntered === "masai") {
    flag = true;
    show_message();
  } else {
    flag = false;
    show_messagef();
  }
  display();
  document.querySelector(".promoCode").value = null;
};
document.querySelector(".apply").addEventListener("click", applyPromo);

const pay = document.querySelector(".pay");
pay.addEventListener("click", () => {
  document.querySelector(".phonepe").classList.add("bounce-in-top");
  document.querySelector(".drop").style.display = "flex";
});

document.querySelector(".close_p").addEventListener("click", () => {
  document.querySelector(".drop").style.display = "none";
});

document.querySelector(".send_otp").addEventListener("click", () => {
  alert("1234");
  document.querySelector(".phonepe").classList.remove("bounce-in-top");
  document.querySelector(".phonepe").classList.add("bounce-out-top");
  document.querySelector(".opt_div").classList.add("puff-in-center");

  setTimeout(() => {
    document.querySelector(".drop").style.display = "none";
    document.querySelector(".dropon").style.display = "flex";
  }, 1300);
});
document.querySelector(".verify_otp").addEventListener("click", () => {
  let otp = document.querySelector(".otp").value;
  if (otp === "1234") {
    // alert("congratulation ! Order Placed.");
    document.querySelector(".opt_div").classList.remove("puff-in-center");
    document.querySelector(".opt_div").classList.remove("wobble-hor-bottom");
    document
      .querySelector(".opt_div")
      .classList.add("slide-out-elliptic-top-bck");
    setTimeout(() => {
      document.querySelector(".dropon").style.display = "none";
    }, 800);
    document.querySelector(".otp").value = "";
    document.querySelector(".tex-2").innerHTML = "Payment Successful !";
    show_message();
  } else {
    // alert("OOP's ! You entred wrong otp, Please Try Again.");
    document.querySelector(".opt_div").classList.remove("puff-in-center");
    document.querySelector(".opt_div").classList.add("wobble-hor-bottom");
    show_messagef();
    document.querySelector(".otp").value = "";
  }
});

// document.querySelector(".close_p").addEventListener("click", () => {
//   document.querySelector(".dropon").classList.remove("puff-in-center");
//   document.querySelector(".dropon").classList.add("slide-out-elliptic-top-bck");
//   setTimeout(() => {
//     document.querySelector(".dropon").style.display = "none";
//   }, 800);
// });
