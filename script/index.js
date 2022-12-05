document.querySelector("form").addEventListener("submit", submitData);

var userData = JSON.parse(localStorage.getItem("UserData")) || []

function submitData(event) {
    event.preventDefault();
    var email = document.querySelector("#email").value
    var zip = document.querySelector("#code").value

    var obj = {
        Email: email,
        Zip: zip,
     
    }
    userData.push(obj);
    localStorage.setItem("UserData", JSON.stringify(userData))
    window.location.href="./signup2.html"
    alert("Order Can be deliver to your Location");
}

document.querySelector("#form").addEventListener("submit", storeData)

function storeData(event) {
    event.preventDefault();
    var email = document.querySelector("#mail").value
    var zip = document.querySelector("#zip").value

    var obj = {
        Email: email,
        Zip: zip,
       
    }
    userData.push(obj);
    console.log(obj);
    localStorage.setItem("UserData", JSON.stringify(userData))
    alert("Order Can be deliver to your Location");
}



// navbar dropdown

dropdown = document.querySelector(".dropdown");
second_side = document.querySelector(".second_side")
last_side = document.querySelector(".last_side")
height = document.querySelector("nav");

dropdown.addEventListener("click", function () {
    second_side.classList.toggle("v-hidden");
    last_side.classList.toggle("v-hidden")
    height.classList.toggle("main_nav")
})

// Plan div cards



////////////////////////////////////////////
var Data = [
    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Freshly has changed our lives!",
        desc: "With Freshly, we don't have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half, We love it.",
        name: "Dave",
        cat: "main"
    },
    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "10 Stars! Awesome! Love it!",
        desc: "We love Freshly because it takes two minute to prepare, the food is great and we don't have spend time cleaning up.",
        name: "Sheri",
        cat: "main"
    },
    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "One of the easiest decisions I've made",
        desc: "With Freshly, I don't have to think about what I'm going to eat for lunch each day and feel goos knowing that I'm eating a healthy meal. I love the Convenince!",
        name: "Cindi",
        cat: "main"
    },

    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Amazingly delicious and convenient!",
        desc: "I love that I have found freshly and that it allows me to try new things and allows me to eat healthy while remaining affordable!",
        name: "Jessica Wilson",
        cat: "second"
    },
    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Convenience, taste, variety",
        desc: "Been a customer for more than a year now, and love it. Customer service is particularly outstanding - whenever there's been a problem, Freshly staff respond quickly and always rectify the problem.",
        name: "Jeffrey",
        cat: "second"
    },
    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Delicious! So yummy!",
        desc: "The convenience of a well prepared, helathy, flavorful meal the no shopping, preparing, or clean up is amazing. Looking forward to the rest of the week",
        name: "Kristie Geiges",
        cat: "second"
    }
]

//////////////////////////////////////////////
////RATING//////////////////

// Ratings div cards and carousel


var carouselCards = [
    [
        {
            stars: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
            heading: "Freshly has changed our lives!",
            review: "With Freshly, we dont have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half. We love it.",
            name: "Dave",
        },
        {
            stars: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
            heading: "10 stars! Awesome! Love it!",
            review: "We love Freshly because it takes two minutes to prepare, the food is great and we don't have to spend time cleaning up.",
            name: "Sheri",
        },
        {
            stars: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
            heading: "One of the easiest decisions I've made",
            review: "With Freshly, I don't have to think about what I'm going to eat for lunch each day and feel good knowing that I'm eating a healthy meal. I love the convenience!",
            name: "Cindi",
        }
    ],
    [
        {
            stars: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
            heading: "Amazingly delicious and convenient!",
            review: "I love that I have found freshly and that it allows me to try new things and allows me to eat healthy while remaining affordable!",
            name: "Jessica Wilson",
        },
        {
            stars: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
            heading: "Convenience, taste, variety",
            review: "Been a customer for more than a year now, and love it. Customer service is particularly outstanding — whenever there's been a problem.",
            name: "Jeffrey",
        },
        {
            stars: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
            heading: "Delicious! So yummy!",
            review: "The convenience of a well prepared, healthy, flavorful meal with no shopping, preparing, or clean up is simply amazing.",
            name: "Kristie Geiges",
        }
    ]
];

var objNumber = 0;
var currentObj = carouselCards[objNumber];
makeCarousel();

function makeCarousel() {
    document.querySelector("#carouselBox").innerHTML = "";

    currentObj.map(item => {
        var box = document.createElement("div");

        var image = document.createElement("img");
        image.setAttribute("src", item.stars);
        image.setAttribute("id", "stars");

        var heading = document.createElement("h4");
        heading.textContent = item.heading;

        var review = document.createElement("p");
        review.textContent = item.review;

        var names = document.createElement("h5");
        names.textContent = item.name;

        box.append(image, heading, review, names);
        document.querySelector("#carouselBox").append(box);
    });
}


document.querySelector("#imageDivRight").addEventListener("click", () => {
    objNumber++;
    if (objNumber > carouselCards.length - 1) {
        objNumber = 0
    }
    currentObj = carouselCards[objNumber];
    makeCarousel(currentObj);
});

document.querySelector("#imageDivLeft").addEventListener("click", () => {
    objNumber--;
    if (objNumber < 0) {
        objNumber = carouselCards.length - 1
    }
    currentObj = carouselCards[objNumber];
    makeCarousel(currentObj);
});
