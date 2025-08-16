import Base from "./Base";
import PathNotFound from "./Components/PageNotFound";

// APPLICATION
import Dashboard from "./Dashborad";

// SECURITY
import Register from "./security/Base/Register";
import Login from "./security/Base/Login";

// VERIFICATION SECURITY
import VerifySecurity from "./security/Base/VerifySecurity";

export const router = [
    { path: "*", element: PathNotFound },
    { path: "/", element: Base },
    { path: "/:token/dashboard/:profile_name/:profile_token", element: Dashboard },
];

export const security = [
    { path: "/create_account/:token", element: Register },
    { path: "/login", element: Login },
];

export const verifySecurity = [
    { path: "/:token/verify/:passcode", element: VerifySecurity },
];

export default { router, security, verifySecurity };