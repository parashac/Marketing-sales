///model

const mongoose = require('mongoose');

const sale = new mongoose.Schema({
  agent_name: { type: String, required: true },
  amount_sold: { type: Number, required: true },
  sales_count: { type: Number, required: true }
});
///schema is a blueprint of structure (in simple, a table)

module.exports = mongoose.model('Sale', sale);
