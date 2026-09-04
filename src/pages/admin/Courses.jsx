import React, { useMemo, useState } from "react";
import {
    BookOpen,
    Plus,
    Search,
    MoreVertical,
    Users,
    Clock,
    CheckCircle2,
    XCircle,
    Pencil,
    Trash2,
    TrendingUp,
} from "lucide-react";

const Courses = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [openMenu, setOpenMenu] = useState(null);

    // ============================================================
    // COURSE DATA
    // ============================================================

    const courses = [
        {
            id: 1,
            title: "Full Stack Web Development",
            instructor: "Rahul Sharma",
            category: "Development",
            students: 245,
            lessons: 48,
            duration: "12 Weeks",
            status: "Published",
        },
        {
            id: 2,
            title: "UI/UX Design Fundamentals",
            instructor: "Priya Singh",
            category: "Design",
            students: 182,
            lessons: 32,
            duration: "8 Weeks",
            status: "Published",
        },
        {
            id: 3,
            title: "Java Programming",
            instructor: "Amit Verma",
            category: "Programming",
            students: 316,
            lessons: 56,
            duration: "14 Weeks",
            status: "Published",
        },
        {
            id: 4,
            title: "Database Management System",
            instructor: "Neha Gupta",
            category: "Database",
            students: 124,
            lessons: 28,
            duration: "6 Weeks",
            status: "Draft",
        },
        {
            id: 5,
            title: "Python for Beginners",
            instructor: "Arjun Yadav",
            category: "Programming",
            students: 208,
            lessons: 40,
            duration: "10 Weeks",
            status: "Published",
        },
        {
            id: 6,
            title: "Digital Marketing",
            instructor: "Anjali Singh",
            category: "Marketing",
            students: 96,
            lessons: 24,
            duration: "6 Weeks",
            status: "Draft",
        },
    ];

    // ============================================================
    // FILTER COURSES
    // ============================================================

    const filteredCourses = useMemo(() => {
        const searchText = search.toLowerCase().trim();

        return courses.filter((course) => {
            const matchesSearch =
                course.title.toLowerCase().includes(searchText) ||
                course.instructor.toLowerCase().includes(searchText) ||
                course.category.toLowerCase().includes(searchText);

            const matchesStatus =
                statusFilter === "All" ||
                course.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [search, statusFilter]);

    // ============================================================
    // STATISTICS
    // ============================================================

    const totalCourses = courses.length;

    const publishedCourses = courses.filter(
        (course) => course.status === "Published"
    ).length;

    const draftCourses = courses.filter(
        (course) => course.status === "Draft"
    ).length;

    const totalStudents = courses.reduce(
        (total, course) => total + course.students,
        0
    );

    // ============================================================
    // ADD COURSE
    // ============================================================

    const handleAddCourse = () => {
        alert("Add Course functionality will be connected later.");
    };

    // ============================================================
    // EDIT COURSE
    // ============================================================

    const handleEdit = (course) => {
        setOpenMenu(null);
        alert(`Edit course: ${course.title}`);
    };

    // ============================================================
    // DELETE COURSE
    // ============================================================

    const handleDelete = (course) => {
        setOpenMenu(null);
        alert(`Delete course: ${course.title}`);
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
                            Create, manage and monitor courses in your
                            organization.
                        </p>

                    </div>

                    {/* ADD COURSE */}

                    <button
                        type="button"
                        onClick={handleAddCourse}
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-[#F2B84B]/30
                            bg-[#F2B84B]
                            px-5
                            py-3
                            font-['Space_Grotesk']
                            text-sm
                            font-semibold
                            text-[#161F19]
                            shadow-[0_10px_30px_rgba(242,184,75,0.12)]
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-[#F7C968]
                            hover:shadow-[0_12px_35px_rgba(242,184,75,0.18)]
                        "
                    >
                        <Plus size={18} />
                        Add Course
                    </button>

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
                            hover:-translate-y-1
                            hover:border-[#F2B84B]/30
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
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
                                    {totalCourses}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#F3EEDD]/30">
                                    All courses
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

                    {/* PUBLISHED */}

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
                            hover:-translate-y-1
                            hover:border-[#7C9A82]/30
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
                                    Published Courses
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
                                    {publishedCourses}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#7C9A82]">
                                    Live courses
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
                                <CheckCircle2 size={22} />
                            </div>

                        </div>

                    </div>

                    {/* DRAFT */}

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
                            hover:-translate-y-1
                            hover:border-[#F2B84B]/30
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
                                    Draft Courses
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
                                    {draftCourses}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#F3EEDD]/30">
                                    Not published
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
                                <Clock size={22} />
                            </div>

                        </div>

                    </div>

                    {/* TOTAL STUDENTS */}

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
                            hover:-translate-y-1
                            hover:border-[#F3EEDD]/25
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
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
                                    {totalStudents.toLocaleString()}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#F3EEDD]/30">
                                    Across all courses
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
                                    border-[#F3EEDD]/15
                                    bg-[#F3EEDD]/5
                                    text-[#F3EEDD]/70
                                "
                            >
                                <Users size={22} />
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
                        rounded-2xl
                        border
                        border-[#F3EEDD]/10
                        bg-[#1B241E]
                        p-4
                        shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            md:flex-row
                            md:items-center
                            md:justify-between
                        "
                    >

                        {/* SEARCH */}

                        <div className="relative w-full md:max-w-md">

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
                                placeholder="Search courses, instructors..."
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

                        {/* STATUS FILTER */}

                        <div className="flex items-center gap-2">

                            <span
                                className="
                                    hidden
                                    font-['JetBrains_Mono']
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-wider
                                    text-[#F3EEDD]/40
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
                                    cursor-pointer
                                    rounded-xl
                                    border
                                    border-[#F3EEDD]/10
                                    bg-[#141C17]
                                    px-4
                                    py-3
                                    text-sm
                                    font-medium
                                    text-[#F3EEDD]
                                    outline-none
                                    transition
                                    focus:border-[#F2B84B]/40
                                    focus:ring-2
                                    focus:ring-[#F2B84B]/10
                                    sm:w-auto
                                "
                            >
                                <option
                                    value="All"
                                    className="bg-[#141C17]"
                                >
                                    All Courses
                                </option>

                                <option
                                    value="Published"
                                    className="bg-[#141C17]"
                                >
                                    Published
                                </option>

                                <option
                                    value="Draft"
                                    className="bg-[#141C17]"
                                >
                                    Draft
                                </option>

                            </select>

                        </div>

                    </div>

                </div>

                {/* =================================================
                    COURSE TABLE
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
                                All Courses
                            </h2>

                            <p className="mt-1 text-xs text-[#7C817B]">
                                Manage courses available to your students.
                            </p>

                        </div>

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
                                {filteredCourses.length} RESULTS
                            </span>

                        </div>

                    </div>

                    {/* =================================================
                        EMPTY STATE
                    ================================================== */}

                    {filteredCourses.length === 0 ? (

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
                                <XCircle size={26} />
                            </div>

                            <h3
                                className="
                                    mt-4
                                    font-['Space_Grotesk']
                                    font-semibold
                                    text-[#303B32]
                                "
                            >
                                No courses found
                            </h3>

                            <p className="mt-1 text-sm text-[#8A8E89]">
                                Try changing your search or filter.
                            </p>

                        </div>

                    ) : (

                        /* =================================================
                            TABLE
                        ================================================== */

                        <div className="overflow-x-auto">

                            <table className="w-full min-w-[1000px]">

                                <thead className="bg-[#F1ECE5]">

                                    <tr>

                                        <th
                                            className="
                                                px-6
                                                py-4
                                                text-left
                                                text-[10px]
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
                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-wider
                                                text-[#817B74]
                                            "
                                        >
                                            Instructor
                                        </th>

                                        <th
                                            className="
                                                px-6
                                                py-4
                                                text-left
                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-wider
                                                text-[#817B74]
                                            "
                                        >
                                            Students
                                        </th>

                                        <th
                                            className="
                                                px-6
                                                py-4
                                                text-left
                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-wider
                                                text-[#817B74]
                                            "
                                        >
                                            Duration
                                        </th>

                                        <th
                                            className="
                                                px-6
                                                py-4
                                                text-left
                                                text-[10px]
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
                                                text-[10px]
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

                                <tbody className="divide-y divide-[#E7DED5]">

                                    {filteredCourses.map((course) => (

                                        <tr
                                            key={course.id}
                                            className="
                                                transition-colors
                                                hover:bg-[#FFFDF9]
                                            "
                                        >

                                            {/* COURSE */}

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
                                                        <BookOpen size={20} />
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
                                                            {course.title}
                                                        </p>

                                                        <p
                                                            className="
                                                                mt-1
                                                                text-xs
                                                                text-[#8A8E89]
                                                            "
                                                        >
                                                            {course.category} •{" "}
                                                            {course.lessons} lessons
                                                        </p>

                                                    </div>

                                                </div>

                                            </td>

                                            {/* INSTRUCTOR */}

                                            <td className="px-6 py-5">

                                                <div className="flex items-center gap-2">

                                                    <div
                                                        className="
                                                            flex
                                                            h-8
                                                            w-8
                                                            shrink-0
                                                            items-center
                                                            justify-center
                                                            rounded-full
                                                            border
                                                            border-[#7C9A82]/25
                                                            bg-[#EDF4EE]
                                                            font-['Space_Grotesk']
                                                            text-xs
                                                            font-bold
                                                            text-[#587560]
                                                        "
                                                    >
                                                        {course.instructor.charAt(0)}
                                                    </div>

                                                    <span
                                                        className="
                                                            text-sm
                                                            font-medium
                                                            text-[#536058]
                                                        "
                                                    >
                                                        {course.instructor}
                                                    </span>

                                                </div>

                                            </td>

                                            {/* STUDENTS */}

                                            <td
                                                className="
                                                    px-6
                                                    py-5
                                                    font-['JetBrains_Mono']
                                                    text-xs
                                                    text-[#536058]
                                                "
                                            >

                                                <div className="flex items-center gap-2">

                                                    <Users
                                                        size={15}
                                                        className="text-[#7C9A82]"
                                                    />

                                                    {course.students}

                                                </div>

                                            </td>

                                            {/* DURATION */}

                                            <td className="px-6 py-5">

                                                <div className="flex items-center gap-2">

                                                    <Clock
                                                        size={15}
                                                        className="text-[#8C7134]"
                                                    />

                                                    <span
                                                        className="
                                                            font-['JetBrains_Mono']
                                                            text-xs
                                                            text-[#536058]
                                                        "
                                                    >
                                                        {course.duration}
                                                    </span>

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

                                                        ${course.status ===
                                                            "Published"
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

                                                            ${course.status ===
                                                                "Published"
                                                                ? "bg-[#7C9A82]"
                                                                : "bg-[#D0A052]"
                                                            }
                                                        `}
                                                    />

                                                    {course.status}

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
                                                            openMenu === course.id
                                                                ? null
                                                                : course.id
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

                                                {openMenu === course.id && (

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

                                                        {/* EDIT */}

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleEdit(course)
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
                                                                handleDelete(course)
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

                    )}

                    {/* =================================================
                        FOOTER
                    ================================================== */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-2
                            border-t
                            border-[#E7DED5]
                            bg-[#FBF9F5]
                            px-6
                            py-4
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
                                text-[#817B74]
                            "
                        >
                            Showing{" "}
                            <span className="font-semibold text-[#303B32]">
                                {filteredCourses.length}
                            </span>{" "}
                            courses
                        </p>

                        <p
                            className="
                                font-['JetBrains_Mono']
                                text-[9px]
                                uppercase
                                tracking-wider
                                text-[#817B74]
                            "
                        >
                            Shiyora LMS
                        </p>

                    </div>

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
                        Course Management
                    </p>

                </div>

            </div>

        </main>
    );
};

export default Courses;