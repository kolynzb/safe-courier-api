const route = require("express").Router();
const {
  getUserById,
  getAllUsers,
  deleteUserById,
  UpdateUser,
} = require("../controllers/userController");
const {
  authenticateUser,
  checkUser,
} = require("../middleware/authenticateUser");

route.get("/", getAllUsers);
route.get("/:id", getUserById);
route.put("/:id", authenticateUser, checkUser, UpdateUser);
route.delete("/:id", authenticateUser, checkUser, deleteUserById);
route.delete("/:id/parcels", authenticateUser, checkUser);

module.exports = route;
