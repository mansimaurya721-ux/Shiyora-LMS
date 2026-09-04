import { Link } from "react-router-dom";
import {
    BookOpen,
    Code2,
    Database,
    Globe,
    Brain,
    Layers,
    Users,
    ArrowRight,
    Clock,
    PlayCircle,
    Star,
} from "lucide-react";

function Courses() {
    const courses = [
        {
            title: "Full Stack Web Development",
            description:
                "Learn modern frontend and backend development and build complete web applications.",
            category: "Web Development",
            level: "Intermediate",
            duration: "12 Weeks",
            students: "245 Students",
            icon: Code2,
        },
        {
            title: "Java Programming",
            description:
                "Build a strong foundation in Java programming, OOP concepts, collections, and applications.",
            category: "Programming",
            level: "Beginner",
            duration: "8 Weeks",
            students: "180 Students",
            icon: Layers,
        },
        {
            title: "Database Management",
            description:
                "Understand databases, SQL, relationships, normalization, queries, and database design.",
            category: "Database",
            level: "Intermediate",
            duration: "7 Weeks",
            students: "156 Students",
            icon: Database,
        },
        {
            title: "HTML & CSS",
            description:
                "Learn the fundamentals of creating responsive and modern websites from scratch.",
            category: "Web Design",
            level: "Beginner",
            duration: "6 Weeks",
            students: "320 Students",
            icon: Globe,
        },
        {
            title: "JavaScript Essentials",
            description:
                "Master JavaScript fundamentals, ES6 features, DOM manipulation, and modern development.",
            category: "Programming",
            level: "Intermediate",
            duration: "8 Weeks",
            students: "210 Students",
            icon: Brain,
        },
        {
            title: "React Development",
            description:
                "Build interactive frontend applications using React components, hooks, routing, and state.",
            category: "Frontend",
            level: "Intermediate",
            duration: "10 Weeks",
            students: "195 Students",
            icon: BookOpen,
        },
    ];

    return (
        <div className="min-h-screen overflow-hidden bg-[#161F19] text-[#F3EEDD]">

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none fixed inset-0 overflow-hidden">

                {/* Gold Glow */}

                <div
                    className="
                        absolute
                        -top-40
                        -right-40
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-[#F2B84B]/8
                        blur-[130px]
                    "
                />

                {/* Green Glow */}

                <div
                    className="
                        absolute
                        -bottom-40
                        -left-40
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-emerald-500/5
                        blur-[130px]
                    "
                />

                {/* Grid */}

                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.025]
                    "
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                rgba(243,238,221,0.5) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                rgba(243,238,221,0.5) 1px,
                                transparent 1px
                            )
                        `,
                        backgroundSize: "55px 55px",
                    }}
                />

            </div>


            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative z-10 px-6 pb-16 pt-20 md:pb-20 md:pt-24">

                <div className="mx-auto max-w-5xl text-center">

                    {/* Badge */}

                    <div
                        className="
                            mx-auto
                            flex
                            w-fit
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[#F2B84B]/20
                            bg-[#F2B84B]/5
                            px-4
                            py-2
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[2px]
                            text-[#F2B84B]
                        "
                    >
                        <BookOpen size={14} />

                        Shiyora Courses
                    </div>


                    {/* Heading */}

                    <h1
                        className="
                            mx-auto
                            mt-6
                            max-w-4xl
                            text-4xl
                            font-black
                            leading-tight
                            tracking-tight
                            text-[#F3EEDD]
                            sm:text-5xl
                            md:text-6xl
                        "
                    >
                        Learn skills that

                        <span
                            className="
                                block
                                bg-gradient-to-r
                                from-[#F2B84B]
                                via-[#F7C968]
                                to-[#E8A83E]
                                bg-clip-text
                                text-transparent
                            "
                        >
                            move you forward.
                        </span>
                    </h1>


                    {/* Description */}

                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-2xl
                            text-sm
                            leading-7
                            text-[#F3EEDD]/55
                            sm:text-base
                        "
                    >
                        Explore structured courses designed to help students
                        build practical skills, strengthen their knowledge,
                        and grow with Shiyora.
                    </p>

                </div>

            </section>


            {/* =====================================================
                COURSE STATS
            ====================================================== */}

            <section className="relative z-10 px-6 pb-12">

                <div
                    className="
                        mx-auto
                        grid
                        max-w-5xl
                        grid-cols-2
                        gap-4
                        md:grid-cols-4
                    "
                >

                    {/* Stat */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]/80
                            p-5
                            text-center
                            backdrop-blur-xl
                        "
                    >
                        <BookOpen
                            size={20}
                            className="mx-auto text-[#F2B84B]"
                        />

                        <p className="mt-3 text-2xl font-black text-white">
                            50+
                        </p>

                        <p className="mt-1 text-xs text-[#F3EEDD]/40">
                            Courses
                        </p>
                    </div>


                    {/* Stat */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]/80
                            p-5
                            text-center
                            backdrop-blur-xl
                        "
                    >
                        <Users
                            size={20}
                            className="mx-auto text-[#F2B84B]"
                        />

                        <p className="mt-3 text-2xl font-black text-white">
                            2K+
                        </p>

                        <p className="mt-1 text-xs text-[#F3EEDD]/40">
                            Learners
                        </p>
                    </div>


                    {/* Stat */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]/80
                            p-5
                            text-center
                            backdrop-blur-xl
                        "
                    >
                        <PlayCircle
                            size={20}
                            className="mx-auto text-[#F2B84B]"
                        />

                        <p className="mt-3 text-2xl font-black text-white">
                            500+
                        </p>

                        <p className="mt-1 text-xs text-[#F3EEDD]/40">
                            Lessons
                        </p>
                    </div>


                    {/* Stat */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]/80
                            p-5
                            text-center
                            backdrop-blur-xl
                        "
                    >
                        <Star
                            size={20}
                            className="mx-auto text-[#F2B84B]"
                        />

                        <p className="mt-3 text-2xl font-black text-white">
                            4.8
                        </p>

                        <p className="mt-1 text-xs text-[#F3EEDD]/40">
                            Average Rating
                        </p>
                    </div>

                </div>

            </section>


            {/* =====================================================
                COURSE SECTION
            ====================================================== */}

            <section className="relative z-10 px-6 py-16">

                <div className="mx-auto max-w-6xl">

                    {/* Section Heading */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            md:flex-row
                            md:items-end
                            md:justify-between
                        "
                    >

                        <div>

                            <p
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[2px]
                                    text-[#F2B84B]
                                "
                            >
                                Explore Learning
                            </p>

                            <h2
                                className="
                                    mt-3
                                    text-3xl
                                    font-black
                                    tracking-tight
                                    text-[#F3EEDD]
                                    md:text-4xl
                                "
                            >
                                Popular Courses
                            </h2>

                            <p
                                className="
                                    mt-3
                                    max-w-xl
                                    text-sm
                                    leading-6
                                    text-[#F3EEDD]/45
                                "
                            >
                                Start with a course that matches your goals
                                and take the next step in your learning journey.
                            </p>

                        </div>

                    </div>


                    {/* Course Grid */}

                    <div
                        className="
                            mt-10
                            grid
                            gap-6
                            sm:grid-cols-2
                            lg:grid-cols-3
                        "
                    >

                        {courses.map((course, index) => {

                            const Icon = course.icon;

                            return (
                                <div
                                    key={index}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-[#F3EEDD]/10
                                        bg-[#1B241E]
                                        p-6
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-[#F2B84B]/30
                                        hover:shadow-[0_20px_50px_rgba(242,184,75,0.07)]
                                    "
                                >

                                    {/* Top Glow */}

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            -right-16
                                            -top-16
                                            h-32
                                            w-32
                                            rounded-full
                                            bg-[#F2B84B]/5
                                            blur-3xl
                                            transition
                                            duration-300
                                            group-hover:bg-[#F2B84B]/10
                                        "
                                    />


                                    {/* Icon */}

                                    <div
                                        className="
                                            relative
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border
                                            border-[#F2B84B]/15
                                            bg-[#F2B84B]/5
                                            text-[#F2B84B]
                                            transition-all
                                            duration-300
                                            group-hover:border-[#F2B84B]/30
                                            group-hover:bg-[#F2B84B]/10
                                        "
                                    >
                                        <Icon size={21} />
                                    </div>


                                    {/* Category */}

                                    <div className="mt-5 flex items-center justify-between">

                                        <span
                                            className="
                                                rounded-full
                                                bg-[#F2B84B]/8
                                                px-3
                                                py-1
                                                text-[10px]
                                                font-bold
                                                uppercase
                                                tracking-wider
                                                text-[#F2B84B]
                                            "
                                        >
                                            {course.category}
                                        </span>

                                        <span className="text-[10px] text-[#F3EEDD]/35">
                                            {course.level}
                                        </span>

                                    </div>


                                    {/* Title */}

                                    <h3
                                        className="
                                            mt-4
                                            text-xl
                                            font-bold
                                            text-[#F3EEDD]
                                            transition-colors
                                            group-hover:text-[#F2B84B]
                                        "
                                    >
                                        {course.title}
                                    </h3>


                                    {/* Description */}

                                    <p
                                        className="
                                            mt-3
                                            min-h-[72px]
                                            text-sm
                                            leading-6
                                            text-[#F3EEDD]/45
                                        "
                                    >
                                        {course.description}
                                    </p>


                                    {/* Course Info */}

                                    <div
                                        className="
                                            mt-5
                                            flex
                                            items-center
                                            gap-4
                                            border-t
                                            border-[#F3EEDD]/8
                                            pt-4
                                        "
                                    >

                                        <div className="flex items-center gap-1.5">
                                            <Clock
                                                size={14}
                                                className="text-[#F2B84B]/70"
                                            />

                                            <span className="text-xs text-[#F3EEDD]/40">
                                                {course.duration}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            <Users
                                                size={14}
                                                className="text-[#F2B84B]/70"
                                            />

                                            <span className="text-xs text-[#F3EEDD]/40">
                                                {course.students}
                                            </span>
                                        </div>

                                    </div>


                                    {/* View Course */}

                                    <button
                                        type="button"
                                        className="
                                            mt-5
                                            flex
                                            w-full
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-lg
                                            border
                                            border-[#F3EEDD]/10
                                            bg-[#161F19]
                                            px-4
                                            py-2.5
                                            text-sm
                                            font-semibold
                                            text-[#F3EEDD]/70
                                            transition-all
                                            duration-300
                                            group-hover:border-[#F2B84B]/30
                                            group-hover:bg-[#F2B84B]/10
                                            group-hover:text-[#F2B84B]
                                        "
                                    >
                                        View Course

                                        <ArrowRight
                                            size={15}
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-1
                                            "
                                        />

                                    </button>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ====================================================== */}

            <section className="relative z-10 px-6 pb-20 pt-8">

                <div
                    className="
                        relative
                        mx-auto
                        max-w-5xl
                        overflow-hidden
                        rounded-[2rem]
                        border
                        border-[#F2B84B]/20
                        bg-gradient-to-br
                        from-[#24291D]
                        via-[#1D251D]
                        to-[#171F1A]
                        px-8
                        py-14
                        text-center
                        shadow-[0_20px_60px_rgba(242,184,75,0.05)]
                        md:px-16
                    "
                >

                    {/* Glow */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-24
                            -top-24
                            h-64
                            w-64
                            rounded-full
                            bg-[#F2B84B]/8
                            blur-3xl
                        "
                    />

                    <div className="relative z-10">

                        <p
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[2px]
                                text-[#F2B84B]
                            "
                        >
                            Start Learning
                        </p>

                        <h2
                            className="
                                mt-4
                                text-3xl
                                font-black
                                text-[#F3EEDD]
                                md:text-4xl
                            "
                        >
                            Ready to grow your skills?
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-4
                                max-w-xl
                                text-sm
                                leading-7
                                text-[#F3EEDD]/45
                            "
                        >
                            Create your Shiyora account and begin your
                            learning journey today.
                        </p>


                        <div className="mt-8 flex flex-wrap justify-center gap-3">

                            <Link
                                to="/signup"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-lg
                                    bg-[#F2B84B]
                                    px-6
                                    py-3
                                    text-sm
                                    font-bold
                                    text-[#161F19]
                                    shadow-[0_0_25px_rgba(242,184,75,0.12)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:bg-[#f7c968]
                                    hover:shadow-[0_0_30px_rgba(242,184,75,0.2)]
                                "
                            >
                                Create Account

                                <ArrowRight size={16} />
                            </Link>

                            <Link
                                to="/subscription"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-lg
                                    border
                                    border-[#F3EEDD]/15
                                    bg-[#161F19]
                                    px-6
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-[#F3EEDD]/70
                                    transition-all
                                    duration-300
                                    hover:border-[#F2B84B]/30
                                    hover:text-[#F2B84B]
                                "
                            >
                                Explore Plans
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Courses;