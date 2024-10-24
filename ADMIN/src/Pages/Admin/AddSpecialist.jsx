import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { assets } from "../../assets/assets_admin/assets.js";

const AddSpecialist = () => {
    const [doctorInfo, setDoctorInfo] = useState({
        name: "",
        email: "",
        password: "",
        experience: "1 year",
        fees: "",
        aboutMe: "",
        speciality: "General physician",
        education: "",
        address1: "",
        address2: "",
        image: "",
        imagePreview: "", // For image preview
    });

    const handleChange = (e) => {
        setDoctorInfo({ ...doctorInfo, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setDoctorInfo((prevData) => ({
                ...prevData,
                image: img,
                imagePreview: URL.createObjectURL(img),
            }));
        }
    };

    const handleRemoveImage = () => {
        setDoctorInfo((prevData) => ({
            ...prevData,
            image: null,
            imagePreview: null,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Doctor Info Submitted: ", doctorInfo); // Make sure this line is inside handleSubmit
    };

    return (
        <div className="flex justify-center ml-4 mt-4 items-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Add Doctor</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Image Upload Section */}
                    <div>
                        <label htmlFor="doc-img">
                            {doctorInfo.imagePreview ? (
                                <div className="mb-4">
                                    <img
                                        src={doctorInfo.imagePreview}
                                        alt="Doctor Preview"
                                        className="w-32 h-32 object-cover rounded-xl"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleRemoveImage}
                                        className="text-red-500 underline text-sm mt-2"
                                    >
                                        Remove Image
                                    </button>
                                </div>
                            ) : (
                                <div className=" p-4 cursor-pointer">
                                    <img
                                        src={assets.upload_area}
                                        alt="Upload Specialist"
                                        className="w-16 h-16 mx-auto"
                                    />
                                    <p className="text-center mt-2 text-gray-600">Upload Specialist Picture</p>
                                </div>
                            )}
                        </label>
                        <input
                            required
                            type="file"
                            id="doc-img"
                            accept="image/*"
                            onChange={handleImageChange}
                            hidden
                        />
                    </div>

                    {/* Doctor Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Doctor Name</label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={doctorInfo.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Speciality */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Speciality</label>
                        <select
                            required
                            name="speciality"
                            value={doctorInfo.speciality}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            <option value="General physician">General physician</option>
                            <option value="Gynecologist">Gynecologist</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Pediatricians">Pediatricians</option>
                            <option value="Neurologist">Neurologist</option>
                            <option value="Gastroenterologist">Gastroenterologist</option>
                            {/* Add more specialties here */}
                        </select>
                    </div>

                    {/* Doctor Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Doctor Email</label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={doctorInfo.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Education */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                        <input
                            required
                            type="text"
                            name="education"
                            value={doctorInfo.education}
                            onChange={handleChange}
                            placeholder="Education"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Doctor Password</label>
                        <input
                            required
                            type="password"
                            name="password"
                            value={doctorInfo.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        <input
                            type="text"
                            required
                            name="address1"
                            value={doctorInfo.address1}
                            onChange={handleChange}
                            placeholder="Address 1"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <input
                            required
                            type="text"
                            name="address2"
                            value={doctorInfo.address2}
                            onChange={handleChange}
                            placeholder="Address 2"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Experience */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                        <select
                            required
                            name="experience"
                            value={doctorInfo.experience}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            <option value="1 year">1 year</option>
                            <option value="2 year">2 year</option>
                            <option value="3 year">3 year</option>
                            <option value="4 year">4 year</option>
                            <option value="5 year">5 year</option>
                            <option value="6 year">6 year</option>
                            <option value="7 year">7 year</option>
                            <option value="8 year">8 year</option>
                            <option value="9 year">9 year</option>
                            <option value="10 year">10 year</option>

                        </select>
                    </div>

                    {/* Fees */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Fees</label>
                        <input
                            required
                            type="number"
                            name="fees"
                            value={doctorInfo.fees}
                            onChange={handleChange}
                            placeholder="Your fees"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* About Me */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">About me</label>
                        <textarea
                            required
                            name="aboutMe"
                            value={doctorInfo.aboutMe}
                            onChange={handleChange}
                            placeholder="Write about yourself"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-2 flex justify-center">
                        <Button
                            type="submit"
                            variant="gradient"
                            size="sm"
                            className="bg-gradient-to-r from-teal-500 to-green-600 hover:from-green-600 hover:to-teal-500 px-6 py-2 rounded-md"
                        >
                            Add Doctor
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSpecialist;
