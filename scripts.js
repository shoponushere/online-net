<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shop | Online Store</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <style>
    .product-image {
      max-width: 100%;
      height: auto;
      max-height: 300px;
    }
  </style>
</head>
<body>

  <!-- Header -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">Online Store</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link active" href="shop.html">Shop</a></li>
            <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
            <li class="nav-item"><a class="nav-link" href="faq.html">FAQ</a></li>
            <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
            <li class="nav-item"><a class="nav-link" href="cart.html">Cart (<span id="cart-count">0</span>)</a></li>
            <li class="nav-item"><a class="nav-link" href="checkout.html">Checkout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <!-- Shop Section -->
  <main class="py-5">
    <div class="container">
      <h1 class="text-center mb-4">Our Products</h1>
      <div class="row g-4">
        <!-- Product Row 1 -->
        <div class="col-md-4">
          <div class="card">
            <img src="images/wireless-earbuds.jpg" class="card-img-top product-image" alt="Wireless Earbuds">
            <div class="card-body">
              <h5 class="card-title">Wireless Earbuds</h5>
              <p class="card-text">$29.99</p>
              <button class="btn btn-primary add-to-cart" data-name="Wireless Earbuds" data-price="29.99">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="images/smartphone.jpg" class="card-img-top product-image" alt="Smartphone">
            <div class="card-body">
              <h5 class="card-title">Smartphone</h5>
              <p class="card-text">$499.99</p>
              <button class="btn btn-primary add-to-cart" data-name="Smartphone" data-price="499.99">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="images/gaming-laptop.jpg" class="card-img-top product-image" alt="Gaming Laptop">
            <div class="card-body">
              <h5 class="card-title">Gaming Laptop</h5>
              <p class="card-text">$999.99</p>
              <button class="btn btn-primary add-to-cart" data-name="Gaming Laptop" data-price="999.99">Add to Cart</button>
            </div>
          </div>
        </div>

        <!-- Product Row 2 -->
        <div class="col-md-4">
          <div class="card">
            <img src="images/bluetooth-speaker.jpg" class="card-img-top product-image" alt="Bluetooth Speaker">
            <div class="card-body">
              <h5 class="card-title">Bluetooth Speaker</h5>
              <p class="card-text">$39.99</p>
              <button class="btn btn-primary add-to-cart" data-name="Bluetooth Speaker" data-price="39.99">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="images/smartwatch.jpg" class="card-img-top product-image" alt="Smartwatch">
            <div class="card-body">
              <h5 class="card-title">Smartwatch</h5>
              <p class="card-text">$199.99</p>
              <button class="btn btn-primary add-to-cart" data-name="Smartwatch" data-price="199.99">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="images/extra-virgin-olive-oil.jpg" class="card-img-top product-image" alt="Extra Virgin Olive Oil">
            <div class="card-body">
              <h5 class="card-title">Extra Virgin Olive Oil</h5>
              <p class="card-text">$19.99</p>
              <button class="btn btn-primary add-to-cart" data-name="Extra Virgin Olive Oil" data-price="19.99">Add to Cart</button>
            </div>
          </div>
        </div>

        <!-- Product Row 3 -->
        <div class="col-md-12 d-flex justify-content-center">
          <div class="card">
            <img src="images/organic-olive-oil.jpg" class="card-img-top product-image" alt="Organic Olive Oil">
            <div class="card-body">
              <h5 class="card-title">Organic Olive Oil</h5>
              <p class="card-text">$24.99</p>
              <button class="btn btn-primary add-to-cart" data-name="Organic Olive Oil" data-price="24.99">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-light py-3">
    <div class="container text-center">
      <p>&copy; 2024 Online Store. All Rights Reserved.</p>
    </div>
  </footer>

  <script>
    // Store cart items in local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to update cart count in navbar
    function updateCartCount() {
      const cartCount = cart.length;
      document.getElementById('cart-count').textContent = cartCount;
    }

    // Event listener for adding items to cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
        const productName = this.getAttribute('data-name');
        const productPrice = parseFloat(this.getAttribute('data-price'));

        // Add product to cart
        cart.push({ name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update cart count
        updateCartCount();

        // Optionally show a message or notification
        alert(`${productName} has been added to your cart.`);
      });
    });

    // Initial cart count update
    updateCartCount();
  </script>

</body>
</html>
