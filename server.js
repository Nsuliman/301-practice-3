'use strict';

// Dependencies
require('dotenv').config();

let express = require('express');

let cors = require('cors');

let PORT = process.env.PORT || 3000;

let server = express();

server.use(cors());

// Main Routes





server.listen(PORT , ()=> console.log(`Listens on port ${PORT}`));