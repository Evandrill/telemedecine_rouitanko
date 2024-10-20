import React from 'react';
import { BsFilePersonFill } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";
import { MdLocationPin } from "react-icons/md";
import { Button } from "@material-tailwind/react";

function BelowHomeForm() {
    return (
        <div className="mt-6 flex justify-center items-center">
            <div className="p-4 bg-gradient-to-b from-white via-white to-teal-50 rounded-3xl shadow-md w-full sm:w-[95%] lg:w-[65rem] mx-4 sm:mx-auto border-teal-500 border-2">
                {/* Form Title */}
                <h2 className="text-xl lg:text-2xl font-semibold text-green-600 mb-6 text-center">
                    Provide your symptoms for quick diagnosis.
                </h2>

                {/* Form Content */}
                <form className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-end">
                    {/* Email Address */}
                    <div className="col-span-1">
                        <div className="flex items-center space-x-2 mb-1">
                            <BsFilePersonFill className="text-green-500 h-5 w-5" />
                            <label className="text-gray-700">Name</label>
                        </div>
                        <input
                            type="email"
                            placeholder="Enter Your Full Name"
                            className="border-2 border-gray-300 rounded-lg p-3 outline-none focus:border-teal-500 w-full text-gray-600 bg-white"
                        />
                    </div>

                    {/* Contact Number */}
                    <div className="col-span-1">
                        <div className="flex items-center space-x-2 mb-1">
                            <FcBusinessman className="text-green-500 h-6 w-6" />
                            <label className="text-gray-700">Age</label>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Your Age"
                            className="border-2 border-gray-300 rounded-lg p-3 outline-none focus:border-teal-500 w-full text-gray-600 bg-white"
                        />
                    </div>

                    {/* Symptom Description */}
                    <div className="col-span-1">
                        <div className="flex items-center space-x-2 mb-1">
                            <MdLocationPin className="text-green-500 h-5 w-5" />
                            <label className="text-gray-700">Location</label>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter your Location"
                            className="border-2 border-gray-300 rounded-lg p-3 outline-none focus:border-teal-500 w-full text-gray-600 bg-white"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 flex justify-center">
                        <Button variant="gradient" size="lg" className={"bg-gradient-to-r from-teal-500 to-green-600"}>
                            Chat With AI
                        </Button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default BelowHomeForm;
