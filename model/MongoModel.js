
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const mongoSchema = new Schema({
    username: String,
    balance : String
});

const Mongos = mongoose.model('Mongos', mongoSchema);


module.exports = Mongos;