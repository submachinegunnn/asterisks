const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
  { id: 2, name: 'Product 2', price: 29.99, image: 'product2.jpg' },
];

let cartItems = [];

function addToCart(productId) {
  const productToAdd = products.find(product => product.id === productId);
  if (productToAdd) {
    cartItems.push(productToAdd);
    updateCart();
  } else {
    console.error('Product not found.');
  }
}

function updateCart() {
  const cartContainer = document.querySelector('.cart-container');
  const cartTotal = document.querySelector('.cart-total');

  cartContainer.innerHTML = ''; // Clear the previous items

  let totalPrice = 0;

  cartItems.forEach(item => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
    cartItemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-details">
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    `;
    cartContainer.appendChild(cartItemDiv);
    totalPrice += item.price;
  });

  cartTotal.innerHTML = `<h3>Total: $${totalPrice.toFixed(2)}</h3>`;
}

function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.id !== productId);
  updateCart();
}

addToCart(1);
