require('dotenv').config({ path: './src/config/.env' });
const express = require('express'); // Thêm dòng này nếu chưa có
const app = express();
const Router = require('./src/routes/webRouting');

// Routing
app.use('/', Router);




// ENV & SERVER PORT
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 8080;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
