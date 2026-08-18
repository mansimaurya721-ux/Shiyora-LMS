function Home() {
    return (
        <div className="bg-slate-50">

            {/* Hero Section */}
            <section className="min-h-[85vh] flex items-center">
                <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>
                        <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
                            Multi-Tenant SaaS-Based LMS
                        </span>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Learn.
                            <span className="text-indigo-600"> Teach.</span>
                            <br />
                            Grow Together.
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                            LearnSphere is a modern Learning Management System designed
                            for organizations, teachers, and students to create,
                            manage, and experience better digital learning.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="/signup"
                                className="bg-indigo-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                            >
                                Get Started
                            </a>

                            <a
                                href="/subscription"
                                className="border border-gray-300 bg-white text-gray-700 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                            >
                                View Plans
                            </a>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-gray-100">

                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Learning Dashboard
                                    </p>

                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Welcome Back 👋
                                    </h2>
                                </div>

                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-xl">
                                    🎓
                                </div>
                            </div>

                            {/* Progress */}
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-700">
                                        Course Progress
                                    </span>

                                    <span className="text-sm font-semibold text-indigo-600">
                                        75%
                                    </span>
                                </div>

                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div className="bg-indigo-600 h-3 rounded-full w-[75%]"></div>
                                </div>
                            </div>

                            {/* Course Cards */}
                            <div className="space-y-4">

                                <div className="p-4 bg-slate-50 rounded-xl flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        💻
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            Web Development
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            12 Lessons
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 bg-slate-50 rounded-xl flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        📊
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            Data Analytics
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            8 Lessons
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Features */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-2xl mx-auto">
                        <p className="text-indigo-600 font-semibold">
                            WHY LEARNSPHERE?
                        </p>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
                            Everything You Need for Digital Learning
                        </h2>

                        <p className="mt-4 text-gray-600">
                            A simple platform for organizations, teachers and students.
                        </p>
                    </div>

                    <div className="mt-12 grid md:grid-cols-3 gap-6">

                        <div className="p-7 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                            <div className="text-3xl mb-4">🏢</div>

                            <h3 className="text-xl font-bold text-gray-900">
                                Organization Management
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Manage your organization, teachers, students and courses
                                from one centralized platform.
                            </p>
                        </div>

                        <div className="p-7 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                            <div className="text-3xl mb-4">📚</div>

                            <h3 className="text-xl font-bold text-gray-900">
                                Course Management
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Create courses, lessons, video lectures, PDF notes and
                                quizzes with ease.
                            </p>
                        </div>

                        <div className="p-7 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                            <div className="text-3xl mb-4">📈</div>

                            <h3 className="text-xl font-bold text-gray-900">
                                Student Progress
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Track learning progress, course completion and quiz
                                performance.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-indigo-600">
                <div className="max-w-4xl mx-auto px-6 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Ready to Start Learning?
                    </h2>

                    <p className="mt-4 text-indigo-100 text-lg">
                        Create your LearnSphere account and start your learning journey.
                    </p>

                    <a
                        href="/signup"
                        className="inline-block mt-8 bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                        Create Your Account
                    </a>

                </div>
            </section>

        </div>
    );
}

export default Home;