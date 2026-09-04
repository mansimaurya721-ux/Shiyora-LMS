import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    /* =====================================================
       NAV LINK STYLE
    ====================================================== */

    const navLinkClass = ({ isActive }) =>
        `
        relative
        py-2
        text-sm
        font-medium
        transition-all
        duration-300
        font-['Inter']

        ${isActive
            ? "text-[#F2B84B]"
            : "text-[#F3EEDD]/70 hover:text-[#F2B84B]"
        }
        `;

    return (
        <nav
            className="
                sticky
                top-0
                z-50
                w-full

                bg-[#161F19]/95
                backdrop-blur-xl

                border-b
                border-[#F3EEDD]/10

                transition-all
                duration-300
            "
        >

            {/* =================================================
                NAVBAR CONTAINER
            ================================================== */}

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-5
                    sm:px-6
                    h-[70px]

                    flex
                    items-center
                    justify-between
                "
            >

                {/* =================================================
                    SHIYORA LOGO
                ================================================== */}

                <Link
                    to="/"
                    onClick={closeMenu}
                    className="
                        flex
                        items-center
                        gap-3
                        shrink-0
                        group
                    "
                >

                    {/* Logo */}

                    <div
                        className="
                            relative
                            w-10
                            h-10
                            rounded-xl

                            bg-[#F2B84B]

                            flex
                            items-center
                            justify-center

                            text-[#161F19]

                            font-['Space_Grotesk']
                            font-bold
                            text-xl

                            shadow-[0_0_22px_rgba(242,184,75,0.15)]

                            group-hover:scale-105
                            group-hover:shadow-[0_0_28px_rgba(242,184,75,0.25)]

                            transition-all
                            duration-300
                        "
                    >
                        S

                        {/* Small shine */}

                        <span
                            className="
                                absolute
                                top-1
                                right-1

                                w-1.5
                                h-1.5

                                rounded-full
                                bg-[#F3EEDD]/80
                            "
                        />
                    </div>


                    {/* Brand */}

                    <div className="leading-none">

                        <span
                            className="
                                text-xl
                                sm:text-2xl

                                font-['Space_Grotesk']
                                font-bold
                                tracking-tight

                                text-[#F3EEDD]
                            "
                        >
                            Shiyora
                        </span>

                        <span
                            className="
                                block
                                mt-1

                                text-[8px]
                                sm:text-[9px]

                                uppercase
                                tracking-[0.25em]

                                font-['JetBrains_Mono']
                                text-[#F3EEDD]/40
                            "
                        >
                            Learning Platform
                        </span>

                    </div>

                </Link>


                {/* =================================================
                    DESKTOP NAVIGATION
                ================================================== */}

                <div
                    className="
                        hidden
                        lg:flex

                        items-center
                        gap-8
                    "
                >

                    {/* HOME */}

                    <NavLink
                        to="/home"
                        className={navLinkClass}
                    >
                        {({ isActive }) => (
                            <>
                                Home

                                {isActive && (
                                    <span
                                        className="
                                            absolute
                                            left-1/2
                                            -translate-x-1/2
                                            -bottom-1

                                            w-5
                                            h-[2px]

                                            rounded-full

                                            bg-[#F2B84B]

                                            shadow-[0_0_10px_rgba(242,184,75,0.7)]
                                        "
                                    />
                                )}
                            </>
                        )}
                    </NavLink>


                    {/* COURSES */}

                    <NavLink
                        to="/course"
                        className={navLinkClass}
                    >
                        {({ isActive }) => (
                            <>
                                Courses

                                {isActive && (
                                    <span
                                        className="
                                            absolute
                                            left-1/2
                                            -translate-x-1/2
                                            -bottom-1

                                            w-5
                                            h-[2px]
                                            rounded-full

                                            bg-[#F2B84B]

                                            shadow-[0_0_10px_rgba(242,184,75,0.7)]
                                        "
                                    />
                                )}
                            </>
                        )}
                    </NavLink>


                    {/* FEATURES */}

                    <NavLink
                        to="/feature"
                        className={navLinkClass}
                    >
                        {({ isActive }) => (
                            <>
                                Features

                                {isActive && (
                                    <span
                                        className="
                                            absolute
                                            left-1/2
                                            -translate-x-1/2
                                            -bottom-1

                                            w-5
                                            h-[2px]
                                            rounded-full

                                            bg-[#F2B84B]

                                            shadow-[0_0_10px_rgba(242,184,75,0.7)]
                                        "
                                    />
                                )}
                            </>
                        )}
                    </NavLink>


                    {/* PLANS */}

                    <NavLink
                        to="/subscription"
                        className={navLinkClass}
                    >
                        {({ isActive }) => (
                            <>
                                Plans

                                {isActive && (
                                    <span
                                        className="
                                            absolute
                                            left-1/2
                                            -translate-x-1/2
                                            -bottom-1

                                            w-5
                                            h-[2px]
                                            rounded-full

                                            bg-[#F2B84B]

                                            shadow-[0_0_10px_rgba(242,184,75,0.7)]
                                        "
                                    />
                                )}
                            </>
                        )}
                    </NavLink>


                    {/* ABOUT */}

                    <NavLink
                        to="/about"
                        className={navLinkClass}
                    >
                        {({ isActive }) => (
                            <>
                                About

                                {isActive && (
                                    <span
                                        className="
                                            absolute
                                            left-1/2
                                            -translate-x-1/2
                                            -bottom-1

                                            w-5
                                            h-[2px]
                                            rounded-full

                                            bg-[#F2B84B]

                                            shadow-[0_0_10px_rgba(242,184,75,0.7)]
                                        "
                                    />
                                )}
                            </>
                        )}
                    </NavLink>


                    {/* CONTACT */}

                    <NavLink
                        to="/contact"
                        className={navLinkClass}
                    >
                        {({ isActive }) => (
                            <>
                                Contact

                                {isActive && (
                                    <span
                                        className="
                                            absolute
                                            left-1/2
                                            -translate-x-1/2
                                            -bottom-1

                                            w-5
                                            h-[2px]
                                            rounded-full

                                            bg-[#F2B84B]

                                            shadow-[0_0_10px_rgba(242,184,75,0.7)]
                                        "
                                    />
                                )}
                            </>
                        )}
                    </NavLink>

                </div>


                {/* =================================================
                    RIGHT SIDE ACTIONS
                ================================================== */}

                <div
                    className="
                        hidden
                        lg:flex

                        items-center
                        gap-3
                    "
                >

                    {/* LOGIN */}

                    <Link
                        to="/login"
                        className="
                            px-4
                            py-2

                            rounded-lg

                            border
                            border-[#F3EEDD]/15

                            text-sm
                            font-medium

                            font-['Inter']

                            text-[#F3EEDD]/75

                            hover:border-[#F2B84B]/50
                            hover:text-[#F2B84B]
                            hover:bg-[#F2B84B]/5

                            transition-all
                            duration-300
                        "
                    >
                        Login
                    </Link>


                    {/* CREATE ACCOUNT */}

                    <Link
                        to="/signup"
                        className="
                            px-5
                            py-2.5

                            rounded-lg

                            text-sm
                            font-semibold

                            font-['Inter']

                            bg-[#F2B84B]
                            text-[#161F19]

                            shadow-[0_0_20px_rgba(242,184,75,0.15)]

                            hover:bg-[#f7c968]
                            hover:-translate-y-0.5

                            transition-all
                            duration-300
                        "
                    >
                        Create Account
                    </Link>

                </div>


                {/* =================================================
                    MOBILE MENU BUTTON
                ================================================== */}

                <button
                    type="button"
                    onClick={() =>
                        setMenuOpen((previous) => !previous)
                    }
                    aria-label="Toggle navigation menu"
                    className="
                        lg:hidden

                        w-10
                        h-10

                        rounded-lg

                        flex
                        items-center
                        justify-center

                        border
                        border-[#F3EEDD]/15

                        bg-[#1B241E]

                        text-[#F3EEDD]/70

                        hover:text-[#F2B84B]
                        hover:border-[#F2B84B]/40

                        transition-all
                    "
                >

                    {menuOpen ? (

                        /* CLOSE */

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
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>

                    ) : (

                        /* MENU */

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

                    )}

                </button>

            </div>


            {/* =====================================================
                MOBILE NAVIGATION
            ====================================================== */}

            {menuOpen && (

                <div
                    className="
                        lg:hidden

                        border-t
                        border-[#F3EEDD]/10

                        bg-[#141C17]

                        px-5
                        py-5

                        space-y-2

                        shadow-2xl
                    "
                >

                    {/* HOME */}

                    <NavLink
                        to="/home"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `
                            block

                            px-4
                            py-3

                            rounded-lg

                            font-medium
                            font-['Inter']

                            transition-all

                            ${isActive
                                ? "bg-[#F2B84B]/10 text-[#F2B84B] border border-[#F2B84B]/20"
                                : "text-[#F3EEDD]/70 hover:bg-[#F3EEDD]/5 hover:text-[#F2B84B]"
                            }
                            `
                        }
                    >
                        Home
                    </NavLink>


                    {/* COURSES */}

                    <NavLink
                        to="/courses"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `
                            block
                            px-4
                            py-3

                            rounded-lg

                            font-medium
                            font-['Inter']

                            transition-all

                            ${isActive
                                ? "bg-[#F2B84B]/10 text-[#F2B84B] border border-[#F2B84B]/20"
                                : "text-[#F3EEDD]/70 hover:bg-[#F3EEDD]/5 hover:text-[#F2B84B]"
                            }
                            `
                        }
                    >
                        Courses
                    </NavLink>


                    {/* FEATURES */}

                    <NavLink
                        to="/features"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `
                            block
                            px-4
                            py-3

                            rounded-lg

                            font-medium
                            font-['Inter']

                            transition-all

                            ${isActive
                                ? "bg-[#F2B84B]/10 text-[#F2B84B] border border-[#F2B84B]/20"
                                : "text-[#F3EEDD]/70 hover:bg-[#F3EEDD]/5 hover:text-[#F2B84B]"
                            }
                            `
                        }
                    >
                        Features
                    </NavLink>


                    {/* PLANS */}

                    <NavLink
                        to="/subscription"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `
                            block
                            px-4
                            py-3

                            rounded-lg

                            font-medium
                            font-['Inter']

                            transition-all

                            ${isActive
                                ? "bg-[#F2B84B]/10 text-[#F2B84B] border border-[#F2B84B]/20"
                                : "text-[#F3EEDD]/70 hover:bg-[#F3EEDD]/5 hover:text-[#F2B84B]"
                            }
                            `
                        }
                    >
                        Plans
                    </NavLink>


                    {/* ABOUT */}

                    <NavLink
                        to="/about"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `
                            block
                            px-4
                            py-3

                            rounded-lg

                            font-medium
                            font-['Inter']

                            transition-all

                            ${isActive
                                ? "bg-[#F2B84B]/10 text-[#F2B84B] border border-[#F2B84B]/20"
                                : "text-[#F3EEDD]/70 hover:bg-[#F3EEDD]/5 hover:text-[#F2B84B]"
                            }
                            `
                        }
                    >
                        About
                    </NavLink>


                    {/* CONTACT */}

                    <NavLink
                        to="/contact"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `
                            block
                            px-4
                            py-3

                            rounded-lg

                            font-medium
                            font-['Inter']

                            transition-all

                            ${isActive
                                ? "bg-[#F2B84B]/10 text-[#F2B84B] border border-[#F2B84B]/20"
                                : "text-[#F3EEDD]/70 hover:bg-[#F3EEDD]/5 hover:text-[#F2B84B]"
                            }
                            `
                        }
                    >
                        Contact
                    </NavLink>


                    {/* DIVIDER */}

                    <div
                        className="
                            h-px
                            bg-[#F3EEDD]/10
                            my-4
                        "
                    />


                    {/* LOGIN */}

                    <Link
                        to="/login"
                        onClick={closeMenu}
                        className="
                            block
                            text-center

                            px-4
                            py-3

                            rounded-lg

                            border
                            border-[#F3EEDD]/15

                            text-[#F3EEDD]/80

                            font-semibold
                            font-['Inter']

                            hover:border-[#F2B84B]/50
                            hover:text-[#F2B84B]

                            transition-all
                        "
                    >
                        Login
                    </Link>


                    {/* CREATE ACCOUNT */}

                    <Link
                        to="/signup"
                        onClick={closeMenu}
                        className="
                            block
                            text-center

                            px-4
                            py-3

                            rounded-lg

                            bg-[#F2B84B]
                            text-[#161F19]

                            font-bold
                            font-['Inter']

                            hover:bg-[#f7c968]

                            transition-all
                        "
                    >
                        Create Account
                    </Link>

                </div>

            )}

        </nav>
    );
}

export default Navbar;