const { responseDTO } = require('../../DTO/common/responseDto');
const { updateGridRepository } = require('../repositories/gridRepository');

/**
 * Update Grid
 * @param {object} grid data to be updated
 * @returns {responseDTO}  response status and data
 */
const updateGridService = async data => {
  const picArray = [];
  let position = 1;
  data.grid_pictures.forEach(img => {
    const newAr = [data.user_id, parseInt(img.id), img.url, position]
    picArray.push(newAr);
    position++;
  });
  const test = await updateGridRepository(picArray, data.user_id)
	return responseDTO(200, test);
};

module.exports = {
	updateGridService
};
