import { Link } from "react-router-dom";

/**
 * ---------------------------------------------------------------------------
 * Design language: "the study desk"
 * A dark chalkboard-green backdrop, lit like a desk lamp, with warm ivory
 * "index card" panels laid on top — annotated the way a tutor marks up your
 * work: a red pen circle around the number that matters, a mustard
 * highlighter for the thing to notice first. Space Grotesk carries the
 * headlines, Inter carries the reading, JetBrains Mono carries anything
 * that looks like a grade or a stat.
 * ---------------------------------------------------------------------------
 */

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";

// ---- Small inline icons (no external icon dependency) ----------------------

function CapIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 3 1 8l11 5 9-4.09V17h2V8L12 3Z" />
            <path d="M5 10.5V16c0 1.5 3 3 7 3s7-1.5 7-3v-5.5" />
        </svg>
    );
}

function ClockIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3.5 2" />
        </svg>
    );
}

function ChartIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M4 19V10M12 19V5M20 19v-7" />
            <path d="M2 19h20" />
        </svg>
    );
}

// A hand-drawn-looking circle, used to "grade" the numbers we're proudest of.
function PenCircle({ className = "" }) {
    return (
        <svg viewBox="0 0 100 100" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}>
            <path
                d="M51 5C27 4 8 21 7 46c-1 26 18 47 44 48 25 1 46-19 47-45C99 24 78 6 51 5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

// A short strip of "washi tape" pinning a card to the board.
function Tape({ className = "" }) {
    return (
        <span
            className={`absolute -top-3 h-5 w-14 bg-[#F2B84B]/70 shadow-[0_2px_6px_rgba(0,0,0,0.25)] ${className}`}
            style={{ clipPath: "polygon(4% 0, 96% 0, 100% 100%, 0% 100%)" }}
            aria-hidden="true"
        />
    );
}

function Home() {
    const features = [
        {
            icon: CapIcon,
            title: "Expert Instructors",
            text: "Learn from industry experts",
        },
        {
            icon: ClockIcon,
            title: "Flexible Learning",
            text: "Learn anytime, anywhere",
        },
        {
            icon: ChartIcon,
            title: "Track Progress",
            text: "Monitor your growth",
        },
    ];

    const courses = [
        {
            title: "Web Development",
            category: "React • Node.js",
            progress: 65,
            accent: "#F2B84B",
        },
        {
            title: "UI/UX Design",
            category: "Figma • Design",
            progress: 40,
            accent: "#7C9A82",
        },
        {
            title: "Data Structures",
            category: "DSA • Java",
            progress: 75,
            accent: "#D6402C",
        },
    ];

    return (
        <main className="min-h-screen overflow-hidden bg-[#161F19] font-['Inter'] text-[#F3EEDD]">
            <style>{FONT_IMPORTS}</style>

            {/* ================================================================
                HERO
            ================================================================= */}
            <section className="relative min-h-[calc(100vh-70px)] overflow-hidden">
                {/* Desk-lamp glow */}
                <div className="pointer-events-none absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-[#F2B84B]/[0.12] blur-[140px]" />
                <div className="pointer-events-none absolute right-0 top-40 h-[460px] w-[460px] rounded-full bg-[#7C9A82]/[0.10] blur-[150px]" />

                {/* Chalk-dust texture, not a hard grid */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.10]"
                    style={{
                        backgroundImage: "radial-gradient(rgba(243,238,221,0.6) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />

                <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">
                    {/* LEFT: copy */}
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#F2B84B]/30 bg-[#F2B84B]/10 px-4 py-2 font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-widest text-[#F2B84B]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#F2B84B] shadow-[0_0_10px_rgba(242,184,75,0.8)]" />
                            Now enrolling
                        </div>

                        <h1 className="mt-7 font-['Space_Grotesk'] text-5xl font-semibold leading-[1.05] tracking-tight text-[#F3EEDD] sm:text-6xl lg:text-[64px]">
                            Learn it. Log it.
                            <br />
                            <span className="relative inline-block">
                                Graduate with Shiyora.
                                <svg
                                    viewBox="0 0 320 18"
                                    className="absolute -bottom-1 left-0 h-3 w-full text-[#D6402C]"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <path d="M2 12c60-10 200-10 316 2" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p className="mt-8 max-w-xl text-base leading-relaxed text-[#F3EEDD]/60 md:text-lg">
                            Shiyora is your all-in-one learning platform. Access courses,
                            study resources and assessments, and keep every bit of your
                            progress in one notebook.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <Link
                                to="/signup"
                                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#F2B84B] px-7 py-3.5 font-semibold text-[#161F19] shadow-[0_0_30px_rgba(242,184,75,0.2)] transition-all duration-300 hover:bg-[#f7c968] motion-safe:hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B84B]"
                            >
                                Explore Courses
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </Link>

                            <Link
                                to="/subscription"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#F3EEDD]/15 bg-[#F3EEDD]/5 px-7 py-3.5 font-semibold text-[#F3EEDD]/80 transition-all duration-300 hover:border-[#F2B84B]/40 hover:text-[#F2B84B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B84B]"
                            >
                                <span aria-hidden="true">▷</span>
                                How It Works
                            </Link>
                        </div>

                        {/* Feature highlights */}
                        <div className="mt-12 grid gap-6 sm:grid-cols-3">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#F3EEDD]/10 bg-[#F3EEDD]/5 text-[#F2B84B]">
                                        <feature.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-[#F3EEDD]">{feature.title}</h4>
                                        <p className="mt-1 text-[11px] text-[#F3EEDD]/50">{feature.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: dashboard, styled as a clipboard of graded index cards */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[560px] -rotate-1 rounded-2xl border border-[#F3EEDD]/10 bg-[#F3EEDD] text-[#1C2A22] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                            <Tape className="left-10 -rotate-6" />
                            <Tape className="right-10 rotate-3" />

                            {/* Top bar */}
                            <div className="flex items-center justify-between border-b border-[#1C2A22]/10 px-5 py-4">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#1C2A22] font-['Space_Grotesk'] text-xs font-bold text-[#F3EEDD]">
                                        S
                                    </div>
                                    <span className="font-['Space_Grotesk'] text-sm font-semibold">Shiyora</span>
                                </div>
                                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#1C2A22]/40">
                                    Progress Report
                                </span>
                            </div>

                            <div className="p-5 md:p-6">
                                <div className="mb-6 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-[#1C2A22]/50">Learning Dashboard</p>
                                        <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-semibold">Welcome back 👋</h2>
                                    </div>
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1C2A22] text-xs font-bold text-[#F3EEDD]">
                                        M
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="mb-5 grid grid-cols-3 gap-3">
                                    {[
                                        ["Enrolled", 12],
                                        ["In Progress", 6],
                                        ["Completed", 4],
                                    ].map(([label, value]) => (
                                        <div key={label} className="rounded-xl border border-[#1C2A22]/10 bg-white/50 p-4">
                                            <p className="text-xs text-[#1C2A22]/50">{label}</p>
                                            <p className="mt-2 font-['JetBrains_Mono'] text-xl font-semibold">{value}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Overall progress, graded in red pen */}
                                <div className="rounded-xl border border-[#1C2A22]/10 bg-white/50 p-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-[#1C2A22]/50">Overall Progress</p>
                                            <p className="mt-1 font-['JetBrains_Mono'] text-2xl font-semibold">72%</p>
                                        </div>
                                        <div className="relative flex h-16 w-16 items-center justify-center text-[#D6402C]">
                                            <PenCircle />
                                            <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#1C2A22]">72%</span>
                                        </div>
                                    </div>
                                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#1C2A22]/10">
                                        <div className="h-full w-[72%] rounded-full bg-[#D6402C]" />
                                    </div>
                                </div>

                                {/* Course cards */}
                                <div className="mt-5">
                                    <div className="mb-3 flex justify-between">
                                        <h3 className="text-sm font-semibold">Continue Learning</h3>
                                        <span className="text-xs font-medium text-[#D6402C]">View All →</span>
                                    </div>

                                    <div className="space-y-3">
                                        {courses.map((course) => (
                                            <div
                                                key={course.title}
                                                className="flex items-center gap-3 rounded-xl border border-[#1C2A22]/10 bg-white/50 p-3 transition-colors hover:border-[#1C2A22]/25"
                                            >
                                                <div
                                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-['JetBrains_Mono'] text-xs font-bold"
                                                    style={{ backgroundColor: `${course.accent}22`, color: course.accent }}
                                                >
                                                    {course.title
                                                        .split(" ")
                                                        .map((word) => word[0])
                                                        .join("")
                                                        .slice(0, 2)}
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <p className="truncate text-sm font-semibold">{course.title}</p>
                                                    <p className="text-[11px] text-[#1C2A22]/50">{course.category}</p>
                                                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#1C2A22]/10">
                                                        <div
                                                            className="h-full rounded-full"
                                                            style={{ width: `${course.progress}%`, backgroundColor: course.accent }}
                                                        />
                                                    </div>
                                                </div>

                                                <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#1C2A22]/60">
                                                    {course.progress}%
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================
                WHY SHIYORA
            ================================================================= */}
            <section className="border-t border-[#F3EEDD]/10 bg-[#141C17] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="max-w-2xl">
                        <p className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-[0.2em] text-[#F2B84B]">
                            Why Shiyora
                        </p>
                        <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-semibold tracking-tight md:text-4xl">
                            Everything you need to learn better.
                        </h2>
                        <p className="mt-4 leading-relaxed text-[#F3EEDD]/55">
                            A structured learning environment designed for students,
                            teachers and organizations.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-5 md:grid-cols-3">
                        {[
                            {
                                title: "Organization Management",
                                text: "Manage organizations, teachers, students and learning activities from one centralized platform.",
                            },
                            {
                                title: "Complete Course Management",
                                text: "Create structured courses with lessons, videos, study materials and assessments.",
                            },
                            {
                                title: "Progress & Performance",
                                text: "Monitor completion, quiz performance and overall student learning progress.",
                            },
                        ].map((feature, i) => (
                            <div
                                key={feature.title}
                                className="group relative rounded-xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6 transition-all duration-300 hover:border-[#F2B84B]/30 motion-safe:hover:-translate-y-1"
                            >
                                <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#F2B84B]/70">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3 className="mt-5 font-['Space_Grotesk'] text-lg font-semibold">{feature.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-[#F3EEDD]/55">{feature.text}</p>
                                <div className="mt-6 text-sm text-[#F2B84B] opacity-0 transition-opacity group-hover:opacity-100">
                                    Learn more →
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================
                HOW IT WORKS
            ================================================================= */}
            <section className="bg-[#161F19] py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-[0.2em] text-[#F2B84B]">
                            How It Works
                        </p>
                        <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-semibold md:text-4xl">
                            Learning made simple.
                        </h2>
                        <p className="mt-4 text-[#F3EEDD]/55">Start your learning journey in three simple steps.</p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        {[
                            ["01", "Create an Account", "Join Shiyora and set up your learning profile."],
                            ["02", "Explore Courses", "Discover courses and choose what you want to learn."],
                            ["03", "Track Your Progress", "Learn at your own pace and monitor your progress."],
                        ].map(([number, title, text]) => (
                            <div key={number} className="relative rounded-xl border border-[#F3EEDD]/10 bg-[#1B241E] p-7">
                                <span className="font-['Space_Grotesk'] text-5xl font-bold text-[#F3EEDD]/10">{number}</span>
                                <h3 className="mt-5 font-['Space_Grotesk'] text-xl font-semibold">{title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-[#F3EEDD]/55">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================
                CTA
            ================================================================= */}
            <section className="border-t border-[#F3EEDD]/10 bg-[#141C17] py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="relative overflow-hidden rounded-2xl border border-[#F2B84B]/20 bg-[#1B241E] px-8 py-16 text-center md:px-16">
                        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 bg-[#F2B84B]/10 blur-[90px]" />

                        <div className="relative z-10">
                            <p className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-[0.2em] text-[#F2B84B]">
                                Start Your Journey
                            </p>
                            <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-semibold md:text-4xl">
                                Ready to learn with Shiyora?
                            </h2>
                            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#F3EEDD]/55">
                                Create your account, explore courses and take control of
                                your learning journey.
                            </p>
                            <Link
                                to="/signup"
                                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#F2B84B] px-8 py-3.5 font-semibold text-[#161F19] transition-all duration-300 hover:bg-[#f7c968] motion-safe:hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B84B]"
                            >
                                Create Your Account →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
