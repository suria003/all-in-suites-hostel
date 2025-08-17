import { ForgotPasswordContent, orContent } from "../../Components/js/content";
import Info from "../../Components/Info";
import logo from "../../../assets/logo.png";

export default function ForgetPassword() {
    return (
        <section className="h-full w-full flex items-center justify-center bg-transparent p-6 overflow-hidden">
            <form className="w-full max-w-sm bg-white p-8 rounded-xl shadow-0 space-y-6">

                {/* HEADERS */}
                <section className="relative w-auto h-[10%] bg-transparent">
                    <img
                        src={logo}
                        loading="lazy"
                        alt="lazy-bg"
                        className="w-auto h-full object-cover"
                    />
                </section>

                <div className="text-center">
                    <h1 className="text-2xl font-extrabold text-gray-900">
                        {orContent.forgotAccount.title}
                    </h1>
                </div>

                <div className="space-y-6">
                    {ForgotPasswordContent.map((item, index) => (
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
                                    {item.d && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 -960 960 960"
                                            fill="#9ca3af"
                                            className="inline-block ml-1 h-4 w-4"
                                        >
                                            <path d={item.d} />
                                        </svg>
                                    )}
                                    {item.label}
                                </label>

                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#ee7518] text-white font-semibold rounded-sm transition transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                        Forgot Password
                    </button>
                </div>

                <Info />
            </form>
        </section>
    );
};