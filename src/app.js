const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv')
  .config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet({
  crossOriginResourcePolicy: false,
}));
app.use(cors());
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

app.use(express.static('public'));
app.use('/images', express.static('./images'));

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
