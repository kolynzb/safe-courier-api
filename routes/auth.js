const route = require("express").Router();
const { signin, signup } = require("../controllers/authController");

route.post("/signin", signin);
route.post("/signup", signup);
module.exports = route;
