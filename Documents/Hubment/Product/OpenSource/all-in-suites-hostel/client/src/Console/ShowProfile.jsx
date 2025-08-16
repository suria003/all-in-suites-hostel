import Content from "./js/Content";

export default function ShowProfile() {
    const Dummy = Content.DummyData;

    const Res_info = {
        "Title":"Show Profile Page",
        "Version": 1.0,
        "Render":"Console",
        "Router":"/",
        "Handle":"Multiple Profile Response",
        "Redirect":"/:token/dashboard/:profile_name/:profile_token",
        
        "API":{
            "Status":"Response",
            "End Point":"/p",
        },

        "validate":{
            "session":"session token",
            "token":"#token",
        },

        "Request_data":{
            "Array":{
                "profile_name":"name",
                "profile_address":"address",
                "active":"numeric_value",
            },

            "origin":{
                "token":"tkn",
                "profile_token":"profile_tkn",
            }
        }
    };

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full h-[90%] overflow-y-scroll">
            {Dummy.filter((item) => item.active === 0).map((item, index) => (
                <div
                    key={index}
                    onClick={() => (window.location.href = item.to)}
                    className="flex flex-col items-center bg-white max-h-fit shadow-md rounded-lg p-6 border-[2px] border-[#f4f4f4] transition cursor-pointer"
                >

                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#ee7518] to-[#f59c54] text-white text-xl font-bold shadow-md mb-4">
                        {item.profile_name[0]}
                    </div>

                    <h2 className="text-lg text-center font-semibold text-gray-800">{item.profile_name}</h2>
                    <p className="text-sm text-gray-500 text-center mt-1">
                        {item.profile_address}
                    </p>

                </div>
            ))}
        </section>
    );
};