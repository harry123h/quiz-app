const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// Serve all static files (CSS, JS, images) from "repq"
app.use(express.static(path.join(__dirname, 'repq')));

// Serve HTML files directly by name
app.get('/:page', (req, res) => {
  const page = req.params.page;
  res.sendFile(path.join(__dirname, 'repq', page));
});

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'repq', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});