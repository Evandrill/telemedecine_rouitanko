import {Button} from "@material-tailwind/react";
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import BelowHomeForm from "../Home/BelowHomeForm.jsx";
import Navbar from "../Navbar.jsx";
import Services from "../Home/ServiceCards.jsx";
import DASMedhubStory from "../Home/DASMedhubStory.jsx";
import PlatformInfoHome from "../Home/PlatformInfoHome.jsx";
import Testimonials from "../Home/Testimonials.jsx";
import HelpDeskForm from "../Home/HelpDeskForm.jsx";
import Footer from "../Footer.jsx";
import TopDoctors from "../Home/TopDoctors.jsx";


function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-screen-xl mx-auto py-12 mt-10 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
                {/* Left Section - Text & Buttons */}
                <div className="flex flex-col max-w-lg space-y-8 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        <span className="bg-gradient-to-r from-teal-400 via-green-500 to-green-700 text-4xl inline-block text-transparent bg-clip-text">Connecting Patients,</span> Accelerating Healing.
                    </h1>
                    <p className="text-gray-500 leading-relaxed">
                        Empowering Your Health at Every Step. Experience personalized medical care from the comfort of your home. Connect with <span className="text-green-600">certified doctors</span>,
                        manage prescriptions, and schedule appointments with ease. Ready to take control of your health? Get Started or Book an Appointment today.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <Button
                            onClick={()=>navigate('/Patient-register')}
                            variant="gradient" size="lg" className={"bg-gradient-to-r from-teal-500" +
                            " to-green-600"}>
                            <Link to={"/Patient-register"}>
                                Patient's Login
                            </Link>
                        </Button>
                        <Button
                            onClick={()=>navigate('/Specialist-register')}
                            variant="gradient" size="lg" className={"bg-gradient-to-r from-teal-500 to-green-600"}>
                            <Link to={"/Specialist-register"}>
                                Health Specialist's Login
                            </Link>
                        </Button>
                    </div>
                    <p className="text-gray-500 leading-relaxed">
                        Trusted by millions across the globe:
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 mt-4">
                        <img src="/icons/ri_amazon-fill.png" alt="Amazon" className="h-8"/>
                        <img src="/icons/ic_baseline-apple.png" alt="Apple" className="h-8"/>
                        <img src="/icons/uim_google.png" alt="Google" className="h-8"/>
                        <img src="/icons/cib_notion.png" alt="Notion" className="h-8"/>
                        <img src="/icons/mdi_spotify.png" alt="Spotify" className="h-8"/>
                        <img src="/icons/mdi_slack.png" alt="Slack" className="h-8"/>
                    </div>
                </div>

                {/* Right Section - Doctor Image */}
                <div className=" relative flex flex-col items-center">
                    <img
                        alt="doctor"
                        className="h-64 sm:h-72 md:h-[32rem] object-cover"
                        src="/home-doctor.png"
                    />
                </div>
            </div>
            <BelowHomeForm/>
            <div className="mt-8 sm:mt-12 md:mt-16 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                    Top <span className="bg-gradient-to-r from-teal-400 via-green-500 to-green-700 inline-block text-transparent bg-clip-text">Services</span> we offer
                </h1>
                <p className="text-gray-500 leading-relaxed mt-4 sm:mt-6 px-4 sm:px-12 md:px-24 lg:px-52">
                    In today’s fast-paced world, your health deserves the utmost attention and convenience. That’s why
                    DASmedhub offers a suite of integrated services designed to cater to your healthcare needs digitally:
                </p>
            </div>
            <Services/>
            <DASMedhubStory/>
            <PlatformInfoHome/>
            <Testimonials/>
            <TopDoctors/>
            <HelpDeskForm/>
            <Footer/>
        </>
    )
}

export default Home;
