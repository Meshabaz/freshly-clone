
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
console.log("vk");
let form=document.querySelector("form");
form.addEventListener("submit" ,getData)
function getData()
{
  
    let obj={
        name1:form.email.value,
        password1:form.password.value,
    }
    console.log(obj);
    
    if(localStorage.getItem("email")==obj.name1 && localStorage.getItem("password")==obj.password1)
    {
        window.location.href="/product.html";
        alert("you logged in successfully");
       
    }
    else{
        alert("creditional wrong, please try again!");
    }}































