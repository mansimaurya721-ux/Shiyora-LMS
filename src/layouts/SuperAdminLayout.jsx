import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

function SuperAdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div
            className="
                min-h-screen
                bg-[#f8f9fc]
                dark:bg-[#080b14]
                text-slate-900
                dark:text-white
                transition-colors
                duration-300
            "
        >

            {/* =====================================================
                SIDEBAR
            ====================================================== */}

            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />


            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <main
                className="
                    lg:ml-64
                    min-h-screen
                "
            >

                {/* Mobile Header */}

                <div
                    className="
                        lg:hidden
                        h-16

                        flex
                        items-center

                        px-4

                        border-b
                        border-slate-200
                        dark:border-white/10

                        bg-white
                        dark:bg-[#0b0f19]
                    "
                >

                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className="
                            w-10
                            h-10

                            rounded-xl

                            flex
                            items-center
                            justify-center

                            bg-slate-100
                            dark:bg-white/5

                            text-slate-700
                            dark:text-white

                            hover:bg-violet-100
                            dark:hover:bg-white/10

                            transition
                        "
                        aria-label="Open sidebar"
                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>

                    </button>


                    {/* Mobile Brand */}

                    <div className="ml-3 flex items-center gap-2">

                        <div
                            className="
                                w-8
                                h-8
                                rounded-lg

                                bg-gradient-to-br
                                from-violet-600
                                to-cyan-500

                                flex
                                items-center
                                justify-center

                                text-white
                                font-bold
                            "
                        >
                            S
                        </div>

                        <span
                            className="
                                font-bold
                                text-slate-900
                                dark:text-white
                            "
                        >
                            Shiyora
                        </span>

                    </div>

                </div>


                {/* =================================================
                    PAGE CONTENT
                ================================================== */}

                <section className="min-h-[calc(100vh-64px)]">

                    <Outlet />

                </section>

            </main>

        </div>
    );
}

export default SuperAdminLayout;