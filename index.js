const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 8000;

const router = require('./routes/controller')

// Enable CORS for all origins (for development)
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use('/api', router);

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;