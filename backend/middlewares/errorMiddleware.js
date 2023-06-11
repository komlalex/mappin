const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;

    res.status(statusCode);
    res.json({   
        message: err.message,
        stack: process.NODE_ENV === "production" ? null : err.stack
    })
}

export default errorHandler;