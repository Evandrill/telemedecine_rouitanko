import { Typography } from "@material-tailwind/react";
import React from "react";

function AboutHeading() {
    return (
        <div className="mt-16 flex justify-center items-center px-4 sm:px-6 bg-teal-50 lg:px-0">
            <div className="p-8 sm:p-12 lg:p-16 w-full sm:w-[95%] lg:w-[75rem] mx-auto ">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800">
                    <Typography
                        as="a"
                        href="#"
                        className="lg:ml-14 cursor-pointer py-1.5 text-3xl font-bold"
                    >
                        <span className="text-teal-600">DAS</span>
                        <span className="text-orange-500">medhub</span>
                        <span>’s Story: Get to know us</span>
                    </Typography>
                </h2>

                <div className="flex flex-col items-center md:flex-row mt-6">
                    {/* Image Section */}
                    <div className="relative w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0 md:mr-6">
                        <img
                            alt="doctor"
                            className="h-auto w-full object-cover rounded-2xl"
                            src="/MedhubStory-Doctor.png" // Replace with your image path
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 px-2 sm:px-4 md:px-6 text-center md:text-left">
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                            DASmedhub is more than just an online medical service; it’s a movement towards accessible,
                            efficient, and compassionate healthcare for all. Founded by a team of visionary doctors,
                            healthcare professionals, and technology experts, we are driven by the mission to deliver
                            exceptional medical care directly to you, no matter where you are. Our platform is built on
                            the pillars of trust, innovation, and patient-centricity, ensuring that every interaction is
                            personalized and every treatment plan is tailored to your unique needs. With a network of
                            licensed practitioners from diverse medical fields, we guarantee comprehensive care that’s
                            just a click away.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutHeading;
