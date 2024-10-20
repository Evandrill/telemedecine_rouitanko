import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-teal-50 text-gray-700 py-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        {/* Brand Name */}
                        <h1 className="text-3xl font-bold">
                            <span className="text-green-500">DAS</span>
                            <span className="text-orange-500">medhub</span>
                        </h1>
                        <p className="text-gray-500">
                            Experience personalized medical care from the comfort of your home.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mt-4 ">
                            <a href="#" className="text-teal-500 hover:text-teal-700 ">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" className="text-teal-500 hover:text-teal-700">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-teal-500 hover:text-teal-700">
                                <FaLinkedinIn size={20} />
                            </a>
                            <a href="#" className="text-teal-500 hover:text-teal-700">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                        <p className="text-gray-500">
                            <a>support@dasmedhub.com</a>
                        </p>
                    </div>

                    {/* Support Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-teal-500">Support</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Getting Started</a></li>
                            <li><a href="#" className="hover:underline">FAQS</a></li>
                            <li><a href="#" className="hover:underline">Help Articles</a></li>
                            <li><a href="#" className="hover:underline">Report an issue</a></li>
                            <li><a href="#" className="hover:underline">Contact Help Desk</a></li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-teal-500">Services</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Booking appointments</a></li>
                            <li><a href="#" className="hover:underline">Online consultations</a></li>
                            <li><a href="#" className="hover:underline">Symptoms Assessments</a></li>
                            <li><a href="#" className="hover:underline">First-aid Assistance</a></li>
                            <li><a href="#" className="hover:underline">Online Pharmacies</a></li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-teal-500">Legal</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Cookie Notice</a></li>
                            <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
                            <li><a href="#" className="hover:underline">Trust Center</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="mt-10 border-t border-teal-200 pt-4 text-end">
                    <p className="text-gray-500">
                        DASmedhub 2024 © All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
