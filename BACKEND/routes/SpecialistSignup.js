const jwt = require('jsonwebtoken');
const { allDatabaseConnections } = require('../config/database'); // Import allDatabaseConnections
const signupSchema = require('../zodValidation/signupSchema');
const validate = require('../middlewares/signupValidation');
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

// Signup endpoint
router.post('/', validate(signupSchema), async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        // Ensure the Specialist model is available before querying the config
        if (!Specialist) {
            return res.status(500).json({
                message: 'Database connection not initialized',
            });
        }

        // Check if the user already exists
        const existingUser = await Specialist.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: 'Email is already in use'
            });
        }

        // Create a new user
        const newUser = new Specialist({
            fullName: fullName,
            email: email,
            password: password,
        });

        await newUser.save();

        // Create a JWT token
        const token = jwt.sign({ userId: newUser._id }, SECRET_KEY);

        res.status(201).json({
            message: 'User created successfully',
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
