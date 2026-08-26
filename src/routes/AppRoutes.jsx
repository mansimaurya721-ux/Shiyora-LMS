import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Public
import Welcome from "../pages/public/Welcome";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Subscription from "../pages/public/Subscription";

// Auth
import Auth from "../pages/auth/Auth";

// SuperAdmin
import SuperAdminLayout from "../layouts/SuperAdminLayout";
import Dashboard from "../pages/superAdmin/Dashboard";
import Organizations from "../pages/superAdmin/Organizations";
import Users from "../pages/superAdmin/Users";
import Courses from "../pages/superAdmin/Courses";
import Subscriptions from "../pages/superAdmin/Subscriptions";
import Reports from "../pages/superAdmin/Reports";
import Settings from "../pages/superAdmin/Settings";

function AppRoutes() {
    return (
        <Routes>

            {/* Public Pages */}

            <Route
                path="/"
                element={<Welcome />}
            />

            <Route
                path="/home"
                element={
                    <>
                        <Navbar />
                        <Home />
                        <Footer />
                    </>
                }
            />

            <Route
                path="/about"
                element={
                    <>
                        <Navbar />
                        <About />
                        <Footer />
                    </>
                }
            />

            <Route
                path="/contact"
                element={
                    <>
                        <Navbar />
                        <Contact />
                        <Footer />
                    </>
                }
            />

            <Route
                path="/subscription"
                element={
                    <>
                        <Navbar />
                        <Subscription />
                        <Footer />
                    </>
                }
            />

            {/* Authentication */}

            <Route
                path="/login"
                element={<Auth />}
            />

            <Route
                path="/signup"
                element={<Auth />}
            />

            {/* SuperAdmin */}

            <Route
                path="/superadmin"
                element={<SuperAdminLayout />}
            >
                {/* /superadmin → /superadmin/dashboard */}

                <Route
                    index
                    element={
                        <Navigate
                            to="dashboard"
                            replace
                        />
                    }
                />

                {/* Dashboard */}

                <Route
                    path="dashboard"
                    element={<Dashboard />}
                />

                {/* Organizations */}

                <Route
                    path="organizations"
                    element={<Organizations />}
                />

                {/* Users */}

                <Route
                    path="users"
                    element={<Users />}
                />

                {/* Courses */}

                <Route
                    path="courses"
                    element={<Courses />}
                />

                {/* Subscriptions */}

                <Route
                    path="subscriptions"
                    element={<Subscriptions />}
                />

                {/* Reports */}

                <Route
                    path="reports"
                    element={<Reports />}
                />

                {/* Settings */}

                <Route
                    path="settings"
                    element={<Settings />}
                />

            </Route>

            {/* Unknown Route */}

            <Route
                path="*"
                element={
                    <Navigate
                        to="/"
                        replace
                    />
                }
            />

        </Routes>
    );
}

export default AppRoutes;