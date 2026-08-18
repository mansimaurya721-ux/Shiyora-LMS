const plans = [
    {
        name: "Free",
        price: "₹0",
        description:
            "Perfect for individuals and small organizations getting started with digital learning.",
        features: [
            "Up to 25 Students",
            "2 Teachers",
            "3 Courses",
            "Lesson Management",
            "Video Lectures",
            "PDF Notes",
            "Basic Quizzes",
            "Student Progress Tracking",
        ],
    },

    {
        name: "Professional",
        price: "₹999",
        description:
            "Designed for growing organizations that need more learning capacity.",
        popular: true,
        features: [
            "Up to 250 Students",
            "20 Teachers",
            "Unlimited Courses",
            "Lesson Management",
            "Video Lectures",
            "PDF Notes",
            "Quizzes",
            "Progress Tracking",
            "Organization Dashboard",
        ],
    },

    {
        name: "Enterprise",
        price: "₹2,499",
        description:
            "For larger organizations that need powerful learning management capabilities.",
        features: [
            "Unlimited Students",
            "Unlimited Teachers",
            "Unlimited Courses",
            "Advanced Organization Management",
            "Video & PDF Learning",
            "Advanced Quizzes",
            "Progress Tracking",
            "Organization Reports",
            "Priority Support",
        ],
    },
];

function Subscription() {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* ================= HEADER ================= */}
            <section className="pt-20 pb-14 px-6 text-center">

                <p className="text-indigo-600 font-semibold uppercase tracking-wider text-sm">
                    Subscription Plans
                </p>

                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
                    Plans That Grow With Your Organization
                </h1>

                <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
                    Choose a plan that fits your learning requirements and
                    upgrade whenever your organization grows.
                </p>

            </section>


            {/* ================= PRICING CARDS ================= */}
            <section className="pb-20 px-6">

                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">

                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${plan.popular
                                ? "border-indigo-600 shadow-xl"
                                : "border-gray-200 shadow-sm hover:shadow-lg"
                                }`}
                        >

                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-indigo-600 text-white px-5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap">
                                        MOST POPULAR
                                    </span>
                                </div>
                            )}


                            {/* Plan Name */}
                            <h2 className="text-2xl font-bold text-gray-900">
                                {plan.name}
                            </h2>


                            {/* Description */}
                            <p className="mt-3 text-gray-600 leading-relaxed min-h-[80px]">
                                {plan.description}
                            </p>


                            {/* Price */}
                            <div className="mt-6 flex items-end gap-2">

                                <span className="text-4xl font-bold text-gray-900">
                                    {plan.price}
                                </span>

                                <span className="text-gray-500 mb-1">
                                    / month
                                </span>

                            </div>


                            {/* Button */}
                            <button
                                type="button"
                                className={`w-full mt-7 py-3 rounded-xl font-semibold transition ${plan.popular
                                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                    : "border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                                    }`}
                            >
                                Choose {plan.name}
                            </button>


                            {/* Divider */}
                            <div className="border-t border-gray-200 my-8"></div>


                            {/* Features */}
                            <h3 className="font-semibold text-gray-900">
                                Plan Includes
                            </h3>

                            <ul className="mt-5 space-y-4">

                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-3 text-gray-600"
                                    >

                                        <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-green-50 text-green-600 border border-green-200 flex items-center justify-center text-xs font-bold">
                                            ✓
                                        </span>

                                        <span>{feature}</span>

                                    </li>
                                ))}

                            </ul>

                        </div>
                    ))}

                </div>

            </section>


            {/* ================= WHY CHOOSE LEARNSPHERE ================= */}
            <section className="pb-20 px-6">

                <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 md:p-12">

                    <div className="text-center">

                        <p className="text-indigo-600 font-semibold uppercase tracking-wider text-sm">
                            LearnSphere
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-gray-900">
                            A Flexible Learning Platform
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
                            Start with the Free plan and upgrade as your
                            organization grows. LearnSphere provides the
                            essential tools needed to manage modern digital
                            learning.
                        </p>

                    </div>


                    {/* Plan Summary */}
                    <div className="mt-10 grid sm:grid-cols-3 gap-6">

                        <div className="p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition">
                            <div className="w-10 h-1 bg-gray-400 mx-auto rounded-full"></div>

                            <h3 className="mt-5 text-lg font-bold text-gray-900">
                                Free
                            </h3>

                            <p className="mt-2 text-sm text-gray-600">
                                Start your digital learning journey.
                            </p>
                        </div>


                        <div className="p-6 rounded-xl border border-indigo-200 bg-indigo-50 text-center hover:shadow-md transition">
                            <div className="w-10 h-1 bg-indigo-600 mx-auto rounded-full"></div>

                            <h3 className="mt-5 text-lg font-bold text-gray-900">
                                Professional
                            </h3>

                            <p className="mt-2 text-sm text-gray-600">
                                Designed for growing organizations.
                            </p>
                        </div>


                        <div className="p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition">
                            <div className="w-10 h-1 bg-gray-700 mx-auto rounded-full"></div>

                            <h3 className="mt-5 text-lg font-bold text-gray-900">
                                Enterprise
                            </h3>

                            <p className="mt-2 text-sm text-gray-600">
                                Built for larger learning communities.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="bg-indigo-600 py-16 px-6">

                <div className="max-w-4xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Ready to Get Started?
                    </h2>

                    <p className="mt-4 text-indigo-100 text-lg leading-relaxed">
                        Create your LearnSphere account and start building
                        a better digital learning experience.
                    </p>

                    <a
                        href="/signup"
                        className="inline-block mt-8 bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
                    >
                        Get Started
                    </a>

                </div>

            </section>

        </div>
    );
}

export default Subscription;