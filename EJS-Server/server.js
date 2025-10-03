const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views'); // Directory for template files

// Sample data
const users = [
    { name: 'John', age: 25, email: 'john@example.com' },
    { name: 'Jane', age: 30, email: 'jane@example.com' },
    { name: 'Bob', age: 35, email: 'bob@example.com' }
];

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home Page',
        message: 'Welcome to EJS!',
        users: users
    });
});

app.get('/user/:name', (req, res) => {
    const user = users.find(u => u.name === req.params.name);
    res.render('profile', { user: user });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});