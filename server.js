require('dotenv').config({ path: './src/config/.env' });
const express = require('express');
const app = express();
const mysql = require('mysql2');
const Router = require('./src/routes/webRouting');
const dbConnection = require('./src/config/dbConfiguration');
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 8080;


// ROUTING
app.use('/', Router);

//CHECK CONNECTION

// CONNECT SERVER PORT
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});








