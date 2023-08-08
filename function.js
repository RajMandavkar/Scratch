const productData = {
    name: "Product Name",
    price: 195.00
};

let cartItems = [];
let totalPrice = 0;

function addToCart() {
    totalPrice += productData.price;
    updateCart();
    
    var x = document.getElementById('addToCart');
    var y = document.getElementById('id');
  
    if (x.checked === true) {
        y.style.backgroundColor = "offwhite";
        y.style.borderColor = "green";
    } else {
        y.style.borderColor = "silver";
    }
}


const productData1 = {
    name: "Product Name",
    price: 345.00
};

let cartItems1 = [];
let totalPrice1 = 0;



function addToCart1() {
    totalPrice += productData1.price;
    updateCart();

    var x = document.getElementById('addToCart1');
    var y = document.getElementById('id1');
  
    if (x.checked === true) {
        y.style.borderColor = "green";
        y.style.backgroundColor = "offwhite ";
    } else {
        y.style.borderColor = "silver";
    }
}

const productData2 = {
    name: "Product Name",
    price: 528.00
};

let cartItems2 = [];
let totalPrice2 = 0;

function addToCart2() {
    totalPrice += productData2.price;
    updateCart();

    var x = document.getElementById('addToCart2');
    var y = document.getElementById('id2');
  
    if (x.checked === true) {
        y.style.borderColor = "green";
        y.style.backgroundColor = "mint";
    } else {
        y.style.borderColor = "silver";
    }
}

function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    const totalElement = document.getElementById("total-price");
    cartItemsList.innerHTML = ""; // Clear the previous cart items

    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
    });

    totalElement.textContent = totalPrice;
}