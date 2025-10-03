const express = require('express');
const { engine } = require('express-handlebars');
const app = express();

// Configure Handlebars
app.engine('handlebars', engine({
    defaultLayout: 'main',
    helpers: {
        // Custom helper functions
        uppercase: (str) => str.toUpperCase(),
        formatDate: (date) => new Date(date).toLocaleDateString()
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

const products = [
    { name: 'Laptop', price: 999, inStock: true },
    { name: 'Phone', price: 599, inStock: true },
    { name: 'Tablet', price: 399, inStock: false }
];

app.get('/', (req, res) => {
    res.render('home', { 
        title: 'Product Store',
        products: products,
        showDiscount: true
    });
});

app.listen(3002, () => {
    console.log('Handlebars server on http://localhost:3002');
});