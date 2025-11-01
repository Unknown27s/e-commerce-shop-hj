# Tamil E-commerce Store

Welcome to the Tamil E-commerce Store project! This project is designed to provide a modern and user-friendly e-commerce platform tailored for Tamil-speaking users. Below you will find an overview of the project structure, features, and setup instructions.

## Project Structure

```
tamil-ecommerce-store
├── src
│   ├── index.html              # Main entry point of the website
│   ├── login.html              # User login form (collects address & phone)
│   ├── admin.html              # Admin login & customization UI
│   ├── products.html           # Displays available products
│   ├── cart.html               # User's shopping cart
│   ├── account.html            # User account management
│   ├── css
│   │   └── styles.css          # CSS styles for the website
│   ├── js
│   │   ├── main.js             # Main JavaScript functionality
│   │   ├── animations.js       # JavaScript for animations
│   │   └── api-client.js       # API integration client
│   ├── components
│   │   ├── header.html         # Header component
│   │   └── footer.html         # Footer component
│   ├── data
│   │   └── products.json       # Product data in JSON format
│   └── locales
│       └── ta.json            # Tamil locale strings
├── server
│   ├── server.js               # Optional local API server / mock
│   └── routes
│       └── api.js              # API routes for the local server
├── admin
│   ├── customizations.json     # Theme / layout settings for admin
│   └── scripts
│       └── admin-ui.js         # JavaScript for admin UI
├── package.json                # npm configuration file
├── .gitignore                  # Files to ignore by version control
└── README.md                   # Project documentation
```

## Features

- **User Login**: A secure login form that collects user credentials, address, and phone number.
- **Admin Interface**: An admin login page with options to customize the store's appearance and manage products.
- **Product Listings**: A dedicated page to display all available products with detailed information.
- **Shopping Cart**: Users can add products to their cart, review their selections, and proceed to checkout.
- **Account Management**: Users can manage their account details and view their order history.
- **Responsive Design**: The website is designed to be modern and visually appealing, ensuring a great user experience on all devices.
- **Localization**: Support for Tamil language through locale strings.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd tamil-ecommerce-store
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Local Server** (if applicable):
   ```bash
   node server/server.js
   ```

4. **Open the Application**:
   Open `src/index.html` in your web browser to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.