const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Dummy user data
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid username or password');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // You can perform validation here

    // For demo purposes, just display the values
    console.log("Username:", username);
    console.log("Password:", password);

    // Here you can add code to send the username and password to the server for validation
}
