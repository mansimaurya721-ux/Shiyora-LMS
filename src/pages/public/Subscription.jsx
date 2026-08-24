import { Link } from "react-router-dom";

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
        <div
            className="
                min-h-screen
                bg-[#f8f9fc]
                text-slate-900

                dark:bg-[#080b14]
                dark:text-white

                transition-colors duration-500
                overflow-hidden
            "
        >

            {/* =====================================================
                BACKGROUND GLOW
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    fixed
                    -top-40
                    -right-40
                    w-[500px]
                    h-[500px]
                    rounded-full
                    bg-violet-300/20
                    dark:bg-violet-600/10
                    blur-[130px]
                "
            ></div>

            <div
                className="
                    pointer-events-none
                    fixed
                    bottom-0
                    -left-40
                    w-[450px]
                    h-[450px]
                    rounded-full
                    bg-cyan-300/20
                    dark:bg-cyan-500/10
                    blur-[130px]
                "
            ></div>


            {/* =====================================================
                HEADER
            ====================================================== */}

            <section className="relative z-10 pt-20 pb-14 px-6 text-center">

                <p
                    className="
                        text-sm
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-violet-600
                        dark:text-cyan-400
                    "
                >
                    Shiyora Plans
                </p>


                <h1
                    className="
                        mt-4
                        text-4xl
                        md:text-5xl
                        lg:text-6xl
                        font-black
                        tracking-tight
                        text-slate-900
                        dark:text-white
                    "
                >
                    Plans That Grow
                    <br />

                    <span
                        className="
                            bg-gradient-to-r
                            from-violet-600
                            via-purple-500
                            to-cyan-400
                            bg-clip-text
                            text-transparent
                        "
                    >
                        With Your Organization
                    </span>
                </h1>


                <p
                    className="
                        mt-5
                        max-w-2xl
                        mx-auto
                        text-lg
                        leading-relaxed
                        text-slate-600
                        dark:text-slate-400
                    "
                >
                    Choose a plan that fits your learning requirements
                    and upgrade whenever your organization grows.
                </p>

            </section>


            {/* =====================================================
                PRICING CARDS
            ====================================================== */}

            <section className="relative z-10 pb-24 px-6">

                <div
                    className="
                        max-w-7xl
                        mx-auto
                        grid
                        md:grid-cols-3
                        gap-7
                        items-stretch
                    "
                >

                    {plans.map((plan) => (

                        <div
                            key={plan.name}
                            className={`
                                relative
                                rounded-[1.5rem]
                                p-[1px]

                                transition-all
                                duration-300

                                hover:-translate-y-2

                                ${plan.popular
                                    ? `
                                            bg-gradient-to-br
                                            from-violet-500
                                            via-purple-500
                                            to-cyan-400

                                            shadow-2xl
                                            shadow-violet-500/20
                                        `
                                    : `
                                            bg-slate-200
                                            dark:bg-white/10
                                        `
                                }
                            `}
                        >

                            {/* CARD INNER */}

                            <div
                                className="
                                    h-full
                                    rounded-[1.45rem]
                                    p-7 md:p-8

                                    bg-white
                                    dark:bg-[#0d111c]

                                    transition-colors
                                    duration-300
                                "
                            >

                                {/* POPULAR BADGE */}

                                {plan.popular && (
                                    <div
                                        className="
                                            absolute
                                            -top-3
                                            left-1/2
                                            -translate-x-1/2
                                        "
                                    >

                                        <span
                                            className="
                                                px-5
                                                py-1.5
                                                rounded-full
                                                text-[11px]
                                                font-bold
                                                tracking-wider
                                                text-white

                                                bg-gradient-to-r
                                                from-violet-600
                                                to-cyan-500

                                                shadow-lg
                                                shadow-violet-500/30

                                                whitespace-nowrap
                                            "
                                        >
                                            MOST POPULAR
                                        </span>

                                    </div>
                                )}


                                {/* PLAN NAME */}

                                <h2
                                    className="
                                        text-2xl
                                        font-black
                                        text-slate-900
                                        dark:text-white
                                    "
                                >
                                    {plan.name}
                                </h2>


                                {/* DESCRIPTION */}

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        leading-relaxed
                                        min-h-[80px]

                                        text-slate-600
                                        dark:text-slate-400
                                    "
                                >
                                    {plan.description}
                                </p>


                                {/* PRICE */}

                                <div className="mt-6 flex items-end gap-2">

                                    <span
                                        className="
                                            text-4xl
                                            font-black
                                            text-slate-900
                                            dark:text-white
                                        "
                                    >
                                        {plan.price}
                                    </span>

                                    <span
                                        className="
                                            mb-1
                                            text-sm
                                            text-slate-500
                                            dark:text-slate-500
                                        "
                                    >
                                        / month
                                    </span>

                                </div>


                                {/* BUTTON */}

                                <button
                                    type="button"
                                    className={`
                                        w-full
                                        mt-7
                                        py-3
                                        rounded-xl
                                        font-semibold
                                        transition-all
                                        duration-300

                                        hover:-translate-y-0.5

                                        ${plan.popular
                                            ? `
                                                    text-white
                                                    bg-gradient-to-r
                                                    from-violet-600
                                                    to-cyan-500

                                                    hover:shadow-lg
                                                    hover:shadow-violet-500/20
                                                `
                                            : `
                                                    border
                                                    border-violet-300
                                                    dark:border-white/10

                                                    text-violet-600
                                                    dark:text-cyan-400

                                                    hover:bg-violet-50
                                                    dark:hover:bg-white/5

                                                    hover:border-violet-400
                                                    dark:hover:border-cyan-400/30
                                                `
                                        }
                                    `}
                                >
                                    Choose {plan.name}
                                </button>


                                {/* DIVIDER */}

                                <div
                                    className="
                                        border-t
                                        border-slate-200
                                        dark:border-white/10
                                        my-8
                                    "
                                ></div>


                                {/* FEATURES TITLE */}

                                <h3
                                    className="
                                        font-bold
                                        text-slate-900
                                        dark:text-white
                                    "
                                >
                                    Plan Includes
                                </h3>


                                {/* FEATURES */}

                                <ul className="mt-5 space-y-4">

                                    {plan.features.map((feature) => (

                                        <li
                                            key={feature}
                                            className="
                                                flex
                                                items-start
                                                gap-3
                                                text-sm
                                                text-slate-600
                                                dark:text-slate-400
                                            "
                                        >

                                            <span
                                                className="
                                                    mt-0.5
                                                    w-5
                                                    h-5
                                                    shrink-0
                                                    rounded-full

                                                    bg-violet-50
                                                    dark:bg-violet-500/10

                                                    text-violet-600
                                                    dark:text-cyan-400

                                                    border
                                                    border-violet-200
                                                    dark:border-violet-500/20

                                                    flex
                                                    items-center
                                                    justify-center

                                                    text-xs
                                                    font-bold
                                                "
                                            >
                                                ✓
                                            </span>

                                            <span>
                                                {feature}
                                            </span>

                                        </li>

                                    ))}

                                </ul>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {/* =====================================================
                WHY SHIYORA
            ====================================================== */}

            <section
                className="
                    relative
                    z-10
                    pb-24
                    px-6
                "
            >

                <div
                    className="
                        max-w-5xl
                        mx-auto
                        rounded-[1.5rem]
                        p-[1px]

                        bg-slate-200
                        dark:bg-white/10
                    "
                >

                    <div
                        className="
                            rounded-[1.45rem]
                            p-8
                            md:p-12

                            bg-white
                            dark:bg-[#0d111c]
                        "
                    >

                        <div className="text-center">

                            <p
                                className="
                                    text-sm
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-violet-600
                                    dark:text-cyan-400
                                "
                            >
                                Why Shiyora
                            </p>


                            <h2
                                className="
                                    mt-3
                                    text-3xl
                                    font-black
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                A Flexible Learning Platform
                            </h2>


                            <p
                                className="
                                    mt-4
                                    max-w-2xl
                                    mx-auto
                                    leading-relaxed
                                    text-slate-600
                                    dark:text-slate-400
                                "
                            >
                                Start with the Free plan and upgrade as your
                                organization grows. Shiyora provides the
                                essential tools needed to manage modern
                                digital learning.
                            </p>

                        </div>


                        {/* PLAN SUMMARY */}

                        <div
                            className="
                                mt-10
                                grid
                                sm:grid-cols-3
                                gap-5
                            "
                        >

                            {/* FREE */}

                            <div
                                className="
                                    p-6
                                    rounded-xl

                                    border
                                    border-slate-200
                                    dark:border-white/10

                                    bg-slate-50
                                    dark:bg-white/[0.02]

                                    text-center

                                    hover:-translate-y-1
                                    hover:border-violet-300
                                    dark:hover:border-violet-500/30

                                    transition-all
                                "
                            >

                                <div
                                    className="
                                        w-10
                                        h-1
                                        mx-auto
                                        rounded-full
                                        bg-slate-400
                                    "
                                ></div>

                                <h3
                                    className="
                                        mt-5
                                        text-lg
                                        font-bold
                                        text-slate-900
                                        dark:text-white
                                    "
                                >
                                    Free
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        text-slate-600
                                        dark:text-slate-400
                                    "
                                >
                                    Start your digital learning journey.
                                </p>

                            </div>


                            {/* PROFESSIONAL */}

                            <div
                                className="
                                    p-6
                                    rounded-xl

                                    border
                                    border-violet-200
                                    dark:border-violet-500/30

                                    bg-violet-50
                                    dark:bg-violet-500/[0.06]

                                    text-center

                                    hover:-translate-y-1
                                    hover:shadow-lg
                                    hover:shadow-violet-500/10

                                    transition-all
                                "
                            >

                                <div
                                    className="
                                        w-10
                                        h-1
                                        mx-auto
                                        rounded-full

                                        bg-gradient-to-r
                                        from-violet-600
                                        to-cyan-400
                                    "
                                ></div>

                                <h3
                                    className="
                                        mt-5
                                        text-lg
                                        font-bold
                                        text-slate-900
                                        dark:text-white
                                    "
                                >
                                    Professional
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        text-slate-600
                                        dark:text-slate-400
                                    "
                                >
                                    Designed for growing organizations.
                                </p>

                            </div>


                            {/* ENTERPRISE */}

                            <div
                                className="
                                    p-6
                                    rounded-xl

                                    border
                                    border-slate-200
                                    dark:border-white/10

                                    bg-slate-50
                                    dark:bg-white/[0.02]

                                    text-center

                                    hover:-translate-y-1
                                    hover:border-cyan-300
                                    dark:hover:border-cyan-500/30

                                    transition-all
                                "
                            >

                                <div
                                    className="
                                        w-10
                                        h-1
                                        mx-auto
                                        rounded-full
                                        bg-slate-700
                                        dark:bg-slate-500
                                    "
                                ></div>

                                <h3
                                    className="
                                        mt-5
                                        text-lg
                                        font-bold
                                        text-slate-900
                                        dark:text-white
                                    "
                                >
                                    Enterprise
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        text-slate-600
                                        dark:text-slate-400
                                    "
                                >
                                    Built for larger learning communities.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ====================================================== */}

            <section className="relative z-10 pb-24 px-6">

                <div className="max-w-5xl mx-auto">

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[2rem]

                            bg-gradient-to-br
                            from-violet-700
                            via-purple-600
                            to-cyan-500

                            px-8
                            py-16
                            md:px-16

                            text-center

                            shadow-2xl
                            shadow-violet-500/20
                        "
                    >

                        {/* GLOW */}

                        <div
                            className="
                                absolute
                                -top-32
                                -right-32
                                w-80
                                h-80
                                rounded-full
                                bg-white/10
                                blur-3xl
                            "
                        ></div>

                        <div
                            className="
                                absolute
                                -bottom-32
                                -left-32
                                w-80
                                h-80
                                rounded-full
                                bg-cyan-300/10
                                blur-3xl
                            "
                        ></div>


                        <div className="relative z-10">

                            <p
                                className="
                                    text-cyan-100
                                    text-sm
                                    font-bold
                                    tracking-[0.2em]
                                    uppercase
                                "
                            >
                                Start Your Journey
                            </p>


                            <h2
                                className="
                                    mt-4
                                    text-3xl
                                    md:text-4xl
                                    font-black
                                    text-white
                                "
                            >
                                Ready to Get Started?
                            </h2>


                            <p
                                className="
                                    mt-5
                                    text-violet-100
                                    text-lg
                                    max-w-2xl
                                    mx-auto
                                    leading-relaxed
                                "
                            >
                                Create your Shiyora account and start
                                building a better digital learning experience.
                            </p>


                            <Link
                                to="/signup"
                                className="
                                    inline-flex
                                    mt-8
                                    px-8
                                    py-3.5
                                    rounded-xl

                                    bg-white
                                    text-violet-700

                                    font-bold

                                    hover:bg-slate-100
                                    hover:-translate-y-1

                                    transition-all
                                "
                            >
                                Get Started
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Subscription;