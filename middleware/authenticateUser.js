const { isTokenValid } = require("./jwt");

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401).send("Access denied invalid token");
  try {
    const valid = isTokenValid(token);
    console.log(valid);
    req.user = valid;
    next();
  } catch (err) {
    res.status(401).send("Access denied invalid token");
    next(err);
  }
};

const checkUser = (req, res, next) => {
  if (req.user.id == req.params.id) {
    next();
  } else {
    res.status(403).send("You are not authorized to access this page");
  }
};

const authorizeRoles = (...roles) => {
  return async (req, res, next) => {
    const { role } = req.user;
    if (roles[0].includes(role)) {
      next();
    } else {
      res
        .status(403)
        .send(
          "Access denied. You are not authorized to view this resource.Only Admins can check this resource"
        );
    }
  };
};

const checkOwner = async (resource) => {
  return async (req, res, next) => {
    const { id } = req.user;
    switch (resource) {
      case "parcel":
        Parcels.findById(req.params.id)
          .then((parcel) => {
            if (parcel.sender.toString() == id) {
              next();
            } else {
              res
                .status(403)
                .send("You are not authorized to access this page");
            }
          })
          .catch((err) => {
            next(err);
          });
        break;
      case "user":
        if (req.params.id == id) {
          next();
        } else {
          res.status(403).send("You are not authorized to access this page");
        }
        break;
      default:
        res.status(403).send("You are not authorized to access this page");
    }
  };
};

module.exports = {
  authenticateUser,
  checkUser,
  authorizeRoles,
  checkOwner,
};
