import { AppContext } from "../Contexts/AppContext.jsx";
import { useContext } from "react";
import { Button } from "@material-tailwind/react";
import Navbar from "../Navbar.jsx";

function UserAppointments() {
    const { doctors } = useContext(AppContext);

    return (
        <>
            <Navbar/>

            <div>
                <p className={"flex pb-3 mt-24 font-medium text-2xl text-gray-700 mx-10 border-b"}>My Appointments</p>
                <div>
                    {
                        doctors.slice(0, 3).map((item, index) => (
                            <div className={"grid grid-cols-1 sm:grid-cols-[1fr_3fr_1fr] gap-4 mx-8 sm:mx-36 py-4 border-b"} key={index}>
                                <div className={"flex justify-center sm:justify-start"}>
                                    <img className={"w-40 bg-teal-100 rounded-lg"} src={item.image} alt="Doctor's Image" />
                                </div>
                                <div className={"flex flex-col justify-center text-sm text-gray-700"}>
                                    <p className={"text-gray-800 font-semibold"}>{item.name}</p>
                                    <p className={"text-teal-400"}>{item.speciality}</p>
                                    <p className={"text-gray-700 font-medium mt-1"}>Address</p>
                                    <p className={"text-sm"}>{item.address.line1}</p>
                                    <p className={"text-sm"}>{item.address.line2}</p>
                                    <p className={"text-sm mt-1"}><span className={"text-sm text-gray-800 font-medium"}>Date & Time: </span>25 July, 2024 | 8:30 PM</p>
                                </div>
                                <div className={"flex flex-col gap-2 justify-center sm:justify-end "}>
                                    <Button variant={"outlined"} className={"text-sm text-gray-500 text-center sm:min-w-48 py-2 border hover:text-white hover:border-white hover:bg-gradient-to-r from-teal-500 to-green-600 transition-all duration-300"}>Pay Online</Button>
                                    <Button className={"text-sm text-white bg-red-500 text-center sm:min-w-48 py-2 hover:border-white hover:bg-red-900"}>Cancel Appointment</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default UserAppointments;
