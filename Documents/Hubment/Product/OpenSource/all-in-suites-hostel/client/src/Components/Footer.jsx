export default function Footer() {
    const oneArray = [
        { name: "About", href: "https://www.hubment.com/product/hostel-suites/about" },
        { name: "Portfolio", href: "https://www.hubment.com/product/hostel-suites" },
    ];

    const twoArray = [
        { name: "Privacy", href: "https://www.hubment.com/product/hostel-suites/privacy", },
        { name: "Terms", href: "https://www.hubment.com/product/hostel-suites/terms", },
        { name: "Disclaimer", href: "https://www.hubment.com/product/hostel-suites/disclaimer", },
    ];

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

            {/* Navigation Bar is Bottom View */}
            <div className="flex md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#ffffff"
                    // onClick={() => setOpen(!open)}
                    className="cursor-pointer"
                >
                    <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z" />
                </svg>
            </div>

        </footer>

    );
};