const express = require('express');
const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Sample data to be passed to the template
const users = [
    { name: 'John', age: 25, email: 'john@example.com', active: true },
    { name: 'Jane', age: 30, email: 'jane@example.com', active: false },
    { name: 'Bob', age: 35, email: 'bob@example.com', active: true }
];

// Route to render the Pug template
app.get('/', (req, res) => {
    res.render('index-pug', {
        title: 'Home Page',
        message: 'Welcome to the Pug !',
        users: users
    });
});

app.get('/about', (req, res) => {
    res.render('about-pug', {
        title: 'About Page',
        message: 'This is the about page of the Pug example.',
        year: new Date().getFullYear()
    });
});

// Start the server
app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});