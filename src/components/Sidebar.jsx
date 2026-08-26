import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    Building2,
    Users,
    BookOpen,
    CreditCard,
    BarChart3,
    Settings,
    LogOut,
    X,
} from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const menuItems = [
        {
            name: "Dashboard",
            path: "/superadmin/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Organizations",
            path: "/superadmin/organizations",
            icon: Building2,
        },
        {
            name: "Users",
            path: "/superadmin/users",
            icon: Users,
        },
        {
            name: "Courses",
            path: "/superadmin/courses",
            icon: BookOpen,
        },
        {
            name: "Subscriptions",
            path: "/superadmin/subscriptions",
            icon: CreditCard,
        },
        {
            name: "Reports",
            path: "/superadmin/reports",
            icon: BarChart3,
        },
        {
            name: "Settings",
            path: "/superadmin/settings",
            icon: Settings,
        },
    ];

    // ================= LOGOUT =================

    const handleLogout = () => {
        // Remove login information
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userRole");

        // Close mobile sidebar
        onClose();

        // Redirect to login
        navigate("/login");
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed
                    left-0
                    top-0
                    z-50
                    flex
                    h-screen
                    w-64
                    flex-col
                    border-r
                    border-slate-200
                    bg-white
                    transition-transform
                    duration-300
                    lg:translate-x-0
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >

                {/* ================= LOGO ================= */}

                <div className="flex h-20 items-center justify-between border-b border-slate-100 px-5">

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                bg-indigo-600
                                text-lg
                                font-bold
                                text-white
                            "
                        >
                            S
                        </div>

                        <div>

                            <h1 className="text-lg font-bold text-slate-800">
                                Shiyora
                            </h1>

                            <p className="text-xs text-slate-400">
                                LMS Platform
                            </p>

                        </div>

                    </div>

                    {/* Mobile Close */}

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            rounded-lg
                            p-2
                            text-slate-500
                            hover:bg-slate-100
                            lg:hidden
                        "
                    >
                        <X size={20} />
                    </button>

                </div>


                {/* ================= SUPER ADMIN LABEL ================= */}

                <div className="px-5 pt-6">

                    <p
                        className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-wider
                            text-slate-400
                        "
                    >
                        SuperAdmin
                    </p>

                </div>


                {/* ================= NAVIGATION ================= */}

                <nav className="mt-3 flex-1 space-y-1 overflow-y-auto px-3">

                    {menuItems.map((item) => {

                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `
                                    group
                                    flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-sm
                                    font-medium
                                    transition-all
                                    duration-200

                                    ${isActive
                                        ? "bg-indigo-50 text-indigo-600"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                                    }
                                    `
                                }
                            >

                                {({ isActive }) => (
                                    <>
                                        <Icon
                                            size={20}
                                            className={
                                                isActive
                                                    ? "text-indigo-600"
                                                    : "text-slate-400 group-hover:text-indigo-600"
                                            }
                                        />

                                        <span>{item.name}</span>
                                    </>
                                )}

                            </NavLink>
                        );

                    })}

                </nav>


                {/* ================= LOGOUT ================= */}

                <div className="border-t border-slate-100 p-3">

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="
                            group
                            flex
                            w-full
                            items-center
                            gap-3
                            rounded-xl
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-slate-600
                            transition

                            hover:bg-red-50
                            hover:text-red-600

                            active:scale-[0.98]
                        "
                    >

                        <LogOut
                            size={20}
                            className="
                                text-slate-400
                                transition
                                group-hover:text-red-500
                            "
                        />

                        <span>Logout</span>

                    </button>

                </div>

            </aside>
        </>
    );
};

export default Sidebar;