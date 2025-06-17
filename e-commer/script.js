


const products = [
  {
    id: 1,
    name: "T-shirt",
    price: 499,
    image: "https://rukminim2.flixcart.com/image/450/700/xif0q/t-shirt/8/h/p/xl-half-triangel-black-one-nb-nicky-boy-original-imagm9gxgyhz4k63.jpeg?q=90&crop=false"
  },
  {
    id: 2,
    name: "T-shirt",
    price: 1299,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMU-Dx_9Nw3Y1i7L21zPVSyDjrPYL82ecQLA&s"
  },
  {
    id: 3,
    name: "T-shirt",
    price: 799,
    image: "https://rukminim2.flixcart.com/image/450/700/xif0q/t-shirt/8/h/p/xl-half-triangel-black-one-nb-nicky-boy-original-imagm9gxgyhz4k63.jpeg?q=90&crop=false"
  }
  ,{
    id: 4,
    name: "T-shirt",
    price: 799,
    image: "https://rukminim2.flixcart.com/image/450/700/xif0q/t-shirt/8/h/p/xl-half-triangel-black-one-nb-nicky-boy-original-imagm9gxgyhz4k63.jpeg?q=90&crop=false"
  }
  

];




let cart = [];

function displayProducts() {
  const productList = document.getElementById("product-list");
  // const productList1 = document.getElementById("product-list1");
  // productList1.innerHTML = "";
  productList.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `

      <div class="product-card">
         <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>Price: ₹${product.price}</p>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
    `;
    productList.appendChild(div);
  });
  
}

 displayProducts();

  function addToCart(id) {
      const product = products.find(p => p.id === id);
      cart.push(product);
      updateCart();
    }

    function deleteFromCart(index) {
      cart.splice(index, 1);
      updateCart();
    }

    function updateCart() {
      const cartList = document.getElementById('cart-list');
      const totalSpan = document.getElementById('total');
      cartList.innerHTML = '';
      let total = 0;

      cart.forEach((item, index) => {
        total += item.price;
        cartList.innerHTML += `
          <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>₹${item.price}</p>
            <button class="btn delete-btn" onclick="deleteFromCart(${index})">Delete</button>
          </div>
        `;
      });

      totalSpan.textContent = total;
    }
