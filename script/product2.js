let allProducts = JSON.parse(localStorage.getItem("products")) || []


let data = async() => {
    url = `https://freshly-server.herokuapp.com/all`
    let res = await fetch(url)
    let food = await res.json()
    console.log(food)
    display(food)
}


let cartArray =JSON.parse(localStorage.getItem("cartproduct")) || []


let display = (food) =>{
    document.getElementById("products").innerHTML = ""
    food.map((elem,index,food) =>{
        console.log("run")
        if(elem.quantity == undefined) elem.quantity = 0
        let div = document.createElement("div")

        let divImg = document.createElement("div")

        let pImg = document.createElement("img")
        pImg.src = elem.pic.url1

        let title = document.createElement("h4")
        title.innerText = elem.brand

        let detail = document.createElement("p")
        detail.innerText = elem.with

        let cal = document.createElement("p")
        cal.innerText = elem.inside.calories + " Cal"

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
    allProducts = food
    localStorage.setItem("products",JSON.stringify (allProducts))
}

if(allProducts.length ===0){
    data()
}
else{
    console.log("bharat")
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
    let sub = document.getElementById("subtotal")
    let h3 = document.createElement("h3")
    h3.innerText = "Subtotal "
    sub.append(h3)

    let cIcon = document.createElement("h3")
    cIcon.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'

    let quan = document.createElement("h3")
    quan.innerText = 3

    document.getElementById("cart-quantity").append(cIcon,quan)

    var add = document.createElement("button")
    add.innerText = "Add to Continue"
    var par = document.createElement("p")
    par.innerText = "The more you add, the more you will save!"
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