const mongoose = require('mongoose');
const Secondset = require('./secondset');
const data1Schema = new mongoose.Schema({
  full_name: String,
  email: String,
  number: String,
  city: String,
  url: String,
});
const Firstset = mongoose.model('Firstset', data1Schema);

module.exports = Firstset;
   
  