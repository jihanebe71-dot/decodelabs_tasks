# Users API – Project 3

## Description
Users API is a RESTful API developed with Node.js, Express.js, MongoDB, and Mongoose.

It allows users to be created, displayed, updated, and deleted from a MongoDB database.

## Technologies
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone the repository:
```bash
git clone https://github.com/jihanebe71-dot/decodelabs_tasks.git
```

2. Navigate to the project folder:
```bash
cd Project-3/Users-API
```

3. Install dependencies:
```bash
npm install
```

4. Configure your MongoDB connection in `config/db.js`.

5. Start the server:
```bash
node server.js
```

The server runs at:
`http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Welcome message |
| GET | `/api/users` | Get all users |
| POST | `/api/users` | Create a user |
| PUT | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Delete a user |

## Example – Create a User

**POST** `/api/users`

```json
{
  "name": "Sara",
  "email": "sara@gmail.com"
}
```

## Validation
- Name and email are required.
- Email address must be valid.
- A 404 error is returned if the user does not exist.

## Author
Jihane Belfarah

## Project
DecodeLabs – Week 3 Project