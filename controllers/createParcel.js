const Parcels = require('../models/parcels');

//create a parcel order
const createParcel = async (req, res) => {
  try {
    const userId = req.user.id;

    const { parcelType, weight } = req.body;

    let price = 0;
    if (parcelType === 'standard') {
      price = weight * 50;
    } else if (parcelType === 'express') {
      price = weight * 100;
    } else {
      price = weight * 25;
    }

    const parcels = new Parcels({
      sender: userId,
      price,
      ...req.body,
    });
    await parcels.save();
    res.status(201).json({
      status: 201,
      message: 'parcel created successfully',
      data: parcels,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'server error',
      error: error.message,
    });
  }
};

module.exports = { createParcel };
