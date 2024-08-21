import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { Info } from "./pages/Info/Info";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Login } from "./pages/Login/login";
import { Register } from "./pages/Register/register";
import { AuthProvider } from "./contexts/AuthContext";
import { Donate } from "./pages/Donate/Donate";
import { ListDonates } from "./pages/ListDonates/ListDonates";
import Profile from "./pages/Profile/Profile";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <div className="relative">
            <Routes>
              <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/info" element={<Info />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/listdonates" element={<ListDonates />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}