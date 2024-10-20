import Navbar from "../Navbar.jsx";
import React from "react";
import AboutHeading from "../AboutUs/AboutUsHeading.jsx";
import Testimonials from "../Home/Testimonials.jsx";
import SpecialistsSection from "../Home/Specialist'sSection.jsx";
import HelpDeskForm from "../Home/HelpDeskForm.jsx";
import Footer from "../Footer.jsx";

function AboutUs() {
    return (
        <>
            <Navbar/>
            <div className="mt-20 sm:mt-28 md:mt-32 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    <span className="bg-gradient-to-r from-teal-400 via-green-500 to-green-700 text-4xl inline-block text-transparent bg-clip-text">Connecting Patients,</span> Accelerating Healing.
                </h1>
                <p className="text-gray-500 leading-relaxed mt-4 sm:mt-6 px-4 sm:px-12 md:px-24 lg:px-52">
                    In today’s fast-paced world, your health deserves the utmost attention and convenience. That’s why
                    DASmedhub offers a suite of integrated services designed to cater to your healthcare needs digitally:
                </p>
            </div>
            <AboutHeading/>
            <div className="mt-6 flex justify-center items-center px-4 sm:px-6 lg:px-0">
                <div className="p-8 sm:p-12 lg:p-16 w-full sm:w-[95%] lg:w-[75rem] mx-auto ">
                    <div className="flex flex-col items-center md:flex-row mt-6">

                        {/* Text Section */}
                        <div className="w-full md:w-1/2 px-2 sm:px-4 md:px-6 text-center md:text-left">
                            <h1 className="text-3xl mb-8 md:text-4xl font-bold text-gray-800">
                                <span className="bg-gradient-to-r from-teal-400 via-green-500 to-green-700 text-4xl inline-block text-transparent bg-clip-text">Connecting Patients,</span> Accelerating Healing.
                            </h1>
                            <p className="text-gray-600 leading-relaxed text-sm mb-8 sm:text-base md:text-lg">
                                Empowering Your Health at Every Step. Experience personalized medical care from the comfort of your home. Connect with <span className="text-green-600">certified doctors</span>,
                                manage prescriptions, and schedule appointments with ease. Ready to take control of your health? Get Started or Book an Appointment today.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="relative w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0 md:mr-4">
                            <img
                                alt="doctor"
                                className="h-auto w-full object-cover border-[4px] border-teal-200 rounded-2xl"
                                src="/AboutUsDescription.png" // Replace with your image path
                            />
                        </div>

                    </div>
                </div>
            </div>
            <Testimonials/>
            <SpecialistsSection/>
            <HelpDeskForm/>
            <Footer/>
        </>
    )
}


export default AboutUs;