const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5050;

// Serve static files
app.use(express.static('public'));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 