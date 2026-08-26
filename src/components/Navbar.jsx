import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
    /* =====================================================
       DARK / LIGHT MODE
    ====================================================== */

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const root = document.documentElement;

        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    /* =====================================================
       CLOSE MOBILE MENU
    ====================================================== */

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
        font-semibold
        transition-all
        duration-300

        ${isActive
            ? "text-violet-600 dark:text-cyan-400"
            : "text-slate-700 hover:text-violet-600 dark:text-slate-300 dark:hover:text-cyan-400"
        }
        `;

    return (
        <nav
            className="
                sticky
                top-0
                z-50

                bg-white/90
                dark:bg-[#080b14]/95

                backdrop-blur-xl

                border-b
                border-slate-200
                dark:border-white/10

                transition-all
                duration-300
            "
        >
            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-5
                    sm:px-6
                    py-4

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
                        group
                        shrink-0
                    "
                >
                    {/* Logo */}
                    <div
                        className="
                            w-10
                            h-10

                            rounded-xl

                            bg-gradient-to-br
                            from-violet-600
                            via-purple-500
                            to-cyan-400

                            text-white

                            flex
                            items-center
                            justify-center

                            font-black
                            text-xl

                            shadow-lg
                            shadow-violet-500/20

                            group-hover:scale-105
                            group-hover:shadow-cyan-500/20

                            transition-all
                            duration-300
                        "
                    >
                        S
                    </div>

                    {/* Brand */}
                    <div className="leading-none">
                        <span
                            className="
                                text-xl
                                sm:text-2xl
                                font-extrabold
                                tracking-tight

                                text-slate-900
                                dark:text-white
                            "
                        >
                            Shi
                            <span
                                className="
                                    text-violet-600
                                    dark:text-cyan-400
                                "
                            >
                                yora
                            </span>
                        </span>

                        <span
                            className="
                                block

                                text-[8px]
                                sm:text-[9px]

                                uppercase
                                tracking-[0.25em]

                                text-slate-400
                                dark:text-slate-500

                                mt-1
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
                        gap-7
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
                                            left-0
                                            right-0
                                            -bottom-1

                                            h-[2px]

                                            rounded-full

                                            bg-gradient-to-r
                                            from-violet-500
                                            to-cyan-400

                                            shadow-lg
                                            shadow-cyan-400/40
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
                                            left-0
                                            right-0
                                            -bottom-1

                                            h-[2px]

                                            rounded-full

                                            bg-gradient-to-r
                                            from-violet-500
                                            to-cyan-400

                                            shadow-lg
                                            shadow-cyan-400/40
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
                                            left-0
                                            right-0
                                            -bottom-1

                                            h-[2px]

                                            rounded-full

                                            bg-gradient-to-r
                                            from-violet-500
                                            to-cyan-400

                                            shadow-lg
                                            shadow-cyan-400/40
                                        "
                                    />
                                )}
                            </>
                        )}
                    </NavLink>

                    {/* LOGIN */}

                    <NavLink
                        to="/login"
                        className={navLinkClass}
                    >
                        {({ isActive }) => (
                            <>
                                Login

                                {isActive && (
                                    <span
                                        className="
                                            absolute
                                            left-0
                                            right-0
                                            -bottom-1

                                            h-[2px]

                                            rounded-full

                                            bg-gradient-to-r
                                            from-violet-500
                                            to-cyan-400

                                            shadow-lg
                                            shadow-cyan-400/40
                                        "
                                    />
                                )}
                            </>
                        )}
                    </NavLink>

                    {/* CREATE ACCOUNT */}

                    <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            `
                            px-4
                            py-2

                            rounded-lg

                            text-sm
                            font-semibold

                            border

                            transition-all
                            duration-300

                            ${isActive
                                ? `
                                        bg-slate-900
                                        text-white
                                        border-slate-900

                                        dark:bg-white
                                        dark:text-slate-900
                                        dark:border-white
                                    `
                                : `
                                        border-slate-300
                                        text-slate-700

                                        hover:border-violet-400
                                        hover:text-violet-600

                                        dark:border-white/15
                                        dark:text-slate-300

                                        dark:hover:border-cyan-400/50
                                        dark:hover:text-cyan-400
                                        dark:hover:bg-white/5
                                    `
                            }
                            `
                        }
                    >
                        Create Account
                    </NavLink>

                    {/* SUBSCRIPTION */}

                    <NavLink
                        to="/subscription"
                        className={({ isActive }) =>
                            `
                            px-5
                            py-2.5

                            rounded-xl

                            text-sm
                            font-semibold

                            text-white

                            bg-gradient-to-r
                            from-violet-600
                            to-cyan-500

                            transition-all
                            duration-300

                            ${isActive
                                ? `
                                        shadow-lg
                                        shadow-cyan-500/20
                                        ring-1
                                        ring-cyan-300/30
                                    `
                                : `
                                        hover:-translate-y-0.5
                                        hover:shadow-lg
                                        hover:shadow-violet-500/25
                                    `
                            }
                            `
                        }
                    >
                        Subscription
                    </NavLink>

                    {/* =================================================
                        THEME TOGGLE
                    ================================================== */}

                    <button
                        type="button"
                        onClick={() =>
                            setDarkMode((previous) => !previous)
                        }
                        aria-label={
                            darkMode
                                ? "Switch to light mode"
                                : "Switch to dark mode"
                        }
                        title={
                            darkMode
                                ? "Switch to light mode"
                                : "Switch to dark mode"
                        }
                        className="
                            relative

                            w-11
                            h-11

                            rounded-xl

                            flex
                            items-center
                            justify-center

                            border

                            border-slate-200
                            bg-slate-100

                            hover:bg-slate-200

                            dark:border-white/10
                            dark:bg-white/5
                            dark:hover:bg-white/10

                            transition-all
                            duration-300

                            hover:scale-105
                        "
                    >
                        {darkMode ? (

                            /* LIGHT MODE ICON */

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="
                                    w-5
                                    h-5
                                    text-yellow-400
                                    drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]
                                "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="4"
                                />

                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="
                                        M12 2v2
                                        m0 16v2
                                        M4.93 4.93l1.42 1.42
                                        m11.3 11.3l1.42 1.42
                                        M2 12h2
                                        m16 0h2
                                        M4.93 19.07l1.42-1.42
                                        m11.3-11.3l1.42-1.42
                                    "
                                />
                            </svg>

                        ) : (

                            /* DARK MODE ICON */

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="
                                    w-5
                                    h-5
                                    text-violet-600
                                    dark:text-cyan-400
                                "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="
                                        M21 12.79
                                        A9 9 0 1 1
                                        11.21 3
                                        A7 7 0 0 0 21 12.79z
                                    "
                                />
                            </svg>

                        )}
                    </button>
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

                        w-11
                        h-11

                        rounded-xl

                        flex
                        items-center
                        justify-center

                        border
                        border-slate-200
                        bg-slate-100

                        dark:border-white/10
                        dark:bg-white/5

                        text-slate-700
                        dark:text-white

                        transition-all

                        hover:scale-105
                    "
                >
                    {menuOpen ? (

                        /* CLOSE ICON */

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

                        /* MENU ICON */

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
                        border-slate-200
                        dark:border-white/10

                        bg-white
                        dark:bg-[#080b14]

                        px-5
                        py-5

                        space-y-2

                        shadow-lg
                    "
                >

                    {/* HOME */}

                    <NavLink
                        to="/home"
                        onClick={closeMenu}
                        className="
                            block
                            px-4
                            py-3
                            rounded-xl

                            text-slate-700
                            hover:text-violet-600
                            hover:bg-violet-50

                            dark:text-slate-300
                            dark:hover:text-cyan-400
                            dark:hover:bg-white/5

                            font-semibold
                            transition
                        "
                    >
                        Home
                    </NavLink>

                    {/* ABOUT */}

                    <NavLink
                        to="/about"
                        onClick={closeMenu}
                        className="
                            block
                            px-4
                            py-3
                            rounded-xl

                            text-slate-700
                            hover:text-violet-600
                            hover:bg-violet-50

                            dark:text-slate-300
                            dark:hover:text-cyan-400
                            dark:hover:bg-white/5

                            font-semibold
                            transition
                        "
                    >
                        About
                    </NavLink>

                    {/* CONTACT */}

                    <NavLink
                        to="/contact"
                        onClick={closeMenu}
                        className="
                            block
                            px-4
                            py-3
                            rounded-xl

                            text-slate-700
                            hover:text-violet-600
                            hover:bg-violet-50

                            dark:text-slate-300
                            dark:hover:text-cyan-400
                            dark:hover:bg-white/5

                            font-semibold
                            transition
                        "
                    >
                        Contact
                    </NavLink>

                    {/* LOGIN */}

                    <NavLink
                        to="/login"
                        onClick={closeMenu}
                        className="
                            block
                            px-4
                            py-3
                            rounded-xl

                            text-slate-700
                            hover:text-violet-600
                            hover:bg-violet-50

                            dark:text-slate-300
                            dark:hover:text-cyan-400
                            dark:hover:bg-white/5

                            font-semibold
                            transition
                        "
                    >
                        Login
                    </NavLink>

                    {/* CREATE ACCOUNT */}

                    <NavLink
                        to="/signup"
                        onClick={closeMenu}
                        className="
                            block
                            px-4
                            py-3
                            rounded-xl

                            border
                            border-slate-200

                            text-slate-700

                            hover:border-violet-400
                            hover:text-violet-600

                            dark:border-white/10
                            dark:text-slate-300

                            dark:hover:border-cyan-400/40
                            dark:hover:text-cyan-400

                            font-semibold
                            transition
                        "
                    >
                        Create Account
                    </NavLink>

                    {/* SUBSCRIPTION */}

                    <NavLink
                        to="/subscription"
                        onClick={closeMenu}
                        className="
                            block
                            text-center

                            px-5
                            py-3

                            rounded-xl

                            text-white
                            font-semibold

                            bg-gradient-to-r
                            from-violet-600
                            to-cyan-500

                            shadow-lg
                            shadow-violet-500/10

                            transition-all
                            hover:-translate-y-0.5
                        "
                    >
                        Subscription
                    </NavLink>

                    {/* MOBILE THEME BUTTON */}

                    <button
                        type="button"
                        onClick={() =>
                            setDarkMode((previous) => !previous)
                        }
                        className="
                            w-full

                            mt-2
                            px-4
                            py-3

                            rounded-xl

                            flex
                            items-center
                            justify-center
                            gap-3

                            border
                            border-slate-200

                            bg-slate-50
                            text-slate-700

                            dark:border-white/10
                            dark:bg-white/5
                            dark:text-slate-300

                            font-semibold

                            transition

                            hover:bg-slate-100
                            dark:hover:bg-white/10
                        "
                    >
                        {darkMode ? (
                            <>
                                <span className="text-yellow-400">
                                    ☀
                                </span>

                                Switch to Light Mode
                            </>
                        ) : (
                            <>
                                <span className="text-violet-600 dark:text-cyan-400">
                                    ☾
                                </span>

                                Switch to Dark Mode
                            </>
                        )}
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;