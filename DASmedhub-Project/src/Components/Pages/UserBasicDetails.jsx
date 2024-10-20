import React, { useState } from 'react';
import Navbar from "../Navbar.jsx";
import axios from "axios";
import ErrorPopup from "../ErrorPopup.jsx";
import SuccessPopup from "../SuccessPopup.jsx";

function ProfileForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        birthDate: '',
        email: '',
        location: '',
        phoneNumber: '',
        image: '',
        imagePreview: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const data = new FormData();
            data.append('fullName', formData.fullName);
            data.append('gender', formData.gender);
            data.append('birthDate', formData.birthDate);
            data.append('email', formData.email);
            data.append('location', formData.location);
            data.append('phoneNumber', formData.phoneNumber);

            if (formData.image) {
                data.append('image', formData.image);
            }

            await axios.post('http://localhost:5000/userData', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setSuccess('User Data Saved Successfully');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred while saving the data.');
            }
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setFormData((prevData) => ({
                ...prevData,
                image: img,
                imagePreview: URL.createObjectURL(img),
            }));
        }
    };

    const handleRemoveImage = () => {
        setFormData((prevData) => ({
            ...prevData,
            image: null,
            imagePreview: null,
        }));
    };

    return (
        <>
            <Navbar />

            <div className="relative mt-20 sm:mt-20 md:mt-18 max-w-7xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg">
                {error && <ErrorPopup message={error} />}
                {success && <SuccessPopup message={success} />}

                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-600 mb-4">Basic Information</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">Update your profile information below.</p>

                <form
                    onSubmit={handleSubmit}
                    method={"post"}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
                    encType={"multipart/form-data"}
                >
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-green-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border-2 p-3 border-teal-100 focus:border-teal-500 text-black bg-transparent placeholder:text-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
                            placeholder="Emma"
                        />
                    </div>

                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-green-700">
                            Gender
                        </label>
                        <select
                            id="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border-2 p-3 border-teal-100 focus:border-teal-500 text-black bg-transparent placeholder:text-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
                        >
                            <option value=""></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="birthDate" className="block text-sm font-medium text-green-700">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border-2 p-3 border-teal-100 focus:border-teal-500 text-black bg-transparent placeholder:text-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-green-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border-2 p-3 border-teal-100 focus:border-teal-500 text-black bg-transparent placeholder:text-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
                            placeholder="emma@mail.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-green-700">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border-2 p-3 border-teal-100 focus:border-teal-500 text-black bg-transparent placeholder:text-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
                            placeholder="Florida, USA"
                        />
                    </div>

                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-green-700">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 rounded-md border-2 p-3 border-teal-100 focus:border-teal-500 text-black bg-transparent placeholder:text-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-400"
                            placeholder="+123 0123 456 789"
                        />
                    </div>

                    <div className="col-span-2 flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700">Select and Upload image</label>
                            <span className="text-xs text-gray-500">.svg, .png, .jpg (size 400x400px)</span>
                            <input
                                type="file"
                                accept=".svg, .png, .jpg"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </div>
                        <div className=" space-x-5">
                            {formData.imagePreview && (
                                <img
                                    src={formData.imagePreview}
                                    alt="Avatar Preview"
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                            )}
                            <button
                                type="button"
                                className="bg-gradient-to-r from-teal-500 to-green-600 text-white py-2 px-4 rounded-md"
                                onClick={() => document.querySelector('input[type="file"]').click()}
                            >
                                Upload Avatar
                            </button>
                            <button
                                type="button"
                                className="bg-gray-300 text-black py-2 px-4 rounded-md"
                                onClick={handleRemoveImage}
                            >
                                Remove
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center col-span-2">
                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-green-600 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition"
                        >
                            Save Profile
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ProfileForm;
