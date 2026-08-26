import React from "react";
import {
    Users,
    Building2,
    BookOpen,
    CreditCard,
    TrendingUp,
    UserCheck,
    GraduationCap,
    Activity,
    ArrowUpRight,
    MoreVertical,
} from "lucide-react";

const Dashboard = () => {
    const stats = [
        {
            title: "Total Organizations",
            value: "128",
            change: "+12.5%",
            icon: <Building2 size={24} />,
        },
        {
            title: "Total Users",
            value: "12,480",
            change: "+18.2%",
            icon: <Users size={24} />,
        },
        {
            title: "Total Courses",
            value: "1,245",
            change: "+8.4%",
            icon: <BookOpen size={24} />,
        },
        {
            title: "Revenue",
            value: "₹8.42L",
            change: "+24.6%",
            icon: <CreditCard size={24} />,
        },
    ];

    const organizations = [
        {
            name: "Bright Future Academy",
            email: "admin@brightfuture.com",
            users: 850,
            courses: 42,
            status: "Active",
        },
        {
            name: "TechVision Institute",
            email: "admin@techvision.com",
            users: 620,
            courses: 35,
            status: "Active",
        },
        {
            name: "SkillHub Learning",
            email: "admin@skillhub.com",
            users: 430,
            courses: 28,
            status: "Pending",
        },
        {
            name: "Knowledge Point",
            email: "admin@knowledgepoint.com",
            users: 310,
            courses: 21,
            status: "Active",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-6 lg:p-8">

            {/* Header */}
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
                        SuperAdmin Dashboard
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Welcome back to Shiyora LMS administration panel.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white px-4 py-2 text-sm shadow-sm">
                        <span className="text-slate-400">Today</span>
                        <span className="ml-2 font-medium text-slate-700">
                            Aug 26, 2026
                        </span>
                    </div>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    {stat.title}
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-slate-800">
                                    {stat.value}
                                </h2>

                                <div className="mt-2 flex items-center gap-1 text-sm font-medium text-emerald-500">
                                    <TrendingUp size={15} />
                                    {stat.change}
                                    <span className="font-normal text-slate-400">
                                        this month
                                    </span>
                                </div>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                {stat.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Grid */}
            <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

                {/* Platform Overview */}
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm xl:col-span-2">
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-bold text-slate-800">
                                Platform Overview
                            </h2>

                            <p className="text-sm text-slate-400">
                                Shiyora LMS platform statistics
                            </p>
                        </div>

                        <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
                            This Year
                        </button>
                    </div>

                    {/* Fake Chart */}
                    <div className="flex h-64 items-end gap-3 overflow-hidden">
                        {[45, 60, 48, 72, 58, 82, 68, 90, 75, 95, 84, 100].map(
                            (height, index) => (
                                <div
                                    key={index}
                                    className="group flex h-full flex-1 items-end"
                                >
                                    <div
                                        style={{ height: `${height}%` }}
                                        className="w-full rounded-t-lg bg-indigo-500/80 transition-all duration-300 group-hover:bg-indigo-600"
                                    ></div>
                                </div>
                            )
                        )}
                    </div>

                    <div className="mt-4 flex justify-between text-xs text-slate-400">
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>May</span>
                        <span>Jul</span>
                        <span>Sep</span>
                        <span>Nov</span>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-bold text-slate-800">
                        Platform Users
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        User distribution
                    </p>

                    <div className="mt-6 space-y-5">

                        <div>
                            <div className="mb-2 flex justify-between text-sm">
                                <span className="flex items-center gap-2 text-slate-600">
                                    <UserCheck size={17} />
                                    Teachers
                                </span>

                                <span className="font-semibold text-slate-700">
                                    2,140
                                </span>
                            </div>

                            <div className="h-2 rounded-full bg-slate-100">
                                <div className="h-2 w-[65%] rounded-full bg-indigo-500"></div>
                            </div>
                        </div>

                        <div>
                            <div className="mb-2 flex justify-between text-sm">
                                <span className="flex items-center gap-2 text-slate-600">
                                    <GraduationCap size={17} />
                                    Students
                                </span>

                                <span className="font-semibold text-slate-700">
                                    9,850
                                </span>
                            </div>

                            <div className="h-2 rounded-full bg-slate-100">
                                <div className="h-2 w-[85%] rounded-full bg-emerald-500"></div>
                            </div>
                        </div>

                        <div>
                            <div className="mb-2 flex justify-between text-sm">
                                <span className="flex items-center gap-2 text-slate-600">
                                    <Activity size={17} />
                                    Admins
                                </span>

                                <span className="font-semibold text-slate-700">
                                    490
                                </span>
                            </div>

                            <div className="h-2 rounded-full bg-slate-100">
                                <div className="h-2 w-[35%] rounded-full bg-purple-500"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Organizations Table */}
            <div className="mt-6 rounded-2xl border border-slate-100 bg-white shadow-sm">

                <div className="flex flex-col gap-3 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-lg font-bold text-slate-800">
                            Recent Organizations
                        </h2>

                        <p className="text-sm text-slate-400">
                            Recently registered organizations on Shiyora
                        </p>
                    </div>

                    <button className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700">
                        View All
                        <ArrowUpRight size={16} />
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px]">

                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Organization
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Users
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Courses
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

                            {organizations.map((org, index) => (
                                <tr
                                    key={index}
                                    className="transition hover:bg-slate-50"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">

                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 font-semibold text-indigo-600">
                                                {org.name.charAt(0)}
                                            </div>

                                            <div>
                                                <p className="font-medium text-slate-700">
                                                    {org.name}
                                                </p>

                                                <p className="text-xs text-slate-400">
                                                    {org.email}
                                                </p>
                                            </div>

                                        </div>
                                    </td>

                                    <td className="px-6 py-4 text-sm text-slate-600">
                                        {org.users}
                                    </td>

                                    <td className="px-6 py-4 text-sm text-slate-600">
                                        {org.courses}
                                    </td>

                                    <td className="px-6 py-4">
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-medium ${org.status === "Active"
                                                ? "bg-emerald-50 text-emerald-600"
                                                : "bg-amber-50 text-amber-600"
                                                }`}
                                        >
                                            {org.status}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-right">
                                        <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                                            <MoreVertical size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bottom Cards */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">

                <div className="rounded-2xl bg-indigo-600 p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-indigo-100">
                                Active Subscriptions
                            </p>

                            <h3 className="mt-2 text-3xl font-bold">
                                96
                            </h3>
                        </div>

                        <CreditCard size={32} />
                    </div>

                    <p className="mt-4 text-sm text-indigo-100">
                        14 new subscriptions this month
                    </p>
                </div>

                <div className="rounded-2xl bg-slate-800 p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-300">
                                Active Courses
                            </p>

                            <h3 className="mt-2 text-3xl font-bold">
                                1,245
                            </h3>
                        </div>

                        <BookOpen size={32} />
                    </div>

                    <p className="mt-4 text-sm text-slate-300">
                        87 courses added this month
                    </p>
                </div>

                <div className="rounded-2xl bg-emerald-600 p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-emerald-100">
                                Monthly Revenue
                            </p>

                            <h3 className="mt-2 text-3xl font-bold">
                                ₹2.18L
                            </h3>
                        </div>

                        <TrendingUp size={32} />
                    </div>

                    <p className="mt-4 text-sm text-emerald-100">
                        24.6% increase from last month
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Dashboard;