const { responseDTO } = require('../../DTO/common/responseDto');
const { createGridRepository } = require('../repositories/gridRepository');

/**
 * Create Grid
 * @param {object} Image and user details
 * @returns {responseDTO}  response status and data
 */
const createGridService = async data => {
	const picArray = [];
	let position = 1;
	data.grid_pictures.forEach(img => {
		const newAr = [data.user_id, parseInt(img.id), img.url, position];
		picArray.push(newAr);
		position++;
	});
	const test = await createGridRepository(picArray, data.user_id);
	return responseDTO(200, test);
};

module.exports = {
	createGridService
};
