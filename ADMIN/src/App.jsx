import Login from "./Pages/Login.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useContext, useEffect} from "react";
import { AdminContext } from "./Contexts/AdminContext.jsx";
import Navbar from "./Components/Navbar.jsx";
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Dashboard from "./Pages/Admin/Dashboard.jsx";
import AllAppointments from "./Pages/Admin/AllAppointments.jsx";
import AllSpecialists from "./Pages/Admin/AllSpecialists.jsx";
import AddSpecialist from "./Pages/Admin/AddSpecialist.jsx";

function App() {

    let navigate = useNavigate();
    const { aToken, setAToken } = useContext(AdminContext);

    useEffect(() => {
        if (aToken) {
            toast.success("Logged in successfully!");
        } else {
            toast.info("You have been logged out.");
        }
    }, [aToken]); // Trigger the effect only when aToken changes


    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {aToken ? (
                <>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<></>} />
                        <Route path="/admin-Dashboard" element={<Dashboard />} />
                        <Route path="/all-Appointments" element={<AllAppointments />} />
                        <Route path="/add-Specialists" element={<AddSpecialist />} />
                        <Route path="/all-Specialists" element={<AllSpecialists />} />
                    </Routes>
                </>
            ) : (
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            )}
        </div>
    );
}

export default App;
