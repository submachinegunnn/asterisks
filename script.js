// You can use JavaScript to fetch product data from an API or hardcoded data

// Example of creating a product card dynamically
const productsContainer = document.querySelector('.products-container');

// Example product data (replace this with your actual data)
const products = [
  { name: 'Product 1', price: '$19.99', image: 'product1.jpg' },
  { name: 'Product 2', price: '$29.99', image: 'product2.jpg' },
  // Add more product objects as needed
];

// Loop through the products and create product cards
products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button>Add to Cart</button>
  `;
  productsContainer.appendChild(productCard);
});
