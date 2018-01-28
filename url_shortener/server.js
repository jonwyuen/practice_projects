const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const urlStore = {};

// Express config
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Routes
app.get('/', function (req, res) {
  res.render('index');
});

app.post('/create', function createShortenedURL(req, res) {
  let originalUrl = req.body.url;
  let shortenedUrl = '';

  res.render('index');
});

app.get('/:urlAlias', function redirectToOriginalURL(req, res) {
  // GET http://127.0.0.1/<url_alias>
  //  => http://example.org/original/url

  res.status(200).send('TODO: Implement me');
});

// Start server
app.listen(3000, function () {
  console.log('Listening on port 3000.');
});
