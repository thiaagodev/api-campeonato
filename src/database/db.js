require('dotenv/config');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL , {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;