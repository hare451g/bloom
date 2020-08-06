// setup dotenv
require('dotenv').config();

// imports
const createService = require('./src/services');

// get port
const port = process.env.PORT || 4001;

// initialize service
const service = createService();

// listen to service
service.listen(port, () => {
  console.log(`🏵️ Bloom started at ${port}`);
});
