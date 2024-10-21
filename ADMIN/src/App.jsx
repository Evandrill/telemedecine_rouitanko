import Login from "./Pages/Login.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useContext} from "react";
import {AdminContext} from "./Contexts/AdminContext.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {

    const {aToken} = useContext(AdminContext);

    return aToken ? (
        <>
            <div>
                <ToastContainer />
                <Navbar />
            </div>
        </>
    ) : (
        <>
            <div>
                <Login />
                <ToastContainer />
            </div>
        </>
    );
}

export default App
