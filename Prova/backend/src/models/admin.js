const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
    },
    email: {
      type: String,
    },
    senha: {
      type: String,
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admins", AdminSchema);

module.exports = Admin;
