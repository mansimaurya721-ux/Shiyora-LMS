import React, { useState } from "react";
import {
    Users as UsersIcon,
    UserCheck,
    UserX,
    Search,
    Plus,
    MoreVertical,
} from "lucide-react";

const Users = () => {
    const [search, setSearch] = useState("");

    const users = [
        {
            name: "Rahul Sharma",
            email: "rahul@brightfuture.com",
            role: "Student",
            organization: "Bright Future Academy",
            status: "Active",
        },
        {
            name: "Priya Singh",
            email: "priya@techvision.com",
            role: "Teacher",
            organization: "TechVision Institute",
            status: "Active",
        },
        {
            name: "Aman Verma",
            email: "aman@skillhub.com",
            role: "Student",
            organization: "SkillHub Learning",
            status: "Inactive",
        },
        {
            name: "Neha Gupta",
            email: "neha@knowledgepoint.com",
            role: "Admin",
            organization: "Knowledge Point",
            status: "Active",
        },
        {
            name: "Arjun Yadav",
            email: "arjun@brightfuture.com",
            role: "Teacher",
            organization: "Bright Future Academy",
            status: "Active",
        },
    ];

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.organization.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-6 lg:p-8">

            {/* Header */}
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>
                    <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
                        Users
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage all users across the Shiyora platform.
                    </p>
                </div>

                <button className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">
                    <Plus size={18} />
                    Add User
                </button>

            </div>

            {/* Statistics */}
            <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

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

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <UsersIcon size={24} />
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500">
                                Active Users
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-slate-800">
                                11,820
                            </h2>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                            <UserCheck size={24} />
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500">
                                Inactive Users
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-slate-800">
                                660
                            </h2>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                            <UserX size={24} />
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div>
                        <p className="text-sm text-slate-500">
                            Teachers
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-slate-800">
                            2,140
                        </h2>

                        <p className="mt-1 text-xs text-slate-400">
                            Across all organizations
                        </p>
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
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search users..."
                        className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />

                </div>

            </div>

            {/* Users Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">

                <div className="border-b border-slate-100 p-6">
                    <h2 className="text-lg font-bold text-slate-800">
                        All Users
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Users registered on the Shiyora LMS platform.
                    </p>
                </div>

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[900px]">

                        <thead className="bg-slate-50">

                            <tr>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    User
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Role
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Organization
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

                            {filteredUsers.map((user) => (

                                <tr
                                    key={user.email}
                                    className="transition hover:bg-slate-50"
                                >

                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-3">

                                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 font-bold text-indigo-600">
                                                {user.name.charAt(0)}
                                            </div>

                                            <div>

                                                <p className="font-semibold text-slate-700">
                                                    {user.name}
                                                </p>

                                                <p className="text-xs text-slate-400">
                                                    {user.email}
                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    <td className="px-6 py-5">

                                        <span className="rounded-lg bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                                            {user.role}
                                        </span>

                                    </td>

                                    <td className="px-6 py-5 text-sm text-slate-600">
                                        {user.organization}
                                    </td>

                                    <td className="px-6 py-5">

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold ${user.status === "Active"
                                                ? "bg-emerald-50 text-emerald-600"
                                                : "bg-red-50 text-red-600"
                                                }`}
                                        >
                                            {user.status}
                                        </span>

                                    </td>

                                    <td className="px-6 py-5 text-right">

                                        <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700">
                                            <MoreVertical size={18} />
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

export default Users;