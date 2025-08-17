import { useState } from "react";
import { NewPasswordContent, orContent } from "../../Components/js/content";

export default function NewPassword() {
    const [showPassword, setShowPassword] = useState({});

    const togglePassword = (fieldName) => {
        setShowPassword((prev) => ({
            ...prev,
            [fieldName]: !prev[fieldName],
        }));
    };

    return (
        <section className="h-screen w-full flex items-center justify-center bg-transparent p-6 overflow-hidden">
            <form className="w-full max-w-sm bg-white p-8 rounded-xl shadow-0 space-y-6">
                <div className="text-center">
                    <h1 className="text-2xl font-extrabold text-gray-900">
                        {orContent.passwordContent.title}
                    </h1>
                </div>

                <div className="space-y-6">
                    {NewPasswordContent.map((item, index) => (
                        <div key={index} className="relative">

                            <div className="relative w-full">
                                <input
                                    type={
                                        item.type === "password"
                                            ? showPassword[item.name]
                                                ? "text"
                                                : "password"
                                            : item.type
                                    }
                                    name={item.name}
                                    placeholder=" "
                                    readOnly={item.readOnlyField}
                                    required={item.requiredField}
                                    className="peer w-full px-4 py-3 pr-12 border rounded-sm text-gray-800 outline-0 focus:border-orange-500"
                                />

                                <label
                                    htmlFor={item.name}
                                    className="absolute left-2 text-gray-500 flex justify-center items-center transition-all duration-200 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 -top-3 text-sm peer-focus:-top-3 peer-focus:text-orange-600" >
                                    {item.label}
                                </label>

                                {item.type === "password" && (
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-600 transition cursor-pointer"
                                        onClick={() => togglePassword(item.name)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 -960 960 960"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                d={
                                                    showPassword[item.name]
                                                        ? item.eyeClose_d
                                                        : item.eyeOpen_d
                                                }
                                            />
                                        </svg>
                                    </button>
                                )}

                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#ee7518] text-white font-semibold rounded-sm transition transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                        Create Password
                    </button>
                </div>

            </form>
        </section>
    );
};