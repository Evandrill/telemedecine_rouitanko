const jwt = require('jsonwebtoken');
const { allDatabaseConnections } = require('../config/database'); // Import allDatabaseConnections
const signinSchema = require('../zodValidation/signinSchema');
const validate = require('../middlewares/signinValidation');
const { Router } = require("express");
const router = Router();

const SECRET_KEY = "00000000";

// Initialize config connections and get the Specialist model
let Specialist;

allDatabaseConnections()
    .then((connections) => {
        Specialist = connections.Specialist; // Get the Specialist model from the initialized connections
        console.log("Specialist DB initialized");
    })
    .catch((err) => {
        console.error("Error initializing connections:", err);
    });

// Sign-in endpoint
router.post('/', validate(signinSchema), async (req, res) => {
    const { email, password } = req.body;

    try {
        // Ensure the Specialist model is available before querying the config
        if (!Specialist) {
            return res.status(500).json({
                message: 'Database connection not initialized',
            });
        }

        // Find the user by email
        const user = await Specialist.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        // Check if the password is correct
        if (user.password !== password) {
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }

        // Create a JWT token
        const token = jwt.sign({ userId: user._id }, SECRET_KEY);

        res.status(200).json({
            message: 'Signed in successfully',
            token
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error.message
        });
    }
});

module.exports = router;
