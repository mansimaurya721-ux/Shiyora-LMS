import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl">
                        L
                    </div>

                    <span className="text-2xl font-bold text-gray-900">
                        Learn<span className="text-indigo-600">Sphere</span>
                    </span>
                </Link>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8">

                    <Link
                        to="/"
                        className="text-gray-700 hover:text-indigo-600 transition"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="text-gray-700 hover:text-indigo-600 transition"
                    >
                        About
                    </Link>

                    <Link
                        to="/contact"
                        className="text-gray-700 hover:text-indigo-600 transition"
                    >
                        Contact
                    </Link>

                    <Link
                        to="/login"
                        className="text-gray-700 hover:text-indigo-600 transition"
                    >
                        Login
                    </Link>

                    <Link
                        to="/signup"
                        className="text-gray-700 hover:text-indigo-600 transition"
                    >
                        Create
                    </Link>

                    <Link
                        to="/subscription"
                        className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Subscription
                    </Link>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;
