import { useState } from "react";

import Content from "./js/Content";
// import Logout from "../security/Base/Logout";

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
                className="hidden w-12 h-12 md:flex items-center justify-center border border-[#f4f4f4] bg-gradient-to-r from-[#f59c54] to-[#ee7518] rounded-lg cursor-pointer"
            >
                <span className="font-bold text-3xl text-white">{dummy.name[0]}</span>
            </div>

        </div>
    );
};