import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";

import Welcome from "../pages/public/Welcome";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Subscription from "../pages/public/Subscription";

import Auth from "../pages/auth/Auth";

function AppRoutes() {
    return (
        <Routes>

            {/* Welcome / Entrance */}
            <Route path="/" element={<Welcome />} />

            {/* Home */}
            <Route
                path="/home"
                element={
                    <>
                        <Navbar />
                        <Home />
                    </>
                }
            />

            {/* About */}
            <Route
                path="/about"
                element={
                    <>
                        <Navbar />
                        <About />
                    </>
                }
            />

            {/* Contact */}
            <Route
                path="/contact"
                element={
                    <>
                        <Navbar />
                        <Contact />
                    </>
                }
            />

            {/* Subscription */}
            <Route
                path="/subscription"
                element={
                    <>
                        <Navbar />
                        <Subscription />
                    </>
                }
            />

            {/* Auth */}
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />

        </Routes>
    );
}

export default AppRoutes;