const { checkOwner } = require("../middleware/authenticateUser");
const Parcel = require("../models/parcels");

//change parcel status
const changeParcelStatus = async (req, res) => {
  const { status } = req.body;
  const parcelId = req.params.id;
  checkOwner("parcel");
  const parcel = await Parcel.findById(parcelId);
  if (!parcel) {
    return res.status(404).json({
      status: 404,
      message: "Parcel not found",
    });
  }
  parcel.status = status;
  await parcel.save();
  return res.status(200).json({
    status: 200,
    message: "Parcel status changed successfully",
  });
};

module.exports = {
  changeParcelStatus,
};
