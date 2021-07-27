'use strict';
const HTTP = require('http');

const HOSTNAME = '127.0.0.1',
    PORT = 3333;

const express = require('express'),
    app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});

const rootController = require('./routes/index'),
    ceosController = require('./routes/ceos');

app.use('/', rootController);
app.use('/ceos', ceosController);
