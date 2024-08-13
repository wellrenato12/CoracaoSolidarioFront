import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { Info } from "./pages/Info/Info";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Login } from "./pages/Login/login";
import { Register } from "./pages/Register/register";
import { AuthProvider } from "./contexts/AuthContext";

export function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/info" element={<Info />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}