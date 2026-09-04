import React from "react";
import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    BookOpen,
    Users,
    UserRound,
    ClipboardList,
    BarChart3,
    Settings,
    LifeBuoy,
    LogOut,
    X,
} from "lucide-react";

const AdminSidebar = ({ isOpen, onClose }) => {

    // =====================================================
    // ADMIN MENU ITEMS
    // =====================================================

    const menuItems = [
        {
            name: "Dashboard",
            path: "/admin/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Courses",
            path: "/admin/courses",
            icon: BookOpen,
        },
        {
            name: "Students",
            path: "/admin/students",
            icon: Users,
        },
        {
            name: "Teachers",
            path: "/admin/teachers",
            icon: UserRound,
        },
        {
            name: "Enrollments",
            path: "/admin/enrollments",
            icon: ClipboardList,
        },
        {
            name: "Subscriptions",
            path: "/admin/subscriptions",
            icon: ClipboardList,
        },
        {
            name: "Reports",
            path: "/admin/reports",
            icon: BarChart3,
        },
        {
            name: "Help & Support",
            path: "/admin/support",
            icon: LifeBuoy,
        },
        {
            name: "Settings",
            path: "/admin/settings",
            icon: Settings,
        },
    ];


    // =====================================================
    // LOGOUT
    // =====================================================

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userRole");

        window.location.href = "/login";
    };


    return (
        <>
            {/* =================================================
                MOBILE OVERLAY
            ================================================== */}

            {isOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        z-40

                        bg-black/30
                        backdrop-blur-sm

                        lg:hidden
                    "
                    onClick={onClose}
                />
            )}


            {/* =================================================
                SIDEBAR
            ================================================== */}

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
                    border-[#F3EEDD]/10

                    bg-[#141C17]

                    shadow-[4px_0_25px_rgba(226,180,189,0.18)]

                    transition-transform
                    duration-300
                    ease-in-out

                    lg:translate-x-0

                    ${isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }
                `}
            >

                {/* =================================================
                    BRAND
                ================================================== */}

                <div
                    className="
                        flex
                        h-20
                        shrink-0
                        items-center
                        justify-between

                        border-b
                       border-[#F3EEDD]/10

                        px-5
                    "
                >

                    <div className="flex items-center gap-3">

                        {/* Logo */}

                        <div
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center

                                rounded-xl

                                 bg-[#F2B84B]

                                text-lg
                                font-bold

                                text-[#161F19]

                                shadow-sm
                            "
                        >
                            S
                        </div>


                        {/* Brand Name */}

                        <div>

                            <h1
                                className="
                                    text-lg
                                    font-bold
                                    tracking-tight
                                    text-[#f7f0f0]
                                "
                            >
                                Shiyora
                            </h1>

                            <p
                                className="
                                    text-xs
                                     text-[#F3EEDD]/40
                                "
                            >
                                LMS Platform
                            </p>

                        </div>

                    </div>


                    {/* Mobile Close */}

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close sidebar"
                        className="
                            rounded-lg
                            p-2

                            text-[#F3EEDD]/50

                            transition

                            hover:bg-[#F7D6D0]
                            hover:text-[#F3EEDD]

                            lg:hidden
                        "
                    >
                        <X size={20} />
                    </button>

                </div>


                {/* =================================================
                    ADMIN LABEL
                ================================================== */}

                <div className="shrink-0 px-5 pt-6">

                    <p
                        className="
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-[0.15em]

                            text-[#F3EEDD]/40
                        "
                    >
                        Admin
                    </p>

                </div>


                {/* =================================================
                    NAVIGATION
                ================================================== */}

                <nav
                    className="
                        mt-3
                        flex-1
                        space-y-1

                        overflow-y-auto

                        px-3
                        pb-4
                    "
                >

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
                                        ? `
                                                    bg-[#F7D6D0]

                                                    text-[#4A4A4A]

                                                    shadow-[inset_3px_0_0_#E2B4BD]
                                                `
                                        : `
                                                    text-[#4A4A4A]/70

                                                    hover:bg-[#F7D6D0]/60

                                                    hover:text-[#4A4A4A]
                                                `
                                    }
                                    `
                                }
                            >

                                {({ isActive }) => (
                                    <>
                                        {/* Icon */}

                                        <Icon
                                            size={19}
                                            strokeWidth={
                                                isActive ? 2.2 : 2
                                            }
                                            className={`
                                                shrink-0

                                                transition-colors
                                                duration-200

                                                ${isActive
                                                    ? "text-[#4A4A4A]"
                                                    : `
                                                            text-[#4A4A4A]/45
                                                            group-hover:text-[#4A4A4A]
                                                        `
                                                }
                                            `}
                                        />


                                        {/* Menu Name */}

                                        <span className="truncate">
                                            {item.name}
                                        </span>


                                        {/* Active Indicator */}

                                        {isActive && (
                                            <span
                                                className="
                                                    ml-auto
                                                    h-1.5
                                                    w-1.5
                                                    shrink-0

                                                    rounded-full

                                                    bg-[#E2B4BD]
                                                "
                                            />
                                        )}

                                    </>
                                )}

                            </NavLink>
                        );
                    })}

                </nav>


                {/* =================================================
                    ADMIN PROFILE + LOGOUT
                ================================================== */}

                <div
                    className="
                        shrink-0

                        border-t
                        border-[#E2B4BD]/50

                        bg-[#FFF5F5]

                        p-3
                    "
                >

                    {/* Admin Profile */}

                    <div
                        className="
                            mb-2

                            flex
                            items-center
                            gap-3

                            rounded-xl

                            border
                            border-[#E2B4BD]/50

                            bg-[#F7D6D0]/40

                            px-3
                            py-3
                        "
                    >

                        {/* Avatar */}

                        <div
                            className="
                                flex
                                h-9
                                w-9
                                shrink-0

                                items-center
                                justify-center

                                rounded-full

                                bg-[#E2B4BD]

                                text-sm
                                font-bold

                                text-[#4A4A4A]
                            "
                        >
                            A
                        </div>


                        {/* Admin Details */}

                        <div className="min-w-0">

                            <p
                                className="
                                    truncate

                                    text-sm
                                    font-semibold

                                    text-[#4A4A4A]
                                "
                            >
                                Admin
                            </p>

                            <p
                                className="
                                    truncate

                                    text-xs

                                    text-[#4A4A4A]/55
                                "
                            >
                                Organization Admin
                            </p>

                        </div>

                    </div>


                    {/* =================================================
                        LOGOUT
                    ================================================== */}

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

                            text-[#4A4A4A]/70

                            transition-all
                            duration-200

                            hover:bg-red-50
                            hover:text-red-600
                        "
                    >

                        <LogOut
                            size={19}
                            className="
                                shrink-0

                                text-[#4A4A4A]/45

                                transition-colors

                                group-hover:text-red-600
                            "
                        />

                        <span>
                            Logout
                        </span>

                    </button>

                </div>

            </aside>
        </>
    );
};

export default AdminSidebar;