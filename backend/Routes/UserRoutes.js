const express = require('express');
const db = require('../DB/Model/UserModel');
const routes = express.routes();

routes.get('/', (req, res) => {
    console.log("User route works...");
});

module.exports = routes;