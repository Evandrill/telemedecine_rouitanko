import React from 'react';

const Step = ({ number, title, description }) => {
    return (
        <div className="flex items-start mb-8">
            <span className="flex items-center justify-center w-12 h-12 px-4 rounded-full bg-gradient-to-r from-teal-500 to-green-600 text-white font-bold text-2xl mr-4">{number}</span>
            <div>
                <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

const PlatformInfoHome = () => {
    return (
        <>
            <section className="bg-teal-50 py-12 px-6 md:mt-14 lg:px-12 ">
                <div className="mt-8 sm:mt-10 md:mt-8 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                        Top <span className="bg-gradient-to-r from-teal-400 via-green-500 to-green-700 inline-block text-transparent bg-clip-text">Services</span> we offer
                    </h1>
                    <p className="text-gray-500 leading-relaxed mt-4 sm:mt-6 px-4 sm:px-12 md:px-24 lg:px-52">
                        In today’s fast-paced world, your health deserves the utmost attention and convenience. That’s why
                        DASmedhub offers a suite of integrated services designed to cater to your healthcare needs digitally:
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-6 items-end gap-10 mt-14 space-x-8">
                    {/* Left Section - Steps */}
                    <div className="lg:col-span-3">
                        <Step
                            number="1"
                            title="Create Your Profile"
                            description="Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes."
                        />
                        <Step
                            number="2"
                            title="Choose Your Services"
                            description="Select from our range of services and book a consultation. Booking a consultation with HealNet is fairly simple and straightforward."
                        />
                        <Step
                            number="3"
                            title="Meet Your Doctor"
                            description="Have a virtual consultation with one of our certified specialists, or go for a physical visit to the doctor in case you opted for a physical check-up."
                        />
                    </div>

                    {/* Right Section - Enlarged Image */}
                    <div className="relative lg:col-span-3">
                        <img src="/HomePlatform-doctor.png" alt="Doctor" className="w-full h-auto object-cover rounded-lg scale-110" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default PlatformInfoHome;
