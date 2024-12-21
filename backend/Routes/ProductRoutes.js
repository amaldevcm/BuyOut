const express = require('express');
const db = require('../DB/Model/ProductModel');
const routes = express.routes();

routes.get('/', (req, res) => {
    console.log("Product routes works...");
});

module.exports = routes;