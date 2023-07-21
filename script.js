// Function to handle adding a product to the cart
function addToCart(productName) {
    // Retrieve the cart items from local storage (if any)
    let cartItems = localStorage.getItem('cartItems');
    
    // If there are no items in the cart, initialize an empty array
    if (!cartItems) {
      cartItems = [];
    } else {
      // Parse the existing cart items from JSON
      cartItems = JSON.parse(cartItems);
    }
    
    // Add the new product to the cart
    cartItems.push(productName);
    
    // Store the updated cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Display a success message
    alert('Product added to cart!');
  }
  
  // Retrieve the "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll('.product button');
  
  // Add click event listeners to the "Add to Cart" buttons
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.parentNode.querySelector('h3').textContent;
      addToCart(productName);
    });
  });
  