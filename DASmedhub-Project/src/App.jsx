import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Pages/Home.jsx";
import PatientRegisterPage from "./Components/Pages/PatientRegister.jsx";
import SpecialistRegisterPage from "./Components/Pages/SpecialistRegister.jsx";
import AboutUs from "./Components/Pages/AboutUs.jsx";
import Blog from "./Components/Pages/Blog.jsx";
import UserProfile from "./Components/Pages/UserProfile.jsx";
import UserAppointments from "./Components/Pages/UserAppointments.jsx";
import PatientLogin from "./Components/Pages/PatientLogin.jsx";
import SpecialistLogin from "./Components/Pages/SpecialistLogin.jsx";
import NearbyHospitalLocator from "./Components/Pages/NearbyHospitalLocator.jsx";
import ProfileForm from "./Components/Pages/UserBasicDetails.jsx";
import DoctorDescriptions from "./Components/Pages/DoctorDescriptions.jsx";
import AllSpecialist from "./Components/Pages/AllSpecialist.jsx";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/Patient-register" element={<PatientRegisterPage/>} />
                    <Route exact path="/Patient-login" element={<PatientLogin/>} />
                    <Route exact path="/Specialist-register" element={<SpecialistRegisterPage/>} />
                    <Route exact path="/Specialist-login" element={<SpecialistLogin/>} />
                    <Route exact path="/About-us" element={<AboutUs/>} />
                    <Route exact path="/Blog" element={<Blog/>} />
                    <Route exact path="/Patient-Profile" element={<UserProfile/>} />
                    <Route exact path="/User-Appointments" element={<UserAppointments/>} />
                    <Route exact path="/Doctor/:docId" element={<DoctorDescriptions/>} />
                    <Route exact path="/All-specialists" element={<AllSpecialist/>} />
                    <Route exact path="/All-specialists/:speciality" element={<AllSpecialist/>} />
                    <Route exact path="/Patient-basic-details" element={<ProfileForm/>} />
                    <Route exact path="/Nearby-hospital-locator" element={<NearbyHospitalLocator/>} />

                </Routes>
            </Router>
        </div>
    )
}

export default App
