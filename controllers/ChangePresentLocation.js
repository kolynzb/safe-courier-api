const Parcel = require("../models/parcels");
const { checkOwner } = require("../middleware/authenticateUser");
// Change the present location of a parcel
const changePresentLocation = async (req, res) => {
  const parcelId = req.params.id;
  const presentLocation = req.body.presentLocation;
  checkOwner("parcel");
  const updatedParcel = await Parcel.findByIdAndUpdate(parcelId, {
    presentLocation,
  });
  res.status(200).json({
    status: "success",
    data: {
      parcel: updatedParcel,
    },
  });
};

module.exports = changePresentLocation;
