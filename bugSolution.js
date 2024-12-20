const express = require('express');
const app = express();

// Properly configure express.json() with extended options
app.use(express.json({ limit: '50mb', extended: true })); //Increased limit and extended:true for larger payloads

app.post('/users', (req, res) => {
  // Now req.body should reliably contain the parsed JSON data
  const users = [];
  if (!req.body) {
    return res.status(400).json({ error: 'Invalid request body' });
  }
  const newUser = req.body; 
  users.push(newUser);
  res.status(201).json(newUser);
});

// ... other routes ...
app.listen(3000, () => console.log('Server listening on port 3000'));