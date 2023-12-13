let listProduct = document.querySelector(".listProduct");
let listCart = document.querySelector(".listCart");
let cartIcon = document.querySelector(".icon-cart");
let iconCartSpan = document.querySelector(".icon-cart span");
let body = document.querySelector("body");
let closeCart = document.querySelector(".close");
let products = [];
let cart = [];

cartIcon.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

//  Function to fatch the data from the json file objects which has key and values of the products
const dataFetch = () => {
  // get data product
  fetch("./js/products.json")
    .then((response) => response.json())
    .then((data) => {
      products = data;
      // running the dataInHTML function in order to add the products in the product grid
      dataInHTML();
      console.log(products);

      // get data cart from memory
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        cartHTML();
      }
    });
};
dataFetch();

const dataInHTML = () => {
  // This is the function to add the data to the html in the cart using innerHTML method

  // Here if the date products fatch from json file has more than 0 data the condition will become true
  if (products.length > 0) {
    products.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.dataset.id = product.id;
      newProduct.classList.add("item");
      newProduct.innerHTML = `<img src="${product.image}" alt="">
                <a href="${product.page}" class="href"><h2>${product.name}</h2></a>
                <div class="price">$${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
      // Appending the newProduct in the listProduct div in order to add the products
      listProduct.appendChild(newProduct);
    });
  }
};
listProduct.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains("addCart")) {
    // adding product id to the cart
    let id_product = positionClick.parentElement.dataset.id;
    addToCart(id_product);
  }
});
// Function to add product in the cart if zero products are in the cart after clicking the add to cart btn it will make quantity to 1
const addToCart = (product_id) => {
  let positionThisProductInCart = cart.findIndex(
    (value) => value.product_id == product_id
  );
  if (cart.length <= 0) {
    cart = [
      {
        product_id: product_id,
        quantity: 1,
      },
    ];
  } else if (positionThisProductInCart < 0) {
    cart.push({
      product_id: product_id,
      quantity: 1,
    });
  } else {
    // else part if the there is more than one product in the cart
    cart[positionThisProductInCart].quantity =
      cart[positionThisProductInCart].quantity + 1;
  }
  cartHTML();
  cartData();
};
const cartData = () => {
  // In order to save it till the system is not shut off we are using local storage as a goto storage
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Creating a function in order to store the quantity with its html and the total price of the same product if it has more quantity.
const cartHTML = () => {
  listCart.innerHTML = "";
  let totalQuantity = 0;
  if (cart.length > 0) {
    cart.forEach((item) => {
      totalQuantity = totalQuantity + item.quantity;
      let newItem = document.createElement("div");
      newItem.classList.add("item");
      newItem.dataset.id = item.product_id;

      // Here is the HTML for the new product added to the cart
      let positionProduct = products.findIndex(
        (value) => value.id == item.product_id
      );
      let info = products[positionProduct];
      listCart.appendChild(newItem);
      newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">$${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
    });
  }
  iconCartSpan.innerText = totalQuantity;
};
// Event listeners for handling the deleting buttons and adding buttons.
listCart.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (
    positionClick.classList.contains("minus") ||
    positionClick.classList.contains("plus")
  ) {
    let product_id = positionClick.parentElement.parentElement.dataset.id;
    let type = "minus";
    if (positionClick.classList.contains("plus")) {
      type = "plus";
    }
    quantiCart(product_id, type);
  }
});
const quantiCart = (product_id, type) => {
  let positionItemInCart = cart.findIndex(
    (value) => value.product_id == product_id
  );
  if (positionItemInCart >= 0) {
    let info = cart[positionItemInCart];
    switch (type) {
      case "plus":
        cart[positionItemInCart].quantity =
          cart[positionItemInCart].quantity + 1;
        break;

      default:
        let changeQuantity = cart[positionItemInCart].quantity - 1;
        if (changeQuantity > 0) {
          cart[positionItemInCart].quantity = changeQuantity;
        } else {
          cart.splice(positionItemInCart, 1);
        }
        break;
    }
  }
  cartHTML();
  cartData();
};
// Created by SwapnilPatel / 8911046
