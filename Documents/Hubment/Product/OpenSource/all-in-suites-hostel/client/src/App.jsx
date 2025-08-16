import { BrowserRouter, Routes, Route } from "react-router-dom";

import Base from "./Base";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}