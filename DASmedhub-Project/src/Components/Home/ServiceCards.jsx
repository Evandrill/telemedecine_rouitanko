import React from 'react';
import { MdVideoChat } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaPumpMedical } from 'react-icons/fa';
import { BsFillFileEarmarkMedicalFill } from 'react-icons/bs';
import { HiDocumentPlus } from "react-icons/hi2";

const ServiceCard = ({ icon, title, description, link, large }) => {
    return (
        <div className={`p-6 bg-gradient-to-b from-white via-white to-teal-50 border-green-400 border-2 rounded-2xl shadow-lg dark:bg-gray-800 dark:border-gray-700 ${large ? 'col-span-2 row-span-2' : 'col-span-1'}`}>
            <div className="mb-3">
                {icon}
            </div>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                {description}
            </p>
            <a
                href={link}
                className="inline-flex items-center font-medium text-blue-600 hover:underline"
            >
                See our guideline
                <svg
                    className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                </svg>
            </a>
        </div>
    );
};

const Services = () => {
    return (
        <div className="container mx-auto mt-10  py-8 grid gap-8">
            {/* First row: Two cards side by side */}
            <div className="grid grid-cols-1 sm:w-[95%] lg:w-[65rem] mx-4 sm:mx-auto sm:grid-cols-2 gap-4">
                <ServiceCard
                    icon={<MdVideoChat className="w-8 h-8 text-green-500 dark:text-green-400" />}
                    title="Online Consultations"
                    description="Consult with top doctors across various specialties via video or chat communication. It’s totally secure, private, and convenient. Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation."
                    link="/video-consultations"
                />
                <ServiceCard
                    icon={<BsFillCalendarDateFill className="w-7 h-7 text-green-500 dark:text-green-400" />}
                    title="Booking Appointments"
                    description="Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation features."
                    link="/booking-appointments"
                />
            </div>

            {/* Second row: Three cards side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:w-[95%] lg:w-[65rem] mx-4 sm:mx-auto gap-4">
                <ServiceCard
                    icon={<HiDocumentPlus className="w-7 h-7 text-green-500 dark:text-green-400" />}
                    title="Symptoms Assessment"
                    description="Receive and renew prescriptions digitally after your consultation with our specialists."
                    link="/prescriptions"
                />
                <ServiceCard
                    icon={<BsFillFileEarmarkMedicalFill className="w-7 h-7 text-green-500 dark:text-green-400" />}
                    title="First-Aid Assistance"
                    description="Obtain necessary medical notes for work or school with only a few clicks of hassle."
                    link="/medical-notes"
                />
                <ServiceCard
                    icon={<FaPumpMedical className="w-7 h-7 text-green-500 dark:text-green-400" />}
                    title="Online Pharmacies"
                    description="Skip the pharmacy queues and save time + energy by ordering medicine refills online."
                    link="/medicine-refills"
                />
            </div>
        </div>
    );
};

export default Services;
