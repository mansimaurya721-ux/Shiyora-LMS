import React, { useMemo, useState } from "react";
import {
    Users,
    UserCheck,
    UserX,
    TrendingUp,
    Search,
    MoreVertical,
    Eye,
    Pencil,
    Trash2,
} from "lucide-react";

// ============================================================
// FONT IMPORTS
// ============================================================

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";

// ============================================================
// STUDENTS
// ============================================================

const Students = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [openMenu, setOpenMenu] = useState(null);

    // ============================================================
    // SAMPLE STUDENT DATA
    // ============================================================

    const students = [
        {
            id: 1,
            name: "Aarav Singh",
            email: "aarav@gmail.com",
            enrolledCourse: "Full Stack Web Development",
            enrolledDate: "12 Aug 2026",
            progress: 78,
            status: "Active",
        },
        {
            id: 2,
            name: "Ananya Sharma",
            email: "ananya@gmail.com",
            enrolledCourse: "UI/UX Design Fundamentals",
            enrolledDate: "10 Aug 2026",
            progress: 64,
            status: "Active",
        },
        {
            id: 3,
            name: "Rohan Verma",
            email: "rohan@gmail.com",
            enrolledCourse: "Java Programming",
            enrolledDate: "05 Aug 2026",
            progress: 91,
            status: "Active",
        },
        {
            id: 4,
            name: "Priya Gupta",
            email: "priya@gmail.com",
            enrolledCourse: "Database Management System",
            enrolledDate: "01 Aug 2026",
            progress: 42,
            status: "Inactive",
        },
        {
            id: 5,
            name: "Aditya Yadav",
            email: "aditya@gmail.com",
            enrolledCourse: "Python for Beginners",
            enrolledDate: "28 Jul 2026",
            progress: 73,
            status: "Active",
        },
        {
            id: 6,
            name: "Sneha Mishra",
            email: "sneha@gmail.com",
            enrolledCourse: "Digital Marketing",
            enrolledDate: "25 Jul 2026",
            progress: 35,
            status: "Inactive",
        },
    ];

    // ============================================================
    // FILTER STUDENTS
    // ============================================================

    const filteredStudents = useMemo(() => {
        const searchText = search.toLowerCase();

        return students.filter((student) => {
            const matchesSearch =
                student.name.toLowerCase().includes(searchText) ||
                student.email.toLowerCase().includes(searchText) ||
                student.enrolledCourse.toLowerCase().includes(searchText);

            const matchesStatus =
                statusFilter === "All" ||
                student.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [search, statusFilter]);

    // ============================================================
    // STATISTICS
    // ============================================================

    const totalStudents = students.length;

    const activeStudents = students.filter(
        (student) => student.status === "Active"
    ).length;

    const inactiveStudents = students.filter(
        (student) => student.status === "Inactive"
    ).length;

    const averageProgress = Math.round(
        students.reduce(
            (total, student) => total + student.progress,
            0
        ) / students.length
    );

    // ============================================================
    // STATISTICS DATA
    // ============================================================

    const statistics = [
        {
            title: "Total Students",
            value: totalStudents,
            description: "Registered students",
            icon: Users,
            iconColor: "text-[#F2B84B]",
            iconBg: "bg-[#F2B84B]/10",
            border: "border-[#F2B84B]/20",
        },
        {
            title: "Active Students",
            value: activeStudents,
            description: "Currently learning",
            icon: UserCheck,
            iconColor: "text-[#7C9A82]",
            iconBg: "bg-[#7C9A82]/10",
            border: "border-[#7C9A82]/20",
        },
        {
            title: "Inactive Students",
            value: inactiveStudents,
            description: "Currently inactive",
            icon: UserX,
            iconColor: "text-[#D6402C]",
            iconBg: "bg-[#D6402C]/10",
            border: "border-[#D6402C]/20",
        },
        {
            title: "Average Progress",
            value: `${averageProgress}%`,
            description: "Overall learning progress",
            icon: TrendingUp,
            iconColor: "text-[#F2B84B]",
            iconBg: "bg-[#F2B84B]/10",
            border: "border-[#F2B84B]/20",
        },
    ];

    // ============================================================
    // RETURN
    // ============================================================

    return (
        <main
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#161F19]
                px-4
                py-6
                font-['Inter']
                text-[#F3EEDD]
                sm:px-6
                lg:px-8
            "
        >
            {/* ====================================================
                FONT IMPORT
            ==================================================== */}

            <style>{FONT_IMPORTS}</style>

            {/* ====================================================
                BACKGROUND GLOW
            ==================================================== */}

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

            {/* ====================================================
                CONTENT
            ==================================================== */}

            <div className="relative z-10">

                {/* ==================================================
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
                            Students
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
                            Manage students, enrollments and learning
                            progress across your Shiyora LMS platform.
                        </p>

                    </div>

                    {/* TOTAL RECORDS */}

                    <div
                        className="
                            rounded-xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            px-5
                            py-3
                        "
                    >
                        <span
                            className="
                                font-['JetBrains_Mono']
                                text-[9px]
                                uppercase
                                tracking-widest
                                text-[#F3EEDD]/30
                            "
                        >
                            Total Records
                        </span>

                        <p
                            className="
                                mt-1
                                font-['JetBrains_Mono']
                                text-lg
                                font-semibold
                                text-[#F2B84B]
                            "
                        >
                            {totalStudents}
                        </p>
                    </div>
                </div>

                {/* ==================================================
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
                    {statistics.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.title}
                                className={`
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    ${stat.border}
                                    bg-[#1B241E]
                                    p-5
                                    shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                                    transition-all
                                    duration-300
                                    motion-safe:hover:-translate-y-1
                                    hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)]
                                `}
                            >
                                {/* DECORATIVE GLOW */}

                                <div
                                    className={`
                                        pointer-events-none
                                        absolute
                                        -right-8
                                        -top-8
                                        h-24
                                        w-24
                                        rounded-full
                                        ${stat.iconBg}
                                        blur-2xl
                                    `}
                                />

                                <div
                                    className="
                                        relative
                                        flex
                                        items-start
                                        justify-between
                                    "
                                >
                                    <div>

                                        <p
                                            className="
                                                text-xs
                                                font-medium
                                                text-[#F3EEDD]/40
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

                                        <p
                                            className="
                                                mt-2
                                                text-[10px]
                                                text-[#F3EEDD]/30
                                            "
                                        >
                                            {stat.description}
                                        </p>

                                    </div>

                                    <div
                                        className={`
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border
                                            ${stat.border}
                                            ${stat.iconBg}
                                            ${stat.iconColor}
                                        `}
                                    >
                                        <Icon size={20} />
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ==================================================
                    SEARCH + FILTER
                ================================================== */}

                <div
                    className="
                        mb-6
                        flex
                        flex-col
                        gap-4
                        rounded-2xl
                        border
                        border-[#F3EEDD]/10
                        bg-[#1B241E]
                        p-4
                        shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                        md:flex-row
                        md:items-center
                        md:justify-between
                    "
                >

                    {/* SEARCH */}

                    <div className="relative w-full max-w-md">

                        <Search
                            size={19}
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
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search students..."
                            className="
                                w-full
                                rounded-xl
                                border
                                border-[#F3EEDD]/10
                                bg-[#141C17]
                                py-3
                                pl-10
                                pr-4
                                text-sm
                                text-[#F3EEDD]
                                outline-none
                                placeholder:text-[#F3EEDD]/25
                                transition
                                focus:border-[#F2B84B]/40
                                focus:ring-2
                                focus:ring-[#F2B84B]/10
                            "
                        />

                    </div>

                    {/* FILTER */}

                    <div className="flex items-center gap-3">

                        <span
                            className="
                                hidden
                                font-['JetBrains_Mono']
                                text-[9px]
                                uppercase
                                tracking-wider
                                text-[#F3EEDD]/30
                                sm:block
                            "
                        >
                            Status
                        </span>

                        <select
                            value={statusFilter}
                            onChange={(e) =>
                                setStatusFilter(e.target.value)
                            }
                            className="
                                w-full
                                rounded-xl
                                border
                                border-[#F3EEDD]/10
                                bg-[#141C17]
                                px-4
                                py-3
                                text-sm
                                font-medium
                                text-[#F3EEDD]/70
                                outline-none
                                transition
                                focus:border-[#F2B84B]/40
                                sm:w-auto
                            "
                        >
                            <option
                                value="All"
                                className="bg-[#1B241E]"
                            >
                                All Students
                            </option>

                            <option
                                value="Active"
                                className="bg-[#1B241E]"
                            >
                                Active
                            </option>

                            <option
                                value="Inactive"
                                className="bg-[#1B241E]"
                            >
                                Inactive
                            </option>
                        </select>

                    </div>
                </div>

                {/* ==================================================
                    WHITE STUDENT MANAGEMENT SECTION
                    SAME STYLE AS ORGANIZATIONS
                ================================================== */}

                <section
                    className="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[#F3EEDD]/10
                        bg-[#F8F5EF]
                        shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                    "
                >

                    {/* ==================================================
                        TABLE SECTION HEADER
                    ================================================== */}

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
                                    Student Management
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
                                All Students
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    text-[#7C817B]
                                "
                            >
                                View and manage students enrolled in your
                                courses.
                            </p>

                        </div>

                        {/* RESULTS */}

                        <div
                            className="
                                flex
                                w-fit
                                items-center
                                gap-2
                                rounded-lg
                                bg-[#F0EBE3]
                                px-3
                                py-2
                            "
                        >

                            <TrendingUp
                                size={14}
                                className="text-[#7C9A82]"
                            />

                            <span
                                className="
                                    font-['JetBrains_Mono']
                                    text-[10px]
                                    font-semibold
                                    text-[#63816A]
                                "
                            >
                                {filteredStudents.length} RESULTS
                            </span>

                        </div>

                    </div>

                    {/* ==================================================
                        TABLE
                    ================================================== */}

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[1050px]">

                            {/* TABLE HEAD */}

                            <thead className="bg-[#F1ECE5]">

                                <tr>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            font-['JetBrains_Mono']
                                            text-[9px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#817B74]
                                        "
                                    >
                                        Student
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            font-['JetBrains_Mono']
                                            text-[9px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#817B74]
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
                                            text-[9px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#817B74]
                                        "
                                    >
                                        Enrolled
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            font-['JetBrains_Mono']
                                            text-[9px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#817B74]
                                        "
                                    >
                                        Progress
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            font-['JetBrains_Mono']
                                            text-[9px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#817B74]
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
                                            text-[9px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#817B74]
                                        "
                                    >
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            {/* TABLE BODY */}

                            <tbody className="divide-y divide-[#E7DED5]">

                                {filteredStudents.map((student) => (

                                    <tr
                                        key={student.id}
                                        className="
                                            transition-colors
                                            hover:bg-[#FFFDF9]
                                        "
                                    >

                                        {/* STUDENT */}

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
                                                        rounded-xl
                                                        border
                                                        border-[#F2B84B]/30
                                                        bg-[#F7E6B9]
                                                        font-['Space_Grotesk']
                                                        font-bold
                                                        text-[#6E5926]
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

                                                    <p
                                                        className="
                                                            mt-1
                                                            text-xs
                                                            text-[#8A8E89]
                                                        "
                                                    >
                                                        {student.email}
                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        {/* COURSE */}

                                        <td className="px-6 py-5">

                                            <p
                                                className="
                                                    max-w-[260px]
                                                    text-sm
                                                    font-medium
                                                    text-[#536058]
                                                "
                                            >
                                                {student.enrolledCourse}
                                            </p>

                                        </td>

                                        {/* ENROLLED DATE */}

                                        <td
                                            className="
                                                px-6
                                                py-5
                                                font-['JetBrains_Mono']
                                                text-[10px]
                                                text-[#7B817B]
                                            "
                                        >
                                            {student.enrolledDate}
                                        </td>

                                        {/* PROGRESS */}

                                        <td className="px-6 py-5">

                                            <div className="w-36">

                                                <div
                                                    className="
                                                        mb-2
                                                        flex
                                                        items-center
                                                        justify-between
                                                    "
                                                >

                                                    <span
                                                        className="
                                                            text-[10px]
                                                            text-[#8A8E89]
                                                        "
                                                    >
                                                        Progress
                                                    </span>

                                                    <span
                                                        className="
                                                            font-['JetBrains_Mono']
                                                            text-[10px]
                                                            font-semibold
                                                            text-[#9A792C]
                                                        "
                                                    >
                                                        {student.progress}%
                                                    </span>

                                                </div>

                                                <div
                                                    className="
                                                        h-1.5
                                                        overflow-hidden
                                                        rounded-full
                                                        bg-[#E8E0D5]
                                                    "
                                                >

                                                    <div
                                                        className="
                                                            h-full
                                                            rounded-full
                                                            bg-[#F2B84B]
                                                            transition-all
                                                        "
                                                        style={{
                                                            width: `${student.progress}%`,
                                                        }}
                                                    />

                                                </div>

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
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    font-semibold

                                                    ${student.status ===
                                                        "Active"
                                                        ? "bg-[#EDF6EF] text-[#64856C]"
                                                        : "bg-[#FFF0F0] text-[#B96868]"
                                                    }
                                                `}
                                            >

                                                <span
                                                    className={`
                                                        h-1.5
                                                        w-1.5
                                                        rounded-full

                                                        ${student.status ===
                                                            "Active"
                                                            ? "bg-[#7C9A82]"
                                                            : "bg-[#C98282]"
                                                        }
                                                    `}
                                                />

                                                {student.status}

                                            </span>

                                        </td>

                                        {/* ACTION */}

                                        <td
                                            className="
                                                relative
                                                px-6
                                                py-5
                                                text-right
                                            "
                                        >

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenMenu(
                                                        openMenu === student.id
                                                            ? null
                                                            : student.id
                                                    )
                                                }
                                                className="
                                                    rounded-lg
                                                    p-2
                                                    text-[#8A8E89]
                                                    transition
                                                    hover:bg-[#F3EEDD]
                                                    hover:text-[#303B32]
                                                "
                                            >
                                                <MoreVertical size={18} />
                                            </button>

                                            {/* DROPDOWN */}

                                            {openMenu === student.id && (

                                                <div
                                                    className="
                                                        absolute
                                                        right-6
                                                        top-14
                                                        z-30
                                                        w-36
                                                        overflow-hidden
                                                        rounded-xl
                                                        border
                                                        border-[#E4DED4]
                                                        bg-white
                                                        py-1
                                                        text-left
                                                        shadow-[0_15px_35px_rgba(22,31,25,0.15)]
                                                    "
                                                >

                                                    {/* VIEW */}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMenu(null)
                                                        }
                                                        className="
                                                            flex
                                                            w-full
                                                            items-center
                                                            gap-2
                                                            px-4
                                                            py-2.5
                                                            text-sm
                                                            text-[#536058]
                                                            transition
                                                            hover:bg-[#FFF9E9]
                                                        "
                                                    >
                                                        <Eye size={15} />
                                                        View
                                                    </button>

                                                    {/* EDIT */}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMenu(null)
                                                        }
                                                        className="
                                                            flex
                                                            w-full
                                                            items-center
                                                            gap-2
                                                            px-4
                                                            py-2.5
                                                            text-sm
                                                            text-[#536058]
                                                            transition
                                                            hover:bg-[#FFF9E9]
                                                        "
                                                    >
                                                        <Pencil size={15} />
                                                        Edit
                                                    </button>

                                                    {/* DELETE */}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMenu(null)
                                                        }
                                                        className="
                                                            flex
                                                            w-full
                                                            items-center
                                                            gap-2
                                                            px-4
                                                            py-2.5
                                                            text-sm
                                                            text-[#B96868]
                                                            transition
                                                            hover:bg-[#FFF3F3]
                                                        "
                                                    >
                                                        <Trash2 size={15} />
                                                        Delete
                                                    </button>

                                                </div>

                                            )}

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                    {/* ==================================================
                        EMPTY STATE
                    ================================================== */}

                    {filteredStudents.length === 0 && (

                        <div
                            className="
                                border-t
                                border-[#E7DED5]
                                px-6
                                py-14
                                text-center
                            "
                        >

                            <div
                                className="
                                    mx-auto
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-[#FFF5DD]
                                    text-[#A27E35]
                                "
                            >
                                <Users size={26} />
                            </div>

                            <h3
                                className="
                                    mt-4
                                    font-['Space_Grotesk']
                                    font-semibold
                                    text-[#303B32]
                                "
                            >
                                No students found
                            </h3>

                            <p
                                className="
                                    mt-1
                                    text-sm
                                    text-[#8A8E89]
                                "
                            >
                                Try changing your search or status filter.
                            </p>

                        </div>

                    )}

                </section>

                {/* ==================================================
                    FOOTER NOTE
                ================================================== */}

                <div
                    className="
                        mt-5
                        flex
                        flex-col
                        gap-2
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >

                    <p
                        className="
                            font-['JetBrains_Mono']
                            text-[9px]
                            uppercase
                            tracking-wider
                            text-[#F3EEDD]/25
                        "
                    >
                        Showing {filteredStudents.length} of {totalStudents} students
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
                        Shiyora / Students
                    </p>

                </div>

            </div>
        </main>
    );
};

export default Students;