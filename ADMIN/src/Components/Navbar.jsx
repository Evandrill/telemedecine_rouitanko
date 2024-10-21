import { assets } from "../../public/assets_admin/assets.js";
import {NavLink, useNavigate} from "react-router-dom";
import { useContext } from "react";
import { AdminContext } from "../Contexts/AdminContext.jsx";
import { Button } from "@material-tailwind/react";
import { AiOutlineLogout } from "react-icons/ai";
import { HiMenu } from "react-icons/hi"; // Importing a menu icon for smaller screens
import { useState } from "react";

function Navbar() {
    const { aToken, setAToken } = useContext(AdminContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigate = useNavigate();

    const logout = () => {
        if (aToken) {
            navigate("/");
            setAToken('');
            localStorage.removeItem('aToken');
        }
    };



    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-gradient-to-r from-teal-50 to-teal-100 shadow-md">
                <div className="flex items-center gap-4 text-sm">
                    <NavLink
                        to="/"
                        className="text-2xl sm:text-3xl font-bold cursor-pointer"
                    >
                        <span className="text-teal-600">DAS</span>
                        <span className="text-orange-500">medhub</span>
                    </NavLink>
                    <p className="hidden sm:block px-3 py-1.5 rounded-full border border-gray-300 text-gray-700 text-xs sm:text-sm">
                        {aToken ? "Admin" : "Specialist"}
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    {/* Show the badge in mobile view */}
                    <p className="block sm:hidden text-xs px-2 py-1 rounded-full border border-gray-300 text-gray-700">
                        {aToken ? "Admin" : "Specialist"}
                    </p>
                    <Button
                        onClick={logout}
                        variant="gradient"
                        size="sm"
                        className="hidden sm:flex bg-gradient-to-r from-teal-500 to-green-600 hover:from-green-600 hover:to-teal-500 items-center gap-2"
                    >
                        <AiOutlineLogout className="text-lg" />
                        <span>LOGOUT</span>
                    </Button>
                    <button
                        onClick={toggleMobileMenu}
                        className="sm:hidden focus:outline-none text-teal-600"
                    >
                        <HiMenu className="text-3xl" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden border-b bg-teal-50 shadow-md">
                    <div className="flex flex-col items-center p-4 space-y-4">
                        <NavLink
                            to="/"
                            className="text-base font-semibold text-teal-700 w-full text-center py-2 rounded-md hover:bg-teal-100"
                            onClick={toggleMobileMenu}
                        >
                            Home
                        </NavLink>
                        <Button
                            onClick={logout}
                            variant="gradient"
                            size="sm"
                            className="bg-gradient-to-r from-teal-500 to-green-600 hover:from-green-600 hover:to-teal-500 flex items-center justify-center gap-2 w-full py-2 rounded-md"
                        >
                            <AiOutlineLogout className="text-lg" />
                            <span>LOGOUT</span>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
