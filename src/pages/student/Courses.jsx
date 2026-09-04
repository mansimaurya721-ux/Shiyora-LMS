import React, { useMemo, useState } from "react";
import {
    BookOpen,
    Search,
    Clock3,
    Users,
    Star,
    Filter,
    ArrowRight,
    PlayCircle,
    X,
} from "lucide-react";

const Courses = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [level, setLevel] = useState("All");
    const [selectedCourse, setSelectedCourse] = useState(null);

    const courses = [
        {
            id: 1,
            title: "Full Stack Web Development",
            instructor: "Rahul Sharma",
            category: "Development",
            level: "Intermediate",
            duration: "12h 40m",
            lessons: 25,
            students: 245,
            rating: 4.8,
            description:
                "Learn modern full stack web development with frontend, backend, databases and APIs.",
        },
        {
            id: 2,
            title: "Java Programming",
            instructor: "Priya Singh",
            category: "Programming",
            level: "Beginner",
            duration: "8h 20m",
            lessons: 25,
            students: 318,
            rating: 4.7,
            description:
                "Build a strong foundation in Java programming, OOPs, collections and exception handling.",
        },
        {
            id: 3,
            title: "Database Management System",
            instructor: "Amit Verma",
            category: "Database",
            level: "Intermediate",
            duration: "6h 15m",
            lessons: 20,
            students: 192,
            rating: 4.6,
            description:
                "Understand databases, SQL, normalization, transactions and database design.",
        },
        {
            id: 4,
            title: "HTML & CSS Fundamentals",
            instructor: "Neha Gupta",
            category: "Web Development",
            level: "Beginner",
            duration: "5h 30m",
            lessons: 20,
            students: 426,
            rating: 4.9,
            description:
                "Learn how to create responsive and professional websites using HTML and CSS.",
        },
        {
            id: 5,
            title: "JavaScript Essentials",
            instructor: "Rohit Kumar",
            category: "Web Development",
            level: "Intermediate",
            duration: "7h 10m",
            lessons: 22,
            students: 381,
            rating: 4.8,
            description:
                "Master JavaScript fundamentals, ES6, DOM manipulation, events and asynchronous programming.",
        },
        {
            id: 6,
            title: "React.js Development",
            instructor: "Ankit Singh",
            category: "Development",
            level: "Advanced",
            duration: "9h 45m",
            lessons: 20,
            students: 276,
            rating: 4.7,
            description:
                "Build modern React applications using components, hooks, routing and state management.",
        },
        {
            id: 7,
            title: "Python Programming",
            instructor: "Karan Mehta",
            category: "Programming",
            level: "Beginner",
            duration: "10h 15m",
            lessons: 28,
            students: 352,
            rating: 4.8,
            description:
                "Start programming with Python and learn variables, functions, collections and modules.",
        },
        {
            id: 8,
            title: "UI/UX Design Basics",
            instructor: "Simran Kapoor",
            category: "Design",
            level: "Beginner",
            duration: "4h 50m",
            lessons: 16,
            students: 214,
            rating: 4.5,
            description:
                "Learn the fundamentals of user interface and user experience design.",
        },
    ];

    const categories = [
        "All",
        "Development",
        "Programming",
        "Database",
        "Web Development",
        "Design",
    ];

    const levels = [
        "All",
        "Beginner",
        "Intermediate",
        "Advanced",
    ];

    const filteredCourses = useMemo(() => {
        return courses.filter((course) => {
            const searchText = search.toLowerCase();

            const matchesSearch =
                course.title.toLowerCase().includes(searchText) ||
                course.instructor.toLowerCase().includes(searchText) ||
                course.category.toLowerCase().includes(searchText);

            const matchesCategory =
                category === "All" || course.category === category;

            const matchesLevel =
                level === "All" || course.level === level;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesLevel
            );
        });
    }, [search, category, level]);

    const clearFilters = () => {
        setSearch("");
        setCategory("All");
        setLevel("All");
    };

    return (
        <div className="space-y-8">

            {/* =====================================================
                HEADER
            ====================================================== */}
            <section>
                <p className="mb-2 text-sm font-medium text-[#7C9A82]">
                    Learning Library
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-[#F3EEDD] sm:text-4xl">
                    Browse Courses
                </h1>

                <p className="mt-2 max-w-2xl text-sm text-[#7C9A82] sm:text-base">
                    Explore courses, learn new skills and find your next
                    learning opportunity.
                </p>
            </section>

            {/* =====================================================
                SEARCH
            ====================================================== */}
            <section
                className="
                    rounded-2xl
                    border border-[#7C9A82]/20
                    bg-[#1B241E]
                    p-4
                "
            >
                <div className="relative">
                    <Search
                        size={19}
                        className="
                            absolute left-4 top-1/2
                            -translate-y-1/2
                            text-[#7C9A82]
                        "
                    />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search courses, instructors or categories..."
                        className="
                            w-full rounded-xl
                            border border-[#7C9A82]/25
                            bg-[#161F19]
                            py-3.5 pl-11 pr-4
                            text-sm text-[#F3EEDD]
                            outline-none
                            placeholder:text-[#7C9A82]
                            focus:border-[#F2B84B]
                        "
                    />
                </div>
            </section>

            {/* =====================================================
                FILTERS
            ====================================================== */}
            <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex items-center gap-2">
                    <Filter
                        size={18}
                        className="text-[#7C9A82]"
                    />

                    <span className="text-sm font-medium text-[#F3EEDD]">
                        Filters
                    </span>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">

                    {/* Category */}
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="
                            rounded-xl
                            border border-[#7C9A82]/25
                            bg-[#1B241E]
                            px-4 py-2.5
                            text-sm text-[#F3EEDD]
                            outline-none
                            focus:border-[#F2B84B]
                        "
                    >
                        {categories.map((item) => (
                            <option
                                key={item}
                                value={item}
                                className="bg-[#1B241E]"
                            >
                                {item}
                            </option>
                        ))}
                    </select>

                    {/* Level */}
                    <select
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="
                            rounded-xl
                            border border-[#7C9A82]/25
                            bg-[#1B241E]
                            px-4 py-2.5
                            text-sm text-[#F3EEDD]
                            outline-none
                            focus:border-[#F2B84B]
                        "
                    >
                        {levels.map((item) => (
                            <option
                                key={item}
                                value={item}
                                className="bg-[#1B241E]"
                            >
                                {item}
                            </option>
                        ))}
                    </select>

                    {(search || category !== "All" || level !== "All") && (
                        <button
                            onClick={clearFilters}
                            className="
                                rounded-xl
                                border border-[#D6402C]/30
                                px-4 py-2.5
                                text-sm font-medium
                                text-[#D6402C]
                                transition
                                hover:bg-[#D6402C]/10
                            "
                        >
                            Clear
                        </button>
                    )}
                </div>
            </section>

            {/* =====================================================
                RESULTS COUNT
            ====================================================== */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-[#7C9A82]">
                    Showing{" "}
                    <span className="font-semibold text-[#F3EEDD]">
                        {filteredCourses.length}
                    </span>{" "}
                    courses
                </p>
            </div>

            {/* =====================================================
                COURSE GRID
            ====================================================== */}
            {filteredCourses.length > 0 ? (
                <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="
                                overflow-hidden
                                rounded-2xl
                                border border-[#7C9A82]/20
                                bg-[#1B241E]
                                transition-all duration-200
                                hover:-translate-y-1
                                hover:border-[#7C9A82]/40
                            "
                        >
                            {/* Course Visual */}
                            <div
                                className="
                                    relative h-40
                                    bg-[#161F19]
                                "
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F2B84B]/10">
                                        <BookOpen
                                            size={30}
                                            className="text-[#F2B84B]"
                                        />
                                    </div>
                                </div>

                                {/* Level Badge */}
                                <span
                                    className="
                                        absolute left-4 top-4
                                        rounded-full
                                        bg-[#7C9A82]/10
                                        px-3 py-1
                                        text-xs font-medium
                                        text-[#7C9A82]
                                    "
                                >
                                    {course.level}
                                </span>
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

                                {/* Rating */}
                                <div className="mt-4 flex items-center gap-1.5">
                                    <Star
                                        size={15}
                                        className="fill-[#F2B84B] text-[#F2B84B]"
                                    />

                                    <span className="text-sm font-semibold text-[#F3EEDD]">
                                        {course.rating}
                                    </span>

                                    <span className="text-xs text-[#7C9A82]">
                                        ({course.students} students)
                                    </span>
                                </div>

                                {/* Course Info */}
                                <div className="mt-4 flex items-center justify-between border-t border-[#7C9A82]/15 pt-4">

                                    <div className="flex items-center gap-1.5 text-xs text-[#7C9A82]">
                                        <BookOpen size={14} />
                                        {course.lessons} lessons
                                    </div>

                                    <div className="flex items-center gap-1.5 text-xs text-[#7C9A82]">
                                        <Clock3 size={14} />
                                        {course.duration}
                                    </div>
                                </div>

                                {/* Action */}
                                <button
                                    onClick={() =>
                                        setSelectedCourse(course)
                                    }
                                    className="
                                        mt-5 flex w-full
                                        items-center justify-center
                                        gap-2 rounded-xl
                                        bg-[#F2B84B]
                                        px-4 py-3
                                        text-sm font-semibold
                                        text-[#161F19]
                                        transition
                                        hover:bg-[#F2B84B]/90
                                    "
                                >
                                    View Course
                                    <ArrowRight size={17} />
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
                        Try changing your search or selecting a different
                        category or level.
                    </p>

                    <button
                        onClick={clearFilters}
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

            {/* =====================================================
                COURSE DETAILS MODAL
            ====================================================== */}
            {selectedCourse && (
                <div
                    className="
                        fixed inset-0 z-50
                        flex items-center justify-center
                        bg-black/70
                        p-4
                    "
                    onClick={() => setSelectedCourse(null)}
                >
                    <div
                        className="
                            w-full max-w-lg
                            overflow-hidden
                            rounded-2xl
                            border border-[#7C9A82]/25
                            bg-[#1B241E]
                            shadow-2xl
                        "
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-start justify-between border-b border-[#7C9A82]/20 p-5">
                            <div>
                                <p className="text-xs font-medium text-[#7C9A82]">
                                    {selectedCourse.category}
                                </p>

                                <h2 className="mt-1 text-xl font-bold text-[#F3EEDD]">
                                    {selectedCourse.title}
                                </h2>
                            </div>

                            <button
                                onClick={() => setSelectedCourse(null)}
                                className="
                                    rounded-lg p-2
                                    text-[#7C9A82]
                                    hover:bg-[#161F19]
                                    hover:text-[#F3EEDD]
                                "
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-5">

                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2B84B]/10">
                                    <BookOpen
                                        size={23}
                                        className="text-[#F2B84B]"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-[#F3EEDD]">
                                        {selectedCourse.instructor}
                                    </p>

                                    <p className="text-xs text-[#7C9A82]">
                                        Course Instructor
                                    </p>
                                </div>
                            </div>

                            <p className="mt-5 text-sm leading-6 text-[#7C9A82]">
                                {selectedCourse.description}
                            </p>

                            {/* Course Details */}
                            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

                                <InfoItem
                                    icon={Clock3}
                                    label="Duration"
                                    value={selectedCourse.duration}
                                />

                                <InfoItem
                                    icon={BookOpen}
                                    label="Lessons"
                                    value={selectedCourse.lessons}
                                />

                                <InfoItem
                                    icon={Users}
                                    label="Students"
                                    value={selectedCourse.students}
                                />

                                <InfoItem
                                    icon={Star}
                                    label="Rating"
                                    value={selectedCourse.rating}
                                />

                            </div>

                            {/* Enroll */}
                            <button
                                onClick={() => {
                                    alert(
                                        `Enrollment request for ${selectedCourse.title}`
                                    );
                                }}
                                className="
                                    mt-6 flex w-full
                                    items-center justify-center
                                    gap-2 rounded-xl
                                    bg-[#F2B84B]
                                    px-5 py-3
                                    text-sm font-semibold
                                    text-[#161F19]
                                    transition
                                    hover:bg-[#F2B84B]/90
                                "
                            >
                                <PlayCircle size={18} />
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

/* =========================================================
   INFO ITEM
========================================================= */

const InfoItem = ({
    icon: Icon,
    label,
    value,
}) => {
    return (
        <div className="rounded-xl bg-[#161F19] p-3">
            <Icon
                size={16}
                className="text-[#F2B84B]"
            />

            <p className="mt-2 text-[11px] text-[#7C9A82]">
                {label}
            </p>

            <p className="mt-1 text-sm font-semibold text-[#F3EEDD]">
                {value}
            </p>
        </div>
    );
};

export default Courses;