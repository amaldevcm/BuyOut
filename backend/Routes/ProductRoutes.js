const express = require('express');
const db = require('../DB/Model/ProductModel');
const routes = express.Router();

routes.get('/', (req, res) => {
    const id = req.query.userId;
    if(id) {
        db.find({_id: id}).then(result => {
            res.send(result);
        }).catch(err => { res.status(404).send("Error in gettting product.") });
    } else {
        db.find({isAvailable: true}).then(result => {
            res.send(result);
        }).catch(err => { res.status(404).send("Error in getting products.") });
    }
})

routes.post('/', (req, res) => {
    if(req && req.body) {
        const data = req.body;
        data.isAvailable = true;
        data.createdDate = moment().toISOString();
        const newUser = new db(data);
        newUser.save().then((result) => {
            res.send("New product added...");
        }).catch(err => res.status(400).send("Invalid data..."));
    }
});

routes.put('/', (req, res) => {
    if(req && req.body) {
        const data = req.body;
        const id = data._id;
        if(id === null) {
            res.status(400).send("Param id not found");
            return;
        }
        data.updatedDate = moment().toISOString();
        db.updateOne({_id: id}, data).then((result) => {
            res.send("product updated successfully...");
        }).catch(err => res.status(400).send("Invalid data..."));
    }
});

routes.delete('/', (req, res) => {
    const id = req.query.id;
    console.log(id);
    if(id) {
        db.deleteOne({_id: id}).then(res => {
            res.send("User deleted..");
        }).catch(err => res.status(400).send("Error when deleting user.."));
    } else {
        res.status(400).send("Id required");
    }
});

module.exports = routes;