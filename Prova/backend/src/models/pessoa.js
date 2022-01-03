const mongoose = require("mongoose");

const PessoaSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
    },
    dataNascimento: {
      type: Date,
    },
    cpf: {
      type: String,
    },
  },
  { timestamps: true }
);

const Pessoa = mongoose.model("Pessoas", PessoaSchema);

module.exports = Pessoa;
