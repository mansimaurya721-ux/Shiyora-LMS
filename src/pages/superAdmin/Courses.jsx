import React from "react";
import {
    BookOpen,
    Users,
    Building2,
    Search,
    Plus,
    MoreVertical,
    CheckCircle,
    Clock,
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * SHIYORA DESIGN LANGUAGE
 * "The Study Desk"
 *
 * Dark chalkboard-green background
 * Warm ivory cards
 * Mustard highlighter accents
 * Red pen accents
 * Muted green secondary accents
 *
 * Fonts:
 * Space Grotesk  -> headings
 * Inter          -> normal text
 * JetBrains Mono -> numbers / course IDs
 * ---------------------------------------------------------------------------
 */

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";

const Courses = () => {
    const courses = [
        {
            title: "Full Stack Web Development",
            instructor: "Rahul Sharma",
            organization: "Bright Future Academy",
            students: 245,
            status: "Published",
        },
        {
            title: "Java Programming",
            instructor: "Priya Verma",
            organization: "TechVision Institute",
            students: 180,
            status: "Published",
        },
        {
            title: "Database Management System",
            instructor: "Amit Singh",
            organization: "SkillHub Learning",
            students: 126,
            status: "Pending",
        },
        {
            title: "Python for Beginners",
            instructor: "Neha Gupta",
            organization: "Knowledge Point",
            students: 210,
            status: "Published",
        },
    ];

    return (
        <main
            className="
                min-h-screen
                overflow-hidden
                bg-[#161F19]
                font-['Inter']
                text-[#F3EEDD]
                p-4
                md:p-6
                lg:p-8
            "
        >
            <style>{FONT_IMPORTS}</style>

            {/* ============================================================
                BACKGROUND GLOW
            ============================================================ */}

            <div
                className="
                    pointer-events-none
                    fixed
                    -left-40
                    -top-40
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#F2B84B]/[0.07]
                    blur-[140px]
                "
            />

            <div
                className="
                    pointer-events-none
                    fixed
                    bottom-0
                    right-0
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-[#7C9A82]/[0.06]
                    blur-[150px]
                "
            />

            {/* ============================================================
                CHALK DUST
            ============================================================ */}

            <div
                className="
                    pointer-events-none
                    fixed
                    inset-0
                    opacity-[0.07]
                "
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(243,238,221,0.6) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* ========================================================
                    HEADER
                ======================================================== */}

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
                                font-['JetBrains_Mono']
                                text-[11px]
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-[#F2B84B]
                            "
                        >
                            Course Management
                        </p>

                        <h1
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
                            Courses
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
                            Manage and monitor courses across the
                            Shiyora learning platform.
                        </p>

                    </div>

                    {/* ADD COURSE */}

                    <button
                        type="button"
                        className="
                            group
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            bg-[#F2B84B]
                            px-5
                            py-3
                            font-['Space_Grotesk']
                            text-sm
                            font-semibold
                            text-[#161F19]
                            shadow-[0_0_30px_rgba(242,184,75,0.12)]
                            transition-all
                            duration-300
                            hover:bg-[#f7c968]
                            motion-safe:hover:-translate-y-1
                            focus-visible:outline
                            focus-visible:outline-2
                            focus-visible:outline-offset-2
                            focus-visible:outline-[#F2B84B]
                        "
                    >
                        <Plus
                            size={18}
                            strokeWidth={2.2}
                        />

                        Add Course

                        <span
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        >
                            →
                        </span>
                    </button>

                </div>


                {/* ========================================================
                    STATISTICS
                ======================================================== */}

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

                    {/* TOTAL COURSES */}

                    <div
                        className="
                            rounded-xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-5
                            shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#F2B84B]/30
                        "
                    >

                        <div className="flex items-start justify-between">

                            <div>

                                <p
                                    className="
                                        text-xs
                                        text-[#F3EEDD]/45
                                    "
                                >
                                    Total Courses
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
                                    1,245
                                </h2>

                            </div>

                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    border-[#F2B84B]/20
                                    bg-[#F2B84B]/10
                                    text-[#F2B84B]
                                "
                            >
                                <BookOpen size={21} />
                            </div>

                        </div>

                        <div
                            className="
                                mt-4
                                h-1
                                overflow-hidden
                                rounded-full
                                bg-[#F3EEDD]/10
                            "
                        >
                            <div
                                className="
                                    h-full
                                    w-[82%]
                                    rounded-full
                                    bg-[#F2B84B]
                                "
                            />
                        </div>

                    </div>


                    {/* PUBLISHED */}

                    <div
                        className="
                            rounded-xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-5
                            shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#7C9A82]/40
                        "
                    >

                        <div className="flex items-start justify-between">

                            <div>

                                <p
                                    className="
                                        text-xs
                                        text-[#F3EEDD]/45
                                    "
                                >
                                    Published
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
                                    1,180
                                </h2>

                            </div>

                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    border-[#7C9A82]/25
                                    bg-[#7C9A82]/10
                                    text-[#7C9A82]
                                "
                            >
                                <CheckCircle size={21} />
                            </div>

                        </div>

                        <div
                            className="
                                mt-4
                                h-1
                                overflow-hidden
                                rounded-full
                                bg-[#F3EEDD]/10
                            "
                        >
                            <div
                                className="
                                    h-full
                                    w-[94%]
                                    rounded-full
                                    bg-[#7C9A82]
                                "
                            />
                        </div>

                    </div>


                    {/* PENDING */}

                    <div
                        className="
                            rounded-xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-5
                            shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#D6402C]/30
                        "
                    >

                        <div className="flex items-start justify-between">

                            <div>

                                <p
                                    className="
                                        text-xs
                                        text-[#F3EEDD]/45
                                    "
                                >
                                    Pending Review
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
                                    65
                                </h2>

                            </div>

                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    border-[#F2B84B]/25
                                    bg-[#F2B84B]/10
                                    text-[#F2B84B]
                                "
                            >
                                <Clock size={21} />
                            </div>

                        </div>

                        <div
                            className="
                                mt-4
                                h-1
                                overflow-hidden
                                rounded-full
                                bg-[#F3EEDD]/10
                            "
                        >
                            <div
                                className="
                                    h-full
                                    w-[18%]
                                    rounded-full
                                    bg-[#D6402C]
                                "
                            />
                        </div>

                    </div>


                    {/* STUDENTS */}

                    <div
                        className="
                            rounded-xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-5
                            shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#D6402C]/30
                        "
                    >

                        <div className="flex items-start justify-between">

                            <div>

                                <p
                                    className="
                                        text-xs
                                        text-[#F3EEDD]/45
                                    "
                                >
                                    Enrolled Students
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
                                    18,420
                                </h2>

                            </div>

                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    border-[#D6402C]/20
                                    bg-[#D6402C]/10
                                    text-[#D6402C]
                                "
                            >
                                <Users size={21} />
                            </div>

                        </div>

                        <p
                            className="
                                mt-4
                                font-['JetBrains_Mono']
                                text-[10px]
                                uppercase
                                tracking-wider
                                text-[#F3EEDD]/35
                            "
                        >
                            Across all organizations
                        </p>

                    </div>

                </div>


                {/* ========================================================
                    SEARCH BAR
                ======================================================== */}

                <div
                    className="
                        mb-6
                        rounded-xl
                        border
                        border-[#F3EEDD]/10
                        bg-[#1B241E]
                        p-4
                        shadow-[0_15px_40px_rgba(0,0,0,0.15)]
                    "
                >

                    <div className="relative max-w-lg">

                        <Search
                            size={18}
                            className="
                                absolute
                                left-3
                                top-1/2
                                -translate-y-1/2
                                text-[#F3EEDD]/30
                            "
                        />

                        <input
                            type="text"
                            placeholder="Search courses..."
                            className="
                                w-full
                                rounded-lg
                                border
                                border-[#F3EEDD]/10
                                bg-[#161F19]
                                py-3
                                pl-10
                                pr-4
                                text-sm
                                text-[#F3EEDD]
                                outline-none
                                transition-all
                                placeholder:text-[#F3EEDD]/25
                                focus:border-[#F2B84B]/50
                                focus:ring-2
                                focus:ring-[#F2B84B]/10
                            "
                        />

                    </div>

                </div>


                {/* ========================================================
                    COURSE TABLE
                ======================================================== */}

                <div
                    className="
                        overflow-hidden
                        rounded-xl
                        border
                        border-[#F3EEDD]/10
                        bg-[#F3EEDD]
                        text-[#1C2A22]
                        shadow-[0_25px_60px_rgba(0,0,0,0.25)]
                    "
                >

                    {/* TABLE HEADER */}

                    <div
                        className="
                            border-b
                            border-[#1C2A22]/10
                            p-6
                        "
                    >

                        <div
                            className="
                                flex
                                flex-col
                                gap-2
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >

                            <div>

                                <p
                                    className="
                                        font-['JetBrains_Mono']
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.18em]
                                        text-[#D6402C]
                                    "
                                >
                                    Course Register
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-['Space_Grotesk']
                                        text-xl
                                        font-semibold
                                    "
                                >
                                    All Courses
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        text-[#1C2A22]/50
                                    "
                                >
                                    Courses available across organizations
                                </p>

                            </div>

                            <div
                                className="
                                    font-['JetBrains_Mono']
                                    text-xs
                                    text-[#1C2A22]/40
                                "
                            >
                                01 — 04
                            </div>

                        </div>

                    </div>


                    {/* TABLE */}

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[850px]">

                            <thead
                                className="
                                    bg-[#1C2A22]/[0.04]
                                "
                            >

                                <tr>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            font-['JetBrains_Mono']
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#1C2A22]/40
                                        "
                                    >
                                        Course
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            font-['JetBrains_Mono']
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#1C2A22]/40
                                        "
                                    >
                                        Instructor
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            font-['JetBrains_Mono']
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#1C2A22]/40
                                        "
                                    >
                                        Organization
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            font-['JetBrains_Mono']
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#1C2A22]/40
                                        "
                                    >
                                        Students
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            font-['JetBrains_Mono']
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#1C2A22]/40
                                        "
                                    >
                                        Status
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-right
                                            font-['JetBrains_Mono']
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#1C2A22]/40
                                        "
                                    >
                                        Action
                                    </th>

                                </tr>

                            </thead>


                            <tbody
                                className="
                                    divide-y
                                    divide-[#1C2A22]/10
                                "
                            >

                                {courses.map((course, index) => (

                                    <tr
                                        key={index}
                                        className="
                                            transition-all
                                            duration-200
                                            hover:bg-white/60
                                        "
                                    >

                                        {/* COURSE */}

                                        <td className="px-6 py-5">

                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    gap-3
                                                "
                                            >

                                                <div
                                                    className="
                                                        flex
                                                        h-11
                                                        w-11
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-lg
                                                        border
                                                        border-[#1C2A22]/10
                                                        bg-[#1C2A22]/5
                                                        text-[#D6402C]
                                                    "
                                                >
                                                    <BookOpen size={19} />
                                                </div>

                                                <div>

                                                    <p
                                                        className="
                                                            font-['Space_Grotesk']
                                                            text-sm
                                                            font-semibold
                                                        "
                                                    >
                                                        {course.title}
                                                    </p>

                                                    <p
                                                        className="
                                                            mt-1
                                                            font-['JetBrains_Mono']
                                                            text-[10px]
                                                            text-[#1C2A22]/40
                                                        "
                                                    >
                                                        COURSE #
                                                        {1001 + index}
                                                    </p>

                                                </div>

                                            </div>

                                        </td>


                                        {/* INSTRUCTOR */}

                                        <td
                                            className="
                                                px-6
                                                py-5
                                                text-sm
                                                text-[#1C2A22]/70
                                            "
                                        >
                                            {course.instructor}
                                        </td>


                                        {/* ORGANIZATION */}

                                        <td className="px-6 py-5">

                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                    text-sm
                                                    text-[#1C2A22]/65
                                                "
                                            >

                                                <Building2
                                                    size={16}
                                                    className="text-[#1C2A22]/40"
                                                />

                                                {course.organization}

                                            </div>

                                        </td>


                                        {/* STUDENTS */}

                                        <td className="px-6 py-5">

                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                    font-['JetBrains_Mono']
                                                    text-xs
                                                    text-[#1C2A22]/65
                                                "
                                            >

                                                <Users
                                                    size={15}
                                                    className="text-[#1C2A22]/40"
                                                />

                                                {course.students}

                                            </div>

                                        </td>


                                        {/* STATUS */}

                                        <td className="px-6 py-5">

                                            <span
                                                className={`
                                                    inline-flex
                                                    items-center
                                                    gap-1.5
                                                    rounded-full
                                                    border
                                                    px-3
                                                    py-1
                                                    font-['JetBrains_Mono']
                                                    text-[10px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-wide

                                                    ${course.status ===
                                                        "Published"
                                                        ? "border-[#7C9A82]/30 bg-[#7C9A82]/10 text-[#52735A]"
                                                        : "border-[#F2B84B]/40 bg-[#F2B84B]/15 text-[#96701E]"
                                                    }
                                                `}
                                            >

                                                <span
                                                    className={`
                                                        h-1.5
                                                        w-1.5
                                                        rounded-full

                                                        ${course.status ===
                                                            "Published"
                                                            ? "bg-[#7C9A82]"
                                                            : "bg-[#F2B84B]"
                                                        }
                                                    `}
                                                />

                                                {course.status}

                                            </span>

                                        </td>


                                        {/* ACTION */}

                                        <td
                                            className="
                                                px-6
                                                py-5
                                                text-right
                                            "
                                        >

                                            <button
                                                type="button"
                                                aria-label={`Actions for ${course.title}`}
                                                className="
                                                    rounded-lg
                                                    p-2
                                                    text-[#1C2A22]/35
                                                    transition-all
                                                    duration-200
                                                    hover:bg-[#1C2A22]/5
                                                    hover:text-[#D6402C]
                                                "
                                            >
                                                <MoreVertical size={19} />
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>


                {/* ========================================================
                    FOOTER NOTE
                ======================================================== */}

                <div
                    className="
                        mt-5
                        flex
                        flex-col
                        gap-2
                        text-xs
                        text-[#F3EEDD]/30
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >

                    <p>
                        Shiyora · Course Management
                    </p>

                    <p
                        className="
                            font-['JetBrains_Mono']
                            uppercase
                            tracking-wider
                        "
                    >
                        Keep learning. Keep growing.
                    </p>

                </div>

            </div>
        </main>
    );
};

export default Courses;