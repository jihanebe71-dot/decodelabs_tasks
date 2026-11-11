
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const User = require("./models/User");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Project 4 Users API",
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
        const { id } = req.params;

        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ error: "Invalid user ID" });
        }

        const updatedUser = await User.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            message: "User updated successfully",
            user: updatedUser
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE - Delete user
app.delete("/api/users/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ error: "Invalid user ID" });
        }

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            message: "User deleted successfully",
            user: deletedUser
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Connect MongoDB and start server
const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error.message);
    }
};

startServer();
