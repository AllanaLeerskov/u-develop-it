const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your mysql username
        user: 'root',
        //your mysql password
        password: 'Family09!1',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

//get route
    // app.get('/', (req, res) => {
    //     res.json({
    //         message: 'Hello World'
    //     });
    // });

//return data from candidates table
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

//default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

//start express server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});