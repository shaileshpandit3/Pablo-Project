const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const QuotesSchema = new Schema({
  quotes: String
})

module.exports = mongoose.model('Quotes', QuotesSchema,)