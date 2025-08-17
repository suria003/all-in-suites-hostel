import Base from "./Base";
import PathNotFound from "./Components/PageNotFound";

// APPLICATION
import Dashboard from "./Dashboard";

// SECURITY
import Security from "./security/Base/Security";
import NewPassword from "./security/Base/Controller/NewPassword";

// VERIFICATION SECURITY
import VerifySecurity from "./security/Base/Controller/VerifySecurity";

export const router = [
    { path: "*", element: PathNotFound },
    { path: "/", element: Base },
    { path: "/:token/dashboard/:profile_name/:profile_token", element: Dashboard },
];

export const security = [
    { path: "/create_account", element: Security },
    { path: "/login", element: Security },
    { path: "/forgot/password", element: Security },
    { path: "/:encrypt_email/:tkn/new_password", element: NewPassword },
];

export const verifySecurity = [
    { path: "/:tkn/verify/:passcode", element: VerifySecurity },
];

export default { router, security, verifySecurity };