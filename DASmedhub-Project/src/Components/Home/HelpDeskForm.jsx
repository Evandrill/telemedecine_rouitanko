import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaCircleArrowRight } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";

function HelpDeskForm() {
    return (
        <div className="flex flex-col items-center justify-center my-20 px-4">
            {/* Title Section */}
            <h1 className="text-3xl font-semibold text-gray-900 mb-2 text-center">
                Reach our <span className="bg-gradient-to-r from-teal-400 via-green-500 to-green-700 inline-block text-transparent bg-clip-text">Help Desk</span> for support
            </h1>
            <p className="text-gray-500 mb-8 text-center max-w-xl">
                Questions? Need assistance? Our dedicated support team is here to help you every step of the way:
            </p>

            {/* Form Section */}
            <form className="flex flex-col lg:flex-row items-center gap-4 w-full max-w-3xl">
                {/* First Name Input */}
                <div className="relative flex items-center w-full lg:w-auto">
                    <FaUser className="absolute left-4 text-green-500" />
                    <input
                        type="text"
                        placeholder="Enter Your First Name"
                        className="pl-12 pr-4 py-2 border-2 border-green-300 rounded-lg focus:outline-none focus:border-teal-500 w-full lg:w-[16rem] text-gray-700"
                    />
                </div>

                {/* Email Address Input */}
                <div className="relative flex items-center w-full lg:w-auto">
                    <MdEmail className="absolute left-4 text-green-500" />
                    <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="pl-12 pr-4 py-2 border-2 border-green-300 rounded-lg focus:outline-none focus:border-teal-500 w-full lg:w-[16rem] text-gray-700"
                    />
                </div>

                {/* Submit Button */}
                <Button
                    variant="gradient"
                    size="lg"
                    className="flex items-center justify-center bg-gradient-to-r from-teal-500 to-green-600 text-white font-semibold py-[0.75rem] px-6 rounded-lg transition-colors w-full lg:w-auto"
                >
                    Contact US
                    <FaCircleArrowRight className="ml-2" />
                </Button>
            </form>
        </div>
    );
}

export default HelpDeskForm;
