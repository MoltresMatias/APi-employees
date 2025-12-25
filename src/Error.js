
export const errorHandler = (err, req, res, next) => {
    console.error("Error:", err); // log detallado

    res.status(500).json({
        message: "Error interno del servidor",
        error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
};