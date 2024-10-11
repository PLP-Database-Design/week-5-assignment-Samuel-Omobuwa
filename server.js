const express = require('express');
const http = require('http')
const app = express()
const mysql = require('mysql2')
const dotenv = require('dotenv');


app.use(express.json());
dotenv.config();

// Connecting to the database

const db = mysql.createConnection
({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

})

// Checking if database connection is successful

db.connect((err) => {
    if (err) return console.log('Connection not successful' + err.stack);
    console.log('Database connected successfully as id:', db.threadId);
    
    
})

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set response status code to ok
    res.statusCode = 200;
    // Set response content type
    res.setHeader('Content-Type', 'text/plain');  
})

   
// Check query to check connection
const selectQuery = 'SELECT * FROM patients';

connection.query(selectQuery, (err, results) => {
    if (err) throw err;
        console.log('Data fetched', results);
    
    // send query result as response
    res.end(`Database query successful: ${JSON.stringify(results)}`)
})

// Question 1





// listen to the server

server.listen(process.env.PORT, () => {
 console.log(`server is running on http://localhost:${process.env.PORT}`);
 
})