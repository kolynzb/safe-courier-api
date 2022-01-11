const { checkOwner } = require("../middleware/authenticateUser");
const Parcel = require("../models/parcels");

// Change Location Parcel
const changeParcelDestination = async (req, res) => {
  const parcelId = req.params.id;
  const { destination } = req.body;
  checkOwner("parcel");
  const parcel = await Parcel.findByIdAndUpdate(parcelId, { destination });
  if (!parcel) {
    return res.status(404).json({ msg: "Parcel not found" });
  }
  res.json({ parcel });
};

module.exports = changeParcelDestination;
