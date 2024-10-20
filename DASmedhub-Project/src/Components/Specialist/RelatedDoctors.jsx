import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../Contexts/AppContext.jsx";
import {Button} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";

function RelatedDoctors({speciality, docId}) {

    const {doctors} = useContext(AppContext);
    const [relDoc, setRelDoc] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
            setRelDoc(doctorsData);
        }
    }, [doctors,speciality,docId]);


    return (
        <>
            <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold text-gray-900">
                        Related Doctors
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Simply browse through our extensive list of trusted doctors.
                    </p>
                </div>
                {/* Grid with 5 columns on large screens */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-6 sm:px-0">
                    {relDoc.slice(0, 5).map((item, index) => (
                        <div
                            onClick={() => {
                                navigate(`/Doctor/${item._id}`);
                                scrollTo(0, 0);
                            }}
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

                {/* Button */}
                <Button onClick={() => navigate("/All-specialists")} variant="gradient" size="lg" className="bg-gradient-to-r from-teal-500 to-green-600">
                    More
                </Button>
            </div>
        </>
    );
}

export default RelatedDoctors;
