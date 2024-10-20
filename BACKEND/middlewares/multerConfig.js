const multer = require('multer');

// Configure multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Set the upload directory
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Generate a unique filename
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
