const { createGridService } = require('../services/createGridService');
const { getGridService } = require('../services/getGridService');
const { updateGridService } = require('../services/updateGridService');
const { validationResult } = require('express-validator/check');
const { responseDTO } = require('../../DTO/common/responseDto');
const logger = require('../../../configs/logger');

/**
 * Create grid
 * @route POST /api/v1/myGrid
 * @group GRID - Operations about grids
 * @returns {responseDTO} 200 - created grid
 * @returns {responseDTO}  default - internal server error
 */
const createGridController = async (req, res) => {
	try {
		const response = await createGridService(req.body);
		return res.status(response.statusCode).json(response.body);
	} catch (error) {
		logger.error(error.toString());
		const response = responseDTO(500, null, 'internal server error');
		return res.status(response.statusCode).json(response.body);
	}
};

/**
 * Get grid by user id
 * @route GET /api/v1/myGrid/:uid
 * @group GRID - Operations about grids
 * @returns {responseDTO} 200 - specific grid
 * @returns {responseDTO}  default - internal server error
 */
const getGridController = async (req, res) => {
	try {
		const response = await getGridService(req.params.uid);
		return res.status(response.statusCode).json(response.body);
	} catch (error) {
		logger.error(error.toString());
		const response = responseDTO(500, null, 'internal server error');
		return res.status(response.statusCode).json(response.body);
	}
};

/**
 * Update grid
 * @route PUT /api/v1/myGrid
 * @group GRID - Operations about grids
 * @returns {responseDTO} 200 - updated grid
 * @returns {responseDTO}  default - internal server error
 */
const updateGridController = async (req, res) => {
	try {
		const response = await updateGridService(req.body);
		return res.status(response.statusCode).json(response.body);
	} catch (error) {
		logger.error(error.toString());
		const response = responseDTO(500, null, 'internal server error');
		return res.status(response.statusCode).json(response.body);
	}
};

module.exports = {
	createGridController,
	getGridController,
	updateGridController
};
