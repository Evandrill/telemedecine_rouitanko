const signinValidation = (schema) => (req, res, next) => {
    const validation = schema.safeParse(req.body);
    if (!validation.success) {
        return res.status(400).json({errors: validation.error.errors});
    }
    next();
};

module.exports = signinValidation;
