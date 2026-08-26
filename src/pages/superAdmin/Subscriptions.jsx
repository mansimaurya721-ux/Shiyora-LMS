import React, { useState } from "react";
import {
    CreditCard,
    Search,
    Filter,
    MoreVertical,
    CheckCircle,
    Clock,
    XCircle,
    TrendingUp,
    Users,
} from "lucide-react";

const Subscriptions = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const subscriptions = [
        {
            id: "SUB-001",
            organization: "Bright Future Academy",
            plan: "Enterprise",
            users: 850,
            amount: "₹24,999",
            billing: "Monthly",
            startDate: "01 Aug 2026",
            nextBilling: "01 Sep 2026",
            status: "Active",
        },
        {
            id: "SUB-002",
            organization: "TechVision Institute",
            plan: "Professional",
            users: 620,
            amount: "₹14,999",
            billing: "Monthly",
            startDate: "05 Aug 2026",
            nextBilling: "05 Sep 2026",
            status: "Active",
        },
        {
            id: "SUB-003",
            organization: "SkillHub Learning",
            plan: "Basic",
            users: 430,
            amount: "₹7,999",
            billing: "Monthly",
            startDate: "10 Aug 2026",
            nextBilling: "10 Sep 2026",
            status: "Pending",
        },
        {
            id: "SUB-004",
            organization: "Knowledge Point",
            plan: "Professional",
            users: 310,
            amount: "₹14,999",
            billing: "Monthly",
            startDate: "12 Aug 2026",
            nextBilling: "12 Sep 2026",
            status: "Active",
        },
        {
            id: "SUB-005",
            organization: "NextGen Academy",
            plan: "Basic",
            users: 180,
            amount: "₹7,999",
            billing: "Monthly",
            startDate: "15 Jul 2026",
            nextBilling: "-",
            status: "Expired",
        },
    ];

    const filteredSubscriptions = subscriptions.filter((subscription) => {
        const matchesSearch =
            subscription.organization
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            subscription.id
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            subscription.plan
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "All" ||
            subscription.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const getStatusStyle = (status) => {
        if (status === "Active") {
            return "bg-emerald-50 text-emerald-600";
        }

        if (status === "Pending") {
            return "bg-amber-50 text-amber-600";
        }

        return "bg-red-50 text-red-600";
    };

    const getStatusIcon = (status) => {
        if (status === "Active") {
            return <CheckCircle size={15} />;
        }

        if (status === "Pending") {
            return <Clock size={15} />;
        }

        return <XCircle size={15} />;
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-6 lg:p-8">

            {/* Header */}
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
                        Subscriptions
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage Shiyora LMS organization subscriptions.
                    </p>
                </div>

                <button
                    type="button"
                    className="flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md"
                >
                    <CreditCard size={18} />
                    Manage Plans
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

                {/* Active */}
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">
                                Active Subscriptions
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-slate-800">
                                96
                            </h2>

                            <p className="mt-2 flex items-center gap-1 text-sm font-medium text-emerald-500">
                                <TrendingUp size={15} />
                                +12.4%
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                            <CheckCircle size={24} />
                        </div>
                    </div>
                </div>

                {/* Pending */}
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">
                                Pending
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-slate-800">
                                8
                            </h2>

                            <p className="mt-2 text-sm text-slate-400">
                                Awaiting activation
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                            <Clock size={24} />
                        </div>
                    </div>
                </div>

                {/* Expired */}
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">
                                Expired
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-slate-800">
                                12
                            </h2>

                            <p className="mt-2 text-sm text-slate-400">
                                Need renewal
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                            <XCircle size={24} />
                        </div>
                    </div>
                </div>

                {/* Revenue */}
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">
                                Monthly Revenue
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-slate-800">
                                ₹2.18L
                            </h2>

                            <p className="mt-2 flex items-center gap-1 text-sm font-medium text-emerald-500">
                                <TrendingUp size={15} />
                                +24.6%
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <CreditCard size={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Subscription Table */}
            <div className="mt-6 rounded-2xl border border-slate-100 bg-white shadow-sm">

                {/* Table Header */}
                <div className="flex flex-col gap-4 border-b border-slate-100 p-6 xl:flex-row xl:items-center xl:justify-between">

                    <div>
                        <h2 className="text-lg font-bold text-slate-800">
                            All Subscriptions
                        </h2>

                        <p className="mt-1 text-sm text-slate-400">
                            View and manage organization subscription plans.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">

                        {/* Search */}
                        <div className="relative">
                            <Search
                                size={18}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                type="text"
                                placeholder="Search subscription..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 sm:w-64"
                            />
                        </div>

                        {/* Filter */}
                        <div className="relative">
                            <Filter
                                size={17}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <select
                                value={statusFilter}
                                onChange={(e) =>
                                    setStatusFilter(e.target.value)
                                }
                                className="appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-8 text-sm text-slate-600 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                            >
                                <option value="All">
                                    All Status
                                </option>

                                <option value="Active">
                                    Active
                                </option>

                                <option value="Pending">
                                    Pending
                                </option>

                                <option value="Expired">
                                    Expired
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1000px]">

                        <thead className="bg-slate-50">
                            <tr>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Subscription
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Plan
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Users
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Amount
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Next Billing
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

                            {filteredSubscriptions.length > 0 ? (
                                filteredSubscriptions.map(
                                    (subscription) => (
                                        <tr
                                            key={subscription.id}
                                            className="transition hover:bg-slate-50"
                                        >

                                            {/* Organization */}
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">

                                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 font-bold text-indigo-600">
                                                        {subscription.organization.charAt(
                                                            0
                                                        )}
                                                    </div>

                                                    <div>
                                                        <p className="font-semibold text-slate-700">
                                                            {
                                                                subscription.organization
                                                            }
                                                        </p>

                                                        <p className="mt-0.5 text-xs text-slate-400">
                                                            {
                                                                subscription.id
                                                            }
                                                        </p>
                                                    </div>

                                                </div>
                                            </td>

                                            {/* Plan */}
                                            <td className="px-6 py-5">
                                                <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
                                                    {
                                                        subscription.plan
                                                    }
                                                </span>

                                                <p className="mt-1 text-xs text-slate-400">
                                                    {
                                                        subscription.billing
                                                    }
                                                </p>
                                            </td>

                                            {/* Users */}
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <Users size={16} />
                                                    {
                                                        subscription.users
                                                    }
                                                </div>
                                            </td>

                                            {/* Amount */}
                                            <td className="px-6 py-5">
                                                <p className="font-semibold text-slate-700">
                                                    {
                                                        subscription.amount
                                                    }
                                                </p>

                                                <p className="text-xs text-slate-400">
                                                    per month
                                                </p>
                                            </td>

                                            {/* Billing */}
                                            <td className="px-6 py-5 text-sm text-slate-600">
                                                {
                                                    subscription.nextBilling
                                                }
                                            </td>

                                            {/* Status */}
                                            <td className="px-6 py-5">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${getStatusStyle(
                                                        subscription.status
                                                    )}`}
                                                >
                                                    {getStatusIcon(
                                                        subscription.status
                                                    )}

                                                    {
                                                        subscription.status
                                                    }
                                                </span>
                                            </td>

                                            {/* Action */}
                                            <td className="px-6 py-5 text-right">
                                                <button
                                                    type="button"
                                                    className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                                                >
                                                    <MoreVertical
                                                        size={18}
                                                    />
                                                </button>
                                            </td>

                                        </tr>
                                    )
                                )
                            ) : (
                                <tr>
                                    <td
                                        colSpan="7"
                                        className="px-6 py-12 text-center"
                                    >
                                        <div className="flex flex-col items-center">
                                            <CreditCard
                                                size={40}
                                                className="text-slate-300"
                                            />

                                            <p className="mt-3 font-medium text-slate-600">
                                                No subscriptions found
                                            </p>

                                            <p className="mt-1 text-sm text-slate-400">
                                                Try changing your search or
                                                filter.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-2 border-t border-slate-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-sm text-slate-400">
                        Showing{" "}
                        <span className="font-medium text-slate-600">
                            {filteredSubscriptions.length}
                        </span>{" "}
                        subscriptions
                    </p>

                    <p className="text-xs text-slate-400">
                        Client-side demo data
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Subscriptions;