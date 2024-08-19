import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { Info } from "./pages/Info/Info";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Login } from "./pages/Login/login";
import { Register } from "./pages/Register/register";
import { AuthProvider } from "./contexts/AuthContext";
import { Donate } from "./pages/Donate/Donate";
import Profile from "./pages/Profile/Profile";

export function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/info" element={<Info />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}