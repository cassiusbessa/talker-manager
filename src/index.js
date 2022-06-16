const express = require('express');
const bodyParser = require('body-parser');
// const rescue = require('express-rescue');
const router = require('../routes/router');

const app = express();
const HTTP_OK_STATUS = 200;

app.use(bodyParser.json());

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});