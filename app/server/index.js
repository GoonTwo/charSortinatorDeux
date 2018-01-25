const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client')));
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
