const mongoose = require("mongoose");

const UnidadeSchema = new mongoose.Schema({
  nome: {
    type: String,
  },
  bairro: {
    type: Date,
  },
  cidade: {
    type: String,
  },
  estado: {
    type: String,
  },
});

const Unidade = mongoose.model("Unidades", UnidadeSchema);

module.exports = Unidade;
