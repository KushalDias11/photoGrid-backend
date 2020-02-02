const { dbConnection } = require('../../../configs/db');

/**
 * Create Grid database layer
 * @param {object, number} grid data, user id
 * @returns {object} created grid object
 */
const createGridRepository = async (data, userId) => {
	return new Promise((resolve, reject) => {
		var sql = 'INSERT INTO usergrids (userId, pictureId, pictureUrl, position) VALUES ?';
		dbConnection.query(sql, [data], function(err, result) {
			if (err) {
				reject(err);
			}
			dbConnection.query(`SELECT * FROM usergrids WHERE userId = ${userId}`, (err, res) => {
				if (err) reject(err);
				resolve(res);
			});
		});
	});
};

/**
 * Get Grid database layer
 * @param {number} userId
 * @returns {object} grid for given userId
 */
const getGridRepository = async uid => {
	return new Promise((resolve, reject) => {
		dbConnection.query(`SELECT * FROM usergrids WHERE userId = ${uid}`, (err, res) => {
			if (err) reject(err);
			resolve(res);
		});
	});
};

/**
 * Update Grid database layer
 * @param {object, number} grid data, user id
 * @returns {object} updated grid data
 */
const updateGridRepository = async (data, userId) => {
	return new Promise((resolve, reject) => {
		dbConnection.query(`DELETE FROM usergrids WHERE userId = ${userId}`, (err, res) => {
			if (err) reject(err);
			var sql = 'INSERT INTO usergrids (userId, pictureId, pictureUrl, position) VALUES ?';
			dbConnection.query(sql, [data], function(err, res) {
				if (err) {
					reject(err);
				}
				resolve(res);
			});
		});
	});
};

module.exports = {
	createGridRepository,
	getGridRepository,
	updateGridRepository
};
