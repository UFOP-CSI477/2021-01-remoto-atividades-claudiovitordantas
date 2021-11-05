const express = require("express");
const router = express.Router();

const Pix = require("../models/pixModel");
const Transaction = require("../models/transactionModel");

// cadastra uma chave pix
router.post("/registerPix", async (req, res) => {
  const { pixKey, accountType, keyType } = req.body;

  try {
    let key = await Pix.findOne({ pixKey: pixKey });

    if (key)
      return res.json({ status: 400, message: "Chace Pix já cadastrada." });

    await Pix.create({ pixKey, accountType, keyType });

    return res.json({ status: 200 });
  } catch (error) {
    console.log(error);
  }
});

// retona chaves cadastradas
router.get("/mykeys", async (req, res) => {
  const keys = await Pix.find({});
  return res.json(keys);
});

//registra transações
router.post("/transaction", async (req, res) => {
  try {
    const { name, bank, date, key, keyType, value } = req.body;
    const trans = await Transaction.create({ name, bank, date, key, keyType, value });
    return res.json({ status: 200, trans });
  } catch (error) {
    console.log(error);
  }
});

//retornas tadas as transações
router.get("/allTransaction", async (req, res) => {
  const data = await Transaction.find({});
  return res.json(data);
});

module.exports = router;
