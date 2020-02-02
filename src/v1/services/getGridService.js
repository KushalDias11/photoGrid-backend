const { responseDTO } = require('../../DTO/common/responseDto');
const { getGridRepository } = require('../repositories/gridRepository');

/**
 * Get Grid
 * @param {string} User id
 * @returns {responseDTO}  response status and data
 */
const getGridService = async uid => {
	const test = await getGridRepository(uid);
	return responseDTO(200, test);
};

module.exports = {
	getGridService
};
