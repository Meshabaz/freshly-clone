let menu = JSON.parse(localStorage.getItem("menu")) || [];

let url = `https://web-production-0322.up.railway.app/all`;
let getData = async () => {
  let reponse = await fetch(url);
  let data = await reponse.json();
  menu = data;
  localStorage.setItem("menu", JSON.stringify(menu));
  console.log(data);
  displayData(menu);
};

getData();

let displayData = (data) => {
  document.getElementById("bottom-container").innerHTML = null;
  data.forEach((element) => {
    let {
      pic: { url1 },
      brand,
      inside: { calories },
      diet: { gluten },
    } = element;

    let box = document.createElement("div");
    box.setAttribute("class", "box");
    let img = document.createElement("img");
    img.src = url1;
    img.setAttribute("data-toggle", "modal");
    img.setAttribute("data-target", "#myModal");
    img.addEventListener("click", () => {
      displayModel(element.id);
    });
    let h2 = document.createElement("h3");
    h2.innerHTML = brand;
    if (h2.innerHTML == "Coq Au Vin") {
      img.src =
        "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/638304ad18cd936ea9f3ae36_production-meal-image-26eb81cd-a53a-47ed-a7da-56cc1b7272ef-p-500.jpeg";
    }

    let desc = document.createElement("div");
    desc.setAttribute("id", "desc");
    let cal = document.createElement("p");
    cal.innerHTML = calories + " Cal |";
    let glut = document.createElement("p");
    glut.innerHTML = gluten + " | ";
    let serve = document.createElement("p");
    serve.innerHTML = "Single-Serve";

    desc.append(cal, glut, serve);

    box.append(img, h2, desc);
    document.getElementById("bottom-container").append(box);
  });
};

//Implementation of Modal Box

function displayModel(id) {
  let div = document.getElementById("inner-container");
  div.innerHTML = `<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div id="modal-body">
                    

                </div>
                
              </div>
            </div>
          </div>`;
  let items = JSON.parse(localStorage.getItem("menu"));
  let item = items.filter((ele) => {
    return ele.id == id;
  });
  console.log(item);
  item.forEach((element) => {
    let {
      pic: { url1 },
      pic: { url2 },
      brand,
      diet: { gluten },
      inside: { calories, carbs, total_fat, protien },
    } = element;
    document.getElementById("modal-body").innerHTML = null;
    let dialog_box = document.createElement("div");
    dialog_box.setAttribute("id", "Modalbox");
    let h1 = document.createElement("h1");
    h1.innerText = brand;

    let h3 = document.createElement("h3");
    h3.innerText = element.with;
    let h6 = document.createElement("h6");
    h6.innerText = gluten;
    h6.style.color = "green;";
    let divimg = document.createElement("div");
    divimg.setAttribute("id", "ModalImg");

    let imga = document.createElement("img");
    imga.src = url1;
    let imgb = document.createElement("img");
    imgb.src = url2;

    let divInside = document.createElement("div");
    divInside.setAttribute("id", "Modaldetails");
    let p1 = document.createElement("p");
    p1.innerText = "Carbs :" + carbs + " | ";
    let p2 = document.createElement("p");
    p2.innerText = "Calories :" + calories + " | ";
    let p3 = document.createElement("p");
    p3.innerText = "Total Fat :" + total_fat + " | ";
    let p4 = document.createElement("p");
    p4.innerText = "Protein :" + protien;

    divInside.append(p1, p2, p3, p4);
    divimg.append(imga, imgb);
    dialog_box.append(h1, h3, h6, divimg, divInside);
    document.getElementById("modal-body").append(dialog_box);
  });
}

function fetchType() {
  let category = document.getElementById("category").value;
  if (category == "all") {
    displayData(menu);
    return;
  }
  let list = menu.filter((elem) => {
    return elem.categories == category;
  });
  console.log(list);
  displayData(list);
}
