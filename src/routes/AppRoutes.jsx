import { Routes, Route } from "react-router-dom";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Subscription from "../pages/public/Subscription";

import Auth from "../pages/auth/Auth";

function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/subscription" element={<Subscription />} />

            <Route path="/login" element={<Auth />} />

            <Route path="/signup" element={<Auth />} />

        </Routes>
    );
}

export default AppRoutes;