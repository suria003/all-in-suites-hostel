import { orContent } from "../../Components/js/content";

export default function VerifySecurity() {
    return (
        <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-50 p-6 overflow-hidden">
            <form className="w-full max-w-sm bg-transparent p-8 rounded-2xl space-y-6 relative z-10">

                <div className="text-center">
                    <h1 className="text-2xl font-extrabold text-gray-900">
                        {orContent.verifyContent.title}
                    </h1>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#ee7518] text-white font-semibold rounded-sm transition transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                        Conform Verify
                    </button>
                </div>
            </form>
        </section>
    );
};
