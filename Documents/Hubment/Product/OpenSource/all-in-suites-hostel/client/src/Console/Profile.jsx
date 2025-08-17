import { useState } from "react";

import Content from "./js/Content";
import Logout from "../security/Base/Logout";

import logo from "../assets/logo.png";

export default function Profile() {
    const [open, setOpen] = useState(false);

    const dummy = Content.ProfileDummyData;

    return (
        <div className="w-full max-h-fit bg-transparent flex justify-center md:justify-between items-center px-6">

            {/* LOGO */}
            <div
                className="w-[50%] md:w-[200px] h-auto flex items-center justify-center transition-all duration-700"
            >
                <img
                    src={logo}
                    loading="lazy"
                    alt="lazy-bg"
                    className="w-full h-auto object-cover"
                />
            </div>

            <div
                title="profile"
                onClick={() => setOpen(!open)}
                className="hidden w-12 h-12 md:flex items-center justify-center border border-[#f4f4f4] bg-gray-800 rounded-full cursor-pointer"
            >
                <span className="font-bold text-xl text-white">{dummy.name[0]}</span>
            </div>

            {open && (
                <div className="absolute right-7 top-14 w-[280px] max-h-fit bg-gray-900 rounded-lg shadow-2xl p-5 hidden md:flex flex-col">

                    {/* ACCOUNT INFO */}
                    <div className="flex items-center gap-4 border-b border-gray-700 pb-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#f4f4f4] to-[#ffffff] flex items-center justify-center text-[#ee7518] font-bold text-xl shadow-md">
                            {dummy.name?.charAt(0)}
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-white">
                                {dummy.name}
                            </h2>
                            <p className="text-sm text-gray-400">{dummy.mail}</p>
                        </div>
                    </div>

                    {/* LOGOUT BUTTON */}
                    <div className="mt-auto pt-4 border-t border-gray-700">
                        <Logout />
                    </div>

                </div>
            )}

        </div>
    );
};