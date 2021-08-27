const express = require('express');
require('express-async-errors');

const routes = require('./routes');
const cors = require('./middlewares/cors');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3000, () => console.log('API started at http://localhost:3000'));
