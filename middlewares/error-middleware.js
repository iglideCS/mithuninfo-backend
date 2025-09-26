const errorMiddleware = (err, req, res, next) => {

    const status = err.status || 500;
    const message = err.message || "BACKEND ERROR!";
    const extraError = err.extraError || "Error from backend!"

    return res.status(status).json({message, extraError});
};


module.exports = errorMiddleware;