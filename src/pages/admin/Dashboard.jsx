import React from "react";
import {
    Users,
    BookOpen,
    GraduationCap,
    ClipboardCheck,
    TrendingUp,
    UserPlus,
    Plus,
    ArrowUpRight,
    Activity,
} from "lucide-react";

const Dashboard = () => {
    // ============================================================
    // DASHBOARD STATISTICS
    // ============================================================

    const stats = [
        {
            title: "Total Students",
            value: "1,248",
            change: "+12.5%",
            description: "this month",
            icon: Users,
            accent: "gold",
        },
        {
            title: "Total Teachers",
            value: "86",
            change: "+8.2%",
            description: "this month",
            icon: GraduationCap,
            accent: "green",
        },
        {
            title: "Total Courses",
            value: "124",
            change: "+15.4%",
            description: "this month",
            icon: BookOpen,
            accent: "light",
        },
        {
            title: "Enrollments",
            value: "3,842",
            change: "+18.7%",
            description: "this month",
            icon: ClipboardCheck,
            accent: "gold",
        },
    ];

    // ============================================================
    // RECENT COURSES
    // ============================================================

    const recentCourses = [
        {
            name: "Full Stack Web Development",
            teacher: "Rahul Sharma",
            students: 245,
            status: "Active",
        },
        {
            name: "Data Science with Python",
            teacher: "Priya Singh",
            students: 186,
            status: "Active",
        },
        {
            name: "UI/UX Design Fundamentals",
            teacher: "Neha Gupta",
            students: 142,
            status: "Active",
        },
        {
            name: "Java Programming",
            teacher: "Amit Verma",
            students: 198,
            status: "Draft",
        },
    ];

    // ============================================================
    // RECENT STUDENTS
    // ============================================================

    const recentStudents = [
        {
            name: "Aarav Singh",
            email: "aarav@example.com",
            course: "Full Stack Development",
        },
        {
            name: "Ananya Gupta",
            email: "ananya@example.com",
            course: "Data Science",
        },
        {
            name: "Rohan Yadav",
            email: "rohan@example.com",
            course: "Java Programming",
        },
        {
            name: "Priya Mishra",
            email: "priya@example.com",
            course: "UI/UX Design",
        },
    ];

    return (
        <main
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#161F19]
                px-4
                py-6
                text-[#F3EEDD]
                sm:px-6
                lg:px-8
            "
        >
            {/* =====================================================
                BACKGROUND GLOW
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    fixed
                    -left-40
                    -top-40
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#F2B84B]/[0.05]
                    blur-[130px]
                "
            />

            <div
                className="
                    pointer-events-none
                    fixed
                    -right-40
                    bottom-0
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#7C9A82]/[0.07]
                    blur-[140px]
                "
            />

            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="relative z-10">

                {/* =================================================
                    HEADER
                ================================================== */}

                <div
                    className="
                        mb-8
                        flex
                        flex-col
                        gap-5
                        md:flex-row
                        md:items-end
                        md:justify-between
                    "
                >
                    <div>

                        <p
                            className="
                                mb-1
                                font-['JetBrains_Mono']
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-[#F2B84B]
                            "
                        >
                            Administration
                        </p>

                        <h1
                            className="
                                font-['Space_Grotesk']
                                text-3xl
                                font-bold
                                tracking-tight
                                text-[#F3EEDD]
                                md:text-4xl
                            "
                        >
                            Organization Dashboard
                        </h1>

                        <p
                            className="
                                mt-2
                                max-w-xl
                                text-sm
                                leading-relaxed
                                text-[#F3EEDD]/50
                            "
                        >
                            Welcome back! Here's what's happening with
                            your organization today.
                        </p>

                    </div>

                    {/* HEADER ACTIONS */}

                    <div className="flex flex-wrap gap-3">

                        <button
                            type="button"
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-[#F3EEDD]/10
                                bg-[#1B241E]
                                px-4
                                py-3
                                font-['Space_Grotesk']
                                text-sm
                                font-semibold
                                text-[#F3EEDD]/70
                                shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                                transition-all
                                duration-300
                                motion-safe:hover:-translate-y-0.5
                                hover:border-[#7C9A82]/30
                                hover:bg-[#202B23]
                                hover:text-[#F3EEDD]
                                focus-visible:outline
                                focus-visible:outline-2
                                focus-visible:outline-offset-2
                                focus-visible:outline-[#7C9A82]
                            "
                        >
                            <TrendingUp size={17} />

                            View Reports
                        </button>

                        <button
                            type="button"
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-[#F2B84B]/30
                                bg-[#F2B84B]
                                px-4
                                py-3
                                font-['Space_Grotesk']
                                text-sm
                                font-semibold
                                text-[#161F19]
                                shadow-[0_10px_30px_rgba(242,184,75,0.12)]
                                transition-all
                                duration-300
                                motion-safe:hover:-translate-y-0.5
                                hover:bg-[#F7C968]
                                hover:shadow-[0_12px_35px_rgba(242,184,75,0.18)]
                                active:scale-[0.98]
                                focus-visible:outline
                                focus-visible:outline-2
                                focus-visible:outline-offset-2
                                focus-visible:outline-[#F2B84B]
                            "
                        >
                            <Plus size={17} />

                            Add Course
                        </button>

                    </div>
                </div>

                {/* =================================================
                    STATISTICS
                ================================================== */}

                <div
                    className="
                        mb-6
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    {stats.map((stat) => {

                        const Icon = stat.icon;

                        const iconContainer =
                            stat.accent === "gold"
                                ? "border-[#F2B84B]/20 bg-[#F2B84B]/10 text-[#F2B84B]"
                                : stat.accent === "green"
                                    ? "border-[#7C9A82]/20 bg-[#7C9A82]/10 text-[#7C9A82]"
                                    : "border-[#F3EEDD]/15 bg-[#F3EEDD]/5 text-[#F3EEDD]/70";

                        const hoverBorder =
                            stat.accent === "green"
                                ? "hover:border-[#7C9A82]/30"
                                : "hover:border-[#F2B84B]/30";

                        return (
                            <div
                                key={stat.title}
                                className={`
                                    group
                                    rounded-2xl
                                    border
                                    border-[#F3EEDD]/10
                                    bg-[#1B241E]
                                    p-5
                                    shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                                    transition-all
                                    duration-300
                                    motion-safe:hover:-translate-y-1
                                    ${hoverBorder}
                                `}
                            >

                                <div className="flex items-start justify-between">

                                    <div>

                                        <p
                                            className="
                                                text-xs
                                                font-medium
                                                text-[#F3EEDD]/45
                                            "
                                        >
                                            {stat.title}
                                        </p>

                                        <h2
                                            className="
                                                mt-2
                                                font-['JetBrains_Mono']
                                                text-2xl
                                                font-semibold
                                                text-[#F3EEDD]
                                            "
                                        >
                                            {stat.value}
                                        </h2>

                                        <div className="mt-3 flex items-center gap-1.5">

                                            <TrendingUp
                                                size={13}
                                                className={
                                                    stat.accent === "green"
                                                        ? "text-[#7C9A82]"
                                                        : "text-[#F2B84B]"
                                                }
                                            />

                                            <span
                                                className={`
                                                    text-[11px]
                                                    font-semibold
                                                    ${stat.accent === "green"
                                                        ? "text-[#7C9A82]"
                                                        : "text-[#F2B84B]"
                                                    }
                                                `}
                                            >
                                                {stat.change}
                                            </span>

                                            <span className="text-[11px] text-[#F3EEDD]/30">
                                                {stat.description}
                                            </span>

                                        </div>

                                    </div>

                                    <div
                                        className={`
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border
                                            ${iconContainer}
                                        `}
                                    >
                                        <Icon size={21} />
                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

                {/* =================================================
                    MAIN GRID
                ================================================== */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-5
                        xl:grid-cols-3
                    "
                >

                    {/* =================================================
                        RECENT COURSES
                    ================================================== */}

                    <section
                        className="
                            overflow-hidden
                            rounded-2xl
                            border
                            border-[#E4DED4]
                            bg-[#F8F5EF]
                            shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                            xl:col-span-2
                        "
                    >

                        {/* SECTION HEADER */}

                        <div
                            className="
                                flex
                                flex-col
                                gap-3
                                border-b
                                border-[#E7DED5]
                                bg-[#FBF9F5]
                                p-6
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >

                            <div>

                                <div className="flex items-center gap-2">

                                    <span
                                        className="
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-[#F2B84B]
                                        "
                                    />

                                    <p
                                        className="
                                            font-['JetBrains_Mono']
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.18em]
                                            text-[#8C7134]
                                        "
                                    >
                                        Courses
                                    </p>

                                </div>

                                <h2
                                    className="
                                        mt-1
                                        font-['Space_Grotesk']
                                        text-xl
                                        font-semibold
                                        text-[#303B32]
                                    "
                                >
                                    Recent Courses
                                </h2>

                                <p className="mt-1 text-xs text-[#7C817B]">
                                    Recently created courses.
                                </p>

                            </div>

                            <button
                                type="button"
                                className="
                                    flex
                                    items-center
                                    gap-1
                                    text-sm
                                    font-semibold
                                    text-[#63816A]
                                    transition
                                    hover:text-[#4E6854]
                                "
                            >
                                View All

                                <ArrowUpRight size={16} />

                            </button>

                        </div>

                        {/* COURSE LIST */}

                        <div className="divide-y divide-[#E7DED5]">

                            {recentCourses.map((course) => (

                                <div
                                    key={course.name}
                                    className="
                                        flex
                                        flex-col
                                        gap-4
                                        p-5
                                        transition
                                        hover:bg-[#FFFDF9]
                                        sm:flex-row
                                        sm:items-center
                                        sm:justify-between
                                    "
                                >

                                    <div className="flex items-center gap-4">

                                        <div
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                border
                                                border-[#F2B84B]/30
                                                bg-[#F7E6B9]
                                                text-[#6E5926]
                                            "
                                        >
                                            <BookOpen size={20} />
                                        </div>

                                        <div>

                                            <h3
                                                className="
                                                    font-['Space_Grotesk']
                                                    text-sm
                                                    font-semibold
                                                    text-[#303B32]
                                                "
                                            >
                                                {course.name}
                                            </h3>

                                            <p className="mt-1 text-xs text-[#8A8E89]">
                                                By {course.teacher}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="flex items-center gap-6">

                                        <div className="text-right">

                                            <p
                                                className="
                                                    font-['JetBrains_Mono']
                                                    text-sm
                                                    font-semibold
                                                    text-[#536058]
                                                "
                                            >
                                                {course.students}
                                            </p>

                                            <p className="text-[11px] text-[#8A8E89]">
                                                Students
                                            </p>

                                        </div>

                                        <span
                                            className={`
                                                inline-flex
                                                items-center
                                                gap-1.5
                                                rounded-full
                                                px-3
                                                py-1
                                                text-xs
                                                font-semibold
                                                ${course.status === "Active"
                                                    ? "bg-[#EDF6EF] text-[#64856C]"
                                                    : "bg-[#F5F1E9] text-[#817667]"
                                                }
                                            `}
                                        >

                                            <span
                                                className={`
                                                    h-1.5
                                                    w-1.5
                                                    rounded-full
                                                    ${course.status === "Active"
                                                        ? "bg-[#7C9A82]"
                                                        : "bg-[#B9AA95]"
                                                    }
                                                `}
                                            />

                                            {course.status}

                                        </span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </section>

                    {/* =================================================
                        QUICK ACTIONS
                    ================================================== */}

                    <section
                        className="
                            rounded-2xl
                            border
                            border-[#E4DED4]
                            bg-[#F8F5EF]
                            p-6
                            shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                        "
                    >

                        <div className="flex items-center gap-2">

                            <span
                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-[#7C9A82]
                                "
                            />

                            <p
                                className="
                                    font-['JetBrains_Mono']
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.18em]
                                    text-[#63816A]
                                "
                            >
                                Shortcuts
                            </p>

                        </div>

                        <h2
                            className="
                                mt-2
                                font-['Space_Grotesk']
                                text-xl
                                font-semibold
                                text-[#303B32]
                            "
                        >
                            Quick Actions
                        </h2>

                        <p className="mt-1 text-xs text-[#7C817B]">
                            Manage your organization quickly.
                        </p>

                        <div className="mt-6 space-y-3">

                            {/* CREATE COURSE */}

                            <button
                                type="button"
                                className="
                                    flex
                                    w-full
                                    items-center
                                    gap-4
                                    rounded-xl
                                    border
                                    border-[#E4DED4]
                                    bg-[#FBF9F5]
                                    p-4
                                    text-left
                                    transition-all
                                    duration-300
                                    hover:border-[#F2B84B]/40
                                    hover:bg-[#FFF9E9]
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-[#F2B84B]/20
                                        bg-[#F7E6B9]
                                        text-[#8C7134]
                                    "
                                >
                                    <Plus size={19} />
                                </div>

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-[#303B32]
                                        "
                                    >
                                        Create Course
                                    </p>

                                    <p className="mt-0.5 text-xs text-[#8A8E89]">
                                        Add a new course
                                    </p>

                                </div>

                            </button>

                            {/* ADD STUDENT */}

                            <button
                                type="button"
                                className="
                                    flex
                                    w-full
                                    items-center
                                    gap-4
                                    rounded-xl
                                    border
                                    border-[#E4DED4]
                                    bg-[#FBF9F5]
                                    p-4
                                    text-left
                                    transition-all
                                    duration-300
                                    hover:border-[#7C9A82]/40
                                    hover:bg-[#F3F8F3]
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-[#7C9A82]/20
                                        bg-[#EDF4EE]
                                        text-[#63816A]
                                    "
                                >
                                    <UserPlus size={19} />
                                </div>

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-[#303B32]
                                        "
                                    >
                                        Add Student
                                    </p>

                                    <p className="mt-0.5 text-xs text-[#8A8E89]">
                                        Register a new student
                                    </p>

                                </div>

                            </button>

                            {/* ADD TEACHER */}

                            <button
                                type="button"
                                className="
                                    flex
                                    w-full
                                    items-center
                                    gap-4
                                    rounded-xl
                                    border
                                    border-[#E4DED4]
                                    bg-[#FBF9F5]
                                    p-4
                                    text-left
                                    transition-all
                                    duration-300
                                    hover:border-[#F2B84B]/40
                                    hover:bg-[#FFF9E9]
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-[#F2B84B]/20
                                        bg-[#F7E6B9]
                                        text-[#8C7134]
                                    "
                                >
                                    <GraduationCap size={19} />
                                </div>

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-[#303B32]
                                        "
                                    >
                                        Add Teacher
                                    </p>

                                    <p className="mt-0.5 text-xs text-[#8A8E89]">
                                        Add teaching staff
                                    </p>

                                </div>

                            </button>

                        </div>

                    </section>

                </div>

                {/* =================================================
                    BOTTOM GRID
                ================================================== */}

                <div
                    className="
                        mt-5
                        grid
                        grid-cols-1
                        gap-5
                        xl:grid-cols-2
                    "
                >

                    {/* =================================================
                        RECENT STUDENTS
                    ================================================== */}

                    <section
                        className="
                            overflow-hidden
                            rounded-2xl
                            border
                            border-[#E4DED4]
                            bg-[#F8F5EF]
                            shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                border-b
                                border-[#E7DED5]
                                bg-[#FBF9F5]
                                p-6
                            "
                        >

                            <div>

                                <div className="flex items-center gap-2">

                                    <span
                                        className="
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-[#F2B84B]
                                        "
                                    />

                                    <p
                                        className="
                                            font-['JetBrains_Mono']
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.18em]
                                            text-[#8C7134]
                                        "
                                    >
                                        Students
                                    </p>

                                </div>

                                <h2
                                    className="
                                        mt-1
                                        font-['Space_Grotesk']
                                        text-xl
                                        font-semibold
                                        text-[#303B32]
                                    "
                                >
                                    Recent Students
                                </h2>

                                <p className="mt-1 text-xs text-[#7C817B]">
                                    Latest students registered.
                                </p>

                            </div>

                            <button
                                type="button"
                                className="
                                    text-sm
                                    font-semibold
                                    text-[#63816A]
                                    transition
                                    hover:text-[#4E6854]
                                "
                            >
                                View All
                            </button>

                        </div>

                        <div className="divide-y divide-[#E7DED5]">

                            {recentStudents.map((student) => (

                                <div
                                    key={student.email}
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        gap-4
                                        p-5
                                        transition
                                        hover:bg-[#FFFDF9]
                                    "
                                >

                                    <div className="flex items-center gap-3">

                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                items-center
                                                justify-center
                                                rounded-xl
                                                border
                                                border-[#7C9A82]/20
                                                bg-[#EDF4EE]
                                                text-sm
                                                font-bold
                                                text-[#63816A]
                                            "
                                        >
                                            {student.name.charAt(0)}
                                        </div>

                                        <div>

                                            <p
                                                className="
                                                    font-['Space_Grotesk']
                                                    text-sm
                                                    font-semibold
                                                    text-[#303B32]
                                                "
                                            >
                                                {student.name}
                                            </p>

                                            <p className="mt-0.5 text-xs text-[#8A8E89]">
                                                {student.email}
                                            </p>

                                        </div>

                                    </div>

                                    <p
                                        className="
                                            hidden
                                            text-xs
                                            font-medium
                                            text-[#6F7771]
                                            sm:block
                                        "
                                    >
                                        {student.course}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </section>

                    {/* =================================================
                        ORGANIZATION OVERVIEW
                    ================================================== */}

                    <section
                        className="
                            rounded-2xl
                            border
                            border-[#E4DED4]
                            bg-[#F8F5EF]
                            p-6
                            shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <div className="flex items-center gap-2">

                                    <span
                                        className="
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-[#7C9A82]
                                        "
                                    />

                                    <p
                                        className="
                                            font-['JetBrains_Mono']
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.18em]
                                            text-[#63816A]
                                        "
                                    >
                                        Activity
                                    </p>

                                </div>

                                <h2
                                    className="
                                        mt-1
                                        font-['Space_Grotesk']
                                        text-xl
                                        font-semibold
                                        text-[#303B32]
                                    "
                                >
                                    Organization Overview
                                </h2>

                                <p className="mt-1 text-xs text-[#7C817B]">
                                    Current platform activity.
                                </p>

                            </div>

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#7C9A82]/20
                                    bg-[#EDF4EE]
                                    text-[#63816A]
                                "
                            >
                                <Activity size={18} />
                            </div>

                        </div>

                        {/* PROGRESS */}

                        <div className="mt-7 space-y-6">

                            {/* STUDENT ACTIVITY */}

                            <div>

                                <div className="mb-2 flex justify-between">

                                    <span
                                        className="
                                            text-sm
                                            font-medium
                                            text-[#536058]
                                        "
                                    >
                                        Student Activity
                                    </span>

                                    <span
                                        className="
                                            font-['JetBrains_Mono']
                                            text-xs
                                            font-bold
                                            text-[#303B32]
                                        "
                                    >
                                        82%
                                    </span>

                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-[#E5E0D7]">

                                    <div
                                        className="
                                            h-full
                                            w-[82%]
                                            rounded-full
                                            bg-[#7C9A82]
                                        "
                                    />

                                </div>

                            </div>

                            {/* COURSE COMPLETION */}

                            <div>

                                <div className="mb-2 flex justify-between">

                                    <span
                                        className="
                                            text-sm
                                            font-medium
                                            text-[#536058]
                                        "
                                    >
                                        Course Completion
                                    </span>

                                    <span
                                        className="
                                            font-['JetBrains_Mono']
                                            text-xs
                                            font-bold
                                            text-[#303B32]
                                        "
                                    >
                                        68%
                                    </span>

                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-[#E5E0D7]">

                                    <div
                                        className="
                                            h-full
                                            w-[68%]
                                            rounded-full
                                            bg-[#F2B84B]
                                        "
                                    />

                                </div>

                            </div>

                            {/* TEACHER ACTIVITY */}

                            <div>

                                <div className="mb-2 flex justify-between">

                                    <span
                                        className="
                                            text-sm
                                            font-medium
                                            text-[#536058]
                                        "
                                    >
                                        Teacher Activity
                                    </span>

                                    <span
                                        className="
                                            font-['JetBrains_Mono']
                                            text-xs
                                            font-bold
                                            text-[#303B32]
                                        "
                                    >
                                        74%
                                    </span>

                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-[#E5E0D7]">

                                    <div
                                        className="
                                            h-full
                                            w-[74%]
                                            rounded-full
                                            bg-[#9E8B54]
                                        "
                                    />

                                </div>

                            </div>

                        </div>

                        {/* ACTIVITY MESSAGE */}

                        <div
                            className="
                                mt-8
                                rounded-xl
                                border
                                border-[#E4DED4]
                                bg-[#FBF9F5]
                                p-4
                            "
                        >

                            <div className="flex items-start gap-3">

                                <div className="mt-0.5 text-[#8C7134]">
                                    <TrendingUp size={18} />
                                </div>

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-[#303B32]
                                        "
                                    >
                                        Platform activity is growing
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            leading-relaxed
                                            text-[#7C817B]
                                        "
                                    >
                                        Student enrollments and course
                                        activity have increased this month.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>

                </div>

                {/* =================================================
                    FOOTER NOTE
                ================================================== */}

                <div className="mt-5 flex items-center justify-between">

                    <p
                        className="
                            font-['JetBrains_Mono']
                            text-[9px]
                            uppercase
                            tracking-wider
                            text-[#F3EEDD]/25
                        "
                    >
                        Shiyora Administration
                    </p>

                    <p
                        className="
                            font-['JetBrains_Mono']
                            text-[9px]
                            uppercase
                            tracking-wider
                            text-[#F3EEDD]/25
                        "
                    >
                        Organization Dashboard
                    </p>

                </div>

            </div>

        </main>
    );
};

export default Dashboard;