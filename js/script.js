// Shravan Choudhary 8941438 and Yagnesh mehta 8884884
// Sample product data (replace with actual product details)
const products = [
  { name: "Product Name 1", price: 49.99 },
  { name: "Product Name 2", price: 79.99 },
  { name: "Product Name 3", price: 99.99 },
  { name: "Product Name 4", price: 129.99 },
];

// Function to display product details
function displayProductDetails(product) {
  console.log(`Selected Product: ${product.name}, Price: $${product.price}`);
  // Add your logic to display product details on the website
}

// Function to handle adding a product to the cart
function addToCart(product) {
  console.log(`Added to Cart: ${product.name}`);
  // Add your logic to update the cart on the website
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach((button, index) => {
  button.addEventListener("click", () => {
    const selectedProduct = products[index];
    addToCart(selectedProduct);
  });
});

// Event listener for product details buttons
document
  .querySelectorAll(".Home-card, .Home-details-card")
  .forEach((card, index) => {
    card.addEventListener("click", () => {
      const selectedProduct = products[index];
      displayProductDetails(selectedProduct);
    });
  });

const sliders = document.querySelectorAll(".transform");
let btnLeft = document.getElementById("left");
let btnRight = document.getElementById("right");
let counter = 0;
// console.log(sliders);

sliders.forEach((Slides, index) => {
  Slides.style.left = `${index * 100}%`;
});
const goNext = () => {
  counter++;
  slideImage();
};

function goPrev() {
  counter--;
  slideImage();
}

function slideImage() {
  sliders.forEach((value) => {
    if (counter < 0) {
      counter = sliders.length - 1;
      value.style.transform = `translateX(-${counter * 100}%)`;
      console.log(counter);
    }
    if (counter <= sliders.length - 1) {
      value.style.transform = `translateX(-${counter * 100}%)`;
      console.log(counter);
    } else {
      counter = 0;
      value.style.transform = `translateX(-${counter * 100}%)`;
      console.log(counter);
    }
  });
}

// accordian plugin

$(function () {
  $("#accordion").accordion();
});

// Add additional logic as needed for your specific eCommerce website
