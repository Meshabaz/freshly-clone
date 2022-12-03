let allProducts = JSON.parse(localStorage.getItem("products")) || []
console.log(allProducts)

let mealQuantity = localStorage.getItem("noOfMeals") || 0
let pricePerMeal = localStorage.getItem("pricePerMeal") || 0
let date = localStorage.getItem("delivery_date") || ""

console.log(mealQuantity)
console.log(pricePerMeal)
console.log(date)

let data = async() => {
    url = `https://freshly-server.onrender.com/all`
    let res = await fetch(url)
    let food = await res.json()
    allProducts = food
    // console.log(food)
    display(food)
}

let cartArray =JSON.parse(localStorage.getItem("cartproduct")) || []
document.getElementById("filter10").checked = true
document.getElementById("filter5").checked = true

let display = (food) =>{
    document.getElementById("products").innerHTML = ""
    food.map((elem,index,food) =>{
        if(elem.quantity == undefined) elem.quantity = 0
        let div = document.createElement("div")

        let divImg = document.createElement("div")

        let pImg = document.createElement("img")
        if(elem.brand === "Coq Au Vin") pImg.src = food[4].pic.url1
        else pImg.src = elem.pic.url1

        let title = document.createElement("h4")
        title.innerText = elem.brand
        

        let detail = document.createElement("p")
        detail.innerText = elem.with
        detail.style.color = "Gray"
        detail.style.fontSize = "14px"

        let cal = document.createElement("p")
        if(document.getElementById("filter10").checked){
            cal.innerText = elem.inside.calories + " Cal"
        }
        if(document.getElementById("filter11").checked){
            cal.innerText = elem.inside.calories + " Cal"
        }
        if(document.getElementById("filter12").checked){
            cal.innerText = elem.inside.carbs + "g Carbs"
        }
        if(document.getElementById("filter13").checked){
            cal.innerText = elem.inside.protien + "g Protein"
        }
        cal.style.color = "Gray"
        cal.style.fontSize = "14px"
        

        divImg.append(pImg)
        divImg.setAttribute("id","foodImg")

        let btn = document.createElement("button") 
        btn.innerHTML = '<i class="fa-solid fa-plus"></i>'
        btn.setAttribute("class","btn")
        
        let btn1 = document.createElement("button")
        btn1.innerHTML = '<i class="fa-solid fa-minus"></i>'


        let btn2 = document.createElement("button")
        btn2.innerHTML = '<i class=" fa-solid fa-plus"></i>'
        btn2.style.color = "blue"
        let quant = document.createElement("p")
        quant.innerText = elem.quantity

        btn1.setAttribute("class","btn1")
        btn2.setAttribute("class","btn2")
        quant.setAttribute("id","quantity")

        let btnDiv = document.createElement("div")
        btnDiv.append(btn,btn1,quant,btn2)
        btnDiv.setAttribute("class","btnDiv")
        if(elem.quantity<1){
            btnDiv.style.boxShadow = "none"
            btn1.setAttribute("hidden","hidden")
            btn2.setAttribute("hidden","hidden")
            quant.setAttribute("hidden","hidden")
            
        }
        if(elem.quantity>=1){
            btn1.removeAttribute("hidden")
            btn2.removeAttribute("hidden")
            quant.removeAttribute("hidden")
            btn.setAttribute("hidden","hidden")
            
        }
        
        div.append(divImg,title,detail,cal,btnDiv)

        document.getElementById("products").append(div) 
        
        // div.setAttribute("data-toggle","modal")
        // div.setAttribute("data-target","#myModal")
        // div.addEventListener("click",()=>{
        //     displayModel(elem);
        // })

        btn.addEventListener("click",()=>{
            btnDiv.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
            var q = elem.quantity
            q++
            elem.quantity = q
            btn1.removeAttribute("hidden")
            btn2.removeAttribute("hidden")
            quant.removeAttribute("hidden")
            btn.setAttribute("hidden","hidden")
            quant.innerHTML = q
            food[index].quantity = q
            localStorage.setItem("products",JSON.stringify (allProducts))
            cartArray.push(elem)
            localStorage.setItem("cartproduct",JSON.stringify(cartArray))
            ShowinCart(cartArray,food);
        })
        btn2.addEventListener("click",()=>{
            var q = elem.quantity
            q++
            elem.quantity =  q
            quant.innerHTML = q
            cartArray.push(elem)
            localStorage.setItem("cartproduct",JSON.stringify(cartArray))
            food[index].quantity = q
            localStorage.setItem("products",JSON.stringify (allProducts))
            ShowinCart(cartArray,food);
            // ShowinCart(elem)
        })
        btn1.addEventListener("click",()=>{
            var q = elem.quantity
            // document.querySelector(".oneItem").innerHTML = ""
            deleteItem(elem.brand,cartArray)
            q--
            elem.quantity = q
            
            food[index].quantity = q
            localStorage.setItem("products",JSON.stringify (allProducts))
            if(q<1){
                quant.innerHTML = q
                btn1.setAttribute("hidden","hidden")
                btn2.setAttribute("hidden","hidden")
                quant.setAttribute("hidden","hidden")
                btnDiv.style.boxShadow = "none"
                btn.removeAttribute("hidden")
            }
            else{
                quant.innerHTML = q
            }
        })
    })
    for(var i=0;i<food.length;i++){
        let n = food[i].quantity
        let b = food[i].brand
        allProducts.map((elem)=>{
            if(b == elem.brand){
                elem.quantity = n
            }
        })
    }

    localStorage.setItem("products",JSON.stringify (allProducts))
}

if(allProducts.length ===0){
    data()
}
else{
    display(allProducts)
} 

function deleteItem(name,arr){
    // console.log(name)
    var index
    for(var i=0;i<arr.length;i++){
        if(arr[i].brand === name){
            index = i;
        } 
    }
    console.log(index)
    cartArray.splice(index,1)
    console.log(cartArray)
    localStorage.setItem("cartproduct",JSON.stringify(cartArray))
    ShowinCart(cartArray)
}

function ShowinCart(arr,food){

    document.getElementById("cart").innerHTML = ""
    arr.sort(function(a, b) {
        return (a.id - b.id);
    }).sort(function(a, b) {
        return (a.name - b.name);
    });
    console.log(arr)
    if(arr.length ===0){
        let disc = document.createElement("h5")
        disc.innerText = `Get Started by Adding atleast 4 Meals`
        disc.style.color = "gray"
        disc.style.textAlign = "center"
        disc.style.marginTop = "180px"
        document.getElementById("cart").append(disc)
    }
    else{
        arr.map((elem,index)=>{
            var img = document.createElement("div")
            var img1 = document.createElement("img")
           img1.src = elem.pic.url2
            img.append(img1)
            img.setAttribute("class","cartImg")
        
            var title = document.createElement("h5")
            title.innerText = elem.brand
        
            var qDiv = document.createElement("div")
            
            var plus = document.createElement("button")
            plus.innerHTML = '<i class=" fa-solid fa-plus"></i>'
            plus.style.color = "blue"
            plus.addEventListener("click",()=>{
                arr.push(elem)
                localStorage.setItem("cartproduct",JSON.stringify(arr))
                ShowinCart(arr);
                updateQuantity(elem)
                display(allProducts)
            })
        
            var minus = document.createElement("button")
            minus.innerHTML = '<i class="fa-solid fa-minus"></i>'
            minus.addEventListener("click",()=>{
                cartArray.splice(index,1)
                localStorage.setItem("cartproduct",JSON.stringify(cartArray))
                ShowinCart(cartArray);
                updateQuantity2(elem)
                display(allProducts)
            })
        
            qDiv.append(plus,minus)
            qDiv.setAttribute("class","cartBtn")
            
            var div = document.createElement("div")
            div.setAttribute("class","oneItem")
            div.transition = "all 1s"
            div.append(img,title,qDiv)
            
        
            document.getElementById("cart").append(div)
        })
        let summary = document.createElement("h5")
        summary.innerText = "Order Summary"
        summary.style.marginLeft = "25px"
        let meal = document.createElement("p")
        meal.innerText = cartArray.length + " meals"
        mealAmount = document.createElement("p")
        let amount = 0;
        if(cartArray.length<mealQuantity){
            amount = 12.50*cartArray.length
        }
        else amount = (pricePerMeal*cartArray.length).toFixed(2)

        mealAmount.innerText = "$" + amount


        let subtotal = document.createElement("p")
        subtotal.innerText = "Subtotal"
        let subAmount = document.createElement("p")
        subAmount.innerText  = "$" + amount

        let div1 = document.createElement("div")
        div1.append(meal,mealAmount)
        div1.setAttribute("id","meal1")

        let div2 = document.createElement("div")
        div2.append(subtotal,subAmount)
        div2.setAttribute("id","meal2")

        document.getElementById("cart").append(summary,div1,div2)

    }
    
    document.getElementById("subtotal").innerHTML = ""
    document.getElementById("cart-quantity").innerHTML = ""
    document.getElementById("addToCart").innerHTML = ""
    let sub = document.getElementById("subtotal")
    let h3 = document.createElement("h3")
    let para = document.createElement("p")

    if(cartArray.length<mealQuantity){
        h3.innerText = "Subtotal: $" + (12.50*cartArray.length).toFixed(2)
    }
    else{
        h3.innerHTML = "Subtotal: $" + (pricePerMeal*cartArray.length).toFixed(2)
        let save = (12.50*cartArray.length) - (pricePerMeal*cartArray.length)
        save = save.toFixed(2)
        para.innerText = "You Saved: $"+ save
        para.style.color = "Gray"
        para.style.fontSize = "12px"
        para.style.marginBottom = "-15px"
    }
    
    sub.append(para,h3)

    let cIcon = document.createElement("h3")
    cIcon.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'

    let quan = document.createElement("h3")
    quan.innerText = cartArray.length

    document.getElementById("cart-quantity").append(cIcon,quan)

    var add = document.createElement("button")
    add.innerText = "Add to Continue"
    if(cartArray.length>=mealQuantity){
        add.style.background = "blue"
        add.style.color = "white"
        add.style.cursor = "pointer"
        add.addEventListener("click",()=>{
            location.href = "checkout.html"
        })
    }
    var par = document.createElement("p")
    par.innerText = "The more you add, the more you will save!"
    par.style.color = "gray"
    par.style.fontSize = "14px"
    par.style.fontWeight= "bolder"
    
    document.getElementById("addToCart").append(add,par)
}

ShowinCart(cartArray)


function updateQuantity(elem){
    for(var i=0;i<allProducts.length;i++){
        if(elem.brand === allProducts[i].brand){
            console.log(allProducts[i].quantity)
            allProducts[i].quantity++
            console.log(allProducts[i].quantity)
            localStorage.setItem("products",JSON.stringify (allProducts))
            break;
        }
    }
}
function updateQuantity2(elem){
    for(var i=0;i<allProducts.length;i++){
        if(elem.brand === allProducts[i].brand){
            console.log(allProducts[i].quantity)
            allProducts[i].quantity--
            console.log(allProducts[i].quantity)
            localStorage.setItem("products",JSON.stringify (allProducts))
            break;
        }
    }
}
document.getElementById("clearAll").addEventListener("click",clearAll)
document.getElementById("sFilter").setAttribute("hidden","hidden")
function clearAll(){
    cartArray = []
    localStorage.setItem("cartproduct",JSON.stringify(cartArray))
    ShowinCart(cartArray)
    for(var i=0;i<allProducts.length;i++){
        allProducts[i].quantity = 0;
    }
    localStorage.setItem("products",JSON.stringify(allProducts))
    display(allProducts)
}

// "<i class="fa-solid fa-plus"></i>"

// filter part
let isFilter = false
function openSort(){
    if(!isFilter){
        document.getElementById("sFilter").removeAttribute("hidden")
        document.getElementById("container").style.gridTemplateColumns = "4fr 17.4fr 6fr"
        isFilter = true
    }
    else{
        document.getElementById("sFilter").setAttribute("hidden","hidden")
        document.getElementById("container").style.gridTemplateColumns = "0fr 10.7fr 3fr"
        isFilter = false
    }
    
}


document.getElementById("sort").addEventListener("click",openSort)

function filter1(){
    let array = []
    let f1 = document.getElementById("filter1")
    let f2 = document.getElementById("filter2")
    let f3 = document.getElementById("filter3")
    let f4 = document.getElementById("filter4")
    if(!f1.checked) array = allProducts
    if(!f2.checked) array = allProducts
    if(!f3.checked) array = allProducts
    if(!f4.checked) array = allProducts

    if(f1.checked){
        array = array.filter((elem)=>{
            return elem.diet.gluten
        })
    }
    if(f2.checked){
        array = array.filter((elem)=>{
            return elem.diet.carb
        })
    }
    if(f3.checked){
        array = array.filter((elem)=>{
            return elem.diet.plant
        })
    }
    if(f4.checked){
        array = array.filter((elem)=>{
            return elem.diet.dairy
        })
    }
    console.log(array)
    display(array)
}
let category = document.getElementById("filter5").value

function filter2(){
    document.getElementById("filter6").checked = false
    document.getElementById("filter7").checked = false
    document.getElementById("filter8").checked = false
    document.getElementById("filter9").checked = false
    category = document.getElementById("filter5").value
    
    display(allProducts)

}
function filter3(){
    document.getElementById("filter5").checked = false
    document.getElementById("filter7").checked = false
    document.getElementById("filter8").checked = false
    document.getElementById("filter9").checked = false
    category = document.getElementById("filter6").value
    let arr2 = allProducts
    arr2 = arr2.filter((elem)=>{
        return elem.categories == "Plant-Based"
    })
    display(arr2)
}
function filter4(){
    document.getElementById("filter6").checked = false
    document.getElementById("filter5").checked = false
    document.getElementById("filter8").checked = false
    document.getElementById("filter9").checked = false
    category = document.getElementById("filter7").value
    let arr2 = allProducts
    arr2 = arr2.filter((elem)=>{
        return elem.categories == "Signature Collection"
    })
    display(arr2)
}
function filter5(){
    document.getElementById("filter6").checked = false
    document.getElementById("filter5").checked = false
    document.getElementById("filter7").checked = false
    document.getElementById("filter9").checked = false
    category = document.getElementById("filter8").value
    let arr2 = allProducts
    arr2 = arr2.filter((elem)=>{
        return elem.categories == "FreshlyFit"
    })
    display(arr2)
}
function filter6(){
    document.getElementById("filter6").checked = false
    document.getElementById("filter5").checked = false
    document.getElementById("filter8").checked = false
    document.getElementById("filter7").checked = false
    category = document.getElementById("filter9").value
    let arr2 = allProducts
    arr2 = arr2.filter((elem)=>{
        return elem.categories == "Proteins & Sides"
    })
    display(arr2)
}
filter7()

function filter7(){
    document.getElementById("filter11").checked = false
    document.getElementById("filter12").checked = false
    document.getElementById("filter13").checked = false
    let arr1 = allProducts
    arr1 = arr1.sort(function(a, b) {
        return (a.id - b.id);
    })
    display(arr1)
}
function filter8(){
    document.getElementById("filter10").checked = false
    document.getElementById("filter12").checked = false
    document.getElementById("filter13").checked = false
    let arr1 = allProducts
    arr1 = arr1.sort(function(a, b) {
        return (a.inside.calories - b.inside.calories);
    })
    display(arr1)
}
function filter9(){
    document.getElementById("filter11").checked = false
    document.getElementById("filter10").checked = false
    document.getElementById("filter13").checked = false
    let arr1 = allProducts
    arr1 = arr1.sort(function(a, b) {
        return (a.inside.carbs - b.inside.carbs);
    })
    display(arr1)
}
function filter10(){
    document.getElementById("filter11").checked = false
    document.getElementById("filter12").checked = false
    document.getElementById("filter10").checked = false
    let arr1 = allProducts
    arr1 = arr1.sort(function(a, b) {
        return (a.inside.protien - b.inside.protien);
    })
    display(arr1)
}

//Implementation of Modal Box

// function displayModel(elem){
//     let div = document.getElementById("inner-container");
//             div.innerHTML = `<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog" role="document">
//               <div class="modal-content">
//                 <div class="modal-header">
                  
//                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                     <span aria-hidden="true">&times;</span>
//                   </button>
//                 </div>
//                 <div id="modal-body">
                    

//                 </div>
                
//               </div>
//             </div>
//           </div>`;
          
          
//             let {pic:{url1},pic:{url2},brand,diet:{gluten},inside:{calories,carbs,total_fat,protien}} = elem;
//             document.getElementById("modal-body").innerHTML = null;
//             let dialog_box = document.createElement("div");
//             dialog_box.setAttribute("id","Modalbox");
//             let h1 = document.createElement("h1");
//                 h1.innerText =brand;
                
//                 let h3 = document.createElement("h3");
//                 h3.innerText = elem.with;
//                 let h6 = document.createElement("h6");
//                 h6.innerText = gluten;
//                 h6.style.color="green;"
//                 let divimg = document.createElement("div");
//                 divimg.setAttribute("id","ModalImg");
                
                
//                 let imga = document.createElement("img");
//                 imga.src=url1;
//                 let imgb = document.createElement("img");
//                 imgb.src=url2;

//                 let divInside = document.createElement("div");
//                 divInside.setAttribute("id","Modaldetails")
//                 let p1 = document.createElement("p");
//                 p1.innerText="Carbs :"+carbs+" | ";
//                 let p2 = document.createElement("p");
//                 p2.innerText="Calories :"+calories+" | ";
//                 let p3 = document.createElement("p");
//                 p3.innerText="Total Fat :"+total_fat+" | ";
//                 let p4 = document.createElement("p");
//                 p4.innerText="Protein :"+protien;

                
//                 divInside.append(p1,p2,p3,p4);
//                 divimg.append(imga,imgb)
//                 dialog_box.append(h1,h3,h6,divimg,divInside);
//                 document.getElementById("modal-body").append(dialog_box);
// }