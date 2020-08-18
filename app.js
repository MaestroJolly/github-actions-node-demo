'use strict';

require('dotenv').config();
const express =  require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3666;

const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => { res.json({ version: 1.0 }) });

app.listen(PORT, () => { console.log(`Application is listening to port: ${PORT}`) });


