const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');

// Create Express app
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
const uri = "mongodb+srv://ankitraj980533:ankitraj@cluster0.yicpe.mongodb.net";
// Routes
app.use('/api/data', dataRoutes);

// Start server
app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database connected'))
.catch(err => console.log('Database connection error:', err));
