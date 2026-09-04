import React from "react";
import {
    TrendingUp,
    BookOpen,
    CheckCircle2,
    Clock3,
    Target,
    Award,
    BarChart3,
    CalendarDays,
} from "lucide-react";

const Progress = () => {
    const courseProgress = [
        {
            id: 1,
            title: "Full Stack Web Development",
            instructor: "Rahul Sharma",
            progress: 72,
            completed: 18,
            total: 25,
            hours: "12h 40m",
            status: "In Progress",
        },
        {
            id: 2,
            title: "Java Programming",
            instructor: "Priya Singh",
            progress: 48,
            completed: 12,
            total: 25,
            hours: "8h 20m",
            status: "In Progress",
        },
        {
            id: 3,
            title: "Database Management System",
            instructor: "Amit Verma",
            progress: 35,
            completed: 7,
            total: 20,
            hours: "6h 15m",
            status: "In Progress",
        },
        {
            id: 4,
            title: "HTML & CSS Fundamentals",
            instructor: "Neha Gupta",
            progress: 100,
            completed: 20,
            total: 20,
            hours: "5h 30m",
            status: "Completed",
        },
        {
            id: 5,
            title: "JavaScript Essentials",
            instructor: "Rohit Kumar",
            progress: 100,
            completed: 22,
            total: 22,
            hours: "7h 10m",
            status: "Completed",
        },
    ];

    const weeklyActivity = [
        {
            day: "Mon",
            hours: 1.2,
        },
        {
            day: "Tue",
            hours: 0.8,
        },
        {
            day: "Wed",
            hours: 1.5,
        },
        {
            day: "Thu",
            hours: 0.5,
        },
        {
            day: "Fri",
            hours: 1.1,
        },
        {
            day: "Sat",
            hours: 2.0,
        },
        {
            day: "Sun",
            hours: 0.9,
        },
    ];

    const maxHours = Math.max(
        ...weeklyActivity.map((item) => item.hours)
    );

    return (
        <div className="space-y-8">

            {/* =====================================================
                HEADER
            ====================================================== */}
            <section>
                <p className="mb-2 text-sm font-medium text-[#7C9A82]">
                    Learning Analytics
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-[#F3EEDD] sm:text-4xl">
                    My Progress
                </h1>

                <p className="mt-2 max-w-2xl text-sm text-[#7C9A82] sm:text-base">
                    Track your learning performance, course completion and
                    study activity.
                </p>
            </section>

            {/* =====================================================
                OVERALL PROGRESS
            ====================================================== */}
            <section
                className="
                    rounded-2xl
                    border border-[#7C9A82]/20
                    bg-[#1B241E]
                    p-6
                "
            >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center">

                    {/* Progress Circle */}
                    <div className="flex shrink-0 justify-center">
                        <div
                            className="
                                relative flex h-40 w-40
                                items-center justify-center
                                rounded-full
                                border-[12px]
                                border-[#F2B84B]/20
                            "
                        >
                            <div
                                className="
                                    absolute inset-[-12px]
                                    rounded-full
                                    border-[12px]
                                    border-transparent
                                    border-t-[#F2B84B]
                                    border-r-[#F2B84B]
                                    rotate-[-35deg]
                                "
                            />

                            <div className="text-center">
                                <p className="text-3xl font-bold text-[#F3EEDD]">
                                    61%
                                </p>

                                <p className="text-xs text-[#7C9A82]">
                                    Overall
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Overview */}
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <TrendingUp
                                size={21}
                                className="text-[#F2B84B]"
                            />

                            <h2 className="text-xl font-semibold text-[#F3EEDD]">
                                Overall Learning Progress
                            </h2>
                        </div>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#7C9A82]">
                            You're making steady progress across your enrolled
                            courses. Keep learning consistently to reach your
                            goals.
                        </p>

                        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            <ProgressStat
                                value="06"
                                label="Courses"
                            />

                            <ProgressStat
                                value="61%"
                                label="Completed"
                            />

                            <ProgressStat
                                value="80"
                                label="Lessons"
                            />

                            <ProgressStat
                                value="42h"
                                label="Learning Time"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                STAT CARDS
            ====================================================== */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    title="Lessons Completed"
                    value="80"
                    description="Out of 112 lessons"
                    icon={CheckCircle2}
                />

                <StatCard
                    title="Learning Hours"
                    value="42h"
                    description="Total study time"
                    icon={Clock3}
                />

                <StatCard
                    title="Current Streak"
                    value="7"
                    description="Days in a row"
                    icon={Target}
                />

                <StatCard
                    title="Certificates"
                    value="02"
                    description="Certificates earned"
                    icon={Award}
                />

            </section>

            {/* =====================================================
                MAIN GRID
            ====================================================== */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

                {/* =================================================
                    COURSE PROGRESS
                ================================================== */}
                <section
                    className="
                        overflow-hidden
                        rounded-2xl
                        border border-[#7C9A82]/20
                        bg-[#1B241E]
                        xl:col-span-2
                    "
                >
                    <div className="border-b border-[#7C9A82]/20 p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-semibold text-[#F3EEDD]">
                                    Course Progress
                                </h2>

                                <p className="mt-1 text-sm text-[#7C9A82]">
                                    Progress across your courses
                                </p>
                            </div>

                            <BarChart3
                                size={21}
                                className="text-[#F2B84B]"
                            />
                        </div>
                    </div>

                    <div className="divide-y divide-[#7C9A82]/15">
                        {courseProgress.map((course) => (
                            <div
                                key={course.id}
                                className="
                                    p-5
                                    transition
                                    hover:bg-[#161F19]/40
                                "
                            >
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                    <div className="flex min-w-0 items-center gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F2B84B]/10">
                                            <BookOpen
                                                size={20}
                                                className="text-[#F2B84B]"
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="truncate text-sm font-semibold text-[#F3EEDD]">
                                                {course.title}
                                            </h3>

                                            <p className="mt-1 text-xs text-[#7C9A82]">
                                                {course.instructor}
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className={`
                                            w-fit rounded-full
                                            border px-3 py-1
                                            text-xs font-medium
                                            ${course.progress === 100
                                                ? "border-[#7C9A82]/30 bg-[#7C9A82]/10 text-[#7C9A82]"
                                                : "border-[#F2B84B]/30 bg-[#F2B84B]/10 text-[#F2B84B]"
                                            }
                                        `}
                                    >
                                        {course.status}
                                    </span>
                                </div>

                                {/* Progress Bar */}
                                <div className="mt-4">
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-xs text-[#7C9A82]">
                                            {course.completed} / {course.total}{" "}
                                            lessons
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

                                <div className="mt-3 flex items-center gap-2 text-xs text-[#7C9A82]">
                                    <Clock3 size={13} />
                                    {course.hours} learning time
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* =================================================
                    WEEKLY ACTIVITY
                ================================================== */}
                <section
                    className="
                        rounded-2xl
                        border border-[#7C9A82]/20
                        bg-[#1B241E]
                        p-5
                    "
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-[#F3EEDD]">
                                Weekly Activity
                            </h2>

                            <p className="mt-1 text-sm text-[#7C9A82]">
                                Hours learned this week
                            </p>
                        </div>

                        <CalendarDays
                            size={20}
                            className="text-[#F2B84B]"
                        />
                    </div>

                    {/* Chart */}
                    <div className="mt-8 flex h-52 items-end justify-between gap-2">
                        {weeklyActivity.map((item) => {
                            const height =
                                (item.hours / maxHours) * 100;

                            return (
                                <div
                                    key={item.day}
                                    className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                                >
                                    <span className="text-[10px] text-[#7C9A82]">
                                        {item.hours}h
                                    </span>

                                    <div className="flex h-36 w-full items-end justify-center">
                                        <div
                                            className="
                                                w-full max-w-7
                                                rounded-t-lg
                                                bg-[#F2B84B]
                                                transition-all
                                                hover:bg-[#F2B84B]/80
                                            "
                                            style={{
                                                height: `${height}%`,
                                            }}
                                        />
                                    </div>

                                    <span className="text-[10px] font-medium text-[#7C9A82]">
                                        {item.day}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Weekly Total */}
                    <div className="mt-6 rounded-xl bg-[#161F19] p-4">
                        <p className="text-xs text-[#7C9A82]">
                            This Week
                        </p>

                        <div className="mt-1 flex items-end justify-between">
                            <p className="text-2xl font-bold text-[#F3EEDD]">
                                8.0h
                            </p>

                            <span className="text-xs font-medium text-[#7C9A82]">
                                Goal: 10h
                            </span>
                        </div>

                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#1B241E]">
                            <div
                                className="h-full rounded-full bg-[#F2B84B]"
                                style={{ width: "80%" }}
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* =====================================================
                LEARNING GOALS
            ====================================================== */}
            <section
                className="
                    rounded-2xl
                    border border-[#7C9A82]/20
                    bg-[#1B241E]
                    p-5
                "
            >
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-[#F2B84B]/10 p-3">
                        <Target
                            size={21}
                            className="text-[#F2B84B]"
                        />
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-[#F3EEDD]">
                            Learning Goals
                        </h2>

                        <p className="mt-1 text-sm text-[#7C9A82]">
                            Your current learning targets
                        </p>
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">

                    <GoalCard
                        title="Complete Courses"
                        current="2"
                        target="4"
                        percentage={50}
                    />

                    <GoalCard
                        title="Learning Hours"
                        current="42"
                        target="50"
                        percentage={84}
                    />

                    <GoalCard
                        title="Complete Lessons"
                        current="80"
                        target="100"
                        percentage={80}
                    />

                </div>
            </section>

            {/* =====================================================
                MOTIVATION
            ====================================================== */}
            <section
                className="
                    rounded-2xl
                    border border-[#F2B84B]/25
                    bg-[#1B241E]
                    p-6
                "
            >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F2B84B]/10">
                        <TrendingUp
                            size={23}
                            className="text-[#F2B84B]"
                        />
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-[#F3EEDD]">
                            Keep Going!
                        </h2>

                        <p className="mt-1 text-sm leading-6 text-[#7C9A82]">
                            You're making great progress. Stay consistent
                            with your learning routine and you'll reach your
                            goals faster.
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
   PROGRESS STAT
========================================================= */

const ProgressStat = ({ value, label }) => {
    return (
        <div className="rounded-xl bg-[#161F19] p-3">
            <p className="text-lg font-bold text-[#F3EEDD]">
                {value}
            </p>

            <p className="mt-1 text-xs text-[#7C9A82]">
                {label}
            </p>
        </div>
    );
};

/* =========================================================
   GOAL CARD
========================================================= */

const GoalCard = ({
    title,
    current,
    target,
    percentage,
}) => {
    return (
        <div className="rounded-xl border border-[#7C9A82]/20 bg-[#161F19] p-4">
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-[#F3EEDD]">
                    {title}
                </p>

                <span className="text-xs font-semibold text-[#F2B84B]">
                    {percentage}%
                </span>
            </div>

            <p className="mt-2 text-xs text-[#7C9A82]">
                {current} / {target}
            </p>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#1B241E]">
                <div
                    className="h-full rounded-full bg-[#F2B84B]"
                    style={{
                        width: `${percentage}%`,
                    }}
                />
            </div>
        </div>
    );
};

export default Progress;