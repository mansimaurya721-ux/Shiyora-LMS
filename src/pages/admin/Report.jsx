import React, { useMemo, useState } from "react";
import {
    BarChart3,
    Download,
    Users,
    IndianRupee,
    Star,
    CheckCircle2,
    FileText,
    Search,
} from "lucide-react";

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";

const Report = () => {
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("All");

    // ============================================================
    // MONTHLY ENROLLMENT DATA (for the chart)
    // ============================================================

    const monthlyEnrollments = [
        { month: "Apr", value: 62 },
        { month: "May", value: 78 },
        { month: "Jun", value: 54 },
        { month: "Jul", value: 91 },
        { month: "Aug", value: 88 },
        { month: "Sep", value: 104 },
    ];

    const maxEnrollment = Math.max(...monthlyEnrollments.map((item) => item.value));

    // ============================================================
    // GENERATED REPORTS
    // ============================================================

    const reports = [
        {
            id: 1,
            name: "Monthly Enrollment Summary",
            type: "Enrollments",
            generatedOn: "01 Sep 2026",
            format: "PDF",
        },
        {
            id: 2,
            name: "Course Completion Overview",
            type: "Courses",
            generatedOn: "28 Aug 2026",
            format: "XLSX",
        },
        {
            id: 3,
            name: "Teacher Performance Report",
            type: "Teachers",
            generatedOn: "20 Aug 2026",
            format: "PDF",
        },
        {
            id: 4,
            name: "Subscription Revenue Report",
            type: "Billing",
            generatedOn: "12 Aug 2026",
            format: "XLSX",
        },
        {
            id: 5,
            name: "Student Progress Report",
            type: "Students",
            generatedOn: "04 Aug 2026",
            format: "PDF",
        },
    ];

    const typeOptions = ["All", ...Array.from(new Set(reports.map((item) => item.type)))];

    const filteredReports = useMemo(() => {
        const searchText = search.toLowerCase().trim();

        return reports.filter((item) => {
            const matchesSearch = item.name.toLowerCase().includes(searchText);
            const matchesType = typeFilter === "All" || item.type === typeFilter;
            return matchesSearch && matchesType;
        });
    }, [search, typeFilter]);

    // ============================================================
    // ACTIONS
    // ============================================================

    const handleDownload = (report) => {
        alert(`Downloading: ${report.name} (${report.format})`);
    };

    const handleExportAll = () => {
        alert("Export All functionality will be connected later.");
    };

    // ============================================================
    // RETURN
    // ============================================================

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#161F19] px-4 py-6 text-[#F3EEDD] sm:px-6 lg:px-8">
            <style>{FONT_IMPORTS}</style>

            {/* =====================================================
                BACKGROUND GLOW
            ====================================================== */}

            <div className="pointer-events-none fixed -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#F2B84B]/[0.05] blur-[130px]" />
            <div className="pointer-events-none fixed -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#7C9A82]/[0.07] blur-[140px]" />

            <div className="relative z-10">

                {/* =====================================================
                    HEADER
                ====================================================== */}

                <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <p className="mb-1 font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F2B84B]">
                            Administration
                        </p>

                        <h1 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-[#F3EEDD] sm:text-3xl">
                            Reports
                        </h1>

                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#F3EEDD]/50">
                            A graded summary of how your organization is
                            performing — enrollments, revenue and completion.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleExportAll}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#F2B84B]/30 bg-[#F2B84B] px-5 py-3 font-['Space_Grotesk'] text-sm font-semibold text-[#161F19] shadow-[0_10px_30px_rgba(242,184,75,0.15)] transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:bg-[#F7C968] hover:shadow-[0_12px_35px_rgba(242,184,75,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B84B]"
                    >
                        <Download size={18} />
                        Export All
                    </button>
                </div>

                {/* =====================================================
                    STAT CARDS
                ====================================================== */}

                <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                    <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[#F3EEDD]/50">Total Revenue</p>
                                <h2 className="mt-2 font-['JetBrains_Mono'] text-2xl font-bold text-[#F3EEDD]">₹4,82,300</h2>
                                <p className="mt-1 text-xs text-[#7C9A82]">+12.4% this quarter</p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 text-[#F2B84B]">
                                <IndianRupee size={23} />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[#F3EEDD]/50">Active Students</p>
                                <h2 className="mt-2 font-['JetBrains_Mono'] text-2xl font-bold text-[#F3EEDD]">1,284</h2>
                                <p className="mt-1 text-xs text-[#F3EEDD]/35">Across 6 courses</p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#7C9A82]/25 bg-[#7C9A82]/10 text-[#7C9A82]">
                                <Users size={23} />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[#F3EEDD]/50">Completion Rate</p>
                                <h2 className="mt-2 font-['JetBrains_Mono'] text-2xl font-bold text-[#F3EEDD]">68%</h2>
                                <p className="mt-1 text-xs text-[#F3EEDD]/35">Avg across courses</p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#F3EEDD]/15 bg-[#F3EEDD]/10 text-[#F3EEDD]/70">
                                <CheckCircle2 size={23} />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[#F3EEDD]/50">Avg. Rating</p>
                                <h2 className="mt-2 font-['JetBrains_Mono'] text-2xl font-bold text-[#F3EEDD]">4.6</h2>
                                <p className="mt-1 text-xs text-[#8C7134]">Based on 940 reviews</p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#F2B84B]/20 bg-[#FFF9E9]/10 text-[#F2B84B]">
                                <Star size={23} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    CHART — Monthly Enrollments
                ====================================================== */}

                <div className="mb-7 rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">

                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h2 className="font-['Space_Grotesk'] text-lg font-semibold text-[#F3EEDD]">
                                Monthly Enrollments
                            </h2>
                            <p className="mt-1 text-sm text-[#F3EEDD]/45">Last 6 months</p>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#F3EEDD]/10 bg-[#F3EEDD]/5 text-[#F2B84B]">
                            <BarChart3 size={19} />
                        </div>
                    </div>

                    <div className="flex h-48 items-end justify-between gap-3 sm:gap-6">
                        {monthlyEnrollments.map((item) => (
                            <div key={item.month} className="flex flex-1 flex-col items-center gap-3">
                                <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#F3EEDD]/60">
                                    {item.value}
                                </span>
                                <div className="flex w-full items-end justify-center" style={{ height: "140px" }}>
                                    <div
                                        className="w-full max-w-[38px] rounded-t-md bg-gradient-to-t from-[#F2B84B] to-[#F7C968] transition-all duration-500"
                                        style={{ height: `${(item.value / maxEnrollment) * 100}%` }}
                                    />
                                </div>
                                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-[#F3EEDD]/40">
                                    {item.month}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* =====================================================
                    SEARCH + FILTER
                ====================================================== */}

                <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-4 lg:flex-row lg:items-center lg:justify-between">

                    <div className="relative w-full lg:max-w-md">
                        <Search size={19} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8E89]" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search reports..."
                            className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] py-3 pl-10 pr-4 text-sm text-[#F3EEDD] outline-none transition placeholder:text-[#F3EEDD]/30 focus:border-[#F2B84B]/40 focus:ring-2 focus:ring-[#F2B84B]/10"
                        />
                    </div>

                    <select
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                        className="rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm font-medium text-[#F3EEDD]/80 outline-none focus:border-[#F2B84B]/40 lg:w-56"
                    >
                        {typeOptions.map((type) => (
                            <option key={type} value={type}>
                                {type === "All" ? "All Report Types" : type}
                            </option>
                        ))}
                    </select>
                </div>

                {/* =====================================================
                    REPORTS TABLE
                ====================================================== */}

                <section className="overflow-hidden rounded-2xl border border-[#F3EEDD]/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]">

                    <div className="border-b border-[#E7DED5] px-5 py-5 sm:px-6">
                        <h2 className="font-['Space_Grotesk'] text-lg font-bold text-[#303B32]">
                            Generated Reports
                        </h2>
                        <p className="mt-1 text-sm text-[#7C817B]">
                            {filteredReports.length} of {reports.length} reports shown
                        </p>
                    </div>

                    {filteredReports.length === 0 ? (
                        <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F1ECE5] text-[#8A8E89]">
                                <FileText size={26} />
                            </div>
                            <p className="font-['Space_Grotesk'] text-base font-semibold text-[#303B32]">
                                No reports found
                            </p>
                            <p className="max-w-xs text-sm text-[#7C817B]">
                                Try a different search term or report type.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[800px]">
                                <thead className="bg-[#FBF9F5]">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#7C817B]">Report</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#7C817B]">Type</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#7C817B]">Generated On</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#7C817B]">Format</th>
                                        <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-[#7C817B]">Action</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-[#F1ECE5]">
                                    {filteredReports.map((report) => (
                                        <tr key={report.id} className="transition-colors hover:bg-[#FBF9F5]">

                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFF9E9] text-[#8C7134]">
                                                        <FileText size={18} />
                                                    </div>
                                                    <p className="font-semibold text-[#303B32]">{report.name}</p>
                                                </div>
                                            </td>

                                            <td className="px-6 py-5">
                                                <span className="inline-flex rounded-full bg-[#EDF6EF] px-3 py-1 text-xs font-semibold text-[#64856C]">
                                                    {report.type}
                                                </span>
                                            </td>

                                            <td className="px-6 py-5">
                                                <p className="text-sm text-[#536058]">{report.generatedOn}</p>
                                            </td>

                                            <td className="px-6 py-5">
                                                <span className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-wider text-[#7C817B]">
                                                    {report.format}
                                                </span>
                                            </td>

                                            <td className="px-6 py-5 text-right">
                                                <button
                                                    type="button"
                                                    onClick={() => handleDownload(report)}
                                                    className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-[#F2B84B] transition hover:bg-[#FFF9E9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B84B]"
                                                >
                                                    <Download size={15} />
                                                    Download
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* FOOTER */}
                    <div className="flex flex-col gap-2 border-t border-[#E7DED5] bg-[#FBF9F5] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-wider text-[#817B74]">
                            Showing <span className="font-semibold text-[#303B32]">{filteredReports.length}</span> reports
                        </p>
                        <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-wider text-[#817B74]">
                            Shiyora LMS
                        </p>
                    </div>
                </section>

                {/* FOOTER NOTE */}
                <div className="mt-5 flex items-center justify-between">
                    <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-wider text-[#F3EEDD]/25">
                        Shiyora Administration
                    </p>
                    <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-wider text-[#F3EEDD]/25">
                        Reports &amp; Analytics
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Report;