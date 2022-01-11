const Parcels = require("../models/parcels");

//fetch a specific parcel
const fetchSpecificParcel = async (req, res) => {
  try {
    const parcel = await Parcels.findById(req.params.id);
    if (!parcel) {
      return res.status(404).json({
        status: 404,
        error: "Parcel not found",
      });
    }
    res.status(200).json({
      status: 200,
      data: parcel,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error,
    });
  }
};

module.exports = { fetchSpecificParcel };
