const products = [
  {
    id: 1,
    name: "Cool T-Shirt",
    price: 19.99,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Sneakers",
    price: 49.99,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    name: "Backpack",
    price: 39.99,
    image: "https://via.placeholder.com/200"
  }
];

let cartCount = 0;

const productList = document.getElementById('product-list');
const cartCountElement = document.getElementById('cart-count');

function addToCart(product) {
  cartCount++;
  cartCountElement.innerText = cartCount;
  alert(`Added ${product.name} to cart!`);
}

function displayProducts() {
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

displayProducts();
