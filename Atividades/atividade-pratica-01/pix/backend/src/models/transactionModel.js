const mongoose = require("mongoose");

const { Schema } = mongoose;

const TransactionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bank: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  value: {
    type: String,
  },
  keyType: {
    type: String,
  },
  key: {
    type: String,
  },
});

const Transaction = mongoose.model("transaction", TransactionSchema);

module.exports = Transaction;
