import React, { useState } from "react";


const AddSpecialist = () => {
    const [doctorInfo, setDoctorInfo] = useState({
        name: "",
        email: "",
        password: "",
        experience: "",
        fees: "",
        aboutMe: "",
        speciality: "General physician",
        education: "",
        address1: "",
        address2: "",
        image: null,
    });

    const handleChange = (e) => {
        setDoctorInfo({ ...doctorInfo, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setDoctorInfo({ ...doctorInfo, image: URL.createObjectURL(file) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Doctor Info Submitted: ", doctorInfo);
    };

    return (
        <div className="flex justify-center items-center min-h-screen mt-16 px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 max-w-4xl w-full">
                <h2 className="text-2xl font-semibold mb-6">Add Doctor</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Image Preview on the Left */}
                    <div className="flex flex-col items-center justify-center">
                        {doctorInfo.image ? (
                            <img src={doctorInfo.image} alt="Doctor Preview" className="w-24 h-24 rounded-full object-cover mb-4" />
                        ) : (
                            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                                <span className="text-sm text-gray-500">No image</span>
                            </div>
                        )}
                    </div>

                    {/* Image Upload Input on the Right */}
                    <div className="flex flex-col justify-center">
                        <label className="block text-sm font-medium mb-2">Upload Doctor Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Doctor Name */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Doctor Name</label>
                        <input
                            type="text"
                            name="name"
                            value={doctorInfo.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Speciality */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Speciality</label>
                        <select
                            name="speciality"
                            value={doctorInfo.speciality}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        >
                            <option value="General physician">General physician</option>
                            <option value="Surgeon">Surgeon</option>
                            <option value="Pediatrician">Pediatrician</option>
                            {/* Add more specialities here */}
                        </select>
                    </div>

                    {/* Doctor Email */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Doctor Email</label>
                        <input
                            type="email"
                            name="email"
                            value={doctorInfo.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Education */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Education</label>
                        <input
                            type="text"
                            name="education"
                            value={doctorInfo.education}
                            onChange={handleChange}
                            placeholder="Education"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Doctor Password</label>
                        <input
                            type="password"
                            name="password"
                            value={doctorInfo.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Address</label>
                        <input
                            type="text"
                            name="address1"
                            value={doctorInfo.address1}
                            onChange={handleChange}
                            placeholder="Address 1"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <input
                            type="text"
                            name="address2"
                            value={doctorInfo.address2}
                            onChange={handleChange}
                            placeholder="Address 2"
                            className="w-full px-3 py-2 border rounded-lg mt-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Experience */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Experience</label>
                        <select
                            name="experience"
                            value={doctorInfo.experience}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        >
                            <option value="0-1 years">0-1 years</option>
                            <option value="2-5 years">2-5 years</option>
                            <option value="6-10 years">6-10 years</option>
                            <option value="10+ years">10+ years</option>
                        </select>
                    </div>

                    {/* Fees */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Fees</label>
                        <input
                            type="text"
                            name="fees"
                            value={doctorInfo.fees}
                            onChange={handleChange}
                            placeholder="Your fees"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* About Me */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium mb-2">About me</label>
                        <textarea
                            name="aboutMe"
                            value={doctorInfo.aboutMe}
                            onChange={handleChange}
                            placeholder="Write about yourself"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Add doctor
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSpecialist;
