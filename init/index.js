const mongose = require('mongoose');
const data = require("./data.js");
const listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

mongoose.connect(MONGO_URL)
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}
 
const initDB = async () => {
    await listing.deleteMany({});
    await listing.insertmany(initdata.data);
    console.log("data was initialized")
}

initDB();