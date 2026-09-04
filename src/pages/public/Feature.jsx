import { Link } from "react-router-dom";
import {
    Building2,
    GraduationCap,
    BookOpen,
    BarChart3,
    ShieldCheck,
    Users,
    Video,
    ClipboardCheck,
    FileText,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

const features = [
    {
        icon: Building2,
        number: "01",
        title: "Organization Management",
        description:
            "Manage your complete learning organization from one centralized platform.",
        points: [
            "Manage teachers and students",
            "Organize learning activities",
            "Centralized organization dashboard",
        ],
    },
    {
        icon: BookOpen,
        number: "02",
        title: "Complete Course Management",
        description:
            "Create and organize structured courses with everything your learners need.",
        points: [
            "Create and manage courses",
            "Add lessons and learning materials",
            "Organize course content easily",
        ],
    },
    {
        icon: GraduationCap,
        number: "03",
        title: "Student Learning",
        description:
            "Give students a focused learning environment where they can learn at their own pace.",
        points: [
            "Enroll in courses",
            "Access learning materials",
            "Track personal progress",
        ],
    },
    {
        icon: Users,
        number: "04",
        title: "Teacher Management",
        description:
            "Give teachers the tools they need to create and manage effective learning experiences.",
        points: [
            "Create courses and lessons",
            "Upload study materials",
            "Create quizzes and assessments",
        ],
    },
    {
        icon: BarChart3,
        number: "05",
        title: "Progress & Performance",
        description:
            "Understand learning progress with clear and simple performance tracking.",
        points: [
            "Monitor course completion",
            "Track quiz performance",
            "View student progress",
        ],
    },
    {
        icon: ShieldCheck,
        number: "06",
        title: "Role-Based Access",
        description:
            "Keep your platform organized by giving every user access according to their role.",
        points: [
            "Student-specific access",
            "Teacher-specific access",
            "Administrative controls",
        ],
    },
];

const learningTools = [
    {
        icon: Video,
        title: "Video Lectures",
        text: "Provide learners with structured video-based lessons.",
    },
    {
        icon: FileText,
        title: "Study Materials",
        text: "Keep notes and learning resources organized in one place.",
    },
    {
        icon: ClipboardCheck,
        title: "Quizzes & Assessments",
        text: "Create assessments to evaluate learner understanding.",
    },
];

function Feature() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#161F19] font-['Inter'] text-[#F3EEDD]">

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none fixed inset-0 overflow-hidden">

                <div
                    className="
                        absolute
                        -left-40
                        -top-40
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-[#F2B84B]/[0.08]
                        blur-[130px]
                    "
                />

                <div
                    className="
                        absolute
                        -right-40
                        top-[25%]
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-[#7C9A82]/[0.08]
                        blur-[140px]
                    "
                />

                <div
                    className="
                        absolute
                        bottom-[-250px]
                        left-[30%]
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-[#D6402C]/[0.05]
                        blur-[130px]
                    "
                />

                {/* Chalk dust */}
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(243,238,221,0.6) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />

            </div>


            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative z-10 px-6 pb-20 pt-24 md:pb-28 md:pt-28">

                <div className="mx-auto max-w-5xl text-center">

                    {/* Label */}

                    <div
                        className="
                            mx-auto
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[#F2B84B]/30
                            bg-[#F2B84B]/10
                            px-4
                            py-2
                            font-['JetBrains_Mono']
                            text-[11px]
                            font-medium
                            uppercase
                            tracking-widest
                            text-[#F2B84B]
                        "
                    >
                        <span
                            className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-[#F2B84B]
                                shadow-[0_0_10px_rgba(242,184,75,0.8)]
                            "
                        />

                        Shiyora Features
                    </div>


                    {/* Heading */}

                    <h1
                        className="
                            mt-7
                            font-['Space_Grotesk']
                            text-4xl
                            font-semibold
                            leading-[1.05]
                            tracking-tight
                            text-[#F3EEDD]
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                        "
                    >
                        Everything you need
                        <br />

                        <span className="relative inline-block text-[#F2B84B]">
                            to learn better.

                            <svg
                                viewBox="0 0 320 18"
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
                                    d="M2 12c60-10 200-10 316 2"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h1>


                    {/* Description */}

                    <p
                        className="
                            mx-auto
                            mt-8
                            max-w-2xl
                            text-base
                            leading-relaxed
                            text-[#F3EEDD]/60
                            md:text-lg
                        "
                    >
                        Shiyora brings organizations, teachers, and students
                        together with powerful tools for managing courses,
                        learning resources, assessments, and progress.
                    </p>

                </div>

            </section>


            {/* =====================================================
                MAIN FEATURES
            ====================================================== */}

            <section className="relative z-10 px-6 pb-24">

                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.number}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-[#F3EEDD]/10
                                        bg-[#1B241E]
                                        p-7
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-[#F2B84B]/30
                                        hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                                    "
                                >

                                    {/* Number */}

                                    <div className="flex items-center justify-between">

                                        <span
                                            className="
                                                font-['JetBrains_Mono']
                                                text-xs
                                                font-semibold
                                                text-[#F2B84B]/70
                                            "
                                        >
                                            {feature.number}
                                        </span>

                                        <div
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                items-center
                                                justify-center
                                                rounded-xl
                                                border
                                                border-[#F2B84B]/15
                                                bg-[#F2B84B]/10
                                                text-[#F2B84B]
                                                transition-all
                                                duration-300
                                                group-hover:border-[#F2B84B]/30
                                                group-hover:bg-[#F2B84B]/15
                                            "
                                        >
                                            <Icon className="h-5 w-5" />
                                        </div>

                                    </div>


                                    {/* Content */}

                                    <h2
                                        className="
                                            mt-7
                                            font-['Space_Grotesk']
                                            text-xl
                                            font-semibold
                                            text-[#F3EEDD]
                                        "
                                    >
                                        {feature.title}
                                    </h2>

                                    <p
                                        className="
                                            mt-3
                                            text-sm
                                            leading-relaxed
                                            text-[#F3EEDD]/55
                                        "
                                    >
                                        {feature.description}
                                    </p>


                                    {/* Points */}

                                    <div className="mt-6 space-y-3">

                                        {feature.points.map((point) => (
                                            <div
                                                key={point}
                                                className="
                                                    flex
                                                    items-start
                                                    gap-2
                                                    text-xs
                                                    text-[#F3EEDD]/65
                                                "
                                            >
                                                <CheckCircle2
                                                    className="
                                                        mt-0.5
                                                        h-4
                                                        w-4
                                                        shrink-0
                                                        text-[#7C9A82]
                                                    "
                                                />

                                                <span>{point}</span>
                                            </div>
                                        ))}

                                    </div>


                                    {/* Bottom accent */}

                                    <div
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            h-[2px]
                                            w-0
                                            bg-[#D6402C]
                                            transition-all
                                            duration-500
                                            group-hover:w-full
                                        "
                                    />

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =====================================================
                LEARNING TOOLS
            ====================================================== */}

            <section
                className="
                    relative
                    z-10
                    border-y
                    border-[#F3EEDD]/10
                    bg-[#141C17]
                    px-6
                    py-24
                "
            >

                <div className="mx-auto max-w-6xl">

                    {/* Heading */}

                    <div className="max-w-2xl">

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
                            Learning Tools
                        </p>

                        <h2
                            className="
                                mt-3
                                font-['Space_Grotesk']
                                text-3xl
                                font-semibold
                                tracking-tight
                                text-[#F3EEDD]
                                md:text-4xl
                            "
                        >
                            Built around the way students learn.
                        </h2>

                        <p
                            className="
                                mt-4
                                leading-relaxed
                                text-[#F3EEDD]/55
                            "
                        >
                            From lessons and videos to assessments and
                            resources, Shiyora keeps the learning experience
                            structured and accessible.
                        </p>

                    </div>


                    {/* Tools */}

                    <div className="mt-12 grid gap-5 md:grid-cols-3">

                        {learningTools.map((tool) => {
                            const Icon = tool.icon;

                            return (
                                <div
                                    key={tool.title}
                                    className="
                                        group
                                        rounded-xl
                                        border
                                        border-[#F3EEDD]/10
                                        bg-[#1B241E]
                                        p-6
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-[#F2B84B]/30
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-lg
                                            border
                                            border-[#F3EEDD]/10
                                            bg-[#F3EEDD]/5
                                            text-[#F2B84B]
                                        "
                                    >
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <h3
                                        className="
                                            mt-5
                                            font-['Space_Grotesk']
                                            text-lg
                                            font-semibold
                                        "
                                    >
                                        {tool.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            leading-relaxed
                                            text-[#F3EEDD]/55
                                        "
                                    >
                                        {tool.text}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =====================================================
                HOW SHIYORA HELPS
            ====================================================== */}

            <section className="relative z-10 bg-[#161F19] px-6 py-24">

                <div className="mx-auto max-w-6xl">

                    <div className="grid items-center gap-14 lg:grid-cols-2">

                        {/* LEFT */}

                        <div>

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
                                One Platform
                            </p>

                            <h2
                                className="
                                    mt-4
                                    font-['Space_Grotesk']
                                    text-3xl
                                    font-semibold
                                    tracking-tight
                                    md:text-4xl
                                "
                            >
                                One place for the
                                <span className="text-[#F2B84B]">
                                    {" "}entire learning journey.
                                </span>
                            </h2>

                            <p
                                className="
                                    mt-5
                                    leading-relaxed
                                    text-[#F3EEDD]/55
                                "
                            >
                                Shiyora connects the different parts of
                                digital education so organizations can manage
                                learning while teachers create content and
                                students focus on their progress.
                            </p>


                            <div className="mt-8 space-y-4">

                                {[
                                    "Centralized learning management",
                                    "Structured courses and resources",
                                    "Progress-focused student experience",
                                    "Role-based platform access",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <div
                                            className="
                                                flex
                                                h-7
                                                w-7
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-[#F2B84B]/10
                                                text-[#F2B84B]
                                            "
                                        >
                                            <CheckCircle2 className="h-4 w-4" />
                                        </div>

                                        <span className="text-sm text-[#F3EEDD]/70">
                                            {item}
                                        </span>
                                    </div>
                                ))}

                            </div>

                        </div>


                        {/* RIGHT — DESK CARD */}

                        <div
                            className="
                                relative
                                rounded-2xl
                                border
                                border-[#F3EEDD]/10
                                bg-[#F3EEDD]
                                p-6
                                text-[#1C2A22]
                                shadow-[0_25px_70px_rgba(0,0,0,0.4)]
                                rotate-1
                            "
                        >

                            {/* Tape */}

                            <div
                                className="
                                    absolute
                                    -top-3
                                    left-12
                                    h-5
                                    w-14
                                    rotate-[-6deg]
                                    bg-[#F2B84B]/70
                                "
                                style={{
                                    clipPath:
                                        "polygon(4% 0, 96% 0, 100% 100%, 0% 100%)",
                                }}
                            />

                            <div
                                className="
                                    absolute
                                    -top-3
                                    right-12
                                    h-5
                                    w-14
                                    rotate-[4deg]
                                    bg-[#F2B84B]/70
                                "
                                style={{
                                    clipPath:
                                        "polygon(4% 0, 96% 0, 100% 100%, 0% 100%)",
                                }}
                            />


                            <div className="flex items-center justify-between border-b border-[#1C2A22]/10 pb-4">

                                <div className="flex items-center gap-3">

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-[#1C2A22]
                                            font-['Space_Grotesk']
                                            font-bold
                                            text-[#F3EEDD]
                                        "
                                    >
                                        S
                                    </div>

                                    <div>
                                        <p className="font-['Space_Grotesk'] font-semibold">
                                            Shiyora
                                        </p>

                                        <p className="text-[10px] text-[#1C2A22]/45">
                                            Learning Platform
                                        </p>
                                    </div>

                                </div>

                                <span
                                    className="
                                        font-['JetBrains_Mono']
                                        text-[10px]
                                        uppercase
                                        tracking-widest
                                        text-[#1C2A22]/40
                                    "
                                >
                                    Features
                                </span>

                            </div>


                            {/* Checklist */}

                            <div className="mt-6 space-y-4">

                                {[
                                    "Courses organized",
                                    "Learning resources ready",
                                    "Assessments available",
                                    "Progress being tracked",
                                ].map((item, index) => (
                                    <div
                                        key={item}
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                            rounded-xl
                                            border
                                            border-[#1C2A22]/10
                                            bg-white/50
                                            p-4
                                        "
                                    >

                                        <div
                                            className={`
                                                flex
                                                h-8
                                                w-8
                                                items-center
                                                justify-center
                                                rounded-lg
                                                font-['JetBrains_Mono']
                                                text-xs
                                                font-bold
                                                ${index === 2
                                                    ? "bg-[#D6402C]/10 text-[#D6402C]"
                                                    : "bg-[#7C9A82]/15 text-[#48664F]"
                                                }
                                            `}
                                        >
                                            {index + 1}
                                        </div>

                                        <span className="text-sm font-semibold">
                                            {item}
                                        </span>

                                        <CheckCircle2
                                            className="
                                                ml-auto
                                                h-4
                                                w-4
                                                text-[#48664F]
                                            "
                                        />

                                    </div>
                                ))}

                            </div>

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
                    border-t
                    border-[#F3EEDD]/10
                    bg-[#141C17]
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
                                Start Learning
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
                                Ready to experience Shiyora?
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
                                Create your account and explore a structured
                                learning experience built for modern education.
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">

                                <Link
                                    to="/signup"
                                    className="
                                        group
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-lg
                                        bg-[#F2B84B]
                                        px-7
                                        py-3.5
                                        font-semibold
                                        text-[#161F19]
                                        transition-all
                                        duration-300
                                        hover:bg-[#f7c968]
                                        motion-safe:hover:-translate-y-1
                                    "
                                >
                                    Create Your Account

                                    <ArrowRight
                                        className="
                                            h-4
                                            w-4
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                        "
                                    />

                                </Link>


                                <Link
                                    to="/about"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-lg
                                        border
                                        border-[#F3EEDD]/15
                                        bg-[#F3EEDD]/5
                                        px-7
                                        py-3.5
                                        font-semibold
                                        text-[#F3EEDD]/75
                                        transition-all
                                        duration-300
                                        hover:border-[#F2B84B]/40
                                        hover:text-[#F2B84B]
                                    "
                                >
                                    About Shiyora
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Feature;