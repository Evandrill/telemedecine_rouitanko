import React from 'react';
import {useNavigate} from "react-router-dom";

const SpecialistCard = ({ link, name, image, rating, reviews, title, description, status }) => {
    return (
        <div className="p-6 bg-teal-100 rounded-lg shadow-md text-center relative hover:top-[-0.5rem]">
            <a href={link}>
                <div className="flex justify-center mb-4">
                    <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
                <p className="text-green-500 font-medium">{status}</p>
                <p className="text-sm text-gray-600">{title}</p>
                <p className="flex items-center justify-center my-2 text-yellow-500">
                    <span className="mr-1">⭐ {rating}</span>
                    <span className="text-gray-500">({reviews} reviews)</span>
                </p>
                <p className="text-gray-600 text-sm">{description}</p>
            </a>
        </div>
    );
};

const SpecialistsSection = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-gray-900">
                    Masters of Medicine:
                    <span className="text-green-500"> Meet our team of specialists</span>
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Our team of specialists is at the forefront of medical innovation. Each specialist brings a unique blend of expertise, empathy, and experience to ensure that your health is in the best hands.
                </p>

                {/* Cards grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SpecialistCard
                        image="/specialist/Ellipse 55.png"
                        name="Hyun Kyu Song, DDS"
                        rating="4.54"
                        reviews="37"
                        title="Dentist, Dental Pain Specialist, New York, NY"
                        description="Easy billing process, fast appointment schedule. Great bedside manner and service, can't say enough about this..."
                        status="Highly recommended"
                        link="#"
                    />
                    <SpecialistCard
                        image="/specialist/Ellipse 56.png"
                        name="Dr. Garo Nazarian, DDS"
                        rating="4.92"
                        reviews="212"
                        title="Dentist, Dental Pain Specialist, New York, NY"
                        description="did not see this doctor... I did not even see an endodontist, just a DDS who took x-rays and told me I did not need..."
                        status="Highly recommended"
                        link="#"
                    />
                    <SpecialistCard
                        image="/specialist/Ellipse 57.png"
                        name="Mazen Natour, DMD"
                        rating="4.82"
                        reviews="250"
                        title="Prosthodontist, Cosmetic Dentist, New York, NY"
                        description="did not see this doctor... I did not even see an endodontist, just a DDS who took x-rays and told me I did not need..."
                        status="Excellent wait time"
                        link="#"
                    />

                    {/* Repeat Cards as necessary */}
                    <SpecialistCard
                        image="/specialist/Black person1.jpg"
                        name="Hyun Kyu Song, DDS"
                        rating="4.54"
                        reviews="37"
                        title="Dentist, Dental Pain Specialist, New York, NY"
                        description="Easy billing process, fast appointment schedule. Great bedside manner and service, can't say enough about this..."
                        status="Highly recommended"
                        link="#"
                    />
                    <SpecialistCard
                        image="/specialist/Black person2.jpg"
                        name="Dr. Garo Nazarian, DDS"
                        rating="4.92"
                        reviews="212"
                        title="Dentist, Dental Pain Specialist, New York, NY"
                        description="did not see this doctor... I did not even see an endodontist, just a DDS who took x-rays and told me I did not need..."
                        status="Highly recommended"
                        link="#"
                    />
                    <SpecialistCard
                        image="/specialist/Black person3.jpg"
                        name="Mazen Natour, DMD"
                        rating="4.82"
                        reviews="250"
                        title="Prosthodontist, Cosmetic Dentist, New York, NY"
                        description="did not see this doctor... I did not even see an endodontist, just a DDS who took x-rays and told me I did not need..."
                        status="Excellent wait time"
                        link="#"
                    />
                </div>
            </div>
        </section>
    );
};

export default SpecialistsSection;
