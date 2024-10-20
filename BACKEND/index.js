require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const patientSignupRoute = require('./routes/PatientSignup');
const patientSigninRoute = require('./routes/PatientSignin');
const specialistSignupRoute = require('./routes/SpecialistSignup');
const specialistSigninRoute = require('./routes/SpecialistSignin');
const userDataRoute = require('./routes/userData');
const defaultRoute = require('./routes/defaultBackendPage');
const { allDatabaseConnections } = require('./config/database'); // Import allDatabaseConnections

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));


/**
 * Initialize all config connections before starting the server.
 */
allDatabaseConnections()
    .then(() => {
        console.log("All config connections initialized");

        // Routes
        app.use("/patient-registration", patientSignupRoute);
        app.use("/patient-login", patientSigninRoute);
        app.use("/specialist-registration", specialistSignupRoute);
        app.use("/specialist-login", specialistSigninRoute);
        app.use("/userData", userDataRoute);

        app.use("/", defaultRoute);

        // Start the server only after the DB connections are established
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error initializing config connections:", err);
        process.exit(1); // Exit the application if the config connection fails
    });
