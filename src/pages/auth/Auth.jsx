import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import shiyoraLogo from "../../assets/shiyora.logo.png";

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";


// SMALL ICONS


function ArrowIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    );
}

function MailIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    );
}

function LockIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect x="5" y="10" width="14" height="10" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
    );
}

function UserIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 20c.7-3.5 3.1-5.5 7-5.5s6.3 2 7 5.5" />
        </svg>
    );
}

function CapIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M12 3 1 8l11 5 9-4.09V17h2V8L12 3Z" />
            <path d="M5 10.5V16c0 1.5 3 3 7 3s7-1.5 7-3v-5.5" />
        </svg>
    );
}


// AUTH

function Auth() {
    const location = useLocation();
    const navigate = useNavigate();

    const [isSignup, setIsSignup] = useState(
        location.pathname === "/signup"
    );

    // LOGIN
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    // SIGNUP
    const [signupName, setSignupName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupRole, setSignupRole] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);

    // MESSAGES
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        setIsSignup(location.pathname === "/signup");
    }, [location.pathname]);

    //switch

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

    // LOGIN
    const handleLogin = (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (!loginEmail || !loginPassword) {
            setError("Please enter email and password.");
            return;
        }

        // SUPER ADMIN
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

        // DEMO USER
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
    //signup

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

        setSignupName("");
        setSignupEmail("");
        setSignupRole("");
        setSignupPassword("");
        setConfirmPassword("");
        setAgreeTerms(false);

        setTimeout(() => {
            setIsSignup(false);
            navigate("/login");
        }, 1200);
    };

    // ============================================================
    // THEME STYLES
    // ============================================================

    const inputStyle = `
        w-full
        rounded-xl
        border
        border-[#1C2A22]/15
        bg-[#F3EEDD]/70
        px-4
        py-3
        text-sm
        text-[#1C2A22]
        placeholder:text-[#1C2A22]/40
        outline-none
        transition-all
        duration-300
        hover:border-[#1C2A22]/25
        focus:border-[#F2B84B]
        focus:ring-2
        focus:ring-[#F2B84B]/20
    `;

    const errorStyle = `
        rounded-xl
        border
        border-[#D6402C]/25
        bg-[#D6402C]/10
        px-4
        py-3
        text-sm
        text-[#A92F21]
    `;

    const successStyle = `
        rounded-xl
        border
        border-[#7C9A82]/30
        bg-[#7C9A82]/10
        px-4
        py-3
        text-sm
        text-[#416348]
    `;

    return (
        <main
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#161F19]
                px-4
                py-8
                font-['Inter']
                text-[#1C2A22]
                sm:px-6
                lg:py-12
            "
        >
            <style>{FONT_IMPORTS}</style>

            {/* ======================================================
                BACKGROUND
            ======================================================= */}

            {/* Warm lamp glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    -top-40
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#F2B84B]/[0.10]
                    blur-[130px]
                "
            />

            {/* Green glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    -right-40
                    h-[520px]
                    w-[520px]
                    rounded-full
                    bg-[#7C9A82]/[0.12]
                    blur-[140px]
                "
            />

            {/* Center glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[500px]
                    w-[700px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#F3EEDD]/[0.025]
                    blur-[100px]
                "
            />

            {/* Chalk dust */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.08]
                "
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(243,238,221,0.7) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* ======================================================
                MAIN AUTH CARD
            ======================================================= */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    w-full
                    max-w-5xl
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#F3EEDD]/10
                    bg-[#F3EEDD]
                    shadow-[0_30px_90px_rgba(0,0,0,0.55)]
                    md:min-h-[640px]
                    lg:rounded-3xl
                "
            >

                {/* desktop login */}

                <div
                    className={`
                        absolute
                        left-0
                        top-0
                        hidden
                        h-full
                        w-1/2
                        items-center
                        justify-center
                        px-10
                        transition-all
                        duration-700
                        ease-in-out
                        md:flex
                        ${isSignup
                            ? "pointer-events-none translate-x-full opacity-0"
                            : "translate-x-0 opacity-100"
                        }
                    `}
                    style={{
                        zIndex: isSignup ? 1 : 10,
                    }}
                >
                    <div className="w-full max-w-sm">

                        {/* Logo */}
                        <div className="mb-5 flex justify-center">
                            <div
                                className="
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-[#1C2A22]/10
                                    bg-white/60
                                    shadow-[0_10px_30px_rgba(28,42,34,0.10)]
                                "
                            >
                                <img
                                    src={shiyoraLogo}
                                    alt="Shiyora Logo"
                                    className="h-11 w-11 object-contain"
                                />
                            </div>
                        </div>

                        {/* Heading */}
                        <div className="text-center">
                            <p
                                className="
                                    font-['JetBrains_Mono']
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#D6402C]
                                "
                            >
                                Welcome Back
                            </p>

                            <h2
                                className="
                                    mt-2
                                    font-['Space_Grotesk']
                                    text-3xl
                                    font-semibold
                                    tracking-tight
                                    text-[#1C2A22]
                                "
                            >
                                Sign in to Shiyora
                            </h2>

                            <p className="mt-2 text-sm text-[#1C2A22]/50">
                                Continue your learning journey.
                            </p>
                        </div>

                        {/* Error */}
                        {error && !isSignup && (
                            <div className={`${errorStyle} mt-5`}>
                                {error}
                            </div>
                        )}

                        {success && !isSignup && (
                            <div className={`${successStyle} mt-5`}>
                                {success}
                            </div>
                        )}

                        {/* Login Form */}
                        <form
                            onSubmit={handleLogin}
                            className="mt-7 space-y-5"
                        >
                            {/* Email */}
                            <div>
                                <label
                                    className="
                                        mb-2
                                        block
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        text-[#1C2A22]/60
                                    "
                                >
                                    Email Address
                                </label>

                                <div className="relative">
                                    <MailIcon
                                        className="
                                            pointer-events-none
                                            absolute
                                            left-4
                                            top-1/2
                                            h-4
                                            w-4
                                            -translate-y-1/2
                                            text-[#1C2A22]/35
                                        "
                                    />

                                    <input
                                        type="email"
                                        value={loginEmail}
                                        onChange={(e) =>
                                            setLoginEmail(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Enter your email"
                                        className={`${inputStyle} pl-11`}
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    className="
                                        mb-2
                                        block
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        text-[#1C2A22]/60
                                    "
                                >
                                    Password
                                </label>

                                <div className="relative">
                                    <LockIcon
                                        className="
                                            pointer-events-none
                                            absolute
                                            left-4
                                            top-1/2
                                            h-4
                                            w-4
                                            -translate-y-1/2
                                            text-[#1C2A22]/35
                                        "
                                    />

                                    <input
                                        type="password"
                                        value={loginPassword}
                                        onChange={(e) =>
                                            setLoginPassword(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Enter your password"
                                        className={`${inputStyle} pl-11`}
                                    />
                                </div>
                            </div>

                            {/* Remember */}
                            <div className="flex items-center justify-between text-xs">
                                <label className="flex items-center gap-2 text-[#1C2A22]/50">
                                    <input
                                        type="checkbox"
                                        className="
                                            h-3.5
                                            w-3.5
                                            accent-[#D6402C]
                                        "
                                    />
                                    Remember me
                                </label>

                                <button
                                    type="button"
                                    className="
                                        font-medium
                                        text-[#D6402C]
                                        transition-colors
                                        hover:text-[#B82F22]
                                    "
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="
                                    group
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    bg-[#F2B84B]
                                    py-3.5
                                    font-semibold
                                    text-[#161F19]
                                    shadow-[0_10px_30px_rgba(242,184,75,0.18)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:bg-[#f7c968]
                                    hover:shadow-[0_14px_35px_rgba(242,184,75,0.25)]
                                    active:scale-[0.98]
                                    focus-visible:outline
                                    focus-visible:outline-2
                                    focus-visible:outline-offset-2
                                    focus-visible:outline-[#F2B84B]
                                "
                            >
                                Sign In

                                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </form>

                        {/* Switch */}
                        <p className="mt-6 text-center text-sm text-[#1C2A22]/50">
                            Don't have an account?

                            <button
                                type="button"
                                onClick={switchToSignup}
                                className="
                                    ml-1
                                    font-semibold
                                    text-[#D6402C]
                                    transition-colors
                                    hover:text-[#B82F22]
                                "
                            >
                                Create Account
                            </button>
                        </p>
                    </div>
                </div>

                {/* ==================================================
                    DESKTOP SIGNUP
                =================================================== */}

                <div
                    className={`
                        absolute
                        left-0
                        top-0
                        hidden
                        h-full
                        w-1/2
                        items-center
                        justify-center
                        px-10
                        transition-all
                        duration-700
                        md:flex
                        ${isSignup
                            ? "translate-x-full opacity-100"
                            : "pointer-events-none translate-x-0 opacity-0"
                        }
                    `}
                    style={{
                        zIndex: isSignup ? 10 : 1,
                    }}
                >
                    <div className="w-full max-w-sm">

                        {/* Logo */}
                        <div className="mb-4 flex justify-center">
                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-[#1C2A22]/10
                                    bg-white/60
                                "
                            >
                                <img
                                    src={shiyoraLogo}
                                    alt="Shiyora Logo"
                                    className="h-9 w-9 object-contain"
                                />
                            </div>
                        </div>

                        {/* Heading */}
                        <div className="text-center">
                            <p
                                className="
                                    font-['JetBrains_Mono']
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#D6402C]
                                "
                            >
                                Start Learning
                            </p>

                            <h2
                                className="
                                    mt-2
                                    font-['Space_Grotesk']
                                    text-3xl
                                    font-semibold
                                    tracking-tight
                                    text-[#1C2A22]
                                "
                            >
                                Create Account
                            </h2>

                            <p className="mt-2 text-sm text-[#1C2A22]/50">
                                Build your learning profile with Shiyora.
                            </p>
                        </div>

                        {/* Error */}
                        {error && isSignup && (
                            <div className={`${errorStyle} mt-4`}>
                                {error}
                            </div>
                        )}

                        {/* Signup Form */}
                        <form
                            onSubmit={handleSignup}
                            className="mt-5 space-y-3"
                        >
                            {/* Name */}
                            <div className="relative">
                                <UserIcon
                                    className="
                                        pointer-events-none
                                        absolute
                                        left-4
                                        top-1/2
                                        h-4
                                        w-4
                                        -translate-y-1/2
                                        text-[#1C2A22]/35
                                    "
                                />

                                <input
                                    type="text"
                                    value={signupName}
                                    onChange={(e) =>
                                        setSignupName(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Full Name"
                                    className={`${inputStyle} pl-11`}
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <MailIcon
                                    className="
                                        pointer-events-none
                                        absolute
                                        left-4
                                        top-1/2
                                        h-4
                                        w-4
                                        -translate-y-1/2
                                        text-[#1C2A22]/35
                                    "
                                />

                                <input
                                    type="email"
                                    value={signupEmail}
                                    onChange={(e) =>
                                        setSignupEmail(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Email Address"
                                    className={`${inputStyle} pl-11`}
                                />
                            </div>

                            {/* Role */}
                            <div className="relative">
                                <CapIcon
                                    className="
                                        pointer-events-none
                                        absolute
                                        left-4
                                        top-1/2
                                        h-4
                                        w-4
                                        -translate-y-1/2
                                        text-[#1C2A22]/35
                                    "
                                />

                                <select
                                    value={signupRole}
                                    onChange={(e) =>
                                        setSignupRole(
                                            e.target.value
                                        )
                                    }
                                    className={`${inputStyle} appearance-none pl-11`}
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
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <LockIcon
                                    className="
                                        pointer-events-none
                                        absolute
                                        left-4
                                        top-1/2
                                        h-4
                                        w-4
                                        -translate-y-1/2
                                        text-[#1C2A22]/35
                                    "
                                />

                                <input
                                    type="password"
                                    value={signupPassword}
                                    onChange={(e) =>
                                        setSignupPassword(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Create Password"
                                    className={`${inputStyle} pl-11`}
                                />
                            </div>

                            {/* Confirm */}
                            <div className="relative">
                                <LockIcon
                                    className="
                                        pointer-events-none
                                        absolute
                                        left-4
                                        top-1/2
                                        h-4
                                        w-4
                                        -translate-y-1/2
                                        text-[#1C2A22]/35
                                    "
                                />

                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Confirm Password"
                                    className={`${inputStyle} pl-11`}
                                />
                            </div>

                            {/* Terms */}
                            <label
                                className="
                                    flex
                                    items-start
                                    gap-2
                                    pt-1
                                    text-xs
                                    leading-relaxed
                                    text-[#1C2A22]/50
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
                                    className="
                                        mt-0.5
                                        h-3.5
                                        w-3.5
                                        shrink-0
                                        accent-[#D6402C]
                                    "
                                />

                                <span>
                                    I agree to the Shiyora terms and
                                    conditions.
                                </span>
                            </label>

                            {/* Button */}
                            <button
                                type="submit"
                                className="
                                    group
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    bg-[#F2B84B]
                                    py-3.5
                                    font-semibold
                                    text-[#161F19]
                                    shadow-[0_10px_30px_rgba(242,184,75,0.18)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:bg-[#f7c968]
                                    hover:shadow-[0_14px_35px_rgba(242,184,75,0.25)]
                                    active:scale-[0.98]
                                "
                            >
                                Create Account

                                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </form>

                        {/* Switch */}
                        <p className="mt-5 text-center text-sm text-[#1C2A22]/50">
                            Already have an account?

                            <button
                                type="button"
                                onClick={switchToLogin}
                                className="
                                    ml-1
                                    font-semibold
                                    text-[#D6402C]
                                    transition-colors
                                    hover:text-[#B82F22]
                                "
                            >
                                Sign In
                            </button>
                        </p>
                    </div>
                </div>

                {/* ==================================================
                    SLIDING PANEL
                =================================================== */}

                <div
                    className="
                        absolute
                        left-1/2
                        top-0
                        hidden
                        h-full
                        w-1/2
                        overflow-hidden
                        border-l
                        border-[#F3EEDD]/10
                        bg-[#1B241E]
                        md:block
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
                    {/* Golden glow */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-32
                            -top-32
                            h-80
                            w-80
                            rounded-full
                            bg-[#F2B84B]/[0.12]
                            blur-[100px]
                        "
                    />

                    {/* Green glow */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            -bottom-32
                            -left-32
                            h-80
                            w-80
                            rounded-full
                            bg-[#7C9A82]/[0.15]
                            blur-[100px]
                        "
                    />

                    {/* Chalk texture */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            opacity-[0.07]
                        "
                        style={{
                            backgroundImage:
                                "radial-gradient(rgba(243,238,221,0.8) 1px, transparent 1px)",
                            backgroundSize: "22px 22px",
                        }}
                    />

                    {/*NEW USER PANEL*/}

                    <div
                        className={`
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            px-10
                            text-center
                            transition-all
                            duration-500
                            ${isSignup
                                ? "pointer-events-none scale-90 opacity-0"
                                : "scale-100 opacity-100"
                            }
                        `}
                    >
                        <div className="relative z-10 max-w-sm">

                            {/* Icon */}
                            <div
                                className="
                                    mx-auto
                                    flex
                                    h-20
                                    w-20
                                    items-center
                                    justify-center
                                    rounded-3xl
                                    border
                                    border-[#F2B84B]/30
                                    bg-[#F2B84B]/10
                                    text-[#F2B84B]
                                    shadow-[0_15px_40px_rgba(242,184,75,0.10)]
                                "
                            >
                                <CapIcon className="h-9 w-9" />
                            </div>

                            <p
                                className="
                                    mt-7
                                    font-['JetBrains_Mono']
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#F2B84B]
                                "
                            >
                                Your learning desk
                            </p>

                            <h2
                                className="
                                    mt-3
                                    font-['Space_Grotesk']
                                    text-4xl
                                    font-semibold
                                    tracking-tight
                                    text-[#F3EEDD]
                                "
                            >
                                New Here?
                            </h2>

                            <p
                                className="
                                    mt-4
                                    text-sm
                                    leading-relaxed
                                    text-[#F3EEDD]/55
                                "
                            >
                                Create your Shiyora account and keep
                                courses, resources, assessments and
                                progress together in one place.
                            </p>

                            <button
                                type="button"
                                onClick={switchToSignup}
                                className="
                                    group
                                    mt-7
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-[#F2B84B]/50
                                    bg-[#F2B84B]/5
                                    px-7
                                    py-3
                                    font-semibold
                                    text-[#F2B84B]
                                    transition-all
                                    duration-300
                                    hover:bg-[#F2B84B]
                                    hover:text-[#161F19]
                                    active:scale-95
                                "
                            >
                                Create Account
                                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* ==================================================
                        WELCOME BACK PANEL
                    =================================================== */}

                    <div
                        className={`
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            px-10
                            text-center
                            transition-all
                            duration-500
                            ${isSignup
                                ? "scale-100 opacity-100"
                                : "pointer-events-none scale-90 opacity-0"
                            }
                        `}
                    >
                        <div className="relative z-10 max-w-sm">

                            {/* Logo */}
                            <div
                                className="
                                    mx-auto
                                    flex
                                    h-20
                                    w-20
                                    items-center
                                    justify-center
                                    rounded-3xl
                                    border
                                    border-[#F3EEDD]/15
                                    bg-[#F3EEDD]/5
                                "
                            >
                                <img
                                    src={shiyoraLogo}
                                    alt="Shiyora Logo"
                                    className="h-14 w-14 object-contain"
                                />
                            </div>

                            <p
                                className="
                                    mt-7
                                    font-['JetBrains_Mono']
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#F2B84B]
                                "
                            >
                                Continue learning
                            </p>

                            <h2
                                className="
                                    mt-3
                                    font-['Space_Grotesk']
                                    text-4xl
                                    font-semibold
                                    tracking-tight
                                    text-[#F3EEDD]
                                "
                            >
                                Welcome Back
                            </h2>

                            <p
                                className="
                                    mt-4
                                    text-sm
                                    leading-relaxed
                                    text-[#F3EEDD]/55
                                "
                            >
                                Already have an account? Sign in and
                                continue building your skills with
                                Shiyora.
                            </p>

                            <button
                                type="button"
                                onClick={switchToLogin}
                                className="
                                    group
                                    mt-7
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-[#F2B84B]/50
                                    bg-[#F2B84B]/5
                                    px-7
                                    py-3
                                    font-semibold
                                    text-[#F2B84B]
                                    transition-all
                                    duration-300
                                    hover:bg-[#F2B84B]
                                    hover:text-[#161F19]
                                    active:scale-95
                                "
                            >
                                Sign In
                                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ==================================================
                    MOBILE
                =================================================== */}

                <div
                    className="
                        min-h-[640px]
                        bg-[#F3EEDD]
                        md:hidden
                    "
                >
                    {!isSignup ? (
                        /* ================= MOBILE LOGIN ================= */
                        <div className="px-6 py-10">

                            <div className="flex justify-center">
                                <div
                                    className="
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        border
                                        border-[#1C2A22]/10
                                        bg-white/60
                                    "
                                >
                                    <img
                                        src={shiyoraLogo}
                                        alt="Shiyora Logo"
                                        className="h-11 w-11 object-contain"
                                    />
                                </div>
                            </div>

                            <div className="mt-5 text-center">
                                <p
                                    className="
                                        font-['JetBrains_Mono']
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.2em]
                                        text-[#D6402C]
                                    "
                                >
                                    Welcome Back
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-['Space_Grotesk']
                                        text-3xl
                                        font-semibold
                                        text-[#1C2A22]
                                    "
                                >
                                    Sign in to Shiyora
                                </h2>

                                <p className="mt-2 text-sm text-[#1C2A22]/50">
                                    Continue your learning journey.
                                </p>
                            </div>

                            {error && (
                                <div className={`${errorStyle} mt-5`}>
                                    {error}
                                </div>
                            )}

                            <form
                                onSubmit={handleLogin}
                                className="mt-7 space-y-4"
                            >
                                <div className="relative">
                                    <MailIcon
                                        className="
                                            pointer-events-none
                                            absolute
                                            left-4
                                            top-1/2
                                            h-4
                                            w-4
                                            -translate-y-1/2
                                            text-[#1C2A22]/35
                                        "
                                    />

                                    <input
                                        type="email"
                                        value={loginEmail}
                                        onChange={(e) =>
                                            setLoginEmail(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Email Address"
                                        className={`${inputStyle} pl-11`}
                                    />
                                </div>

                                <div className="relative">
                                    <LockIcon
                                        className="
                                            pointer-events-none
                                            absolute
                                            left-4
                                            top-1/2
                                            h-4
                                            w-4
                                            -translate-y-1/2
                                            text-[#1C2A22]/35
                                        "
                                    />

                                    <input
                                        type="password"
                                        value={loginPassword}
                                        onChange={(e) =>
                                            setLoginPassword(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Password"
                                        className={`${inputStyle} pl-11`}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="
                                        group
                                        flex
                                        w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        bg-[#F2B84B]
                                        py-3.5
                                        font-semibold
                                        text-[#161F19]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:bg-[#f7c968]
                                        active:scale-[0.98]
                                    "
                                >
                                    Sign In
                                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </form>

                            <p className="mt-6 text-center text-sm text-[#1C2A22]/50">
                                Don't have an account?

                                <button
                                    type="button"
                                    onClick={switchToSignup}
                                    className="
                                        ml-1
                                        font-semibold
                                        text-[#D6402C]
                                    "
                                >
                                    Create Account
                                </button>
                            </p>
                        </div>
                    ) : (
                        /* ================= MOBILE SIGNUP ================= */
                        <div className="px-6 py-8">

                            <div className="flex justify-center">
                                <div
                                    className="
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        border
                                        border-[#1C2A22]/10
                                        bg-white/60
                                    "
                                >
                                    <img
                                        src={shiyoraLogo}
                                        alt="Shiyora Logo"
                                        className="h-11 w-11 object-contain"
                                    />
                                </div>
                            </div>

                            <div className="mt-5 text-center">
                                <p
                                    className="
                                        font-['JetBrains_Mono']
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.2em]
                                        text-[#D6402C]
                                    "
                                >
                                    Start Learning
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-['Space_Grotesk']
                                        text-3xl
                                        font-semibold
                                        text-[#1C2A22]
                                    "
                                >
                                    Create Account
                                </h2>

                                <p className="mt-2 text-sm text-[#1C2A22]/50">
                                    Build your learning profile.
                                </p>
                            </div>

                            {error && (
                                <div className={`${errorStyle} mt-5`}>
                                    {error}
                                </div>
                            )}

                            <form
                                onSubmit={handleSignup}
                                className="mt-6 space-y-3"
                            >
                                <div className="relative">
                                    <UserIcon
                                        className="
                                            pointer-events-none
                                            absolute
                                            left-4
                                            top-1/2
                                            h-4
                                            w-4
                                            -translate-y-1/2
                                            text-[#1C2A22]/35
                                        "
                                    />

                                    <input
                                        type="text"
                                        value={signupName}
                                        onChange={(e) =>
                                            setSignupName(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Full Name"
                                        className={`${inputStyle} pl-11`}
                                    />
                                </div>

                                <div className="relative">
                                    <MailIcon
                                        className="
                                            pointer-events-none
                                            absolute
                                            left-4
                                            top-1/2
                                            h-4
                                            w-4
                                            -translate-y-1/2
                                            text-[#1C2A22]/35
                                        "
                                    />

                                    <input
                                        type="email"
                                        value={signupEmail}
                                        onChange={(e) =>
                                            setSignupEmail(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Email Address"
                                        className={`${inputStyle} pl-11`}
                                    />
                                </div>

                                <select
                                    value={signupRole}
                                    onChange={(e) =>
                                        setSignupRole(
                                            e.target.value
                                        )
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

                                <div className="relative">
                                    <LockIcon
                                        className="
                                            pointer-events-none
                                            absolute
                                            left-4
                                            top-1/2
                                            h-4
                                            w-4
                                            -translate-y-1/2
                                            text-[#1C2A22]/35
                                        "
                                    />

                                    <input
                                        type="password"
                                        value={signupPassword}
                                        onChange={(e) =>
                                            setSignupPassword(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Create Password"
                                        className={`${inputStyle} pl-11`}
                                    />
                                </div>

                                <div className="relative">
                                    <LockIcon
                                        className="
                                            pointer-events-none
                                            absolute
                                            left-4
                                            top-1/2
                                            h-4
                                            w-4
                                            -translate-y-1/2
                                            text-[#1C2A22]/35
                                        "
                                    />

                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Confirm Password"
                                        className={`${inputStyle} pl-11`}
                                    />
                                </div>

                                <label
                                    className="
                                        flex
                                        items-start
                                        gap-2
                                        pt-1
                                        text-xs
                                        leading-relaxed
                                        text-[#1C2A22]/50
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
                                        className="
                                            mt-0.5
                                            h-3.5
                                            w-3.5
                                            accent-[#D6402C]
                                        "
                                    />

                                    <span>
                                        I agree to the Shiyora terms
                                        and conditions.
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    className="
                                        group
                                        flex
                                        w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        bg-[#F2B84B]
                                        py-3.5
                                        font-semibold
                                        text-[#161F19]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:bg-[#f7c968]
                                        active:scale-[0.98]
                                    "
                                >
                                    Create Account
                                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </form>

                            <p className="mt-5 text-center text-sm text-[#1C2A22]/50">
                                Already have an account?

                                <button
                                    type="button"
                                    onClick={switchToLogin}
                                    className="
                                        ml-1
                                        font-semibold
                                        text-[#D6402C]
                                    "
                                >
                                    Sign In
                                </button>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Auth;