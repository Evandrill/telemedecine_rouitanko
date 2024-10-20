const jwt = require('jsonwebtoken');
const { allDatabaseConnections } = require('../config/database'); // Import allDatabaseConnections from the combined file
const signinSchema = require('../zodValidation/signinSchema');
const validate = require('../middlewares/signinValidation');
const { Router } = require("express");
const router = Router();

const SECRET_KEY = "00000000";

// Initialize config connections and get the Patient model
let Patient;

allDatabaseConnections()
    .then((connections) => {
        Patient = connections.Patient; // Get the Patient model from the initialized connections
        console.log("Patient DB initialized");
    })
    .catch((err) => {
        console.error("Error initializing connections:", err);
    });

// Sign-in endpoint
router.post('/', validate(signinSchema), async (req, res) => {
    const { email, password } = req.body;

    try {
        // Ensure the Patient model is available before querying the config
        if (!Patient) {
            return res.status(500).json({
                message: 'Database connection not initialized',
            });
        }

        // Find the user by email
        const user = await Patient.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: 'Patient not found'
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
