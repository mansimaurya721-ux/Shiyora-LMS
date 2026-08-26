import React from "react";
import { Building2, Users, BookOpen, Search, Plus } from "lucide-react";

const Organizations = () => {
    const organizations = [
        {
            name: "Bright Future Academy",
            email: "admin@brightfuture.com",
            users: 850,
            courses: 42,
            plan: "Pro",
            status: "Active",
        },
        {
            name: "TechVision Institute",
            email: "admin@techvision.com",
            users: 620,
            courses: 35,
            plan: "Enterprise",
            status: "Active",
        },
        {
            name: "SkillHub Learning",
            email: "admin@skillhub.com",
            users: 430,
            courses: 28,
            plan: "Basic",
            status: "Pending",
        },
        {
            name: "Knowledge Point",
            email: "admin@knowledgepoint.com",
            users: 310,
            courses: 21,
            plan: "Pro",
            status: "Active",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-6 lg:p-8">

            {/* Header */}
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>
                    <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
                        Organizations
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage all organizations registered on Shiyora.
                    </p>
                </div>

                <button className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">
                    <Plus size={18} />
                    Add Organization
                </button>

            </div>

            {/* Stats */}
            <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500">
                                Total Organizations
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-slate-800">
                                128
                            </h2>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <Building2 size={24} />
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500">
                                Active Organizations
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-slate-800">
                                114
                            </h2>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                            <Building2 size={24} />
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500">
                                Total Users
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-slate-800">
                                12,480
                            </h2>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                            <Users size={24} />
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500">
                                Total Courses
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-slate-800">
                                1,245
                            </h2>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                            <BookOpen size={24} />
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
                        placeholder="Search organizations..."
                        className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                </div>

            </div>

            {/* Organizations Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">

                <div className="border-b border-slate-100 p-6">
                    <h2 className="text-lg font-bold text-slate-800">
                        All Organizations
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Organizations using the Shiyora LMS platform.
                    </p>
                </div>

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[800px]">

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
                                    Plan
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Status
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">

                            {organizations.map((organization) => (
                                <tr
                                    key={organization.email}
                                    className="transition hover:bg-slate-50"
                                >

                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">

                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 font-bold text-indigo-600">
                                                {organization.name.charAt(0)}
                                            </div>

                                            <div>
                                                <p className="font-semibold text-slate-700">
                                                    {organization.name}
                                                </p>

                                                <p className="text-xs text-slate-400">
                                                    {organization.email}
                                                </p>
                                            </div>

                                        </div>
                                    </td>

                                    <td className="px-6 py-5 text-sm text-slate-600">
                                        {organization.users}
                                    </td>

                                    <td className="px-6 py-5 text-sm text-slate-600">
                                        {organization.courses}
                                    </td>

                                    <td className="px-6 py-5">
                                        <span className="rounded-lg bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                                            {organization.plan}
                                        </span>
                                    </td>

                                    <td className="px-6 py-5">
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold ${organization.status === "Active"
                                                ? "bg-emerald-50 text-emerald-600"
                                                : "bg-amber-50 text-amber-600"
                                                }`}
                                        >
                                            {organization.status}
                                        </span>
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

export default Organizations;