const defaultProducts = [
  { title: "Wireless Earbuds", price: "1,299", description: "Crystal-clear sound with noise cancellation.", icon: "headphones" },
  { title: "Smartphone Tripod", price: "699", description: "Perfect for content creators.", icon: "camera" },
  { title: "Smartwatch", price: "2,499", description: "Track your fitness & stay connected.", icon: "stopwatch" },
  { title: "LED Desk Lamp", price: "499", description: "Brighten up your study sessions.", icon: "lightbulb" },
  { title: "Laptop Stand", price: "899", description: "Ergonomic stand for better posture.", icon: "laptop" },
  { title: "Game Controller", price: "2,199", description: "Compatible with PC and consoles.", icon: "gamepad" },
  { title: "Organizer Box", price: "349", description: "Keep your desk or wardrobe neat.", icon: "box" },
  { title: "Action Camera", price: "3,999", description: "Capture your adventures in HD.", icon: "video" },
  { title: "Power Bank 10000mAh", price: "799", description: "Charge on the go.", icon: "bolt" },
  { title: "Stylus Pen", price: "299", description: "Precise touch input for your tablet.", icon: "pen" },
  { title: "Travel Backpack", price: "1,499", description: "Spacious and stylish for all journeys.", icon: "suitcase-rolling" },
  { title: "Skincare Kit", price: "1,299", description: "Complete daily skincare essentials.", icon: "pump-soap" },
  { title: "Polarized Sunglasses", price: "899", description: "Stylish and protective.", icon: "glasses" },
  { title: "Stationery Combo", price: "349", description: "Notebooks, pens, and sticky notes.", icon: "pencil-alt" },
  { title: "Bluetooth Speaker", price: "999", description: "Portable music powerhouse.", icon: "volume-up" },
  { title: "Memory Foam Pillow", price: "799", description: "Sleep comfortably every night.", icon: "bed" },
  { title: "Coffee Mug Warmer", price: "599", description: "Keeps your drink warm longer.", icon: "mug-hot" },
  { title: "Luggage Trolley", price: "2,499", description: "Durable and travel-ready.", icon: "suitcase-rolling" },
  { title: "Hand Sanitizer Pack", price: "199", description: "Stay safe on the go.", icon: "pump-medical" },
  { title: "Ergonomic Chair", price: "4,999", description: "Comfortable seating for long hours.", icon: "chair" }
];



function renderDefaultProducts() {
  const resultArea = document.getElementById("result");
  resultArea.innerHTML = `<h3 class='heading'><center> Featured Products</center></h3><div class="row g-4">
    ${defaultProducts.map(p => `
      <div class="col-md-3 col-sm-6">
        <div class="product h-100 d-flex flex-column justify-content-between p-3 shadow-sm bg-white rounded">
          <div class="text-center d-flex flex-column justify-content-center align-items-center" style="height:200px;">
            <i class="fas fa-${p.icon}" style="font-size: 40px;"></i>
            <h5 id="title" class="mt-2">${p.title}</h5>
            <p class="mb-2">${p.description}</p>
          </div>
        <div class="mt-auto text-center">
          <p class="mb-2"><strong>Price:</strong><span id="price"> ₹${p.price}</span></p>
          <button class="wishlist-btn mt-auto" onclick="addToWishlist('${p.title}')">
            <i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Add to Wishlist
          </button>
        </div>
        </div>
      </div>
    `).join("")}
  </div>`;
}


// Run on page load
document.addEventListener("DOMContentLoaded", function () {
  renderDefaultProducts(); // Show featured products by default
});

let currentUser = null;
let isDark = false;

   const productDataByDream = {
  doctor: [
    { title: "Stethoscope", price: 1499, description: "Essential for every doctor.", icon: "fas fa-stethoscope" },
    { title: "Medical Books Set", price: 3499, description: "Complete guide to medical school.", icon: "fas fa-book-medical" }
  ],
  actor: [
    { title: "Acting Masterclass", price: 2999, description: "Train like a pro actor.", icon: "fas fa-theater-masks" },
    { title: "Script Journal", price: 399, description: "Draft your next blockbuster.", icon: "fas fa-book" }
  ],
  cricketer: [
    { title: "Pro Cricket Bat", price: 1999, description: "Dominate the pitch.", icon: "fas fa-baseball-bat-ball" }, // Closest available
    { title: "Practice Net", price: 1599, description: "Sharpen your skills.", icon: "fas fa-trophy" }
  ],
  scientist: [
    { title: "Science Lab Kit", price: 2899, description: "Explore your curiosity.", icon: "fas fa-vials" },
    { title: "Research Notebook", price: 299, description: "Document your innovations.", icon: "fas fa-book-open" }
  ]
};


  function register() {
      const usernameInput = document.getElementById("registerUsername");
      const passwordInput = document.getElementById("registerPassword");

      if (!usernameInput || !passwordInput) return;

      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (!username || !password) {
        return Swal.fire("Oops!", "Fill in both fields", "warning");
      }

      let users = JSON.parse(localStorage.getItem("users")) || [];

      if (users.find(u => u.username === username)) {
        return Swal.fire("Error", "User already exists", "error");
      }

      let hashed_password = btoa(password); // base64-encoded password
      users.push({ username, hashed_password });
      localStorage.setItem("users", JSON.stringify(users));

      Swal.fire("Success", "Registered successfully", "success");

      // Clear fields
      usernameInput.value = "";
      passwordInput.value = "";

      // Close modal (if Bootstrap 5 is used)
      const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
      if (registerModal) registerModal.hide();
    }

   function login() {
      const usernameInput = document.getElementById("loginUsername");
      const passwordInput = document.getElementById("loginPassword");

      if (!usernameInput || !passwordInput) return;

      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      let users = JSON.parse(localStorage.getItem("users")) || [];

      const valid = users.find(u => u.username === username && atob(u.hashed_password) === password);

      if (!valid) {
        return Swal.fire("Invalid", "Invalid credentials", "error");
      }

      currentUser = username;
      Swal.fire("Welcome", `Hello ${currentUser}, start dreaming!`, "success");

      // Hide Login Modal
      const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
      if (loginModal) loginModal.hide();

      // Show app section
      document.getElementById("dreamSearch").style.display = "block";
      document.getElementById("logoutBtn").style.display = "block";

      // Optionally clear inputs
      usernameInput.value = "";
      passwordInput.value = "";
    }


    // function logout() {
    //   currentUser = null;
    //   document.getElementById("loginSection").style.display="block";
    //   // document.getElementById("registerSection").style.display="none";
    //   document.getElementById("dreamSearch").style.display = "none";
    //   document.getElementById("logoutBtn").style.display = "none";
    //   document.getElementById("result").innerHTML = "";
    //   document.getElementById("wishlistDisplay").innerHTML = "";
    //   Swal.fire("Goodbye!", "Logged out successfully.", "info");
    // }

    function searchDream() {
      const input = document.getElementById("dreamInput").value.toLowerCase();
      const keywords = Object.keys(productDataByDream);
      Object.keys(productDataByDream);
      // keywords.find(k=>input.includes(k));
      const dreamKey = keywords.find(key => input.includes(key));

      const resultArea = document.getElementById("result");
      resultArea.innerHTML = "<p>Searching for your dream...</p>";

      setTimeout(() => {
        if (!dreamKey) {
          resultArea.innerHTML = `<p>❌ No relevant dream detected. Try using words like: ${keywords.join(", ")}</p>`;
          return;
        }

        const matchedProducts = productDataByDream[dreamKey];
        resultArea.innerHTML =  `<div class="row g-4">
        ${matchedProducts.map(p => `
           <div class="col-md-3 col-sm-6">
        <div class="product h-100 d-flex flex-column justify-content-between p-3 shadow-sm bg-white rounded">
          <div class="text-center">
            <i class="${p.icon}" style="font-size: 40px;"></i>
            <h5 id="title" class="mt-2">${p.title}</h5>
            <p class="mb-2">${p.description}</p>
          </div>
        <div class="mt-auto text-center">
          <p class="mb-2"><strong>Price:</strong><span id="price"> ₹${p.price}</span></p>
          <button class="wishlist-btn mt-auto" onclick="addToWishlist('${p.title}')">
            <i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;  o Wishlist
          </button>
        </div>
        </div>
      </div>
    `).join("")}
      </div>
    `;
      }, 800);
    }

    function addToWishlist(title) {
      let list = JSON.parse(localStorage.getItem(`wishlist_${currentUser}`)) || [];
      if (!list.includes(title)) {
        list.push(title);
        localStorage.setItem(`wishlist_${currentUser}`, JSON.stringify(list));
        Swal.fire("Added!", `'${title}' added to wishlist`, "success");
      } else {
        Swal.fire("Notice", "Already in wishlist", "info");
      }
    }

    function viewWishlist() {
      const list = JSON.parse(localStorage.getItem(`wishlist_${currentUser}`)) || [];
      const display = document.getElementById("wishlistDisplay");
      if (list.length === 0) return display.innerHTML = "<p>No items in wishlist.</p>";

      display.innerHTML = `<h3><i class='fas fa-shopping-cart'></i> Your Wishlist</h3><ul>` +
        list.map((item, idx) => `<li>${item} <button id='remove_wishlist' onclick="removeFromWishlist(${idx})"><i class='fas fa-cancel'></i> Remove</button></li>`).join("") +
        `</ul>`;
    }

    function removeFromWishlist(index) {
      let list = JSON.parse(localStorage.getItem(`wishlist_${currentUser}`)) || [];
      list.splice(index, 1);
      localStorage.setItem(`wishlist_${currentUser}`, JSON.stringify(list));
      viewWishlist();
      Swal.fire("Removed", "Item removed from wishlist", "warning");
    }

    function toggleTheme() {
      document.body.classList.toggle("dark-mode");
      isDark = !isDark;
      document.getElementById("themeBtn").innerHTML = isDark ? "<i class='fas fa-sun'></i>" : "<i class='fas fa-moon'></i>";
    }
    function showRegister()
    {
      document.getElementById("registerSection").style.display="block";
      document.getElementById("loginSection").style.display="none";
    }