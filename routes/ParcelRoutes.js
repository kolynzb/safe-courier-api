const express = require('express');
const router = express.Router();
const changeParcelDestination = require('../controllers/ChangeParcelDestination');
const { changeParcelStatus } = require('../controllers/ChangeParcelStatus');
const ChangePresentLocation = require('../controllers/ChangePresentLocation');
const { createParcel } = require('../controllers/createParcel');
const { fetchAllParcels } = require('../controllers/fetchAllParcels');
const { fetchSpecificParcel } = require('../controllers/FetchSpecificParcel');
const { cancel_parcel } = require('../controllers/statusCancel');

const { authenticateUser, authorizeRoles } = require('../middleware/authenticateUser');

router.get('/', authenticateUser, fetchAllParcels);
router.get('/:id', authenticateUser, fetchSpecificParcel);
router.post('/', authenticateUser, createParcel);
router.put('/:id/status', authenticateUser, authorizeRoles(['admin']), changeParcelStatus);
router.put(
  '/:id/presentlocation',
  authenticateUser,
  authorizeRoles(['admin']),
  ChangePresentLocation
);
router.put('/:id/destination', authenticateUser, changeParcelDestination);
router.delete('/:id', authenticateUser, cancel_parcel);

module.exports = router;
