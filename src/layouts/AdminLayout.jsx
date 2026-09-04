import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    BookOpen,
    Users,
    GraduationCap,
    ClipboardList,
    BarChart3,
    Settings,
    LifeBuoy,
    LogOut,
    Menu,
    X,
} from "lucide-react";

// ============================================================
// FONT IMPORTS — loaded once here since every admin page
// renders through this layout.
// ============================================================

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";

function AdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // =========================================================
    // ADMIN MENU
    // =========================================================

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
            icon: GraduationCap,
        },
        {
            name: "Enrollments",
            path: "/admin/enrollments",
            icon: ClipboardList,
        },
        {
            name: "Reports",
            path: "/admin/reports",
            icon: BarChart3,
        },
        {
            name: "Subscriptions",
            path: "/admin/subscriptions",
            icon: ClipboardList,

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


    // =========================================================
    // LOGOUT
    // =========================================================

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userRole");

        window.location.href = "/login";
    };


    return (
        <div className="min-h-screen bg-[#161F19] text-[#F3EEDD]">
            <style>{FONT_IMPORTS}</style>

            {/* =================================================
                MOBILE OVERLAY
            ================================================== */}

            {sidebarOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        z-40
 
                        bg-[#0B120E]/60
                        backdrop-blur-sm
 
                        lg:hidden
                    "
                    onClick={() => setSidebarOpen(false)}
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
 
                    shadow-[4px_0_30px_rgba(0,0,0,0.35)]
 
                    transition-transform
                    duration-300
                    ease-in-out
 
                    lg:translate-x-0
 
                    ${sidebarOpen
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
 
                                font-['Space_Grotesk']
 
                                text-[#161F19]
 
                                shadow-[0_6px_18px_rgba(242,184,75,0.18)]
                            "
                        >
                            S
                        </div>


                        {/* Brand */}

                        <div>

                            <h1
                                className="
                                    font-['Space_Grotesk']
                                    text-lg
                                    font-bold
                                    tracking-tight
 
                                    text-[#F3EEDD]
                                "
                            >
                                Shiyora
                            </h1>

                            <p
                                className="
                                    text-xs
 
                                    text-[#F3EEDD]/45
                                "
                            >
                                LMS Platform
                            </p>

                        </div>

                    </div>


                    {/* Mobile Close */}

                    <button
                        type="button"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Close sidebar"
                        className="
                            rounded-lg
                            p-2
 
                            text-[#F3EEDD]/45
 
                            transition
 
                            hover:bg-[#F3EEDD]/10
                            hover:text-[#F3EEDD]
 
                            focus-visible:outline
                            focus-visible:outline-2
                            focus-visible:outline-offset-2
                            focus-visible:outline-[#F2B84B]
 
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
                            font-['JetBrains_Mono']
                            text-[10px]
                            font-semibold
                            uppercase
 
                            tracking-[0.2em]
 
                            text-[#F3EEDD]/35
                        "
                    >
                        Administration
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
                                onClick={() =>
                                    setSidebarOpen(false)
                                }
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
 
                                        focus-visible:outline
                                        focus-visible:outline-2
                                        focus-visible:outline-offset-2
                                        focus-visible:outline-[#F2B84B]
 
                                        ${isActive
                                        ? `
                                                    bg-[#F2B84B]/10
 
                                                    text-[#F3EEDD]
 
                                                    shadow-[inset_3px_0_0_#F2B84B]
                                                `
                                        : `
                                                    text-[#F3EEDD]/55
 
                                                    hover:bg-[#F3EEDD]/5
 
                                                    hover:text-[#F3EEDD]
                                                `
                                    }
                                    `
                                }
                            >

                                {({ isActive }) => (
                                    <>
                                        {/* Icon */}

                                        <Icon
                                            size={20}
                                            strokeWidth={
                                                isActive
                                                    ? 2.2
                                                    : 2
                                            }
                                            className={`
                                                shrink-0
 
                                                transition-colors
                                                duration-200
 
                                                ${isActive
                                                    ? "text-[#F2B84B]"
                                                    : `
                                                            text-[#F3EEDD]/35
 
                                                            group-hover:text-[#F3EEDD]
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
 
                                                    bg-[#F2B84B]
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
                        border-[#F3EEDD]/10
 
                        bg-[#141C17]
 
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
                            border-[#F3EEDD]/10
 
                            bg-[#F3EEDD]/5
 
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
 
                                bg-[#F2B84B]
 
                                text-sm
                                font-bold
 
                                font-['Space_Grotesk']
 
                                text-[#161F19]
                            "
                        >
                            A
                        </div>


                        {/* Admin Information */}

                        <div className="min-w-0">

                            <p
                                className="
                                    truncate
 
                                    text-sm
                                    font-semibold
 
                                    text-[#F3EEDD]
                                "
                            >
                                Admin
                            </p>

                            <p
                                className="
                                    truncate
 
                                    text-xs
 
                                    text-[#F3EEDD]/45
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
 
                            text-[#F3EEDD]/55
 
                            transition-all
                            duration-200
 
                            hover:bg-[#D6402C]/10
                            hover:text-[#D6402C]
 
                            focus-visible:outline
                            focus-visible:outline-2
                            focus-visible:outline-offset-2
                            focus-visible:outline-[#D6402C]
                        "
                    >

                        <LogOut
                            size={20}
                            className="
                                shrink-0
 
                                text-[#F3EEDD]/35
 
                                transition-colors
 
                                group-hover:text-[#D6402C]
                            "
                        />

                        <span>
                            Logout
                        </span>

                    </button>

                </div>

            </aside>


            {/* =================================================
                MAIN CONTENT
            ================================================== */}

            <main className="min-h-screen lg:ml-64">

                {/* =================================================
                    MOBILE HEADER
                ================================================== */}

                <header
                    className="
                        sticky
                        top-0
                        z-30
 
                        flex
                        h-16
                        items-center
 
                        border-b
                        border-[#F3EEDD]/10
 
                        bg-[#141C17]/95
 
                        px-4
 
                        backdrop-blur
 
                        lg:hidden
                    "
                >

                    {/* Menu Button */}

                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Open sidebar"
                        className="
                            flex
                            h-10
                            w-10
 
                            items-center
                            justify-center
 
                            rounded-xl
 
                            bg-[#F2B84B]/10
 
                            text-[#F2B84B]
 
                            transition
 
                            hover:bg-[#F2B84B]/20
 
                            focus-visible:outline
                            focus-visible:outline-2
                            focus-visible:outline-offset-2
                            focus-visible:outline-[#F2B84B]
                        "
                    >
                        <Menu size={21} />
                    </button>


                    {/* Mobile Brand */}

                    <div className="ml-3 flex items-center gap-2">

                        <div
                            className="
                                flex
                                h-8
                                w-8
 
                                items-center
                                justify-center
 
                                rounded-lg
 
                                bg-[#F2B84B]
 
                                text-sm
                                font-bold
 
                                font-['Space_Grotesk']
 
                                text-[#161F19]
                            "
                        >
                            S
                        </div>

                        <span
                            className="
                                font-['Space_Grotesk']
                                font-bold
 
                                text-[#F3EEDD]
                            "
                        >
                            Shiyora
                        </span>

                    </div>

                </header>


                {/* =================================================
                    PAGE CONTENT
                ================================================== */}

                <section
                    className="
                        min-h-screen
 
                        bg-[#161F19]
                    "
                >
                    <Outlet />
                </section>

            </main>

        </div>
    );
}

export default AdminLayout;