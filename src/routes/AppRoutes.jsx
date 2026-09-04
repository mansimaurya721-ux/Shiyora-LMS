import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// =====================================================
// PUBLIC PAGES
// =====================================================

import Welcome from "../pages/public/Welcome";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Subscription from "../pages/public/Subscription";
import Feature from "../pages/public/Feature";
import Course from "../pages/public/Course";

// =====================================================
// AUTH
// =====================================================

import Auth from "../pages/auth/Auth";

// =====================================================
// SUPER ADMIN
// =====================================================

import SuperAdminLayout from "../layouts/SuperAdminLayout";

import SuperAdminDashboard from "../pages/superAdmin/Dashboard";
import Organizations from "../pages/superAdmin/Organizations";
import SuperAdminUsers from "../pages/superAdmin/Users";
import SuperAdminSubscriptions from "../pages/superAdmin/Subscriptions";
import SuperAdminCourses from "../pages/superAdmin/Courses";
import Reports from "../pages/superAdmin/Reports";
import Settings from "../pages/superAdmin/Settings";
import Support from "../pages/superAdmin/Support";

// =====================================================
// ADMIN
// =====================================================

import AdminLayout from "../layouts/AdminLayout";

import AdminDashboard from "../pages/admin/Dashboard";
import AdminCourses from "../pages/admin/Courses";
import Students from "../pages/admin/Students";
import Teachers from "../pages/admin/Teachers";
import AdminSubscriptions from "../pages/admin/Subscription";
import AdminSupport from "../pages/admin/Support";

// IMPORTANT:
// Make sure this file exists:
// src/pages/admin/Settings.jsx
import AdminSettings from "../pages/admin/Settings";

// =====================================================
// STUDENT
// =====================================================

import StudentLayout from "../layouts/StudentLayout";

import StudentDashboard from "../pages/student/Dashboard";
import MyCourses from "../pages/student/MyCourses";
import AllCourses from "../pages/student/AllCourses";
import Assignments from "../pages/student/Assignments";
import Progress from "../pages/student/Progress";
import Certificates from "../pages/student/Certificates";
import Quiz from "../pages/student/Quiz";
import StudentSupport from "../pages/student/Support";
import Profile from "../pages/student/Profile";

// =====================================================
// APP ROUTES
// =====================================================

function AppRoutes() {
    return (
        <Routes>

            {/* =================================================
                PUBLIC ROUTES
            ================================================= */}

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

            <Route
                path="/feature"
                element={
                    <>
                        <Navbar />
                        <Feature />
                        <Footer />
                    </>
                }
            />

            <Route
                path="/course"
                element={
                    <>
                        <Navbar />
                        <Course />
                        <Footer />
                    </>
                }
            />

            {/* =================================================
                AUTH ROUTES
            ================================================= */}

            <Route
                path="/login"
                element={<Auth />}
            />

            <Route
                path="/signup"
                element={<Auth />}
            />

            {/* =================================================
                SUPER ADMIN ROUTES
            ================================================= */}

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

                <Route
                    path="dashboard"
                    element={<SuperAdminDashboard />}
                />

                <Route
                    path="organizations"
                    element={<Organizations />}
                />

                <Route
                    path="users"
                    element={<SuperAdminUsers />}
                />

                <Route
                    path="courses"
                    element={<SuperAdminCourses />}
                />

                <Route
                    path="subscriptions"
                    element={<SuperAdminSubscriptions />}
                />

                <Route
                    path="reports"
                    element={<Reports />}
                />

                <Route
                    path="settings"
                    element={<Settings />}
                />

                <Route
                    path="support"
                    element={<Support />}
                />
            </Route>

            {/* =================================================
                ADMIN ROUTES
            ================================================= */}

            <Route
                path="/admin"
                element={<AdminLayout />}
            >

                {/* /admin → /admin/dashboard */}

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
                    element={<AdminDashboard />}
                />

                {/* Courses */}

                <Route
                    path="courses"
                    element={<AdminCourses />}
                />

                {/* Students */}

                <Route
                    path="students"
                    element={<Students />}
                />

                {/* Teachers */}

                <Route
                    path="teachers"
                    element={<Teachers />}
                />

                {/* Subscriptions */}

                <Route
                    path="subscriptions"
                    element={<AdminSubscriptions />}
                />

                {/* Settings */}

                <Route
                    path="settings"
                    element={<AdminSettings />}
                />

                {/* Help & Support */}

                <Route
                    path="support"
                    element={<AdminSupport />}
                />

            </Route>

            {/* =================================================
                STUDENT ROUTES
            ================================================= */}

            <Route
                path="/student"
                element={<StudentLayout />}
            >

                {/* /student → /student/dashboard */}

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
                    element={<StudentDashboard />}
                />

                {/* My Courses */}

                <Route
                    path="my-courses"
                    element={<MyCourses />}
                />

                {/* All Courses */}

                <Route
                    path="all-courses"
                    element={<AllCourses />}
                />

                {/* Assignments */}

                <Route
                    path="assignments"
                    element={<Assignments />}
                />

                {/* Quizzes */}

                <Route
                    path="quizzes"
                    element={<Quiz />}
                />

                {/* Progress */}

                <Route
                    path="progress"
                    element={<Progress />}
                />

                {/* Certificates */}

                <Route
                    path="certificates"
                    element={<Certificates />}
                />

                {/* Help & Support */}

                <Route
                    path="support"
                    element={<StudentSupport />}
                />

                {/* Profile */}

                <Route
                    path="profile"
                    element={<Profile />}
                />

            </Route>

            {/* =================================================
                UNKNOWN ROUTE
            ================================================= */}

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