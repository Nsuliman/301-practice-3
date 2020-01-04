'use strict';

// Dependencies
require('dotenv').config();

let express = require('express');

let cors = require('cors');

let PORT = process.env.PORT || 3000;

let server = express();

server.use(cors());

// Main Routes

// Home Page Route 
server.get('/', (req,res) => 
{
    res.status(200).send('Home Page');
});

// Data Route 
const object = { "Name" :'Nawal Suliman', "age" : 31 , "Specialization" : " Computer Engineering "};

server.get('/data', (req,res)=>
{
    res.status(200).json(object);
});

//Error Route 
server.use('*', (req,res) =>
{
    res.status(404).send('Not Found');
});

server.listen(PORT , ()=> console.log(`Listens on port ${PORT}`));