const parcels = require("../models/parcels");

//get all parcels
const fetchAllParcels = (req, res) => {
  parcels.find({}, (err, parcels) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(parcels);
  });
};

module.exports = { fetchAllParcels };
