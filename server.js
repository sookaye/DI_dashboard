const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 9090;

// Parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('client')); // Serve static files from the current directory

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});
// Handle POST request when the form is submitted
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Print the submitted data to the console
  console.log('Username:', username);
  console.log('Password:', password);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
