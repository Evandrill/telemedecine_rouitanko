import {useContext, useState} from "react";
import { Button, Input, Typography, Checkbox } from "@material-tailwind/react";
import { motion } from "framer-motion";
import {AdminContext} from "../Contexts/AdminContext.jsx";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState("Admin");


    const {setAToken, backendURL} = useContext(AdminContext);


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        // Implement your login logic here
        console.log({ email, password });

        try {
            if (state === "Admin") {
                const { data } = await axios.post(backendURL + "/specialist-login/admin-login", { email, password });
                if (data.success) {
                    localStorage.setItem("aToken", data.token);
                    setAToken(data.token);
                    toast.success("Login Successfully");
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            toast.error("Check Credentials..");
        }




    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <motion.form
                className="flex items-center w-full max-w-lg p-6 bg-white border rounded-xl shadow-lg m-4 sm:m-0"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                onSubmit={onSubmitHandler}
            >
                <div className="flex flex-col gap-4 w-full">
                    <Typography variant="h4" color="teal" className="text-4xl text-center mb-4">
                        {state} Login
                    </Typography>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border-2 focus:shadow-lg border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-teal-500 transition-colors"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border-2 focus:shadow-lg border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-teal-500 transition-colors"
                        />
                        <Typography
                            variant="small"
                            color="gray"
                            className="mt-2 flex items-start gap-1 font-normal"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className=" h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Use at least 8 characters, one uppercase, one lowercase, and one number.
                        </Typography>
                    </div>
                    <Button
                        color="teal"
                        className="w-full mt-6"
                        type="submit"
                    >
                        Login
                    </Button>
                    {
                        state === "Admin"
                        ? <p className={"text-teal-500"}>Specialist Login ? <span className={"text-black" +
                                " cursor-pointer" +
                                " hover:underline hover:text-blue-500"} onClick={() => setState("Specialist")}>Click Here</span></p>
                        : <p className={"text-teal-500"}>Admin Login ? <span className={"text-black cursor-pointer" +
                                " hover:underline" +
                                " hover:text-blue-500"} onClick={() => setState("Admin")}>Click Here</span></p>
                    }
                </div>
            </motion.form>
            <ToastContainer/>
        </div>
    );
}

export default Login;
