/*let form=document.querySelector("form");
form.addEventListener("submit" ,getData)
function getData()
{
    event.preventDefault();
    let obj={
        name1:form.name1.value,
        password1:form.password1.value,
    }
    if(localStorage.getItem("name")==obj.name1 && localStorage.getItem("password")==obj.password1)
    {
        alert("you logged");

    }
    else{
        alert(" creditional wrong");
    }}*/

   /* let form=document.querySelector("form");
    form.addEventListener("submit",checkdata);

   function checkdata()
    {

        event.preventDefault();
        let obj={
            emailinput:form.emailinput.value,
            passward:form.passward.value,
        }
        if(localStorage.getItem("email")==obj.emailinput && localStorage.getItem("password")==obj.passward){
            alert("Login Successfull!");
            window.location.href="login.html";
        }else{
            alert("wrong credentials! Please enter correct data");
            window.location.href="login.html";
        }
    }
    */
    var username =localStorage.getItem("email") || "";
    // var password =localStorage.getItem("password")||"";
    let form=document.querySelector("#login-btn1");
    form.addEventListener("click" ,getData)
    function getData()
    {
        if(document.getElementById("username1").value== "" ||
        document.getElementById("phonenumber1").value == "" ||
        document.getElementById("emailinput1").value == "" ||
        document.getElementById("zipcode1").value == "" ||
        document.getElementById("password1").value == ""){
            alert("Input Field can not be Empty")
        }
        else{
            let obj={
                username:document.getElementById("username1").value,
                phonenumber:document.getElementById("phonenumber1").value,
                emailinput:document.getElementById("emailinput1").value,
                zipcode:document.getElementById("zipcode1").value,
                passward:document.getElementById("password1").value,
        
            }
            if(obj.email==username){
                alert("You have already registered from this email, Please Login");
                window.location.href="./login.html";
                window.Location.href="./login.html";
            }
            else{
                localStorage.setItem("phnumber",obj.phonenumber);
                localStorage.setItem("zipcode",obj.zipcode);
                 localStorage.setItem("email",obj.emailinput);
                localStorage.setItem("password",obj.passward);
                localStorage.setItem("name",obj.username);
                // localStorage.setItem("mobile",obj.mobile);
                window.location.href="./login.html";
                alert("Successfully Registered");
                
            }
        }
        
      
     
    }