import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    BookOpen,
    GraduationCap,
    ClipboardList,
    TrendingUp,
    Award,
    LifeBuoy,
    User,
    LogOut,
    X,
    ClipboardCheck,
} from "lucide-react";

const StudentSidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const menuItems = [
        {
            name: "Dashboard",
            path: "/student/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "My Courses",
            path: "/student/my-courses",
            icon: BookOpen,
        },
        {
            name: "All Courses",
            path: "/student/all-courses",
            icon: GraduationCap,
        },
        {
            name: "Assignments",
            path: "/student/assignments",
            icon: ClipboardList,
        },
        {
            name: "Quizzes",
            path: "/student/quizzes",
            icon: ClipboardCheck,
        },
        {
            name: "Progress",
            path: "/student/progress",
            icon: TrendingUp,
        },
        {
            name: "Certificates",
            path: "/student/certificates",
            icon: Award,
        },
        {
            name: "Help & Support",
            path: "/student/support",
            icon: LifeBuoy,
        },
        {
            name: "Profile",
            path: "/student/profile",
            icon: User,
        },
    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("userRole");
        localStorage.removeItem("isLoggedIn");

        navigate("/login");
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-0 left-0 z-50
                    flex h-screen w-64 flex-col
                    border-r border-[#7C9A82]/30
                    bg-[#1B241E]
                    transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0
                `}
            >
                {/* Logo */}
                <div className="flex h-20 items-center justify-between border-b border-[#7C9A82]/20 px-6">
                    <div>
                        <h1 className="text-2xl font-bold tracking-wide text-[#F3EEDD]">
                            Shiyora
                        </h1>

                        <p className="mt-0.5 text-xs text-[#7C9A82]">
                            Student Portal
                        </p>
                    </div>

                    {/* Mobile Close */}
                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 text-[#F3EEDD] hover:bg-[#161F19] lg:hidden"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-4 py-6">
                    <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-[#7C9A82]">
                        Learning
                    </p>

                    <div className="space-y-1.5">
                        {menuItems.map((item) => {
                            const Icon = item.icon;

                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={onClose}
                                    className={({ isActive }) =>
                                        `
                                        group flex items-center gap-3
                                        rounded-xl px-3 py-3
                                        text-sm font-medium
                                        transition-all duration-200
                                        ${isActive
                                            ? "bg-[#F2B84B] text-[#161F19] shadow-lg shadow-[#F2B84B]/10"
                                            : "text-[#F3EEDD]/75 hover:bg-[#161F19] hover:text-[#F3EEDD]"
                                        }
                                        `
                                    }
                                >
                                    <Icon
                                        size={19}
                                        strokeWidth={2}
                                        className="shrink-0"
                                    />

                                    <span>{item.name}</span>
                                </NavLink>
                            );
                        })}
                    </div>
                </nav>

                {/* Student Profile */}
                <div className="border-t border-[#7C9A82]/20 p-4">
                    <div className="mb-3 flex items-center gap-3 rounded-xl bg-[#161F19] p-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2B84B] font-bold text-[#161F19]">
                            S
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-[#F3EEDD]">
                                Student
                            </p>

                            <p className="truncate text-xs text-[#7C9A82]">
                                Learner
                            </p>
                        </div>
                    </div>

                    {/* Logout */}
                    <button
                        onClick={handleLogout}
                        className="
                            flex w-full items-center gap-3
                            rounded-xl px-3 py-3
                            text-sm font-medium
                            text-[#D6402C]
                            transition-all duration-200
                            hover:bg-[#D6402C]/10
                        "
                    >
                        <LogOut size={19} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default StudentSidebar;