import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

function SuperAdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div
            className="
                min-h-screen
                overflow-x-hidden

                bg-[#161F19]
                text-[#F3EEDD]

                font-['Inter']

                transition-colors
                duration-300
            "
        >
            {/* =========================================================
                SIDEBAR
            ========================================================== */}

            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            {/* =========================================================
                MAIN CONTENT
            ========================================================== */}

            <main
                className="
                    min-h-screen
                    lg:ml-64
                "
            >
                {/* =====================================================
                    MOBILE HEADER
                ====================================================== */}

                <div
                    className="
                        sticky
                        top-0
                        z-30

                        flex
                        h-16
                        items-center

                        border-b
                        border-[#F3EEDD]/10

                        bg-[#161F19]/95

                        px-4

                        backdrop-blur-md

                        lg:hidden
                    "
                >
                    {/* Mobile Menu Button */}

                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center

                            rounded-xl

                            border
                            border-[#F3EEDD]/10

                            bg-[#1B241E]

                            text-[#F3EEDD]/70

                            transition-all
                            duration-300

                            hover:border-[#F2B84B]/30
                            hover:bg-[#F2B84B]/10
                            hover:text-[#F2B84B]

                            active:scale-95
                        "
                        aria-label="Open sidebar"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* =================================================
                        MOBILE BRAND
                    ================================================== */}

                    <div className="ml-3 flex items-center gap-2.5">
                        {/* Logo box */}

                        <div
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center

                                rounded-xl

                                border
                                border-[#F2B84B]/25

                                bg-[#F2B84B]/10

                                font-['Space_Grotesk']
                                text-sm
                                font-bold

                                text-[#F2B84B]

                                shadow-[0_0_20px_rgba(242,184,75,0.08)]
                            "
                        >
                            S
                        </div>

                        {/* Brand */}

                        <div>
                            <p
                                className="
                                    font-['Space_Grotesk']
                                    text-sm
                                    font-semibold
                                    tracking-tight
                                    text-[#F3EEDD]
                                "
                            >
                                Shiyora
                            </p>

                            <p
                                className="
                                    font-['JetBrains_Mono']
                                    text-[8px]
                                    uppercase
                                    tracking-[0.18em]
                                    text-[#F3EEDD]/35
                                "
                            >
                                Admin Desk
                            </p>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    PAGE CONTENT
                ====================================================== */}

                <section
                    className="
                        relative
                        min-h-[calc(100vh-64px)]
                        overflow-hidden
                    "
                >
                    {/* =================================================
                        BACKGROUND GLOWS
                    ================================================== */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-40
                            -top-40

                            h-[420px]
                            w-[420px]

                            rounded-full

                            bg-[#F2B84B]/[0.06]

                            blur-[120px]
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -bottom-40
                            -left-40

                            h-[420px]
                            w-[420px]

                            rounded-full

                            bg-[#7C9A82]/[0.07]

                            blur-[120px]
                        "
                    />

                    {/* =================================================
                        CHALK DUST TEXTURE
                    ================================================== */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            opacity-[0.045]
                        "
                        style={{
                            backgroundImage:
                                "radial-gradient(rgba(243,238,221,0.7) 1px, transparent 1px)",
                            backgroundSize: "24px 24px",
                        }}
                    />

                    {/* =================================================
                        ROUTED PAGE
                    ================================================== */}

                    <div className="relative z-10">
                        <Outlet />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default SuperAdminLayout;