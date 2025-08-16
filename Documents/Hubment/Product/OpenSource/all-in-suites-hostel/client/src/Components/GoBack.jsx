import { useNavigate } from "react-router-dom";

export default function GoBack() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <button
            onClick={handleBack}
            aria-label="Go Back"
            className="p-2 rounded-full hover:bg-gray-100 transition-all shadow-sm active:scale-95 cursor-pointer"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="currentColor"
            >
                <path d="m287-446.67 240 240L480-160 160-480l320-320 47 46.67-240 240h513v66.66H287Z" />
            </svg>
        </button>
    );
}