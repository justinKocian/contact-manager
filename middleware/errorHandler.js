const { constants } = require('../constants');

// Custom error handler middleware
const errorHandler = (err, req, res, next) => {
  // Determine the status code from the response or use 500 as a default
  const statusCode = res.statusCode ? res.statusCode : 500;

  // Based on the status code, format the error response accordingly
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      // Handle validation errors
      res.json({
        title: 'Validation Failed',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      // Handle resource not found errors
      res.json({
        title: 'Not Found',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      // Handle unauthorized access errors
      res.json({
        title: 'Unauthorized access',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      // Handle forbidden access errors
      res.json({
        title: 'Forbidden',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      // Handle server errors
      res.json({
        title: 'Server Error',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      // If no error status code matches, log a message indicating everything is okay
      console.log('No error, all good!');
      break;
  }
};

module.exports = errorHandler;