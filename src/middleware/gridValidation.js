const { check } = require("express-validator");

/**
 * Middleware to validate api request body
 * @returns {object} errors if exists
 */
const validate = method => {
  switch (method) {
    case "createGrid": {
      return [
        check("user_id", "user_id status doesn't exists").exists(),
        check("user_id").not().isEmpty().withMessage('user_id status is required.'),
        check("grid_pictures", "grid_pictures doesn't exists").exists(),
        check("grid_pictures").not().isEmpty().withMessage('grid_pictures data is required.')
      ];
    }
    case "updateGrid": {
      return [
        check("user_id", "user_id status doesn't exists").exists(),
        check("user_id").not().isEmpty().withMessage('user_id status is required.'),
        check("grid_pictures", "grid_pictures doesn't exists").exists(),
        check("grid_pictures").not().isEmpty().withMessage('grid_pictures data is required.')
      ];
    }
  }
};

module.exports = {
  validate
};