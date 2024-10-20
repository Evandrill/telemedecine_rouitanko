const express = require('express');
const { allDatabaseConnections } = require('../config/database');
const upload = require('../middlewares/multerConfig');

const router = express.Router();

// Initialize config connections and get the Patient model
let UserData;

allDatabaseConnections()
    .then((connections) => {
        UserData = connections.UserData; // Get the Patient model from the initialized connections
        console.log("UserData DB initialized");
    })
    .catch((err) => {
        console.error("Error initializing connections:", err);
    });

// Update the route to handle form data and file upload
router.post('/', upload.single('avatar'), async (req, res) => {
    try {
        const { fullName, gender, birthDate, email, location, phoneNumber } = req.body;
        const avatar = req.file ? req.file.path : null;

        // Save user data to the config, including the avatar path if provided
        const user = new UserData({
            fullName,
            gender,
            birthDate,
            email,
            location,
            phoneNumber,
            avatar,
        });

        await user.save();
        res.status(200).json({ message: 'User data saved successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error saving user data' });
    }
});

// Get User by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await UserData.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update User
router.put('/:id', upload.single('avatar'), async (req, res) => {
    try {
        const { firstName, lastName, gender, birthDate, email, location, phoneNumber } = req.body;
        const avatar = req.file ? req.file.filename : req.body.avatar;

        const updatedUser = await UserData.findByIdAndUpdate(
            req.params.id,
            { firstName, lastName, gender, birthDate, email, location, phoneNumber, avatar },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User profile updated successfully', user: updatedUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
