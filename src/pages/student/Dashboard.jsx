import React from "react";
import {
    BookOpen,
    PlayCircle,
    Clock3,
    Award,
    TrendingUp,
    ClipboardList,
    ArrowRight,
    CheckCircle2,
    CalendarDays,
    Flame,
    Target,
    BarChart3,
    ChevronRight,
} from "lucide-react";

const Dashboard = () => {
    // =========================================================
    // SAMPLE DATA
    // =========================================================

    const stats = [
        {
            title: "Enrolled Courses",
            value: "06",
            description: "Active courses",
            icon: BookOpen,
        },
        {
            title: "In Progress",
            value: "03",
            description: "Courses learning",
            icon: PlayCircle,
        },
        {
            title: "Completed",
            value: "02",
            description: "Courses finished",
            icon: CheckCircle2,
        },
        {
            title: "Certificates",
            value: "02",
            description: "Certificates earned",
            icon: Award,
        },
    ];

    const courses = [
        {
            title: "Full Stack Web Development",
            instructor: "Rahul Sharma",
            progress: 78,
            lessons: "18 / 24",
            duration: "12h 40m",
            icon: "FS",
        },
        {
            title: "Java Programming",
            instructor: "Ankit Verma",
            progress: 56,
            lessons: "14 / 25",
            duration: "10h 20m",
            icon: "JP",
        },
        {
            title: "Database Management System",
            instructor: "Priya Singh",
            progress: 34,
            lessons: "08 / 22",
            duration: "8h 45m",
            icon: "DB",
        },
    ];

    const assignments = [
        {
            title: "React Portfolio Project",
            course: "Full Stack Web Development",
            due: "Today",
            status: "Pending",
        },
        {
            title: "Java OOP Assignment",
            course: "Java Programming",
            due: "Tomorrow",
            status: "Pending",
        },
        {
            title: "SQL Queries Practice",
            course: "Database Management System",
            due: "Sep 05",
            status: "Upcoming",
        },
    ];

    // =========================================================
    // COMPONENT
    // =========================================================

    return (
        <div className="space-y-8">

            {/* =====================================================
                WELCOME SECTION
            ====================================================== */}

            <section
                className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[#7C9A82]/20
                    bg-[#1B241E]
                    p-6
                    sm:p-8
                "
            >
                {/* Background Glow */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-24
                        -top-24
                        h-72
                        w-72
                        rounded-full
                        bg-[#F2B84B]/10
                        blur-[90px]
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -bottom-32
                        -left-20
                        h-64
                        w-64
                        rounded-full
                        bg-[#7C9A82]/10
                        blur-[90px]
                    "
                />

                <div className="relative z-10">

                    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

                        <div>

                            <div
                                className="
                                    mb-3
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-[#F2B84B]/20
                                    bg-[#F2B84B]/10
                                    px-3
                                    py-1.5
                                    text-xs
                                    font-medium
                                    text-[#F2B84B]
                                "
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-[#F2B84B]" />

                                Learning Dashboard
                            </div>

                            <h1
                                className="
                                    font-['Space_Grotesk']
                                    text-3xl
                                    font-bold
                                    tracking-tight
                                    text-[#F3EEDD]
                                    sm:text-4xl
                                "
                            >
                                Welcome back, Student!
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#F3EEDD]/60 sm:text-base">
                                Continue your learning journey, track your
                                progress, and stay on top of your courses.
                            </p>

                        </div>


                        {/* Learning Streak */}

                        <div
                            className="
                                flex
                                w-fit
                                items-center
                                gap-4
                                rounded-2xl
                                border
                                border-[#F2B84B]/20
                                bg-[#161F19]/70
                                px-5
                                py-4
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-[#F2B84B]/10
                                    text-[#F2B84B]
                                "
                            >
                                <Flame size={23} />
                            </div>

                            <div>
                                <p className="text-xs text-[#F3EEDD]/45">
                                    Learning Streak
                                </p>

                                <p className="mt-0.5 text-lg font-bold text-[#F3EEDD]">
                                    12 Days
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
                STATS
            ====================================================== */}

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={stat.title}
                            className="
                                group
                                rounded-2xl
                                border
                                border-[#7C9A82]/15
                                bg-[#1B241E]
                                p-5
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-[#F2B84B]/30
                            "
                        >

                            <div className="flex items-start justify-between">

                                <div>
                                    <p className="text-sm text-[#F3EEDD]/50">
                                        {stat.title}
                                    </p>

                                    <p className="mt-2 text-3xl font-bold text-[#F3EEDD]">
                                        {stat.value}
                                    </p>
                                </div>

                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-[#F2B84B]/10
                                        text-[#F2B84B]
                                        transition
                                        group-hover:bg-[#F2B84B]
                                        group-hover:text-[#161F19]
                                    "
                                >
                                    <Icon size={21} />
                                </div>

                            </div>

                            <p className="mt-3 text-xs text-[#7C9A82]">
                                {stat.description}
                            </p>

                        </div>
                    );
                })}

            </section>


            {/* =====================================================
                MAIN GRID
            ====================================================== */}

            <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">

                {/* =================================================
                    CONTINUE LEARNING
                ================================================= */}

                <div
                    className="
                        rounded-2xl
                        border
                        border-[#7C9A82]/15
                        bg-[#1B241E]
                        p-5
                        sm:p-6
                    "
                >

                    <div className="mb-6 flex items-center justify-between">

                        <div>
                            <h2 className="text-lg font-semibold text-[#F3EEDD]">
                                Continue Learning
                            </h2>

                            <p className="mt-1 text-xs text-[#F3EEDD]/45">
                                Pick up where you left off
                            </p>
                        </div>

                        <button
                            type="button"
                            className="
                                flex
                                items-center
                                gap-1
                                text-sm
                                font-medium
                                text-[#F2B84B]
                                transition
                                hover:text-[#F3EEDD]
                            "
                        >
                            View All
                            <ArrowRight size={16} />
                        </button>

                    </div>


                    <div className="space-y-4">

                        {courses.map((course) => (
                            <div
                                key={course.title}
                                className="
                                    rounded-2xl
                                    border
                                    border-[#7C9A82]/10
                                    bg-[#161F19]/60
                                    p-4
                                    transition
                                    hover:border-[#7C9A82]/25
                                "
                            >

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                                    {/* Course Icon */}

                                    <div
                                        className="
                                            flex
                                            h-14
                                            w-14
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-[#F2B84B]/10
                                            text-sm
                                            font-bold
                                            text-[#F2B84B]
                                        "
                                    >
                                        {course.icon}
                                    </div>


                                    {/* Course Information */}

                                    <div className="min-w-0 flex-1">

                                        <div className="flex flex-col justify-between gap-2 sm:flex-row">

                                            <div>
                                                <h3 className="truncate font-semibold text-[#F3EEDD]">
                                                    {course.title}
                                                </h3>

                                                <p className="mt-1 text-xs text-[#F3EEDD]/45">
                                                    By {course.instructor}
                                                </p>
                                            </div>

                                            <span className="text-sm font-semibold text-[#F2B84B]">
                                                {course.progress}%
                                            </span>

                                        </div>


                                        {/* Progress */}

                                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#7C9A82]/15">

                                            <div
                                                className="
                                                    h-full
                                                    rounded-full
                                                    bg-[#F2B84B]
                                                    transition-all
                                                "
                                                style={{
                                                    width: `${course.progress}%`,
                                                }}
                                            />

                                        </div>


                                        {/* Course Meta */}

                                        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[#F3EEDD]/40">

                                            <span className="flex items-center gap-1.5">
                                                <BookOpen size={13} />
                                                {course.lessons} lessons
                                            </span>

                                            <span className="flex items-center gap-1.5">
                                                <Clock3 size={13} />
                                                {course.duration}
                                            </span>

                                        </div>

                                    </div>


                                    {/* Continue Button */}

                                    <button
                                        type="button"
                                        className="
                                            flex
                                            shrink-0
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-xl
                                            bg-[#F2B84B]
                                            px-4
                                            py-2.5
                                            text-sm
                                            font-semibold
                                            text-[#161F19]
                                            transition
                                            hover:bg-[#F3EEDD]
                                        "
                                    >
                                        <PlayCircle size={16} />
                                        Continue
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>


                {/* =================================================
                    WEEKLY GOAL
                ================================================= */}

                <div
                    className="
                        rounded-2xl
                        border
                        border-[#7C9A82]/15
                        bg-[#1B241E]
                        p-5
                        sm:p-6
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
                                bg-[#7C9A82]/10
                                text-[#7C9A82]
                            "
                        >
                            <Target size={20} />
                        </div>

                        <div>
                            <h2 className="font-semibold text-[#F3EEDD]">
                                Weekly Goal
                            </h2>

                            <p className="text-xs text-[#F3EEDD]/45">
                                Keep your momentum
                            </p>
                        </div>

                    </div>


                    {/* Circular-style percentage */}

                    <div className="mt-7 flex justify-center">

                        <div
                            className="
                                flex
                                h-36
                                w-36
                                items-center
                                justify-center
                                rounded-full
                                border-[10px]
                                border-[#7C9A82]/15
                                border-t-[#F2B84B]
                                border-r-[#F2B84B]
                            "
                        >
                            <div className="text-center">

                                <p className="text-3xl font-bold text-[#F3EEDD]">
                                    72%
                                </p>

                                <p className="text-xs text-[#F3EEDD]/40">
                                    Completed
                                </p>

                            </div>
                        </div>

                    </div>


                    <div className="mt-7 space-y-4">

                        <div className="flex items-center justify-between">

                            <span className="text-sm text-[#F3EEDD]/55">
                                Learning Time
                            </span>

                            <span className="font-semibold text-[#F3EEDD]">
                                7h 12m
                            </span>

                        </div>

                        <div className="flex items-center justify-between">

                            <span className="text-sm text-[#F3EEDD]/55">
                                Weekly Target
                            </span>

                            <span className="font-semibold text-[#F3EEDD]">
                                10h
                            </span>

                        </div>

                        <div className="flex items-center justify-between">

                            <span className="text-sm text-[#F3EEDD]/55">
                                Lessons Done
                            </span>

                            <span className="font-semibold text-[#F3EEDD]">
                                24
                            </span>

                        </div>

                    </div>


                    <button
                        type="button"
                        className="
                            mt-6
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-[#7C9A82]/20
                            bg-[#161F19]
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-[#F3EEDD]
                            transition
                            hover:border-[#F2B84B]/30
                            hover:text-[#F2B84B]
                        "
                    >
                        <BarChart3 size={17} />
                        View Progress
                    </button>

                </div>

            </section>


            {/* =====================================================
                BOTTOM GRID
            ====================================================== */}

            <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">

                {/* =================================================
                    UPCOMING ASSIGNMENTS
                ================================================= */}

                <div
                    className="
                        rounded-2xl
                        border
                        border-[#7C9A82]/15
                        bg-[#1B241E]
                        p-5
                        sm:p-6
                    "
                >

                    <div className="mb-6 flex items-center justify-between">

                        <div>
                            <h2 className="text-lg font-semibold text-[#F3EEDD]">
                                Upcoming Assignments
                            </h2>

                            <p className="mt-1 text-xs text-[#F3EEDD]/45">
                                Stay ahead of your deadlines
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
                                bg-[#F2B84B]/10
                                text-[#F2B84B]
                            "
                        >
                            <ClipboardList size={19} />
                        </div>

                    </div>


                    <div className="space-y-3">

                        {assignments.map((assignment) => (
                            <div
                                key={assignment.title}
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    rounded-xl
                                    border
                                    border-[#7C9A82]/10
                                    bg-[#161F19]/50
                                    p-4
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-[#7C9A82]/10
                                        text-[#7C9A82]
                                    "
                                >
                                    <ClipboardList size={17} />
                                </div>


                                <div className="min-w-0 flex-1">

                                    <h3 className="truncate text-sm font-medium text-[#F3EEDD]">
                                        {assignment.title}
                                    </h3>

                                    <p className="mt-1 truncate text-xs text-[#F3EEDD]/40">
                                        {assignment.course}
                                    </p>

                                </div>


                                <div className="shrink-0 text-right">

                                    <div
                                        className={`
                                            flex
                                            items-center
                                            gap-1
                                            text-xs
                                            font-medium
                                            ${assignment.due === "Today"
                                                ? "text-[#D6402C]"
                                                : "text-[#F2B84B]"
                                            }
                                        `}
                                    >
                                        <CalendarDays size={13} />
                                        {assignment.due}
                                    </div>

                                    <p className="mt-1 text-[10px] text-[#F3EEDD]/30">
                                        {assignment.status}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>


                    <button
                        type="button"
                        className="
                            mt-5
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-[#7C9A82]/15
                            py-2.5
                            text-sm
                            font-medium
                            text-[#7C9A82]
                            transition
                            hover:border-[#F2B84B]/25
                            hover:text-[#F2B84B]
                        "
                    >
                        View All Assignments
                        <ChevronRight size={16} />
                    </button>

                </div>


                {/* =================================================
                    LEARNING ACTIVITY
                ================================================= */}

                <div
                    className="
                        rounded-2xl
                        border
                        border-[#7C9A82]/15
                        bg-[#1B241E]
                        p-5
                        sm:p-6
                    "
                >

                    <div className="mb-6 flex items-center justify-between">

                        <div>
                            <h2 className="text-lg font-semibold text-[#F3EEDD]">
                                Learning Activity
                            </h2>

                            <p className="mt-1 text-xs text-[#F3EEDD]/45">
                                Your activity this week
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
                                bg-[#7C9A82]/10
                                text-[#7C9A82]
                            "
                        >
                            <TrendingUp size={19} />
                        </div>

                    </div>


                    {/* Activity Bars */}

                    <div className="flex h-44 items-end justify-between gap-3">

                        {[
                            { day: "Mon", value: 55 },
                            { day: "Tue", value: 75 },
                            { day: "Wed", value: 45 },
                            { day: "Thu", value: 90 },
                            { day: "Fri", value: 65 },
                            { day: "Sat", value: 80 },
                            { day: "Sun", value: 35 },
                        ].map((item) => (
                            <div
                                key={item.day}
                                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                            >

                                <div
                                    className="
                                        relative
                                        flex
                                        w-full
                                        max-w-8
                                        items-end
                                        rounded-t-lg
                                        bg-[#7C9A82]/10
                                    "
                                    style={{
                                        height: `${item.value}%`,
                                    }}
                                >

                                    <div
                                        className="
                                            w-full
                                            rounded-t-lg
                                            bg-[#F2B84B]
                                        "
                                        style={{
                                            height: "45%",
                                        }}
                                    />

                                </div>

                                <span className="text-[10px] text-[#F3EEDD]/35">
                                    {item.day}
                                </span>

                            </div>
                        ))}

                    </div>


                    <div className="mt-6 grid grid-cols-3 gap-3">

                        <div className="rounded-xl bg-[#161F19] p-3">
                            <p className="text-[10px] text-[#F3EEDD]/35">
                                This Week
                            </p>
                            <p className="mt-1 text-sm font-semibold text-[#F3EEDD]">
                                7h 12m
                            </p>
                        </div>

                        <div className="rounded-xl bg-[#161F19] p-3">
                            <p className="text-[10px] text-[#F3EEDD]/35">
                                Avg. Daily
                            </p>
                            <p className="mt-1 text-sm font-semibold text-[#F3EEDD]">
                                1h 02m
                            </p>
                        </div>

                        <div className="rounded-xl bg-[#161F19] p-3">
                            <p className="text-[10px] text-[#F3EEDD]/35">
                                Best Day
                            </p>
                            <p className="mt-1 text-sm font-semibold text-[#F2B84B]">
                                Thursday
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                EXPLORE COURSES CTA
            ====================================================== */}

            <section
                className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#F2B84B]/20
                    bg-[#1B241E]
                    p-6
                    sm:p-8
                "
            >

                <div
                    className="
                        pointer-events-none
                        absolute
                        right-0
                        top-0
                        h-full
                        w-1/2
                        bg-[#F2B84B]/[0.03]
                    "
                />

                <div className="relative z-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">

                    <div>

                        <div className="flex items-center gap-2 text-[#F2B84B]">
                            <Award size={18} />

                            <span className="text-xs font-semibold uppercase tracking-wider">
                                Keep Learning
                            </span>
                        </div>

                        <h2 className="mt-2 text-xl font-bold text-[#F3EEDD] sm:text-2xl">
                            Ready to learn something new?
                        </h2>

                        <p className="mt-2 text-sm text-[#F3EEDD]/50">
                            Explore new courses and build skills that move you forward.
                        </p>

                    </div>


                    <button
                        type="button"
                        className="
                            flex
                            shrink-0
                            items-center
                            gap-2
                            rounded-xl
                            bg-[#F2B84B]
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-[#161F19]
                            transition
                            hover:bg-[#F3EEDD]
                        "
                    >
                        Explore Courses
                        <ArrowRight size={17} />
                    </button>

                </div>

            </section>

        </div>
    );
};

export default Dashboard;