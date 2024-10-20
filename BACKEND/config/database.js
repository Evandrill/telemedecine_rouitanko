const mongoose = require('mongoose');

const connectSpecialistDB = async () => {
    try {
        const specialistConnection = await mongoose.createConnection(`${process.env.MONGODB_URI}/specialists`, {
        });
        console.log('Specialist DB connected');
        return specialistConnection;
    } catch (error) {
        console.error('MongoDB Specialist DB connection error:', error);
        process.exit(1);
    }
};


const connectPatientDB = async () => {
    try {
        const patientConnection = await mongoose.createConnection(`${process.env.MONGODB_URI}/patients`, {
        });
        console.log('Patient DB connected');
        return patientConnection;
    } catch (error) {
        console.error('MongoDB Patient DB connection error:', error);
        process.exit(1);
    }
};

const connectUserDataDB = async () => {
    try {
        const userData = await mongoose.createConnection(`${process.env.MONGODB_URI}/UserData`, {
        });
        console.log('MongoDB connected');
        return userData;
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};


// Define the Specialist schema and model
const SpecialistSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Define the Patient schema and model
const PatientSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Define UserData Schema
const userDataSchema = new mongoose.Schema({
    fullName: String,
    gender: String,
    birthDate: Date,
    email: String,
    location: String,
    phoneNumber: String,
    avatar: String,
});

// Function to initialize all connections and create models
const allDatabaseConnections = async () => {
    const specialistConnection = await connectSpecialistDB();
    const patientConnection = await connectPatientDB();
    const userData = await connectUserDataDB();

    // Bind models to the connections
    const Specialist = specialistConnection.model('Specialist', SpecialistSchema);
    const Patient = patientConnection.model('Patient', PatientSchema);
    const UserData = userData.model('UserData', userDataSchema);

    return { Specialist, Patient, UserData };
};



// Export the initialize function to use models in other files
module.exports = { allDatabaseConnections };
