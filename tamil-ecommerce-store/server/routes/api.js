const express = require('express');
const router = express.Router();
const productsData = require('../../src/data/products.json');

// Middleware to parse JSON bodies
router.use(express.json());

// API route to get all products
router.get('/products', (req, res) => {
    res.json(productsData);
});

// API route to get a specific product by ID
router.get('/products/:id', (req, res) => {
    const product = productsData.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
});

// API route for user login
router.post('/login', (req, res) => {
    const { username, password, address, phone } = req.body;
    // Here you would typically validate the user credentials and address/phone
    // For now, we'll just return a success message
    res.json({ message: 'User logged in successfully', user: { username, address, phone } });
});

// API route for admin login
router.post('/admin/login', (req, res) => {
    const { adminUsername, adminPassword } = req.body;
    // Validate admin credentials
    // For now, we'll just return a success message
    res.json({ message: 'Admin logged in successfully', admin: { adminUsername } });
});

// Export the router
module.exports = router;