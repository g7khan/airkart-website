

const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
    // Toggle the 'open' class on the nav-links container
    navLinks.classList.toggle('open');
});




// slider image

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Handle wrap around
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Update slider position
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the slider
showSlide(currentSlide);














// for products

let cartItems = [];
let totalAmount = 0;

// Function to add items to the cart
function addToCart(id, name, price) {
    const item = { id, name, price };
    cartItems.push(item);
    updateCart();
    updateCartCount();
    alert(`${name} has been added to your cart.`);
}

// Function to update the cart UI
function updateCart() {
    const cartList = document.getElementById('cartItems');
    cartList.innerHTML = '';
    totalAmount = 0;
    
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        totalAmount += item.price;
    });
    
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

// Function to update the cart count in the navbar
function updateCartCount() {
    document.getElementById('cartCount').textContent = cartItems.length;
}

// Function to handle the checkout process
function checkout() {
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert(`Thank you for your purchase! Total: $${totalAmount.toFixed(2)}`);
    cartItems = [];
    updateCart();
    updateCartCount();
    closeCart();
}

// Function to open the cart modal
document.getElementById('cartButton').addEventListener('click', () => {
    document.getElementById('cartModal').style.display = 'flex';
});

// Function to close the cart modal
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}




