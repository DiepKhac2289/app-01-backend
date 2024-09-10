require('dotenv').config();
const mysql = require('mysql2');

const poolConnection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
});

poolConnection.query(function (error, results, fields){
    if(error){
        throw error;
    }else{
        console.log('Database connected successfully!');
    }
    
    
})




module.exports = poolConnection;























// pool.connect((err) => {
//     if(err){
//         console.log(`${new Date().toTimeString()} Data connection has been lost. Please check the connection!\n`);
//         console.log('ERROR: \n', err.stack);
//         return;
//     }else{
//         console.log(`${new Date().toTimeString()} DataBase connection is sucessfull!`);
//     }
// })

// module.exports = connection;
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     port: process.env.DB_PORT,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
// });

// connection.connect((err) => {
//     if (err) {
//         console.log(`${new Date().toISOString()} Data connection has been lost. Please verify your connection and try again!`);
//         console.error('Error connecting:', err.stack);
//         return;
//     }
// });

// const dbConnectionState = () => {
//     connection.ping(function (err) {
//         if (err){
//             console.log(`${new Date().toISOString()} Data connection has been lost. Please verify your connection and try again!\n`);
//             console.error('ERROR DETAILS:\n', err.stack);
//             console.error('\n\n');
//         }else{
//             console.log(`${new Date().toISOString()} DataBase connection is still alive!`);
//         }
//       });
// };

// setInterval(dbConnectionState, 2000);
