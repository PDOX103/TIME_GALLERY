const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(express.json()); 
app.use("/api", router);
app.use(cookieParser());

// Default route
app.get("/", (req, res) => {
  res.json("<h1>Welcome to ecommerce app</h1>");
});


const PORT = process.env.PORT || 8080;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to db");
        console.log("Server is running on port", PORT);
    });
});
