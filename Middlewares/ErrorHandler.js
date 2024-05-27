
/**
 * Error handling middleware function.
 *
 * @param {Error} err - The error object to be handled.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function in the stack.
 *
 * @returns {Object} - A JSON object containing the error details.
 *
 * @description This middleware function is responsible for handling errors that occur during the execution of the application.
 * It extracts the error status code and message, if available, or defaults to 500 and "Internal Server Error" respectively.
 * The function then sends a JSON response wit
 */
const errorHandler = (err, req, res, next) => {
    const errStatus = err.statusCode || 500;
    const errMessage = err.message || "Internal Server Error";
    
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: process.env.NODE_ENV === "development" ? err.stack : {}
    })
};

module.exports= {errorHandler}