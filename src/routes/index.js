const express = require('express');
const router = express.Router();
const gridController  = require('../v1/controllers/gridController');
const { validate } = require('../middleware/gridValidation');

//Version 1 routes
router.post('/v1/myGrid', validate('createGrid'), gridController.createGridController);
router.get('/v1/myGrid/:uid', validate('updateGrid'), gridController.getGridController);
router.put('/v1/myGrid', gridController.updateGridController);

module.exports = router;