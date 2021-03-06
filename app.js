// dependencies

const express = require('express');
const bodyParser = require('body-parser');

// create the express app
var app = express();

// database connection
require('./configs/database');

// configure the body-parser to accept urlencoded bodies and json data
//app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json());

// app.use('/', require('./routes/index'));
// register all routers, all routes are prefixed with /api
app.use('/api', require('./routes/topics'));
// set the port
app.listen(3000);
