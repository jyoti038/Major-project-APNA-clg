const mongose = require('mongoose');
const schema = mongose.schema;

const listingschema = new schema({
    title: String,
    description: String,
    image: { String,
        type : String,
        set : (v) =>
       v == "" ? "https://via.placeholder.com/150" : v
    },
    price : Number,
    location: String,
    country: String,
}) ;

const Listing = mongose.model('Listing', listingschema);
module.exports = Listing;

