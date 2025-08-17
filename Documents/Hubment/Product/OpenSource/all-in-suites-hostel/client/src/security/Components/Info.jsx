import { orContent } from "./js/content";

export default function Info() {
    const Array = orContent.controller;

    return (
        <footer className="max-w-fit bg-transparent">
            <div className="flex justify-center items-center gap-2">
                {Array.map((item, index) => (
                    <a
                        key={index}
                        href={item.redirect}
                        className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-600 hover:underline dark:hover:text-orange-400 transition"
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </footer>
    );
};