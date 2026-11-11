
const express = require("express");
const connectDB = require("./config/db");
const User = require("./models/User");

const app = express();
const PORT = 3000;

app.use(express.json());

// Welcome
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Users API",
        status: "API is running"
    });
});

// GET - Get all users
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET - Get user by ID
app.get("/api/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: "Invalid user ID" });
    }
});

// POST - Create user
app.post("/api/users", async (req, res) => {
    try {
        const { name, email } = req.body;

        const newUser = await User.create({ name, email });

        res.status(201).json({
            message: "User created successfully",
            user: newUser
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// PUT - Update user
app.put("/api/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            message: "User updated successfully",
            user
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE - Delete user
app.delete("/api/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            message: "User deleted successfully",
            user
        });
    } catch (error) {
        res.status(400).json({ error: "Invalid user ID" });
    }
});

// Start server after connecting to MongoDB
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    });
