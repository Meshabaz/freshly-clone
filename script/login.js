/*let form=document.querySelector("form");
form.addEventListener("submit" ,getData);
function getData()
{
    let obj={
        name:form.name.value,
        email:form.email.value,
        password:form.password.value,

    }
    localStorage.setItem("name",obj.name);
    localStorage.setItem("email",obj.email);
    localStorage.setItem("password",obj.password);
}*/

/*let form=document.querySelector("form");
form.addEventListener("submit" ,getdata)
function getdata()
{
    let obj={
        email:form.email.value,
        username:form.username.value,
        password:form.password.value,
        

    }
    
    localStorage.setItem("email",obj.email);
    localStorage.setItem("password",obj.password);
    localStorage.setItem("username",obj.username);
 
}*/
// console.log("vk");
let form = document.querySelector(".signup");
form.addEventListener("click", () => {
  event.preventDefault();
  let obj = {
    name1: document.querySelector("#email").value,
    password1: document.querySelector("#password").value,
  };
  console.log(obj);
  // console.log(localStorage.getItem("email"))
  // console.log(document.querySelector("#email").value)
  
  if (
    localStorage.getItem("email") === obj.name1 &&
    localStorage.getItem("password") === obj.password1
  ) {
    alert("you logged in successfully");
    location.href = "plan.html";
    // location.href = "";
    
  } else {
    alert("creditional wrong, please try again!");
  }
});
