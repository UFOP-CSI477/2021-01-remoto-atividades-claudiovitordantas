const mongoose = require("mongoose");

const { Schema } = mongoose;

const PixSchema = new Schema({
  accountType: {
    type: String,
    required: true,
  },
  keyType: {
    type: String,
    required: true,
  },
  pixKey: {
    type: String,
    required: true,
  },
});

const Pix = mongoose.model("pix", PixSchema);

module.exports = Pix;
