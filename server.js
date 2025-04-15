const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname)); // Serve static files (e.g., index.html)

app.get('/', (req, res) => {
  res.send('Hello from Express!');
  console.log(res);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = app; // Export the app to use in tests
