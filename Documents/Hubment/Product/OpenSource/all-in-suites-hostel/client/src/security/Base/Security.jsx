import SecurityRegister from "./Controller/Register";
import SecurityLogin from "./Controller/Login";
import ForgetPassword from "./Controller/ForgetPassword";

export default function Security() {
    const RegisterPage = [SecurityRegister];
    const LoginPage = [SecurityLogin];
    const ForgotPage = [ForgetPassword];

    const path = window.location.pathname;

    return (
        <main className="flex justify-center items-center h-screen w-full bg-transparent overflow-hidden">

            {path === "/create_account" &&
                RegisterPage.map((Component, index) => (
                    <div key={index} className="w-full h-full">
                        <Component />
                    </div>
                ))}

            {path === "/login" &&
                LoginPage.map((Component, index) => (
                    <div key={index} className="w-full h-full">
                        <Component />
                    </div>
                ))}

            {path === "/forgot/password" && 
                ForgotPage.map((Component, index) => (
                    <div key={index} className="w-full h-full">
                        <Component />
                    </div>
                )) }
        </main>
    );
}
