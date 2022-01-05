const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const adminController = require("../controllers/adminControllers");

const isAuth = async (req, res, next) => {
  const authToken = req.headers.token;
  if (authToken) {
    const token = authToken.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) return res.status(403).json("Token inválido!");
      req.user = data;
      next();
    });
  } else {
    return res.status(401).json("Usuário não autenticado!");
  }
};

router.post("/login", adminController.login);
router.post("/generateRandomData", isAuth, adminController.generateRandomData);
router.get("/people", isAuth, adminController.fetchAllPeople);
router.get("/units", isAuth, adminController.fetchAllUnits);
router.post("/register", isAuth, adminController.registerPerson);
router.get("/vaccines", isAuth, adminController.vaccines);
router.get("/getAllData", isAuth, adminController.data);
router.post("/inclusion", isAuth, adminController.inclusion);
router.get("/overallData", adminController.overallData);

module.exports = router;
