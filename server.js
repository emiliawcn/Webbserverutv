// Import required modules
const express = require('express'); // Ensure Express is required
const mongoose = require('mongoose'); // Declare mongoose only once!
const path = require('path'); // Import path for serving static files

// Initialize the Express app
const app = express(); 

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB!");
}).catch((err) => {
    console.error("Error connecting to MongoDB", err);
});

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a Visitor schema
const visitorSchema = new mongoose.Schema({
    ipAddress: { type: String, unique: true },
    timestamp: { type: Date, default: Date.now }
});
const Visitor = mongoose.model('Visitor', visitorSchema);

// Define a Test schema
const testSchema = new mongoose.Schema({
    name: String,
    timestamp: { type: Date, default: Date.now }
});
const Test = mongoose.model('Test', testSchema);

// Sample route to serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Add a test route to insert sample data into MongoDB
app.get('/add-test', async (req, res) => {
    const testDoc = new Test({ name: "Sample Entry" });
    await testDoc.save();
    res.send("Test document added to the database!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/get-tests', async (req, res) => {
    try {
        const testData = await Test.find(); // Hämta all testdata
        res.json(testData); // Skicka som JSON
    } catch (err) {
        res.status(500).json({ error: "Fel vid hämtning av data" });
    }
});

app.get('/add-test', async (req, res) => {
    const testDoc = new Test({ name: "Test Entry" });
    await testDoc.save();
    res.send("Test dokument har lagts till!");
});

