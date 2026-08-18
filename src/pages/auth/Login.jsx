import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="min-h-[calc(100vh-73px)] bg-slate-50 flex items-center justify-center px-6 py-12">

            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

                {/* Left Side */}
                <div className="hidden md:flex bg-indigo-600 text-white p-12 flex-col justify-center">

                    <h1 className="text-4xl font-bold">
                        Welcome Back
                    </h1>

                    <p className="mt-5 text-indigo-100 leading-relaxed">
                        Continue your learning journey with LearnSphere.
                        Access your courses, lessons, quizzes, and learning progress
                        from one place.
                    </p>

                    <div className="mt-10 space-y-4 text-indigo-100">

                        <div className="flex items-center gap-3">
                            <span className="text-white font-bold">✓</span>
                            Manage your courses
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-white font-bold">✓</span>
                            Track your learning progress
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-white font-bold">✓</span>
                            Learn from anywhere
                        </div>

                    </div>

                </div>


                {/* Login Form */}
                <div className="p-8 md:p-12">

                    <div className="max-w-md mx-auto">

                        <div className="text-center">

                            <div className="mx-auto w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                                L
                            </div>

                            <h2 className="mt-5 text-3xl font-bold text-gray-900">
                                Sign In
                            </h2>

                            <p className="mt-2 text-gray-500">
                                Sign in to your LearnSphere account
                            </p>

                        </div>


                        <form className="mt-8 space-y-5">

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                />
                            </div>


                            {/* Password */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                />
                            </div>


                            {/* Remember / Forgot */}
                            <div className="flex items-center justify-between text-sm">

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
                                    Forgot password?
                                </button>

                            </div>


                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
                            >
                                Sign In
                            </button>

                        </form>


                        {/* Signup Link */}
                        <p className="mt-8 text-center text-sm text-gray-600">

                            Don't have an account?{" "}

                            <Link
                                to="/signup"
                                className="text-indigo-600 font-semibold hover:text-indigo-700"
                            >
                                Create Account
                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;