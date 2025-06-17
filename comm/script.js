// Product list

// let img = "https://image.hm.com/assets/hm/1b/9a/1b9a40df036db9f0eeaf83ccda1a5c1445f1e93a.jpg?imwidth=1536";

const products = [
  { id: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUV6bbmaYr7L6pgIL2jFQfdj5HeX1l7o1Xg&s", name: "T-Shirt", price: 499 },
];

// products.push(img);

console.log(products)
let cart = [];

function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
        <P>${product.img}</P>
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  const itemInCart = cart.find(item => item.id === productId);
  if (itemInCart) {
    itemInCart.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
}

function updateCartUI() {
  const cartDiv = document.getElementById("cart");

  if (cart.length === 0) {
    cartDiv.innerHTML = "Cart is empty.";
    return;
  }

  cartDiv.innerHTML = cart.map(item =>
    `<p>${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}</p>`
  ).join("") + `<hr><p><strong>Total: ₹${getTotal()}</strong></p>`;
}

function getTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// On page load
displayProducts();


// function addToCart(productId) {
//   const product = products.find(p => p.id === productId);

//   const itemInCart = cart.find(item => item.id === productId);
//   if (itemInCart) {
//     itemInCart.quantity += 1;
//   } else {
//     cart.push({ ...product, quantity: 1 });
//   }

//   updateCartUI();
// }

// function updateCartUI() {
//   const cartDiv = document.getElementById("cart");

//   if (cart.length === 0) {
//     cartDiv.innerHTML = "Cart is empty.";
//     return;
//   }

//   cartDiv.innerHTML = cart.map(item =>
//     `<p>${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}</p>`
//   ).join("") + `<hr><p><strong>Total: ₹${getTotal()}</strong></p>`;
// }

// function getTotal() {
//   return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
// }