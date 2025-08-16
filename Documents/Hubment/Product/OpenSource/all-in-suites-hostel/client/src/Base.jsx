import ShowProfile from "./Console/ShowProfile";
import CreateProfile from "./Console/CreateProfile";

export default function Base(){
    return(
        <main className="h-screen w-full bg-transparent flex justify-center items-center">
            <ShowProfile />
            <CreateProfile />
        </main>
    );
};