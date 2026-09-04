import React, { useMemo, useState } from "react";
import {
    BookOpen,
    Search,
    PlayCircle,
    CheckCircle2,
    Clock3,
    MoreVertical,
    BarChart3,
} from "lucide-react";

const MyCourses = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [openMenu, setOpenMenu] = useState(null);

    const courses = [
        {
            id: 1,
            title: "Full Stack Web Development",
            instructor: "Rahul Sharma",
            category: "Development",
            progress: 72,
            completedLessons: 18,
            totalLessons: 25,
            duration: "12h 40m",
            status: "In Progress",
        },
        {
            id: 2,
            title: "Java Programming",
            instructor: "Priya Singh",
            category: "Programming",
            progress: 48,
            completedLessons: 12,
            totalLessons: 25,
            duration: "8h 20m",
            status: "In Progress",
        },
        {
            id: 3,
            title: "Database Management System",
            instructor: "Amit Verma",
            category: "Database",
            progress: 35,
            completedLessons: 7,
            totalLessons: 20,
            duration: "6h 15m",
            status: "In Progress",
        },
        {
            id: 4,
            title: "HTML & CSS Fundamentals",
            instructor: "Neha Gupta",
            category: "Web Development",
            progress: 100,
            completedLessons: 20,
            totalLessons: 20,
            duration: "5h 30m",
            status: "Completed",
        },
        {
            id: 5,
            title: "JavaScript Essentials",
            instructor: "Rohit Kumar",
            category: "Web Development",
            progress: 100,
            completedLessons: 22,
            totalLessons: 22,
            duration: "7h 10m",
            status: "Completed",
        },
        {
            id: 6,
            title: "React.js Development",
            instructor: "Ankit Singh",
            category: "Development",
            progress: 15,
            completedLessons: 3,
            totalLessons: 20,
            duration: "9h 45m",
            status: "In Progress",
        },
    ];

    const filteredCourses = useMemo(() => {
        return courses.filter((course) => {
            const matchesSearch =
                course.title
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                course.instructor
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                course.category
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesFilter =
                filter === "All" || course.status === filter;

            return matchesSearch && matchesFilter;
        });
    }, [search, filter]);

    const totalCourses = courses.length;

    const completedCourses = courses.filter(
        (course) => course.status === "Completed"
    ).length;

    const inProgressCourses = courses.filter(
        (course) => course.status === "In Progress"
    ).length;

    const averageProgress = Math.round(
        courses.reduce((total, course) => total + course.progress, 0) /
        courses.length
    );

    return (
        <div className="space-y-8">

            {/* =====================================================
                HEADER
            ====================================================== */}
            <section className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p className="mb-2 text-sm font-medium text-[#7C9A82]">
                        Learning Center
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight text-[#F3EEDD] sm:text-4xl">
                        My Courses
                    </h1>

                    <p className="mt-2 text-sm text-[#7C9A82] sm:text-base">
                        Manage your enrolled courses and continue learning.
                    </p>
                </div>

                {/* Search */}
                <div className="relative w-full lg:w-80">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7C9A82]"
                    />

                    <input
                        type="text"
                        placeholder="Search your courses..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="
                            w-full rounded-xl
                            border border-[#7C9A82]/30
                            bg-[#1B241E]
                            py-3 pl-10 pr-4
                            text-sm text-[#F3EEDD]
                            outline-none
                            placeholder:text-[#7C9A82]
                            focus:border-[#F2B84B]
                        "
                    />
                </div>
            </section>

            {/* =====================================================
                STATS
            ====================================================== */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    title="Total Courses"
                    value={totalCourses}
                    description="Enrolled courses"
                    icon={BookOpen}
                />

                <StatCard
                    title="In Progress"
                    value={inProgressCourses}
                    description="Currently learning"
                    icon={Clock3}
                />

                <StatCard
                    title="Completed"
                    value={completedCourses}
                    description="Courses finished"
                    icon={CheckCircle2}
                />

                <StatCard
                    title="Average Progress"
                    value={`${averageProgress}%`}
                    description="Overall progress"
                    icon={BarChart3}
                />

            </section>

            {/* =====================================================
                FILTERS
            ====================================================== */}
            <section className="flex flex-wrap items-center gap-2">
                {["All", "In Progress", "Completed"].map((item) => (
                    <button
                        key={item}
                        onClick={() => setFilter(item)}
                        className={`
                            rounded-lg px-4 py-2.5
                            text-sm font-medium
                            transition
                            ${filter === item
                                ? "bg-[#F2B84B] text-[#161F19]"
                                : "border border-[#7C9A82]/25 bg-[#1B241E] text-[#7C9A82] hover:text-[#F3EEDD]"
                            }
                        `}
                    >
                        {item}
                    </button>
                ))}
            </section>

            {/* =====================================================
                COURSE GRID
            ====================================================== */}
            {filteredCourses.length > 0 ? (
                <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="
                                group relative overflow-hidden
                                rounded-2xl
                                border border-[#7C9A82]/20
                                bg-[#1B241E]
                                transition-all duration-200
                                hover:-translate-y-1
                                hover:border-[#7C9A82]/40
                            "
                        >

                            {/* Course Header */}
                            <div className="relative h-36 bg-[#161F19]">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F2B84B]/10">
                                        <BookOpen
                                            size={30}
                                            className="text-[#F2B84B]"
                                        />
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="absolute left-4 top-4">
                                    <span
                                        className={`
                                            rounded-full px-3 py-1
                                            text-xs font-semibold
                                            ${course.status === "Completed"
                                                ? "bg-[#7C9A82]/15 text-[#7C9A82]"
                                                : "bg-[#F2B84B]/10 text-[#F2B84B]"
                                            }
                                        `}
                                    >
                                        {course.status}
                                    </span>
                                </div>

                                {/* Menu */}
                                <div className="absolute right-3 top-3">
                                    <button
                                        onClick={() =>
                                            setOpenMenu(
                                                openMenu === course.id
                                                    ? null
                                                    : course.id
                                            )
                                        }
                                        className="
                                            rounded-lg p-2
                                            text-[#F3EEDD]/70
                                            transition
                                            hover:bg-[#1B241E]
                                            hover:text-[#F3EEDD]
                                        "
                                    >
                                        <MoreVertical size={18} />
                                    </button>

                                    {openMenu === course.id && (
                                        <div
                                            className="
                                                absolute right-0 top-10 z-20
                                                w-36 overflow-hidden
                                                rounded-xl
                                                border border-[#7C9A82]/20
                                                bg-[#1B241E]
                                                shadow-xl
                                            "
                                        >
                                            <button
                                                className="
                                                    w-full px-4 py-2.5
                                                    text-left text-xs
                                                    text-[#F3EEDD]
                                                    hover:bg-[#161F19]
                                                "
                                            >
                                                View Course
                                            </button>

                                            <button
                                                className="
                                                    w-full px-4 py-2.5
                                                    text-left text-xs
                                                    text-[#F3EEDD]
                                                    hover:bg-[#161F19]
                                                "
                                            >
                                                Course Details
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Course Content */}
                            <div className="p-5">

                                <p className="text-xs font-medium text-[#7C9A82]">
                                    {course.category}
                                </p>

                                <h2 className="mt-2 min-h-[48px] text-lg font-semibold leading-6 text-[#F3EEDD]">
                                    {course.title}
                                </h2>

                                <p className="mt-2 text-sm text-[#7C9A82]">
                                    By {course.instructor}
                                </p>

                                {/* Progress */}
                                <div className="mt-5">
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-xs text-[#7C9A82]">
                                            Course Progress
                                        </span>

                                        <span className="text-xs font-semibold text-[#F3EEDD]">
                                            {course.progress}%
                                        </span>
                                    </div>

                                    <div className="h-2 overflow-hidden rounded-full bg-[#161F19]">
                                        <div
                                            className={`
                                                h-full rounded-full
                                                ${course.progress === 100
                                                    ? "bg-[#7C9A82]"
                                                    : "bg-[#F2B84B]"
                                                }
                                            `}
                                            style={{
                                                width: `${course.progress}%`,
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Course Meta */}
                                <div className="mt-4 flex items-center justify-between border-t border-[#7C9A82]/15 pt-4">
                                    <div className="flex items-center gap-1.5 text-xs text-[#7C9A82]">
                                        <BookOpen size={14} />
                                        {course.completedLessons}/
                                        {course.totalLessons} lessons
                                    </div>

                                    <div className="flex items-center gap-1.5 text-xs text-[#7C9A82]">
                                        <Clock3 size={14} />
                                        {course.duration}
                                    </div>
                                </div>

                                {/* Action */}
                                <button
                                    className={`
                                        mt-5 flex w-full
                                        items-center justify-center gap-2
                                        rounded-xl px-4 py-3
                                        text-sm font-semibold
                                        transition
                                        ${course.status === "Completed"
                                            ? "border border-[#7C9A82]/30 text-[#7C9A82] hover:bg-[#7C9A82]/10"
                                            : "bg-[#F2B84B] text-[#161F19] hover:bg-[#F2B84B]/90"
                                        }
                                    `}
                                >
                                    {course.status === "Completed" ? (
                                        <>
                                            <CheckCircle2 size={17} />
                                            Review Course
                                        </>
                                    ) : (
                                        <>
                                            <PlayCircle size={17} />
                                            Continue Learning
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </section>
            ) : (
                /* =================================================
                    EMPTY STATE
                ================================================== */
                <section
                    className="
                        rounded-2xl
                        border border-[#7C9A82]/20
                        bg-[#1B241E]
                        px-6 py-16
                        text-center
                    "
                >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F2B84B]/10">
                        <Search
                            size={28}
                            className="text-[#F2B84B]"
                        />
                    </div>

                    <h2 className="mt-5 text-xl font-semibold text-[#F3EEDD]">
                        No courses found
                    </h2>

                    <p className="mx-auto mt-2 max-w-md text-sm text-[#7C9A82]">
                        We couldn't find any course matching your search or
                        selected filter.
                    </p>

                    <button
                        onClick={() => {
                            setSearch("");
                            setFilter("All");
                        }}
                        className="
                            mt-5 rounded-xl
                            bg-[#F2B84B]
                            px-5 py-3
                            text-sm font-semibold
                            text-[#161F19]
                            hover:bg-[#F2B84B]/90
                        "
                    >
                        Clear Filters
                    </button>
                </section>
            )}
        </div>
    );
};

/* =========================================================
   STAT CARD
========================================================= */

const StatCard = ({
    title,
    value,
    description,
    icon: Icon,
}) => {
    return (
        <div
            className="
                rounded-2xl
                border border-[#7C9A82]/20
                bg-[#1B241E]
                p-5
                transition
                hover:border-[#7C9A82]/40
            "
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-[#7C9A82]">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-[#F3EEDD]">
                        {value}
                    </h2>

                    <p className="mt-1 text-xs text-[#7C9A82]">
                        {description}
                    </p>
                </div>

                <div className="rounded-xl bg-[#F2B84B]/10 p-3">
                    <Icon
                        size={22}
                        className="text-[#F2B84B]"
                    />
                </div>
            </div>
        </div>
    );
};

export default MyCourses;