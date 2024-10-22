import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Contexts/AppContext.jsx";
import { assets } from "../../assets/assets_frontend/assets.js";
import { Button } from "@material-tailwind/react";
import Navbar from "../Navbar.jsx";
import RelatedDoctors from "../Specialist/RelatedDoctors.jsx";

function DoctorDescriptions() {
    const navigate = useNavigate();
    const { docId } = useParams();
    const { doctors, currencySymbol } = useContext(AppContext);
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const [docInfo, setDocInfo] = useState(null);
    const [docSlot, setDocSlot] = useState([null]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState('');

    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id === docId);
        setDocInfo(docInfo);
        console.log(docInfo);
    };

    const getAvailableSlots = async () => {
        setDocSlot([]); // Clear previous slots

        let today = new Date();
        let tempDocSlots = []; // Temporary array to store slots before updating the state

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            // Set end time for the day
            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);

            // Set initial time for available slots
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }

            let timeSlots = [];

            // Generate time slots for the current day
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime,
                });

                // Increment time by 1 hour
                currentDate.setMinutes(currentDate.getMinutes() + 60);
            }

            tempDocSlots.push(timeSlots); // Add slots for the current day to the temp array
        }

        // Filter out empty slots
        const filteredSlots = tempDocSlots.filter(daySlots => daySlots.length > 0);

        setDocSlot(filteredSlots); // Update the state with the filtered slots
    };

    useEffect(() => {
        fetchDocInfo();
    }, [doctors, docId]);

    useEffect(() => {
        getAvailableSlots();
    }, [docInfo]);

    useEffect(() => {
        console.log(docSlot);
    }, [docSlot]);

    return docInfo && (
        <>
            <Navbar />

            {/* Doctor details */}
            <div className="flex justify-center flex-col sm:flex-row gap-6 mt-24 p-4 sm:p-8">
                <div className="flex flex-shrink-0 w-full justify-center sm:w-64 h-full transition-transform duration-300 hover:scale-105">
                    <img className="bg-teal-200 h-[18rem] object-cover rounded-lg shadow-lg hover:shadow-xl" src={docInfo.image} alt="Doctor" />
                </div>

                <div className="flex-1 border border-gray-400 max-w-[60rem] rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
                    <p className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                        {docInfo.name}
                        <img className="w-5" src={assets.verified_icon} alt="Verified" />
                    </p>

                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <Button variant="outlined" size="sm">{docInfo.experience}</Button>
                    </div>

                    <div>
                        <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                            About
                            <img src={assets.info_icon} alt="Info" />
                        </p>
                        <p className="text-sm text-gray-500 max-w-[50rem] mt-1 leading-relaxed">{docInfo.about}</p>
                    </div>
                    <p className="text-gray-700 font-semibold mt-4">
                        Appointment Fee: <span className="text-teal-600 font-bold">{currencySymbol} {docInfo.fees}</span>
                    </p>
                </div>
            </div>

            {/* Booking Slots Section */}
            <div className="mt-4 w-full max-w-[60rem] mx-auto">
                <div className="p-4">
                    <p className="font-bold text-2xl text-teal-600 ">Booking Slots</p>
                    <hr className={"m-2"}/>
                    <div className="flex flex-wrap gap-3 mt-4 ">
                        {docSlot.length &&
                            docSlot.map((item, index) => (
                                <Button
                                    key={index}
                                    onClick={() => setSlotIndex(index)}
                                    className={`cursor-pointer rounded-lg px-4 py-2 text-center transition-colors duration-300 transform hover:scale-105 ${
                                        slotIndex === index
                                            ? "bg-teal-400 text-white shadow-lg"
                                            : "bg-gray-100 text-gray-700 shadow-md"
                                    }`}
                                >
                                    <p className="text-sm font-medium">{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                    <p className="text-lg font-bold">{item[0] && item[0].datetime.getDate()}</p>
                                </Button>
                            ))}
                    </div>

                    {/* Time Slots */}
                    <hr className={"m-5"}/>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {docSlot[slotIndex] &&
                            docSlot[slotIndex].map((slot, idx) => (
                                <Button
                                    key={idx}
                                    onClick={() => setSlotTime(slot.time)}
                                    className={`cursor-pointer text-sm border px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
                                        slotTime === slot.time ? "bg-teal-400 text-white shadow-lg" : "bg-white" +
                                            " text-gray-700 shadow-md"
                                    }`}
                                >
                                    {slot.time}
                                </Button>
                            ))}
                    </div>

                    {/* Book Appointment Button */}
                    <div className="mt-10 text-center">
                        <Button
                            onClick={() => navigate("/appointment")}
                            className="bg-gradient-to-l from-green-400 to-teal-500 text-white px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
                            Book an Appointment
                        </Button>
                    </div>
                </div>

            </div>
            {/*Related Doctors*/}
            <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
        </>
    );
}

export default DoctorDescriptions;
