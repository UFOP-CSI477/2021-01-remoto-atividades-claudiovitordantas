const mongoose = require("mongoose");

const VacinaSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
    },
    fabricante: {
      type: String,
    },
    pais: {
      type: String,
    },
    doses: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Vacina = mongoose.model("Vacinas", VacinaSchema);

module.exports = Vacina;
