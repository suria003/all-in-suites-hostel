import { useState } from "react";

import Content from "./js/Content";

export default function CreateProfile() {
    const [open, setOpen] = useState(false);
    // const [error, setError] = useState("");

    const CreateProfileContent = Content.CreateProfileContent;

    const Req_info = {
        "Title":"Create Profile page.",
        "Version": 1.0,
        "Render":"Console",
        "Router":"/",
        "Handle":"Multiple Profile Request",

        "address":"/",

        "API":{
            "Status":"Request",
            "End Point":"/cp",
        },

        "validate":{
            "session":"session token",
            "address":"@address",
        }

    };

    return (
        <section>

            {/* CREATE BUTTON */}
            <div className="fixed bottom-3 left-1/2 -translate-x-1/2">
                <button onClick={() => setOpen(!open)} title="Add Profile" className="cursor-pointer bg-[#f4f4f4] p-2 rounded-lg border-2 border-[#f4f4f4]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" /></svg>
                </button>
            </div>

            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
                    <div className="w-[380px] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 animate-fadeIn">

                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">Create Profile</h2>
                        </div>

                        {/* Form */}
                        <form className="flex flex-col gap-4">

                            {CreateProfileContent.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500"
                                >
                                    {/* Icon */}
                                    <span className="text-gray-500 mr-2">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="30px"
                                            viewBox="0 -960 960 960"
                                            width="30px"
                                            fill="#000000"
                                        >
                                            <path d={item.d} />
                                        </svg>
                                    </span>

                                    <input
                                        type={item.type}
                                        name={item.name}
                                        placeholder={item.placeholder}
                                        readOnly={item.readOnlyField}
                                        required={item.requireField}
                                        className="flex-1 border-none outline-none bg-transparent"
                                    />
                                </div>
                            ))}

                            <div className="flex gap-2 mt-4">
                                <button
                                    type="submit"
                                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
                                >
                                    Create
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition cursor-pointer"
                                >
                                    Cancel
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}

        </section>
    );
}