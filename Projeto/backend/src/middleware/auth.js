const jwt = require("jsonwebtoken");

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

module.exports = { isAuth, isAuthorized, isAdmin };
