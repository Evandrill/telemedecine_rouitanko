import { AppContext } from "../Contexts/AppContext.jsx";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import {Button} from "@material-tailwind/react";

function AllSpecialist() {
    const { speciality } = useParams();
    const navigate = useNavigate();
    const [showFilter, setShowFilter] = useState(false);

    const [filterDoc, setFilterDoc] = useState([]);
    const { doctors } = useContext(AppContext);

    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
        } else {
            setFilterDoc(doctors);
        }
    };


    useEffect(() => {
        applyFilter();
    }, [doctors, speciality]);

    return (
        <>

        <Navbar/>

        <div className="container mx-auto mt-24 px-4 py-4">
            <p className="text-teal-400 text-3xl font-semibold text-center">
                Browse through the Doctors Specialists.
            </p>

            <div className="flex flex-col sm:flex-row mt-8 gap-8">
                {/* Sidebar Filter */}
                <Button
                    variant="gradient"
                    size="md"
                    onClick={() => setShowFilter(prevState => !prevState)}
                    className={`bg-gradient-to-r from-teal-400 to-green-500 sm:hidden text-md ${
                        showFilter 
                        ? "sbg-gradient-to-r from-teal-500 to-green-600"
                            : ""
                    }`}
                >
                    <span>Filters</span>
                </Button>
                <div className={`flex-col gap-3 w-full sm:w-1/3 ${
                    showFilter
                        ? "flex"
                        : "hidden sm:flex"
                }`}>
                    {["General physician", "Gynecologist", "Dermatologist", "Pediatricians", "Neurologist", "Gastroenterologist"].map((spec) => (
                        <p
                            key={spec}
                            onClick={() =>
                                speciality === spec
                                    ? navigate("/All-specialists")
                                    : navigate(`/All-specialists/${spec}`)
                            }
                            className={`w-full sm:w-auto px-4 py-2 border border-green-200 rounded-lg text-center transition-all cursor-pointer ${
                                speciality === spec
                                    ? "bg-teal-50 border-teal-100 text-black font-semibold"
                                    : "hover:bg-teal-100 hover:text-black"
                            }`}
                        >
                            {spec}
                        </p>
                    ))}
                </div>

                {/* Doctors List */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 sm:px-0">
                    {filterDoc.map((item, index) => (
                        <div
                            onClick={() => navigate(`/Doctor/${item._id}`)}
                            key={index}
                            className="border border-teal-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                        >
                            <img className="bg-teal-50" alt="Doctor Img" src={item.image} />
                            <div className="p-4">
                                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                                    <p>Available</p>
                                </div>
                                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                                <p className="text-gray-600 text-sm">{item.speciality}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>


        </>
    );
}

export default AllSpecialist;
