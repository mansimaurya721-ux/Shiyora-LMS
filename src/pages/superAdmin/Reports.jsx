import React from "react";
import {
    BarChart3,
    Users,
    Building2,
    BookOpen,
    CreditCard,
    TrendingUp,
    Download,
} from "lucide-react";

const Reports = () => {
    const reportCards = [
        {
            title: "Organizations",
            value: "128",
            change: "+12.5%",
            icon: Building2,
        },
        {
            title: "Users",
            value: "12,480",
            change: "+18.2%",
            icon: Users,
        },
        {
            title: "Courses",
            value: "1,245",
            change: "+8.4%",
            icon: BookOpen,
        },
        {
            title: "Revenue",
            value: "₹8.42L",
            change: "+24.6%",
            icon: CreditCard,
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-6 lg:p-8">

            {/* Header */}

            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>
                    <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
                        Reports
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Monitor Shiyora LMS platform performance and analytics.
                    </p>
                </div>

                <button
                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-indigo-600
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        shadow-sm
                        transition
                        hover:bg-indigo-700
                    "
                >
                    <Download size={18} />
                    Export Report
                </button>

            </div>

            {/* Report Cards */}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

                {reportCards.map((report) => {
                    const Icon = report.icon;

                    return (
                        <div
                            key={report.title}
                            className="
                                rounded-2xl
                                border
                                border-slate-100
                                bg-white
                                p-5
                                shadow-sm
                                transition
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-lg
                            "
                        >
                            <div className="flex items-start justify-between">

                                <div>
                                    <p className="text-sm text-slate-500">
                                        {report.title}
                                    </p>

                                    <h2 className="mt-2 text-2xl font-bold text-slate-800">
                                        {report.value}
                                    </h2>

                                    <div className="mt-2 flex items-center gap-1 text-sm font-medium text-emerald-500">
                                        <TrendingUp size={15} />
                                        {report.change}
                                    </div>
                                </div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                    <Icon size={24} />
                                </div>

                            </div>
                        </div>
                    );
                })}

            </div>

            {/* Analytics */}

            <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">

                {/* User Growth */}

                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>
                            <h2 className="text-lg font-bold text-slate-800">
                                User Growth
                            </h2>

                            <p className="text-sm text-slate-400">
                                Monthly user registrations
                            </p>
                        </div>

                        <BarChart3
                            size={24}
                            className="text-indigo-500"
                        />

                    </div>

                    <div className="mt-8 flex h-56 items-end gap-3">

                        {[35, 48, 42, 60, 55, 70, 64, 82, 76, 90, 84, 96].map(
                            (height, index) => (
                                <div
                                    key={index}
                                    className="group flex h-full flex-1 items-end"
                                >
                                    <div
                                        style={{
                                            height: `${height}%`,
                                        }}
                                        className="
                                            w-full
                                            rounded-t-lg
                                            bg-indigo-500
                                            transition
                                            duration-300
                                            group-hover:bg-indigo-600
                                        "
                                    />
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

                {/* Revenue */}

                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>
                            <h2 className="text-lg font-bold text-slate-800">
                                Revenue Overview
                            </h2>

                            <p className="text-sm text-slate-400">
                                Monthly revenue performance
                            </p>
                        </div>

                        <CreditCard
                            size={24}
                            className="text-emerald-500"
                        />

                    </div>

                    <div className="mt-8 space-y-6">

                        {[
                            ["Subscriptions", "₹5.20L", "72%"],
                            ["Courses", "₹2.10L", "48%"],
                            ["Other", "₹1.12L", "28%"],
                        ].map(([name, value, width]) => (
                            <div key={name}>

                                <div className="mb-2 flex justify-between text-sm">

                                    <span className="text-slate-600">
                                        {name}
                                    </span>

                                    <span className="font-semibold text-slate-700">
                                        {value}
                                    </span>

                                </div>

                                <div className="h-2 rounded-full bg-slate-100">

                                    <div
                                        style={{ width }}
                                        className="h-2 rounded-full bg-emerald-500"
                                    />

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

            {/* Summary */}

            <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

                <h2 className="text-lg font-bold text-slate-800">
                    Report Summary
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    Shiyora currently manages 128 organizations with more than
                    12,000 registered users and 1,200 courses. Platform revenue
                    and user activity continue to show positive monthly growth.
                </p>

            </div>

        </div>
    );
};

export default Reports;