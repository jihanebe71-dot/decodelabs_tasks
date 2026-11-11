
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    { id: 1, name: "Jihane", email: "jihane@gmail.com" },
    { id: 2, name: "Imane", email: "imane@gmail.com" }
];

// GET - Welcome
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Users API",
        status: "API is running"
    });
});

// GET - All users
app.get("/api/users", (req, res) => {
    res.status(200).json(users);
});

// POST - Create user
app.post("/api/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: "Name and email are required"
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            error: "Invalid email address"
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
});

// PUT - Update user
app.put("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    if (!name || !email) {
        return res.status(400).json({
            error: "Name and email are required"
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            error: "Invalid email address"
        });
    }

    user.name = name;
    user.email = email;

    res.status(200).json({
        message: "User updated successfully",
        user
    });
});

// DELETE - Delete user
app.delete("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    const deletedUser = users.splice(index, 1);

    res.status(200).json({
        message: "User deleted successfully",
        user: deletedUser[0]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
