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
$(function () {
  $("#accordion").accordion();
});

// Add additional logic as needed for your specific eCommerce website
