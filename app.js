const express = require('express');
const app = express();
const mongoose = require('mongoose');
const listing = require("../models/listing.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/Wanderlust";

main().then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log(err);
}); 


async function connectDB() {
    await mongoose.connect(MONGO_URL);
}

app.get('/', (req, res) => {

    res.send('Hello World!');
});

app.get('/listings', async (req, res) => {
    const allListings = await Listing.find({});
    res.render('listings/index.ejs', { allListings });
});

app.listen(8080, () => {
    console.log("server is listenting on port 8080");

})
