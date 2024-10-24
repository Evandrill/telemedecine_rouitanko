import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AdminContext } from "../Contexts/AdminContext.jsx";
import { Button, Card } from "@material-tailwind/react";
import { AiOutlineLogout } from "react-icons/ai";
import {
    UserCircleIcon,
    InboxIcon,
    PowerIcon
} from "@heroicons/react/24/solid";
import { IoCalendarOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";

function Navbar() {
    const { aToken, setAToken } = useContext(AdminContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for the sidebar visibility
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

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-gradient-to-r from-teal-50 to-teal-100 shadow-md">
                <div className="flex items-center gap-4 text-sm">
                    <NavLink to="/" className="text-2xl sm:text-3xl font-bold cursor-pointer">
                        <span className="text-teal-600">DAS</span>
                        <span className="text-orange-500">medhub</span>
                    </NavLink>
                </div>
                <div className="flex items-center gap-4">
                    <p className="block px-3 py-1.5 rounded-full border border-gray-300 text-gray-700 text-xs sm:text-sm">
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
                    {/* Sidebar Toggle Button for mobile */}
                    <button
                        onClick={toggleSidebar}
                        className="sm:hidden text-teal-600 text-xl"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Fixed Sidebar */}
            <Card
                className={`h-[calc(100vh-2rem)] w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5 fixed top-[4rem] left-0 transition-transform transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } sm:translate-x-0`}
            >
                {aToken && (
                    <ul className="space-y-4 p-4">
                        <NavLink
                            to={"/admin-Dashboard"}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-700 transition-all duration-200"
                        >
                            <InboxIcon className="h-5 w-5 text-gray-600 dark:text-gray-200" />
                            <span className="text-gray-700 dark:text-gray-200">Dashboard</span>
                        </NavLink>
                        <NavLink
                            to={"/all-Appointments"}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-700 transition-all duration-200"
                        >
                            <IoCalendarOutline className="h-5 w-5 text-gray-600 dark:text-gray-200" />
                            <span className="text-gray-700 dark:text-gray-200">Appointments</span>
                        </NavLink>
                        <NavLink
                            to={"/add-Specialists"}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-700 transition-all duration-200"
                        >
                            <UserCircleIcon className="h-5 w-5 text-gray-600 dark:text-gray-200" />
                            <span className="text-gray-700 dark:text-gray-200">Add Specialist</span>
                        </NavLink>
                        <NavLink
                            to={"/all-Specialists"}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-700 transition-all duration-200"
                        >
                            <SlPeople className="h-5 w-5 text-gray-600 dark:text-gray-200" />
                            <span className="text-gray-700 dark:text-gray-200">All Specialists</span>
                        </NavLink>
                        <NavLink
                            to={"#"}
                            onClick={logout}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-700 transition-all duration-200"
                        >
                            <PowerIcon className="h-5 w-5 text-gray-600 dark:text-gray-200" />
                            <span className="text-gray-700 dark:text-gray-200">Log Out</span>
                        </NavLink>
                    </ul>
                )}
            </Card>
        </>
    );
}

export default Navbar;
