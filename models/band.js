// TODO: Add and export band model
// attrs: name, genre, corruptedByTheSystem
const mongoose = require('mongoose');
const bandSchema = {
  name: String,
  genre: String,
  corruptedByTheSystem: Boolean
  }


const Band = mongoose.model('Band', bandSchema);

module.exports = Band;
