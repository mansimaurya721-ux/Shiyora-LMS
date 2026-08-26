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
        <div className="min-h-screen bg-slate-50 p-4 md:p-6 lg:p-8">

            {/* Header */}
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>
                    <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
                        Courses
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage and monitor courses across the Shiyora platform.
                    </p>
                </div>

                <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                >
                    <Plus size={18} />
                    Add Course
                </button>

            </div>

            {/* Statistics */}
            <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-slate-500">
                                Total Courses
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-slate-800">
                                1,245
                            </h2>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <BookOpen size={24} />
                        </div>

                    </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-slate-500">
                                Published
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-slate-800">
                                1,180
                            </h2>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                            <CheckCircle size={24} />
                        </div>

                    </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-slate-500">
                                Pending
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-slate-800">
                                65
                            </h2>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                            <Clock size={24} />
                        </div>

                    </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-slate-500">
                                Enrolled Students
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-slate-800">
                                18,420
                            </h2>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                            <Users size={24} />
                        </div>

                    </div>
                </div>

            </div>

            {/* Search */}
            <div className="mb-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">

                <div className="relative max-w-md">

                    <Search
                        size={19}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        type="text"
                        placeholder="Search courses..."
                        className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    />

                </div>

            </div>

            {/* Course Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">

                <div className="border-b border-slate-100 p-6">

                    <h2 className="text-lg font-bold text-slate-800">
                        All Courses
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Courses available across organizations
                    </p>

                </div>

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[850px]">

                        <thead className="bg-slate-50">

                            <tr>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Course
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Instructor
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Organization
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Students
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody className="divide-y divide-slate-100">

                            {courses.map((course, index) => (

                                <tr
                                    key={index}
                                    className="transition hover:bg-slate-50"
                                >

                                    {/* Course */}
                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-3">

                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                                <BookOpen size={20} />
                                            </div>

                                            <div>
                                                <p className="font-semibold text-slate-700">
                                                    {course.title}
                                                </p>

                                                <p className="text-xs text-slate-400">
                                                    Course #{1001 + index}
                                                </p>
                                            </div>

                                        </div>

                                    </td>

                                    {/* Instructor */}
                                    <td className="px-6 py-5 text-sm text-slate-600">
                                        {course.instructor}
                                    </td>

                                    {/* Organization */}
                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-2 text-sm text-slate-600">

                                            <Building2
                                                size={16}
                                                className="text-slate-400"
                                            />

                                            {course.organization}

                                        </div>

                                    </td>

                                    {/* Students */}
                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-2 text-sm text-slate-600">

                                            <Users
                                                size={16}
                                                className="text-slate-400"
                                            />

                                            {course.students}

                                        </div>

                                    </td>

                                    {/* Status */}
                                    <td className="px-6 py-5">

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold ${course.status === "Published"
                                                ? "bg-emerald-50 text-emerald-600"
                                                : "bg-amber-50 text-amber-600"
                                                }`}
                                        >
                                            {course.status}
                                        </span>

                                    </td>

                                    {/* Action */}
                                    <td className="px-6 py-5 text-right">

                                        <button
                                            type="button"
                                            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
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

        </div>
    );
};

export default Courses;