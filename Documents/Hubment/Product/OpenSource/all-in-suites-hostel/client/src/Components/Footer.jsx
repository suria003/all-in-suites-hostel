import { useState } from "react";

import Logout from "../security/Base/Logout";
import Content from "../Console/js/Content";

export default function Footer() {
    const [open, setOpen] = useState(false);

    const oneArray = [
        { name: "About", href: "https://www.hubment.com/product/hostel-suites/about" },
        { name: "Portfolio", href: "https://www.hubment.com/product/hostel-suites" },
    ];

    const twoArray = [
        { name: "Privacy", href: "https://www.hubment.com/product/hostel-suites/privacy", },
        { name: "Terms", href: "https://www.hubment.com/product/hostel-suites/terms", },
        { name: "Disclaimer", href: "https://www.hubment.com/product/hostel-suites/disclaimer", },
    ];

    const accountInfo = Content.ProfileDummyData;

    const optionInfo = [ ...oneArray, ...twoArray];

    return (
        <footer className="flex border-none justify-center md:justify-between items-center w-full py-1 md:p-4 bg-gray-800 md:bg-transparent rounded-lg md:rounded-none">

            <div className="hidden md:flex gap-6">
                {oneArray.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="text-gray-300 text-md hover:underline hover:text-black transition"
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            <div className="hidden md:flex gap-6">
                {twoArray.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="text-gray-300 text-md hover:underline hover:text-black transition"
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            {/* NAVIGATION BAR BOTTOM VIEW */}
            <div className="flex md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#ffffff"
                    onClick={() => setOpen(!open)}
                    className="cursor-pointer"
                >
                    <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z" />
                </svg>
            </div>

            {/* FOOTER INFO NAVIGATOR */}
            {open && (
                <div className={`absolute bottom-14 left-1/2 -translate-x-1/2  bg-gray-900 w-[98%] h-[525px] rounded-2xl shadow-2xl  transform transition-all duration-500 ease-out flex md:hidden flex-col p-6 gap-6 ${open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} `} >

                    {/* ACCOUNT INFO */}
                    <div className="flex items-center gap-4 border-b border-gray-700 pb-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#f4f4f4] to-[#ffffff] flex items-center justify-center text-[#ee7518] font-bold text-xl">
                            {accountInfo.name?.charAt(0)}
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-white">
                                {accountInfo.name}
                            </h2>
                            <h1 className="text-sm text-gray-400">{accountInfo.mail}</h1>
                        </div>
                    </div>

                    {/* OPTION INFO */}
                    <div className="flex flex-col gap-3 overflow-y-auto">
                        {optionInfo.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white transition flex items-center justify-between"
                            >
                                <span>{item.name}</span>
                                <span className="text-gray-400">&gt;</span>
                            </a>
                        ))}
                    </div>

                    {/* Footer actions (optional) */}
                    <div className="mt-auto flex gap-3 pt-4 border-t border-gray-700">
                        <Logout />
                    </div>
                </div>
            )}

        </footer>

    );
};