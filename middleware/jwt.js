const jwt = require("jsonwebtoken");

const defaultOptions = {
  expiresIn: process.env.JWT_LIFETIME,
};

const createJWT = ({ payload, options }) => {
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    ...defaultOptions,
    ...options, //will overide the default
  });
  return token;
};

const isTokenValid = (token) =>
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

const sendCookieResponse = ({ res, StatusCode, user, options }) => {
  const token = createJWT({ payload: user, options });
  const oneDay = 24 * 60 * 60 * 1000;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + process.env.COOKIE_LIFETIME * oneDay),
  });
  res.status(StatusCode).json({ user, token });
};

module.exports = { sendCookieResponse, isTokenValid, createJWT };
