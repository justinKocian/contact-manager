// Exporting an object that contains custom constants for common HTTP status codes
exports.constants = {
    VALIDATION_ERROR: 400,   // Used for validation-related errors
    UNAUTHORIZED: 401,       // Used when the request requires user authentication
    FORBIDDEN: 403,          // Used when the request is valid, but the server refuses to respond
    NOT_FOUND: 404,          // Used when the requested resource is not found on the server
    SERVER_ERROR: 500,       // Used for generic server errors
  };
  