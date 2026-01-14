const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health / Hello endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
    success: true,
  });
});

// Create user endpoint
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Name is required",
    });
  }

  const newUser = {
    id: Math.floor(Math.random() * 10000),
    name,
  };

  res.status(201).json({
    success: true,
    user: newUser,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
