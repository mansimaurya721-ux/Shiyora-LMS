import React, { useState } from "react";
import { Menu, Bell } from "lucide-react";
import { Outlet } from "react-router-dom";
import StudentSidebar from "../components/StudentSidebar";

const StudentLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#161F19] text-[#F3EEDD]">
            {/* Sidebar */}
            <StudentSidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            {/* Main Content */}
            <div className="lg:ml-64 min-h-screen">
                {/* Top Header */}
                <header className="sticky top-0 z-30 border-b border-[#7C9A82]/20 bg-[#1B241E]/95 backdrop-blur">
                    <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="
                                rounded-lg p-2
                                text-[#F3EEDD]
                                transition
                                hover:bg-[#161F19]
                                lg:hidden
                            "
                        >
                            <Menu size={22} />
                        </button>

                        {/* Desktop Page Area */}
                        <div className="hidden lg:block">
                            <p className="text-sm font-medium text-[#7C9A82]">
                                Student Portal
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="ml-auto flex items-center gap-3">
                            {/* Notification */}
                            <button
                                className="
                                    relative rounded-xl p-2.5
                                    text-[#F3EEDD]/80
                                    transition
                                    hover:bg-[#161F19]
                                    hover:text-[#F2B84B]
                                "
                            >
                                <Bell size={20} />

                                <span
                                    className="
                                        absolute right-2 top-2
                                        h-2 w-2 rounded-full
                                        bg-[#F2B84B]
                                    "
                                />
                            </button>

                            {/* Avatar */}
                            <div
                                className="
                                    flex h-9 w-9 items-center
                                    justify-center rounded-full
                                    bg-[#F2B84B]
                                    text-sm font-bold
                                    text-[#161F19]
                                "
                            >
                                S
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="min-h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default StudentLayout;