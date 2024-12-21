const mongoose = require('mongoose');

const uri = encodeURI('mongodb+srv://developer:DeyTrkdORpI3Tc7e@cluster0.d41ro.mongodb.net/BuyOut');
mongoose.connect(uri)
        .then(() => console.log("Database connected..."))
        .catch((err) => console.log("Error connecting database"));


module.exports = mongoose;