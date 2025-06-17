// Array of product data
const products = [
  {
    id: 1,
    name: "T-shirt",
    price: 499,
    image: "https://via.placeholder.com/200x150?text=T-shirt"
  },
  {
    id: 2,
    name: "Shoes",
    price: 1299,
    image: "https://via.placeholder.com/200x150?text=Shoes"
  },
  {
    id: 3,
    name: "Backpack",
    price: 799,
    image: "https://via.placeholder.com/200x150?text=Backpack"
  }
];

// Get container
const container = document.getElementById("productContainer");

// Loop and create cards
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
  `;

  container.appendChild(card);
});

// Add to Cart function
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  alert(`Added to cart: ${product.name}`);
}
