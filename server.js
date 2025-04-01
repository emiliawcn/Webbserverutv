const express = require('express'); // Ensure Express is required
const app = express(); // Create the Express app instance

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB!");
}).catch((err) => {
    console.error("Error connecting to MongoDB", err);
});


const path = require('path');

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
