const mongoose = require("mongoose");

const RegistroSchema = new mongoose.Schema(
  {
    pessoaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pessoas",
    },
    unidadeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Unidades",
    },
    vacinaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vacinas",
    },
    dose: {
      type: Number,
    },
    data: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Registro = mongoose.model("Registros", RegistroSchema);

module.exports = Registro;
