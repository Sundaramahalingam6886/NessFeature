const mongoose = require('mongoose');

const url: string = "mongodb://localhost:27017/";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', function () {
    console.log(`connected to ${url}`);
});

db.on('error', (err: any) => {
    console.log(err);

});

module.exports = db;