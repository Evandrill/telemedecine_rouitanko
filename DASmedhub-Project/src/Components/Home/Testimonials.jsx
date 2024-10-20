import React from 'react';

const TestimonialCard = ({ image, text, name }) => {
    return (
        <div className="bg-gradient-to-b from-white via-white to-teal-50 p-6 border-2 border-teal-500 hover:shadow-lg rounded-lg shadow-lg max-w-xl mx-auto">
            <div className="flex items-start space-x-4">
                <img src={image} alt={name} className="w-16 h-16" />
                <div>
                    <p className="text-gray-700 text-lg italic">"{text}"</p>
                    <p className="text-gray-900 font-bold mt-2">- {name}</p>
                </div>
            </div>
        </div>
    );
};

const StatsCard = ({ value, label }) => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 via-green-600 to-green-800 inline-block text-transparent bg-clip-text">{value}</h1>
            <p className="text-gray-500">{label}</p>
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="bg-white py-12">
            <div className="text-center mb-12 pb-12">
                <h2 className="bg-gradient-to-r from-teal-400 via-green-500 to-green-700 inline-block text-transparent bg-clip-text text-4xl font-semibold">Patient Testimonials:</h2>
                <h3 className="text-3xl font-bold text-gray-900">Hear from Those We've Cared For</h3>
                <p className="text-gray-500 text-lg mt-2">Discover the difference we make through the voices of those we've served:</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 px-6">
                <TestimonialCard
                    image="/testimonials/Rectangle 8.png"
                    text="After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined."
                    name="Linda A."
                />
                <TestimonialCard
                    image="/testimonials/Rectangle 8-1.png"
                    text="Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life."
                    name="Henry B."
                />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center px-6 mb-12">
                <StatsCard value="10,000+" label="Successful Consultations" />
                <StatsCard value="2,500+" label="Healthcare Professionals" />
                <StatsCard value="98%" label="Patient Satisfaction Rate" />
                <StatsCard value="200+" label="Top Specialists" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6">
                <TestimonialCard
                    image="/testimonials/Rectangle 8-2.png"
                    text="The prescription refill system is a game-changer for managing my diabetes. It's really efficient and completely hassle-free."
                    name="Joshua T."
                />
                <TestimonialCard
                    image="/testimonials/Rectangle 8-3.png"
                    text="Finding a doctor who really understands all of my health needs has never been easier. This platform has changed my life."
                    name="Samantha K."
                />
            </div>
        </section>
    );
};

export default Testimonials;
