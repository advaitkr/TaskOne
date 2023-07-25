const mongoose = require('mongoose');
const Firstset = require('./firstset');

const data2Schema = new mongoose.Schema({
full_name: String,
email:String,
team_name: String,
});

const Secondset = mongoose.model('Secondset', data2Schema);
module.exports = Secondset
