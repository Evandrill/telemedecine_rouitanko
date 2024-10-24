import React, { useState, useCallback } from 'react';
import Navbar from "../Navbar.jsx";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import {Button} from "@material-tailwind/react";
import {NavLink} from "react-router-dom";

// Optimized Loader Component
const Loader = () => (
    <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
    </div>
);

function MedhubChatbot() {
    const [messages, setMessages] = useState([
        { text: "Provide your symptoms...", type: "bot" },
    ]);
    const [input, setInput] = useState('');
    const [generatingAnswer, setGeneratingAnswer] = useState(false);

    // Optimized handleSend function using useCallback to prevent unnecessary re-renders
    const handleSend = useCallback(async () => {
        if (!input.trim()) return;

        const newMessage = { text: input, type: "user" };
        setMessages(prevMessages => [...prevMessages, newMessage]);
        setInput('');

        // Show a loader while the bot is generating the response
        setMessages(prevMessages => [...prevMessages, { text: "loading", type: "loading" }]);
        setGeneratingAnswer(true);

        try {
            // Call Gemini API
            const response = await axios({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBKw42Mu8rChaIlduxxgfvo_9X_6xzsrQ4`,
                method: "post",
                data: {
                    contents: [{ parts: [{ text: input }] }],
                },
            });

            // Get the answer from the API response
            const answer = response.data?.candidates[0]?.content?.parts[0]?.text || "Sorry - Something went wrong. Please try again!";

            // Remove the loader and add the AI's response to the chat
            setMessages(prevMessages =>
                prevMessages.filter(msg => msg.type !== "loading").concat({ text: answer, type: "bot" })
            );
        } catch (error) {
            console.error(error);
            setMessages(prevMessages =>
                prevMessages.filter(msg => msg.type !== "loading").concat({ text: "Sorry - Something went wrong. Please try again!", type: "bot" })
            );
        } finally {
            setGeneratingAnswer(false);
        }
    }, [input]);

    return (
        <>
            <Navbar/>
            <div className="flex justify-center w-full">
                <div className="flex flex-col h-[46rem] w-[70rem] mt-[6rem]">
                    {/* Header */}
                    <header className="bg-gradient-to-r from-teal-500 to-green-600 mx-4 text-white p-6 rounded-lg shadow-md">
                        <h1 className="text-2xl font-bold text-center">DAS Medhub Chatbot</h1>
                        <p className="text-sm text-center mt-1">We're here to assist you in assessing your symptoms and providing guidance.</p>
                    </header>

                    {/* Chat Area */}
                    <div className="flex-1 p-4 overflow-y-auto">
                        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-3xl font-bold mb-6 text-center">Symptoms Assessment Chatbot</h2>

                            {messages.map((msg, index) => (
                                <div key={index} className={`mb-4 ${msg.type === 'user' ? 'text-right' : ''}`}>
                                    {msg.type === 'loading' ? (
                                        <Loader />
                                    ) : (
                                        <div
                                            className={`inline-block px-4 py-3 rounded-lg text-sm ${msg.type === 'user'
                                                ? 'bg-teal-400 text-white'
                                                : 'bg-gray-100 text-black'} shadow-sm transition-transform transform`}
                                        >
                                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Input Section */}
                    <div className="bg-white p-4 flex items-center border-t rounded-lg shadow-md">
                        <input
                            className={`flex-1 border-2 border-gray-300 rounded-lg p-3 focus:outline-none transition duration-300 
                                ${generatingAnswer ? 'cursor-not-allowed opacity-50' : 'focus:border-teal-500'}`}
                            type="text"
                            placeholder="Type your symptoms here..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            disabled={generatingAnswer}
                        />
                        <Button
                            onClick={handleSend}
                            size={"lg"}
                            className={`ml-2 px-6 py-3.5 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300 
                                ${generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={generatingAnswer}
                        >
                            {generatingAnswer ? <Loader /> : 'Send'}
                        </Button>
                    </div>

                    {/* Footer Buttons */}
                    <div className=" p-4 flex flex-col md:flex-row md:justify-evenly gap-4 md:gap-0 ">
                        <NavLink
                            to={'/'}
                        >
                            <Button size={"lg"} className={"bg-gradient-to-r from-teal-500 to-green-600 text-white" +
                                " py-2 px-6 rounded-lg shadow-md" +
                                " hover:bg-green-600 transition duration-300 w-full md:w-auto"} variant={"gradient"}>Go to Doctor</Button>
                        </NavLink>
                        <NavLink
                            to={'/'}
                        >
                            <Button size={"lg"} className={"bg-gradient-to-r from-teal-500 to-green-600 text-white" +
                                " py-2 px-6 rounded-lg shadow-md" +
                                " hover:bg-green-600 transition duration-300 w-full md:w-auto"} variant="gradient">First Aid PAge</Button>
                        </NavLink>
                        <NavLink
                            to={'/'}
                        >
                            <Button size={"lg"} className={"bg-gradient-to-r from-teal-500 to-green-600 text-white py-2 px-6 rounded-lg shadow-md" +
                                " hover:bg-green-600 transition duration-300 w-full md:w-auto"} variant="gradient">Nearby Hospital</Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MedhubChatbot;
