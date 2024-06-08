// ERROR MIDDLEWARE | NEXT FUNCTION

const errorMiddleware = (err, req, res, next) => {
    const defaultError = {
        statusCode: 404,
        success: "failed",
        message: err,
    };

    if (err && err.name === "ValidationError") {
        defaultError.statusCode = 400; // Typically, a 400 status code is more appropriate for validation errors.

        // Extracting and joining the error messages
        defaultError.message = Object.values(err.errors)
            .map(el => el.message)
            .join(", ");
    }
    console.log("error");
    //duplicate error

    if (err.code && err.code === 11000) {
        defaultError.statusCode = 404;
        defaultError.message = `${Object.values(
      err.keyValue
    )} field has to be unique!`;
    }

    res.status(defaultError.statusCode).json({
        success: defaultError.success,
        message: defaultError.message,
    });
};

export default errorMiddleware;