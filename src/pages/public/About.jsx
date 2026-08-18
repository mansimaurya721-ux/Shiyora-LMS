function About() {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero Section */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6 text-center">

                    <p className="text-indigo-600 font-semibold uppercase tracking-wider">
                        About LearnSphere
                    </p>

                    <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
                        Empowering Digital Learning
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        LearnSphere is a multi-tenant SaaS-based Learning Management
                        System designed to bring organizations, teachers, and students
                        together on one powerful learning platform.
                    </p>

                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

                    {/* Mission */}
                    <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                        <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center text-2xl">
                            🎯
                        </div>

                        <h2 className="mt-6 text-2xl font-bold text-gray-900">
                            Our Mission
                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Our mission is to simplify digital education by providing
                            organizations with an easy-to-use platform for managing
                            courses, teachers, students, lessons, quizzes, and learning
                            progress.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                        <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
                            🌎
                        </div>

                        <h2 className="mt-6 text-2xl font-bold text-gray-900">
                            Our Vision
                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Our vision is to build a connected digital learning ecosystem
                            where organizations can deliver quality education and students
                            can learn, grow, and track their progress from anywhere.
                        </p>
                    </div>

                </div>
            </section>

            {/* Why LearnSphere */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center">
                        <p className="text-indigo-600 font-semibold uppercase">
                            Why LearnSphere?
                        </p>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
                            Built for Modern Education
                        </h2>

                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            LearnSphere brings essential learning management features
                            together in one centralized platform.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="bg-white p-7 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                            <div className="text-3xl">🏢</div>

                            <h3 className="mt-5 text-xl font-bold text-gray-900">
                                Multi-Tenant Platform
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Multiple organizations can use LearnSphere while keeping
                                their users, courses, and learning data logically separated.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-7 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                            <div className="text-3xl">👨‍🏫</div>

                            <h3 className="mt-5 text-xl font-bold text-gray-900">
                                Teacher Management
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Teachers can create courses, manage lessons, upload learning
                                materials, and create quizzes.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-7 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                            <div className="text-3xl">🎓</div>

                            <h3 className="mt-5 text-xl font-bold text-gray-900">
                                Student Learning
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Students can enroll in courses, access learning materials,
                                take quizzes, and monitor their progress.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-7 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                            <div className="text-3xl">📚</div>

                            <h3 className="mt-5 text-xl font-bold text-gray-900">
                                Course Management
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Manage courses, lessons, video lectures, PDF notes, and
                                quizzes from one place.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white p-7 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                            <div className="text-3xl">📈</div>

                            <h3 className="mt-5 text-xl font-bold text-gray-900">
                                Progress Tracking
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Track student course completion and quiz performance through
                                a simple learning dashboard.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-white p-7 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                            <div className="text-3xl">🔐</div>

                            <h3 className="mt-5 text-xl font-bold text-gray-900">
                                Role-Based Access
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Different roles get access to the features and dashboards
                                relevant to their responsibilities.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-indigo-600 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Start Your Learning Journey
                    </h2>

                    <p className="mt-4 text-indigo-100 text-lg">
                        Join LearnSphere and experience a smarter way to learn and teach.
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

export default About;