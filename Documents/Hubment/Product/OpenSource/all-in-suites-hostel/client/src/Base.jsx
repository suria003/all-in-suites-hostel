import ShowProfile from "./Console/ShowProfile";
import Profile from "./Console/Profile";
import Footer from "./Components/Footer";

export default function Base() {
    return (
        <main className="h-screen w-full bg-transparent flex flex-col justify-center items-center p-1">
            <Profile />
            {/* <section className="h-full w-auto"> */}
                <ShowProfile />
            {/* </section> */}

            <Footer />
        </main>
    );
};