import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Auth() {
    const location = useLocation();
    const navigate = useNavigate();

    // ================= AUTH MODE =================

    const [isSignup, setIsSignup] = useState(
        location.pathname === "/signup"
    );

    // ================= DARK / LIGHT MODE =================

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    // ================= LOGIN STATES =================

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [signupName, setSignupName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupRole, setSignupRole] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // ================= THEME =================

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    // ================= SWITCH FUNCTIONS =================

    const switchToSignup = () => {
        setError("");
        setSuccess("");
        setIsSignup(true);
        navigate("/signup");
    };

    const switchToLogin = () => {
        setError("");
        setSuccess("");
        setIsSignup(false);
        navigate("/login");
    };

    // ================= LOGIN =================

    const handleLogin = (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        // Basic validation
        if (!loginEmail || !loginPassword) {
            setError("Please enter email and password.");
            return;
        }

        // ================= SUPER ADMIN LOGIN =================

        if (
            loginEmail === "superadmin@shiyora.com" &&
            loginPassword === "SuperAdmin@123"
        ) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userRole", "superadmin");
            localStorage.setItem(
                "user",
                JSON.stringify({
                    name: "Super Admin",
                    email: "superadmin@shiyora.com",
                    role: "superadmin",
                })
            );

            navigate("/superadmin/dashboard");
            return;
        }

        // ================= DEMO USERS =================

        const savedUser = localStorage.getItem("shiyoraUser");

        if (savedUser) {
            const user = JSON.parse(savedUser);

            if (
                user.email === loginEmail &&
                user.password === loginPassword
            ) {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userRole", user.role);

                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    })
                );

                // For now student/teacher dashboards
                // will be created later.
                if (user.role === "student") {
                    navigate("/student/dashboard");
                } else if (user.role === "teacher") {
                    navigate("/teacher/dashboard");
                }

                return;
            }
        }

        setError("Invalid email or password.");
    };

    // ================= SIGNUP =================

    const handleSignup = (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (
            !signupName ||
            !signupEmail ||
            !signupRole ||
            !signupPassword ||
            !confirmPassword
        ) {
            setError("Please fill all fields.");
            return;
        }

        if (signupPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!agreeTerms) {
            setError("Please accept the terms and conditions.");
            return;
        }

        // Save demo user in localStorage
        const user = {
            name: signupName,
            email: signupEmail,
            role: signupRole,
            password: signupPassword,
        };

        localStorage.setItem(
            "shiyoraUser",
            JSON.stringify(user)
        );

        setSuccess(
            "Account created successfully! Please sign in."
        );

        // Clear fields
        setSignupName("");
        setSignupEmail("");
        setSignupRole("");
        setSignupPassword("");
        setConfirmPassword("");
        setAgreeTerms(false);

        // Switch to login after signup
        setTimeout(() => {
            setIsSignup(false);
            navigate("/login");
        }, 1200);
    };

    // ================= INPUT STYLE =================

    const inputStyle = `
        w-full px-4 py-3 rounded-xl
        border border-gray-300 dark:border-slate-700
        bg-white dark:bg-slate-800
        text-gray-900 dark:text-white
        placeholder-gray-400 dark:placeholder-gray-500
        outline-none
        focus:border-indigo-500
        focus:ring-2
        focus:ring-indigo-100
        dark:focus:ring-indigo-900
        transition
    `;

    return (
        <div
            className="
                min-h-[calc(100vh-73px)]
                bg-slate-100 dark:bg-slate-950
                flex items-center justify-center
                px-4 py-8
                transition-colors duration-300
            "
        >

            {/* ================= DARK MODE ================= */}

            <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
                className="
                    fixed
                    top-24
                    right-6
                    z-[999]
                    w-11
                    h-11
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-white
                    dark:bg-slate-800
                    text-gray-700
                    dark:text-yellow-300
                    border
                    border-gray-200
                    dark:border-slate-700
                    shadow-lg
                    dark:shadow-black/40
                    hover:scale-110
                    active:scale-95
                    transition-all
                    duration-300
                "
            >
                {darkMode ? "☀️" : "🌙"}
            </button>

            {/* ================= MAIN CARD ================= */}

            <div
                className="
                    relative
                    w-full
                    max-w-4xl
                    min-h-[560px]
                    bg-white
                    dark:bg-slate-900
                    rounded-3xl
                    shadow-2xl
                    dark:shadow-black/40
                    overflow-hidden
                    transition-colors
                    duration-300
                "
            >

                {/* =====================================================
                    DESKTOP LOGIN
                ====================================================== */}

                <div
                    className={`
                        hidden md:flex
                        absolute
                        top-0
                        left-0
                        w-1/2
                        h-full
                        items-center
                        justify-center
                        px-8
                        transition-all
                        duration-700
                        ease-in-out

                        ${isSignup
                            ? "translate-x-full opacity-0 pointer-events-none"
                            : "translate-x-0 opacity-100"
                        }
                    `}
                    style={{
                        zIndex: isSignup ? 1 : 10,
                    }}
                >

                    <div className="w-full max-w-sm">

                        {/* LOGO */}

                        <div className="flex justify-center mb-4">

                            <div
                                className="
                                    w-11
                                    h-11
                                    rounded-xl
                                    bg-indigo-600
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                    font-bold
                                    text-lg
                                    shadow-md
                                "
                            >
                                S
                            </div>

                        </div>

                        <h2
                            className="
                                text-3xl
                                font-bold
                                text-gray-900
                                dark:text-white
                                text-center
                            "
                        >
                            Welcome Back
                        </h2>

                        <p
                            className="
                                text-sm
                                text-gray-500
                                dark:text-gray-400
                                text-center
                                mt-2
                            "
                        >
                            Sign in to continue to Shiyora
                        </p>

                        {/* ERROR */}

                        {error && !isSignup && (
                            <div
                                className="
                                    mt-4
                                    rounded-xl
                                    bg-red-50
                                    dark:bg-red-950/40
                                    border
                                    border-red-200
                                    dark:border-red-900
                                    px-4
                                    py-3
                                    text-sm
                                    text-red-600
                                    dark:text-red-400
                                "
                            >
                                {error}
                            </div>
                        )}

                        {/* SUCCESS */}

                        {success && !isSignup && (
                            <div
                                className="
                                    mt-4
                                    rounded-xl
                                    bg-emerald-50
                                    dark:bg-emerald-950/40
                                    border
                                    border-emerald-200
                                    dark:border-emerald-900
                                    px-4
                                    py-3
                                    text-sm
                                    text-emerald-600
                                    dark:text-emerald-400
                                "
                            >
                                {success}
                            </div>
                        )}

                        {/* LOGIN FORM */}

                        <form
                            onSubmit={handleLogin}
                            className="mt-7 space-y-4"
                        >

                            {/* EMAIL */}

                            <div>

                                <label
                                    className="
                                        block
                                        text-sm
                                        font-semibold
                                        text-gray-700
                                        dark:text-gray-300
                                        mb-1.5
                                    "
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    value={loginEmail}
                                    onChange={(e) =>
                                        setLoginEmail(e.target.value)
                                    }
                                    placeholder="Enter your email"
                                    className={inputStyle}
                                />

                            </div>

                            {/* PASSWORD */}

                            <div>

                                <label
                                    className="
                                        block
                                        text-sm
                                        font-semibold
                                        text-gray-700
                                        dark:text-gray-300
                                        mb-1.5
                                    "
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    value={loginPassword}
                                    onChange={(e) =>
                                        setLoginPassword(e.target.value)
                                    }
                                    placeholder="Enter your password"
                                    className={inputStyle}
                                />

                            </div>

                            {/* REMEMBER / FORGOT */}

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    text-xs
                                "
                            >

                                <label
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        text-gray-600
                                        dark:text-gray-400
                                    "
                                >

                                    <input
                                        type="checkbox"
                                        className="accent-indigo-600"
                                    />

                                    Remember me

                                </label>

                                <button
                                    type="button"
                                    className="
                                        text-indigo-600
                                        dark:text-indigo-400
                                        font-semibold
                                    "
                                >
                                    Forgot Password?
                                </button>

                            </div>

                            {/* LOGIN BUTTON */}

                            <button
                                type="submit"
                                className="
                                    w-full
                                    py-3
                                    rounded-xl
                                    bg-indigo-600
                                    text-white
                                    font-semibold
                                    hover:bg-indigo-700
                                    active:scale-[0.98]
                                    transition
                                "
                            >
                                Sign In
                            </button>

                        </form>

                        <p
                            className="
                                text-center
                                text-sm
                                text-gray-600
                                dark:text-gray-400
                                mt-6
                            "
                        >
                            Don't have an account?

                            <button
                                type="button"
                                onClick={switchToSignup}
                                className="
                                    ml-1
                                    text-indigo-600
                                    dark:text-indigo-400
                                    font-semibold
                                "
                            >
                                Create Account
                            </button>

                        </p>

                    </div>

                </div>


                {/* =====================================================
                    DESKTOP SIGNUP
                ====================================================== */}

                <div
                    className={`
                        hidden md:flex
                        absolute
                        top-0
                        left-0
                        w-1/2
                        h-full
                        items-center
                        justify-center
                        px-8
                        transition-all
                        duration-700
                        ease-in-out

                        ${isSignup
                            ? "translate-x-full opacity-100"
                            : "translate-x-0 opacity-0 pointer-events-none"
                        }
                    `}
                    style={{
                        zIndex: isSignup ? 10 : 1,
                    }}
                >

                    <div className="w-full max-w-sm">

                        <div className="flex justify-center mb-3">

                            <div
                                className="
                                    w-11
                                    h-11
                                    rounded-xl
                                    bg-indigo-600
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                    font-bold
                                    text-lg
                                "
                            >
                                S
                            </div>

                        </div>

                        <h2
                            className="
                                text-3xl
                                font-bold
                                text-gray-900
                                dark:text-white
                                text-center
                            "
                        >
                            Create Account
                        </h2>

                        <p
                            className="
                                text-sm
                                text-gray-500
                                dark:text-gray-400
                                text-center
                                mt-2
                            "
                        >
                            Start your journey with Shiyora
                        </p>

                        {/* ERROR */}

                        {error && isSignup && (
                            <div
                                className="
                                    mt-3
                                    rounded-xl
                                    bg-red-50
                                    dark:bg-red-950/40
                                    border
                                    border-red-200
                                    dark:border-red-900
                                    px-4
                                    py-2
                                    text-sm
                                    text-red-600
                                "
                            >
                                {error}
                            </div>
                        )}

                        {/* SIGNUP FORM */}

                        <form
                            onSubmit={handleSignup}
                            className="mt-5 space-y-3"
                        >

                            <input
                                type="text"
                                value={signupName}
                                onChange={(e) =>
                                    setSignupName(e.target.value)
                                }
                                placeholder="Full Name"
                                className={inputStyle}
                            />

                            <input
                                type="email"
                                value={signupEmail}
                                onChange={(e) =>
                                    setSignupEmail(e.target.value)
                                }
                                placeholder="Email Address"
                                className={inputStyle}
                            />

                            <select
                                value={signupRole}
                                onChange={(e) =>
                                    setSignupRole(e.target.value)
                                }
                                className={`
                                    ${inputStyle}
                                    text-gray-600
                                    dark:text-gray-300
                                `}
                            >

                                <option value="" disabled>
                                    Select Account Type
                                </option>

                                <option value="student">
                                    Student
                                </option>

                                <option value="teacher">
                                    Teacher
                                </option>

                            </select>

                            <input
                                type="password"
                                value={signupPassword}
                                onChange={(e) =>
                                    setSignupPassword(e.target.value)
                                }
                                placeholder="Create Password"
                                className={inputStyle}
                            />

                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                placeholder="Confirm Password"
                                className={inputStyle}
                            />

                            <label
                                className="
                                    flex
                                    items-start
                                    gap-2
                                    text-xs
                                    text-gray-600
                                    dark:text-gray-400
                                    pt-1
                                "
                            >

                                <input
                                    type="checkbox"
                                    checked={agreeTerms}
                                    onChange={(e) =>
                                        setAgreeTerms(e.target.checked)
                                    }
                                    className="mt-0.5 accent-indigo-600"
                                />

                                <span>
                                    I agree to the Shiyora terms and
                                    conditions.
                                </span>

                            </label>

                            <button
                                type="submit"
                                className="
                                    w-full
                                    py-3
                                    rounded-xl
                                    bg-indigo-600
                                    text-white
                                    font-semibold
                                    hover:bg-indigo-700
                                    active:scale-[0.98]
                                    transition
                                "
                            >
                                Create Account
                            </button>

                        </form>

                        <p
                            className="
                                text-center
                                text-sm
                                text-gray-600
                                dark:text-gray-400
                                mt-4
                            "
                        >
                            Already have an account?

                            <button
                                type="button"
                                onClick={switchToLogin}
                                className="
                                    ml-1
                                    text-indigo-600
                                    dark:text-indigo-400
                                    font-semibold
                                "
                            >
                                Sign In
                            </button>

                        </p>

                    </div>

                </div>


                {/* =====================================================
                    SLIDING PANEL
                ====================================================== */}

                <div
                    className="
                        hidden md:block
                        absolute
                        top-0
                        left-1/2
                        w-1/2
                        h-full
                        bg-indigo-600
                        text-white
                        transition-transform
                        duration-700
                        ease-[cubic-bezier(0.65,0,0.35,1)]
                    "
                    style={{
                        transform: isSignup
                            ? "translateX(-100%)"
                            : "translateX(0)",
                        zIndex: 20,
                    }}
                >

                    {/* NEW USER */}

                    <div
                        className={`
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            text-center
                            px-10
                            transition-all
                            duration-500

                            ${isSignup
                                ? "opacity-0 scale-90 pointer-events-none"
                                : "opacity-100 scale-100"
                            }
                        `}
                    >

                        <div className="max-w-xs">

                            <div
                                className="
                                    w-16
                                    h-16
                                    mx-auto
                                    rounded-2xl
                                    bg-white/10
                                    border
                                    border-white/20
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <span className="text-2xl font-bold">
                                    S
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold mt-6">
                                New Here?
                            </h2>

                            <p className="text-indigo-100 text-sm leading-relaxed mt-4">
                                Create your account and join Shiyora.
                                Manage courses, learning resources and
                                your progress in one place.
                            </p>

                            <button
                                type="button"
                                onClick={switchToSignup}
                                className="
                                    mt-7
                                    px-8
                                    py-3
                                    rounded-xl
                                    border-2
                                    border-white
                                    font-semibold
                                    hover:bg-white
                                    hover:text-indigo-600
                                    active:scale-95
                                    transition-all
                                "
                            >
                                Create Account
                            </button>

                        </div>

                    </div>


                    {/* WELCOME BACK */}

                    <div
                        className={`
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            text-center
                            px-10
                            transition-all
                            duration-500

                            ${isSignup
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-90 pointer-events-none"
                            }
                        `}
                    >

                        <div className="max-w-xs">

                            <div
                                className="
                                    w-16
                                    h-16
                                    mx-auto
                                    rounded-2xl
                                    bg-white/10
                                    border
                                    border-white/20
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <span className="text-2xl font-bold">
                                    S
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold mt-6">
                                Welcome Back
                            </h2>

                            <p className="text-indigo-100 text-sm leading-relaxed mt-4">
                                Already have an account?
                                Sign in and continue your learning
                                journey with Shiyora.
                            </p>

                            <button
                                type="button"
                                onClick={switchToLogin}
                                className="
                                    mt-7
                                    px-8
                                    py-3
                                    rounded-xl
                                    border-2
                                    border-white
                                    font-semibold
                                    hover:bg-white
                                    hover:text-indigo-600
                                    active:scale-95
                                    transition-all
                                "
                            >
                                Sign In
                            </button>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    MOBILE VIEW
                ====================================================== */}

                <div
                    className="
                        md:hidden
                        w-full
                        min-h-[560px]
                        bg-white
                        dark:bg-slate-900
                    "
                >

                    {!isSignup ? (

                        <div className="px-6 py-10">

                            <div className="flex justify-center">

                                <div
                                    className="
                                        w-11
                                        h-11
                                        rounded-xl
                                        bg-indigo-600
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        font-bold
                                    "
                                >
                                    S
                                </div>

                            </div>

                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-gray-900
                                    dark:text-white
                                    text-center
                                    mt-4
                                "
                            >
                                Welcome Back
                            </h2>

                            <p
                                className="
                                    text-sm
                                    text-gray-500
                                    dark:text-gray-400
                                    text-center
                                    mt-2
                                "
                            >
                                Sign in to Shiyora
                            </p>

                            {error && (
                                <div
                                    className="
                                        mt-4
                                        rounded-xl
                                        bg-red-50
                                        border
                                        border-red-200
                                        px-4
                                        py-3
                                        text-sm
                                        text-red-600
                                    "
                                >
                                    {error}
                                </div>
                            )}

                            <form
                                onSubmit={handleLogin}
                                className="mt-6 space-y-4"
                            >

                                <input
                                    type="email"
                                    value={loginEmail}
                                    onChange={(e) =>
                                        setLoginEmail(e.target.value)
                                    }
                                    placeholder="Email Address"
                                    className={inputStyle}
                                />

                                <input
                                    type="password"
                                    value={loginPassword}
                                    onChange={(e) =>
                                        setLoginPassword(e.target.value)
                                    }
                                    placeholder="Password"
                                    className={inputStyle}
                                />

                                <button
                                    type="submit"
                                    className="
                                        w-full
                                        py-3
                                        rounded-xl
                                        bg-indigo-600
                                        text-white
                                        font-semibold
                                        hover:bg-indigo-700
                                        transition
                                    "
                                >
                                    Sign In
                                </button>

                            </form>

                            <p
                                className="
                                    text-center
                                    text-sm
                                    text-gray-600
                                    dark:text-gray-400
                                    mt-6
                                "
                            >
                                Don't have an account?

                                <button
                                    type="button"
                                    onClick={switchToSignup}
                                    className="
                                        ml-1
                                        text-indigo-600
                                        dark:text-indigo-400
                                        font-semibold
                                    "
                                >
                                    Create Account
                                </button>

                            </p>

                        </div>

                    ) : (

                        <div className="px-6 py-8">

                            <div className="flex justify-center">

                                <div
                                    className="
                                        w-11
                                        h-11
                                        rounded-xl
                                        bg-indigo-600
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        font-bold
                                    "
                                >
                                    S
                                </div>

                            </div>

                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-gray-900
                                    dark:text-white
                                    text-center
                                    mt-4
                                "
                            >
                                Create Account
                            </h2>

                            <p
                                className="
                                    text-sm
                                    text-gray-500
                                    dark:text-gray-400
                                    text-center
                                    mt-2
                                "
                            >
                                Join Shiyora today
                            </p>

                            {error && (
                                <div
                                    className="
                                        mt-4
                                        rounded-xl
                                        bg-red-50
                                        border
                                        border-red-200
                                        px-4
                                        py-3
                                        text-sm
                                        text-red-600
                                    "
                                >
                                    {error}
                                </div>
                            )}

                            <form
                                onSubmit={handleSignup}
                                className="mt-5 space-y-3"
                            >

                                <input
                                    type="text"
                                    value={signupName}
                                    onChange={(e) =>
                                        setSignupName(e.target.value)
                                    }
                                    placeholder="Full Name"
                                    className={inputStyle}
                                />

                                <input
                                    type="email"
                                    value={signupEmail}
                                    onChange={(e) =>
                                        setSignupEmail(e.target.value)
                                    }
                                    placeholder="Email Address"
                                    className={inputStyle}
                                />

                                <select
                                    value={signupRole}
                                    onChange={(e) =>
                                        setSignupRole(e.target.value)
                                    }
                                    className={inputStyle}
                                >

                                    <option value="" disabled>
                                        Select Account Type
                                    </option>

                                    <option value="student">
                                        Student
                                    </option>

                                    <option value="teacher">
                                        Teacher
                                    </option>

                                </select>

                                <input
                                    type="password"
                                    value={signupPassword}
                                    onChange={(e) =>
                                        setSignupPassword(e.target.value)
                                    }
                                    placeholder="Create Password"
                                    className={inputStyle}
                                />

                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    placeholder="Confirm Password"
                                    className={inputStyle}
                                />

                                <label
                                    className="
                                        flex
                                        items-start
                                        gap-2
                                        text-xs
                                        text-gray-600
                                        dark:text-gray-400
                                    "
                                >

                                    <input
                                        type="checkbox"
                                        checked={agreeTerms}
                                        onChange={(e) =>
                                            setAgreeTerms(
                                                e.target.checked
                                            )
                                        }
                                        className="mt-0.5 accent-indigo-600"
                                    />

                                    <span>
                                        I agree to the Shiyora terms and
                                        conditions.
                                    </span>

                                </label>

                                <button
                                    type="submit"
                                    className="
                                        w-full
                                        py-3
                                        rounded-xl
                                        bg-indigo-600
                                        text-white
                                        font-semibold
                                        hover:bg-indigo-700
                                        transition
                                    "
                                >
                                    Create Account
                                </button>

                            </form>

                            <p
                                className="
                                    text-center
                                    text-sm
                                    text-gray-600
                                    dark:text-gray-400
                                    mt-5
                                "
                            >
                                Already have an account?

                                <button
                                    type="button"
                                    onClick={switchToLogin}
                                    className="
                                        ml-1
                                        text-indigo-600
                                        dark:text-indigo-400
                                        font-semibold
                                    "
                                >
                                    Sign In
                                </button>

                            </p>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}

export default Auth;