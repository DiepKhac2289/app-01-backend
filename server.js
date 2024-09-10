require('dotenv').config({ path: './src/config/.env' });
const express = require('express');
const app = express();
const Router = require('./src/routes/webRouting');
// const poolConnection = require('./src/config/dbConfiguration');
const configViewEngine = require('./src/config/configViewEngine');
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 8080;

// CONFIG REQUEST BODY (Để lấy được dữ liệu từ client)
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ROUTING
app.use('/', Router);

//CONFIG_VIEW_ENGINE
configViewEngine(app);

// CONNECT SERVER PORT
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
