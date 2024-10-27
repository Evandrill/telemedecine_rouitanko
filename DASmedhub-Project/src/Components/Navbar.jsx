import React, {useState, useEffect, useContext} from "react";
import {
    Navbar,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import {UserContext} from "./Contexts/UserContext.jsx";

function StickyNavbar() {
    const [openNav, setOpenNav] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [token, setToken] = useState(true);  // Token to check if the user is logged in

    const navigate = useNavigate();
    const { userImage } = useContext(UserContext); // Consume the user data

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <NavLink
                to={"/"}
                className={"p-1 text-xl font-medium text-gray-600"}
            >
                <p>Home</p>
            </NavLink>
            <NavLink
                to={"/Patient-register"}
                className="p-1 text-xl font-medium text-gray-600"
            >
                <p>Patients</p>
            </NavLink>
            <NavLink
                to={"/Specialist-register"}
                className="p-1 text-xl font-medium text-gray-600"
            >
                <p>Health Specialist</p>
            </NavLink>
            <NavLink
                to={"/About-us"}
                className="p-1 text-xl font-medium text-gray-600"
            >
                <p>About us</p>
            </NavLink>
            <NavLink
                to={"https://dasmedhubblog.vercel.app/"}
                className="p-1 text-xl font-medium text-gray-600"
            >
                <p>Blog</p>
            </NavLink>
        </ul>
    );

    return (
        <div className="max-h-[768px] w-full z-50 top-0 fixed">
            <Navbar className="sticky top-0 z-10 w-full max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <NavLink
                        to={"/"}
                        className="lg:ml-14 cursor-pointer py-1.5 text-3xl font-bold"
                    >
                        <span className="text-teal-600">DAS</span>
                        <span className="text-orange-500">medhub</span>
                    </NavLink>

                    <div className="hidden lg:block">{navList}</div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-x-1">
                            <div className="relative flex items-center gap-x-4">
                                {/* Avatar and Button */}
                                <div
                                    className={`relative ${token ? 'visible' : 'invisible'}`}
                                >
                                    {/* Avatar button */}
                                    <button
                                        id="dropdownUserAvatarButton"
                                        className="flex items-center justify-center bg-gray-200 rounded-full p-1 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                        type="button"
                                        onClick={toggleDropdown}
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="w-10 h-10 object-cover rounded-full"
                                            src={userImage.avatar}
                                            alt="user photo"
                                        />
                                    </button>


                                    {/* Dropdown menu */}
                                    {dropdownOpen && (
                                        <div
                                            id="dropdownAvatar"
                                            className="absolute z-10 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                        >
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                <li>
                                                    <a
                                                        href="/Patient-Profile"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/User-Appointments"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        My Appointments
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="py-2">
                                                <a
                                                    onClick={() => setToken(false)}
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    Log Out
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Pulse Point Button */}
                                <Button
                                    onClick={function () {
                                        navigate('/Medhub-Chatbot');
                                    }}
                                    variant="gradient"
                                    size="md"
                                    className="bg-gradient-to-r from-teal-500 to-green-600 mr-14 hidden text-md lg:inline-block"
                                >
                                    <span>Pulse Point</span>
                                </Button>
                            </div>
                        </div>

                        {/* Mobile Icon Button */}
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>

                <Collapse open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button onClick={function () {
                            navigate('/Medhub-Chatbot');
                        }} fullWidth variant="gradient" size="sm" className={"bg-gradient-to-r" +
                            " from-teal-500" +
                            " to-green-600"}>
                            <span>PULSE POINT</span>
                        </Button>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default StickyNavbar;
