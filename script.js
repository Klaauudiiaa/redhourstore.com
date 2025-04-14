const products = [
  // Necklaces
  {
    id: 1,
    name: "Gold Heart Necklace",
    price: 129.99,
    category: "Necklace",
    image: "https://images.unsplash.com/photo-1600185365483-26d7dc4b8b6f?fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Pearl Pendant",
    price: 99.99,
    category: "Necklace",
    image: "https://images.unsplash.com/photo-1596451167085-d8426e70a00e?fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Crystal Choker",
    price: 59.99,
    category: "Necklace",
    image: "https://images.unsplash.com/photo-1628459003602-f51457b2d4e5?fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Silver Chain Necklace",
    price: 79.99,
    category: "Necklace",
    image: "https://images.unsplash.com/photo-1612225335159-7d0b0b9f59ec?fit=crop&w=400&q=80"
  },
  {
    id: 5,
    name: "Rose Gold Coin Necklace",
    price: 109.99,
    category: "Necklace",
    image: "https://images.unsplash.com/photo-1628458850390-bef02479f706?fit=crop&w=400&q=80"
  },

  // Earrings
  {
    id: 6,
    name: "Diamond Stud Earrings",
    price: 199.99,
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1620641788421-8f3f4f197b53?fit=crop&w=400&q=80"
  },
  {
    id: 7,
    name: "Gold Hoop Earrings",
    price: 89.99,
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1610623010410-b8cc3f7bb90f?fit=crop&w=400&q=80"
  },
  {
    id: 8,
    name: "Pearl Drop Earrings",
    price: 74.99,
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1571922959281-6f7a00d4c4b0?fit=crop&w=400&q=80"
  },
  {
    id: 9,
    name: "Emerald Studs",
    price: 149.99,
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1630644152093-6619d3e8e03c?fit=crop&w=400&q=80"
  },
  {
    id: 10,
    name: "Silver Twist Earrings",
    price: 64.99,
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1607298891451-79d13f38c845?fit=crop&w=400&q=80"
  },

  // Bracelets
  {
    id: 11,
    name: "Silver Charm Bracelet",
    price: 59.99,
    category: "Bracelet",
    image: "https://images.unsplash.com/photo-1605542432031-f87c39e6b92f?fit=crop&w=400&q=80"
  },
  {
    id: 12,
    name: "Leather Wrap Bracelet",
    price: 49.99,
    category: "Bracelet",
    image: "https://images.unsplash.com/photo-1589987601442-fd67c4f3c191?fit=crop&w=400&q=80"
  },
  {
    id: 13,
    name: "Gold Bangle Set",
    price: 129.99,
    category: "Bracelet",
    image: "https://images.unsplash.com/photo-1611666423647-9bb20b7b905f?fit=crop&w=400&q=80"
  },
  {
    id: 14,
    name: "Beaded Friendship Bracelet",
    price: 39.99,
    category: "Bracelet",
    image: "https://images.unsplash.com/photo-1567113463300-15e07dc1d3b4?fit=crop&w=400&q=80"
  },
  {
    id: 15,
    name: "Minimalist Gold Cuff",
    price: 69.99,
    category: "Bracelet",
    image: "https://images.unsplash.com/photo-1618401475927-1816f46b09f7?fit=crop&w=400&q=80"
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
