
const API_URL = "http://localhost:3000/api/users";

const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const usersList = document.getElementById("usersList");

// GET - Get all users
async function getUsers() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        const users = Array.isArray(data)
            ? data
            : data.users || data.value || [];

        displayUsers(users);

    } catch (error) {
        usersList.textContent = "Error: " + error.message;
    }
}

// Display users
function displayUsers(users) {
    usersList.innerHTML = "";

    if (users.length === 0) {
        usersList.textContent = "No users found.";
        return;
    }

    users.forEach(user => {
        const card = document.createElement("div");
        card.style.padding = "15px";
        card.style.marginBottom = "10px";
        card.style.border = "1px solid #ddd";
        card.style.borderRadius = "8px";

        const name = document.createElement("h3");
        name.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = user.email;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.marginLeft = "10px";
        deleteButton.style.background = "#dc3545";

        editButton.addEventListener("click", () => editUser(user));
        deleteButton.addEventListener("click", () => deleteUser(user._id));

        card.append(name, email, editButton, deleteButton);
        usersList.appendChild(card);
    });
}

// POST - Add user
userForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Failed to add user");
        }

        userForm.reset();
        getUsers();

    } catch (error) {
        alert(error.message);
    }
});

// PUT - Update user
async function editUser(user) {
    const name = prompt("Enter new name:", user.name);

    if (name === null || !name.trim()) return;

    const email = prompt("Enter new email:", user.email);

    if (email === null || !email.trim()) return;

    try {
        const response = await fetch(`${API_URL}/${user._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name.trim(),
                email: email.trim()
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Failed to update user");
        }

        getUsers();

    } catch (error) {
        alert(error.message);
    }
}

// DELETE - Delete user
async function deleteUser(id) {
    if (!confirm("Are you sure you want to delete this user?")) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Failed to delete user");
        }

        getUsers();

    } catch (error) {
        alert(error.message);
    }
}

// Load users when page opens
getUsers();

