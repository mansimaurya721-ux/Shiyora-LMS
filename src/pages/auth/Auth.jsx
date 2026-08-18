import { useState } from "react";
import { useLocation } from "react-router-dom";

function Auth() {
    const location = useLocation();

    const [isSignup, setIsSignup] = useState(
        location.pathname === "/signup"
    );

    const switchToSignup = () => {
        setIsSignup(true);
    };

    const switchToLogin = () => {
        setIsSignup(false);
    };

    return (
        <div className="min-h-[calc(100vh-73px)] bg-slate-100 flex items-center justify-center px-4 py-8">

            {/* ================= MAIN CARD ================= */}

            <div className="relative w-full max-w-4xl h-[560px] bg-white rounded-3xl shadow-2xl overflow-hidden">

                {/* =====================================================
            LOGIN FORM
        ====================================================== */}

                <div
                    className={`
            absolute top-0 left-0
            w-1/2 h-full
            flex items-center justify-center
            px-8
            transition-all duration-700 ease-in-out
            ${isSignup
                            ? "translate-x-full opacity-0 pointer-events-none"
                            : "translate-x-0 opacity-100"
                        }
          `}
                    style={{ zIndex: isSignup ? 1 : 10 }}
                >
                    <div className="w-full max-w-sm">

                        {/* Logo */}

                        <div className="flex justify-center mb-4">
                            <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                                L
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 text-center">
                            Welcome Back
                        </h2>

                        <p className="text-sm text-gray-500 text-center mt-2">
                            Sign in to continue to LearnSphere
                        </p>

                        {/* Login Form */}

                        <form className="mt-7 space-y-4">

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                                />
                            </div>

                            <div className="flex items-center justify-between text-xs">

                                <label className="flex items-center gap-2 text-gray-600">
                                    <input
                                        type="checkbox"
                                        className="accent-indigo-600"
                                    />

                                    Remember me
                                </label>

                                <button
                                    type="button"
                                    className="text-indigo-600 font-semibold hover:text-indigo-700"
                                >
                                    Forgot Password?
                                </button>

                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 active:scale-[0.98] transition"
                            >
                                Sign In
                            </button>

                        </form>

                        <p className="text-center text-sm text-gray-600 mt-6">

                            Don't have an account?

                            <button
                                type="button"
                                onClick={switchToSignup}
                                className="relative z-50 ml-1 text-indigo-600 font-semibold hover:text-indigo-700"
                            >
                                Create Account
                            </button>

                        </p>

                    </div>
                </div>


                {/* =====================================================
            SIGNUP FORM
        ====================================================== */}

                <div
                    className={`
            absolute top-0 left-0
            w-1/2 h-full
            flex items-center justify-center
            px-8
            transition-all duration-700 ease-in-out
            ${isSignup
                            ? "translate-x-full opacity-100"
                            : "translate-x-0 opacity-0 pointer-events-none"
                        }
          `}
                    style={{ zIndex: isSignup ? 10 : 1 }}
                >
                    <div className="w-full max-w-sm">

                        {/* Logo */}

                        <div className="flex justify-center mb-3">
                            <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                                L
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 text-center">
                            Create Account
                        </h2>

                        <p className="text-sm text-gray-500 text-center mt-2">
                            Start your journey with LearnSphere
                        </p>

                        {/* Signup Form */}

                        <form className="mt-5 space-y-3">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                            />

                            <select
                                defaultValue=""
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-600 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
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
                                placeholder="Create Password"
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                            />

                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                            />

                            <label className="flex items-start gap-2 text-xs text-gray-600 pt-1">

                                <input
                                    type="checkbox"
                                    className="mt-0.5 accent-indigo-600"
                                />

                                <span>
                                    I agree to the LearnSphere terms and conditions.
                                </span>

                            </label>

                            <button
                                type="submit"
                                className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 active:scale-[0.98] transition"
                            >
                                Create Account
                            </button>

                        </form>

                        <p className="text-center text-sm text-gray-600 mt-4">

                            Already have an account?

                            <button
                                type="button"
                                onClick={switchToLogin}
                                className="relative z-50 ml-1 text-indigo-600 font-semibold hover:text-indigo-700"
                            >
                                Sign In
                            </button>

                        </p>

                    </div>
                </div>


                {/* =====================================================
            SLIDING BLUE PANEL
        ====================================================== */}

                <div
                    className={`
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
          `}
                    style={{
                        transform: isSignup
                            ? "translateX(-100%)"
                            : "translateX(0)",
                        zIndex: 20,
                    }}
                >

                    {/* =================================================
              NEW USER PANEL
          ================================================== */}

                    <div
                        className={`
              absolute inset-0
              flex items-center justify-center
              text-center px-10
              transition-all duration-500
              ${isSignup
                                ? "opacity-0 scale-90 pointer-events-none"
                                : "opacity-100 scale-100"
                            }
            `}
                    >

                        <div className="max-w-xs">

                            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">

                                <span className="text-2xl font-bold">
                                    L
                                </span>

                            </div>

                            <h2 className="text-3xl font-bold mt-6">
                                New Here?
                            </h2>

                            <p className="text-indigo-100 text-sm leading-relaxed mt-4">
                                Create your account and join LearnSphere.
                                Manage courses, learning resources and your
                                progress in one place.
                            </p>

                            {/* IMPORTANT BUTTON */}

                            <button
                                type="button"
                                onClick={switchToSignup}
                                className="
                  relative
                  z-[100]
                  mt-7
                  px-8
                  py-3
                  rounded-xl
                  border-2
                  border-white
                  font-semibold
                  cursor-pointer
                  hover:bg-white
                  hover:text-indigo-600
                  active:scale-95
                  transition-all
                  duration-300
                "
                            >
                                Create Account
                            </button>

                        </div>

                    </div>


                    {/* =================================================
              WELCOME BACK PANEL
          ================================================== */}

                    <div
                        className={`
              absolute inset-0
              flex items-center justify-center
              text-center px-10
              transition-all duration-500
              ${isSignup
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-90 pointer-events-none"
                            }
            `}
                    >

                        <div className="max-w-xs">

                            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">

                                <span className="text-2xl font-bold">
                                    L
                                </span>

                            </div>

                            <h2 className="text-3xl font-bold mt-6">
                                Welcome Back
                            </h2>

                            <p className="text-indigo-100 text-sm leading-relaxed mt-4">
                                Already have an account?
                                Sign in and continue your learning journey
                                with LearnSphere.
                            </p>

                            {/* IMPORTANT BUTTON */}

                            <button
                                type="button"
                                onClick={switchToLogin}
                                className="
                  relative
                  z-[100]
                  mt-7
                  px-8
                  py-3
                  rounded-xl
                  border-2
                  border-white
                  font-semibold
                  cursor-pointer
                  hover:bg-white
                  hover:text-indigo-600
                  active:scale-95
                  transition-all
                  duration-300
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

                <div className="md:hidden w-full min-h-[560px]">

                    {!isSignup ? (

                        <div className="px-6 py-10">

                            <div className="flex justify-center">

                                <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                                    L
                                </div>

                            </div>

                            <h2 className="text-2xl font-bold text-center mt-4">
                                Welcome Back
                            </h2>

                            <p className="text-sm text-gray-500 text-center mt-2">
                                Sign in to LearnSphere
                            </p>

                            <div className="mt-6 space-y-4">

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none"
                                />

                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none"
                                />

                                <button className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold">
                                    Sign In
                                </button>

                            </div>

                            <p className="text-center text-sm text-gray-600 mt-6">

                                Don't have an account?

                                <button
                                    onClick={switchToSignup}
                                    className="ml-1 text-indigo-600 font-semibold"
                                >
                                    Create Account
                                </button>

                            </p>

                        </div>

                    ) : (

                        <div className="px-6 py-8">

                            <div className="flex justify-center">

                                <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                                    L
                                </div>

                            </div>

                            <h2 className="text-2xl font-bold text-center mt-4">
                                Create Account
                            </h2>

                            <p className="text-sm text-gray-500 text-center mt-2">
                                Join LearnSphere today
                            </p>

                            <div className="mt-5 space-y-3">

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none"
                                />

                                <select
                                    defaultValue=""
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white"
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
                                    placeholder="Create Password"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none"
                                />

                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none"
                                />

                                <button className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold">
                                    Create Account
                                </button>

                            </div>

                            <p className="text-center text-sm text-gray-600 mt-5">

                                Already have an account?

                                <button
                                    onClick={switchToLogin}
                                    className="ml-1 text-indigo-600 font-semibold"
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