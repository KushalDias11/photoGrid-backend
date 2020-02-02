/**
 * DTO object to transfer data in the response
 * @returns {responseDTO} error or success details
 */
const responseDTO = (statusCode = 500, data = null, error = null) => {
  return {
    statusCode: statusCode,
    body: {
      data: data,
      error: error
    }
  };
};

module.exports = {
  responseDTO
};
