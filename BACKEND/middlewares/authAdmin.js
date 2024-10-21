const jwt = require('jsonwebtoken');


// Admin authentication

const authAdmin = async(req, res, next) => {

    try {

        const {aToken} = req.headers;
        if (!aToken) {
            return res.status(500).json({
                message: 'Not Authorised - Login Again !!',
                success: false,
            });
        }

        const token_decode = jwt.verify(aToken, process.env.JWT_SECRET);

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(500).json({
                message: 'Not Authorised - Login Again !!',
                success: false,
            });
        }

        next();


    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
        });
    }

}

export default authAdmin;