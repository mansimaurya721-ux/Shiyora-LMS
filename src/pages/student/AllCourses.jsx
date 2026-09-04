import React, { useMemo, useState } from "react";
import {
    Award,
    BookOpen,
    CheckCircle2,
    Clock3,
    GraduationCap,
    PlayCircle,
    Search,
    Star,
    Users,
    X,
} from "lucide-react";

const AllCourses = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [level, setLevel] = useState("All");
    const [selectedCourse, setSelectedCourse] = useState(null);

    const courses = [
        {
            id: 1,
            title: "Full Stack Web Development",
            category: "Development",
            level: "Intermediate",
            instructor: "Rahul Sharma",
            rating: 4.8,
            students: 245,
            lessons: 45,
            duration: "32 Hours",
            price: "₹2,999",
            description:
                "Learn full stack web development from frontend fundamentals to backend APIs and database integration.",
            topics: [
                "HTML & CSS",
                "JavaScript",
                "React.js",
                "Node.js",
                "Express.js",
                "Database",
            ],
        },
        {
            id: 2,
            title: "Java Programming",
            category: "Programming",
            level: "Beginner",
            instructor: "Amit Verma",
            rating: 4.7,
            students: 320,
            lessons: 50,
            duration: "38 Hours",
            price: "₹2,499",
            description:
                "Build a strong foundation in Java programming, object-oriented programming, collections, exception handling, and more.",
            topics: [
                "Java Basics",
                "OOPs",
                "Inheritance",
                "Collections",
                "Exception Handling",
                "File Handling",
            ],
        },
        {
            id: 3,
            title: "Database Management System",
            category: "Database",
            level: "Intermediate",
            instructor: "Priya Singh",
            rating: 4.6,
            students: 185,
            lessons: 35,
            duration: "24 Hours",
            price: "₹1,999",
            description:
                "Understand relational databases, SQL, normalization, transactions, keys, relationships, and database design.",
            topics: [
                "DBMS Basics",
                "SQL",
                "Normalization",
                "ER Model",
                "Transactions",
                "Database Design",
            ],
        },
        {
            id: 4,
            title: "HTML & CSS Fundamentals",
            category: "Web Development",
            level: "Beginner",
            instructor: "Neha Gupta",
            rating: 4.9,
            students: 410,
            lessons: 30,
            duration: "18 Hours",
            price: "₹1,499",
            description:
                "Learn how to build modern and responsive websites using HTML5 and CSS3 from the ground up.",
            topics: [
                "HTML5",
                "CSS3",
                "Flexbox",
                "Grid",
                "Responsive Design",
                "Animations",
            ],
        },
        {
            id: 5,
            title: "JavaScript Essentials",
            category: "Development",
            level: "Beginner",
            instructor: "Rahul Sharma",
            rating: 4.8,
            students: 375,
            lessons: 40,
            duration: "28 Hours",
            price: "₹2,199",
            description:
                "Master JavaScript fundamentals, DOM manipulation, events, arrays, objects, ES6, and asynchronous programming.",
            topics: [
                "JavaScript Basics",
                "Functions",
                "Arrays",
                "Objects",
                "DOM",
                "ES6",
            ],
        },
        {
            id: 6,
            title: "React.js Masterclass",
            category: "Development",
            level: "Advanced",
            instructor: "Vikash Kumar",
            rating: 4.9,
            students: 210,
            lessons: 48,
            duration: "35 Hours",
            price: "₹3,499",
            description:
                "Build modern React applications using components, hooks, routing, APIs, and best practices.",
            topics: [
                "React Components",
                "Hooks",
                "React Router",
                "State Management",
                "REST APIs",
                "Performance",
            ],
        },
        {
            id: 7,
            title: "UI/UX Design Fundamentals",
            category: "Design",
            level: "Beginner",
            instructor: "Sneha Kapoor",
            rating: 4.7,
            students: 160,
            lessons: 28,
            duration: "20 Hours",
            price: "₹1,799",
            description:
                "Learn the fundamentals of user interface and user experience design and create effective digital experiences.",
            topics: [
                "UI Principles",
                "UX Research",
                "Wireframing",
                "Prototyping",
                "Typography",
                "Design Systems",
            ],
        },
        {
            id: 8,
            title: "Advanced SQL",
            category: "Database",
            level: "Advanced",
            instructor: "Priya Singh",
            rating: 4.8,
            students: 135,
            lessons: 32,
            duration: "22 Hours",
            price: "₹2,299",
            description:
                "Take your SQL skills further with advanced queries, joins, subqueries, indexes, views, and database optimization.",
            topics: [
                "Advanced Queries",
                "Joins",
                "Subqueries",
                "Indexes",
                "Views",
                "Optimization",
            ],
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
            const searchValue = search.toLowerCase();

            const matchesSearch =
                course.title.toLowerCase().includes(searchValue) ||
                course.instructor.toLowerCase().includes(searchValue) ||
                course.category.toLowerCase().includes(searchValue);

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

    const handleEnroll = (course) => {
        alert(
            `Enrollment for "${course.title}" will be connected to the backend later.`
        );
    };

    return (
        <div className="min-h-screen bg-[#161F19] text-[#F3EEDD] p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#F2B84B] text-[#161F19] flex items-center justify-center">
                            <GraduationCap size={26} />
                        </div>

                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold">
                                All Courses
                            </h1>

                            <p className="text-[#7C9A82] mt-1">
                                Explore courses and find the right one
                                for your learning journey.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Search & Filters */}
                <div className="bg-[#1B241E] border border-[#7C9A82]/25 rounded-2xl p-4 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4">

                        {/* Search */}
                        <div className="relative flex-1">
                            <Search
                                size={19}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7C9A82]"
                            />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder="Search courses, instructors..."
                                className="w-full bg-[#161F19] border border-[#7C9A82]/25 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-[#F2B84B] text-[#F3EEDD] placeholder:text-[#7C9A82]"
                            />
                        </div>

                        {/* Category */}
                        <select
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                            className="bg-[#161F19] border border-[#7C9A82]/25 rounded-xl px-4 py-3 outline-none focus:border-[#F2B84B]"
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
                            onChange={(e) =>
                                setLevel(e.target.value)
                            }
                            className="bg-[#161F19] border border-[#7C9A82]/25 rounded-xl px-4 py-3 outline-none focus:border-[#F2B84B]"
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
                    </div>
                </div>

                {/* Result Header */}
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h2 className="text-lg font-semibold">
                            Available Courses
                        </h2>

                        <p className="text-sm text-[#7C9A82] mt-1">
                            {filteredCourses.length} courses found
                        </p>
                    </div>
                </div>

                {/* Courses */}
                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {filteredCourses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-[#1B241E] border border-[#7C9A82]/25 rounded-2xl overflow-hidden hover:border-[#7C9A82]/60 transition"
                            >
                                {/* Course Banner */}
                                <div className="h-36 bg-gradient-to-br from-[#F2B84B]/20 via-[#7C9A82]/10 to-[#161F19] flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-2xl bg-[#F2B84B] text-[#161F19] flex items-center justify-center">
                                        <BookOpen size={30} />
                                    </div>
                                </div>

                                <div className="p-5">

                                    {/* Category */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-3 py-1 rounded-full bg-[#7C9A82]/15 text-[#7C9A82] text-xs font-semibold">
                                            {course.category}
                                        </span>

                                        <span className="text-xs text-[#F2B84B]">
                                            {course.level}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold leading-6">
                                        {course.title}
                                    </h3>

                                    {/* Instructor */}
                                    <p className="text-sm text-[#7C9A82] mt-2">
                                        By {course.instructor}
                                    </p>

                                    {/* Rating */}
                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="flex items-center gap-1">
                                            <Star
                                                size={16}
                                                fill="#F2B84B"
                                                className="text-[#F2B84B]"
                                            />

                                            <span className="font-semibold">
                                                {course.rating}
                                            </span>
                                        </div>

                                        <span className="text-[#7C9A82] text-sm">
                                            ({course.students} students)
                                        </span>
                                    </div>

                                    {/* Course Stats */}
                                    <div className="grid grid-cols-3 gap-2 mt-5">

                                        <div className="bg-[#161F19] rounded-xl p-3 text-center">
                                            <BookOpen
                                                size={16}
                                                className="mx-auto text-[#7C9A82]"
                                            />

                                            <p className="text-sm font-semibold mt-1">
                                                {course.lessons}
                                            </p>

                                            <p className="text-[11px] text-[#7C9A82]">
                                                Lessons
                                            </p>
                                        </div>

                                        <div className="bg-[#161F19] rounded-xl p-3 text-center">
                                            <Clock3
                                                size={16}
                                                className="mx-auto text-[#7C9A82]"
                                            />

                                            <p className="text-sm font-semibold mt-1">
                                                {course.duration}
                                            </p>

                                            <p className="text-[11px] text-[#7C9A82]">
                                                Duration
                                            </p>
                                        </div>

                                        <div className="bg-[#161F19] rounded-xl p-3 text-center">
                                            <Users
                                                size={16}
                                                className="mx-auto text-[#7C9A82]"
                                            />

                                            <p className="text-sm font-semibold mt-1">
                                                {course.students}
                                            </p>

                                            <p className="text-[11px] text-[#7C9A82]">
                                                Students
                                            </p>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center justify-between mt-5">
                                        <span className="text-xl font-bold text-[#F2B84B]">
                                            {course.price}
                                        </span>

                                        <button
                                            onClick={() =>
                                                setSelectedCourse(course)
                                            }
                                            className="px-4 py-2 rounded-xl border border-[#7C9A82]/30 text-sm hover:bg-[#161F19] transition"
                                        >
                                            View Details
                                        </button>
                                    </div>

                                    {/* Enroll */}
                                    <button
                                        onClick={() =>
                                            handleEnroll(course)
                                        }
                                        className="w-full mt-4 px-4 py-3 rounded-xl bg-[#F2B84B] text-[#161F19] font-semibold flex items-center justify-center gap-2 hover:bg-[#e5aa3f] transition"
                                    >
                                        <PlayCircle size={18} />
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-[#1B241E] border border-[#7C9A82]/25 rounded-2xl p-12 text-center">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#F2B84B]/10 flex items-center justify-center">
                            <Search
                                size={28}
                                className="text-[#F2B84B]"
                            />
                        </div>

                        <h2 className="text-xl font-semibold mt-5">
                            No courses found
                        </h2>

                        <p className="text-[#7C9A82] mt-2">
                            Try changing your search or filters.
                        </p>

                        <button
                            onClick={() => {
                                setSearch("");
                                setCategory("All");
                                setLevel("All");
                            }}
                            className="mt-5 px-5 py-2.5 rounded-xl bg-[#F2B84B] text-[#161F19] font-semibold"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {/* Course Details Modal */}
                {selectedCourse && (
                    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
                        <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1B241E] border border-[#7C9A82]/30 rounded-2xl">

                            {/* Modal Header */}
                            <div className="p-6 border-b border-[#7C9A82]/20 flex items-start justify-between">
                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-[#7C9A82]/15 text-[#7C9A82] text-xs font-semibold">
                                        {selectedCourse.category}
                                    </span>

                                    <h2 className="text-2xl font-bold mt-3">
                                        {selectedCourse.title}
                                    </h2>

                                    <p className="text-[#7C9A82] mt-1">
                                        By {selectedCourse.instructor}
                                    </p>
                                </div>

                                <button
                                    onClick={() =>
                                        setSelectedCourse(null)
                                    }
                                    className="p-2 rounded-lg hover:bg-[#161F19]"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6">

                                <h3 className="font-semibold text-lg">
                                    About this course
                                </h3>

                                <p className="text-[#7C9A82] leading-7 mt-2">
                                    {selectedCourse.description}
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">

                                    <div className="bg-[#161F19] rounded-xl p-4 text-center">
                                        <BookOpen
                                            size={20}
                                            className="mx-auto text-[#F2B84B]"
                                        />

                                        <p className="font-bold text-lg mt-2">
                                            {selectedCourse.lessons}
                                        </p>

                                        <p className="text-xs text-[#7C9A82]">
                                            Lessons
                                        </p>
                                    </div>

                                    <div className="bg-[#161F19] rounded-xl p-4 text-center">
                                        <Clock3
                                            size={20}
                                            className="mx-auto text-[#F2B84B]"
                                        />

                                        <p className="font-bold text-lg mt-2">
                                            {selectedCourse.duration}
                                        </p>

                                        <p className="text-xs text-[#7C9A82]">
                                            Duration
                                        </p>
                                    </div>

                                    <div className="bg-[#161F19] rounded-xl p-4 text-center">
                                        <Users
                                            size={20}
                                            className="mx-auto text-[#F2B84B]"
                                        />

                                        <p className="font-bold text-lg mt-2">
                                            {selectedCourse.students}
                                        </p>

                                        <p className="text-xs text-[#7C9A82]">
                                            Students
                                        </p>
                                    </div>

                                    <div className="bg-[#161F19] rounded-xl p-4 text-center">
                                        <Star
                                            size={20}
                                            fill="#F2B84B"
                                            className="mx-auto text-[#F2B84B]"
                                        />

                                        <p className="font-bold text-lg mt-2">
                                            {selectedCourse.rating}
                                        </p>

                                        <p className="text-xs text-[#7C9A82]">
                                            Rating
                                        </p>
                                    </div>
                                </div>

                                {/* Topics */}
                                <div className="mt-7">
                                    <h3 className="font-semibold text-lg">
                                        What you'll learn
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                        {selectedCourse.topics.map(
                                            (topic) => (
                                                <div
                                                    key={topic}
                                                    className="flex items-center gap-3 text-sm text-[#7C9A82]"
                                                >
                                                    <CheckCircle2
                                                        size={18}
                                                        className="text-[#F2B84B] shrink-0"
                                                    />

                                                    {topic}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Course Info */}
                                <div className="mt-7 p-4 rounded-xl bg-[#161F19] border border-[#7C9A82]/20 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Award
                                            size={22}
                                            className="text-[#F2B84B]"
                                        />

                                        <div>
                                            <p className="font-semibold">
                                                Course Level
                                            </p>

                                            <p className="text-sm text-[#7C9A82]">
                                                {selectedCourse.level}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="text-xl font-bold text-[#F2B84B]">
                                        {selectedCourse.price}
                                    </span>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3 mt-7">
                                    <button
                                        onClick={() =>
                                            setSelectedCourse(null)
                                        }
                                        className="flex-1 px-5 py-3 rounded-xl border border-[#7C9A82]/30 font-medium hover:bg-[#161F19]"
                                    >
                                        Close
                                    </button>

                                    <button
                                        onClick={() => {
                                            handleEnroll(
                                                selectedCourse
                                            );
                                            setSelectedCourse(null);
                                        }}
                                        className="flex-1 px-5 py-3 rounded-xl bg-[#F2B84B] text-[#161F19] font-semibold hover:bg-[#e5aa3f]"
                                    >
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllCourses;