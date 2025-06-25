const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./Routes/task.route');

// app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const contentType = req.headers['content-type'] || '';
  
  if (contentType.startsWith('multipart/form-data')) {
    // Let multer handle file parsing
    return next();
  }

  // Safely apply both JSON and URL-encoded parsers
  express.json()(req, res, (err) => {
    if (err) return next(err);
    express.urlencoded({ extended: true })(req, res, next);
  });
});






app.use('/task',routes);

module.exports = app;