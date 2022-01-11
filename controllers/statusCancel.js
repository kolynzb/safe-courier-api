const Parcels = require("../models/parcels");

// cancel the specific parcel delivery
const cancel_parcel = async (req, res) => {
  const id = req.params.id;
  Parcels.findByIdAndUpdate(
    id,
    {
      $set: {
        status: "cancelled",
      },
    },
    (err, parcel) => {
      if (err) {
        res.send(err);
      }
      res.json({
        message: "Parcel delivery cancelled successfully",
      });
    }
  );
};

module.exports = { cancel_parcel };
