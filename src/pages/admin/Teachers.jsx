import React, { useMemo, useState } from "react";
import {
    Users,
    UserCheck,
    UserX,
    BookOpen,
    Search,
    MoreVertical,
    Eye,
    Pencil,
    Trash2,
    GraduationCap,
    TrendingUp,
    Plus,
} from "lucide-react";

const Teachers = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [openMenu, setOpenMenu] = useState(null);

    // ============================================================
    // SAMPLE TEACHER DATA
    // ============================================================

    const teachers = [
        {
            id: 1,
            name: "Rahul Sharma",
            email: "rahul@shiyora.com",
            specialization: "Full Stack Development",
            courses: 6,
            students: 245,
            experience: "5 Years",
            joinedDate: "12 Aug 2026",
            status: "Active",
        },
        {
            id: 2,
            name: "Priya Singh",
            email: "priya@shiyora.com",
            specialization: "UI/UX Design",
            courses: 4,
            students: 180,
            experience: "4 Years",
            joinedDate: "10 Aug 2026",
            status: "Active",
        },
        {
            id: 3,
            name: "Amit Verma",
            email: "amit@shiyora.com",
            specialization: "Java Programming",
            courses: 5,
            students: 210,
            experience: "6 Years",
            joinedDate: "05 Aug 2026",
            status: "Active",
        },
        {
            id: 4,
            name: "Neha Gupta",
            email: "neha@shiyora.com",
            specialization: "Database Management",
            courses: 3,
            students: 125,
            experience: "3 Years",
            joinedDate: "01 Aug 2026",
            status: "Inactive",
        },
        {
            id: 5,
            name: "Vikas Yadav",
            email: "vikas@shiyora.com",
            specialization: "Python Programming",
            courses: 4,
            students: 165,
            experience: "4 Years",
            joinedDate: "28 Jul 2026",
            status: "Active",
        },
        {
            id: 6,
            name: "Sneha Mishra",
            email: "sneha@shiyora.com",
            specialization: "Digital Marketing",
            courses: 2,
            students: 95,
            experience: "2 Years",
            joinedDate: "25 Jul 2026",
            status: "Inactive",
        },
    ];

    // ============================================================
    // SEARCH + FILTER
    // ============================================================

    const filteredTeachers = useMemo(() => {
        const searchValue = search.toLowerCase();

        return teachers.filter((teacher) => {
            const matchesSearch =
                teacher.name.toLowerCase().includes(searchValue) ||
                teacher.email.toLowerCase().includes(searchValue) ||
                teacher.specialization
                    .toLowerCase()
                    .includes(searchValue);

            const matchesStatus =
                statusFilter === "All" ||
                teacher.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [search, statusFilter]);

    // ============================================================
    // STATISTICS
    // ============================================================

    const totalTeachers = teachers.length;

    const activeTeachers = teachers.filter(
        (teacher) => teacher.status === "Active"
    ).length;

    const inactiveTeachers = teachers.filter(
        (teacher) => teacher.status === "Inactive"
    ).length;

    const totalCourses = teachers.reduce(
        (total, teacher) => total + teacher.courses,
        0
    );

    const totalStudents = teachers.reduce(
        (total, teacher) => total + teacher.students,
        0
    );

    // ============================================================
    // ADD TEACHER
    // ============================================================

    const handleAddTeacher = () => {
        console.log("Add Teacher clicked");
    };

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
                            Teachers
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
                            Manage teachers, assigned courses and teaching
                            activities across the Shiyora LMS platform.
                        </p>

                    </div>

                    {/* =================================================
                        TEACHER ACTIONS
                    ================================================== */}

                    <div className="flex flex-wrap items-center gap-3">

                        {/* ADD TEACHER BUTTON */}

                        <button
                            type="button"
                            onClick={handleAddTeacher}
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-[#F2B84B]
                                px-5
                                py-3
                                font-['Space_Grotesk']
                                text-sm
                                font-semibold
                                text-[#161F19]
                                shadow-[0_8px_20px_rgba(242,184,75,0.15)]
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:bg-[#E8AE42]
                                active:translate-y-0
                            "
                        >
                            <Plus size={18} />
                            Add Teacher
                        </button>

                        {/* TEACHER COUNT */}

                        <div
                            className="
                                flex
                                w-fit
                                items-center
                                gap-3
                                rounded-xl
                                border
                                border-[#F3EEDD]/10
                                bg-[#1B241E]
                                px-5
                                py-3
                            "
                        >

                            <Users
                                size={18}
                                className="text-[#F2B84B]"
                            />

                            <div>

                                <p
                                    className="
                                        font-['JetBrains_Mono']
                                        text-[9px]
                                        uppercase
                                        tracking-widest
                                        text-[#F3EEDD]/30
                                    "
                                >
                                    Total Teachers
                                </p>

                                <p
                                    className="
                                        mt-1
                                        font-['JetBrains_Mono']
                                        text-lg
                                        font-semibold
                                        text-[#F2B84B]
                                    "
                                >
                                    {totalTeachers}
                                </p>

                            </div>

                        </div>

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

                    {/* TOTAL TEACHERS */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-5
                            shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                            transition-all
                            duration-300
                            motion-safe:hover:-translate-y-1
                            hover:border-[#F2B84B]/30
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
                                    Total Teachers
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
                                    {totalTeachers}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#F3EEDD]/30">
                                    Registered teachers
                                </p>

                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#F2B84B]/20
                                    bg-[#F2B84B]/10
                                    text-[#F2B84B]
                                "
                            >
                                <Users size={22} />
                            </div>

                        </div>

                    </div>

                    {/* ACTIVE TEACHERS */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-5
                            shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                            transition-all
                            duration-300
                            motion-safe:hover:-translate-y-1
                            hover:border-[#7C9A82]/30
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
                                    Active Teachers
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
                                    {activeTeachers}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#7C9A82]">
                                    Currently teaching
                                </p>

                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#7C9A82]/20
                                    bg-[#7C9A82]/10
                                    text-[#7C9A82]
                                "
                            >
                                <UserCheck size={22} />
                            </div>

                        </div>

                    </div>

                    {/* INACTIVE TEACHERS */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-5
                            shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                            transition-all
                            duration-300
                            motion-safe:hover:-translate-y-1
                            hover:border-[#B96868]/30
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
                                    Inactive Teachers
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
                                    {inactiveTeachers}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#B96868]">
                                    Currently inactive
                                </p>

                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#B96868]/20
                                    bg-[#B96868]/10
                                    text-[#B96868]
                                "
                            >
                                <UserX size={22} />
                            </div>

                        </div>

                    </div>

                    {/* TOTAL COURSES */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-5
                            shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                            transition-all
                            duration-300
                            motion-safe:hover:-translate-y-1
                            hover:border-[#F2B84B]/30
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
                                    Assigned Courses
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
                                    {totalCourses}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#F3EEDD]/30">
                                    Across all teachers
                                </p>

                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#F2B84B]/20
                                    bg-[#F2B84B]/10
                                    text-[#F2B84B]
                                "
                            >
                                <BookOpen size={22} />
                            </div>

                        </div>

                    </div>

                </div>

                {/* =================================================
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
                            placeholder="Search teachers..."
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
                                font-['JetBrains_Mono']
                                text-[9px]
                                uppercase
                                tracking-wider
                                text-[#F3EEDD]/30
                            "
                        >
                            Status
                        </span>

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="
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
                                focus:ring-2
                                focus:ring-[#F2B84B]/10
                            "
                        >

                            <option
                                value="All"
                                className="bg-[#1B241E]"
                            >
                                All Teachers
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

                {/* =================================================
                    TEACHER TABLE
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
                                    Teachers
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
                                All Teachers
                            </h2>

                            <p className="mt-1 text-xs text-[#7C817B]">
                                Teachers working on the Shiyora LMS platform.
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
                                {filteredTeachers.length} RESULTS
                            </span>

                        </div>

                    </div>

                    {/* TABLE */}

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[1150px]">

                            <thead className="bg-[#F1ECE5]">

                                <tr>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#817B74]">
                                        Teacher
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#817B74]">
                                        Specialization
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#817B74]">
                                        Courses
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#817B74]">
                                        Students
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#817B74]">
                                        Experience
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#817B74]">
                                        Joined
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#817B817B74]">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-right text-[10px] font-semibold uppercase tracking-wider text-[#817B74]">
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody className="divide-y divide-[#E7DED5]">

                                {filteredTeachers.map((teacher) => (

                                    <tr
                                        key={teacher.id}
                                        className="
                                            transition-colors
                                            hover:bg-[#FFFDF9]
                                        "
                                    >

                                        {/* TEACHER */}

                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-3">

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
                                                    {teacher.name.charAt(0)}
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
                                                        {teacher.name}
                                                    </p>

                                                    <p className="mt-1 text-xs text-[#8A8E89]">
                                                        {teacher.email}
                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        {/* SPECIALIZATION */}

                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-2">

                                                <GraduationCap
                                                    size={17}
                                                    className="shrink-0 text-[#7C9A82]"
                                                />

                                                <p
                                                    className="
                                                        max-w-[220px]
                                                        text-sm
                                                        font-medium
                                                        text-[#536058]
                                                    "
                                                >
                                                    {teacher.specialization}
                                                </p>

                                            </div>

                                        </td>

                                        {/* COURSES */}

                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-2">

                                                <BookOpen
                                                    size={16}
                                                    className="text-[#8C7134]"
                                                />

                                                <span
                                                    className="
                                                        font-['JetBrains_Mono']
                                                        text-xs
                                                        font-semibold
                                                        text-[#536058]
                                                    "
                                                >
                                                    {teacher.courses}
                                                </span>

                                            </div>

                                        </td>

                                        {/* STUDENTS */}

                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-2">

                                                <Users
                                                    size={16}
                                                    className="text-[#7C9A82]"
                                                />

                                                <span
                                                    className="
                                                        font-['JetBrains_Mono']
                                                        text-xs
                                                        font-semibold
                                                        text-[#536058]
                                                    "
                                                >
                                                    {teacher.students}
                                                </span>

                                            </div>

                                        </td>

                                        {/* EXPERIENCE */}

                                        <td className="px-6 py-5">

                                            <span
                                                className="
                                                    font-['JetBrains_Mono']
                                                    text-xs
                                                    text-[#536058]
                                                "
                                            >
                                                {teacher.experience}
                                            </span>

                                        </td>

                                        {/* JOINED DATE */}

                                        <td className="px-6 py-5">

                                            <span
                                                className="
                                                    font-['JetBrains_Mono']
                                                    text-xs
                                                    text-[#536058]
                                                "
                                            >
                                                {teacher.joinedDate}
                                            </span>

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

                                                    ${teacher.status ===
                                                        "Active"
                                                        ? "bg-[#EDF6EF] text-[#64856C]"
                                                        : "bg-[#FFF5DD] text-[#A27E35]"
                                                    }
                                                `}
                                            >

                                                <span
                                                    className={`
                                                        h-1.5
                                                        w-1.5
                                                        rounded-full

                                                        ${teacher.status ===
                                                            "Active"
                                                            ? "bg-[#7C9A82]"
                                                            : "bg-[#D0A052]"
                                                        }
                                                    `}
                                                />

                                                {teacher.status}

                                            </span>

                                        </td>

                                        {/* ACTION */}

                                        <td className="relative px-6 py-5 text-right">

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenMenu(
                                                        openMenu === teacher.id
                                                            ? null
                                                            : teacher.id
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

                                            {openMenu === teacher.id && (

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

                    {/* EMPTY STATE */}

                    {filteredTeachers.length === 0 && (

                        <div className="px-6 py-14 text-center">

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
                                    font-semibold
                                    text-[#303B32]
                                "
                            >
                                No teachers found
                            </h3>

                            <p className="mt-1 text-sm text-[#8A8E89]">
                                Try changing your search or status filter.
                            </p>

                        </div>

                    )}

                </section>

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
                        Teacher Management
                    </p>

                </div>

            </div>

        </main>
    );
};

export default Teachers;