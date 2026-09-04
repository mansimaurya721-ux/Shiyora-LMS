import { Link } from "react-router-dom";

/**
 * ---------------------------------------------------------------------------
 * Shiyora — About Page
 * Design language: "The Study Desk"
 * Matches the Home page:
 * - Chalkboard green background
 * - Warm ivory cards
 * - Mustard yellow highlights
 * - Red pen accents
 * - Sage green secondary accents
 * - Space Grotesk / Inter / JetBrains Mono
 * ---------------------------------------------------------------------------
 */

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";

function About() {
    const features = [
        {
            number: "01",
            title: "Multi-Tenant Platform",
            text: "Multiple organizations can use Shiyora while keeping their users, courses, and learning data logically separated.",
            accent: "yellow",
        },
        {
            number: "02",
            title: "Teacher Management",
            text: "Teachers can create courses, manage lessons, upload learning materials, and create quizzes.",
            accent: "green",
        },
        {
            number: "03",
            title: "Student Learning",
            text: "Students can enroll in courses, access learning materials, take quizzes, and monitor their progress.",
            accent: "red",
        },
        {
            number: "04",
            title: "Course Management",
            text: "Manage courses, lessons, video lectures, PDF notes, and quizzes from one centralized platform.",
            accent: "yellow",
        },
        {
            number: "05",
            title: "Progress Tracking",
            text: "Track student course completion and quiz performance through a simple learning dashboard.",
            accent: "green",
        },
        {
            number: "06",
            title: "Role-Based Access",
            text: "Different roles get access to features and dashboards relevant to their responsibilities.",
            accent: "red",
        },
    ];

    return (
        <main className="min-h-screen overflow-hidden bg-[#161F19] font-['Inter'] text-[#F3EEDD]">
            <style>{FONT_IMPORTS}</style>

            {/* =========================================================
                BACKGROUND
            ========================================================== */}

            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                {/* Desk lamp glow */}
                <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#F2B84B]/[0.10] blur-[140px]" />

                <div className="absolute -right-40 top-[25%] h-[500px] w-[500px] rounded-full bg-[#7C9A82]/[0.08] blur-[150px]" />

                <div className="absolute -bottom-60 left-[30%] h-[500px] w-[500px] rounded-full bg-[#D6402C]/[0.05] blur-[150px]" />

                {/* Chalk dust */}
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(243,238,221,0.7) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />
            </div>

            {/* =========================================================
                HERO
            ========================================================== */}

            <section className="relative z-10 px-6 pb-20 pt-24 md:pb-28 md:pt-28">
                <div className="mx-auto max-w-5xl text-center">

                    {/* Badge */}
                    <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#F2B84B]/30 bg-[#F2B84B]/10 px-4 py-2 font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-widest text-[#F2B84B]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F2B84B] shadow-[0_0_10px_rgba(242,184,75,0.8)]" />
                        About Shiyora
                    </div>

                    {/* Heading */}
                    <h1 className="mt-7 font-['Space_Grotesk'] text-5xl font-semibold leading-[1.05] tracking-tight text-[#F3EEDD] sm:text-6xl lg:text-[64px]">
                        Learning should feel
                        <br />

                        <span className="relative inline-block text-[#F2B84B]">
                            organized &amp; meaningful.

                            {/* Red underline */}
                            <svg
                                viewBox="0 0 420 18"
                                className="absolute -bottom-2 left-0 h-3 w-full text-[#D6402C]"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M2 12c80-10 260-10 416 2"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-9 max-w-3xl text-base leading-relaxed text-[#F3EEDD]/60 md:text-lg">
                        Shiyora is a multi-tenant SaaS-based Learning Management
                        System designed to bring organizations, teachers, and
                        students together on one powerful learning platform.
                    </p>

                    {/* Small stats */}
                    <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-3">
                        <div className="rounded-lg border border-[#F3EEDD]/10 bg-[#F3EEDD]/5 px-5 py-3">
                            <p className="font-['JetBrains_Mono'] text-lg font-semibold text-[#F2B84B]">
                                01
                            </p>
                            <p className="mt-1 text-xs text-[#F3EEDD]/50">
                                Unified Platform
                            </p>
                        </div>

                        <div className="rounded-lg border border-[#F3EEDD]/10 bg-[#F3EEDD]/5 px-5 py-3">
                            <p className="font-['JetBrains_Mono'] text-lg font-semibold text-[#7C9A82]">
                                03
                            </p>
                            <p className="mt-1 text-xs text-[#F3EEDD]/50">
                                Core Roles
                            </p>
                        </div>

                        <div className="rounded-lg border border-[#F3EEDD]/10 bg-[#F3EEDD]/5 px-5 py-3">
                            <p className="font-['JetBrains_Mono'] text-lg font-semibold text-[#D6402C]">
                                ∞
                            </p>
                            <p className="mt-1 text-xs text-[#F3EEDD]/50">
                                Learning Possibilities
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                MISSION & VISION
            ========================================================== */}

            <section className="relative z-10 border-t border-[#F3EEDD]/10 bg-[#141C17] py-24">
                <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">

                    {/* Mission */}
                    <div className="relative overflow-hidden rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#F2B84B]/30">

                        {/* Tape */}
                        <span
                            className="absolute -top-3 left-10 h-5 w-14 rotate-[-5deg] bg-[#F2B84B]/70"
                            style={{
                                clipPath:
                                    "polygon(4% 0, 96% 0, 100% 100%, 0% 100%)",
                            }}
                        />

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 font-['JetBrains_Mono'] text-lg font-bold text-[#F2B84B]">
                            M
                        </div>

                        <p className="mt-7 font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-[#F2B84B]">
                            Our Mission
                        </p>

                        <h2 className="mt-3 font-['Space_Grotesk'] text-2xl font-semibold">
                            Make digital education simpler.
                        </h2>

                        <p className="mt-4 text-sm leading-relaxed text-[#F3EEDD]/55">
                            Our mission is to simplify digital education by
                            providing organizations with an easy-to-use
                            platform for managing courses, teachers, students,
                            lessons, quizzes, and learning progress.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="relative overflow-hidden rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C9A82]/40">

                        <span
                            className="absolute -top-3 right-10 h-5 w-14 rotate-[4deg] bg-[#7C9A82]/70"
                            style={{
                                clipPath:
                                    "polygon(4% 0, 96% 0, 100% 100%, 0% 100%)",
                            }}
                        />

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#7C9A82]/20 bg-[#7C9A82]/10 font-['JetBrains_Mono'] text-lg font-bold text-[#7C9A82]">
                            V
                        </div>

                        <p className="mt-7 font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-[#7C9A82]">
                            Our Vision
                        </p>

                        <h2 className="mt-3 font-['Space_Grotesk'] text-2xl font-semibold">
                            Connect everyone through learning.
                        </h2>

                        <p className="mt-4 text-sm leading-relaxed text-[#F3EEDD]/55">
                            Our vision is to build a connected digital
                            learning ecosystem where organizations can deliver
                            quality education and students can learn, grow,
                            and track their progress from anywhere.
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================================================
                WHY SHIYORA
            ========================================================== */}

            <section className="relative z-10 bg-[#161F19] py-24">
                <div className="mx-auto max-w-7xl px-6">

                    {/* Heading */}
                    <div className="max-w-2xl">
                        <p className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-[0.2em] text-[#F2B84B]">
                            Why Shiyora
                        </p>

                        <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-semibold tracking-tight md:text-4xl">
                            Built for modern education.
                        </h2>

                        <p className="mt-4 leading-relaxed text-[#F3EEDD]/55">
                            Shiyora brings essential learning management
                            features together in one centralized platform.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {features.map((feature) => {
                            const accentClasses = {
                                yellow: {
                                    number: "text-[#F2B84B]/70",
                                    border: "hover:border-[#F2B84B]/30",
                                    line: "bg-[#F2B84B]",
                                },
                                green: {
                                    number: "text-[#7C9A82]/70",
                                    border: "hover:border-[#7C9A82]/40",
                                    line: "bg-[#7C9A82]",
                                },
                                red: {
                                    number: "text-[#D6402C]/70",
                                    border: "hover:border-[#D6402C]/30",
                                    line: "bg-[#D6402C]",
                                },
                            };

                            const accent = accentClasses[feature.accent];

                            return (
                                <div
                                    key={feature.number}
                                    className={`group relative overflow-hidden rounded-xl border border-[#F3EEDD]/10 bg-[#1B241E] p-7 transition-all duration-300 hover:-translate-y-1 ${accent.border}`}
                                >
                                    <span
                                        className={`font-['JetBrains_Mono'] text-xs font-semibold ${accent.number}`}
                                    >
                                        {feature.number}
                                    </span>

                                    <h3 className="mt-5 font-['Space_Grotesk'] text-lg font-semibold">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-relaxed text-[#F3EEDD]/55">
                                        {feature.text}
                                    </p>

                                    <div
                                        className={`mt-6 h-0.5 w-8 transition-all duration-300 group-hover:w-16 ${accent.line}`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
                LEARNING ECOSYSTEM
            ========================================================== */}

            <section className="relative z-10 border-t border-[#F3EEDD]/10 bg-[#141C17] py-24">
                <div className="mx-auto max-w-6xl px-6">

                    <div className="grid items-center gap-14 md:grid-cols-2">

                        {/* Left */}
                        <div>
                            <p className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-[0.2em] text-[#F2B84B]">
                                One ecosystem
                            </p>

                            <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-semibold md:text-4xl">
                                Everyone has a place at the desk.
                            </h2>

                            <p className="mt-5 leading-relaxed text-[#F3EEDD]/55">
                                Shiyora connects organizations, teachers, and
                                students so that learning activities can be
                                managed from one structured environment.
                            </p>
                        </div>

                        {/* Right */}
                        <div className="space-y-4">

                            <div className="flex items-center gap-4 rounded-xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5">
                                <span className="font-['JetBrains_Mono'] text-sm font-semibold text-[#F2B84B]">
                                    01
                                </span>

                                <div>
                                    <h3 className="font-['Space_Grotesk'] font-semibold">
                                        Organizations
                                    </h3>
                                    <p className="mt-1 text-sm text-[#F3EEDD]/50">
                                        Manage people, courses and learning
                                        activities centrally.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5">
                                <span className="font-['JetBrains_Mono'] text-sm font-semibold text-[#7C9A82]">
                                    02
                                </span>

                                <div>
                                    <h3 className="font-['Space_Grotesk'] font-semibold">
                                        Teachers
                                    </h3>
                                    <p className="mt-1 text-sm text-[#F3EEDD]/50">
                                        Create courses, lessons, resources and
                                        assessments.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5">
                                <span className="font-['JetBrains_Mono'] text-sm font-semibold text-[#D6402C]">
                                    03
                                </span>

                                <div>
                                    <h3 className="font-['Space_Grotesk'] font-semibold">
                                        Students
                                    </h3>
                                    <p className="mt-1 text-sm text-[#F3EEDD]/50">
                                        Learn, complete assessments and track
                                        progress.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                CTA
            ========================================================== */}

            <section className="relative z-10 bg-[#161F19] py-24">
                <div className="mx-auto max-w-5xl px-6">

                    <div className="relative overflow-hidden rounded-2xl border border-[#F2B84B]/20 bg-[#1B241E] px-8 py-16 text-center md:px-16">

                        {/* Glow */}
                        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 bg-[#F2B84B]/10 blur-[90px]" />

                        {/* Tape */}
                        <span
                            className="absolute left-1/2 top-0 h-5 w-20 -translate-x-1/2 rotate-1 bg-[#F2B84B]/60"
                            style={{
                                clipPath:
                                    "polygon(4% 0, 96% 0, 100% 100%, 0% 100%)",
                            }}
                        />

                        <div className="relative z-10">

                            <p className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-[0.2em] text-[#F2B84B]">
                                Start Your Journey
                            </p>

                            <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-semibold md:text-4xl">
                                Start learning with Shiyora.
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#F3EEDD]/55">
                                Create your account, explore courses and take
                                control of your learning journey.
                            </p>

                            <Link
                                to="/signup"
                                className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-[#F2B84B] px-8 py-3.5 font-semibold text-[#161F19] shadow-[0_0_30px_rgba(242,184,75,0.15)] transition-all duration-300 hover:bg-[#f7c968] motion-safe:hover:-translate-y-1"
                            >
                                Create Your Account

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default About;