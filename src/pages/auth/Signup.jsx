import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className="min-h-[calc(100vh-73px)] bg-slate-50 flex items-center justify-center px-6 py-12">

            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

                {/* Signup Form */}
                <div className="p-8 md:p-12">

                    <div className="max-w-md mx-auto">

                        <div className="text-center">

                            <div className="mx-auto w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                                L
                            </div>

                            <h2 className="mt-5 text-3xl font-bold text-gray-900">
                                Create Account
                            </h2>

                            <p className="mt-2 text-gray-500">
                                Create your LearnSphere account
                            </p>

                        </div>

                        <form className="mt-8 space-y-5">

                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                />
                            </div>

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

                            {/* Role */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Account Type
                                </label>

                                <select
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select account type
                                    </option>
                                    <option value="student">Student</option>
                                    <option value="teacher">Teacher</option>
                                </select>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Create a password"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Confirm Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                />
                            </div>

                            {/* Terms */}
                            <label className="flex items-start gap-2 text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    className="mt-1 accent-indigo-600"
                                />

                                <span>
                                    I agree to the LearnSphere terms and conditions.
                                </span>
                            </label>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
                            >
                                Create Account
                            </button>

                        </form>

                        {/* Login Link */}
                        <p className="mt-8 text-center text-sm text-gray-600">

                            Already have an account?{" "}

                            <Link
                                to="/login"
                                className="text-indigo-600 font-semibold hover:text-indigo-700"
                            >
                                Sign In
                            </Link>

                        </p>

                    </div>

                </div>

                {/* Right Side */}
                <div className="hidden md:flex bg-indigo-600 text-white p-12 flex-col justify-center">

                    <h1 className="text-4xl font-bold">
                        Start Learning Today
                    </h1>

                    <p className="mt-5 text-indigo-100 leading-relaxed">
                        Join LearnSphere and connect with your organization,
                        teachers, courses, lessons, and learning resources from
                        one centralized platform.
                    </p>

                    <div className="mt-10 space-y-4 text-indigo-100">

                        <div className="flex items-center gap-3">
                            <span className="text-white font-bold">✓</span>
                            Access your learning dashboard
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-white font-bold">✓</span>
                            Explore courses and lessons
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-white font-bold">✓</span>
                            Track your learning progress
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Signup;