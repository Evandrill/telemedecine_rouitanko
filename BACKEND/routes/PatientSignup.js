const jwt = require('jsonwebtoken');
const { allDatabaseConnections } = require('../config/database'); // Import allDatabaseConnections from the combined file
const signupSchema = require('../zodValidation/signupSchema');
const validate = require('../middlewares/signupValidation');
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

// Signup endpoint
router.post('/', validate(signupSchema), async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        // Ensure the Patient model is available before querying the config
        if (!Patient) {
            return res.status(500).json({
                message: 'Database connection not initialized',
            });
        }

        // Check if the user already exists
        const existingUser = await Patient.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: 'Email is already in use'
            });
        }

        // Create a new user
        const newUser = new Patient({
            fullName: fullName,
            email: email,
            password: password,
        });

        await newUser.save();

        // Create a JWT token
        const token = jwt.sign({ userId: newUser._id }, SECRET_KEY);

        res.status(201).json({
            message: 'Patient created successfully',
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
