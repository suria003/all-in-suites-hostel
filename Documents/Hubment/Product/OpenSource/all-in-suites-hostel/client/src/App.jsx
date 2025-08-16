import { BrowserRouter, Routes, Route } from "react-router-dom";

// ROUTER PAGE
import router from "./router";

export default function App() {

  const routers = router.router;
  const security = router.security;
  const verifySecurity = router.verifySecurity;

  return (
    <BrowserRouter>
      <Routes>

        {routers.map((item, index) => (
          <Route key={`router-${index}`} path={item.path} element={ <item.element /> } />
        ))}

        {security.map((item, index) => (
          <Route key={`security-${index}`} path={item.path} element={ <item.element /> } />
        ))}

        {verifySecurity.map((item, index) => (
          <Route key={`verify-${index}`} path={item.path} element={ <item.element /> } />
        ))}

      </Routes>
    </BrowserRouter>
  );
}