const jsonWebToken = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = req.get("Authorization").split(" ")[1]; // get is use to acces the data in headers.
  let decodedToken;
  try {
    decodedToken = jsonWebToken.verify(token, "somesupersecretsecret"); // This method decode and verify the token.
  } catch (err) {
    req.isAuth = false;
    return next();
  }
  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  req.userId = decodedToken.userId;
  req.isAuth = true;
  next();
};
