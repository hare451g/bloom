// imports
const express = require('express');
const bodyParser = require('body-parser');

// definitions
const port = process.env.PORT || 4001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`🏵️ Bloom started at ${port}`);
});
