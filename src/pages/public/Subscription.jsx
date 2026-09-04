import { Link } from "react-router-dom";

/**
 * Shiyora Subscription
 * Design language: "The Study Desk"
 * Same visual language as the Shiyora Home page.
 */

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";

const plans = [
    {
        name: "Free",
        price: "₹0",
        description:
            "Perfect for individuals and small organizations getting started with digital learning.",
        accent: "#7C9A82",
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
        accent: "#F2B84B",
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
        accent: "#D6402C",
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

function CheckIcon() {
    return (
        <span
            className="
                mt-0.5
                flex
                h-5
                w-5
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#7C9A82]/15
                text-[#527B59]
                text-xs
                font-bold
            "
        >
            ✓
        </span>
    );
}

function Subscription() {
    return (
        <main
            className="
                min-h-screen
                overflow-hidden
                bg-[#161F19]
                font-['Inter']
                text-[#F3EEDD]
            "
        >
            <style>{FONT_IMPORTS}</style>

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            {/* Desk lamp glow */}
            <div
                className="
                    pointer-events-none
                    fixed
                    -left-40
                    -top-40
                    h-[520px]
                    w-[520px]
                    rounded-full
                    bg-[#F2B84B]/[0.10]
                    blur-[140px]
                "
            />

            <div
                className="
                    pointer-events-none
                    fixed
                    -right-40
                    top-40
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#7C9A82]/[0.10]
                    blur-[150px]
                "
            />

            {/* Chalk dust */}
            <div
                className="
                    pointer-events-none
                    fixed
                    inset-0
                    opacity-[0.08]
                "
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(243,238,221,0.6) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* =====================================================
                HEADER
            ====================================================== */}

            <section
                className="
                    relative
                    z-10
                    px-6
                    pb-16
                    pt-24
                    text-center
                "
            >
                <div className="mx-auto max-w-3xl">

                    <p
                        className="
                            font-['JetBrains_Mono']
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-[#F2B84B]
                        "
                    >
                        Shiyora Plans
                    </p>

                    <h1
                        className="
                            mt-4
                            font-['Space_Grotesk']
                            text-4xl
                            font-semibold
                            leading-tight
                            tracking-tight
                            text-[#F3EEDD]
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Plans that grow
                        <br />

                        <span className="relative inline-block">
                            with your organization.

                            {/* Red underline */}
                            <svg
                                viewBox="0 0 420 18"
                                className="
                                    absolute
                                    -bottom-2
                                    left-0
                                    h-3
                                    w-full
                                    text-[#D6402C]
                                "
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3 12c80-10 250-10 414 1"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h1>

                    <p
                        className="
                            mx-auto
                            mt-8
                            max-w-2xl
                            text-base
                            leading-relaxed
                            text-[#F3EEDD]/55
                            md:text-lg
                        "
                    >
                        Choose a plan that fits your learning requirements
                        and upgrade whenever your organization grows.
                    </p>

                </div>
            </section>

            {/* =====================================================
                PRICING CARDS
            ====================================================== */}

            <section
                className="
                    relative
                    z-10
                    px-6
                    pb-24
                "
            >
                <div
                    className="
                        mx-auto
                        grid
                        max-w-7xl
                        items-stretch
                        gap-6
                        md:grid-cols-3
                    "
                >

                    {plans.map((plan, index) => (

                        <div
                            key={plan.name}
                            className={`
                                relative
                                transition-all
                                duration-300
                                motion-safe:hover:-translate-y-2

                                ${index === 0
                                    ? "rotate-[-0.5deg]"
                                    : index === 1
                                        ? "rotate-0"
                                        : "rotate-[0.5deg]"
                                }
                            `}
                        >

                            {/* Popular tape */}
                            {plan.popular && (
                                <div
                                    className="
                                        absolute
                                        -top-3
                                        left-1/2
                                        z-20
                                        -translate-x-1/2
                                    "
                                >
                                    <span
                                        className="
                                            inline-block
                                            bg-[#F2B84B]/80
                                            px-6
                                            py-1.5
                                            font-['JetBrains_Mono']
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-widest
                                            text-[#161F19]
                                            shadow-[0_3px_8px_rgba(0,0,0,0.25)]
                                        "
                                        style={{
                                            clipPath:
                                                "polygon(3% 0, 97% 0, 100% 100%, 0% 100%)",
                                        }}
                                    >
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Card */}
                            <div
                                className="
                                    h-full
                                    rounded-2xl
                                    border
                                    border-[#1C2A22]/10
                                    bg-[#F3EEDD]
                                    p-7
                                    text-[#1C2A22]
                                    shadow-[0_25px_60px_rgba(0,0,0,0.30)]
                                "
                            >

                                {/* Card heading */}

                                <div className="flex items-start justify-between">

                                    <div>
                                        <p
                                            className="
                                                font-['JetBrains_Mono']
                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-widest
                                                text-[#1C2A22]/40
                                            "
                                        >
                                            Plan {String(index + 1).padStart(2, "0")}
                                        </p>

                                        <h2
                                            className="
                                                mt-2
                                                font-['Space_Grotesk']
                                                text-2xl
                                                font-semibold
                                            "
                                        >
                                            {plan.name}
                                        </h2>
                                    </div>

                                    <div
                                        className="h-3 w-3 rounded-full"
                                        style={{
                                            backgroundColor: plan.accent,
                                            boxShadow: `0 0 12px ${plan.accent}55`,
                                        }}
                                    />

                                </div>

                                {/* Description */}

                                <p
                                    className="
                                        mt-4
                                        min-h-[80px]
                                        text-sm
                                        leading-relaxed
                                        text-[#1C2A22]/55
                                    "
                                >
                                    {plan.description}
                                </p>

                                {/* Price */}

                                <div className="mt-6 flex items-end gap-2">

                                    <span
                                        className="
                                            font-['JetBrains_Mono']
                                            text-4xl
                                            font-semibold
                                        "
                                    >
                                        {plan.price}
                                    </span>

                                    <span
                                        className="
                                            mb-1
                                            text-xs
                                            text-[#1C2A22]/45
                                        "
                                    >
                                        / month
                                    </span>

                                </div>

                                {/* Button */}

                                <Link
                                    to="/signup"
                                    className={`
                                        mt-7
                                        flex
                                        w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-lg
                                        px-5
                                        py-3.5
                                        font-semibold
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5

                                        ${plan.popular
                                            ? `
                                                    bg-[#F2B84B]
                                                    text-[#161F19]
                                                    shadow-[0_8px_25px_rgba(242,184,75,0.20)]
                                                    hover:bg-[#f7c968]
                                                `
                                            : `
                                                    border
                                                    border-[#1C2A22]/15
                                                    bg-[#1C2A22]/5
                                                    text-[#1C2A22]
                                                    hover:border-[#F2B84B]/50
                                                    hover:bg-[#F2B84B]/10
                                                    hover:text-[#1C2A22]
                                                `
                                        }
                                    `}
                                >
                                    Choose {plan.name}
                                    <span>→</span>
                                </Link>

                                {/* Divider */}

                                <div
                                    className="
                                        my-8
                                        border-t
                                        border-[#1C2A22]/10
                                    "
                                />

                                {/* Includes */}

                                <div className="flex items-center justify-between">

                                    <h3
                                        className="
                                            font-['Space_Grotesk']
                                            text-base
                                            font-semibold
                                        "
                                    >
                                        Plan Includes
                                    </h3>

                                    <span
                                        className="
                                            font-['JetBrains_Mono']
                                            text-[10px]
                                            uppercase
                                            tracking-wider
                                            text-[#1C2A22]/35
                                        "
                                    >
                                        {plan.features.length} features
                                    </span>

                                </div>

                                <ul className="mt-5 space-y-4">

                                    {plan.features.map((feature) => (

                                        <li
                                            key={feature}
                                            className="
                                                flex
                                                items-start
                                                gap-3
                                                text-sm
                                                text-[#1C2A22]/65
                                            "
                                        >

                                            <CheckIcon />

                                            <span>{feature}</span>

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
                    border-t
                    border-[#F3EEDD]/10
                    bg-[#141C17]
                    px-6
                    py-24
                "
            >

                <div className="mx-auto max-w-5xl">

                    <div className="text-center">

                        <p
                            className="
                                font-['JetBrains_Mono']
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-[#F2B84B]
                            "
                        >
                            Why Shiyora
                        </p>

                        <h2
                            className="
                                mt-3
                                font-['Space_Grotesk']
                                text-3xl
                                font-semibold
                                tracking-tight
                                md:text-4xl
                            "
                        >
                            A flexible learning platform.
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-4
                                max-w-2xl
                                leading-relaxed
                                text-[#F3EEDD]/55
                            "
                        >
                            Start with the Free plan and upgrade as your
                            organization grows. Shiyora provides the essential
                            tools needed to manage modern digital learning.
                        </p>

                    </div>

                    {/* Summary Cards */}

                    <div
                        className="
                            mt-14
                            grid
                            gap-5
                            sm:grid-cols-3
                        "
                    >

                        {/* Free */}

                        <div
                            className="
                                rounded-xl
                                border
                                border-[#F3EEDD]/10
                                bg-[#1B241E]
                                p-6
                                text-center
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-[#F3EEDD]/20
                            "
                        >

                            <div
                                className="
                                    mx-auto
                                    h-1
                                    w-10
                                    rounded-full
                                    bg-[#7C9A82]
                                "
                            />

                            <h3
                                className="
                                    mt-5
                                    font-['Space_Grotesk']
                                    text-lg
                                    font-semibold
                                "
                            >
                                Free
                            </h3>

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    leading-relaxed
                                    text-[#F3EEDD]/50
                                "
                            >
                                Start your digital learning journey.
                            </p>

                        </div>

                        {/* Professional */}

                        <div
                            className="
                                rounded-xl
                                border
                                border-[#F2B84B]/30
                                bg-[#1B241E]
                                p-6
                                text-center
                                shadow-[0_15px_40px_rgba(242,184,75,0.06)]
                                transition-all
                                duration-300
                                hover:-translate-y-1
                            "
                        >

                            <div
                                className="
                                    mx-auto
                                    h-1
                                    w-10
                                    rounded-full
                                    bg-[#F2B84B]
                                "
                            />

                            <h3
                                className="
                                    mt-5
                                    font-['Space_Grotesk']
                                    text-lg
                                    font-semibold
                                "
                            >
                                Professional
                            </h3>

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    leading-relaxed
                                    text-[#F3EEDD]/50
                                "
                            >
                                Designed for growing organizations.
                            </p>

                        </div>

                        {/* Enterprise */}

                        <div
                            className="
                                rounded-xl
                                border
                                border-[#D6402C]/20
                                bg-[#1B241E]
                                p-6
                                text-center
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-[#D6402C]/40
                            "
                        >

                            <div
                                className="
                                    mx-auto
                                    h-1
                                    w-10
                                    rounded-full
                                    bg-[#D6402C]
                                "
                            />

                            <h3
                                className="
                                    mt-5
                                    font-['Space_Grotesk']
                                    text-lg
                                    font-semibold
                                "
                            >
                                Enterprise
                            </h3>

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    leading-relaxed
                                    text-[#F3EEDD]/50
                                "
                            >
                                Built for larger learning communities.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                CTA
            ====================================================== */}

            <section
                className="
                    relative
                    z-10
                    bg-[#161F19]
                    px-6
                    py-24
                "
            >

                <div className="mx-auto max-w-5xl">

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-2xl
                            border
                            border-[#F2B84B]/20
                            bg-[#1B241E]
                            px-8
                            py-16
                            text-center
                            md:px-16
                        "
                    >

                        {/* Glow */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                left-1/2
                                top-0
                                h-40
                                w-72
                                -translate-x-1/2
                                bg-[#F2B84B]/10
                                blur-[90px]
                            "
                        />

                        <div className="relative z-10">

                            <p
                                className="
                                    font-['JetBrains_Mono']
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#F2B84B]
                                "
                            >
                                Start Your Journey
                            </p>

                            <h2
                                className="
                                    mt-4
                                    font-['Space_Grotesk']
                                    text-3xl
                                    font-semibold
                                    md:text-4xl
                                "
                            >
                                Ready to learn with Shiyora?
                            </h2>

                            <p
                                className="
                                    mx-auto
                                    mt-5
                                    max-w-2xl
                                    leading-relaxed
                                    text-[#F3EEDD]/55
                                "
                            >
                                Create your account, choose the plan that
                                works for you and take control of your
                                learning journey.
                            </p>

                            <Link
                                to="/signup"
                                className="
                                    mt-8
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-lg
                                    bg-[#F2B84B]
                                    px-8
                                    py-3.5
                                    font-semibold
                                    text-[#161F19]
                                    shadow-[0_0_30px_rgba(242,184,75,0.15)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-[#f7c968]
                                "
                            >
                                Create Your Account
                                <span>→</span>
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Subscription;