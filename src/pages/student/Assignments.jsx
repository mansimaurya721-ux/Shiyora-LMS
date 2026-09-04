import React, { useMemo, useState } from "react";
import {
    ClipboardList,
    Search,
    CalendarDays,
    Clock3,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
    BookOpen,
    Filter,
} from "lucide-react";

const Assignments = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const assignments = [
        {
            id: 1,
            title: "React Components Assignment",
            course: "Full Stack Web Development",
            instructor: "Rahul Sharma",
            dueDate: "September 3, 2026",
            daysLeft: "1 day left",
            status: "Pending",
            marks: "20 Marks",
        },
        {
            id: 2,
            title: "Java OOPs Practice",
            course: "Java Programming",
            instructor: "Priya Singh",
            dueDate: "September 5, 2026",
            daysLeft: "3 days left",
            status: "Pending",
            marks: "25 Marks",
        },
        {
            id: 3,
            title: "SQL Queries Task",
            course: "Database Management System",
            instructor: "Amit Verma",
            dueDate: "September 8, 2026",
            daysLeft: "6 days left",
            status: "Pending",
            marks: "20 Marks",
        },
        {
            id: 4,
            title: "HTML Portfolio Assignment",
            course: "HTML & CSS Fundamentals",
            instructor: "Neha Gupta",
            dueDate: "August 28, 2026",
            daysLeft: "Submitted",
            status: "Submitted",
            marks: "25 Marks",
        },
        {
            id: 5,
            title: "JavaScript DOM Task",
            course: "JavaScript Essentials",
            instructor: "Rohit Kumar",
            dueDate: "August 30, 2026",
            daysLeft: "Evaluated",
            status: "Graded",
            marks: "30 Marks",
        },
        {
            id: 6,
            title: "React Hooks Practice",
            course: "React.js Development",
            instructor: "Ankit Singh",
            dueDate: "September 12, 2026",
            daysLeft: "10 days left",
            status: "Pending",
            marks: "20 Marks",
        },
    ];

    const filteredAssignments = useMemo(() => {
        return assignments.filter((assignment) => {
            const searchText = search.toLowerCase();

            const matchesSearch =
                assignment.title.toLowerCase().includes(searchText) ||
                assignment.course.toLowerCase().includes(searchText) ||
                assignment.instructor.toLowerCase().includes(searchText);

            const matchesFilter =
                filter === "All" || assignment.status === filter;

            return matchesSearch && matchesFilter;
        });
    }, [search, filter]);

    const pendingCount = assignments.filter(
        (item) => item.status === "Pending"
    ).length;

    const submittedCount = assignments.filter(
        (item) => item.status === "Submitted"
    ).length;

    const gradedCount = assignments.filter(
        (item) => item.status === "Graded"
    ).length;

    return (
        <div className="space-y-8">

            {/* =====================================================
                HEADER
            ====================================================== */}
            <section>
                <p className="mb-2 text-sm font-medium text-[#7C9A82]">
                    Academic Tasks
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-[#F3EEDD] sm:text-4xl">
                    Assignments
                </h1>

                <p className="mt-2 max-w-2xl text-sm text-[#7C9A82] sm:text-base">
                    Track your assignments, deadlines and submission status.
                </p>
            </section>

            {/* =====================================================
                STATS
            ====================================================== */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    title="Total Assignments"
                    value={assignments.length}
                    description="All assignments"
                    icon={ClipboardList}
                />

                <StatCard
                    title="Pending"
                    value={pendingCount}
                    description="Need your attention"
                    icon={Clock3}
                />

                <StatCard
                    title="Submitted"
                    value={submittedCount}
                    description="Awaiting evaluation"
                    icon={CheckCircle2}
                />

                <StatCard
                    title="Graded"
                    value={gradedCount}
                    description="Completed evaluation"
                    icon={CheckCircle2}
                />

            </section>

            {/* =====================================================
                SEARCH + FILTER
            ====================================================== */}
            <section
                className="
                    flex flex-col gap-4
                    rounded-2xl
                    border border-[#7C9A82]/20
                    bg-[#1B241E]
                    p-4
                    lg:flex-row lg:items-center lg:justify-between
                "
            >
                {/* Search */}
                <div className="relative w-full lg:max-w-md">
                    <Search
                        size={18}
                        className="
                            absolute left-3.5 top-1/2
                            -translate-y-1/2
                            text-[#7C9A82]
                        "
                    />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search assignments..."
                        className="
                            w-full rounded-xl
                            border border-[#7C9A82]/25
                            bg-[#161F19]
                            py-3 pl-10 pr-4
                            text-sm text-[#F3EEDD]
                            outline-none
                            placeholder:text-[#7C9A82]
                            focus:border-[#F2B84B]
                        "
                    />
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2 overflow-x-auto">
                    <Filter
                        size={17}
                        className="shrink-0 text-[#7C9A82]"
                    />

                    {["All", "Pending", "Submitted", "Graded"].map(
                        (item) => (
                            <button
                                key={item}
                                onClick={() => setFilter(item)}
                                className={`
                                    whitespace-nowrap
                                    rounded-lg px-4 py-2.5
                                    text-sm font-medium
                                    transition
                                    ${filter === item
                                        ? "bg-[#F2B84B] text-[#161F19]"
                                        : "bg-[#161F19] text-[#7C9A82] hover:text-[#F3EEDD]"
                                    }
                                `}
                            >
                                {item}
                            </button>
                        )
                    )}
                </div>
            </section>

            {/* =====================================================
                ASSIGNMENT LIST
            ====================================================== */}
            <section
                className="
                    overflow-hidden
                    rounded-2xl
                    border border-[#7C9A82]/20
                    bg-[#1B241E]
                "
            >
                {/* Section Header */}
                <div className="border-b border-[#7C9A82]/20 p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-[#F3EEDD]">
                                Your Assignments
                            </h2>

                            <p className="mt-1 text-sm text-[#7C9A82]">
                                {filteredAssignments.length} assignments found
                            </p>
                        </div>

                        <ClipboardList
                            size={22}
                            className="text-[#F2B84B]"
                        />
                    </div>
                </div>

                {/* Assignment Items */}
                {filteredAssignments.length > 0 ? (
                    <div className="divide-y divide-[#7C9A82]/15">
                        {filteredAssignments.map((assignment) => (
                            <div
                                key={assignment.id}
                                className="
                                    p-5
                                    transition
                                    hover:bg-[#161F19]/40
                                "
                            >
                                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                                    {/* Left */}
                                    <div className="flex min-w-0 items-start gap-4">
                                        <div
                                            className="
                                                flex h-12 w-12
                                                shrink-0 items-center
                                                justify-center
                                                rounded-xl
                                                bg-[#F2B84B]/10
                                            "
                                        >
                                            <ClipboardList
                                                size={22}
                                                className="text-[#F2B84B]"
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="text-sm font-semibold text-[#F3EEDD] sm:text-base">
                                                {assignment.title}
                                            </h3>

                                            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                                                <span className="flex items-center gap-1 text-xs text-[#7C9A82]">
                                                    <BookOpen size={13} />
                                                    {assignment.course}
                                                </span>

                                                <span className="text-[#7C9A82]/50">
                                                    •
                                                </span>

                                                <span className="text-xs text-[#7C9A82]">
                                                    {assignment.instructor}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right */}
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                                        {/* Due Date */}
                                        <div className="min-w-[150px]">
                                            <p className="mb-1 text-[11px] uppercase tracking-wide text-[#7C9A82]">
                                                Due Date
                                            </p>

                                            <div className="flex items-center gap-2 text-sm text-[#F3EEDD]">
                                                <CalendarDays
                                                    size={15}
                                                    className="text-[#7C9A82]"
                                                />

                                                {assignment.dueDate}
                                            </div>
                                        </div>

                                        {/* Marks */}
                                        <div className="min-w-[90px]">
                                            <p className="mb-1 text-[11px] uppercase tracking-wide text-[#7C9A82]">
                                                Marks
                                            </p>

                                            <p className="text-sm font-medium text-[#F3EEDD]">
                                                {assignment.marks}
                                            </p>
                                        </div>

                                        {/* Status */}
                                        <StatusBadge
                                            status={assignment.status}
                                        />

                                        {/* Button */}
                                        <button
                                            className="
                                                flex items-center
                                                justify-center gap-2
                                                rounded-xl
                                                border border-[#7C9A82]/25
                                                px-4 py-2.5
                                                text-sm font-medium
                                                text-[#F3EEDD]
                                                transition
                                                hover:border-[#F2B84B]/40
                                                hover:text-[#F2B84B]
                                            "
                                        >
                                            {assignment.status === "Pending"
                                                ? "Open"
                                                : "View"}
                                            <ArrowRight size={15} />
                                        </button>
                                    </div>
                                </div>

                                {/* Deadline Warning */}
                                {assignment.status === "Pending" &&
                                    assignment.daysLeft === "1 day left" && (
                                        <div
                                            className="
                                                mt-4 flex items-center gap-2
                                                rounded-lg
                                                border border-[#F2B84B]/20
                                                bg-[#F2B84B]/5
                                                px-3 py-2
                                                text-xs text-[#F2B84B]
                                            "
                                        >
                                            <AlertCircle size={14} />

                                            <span>
                                                This assignment is due soon.
                                                Make sure to submit it before
                                                the deadline.
                                            </span>
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="px-6 py-16 text-center">
                        <div
                            className="
                                mx-auto flex h-16 w-16
                                items-center justify-center
                                rounded-2xl
                                bg-[#F2B84B]/10
                            "
                        >
                            <Search
                                size={28}
                                className="text-[#F2B84B]"
                            />
                        </div>

                        <h2 className="mt-5 text-xl font-semibold text-[#F3EEDD]">
                            No assignments found
                        </h2>

                        <p className="mx-auto mt-2 max-w-md text-sm text-[#7C9A82]">
                            Try changing your search or selecting another
                            assignment status.
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
                    </div>
                )}
            </section>

            {/* =====================================================
                DEADLINE REMINDER
            ====================================================== */}
            <section
                className="
                    rounded-2xl
                    border border-[#F2B84B]/25
                    bg-[#1B241E]
                    p-5
                "
            >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F2B84B]/10">
                        <Clock3
                            size={21}
                            className="text-[#F2B84B]"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-[#F3EEDD]">
                            Stay on track
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-[#7C9A82]">
                            Complete your pending assignments before their
                            deadlines to maintain your learning progress.
                        </p>
                    </div>
                </div>
            </section>
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

/* =========================================================
   STATUS BADGE
========================================================= */

const StatusBadge = ({ status }) => {
    const styles = {
        Pending:
            "border-[#F2B84B]/30 bg-[#F2B84B]/10 text-[#F2B84B]",
        Submitted:
            "border-[#7C9A82]/30 bg-[#7C9A82]/10 text-[#7C9A82]",
        Graded:
            "border-[#7C9A82]/30 bg-[#7C9A82]/10 text-[#7C9A82]",
    };

    return (
        <span
            className={`
                inline-flex w-fit
                rounded-full
                border
                px-3 py-1
                text-xs font-semibold
                ${styles[status] || styles.Pending}
            `}
        >
            {status}
        </span>
    );
};

export default Assignments;