const mongoose = require('mongoose');

mongoose.connect('mongodb://dbcampeonato:admin123@localhost/Campeonato', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;