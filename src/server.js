// console.log("Hello")

// const express = require("express")
// const app = express()

// app.get('/', (req, res) => {
//     console.log("Here")
//     res.status(500).send('Huuu')
// })

// app.listen(3000)



const http = require('http');
const app = require('./app');

const port = 3000;
// const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Connected to port ${port}`)
});