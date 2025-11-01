// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize event listeners for user interactions
    setupEventListeners();
});

function setupEventListeners() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleUserLogin);
    }

    const adminLoginForm = document.getElementById('admin-login-form');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', handleAdminLogin);
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

function handleUserLogin(event) {
    event.preventDefault();
    const address = document.getElementById('address').value;
    const phoneNumber = document.getElementById('phone-number').value;
    // Perform login logic here (e.g., API call)
    console.log('User logged in with address:', address, 'and phone number:', phoneNumber);
}

function handleAdminLogin(event) {
    event.preventDefault();
    const adminUsername = document.getElementById('admin-username').value;
    const adminPassword = document.getElementById('admin-password').value;
    // Perform admin login logic here (e.g., API call)
    console.log('Admin logged in with username:', adminUsername);
}

function addToCart(event) {
    const productId = event.target.dataset.productId;
    // Logic to add the product to the cart
    console.log('Product added to cart:', productId);
}

/*
 Replace or create this file. It provides:
 - bilingual labels (EN/TA)
 - single login form
 - admin detection (mock list) and role-based flow
*/

const translations = {
  en: {
    title: "Login",
    email: "Email:",
    password: "Password:",
    address: "Address:",
    phone: "Phone:",
    submit: "Sign in",
    userWelcome: "Logged in as user. Redirecting to shop...",
    adminWelcome: "Logged in as admin. Redirecting to admin panel...",
    invalid: "Please fill required fields.",
    invalidAdmin: "Invalid admin credentials."
  },
  ta: {
    title: "உள்நுழைவு",
    email: "மின்னஞ்சல்:",
    password: "கடவுச்சொல்:",
    address: "முகவரி:",
    phone: "தொலைபேசி:",
    submit: "உள்நுழையவும்",
    userWelcome: "பயனர் ஆக உள்நுழைந்தது. கடைக்கு மாற்றப்படுகிறது...",
    adminWelcome: "அதிகாரியாக உள்நுழைந்தது. நிர்வாகப் பக்கத்துக்கு செல்லப்படுகிறது...",
    invalid: "தேவையான புலங்களை நிரப்பவும்.",
    invalidAdmin: "அதிகாரி ஏற்கப்படவில்லை."
  }
};

// Mock admin list for demo. In real app, check via server API.
const ADMIN_EMAILS = ["admin@example.com", "owner@store.local"];

const els = {
  langEn: document.getElementById("lang-en"),
  langTa: document.getElementById("lang-ta"),
  title: document.getElementById("title"),
  labelEmail: document.getElementById("label-email"),
  labelPassword: document.getElementById("label-password"),
  labelAddress: document.getElementById("label-address"),
  labelPhone: document.getElementById("label-phone"),
  submitBtn: document.getElementById("submitBtn"),
  loginForm: document.getElementById("loginForm"),
  userExtra: document.getElementById("userExtra"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  address: document.getElementById("address"),
  phone: document.getElementById("phone"),
  msg: document.getElementById("msg")
};

let currentLang = "en";

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  els.title.textContent = t.title;
  els.labelEmail.textContent = t.email;
  els.labelPassword.textContent = t.password;
  els.labelAddress.textContent = t.address;
  els.labelPhone.textContent = t.phone;
  els.submitBtn.textContent = t.submit;
  els.msg.textContent = "";
}

els.langEn.addEventListener("click", () => applyLang("en"));
els.langTa.addEventListener("click", () => applyLang("ta"));

// Show/hide extra fields based on email -> if admin email, hide extras
els.email.addEventListener("input", () => {
  const val = (els.email.value || "").trim().toLowerCase();
  const isAdmin = ADMIN_EMAILS.includes(val);
  els.userExtra.style.display = isAdmin ? "none" : "block";
});

// handle submit
els.loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = (els.email.value || "").trim().toLowerCase();
  const pwd = (els.password.value || "").trim();

  if (!emailVal || !pwd) {
    els.msg.textContent = translations[currentLang].invalid;
    return;
  }

  const isAdmin = ADMIN_EMAILS.includes(emailVal);

  if (isAdmin) {
    // Mock admin check: accept any password for listed admins in demo,
    // or enforce a simple password check here.
    // For production, validate via secure server API.
    // Example simple check (uncomment to enforce): if (pwd !== 'adminpass') { ... }
    els.msg.textContent = translations[currentLang].adminWelcome;
    setTimeout(() => {
      // redirect to admin UI (existing admin.html)
      window.location.href = "admin.html";
    }, 900);
    return;
  }

  // user flow - require address & phone
  const addr = (els.address.value || "").trim();
  const phone = (els.phone.value || "").trim();
  if (!addr || !phone) {
    els.msg.textContent = translations[currentLang].invalid;
    return;
  }

  // For demo: store user info locally then go to products page
  const user = { email: emailVal, address: addr, phone };
  try { localStorage.setItem("user", JSON.stringify(user)); } catch (err) { /* ignore */ }

  els.msg.textContent = translations[currentLang].userWelcome;
  setTimeout(() => {
    window.location.href = "products.html";
  }, 900);
});

// initialize
applyLang("en");