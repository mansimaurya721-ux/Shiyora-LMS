import React, { useMemo, useState } from "react";
import {
    GraduationCap,
    UserPlus,
    Search,
    MoreVertical,
    CheckCircle2,
    Clock,
    XCircle,
    TrendingUp,
    Eye,
    Trash2,
} from "lucide-react";

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";

const Enrollments = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [courseFilter, setCourseFilter] = useState("All");
    const [openMenu, setOpenMenu] = useState(null);

    // ============================================================
    // ENROLLMENT DATA
    // ============================================================

    const enrollments = [
        {
            id: 1,
            student: "Ananya Rao",
            email: "ananya.rao@example.com",
            course: "Full Stack Web Development",
            enrolledOn: "12 Jan 2026",
            progress: 78,
            status: "Active",
        },
        {
            id: 2,
            student: "Karan Mehta",
            email: "karan.mehta@example.com",
            course: "UI/UX Design Fundamentals",
            enrolledOn: "03 Feb 2026",
            progress: 100,
            status: "Completed",
        },
        {
            id: 3,
            student: "Sneha Iyer",
            email: "sneha.iyer@example.com",
            course: "Java Programming",
            enrolledOn: "18 Feb 2026",
            progress: 42,
            status: "Active",
        },
        {
            id: 4,
            student: "Rohit Malhotra",
            email: "rohit.malhotra@example.com",
            course: "Python for Beginners",
            enrolledOn: "27 Feb 2026",
            progress: 0,
            status: "Pending",
        },
        {
            id: 5,
            student: "Divya Nair",
            email: "divya.nair@example.com",
            course: "Digital Marketing",
            enrolledOn: "05 Mar 2026",
            progress: 15,
            status: "Dropped",
        },
        {
            id: 6,
            student: "Aditya Kapoor",
            email: "aditya.kapoor@example.com",
            course: "Database Management System",
            enrolledOn: "14 Mar 2026",
            progress: 64,
            status: "Active",
        },
        {
            id: 7,
            student: "Meera Joshi",
            email: "meera.joshi@example.com",
            course: "Full Stack Web Development",
            enrolledOn: "22 Mar 2026",
            progress: 100,
            status: "Completed",
        },
    ];

    const courseOptions = [
        "All",
        ...Array.from(new Set(enrollments.map((item) => item.course))),
    ];

    // ============================================================
    // FILTERING
    // ============================================================

    const filteredEnrollments = useMemo(() => {
        const searchText = search.toLowerCase().trim();

        return enrollments.filter((item) => {
            const matchesSearch =
                item.student.toLowerCase().includes(searchText) ||
                item.email.toLowerCase().includes(searchText) ||
                item.course.toLowerCase().includes(searchText);

            const matchesStatus =
                statusFilter === "All" || item.status === statusFilter;

            const matchesCourse =
                courseFilter === "All" || item.course === courseFilter;

            return matchesSearch && matchesStatus && matchesCourse;
        });
    }, [search, statusFilter, courseFilter]);

    // ============================================================
    // STATISTICS
    // ============================================================

    const totalEnrollments = enrollments.length;
    const activeEnrollments = enrollments.filter((item) => item.status === "Active").length;
    const completedEnrollments = enrollments.filter((item) => item.status === "Completed").length;
    const droppedEnrollments = enrollments.filter((item) => item.status === "Dropped").length;

    // ============================================================
    // STATUS BADGE STYLE
    // ============================================================

    const getStatusStyle = (status) => {
        if (status === "Active") return "bg-[#EDF6EF] text-[#64856C]";
        if (status === "Completed") return "bg-[#F1ECE5] text-[#303B32]";
        if (status === "Pending") return "bg-[#FFF9E9] text-[#8C7134]";
        return "bg-[#FFF3F3] text-[#B96868]";
    };

    const getStatusDot = (status) => {
        if (status === "Active") return "bg-[#7C9A82]";
        if (status === "Completed") return "bg-[#536058]";
        if (status === "Pending") return "bg-[#F2B84B]";
        return "bg-[#D6402C]";
    };

    // ============================================================
    // ACTIONS
    // ============================================================

    const handleEnroll = () => {
        alert("Enroll Student functionality will be connected later.");
    };

    const handleView = (item) => {
        setOpenMenu(null);
        alert(`View enrollment: ${item.student} — ${item.course}`);
    };

    const handleRemove = (item) => {
        setOpenMenu(null);
        alert(`Remove enrollment: ${item.student} — ${item.course}`);
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
                            Enrollments
                        </h1>

                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#F3EEDD]/50">
                            Track which students are enrolled in which courses,
                            and follow their progress.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleEnroll}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#F2B84B]/30 bg-[#F2B84B] px-5 py-3 font-['Space_Grotesk'] text-sm font-semibold text-[#161F19] shadow-[0_10px_30px_rgba(242,184,75,0.15)] transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:bg-[#F7C968] hover:shadow-[0_12px_35px_rgba(242,184,75,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B84B]"
                    >
                        <UserPlus size={18} />
                        Enroll Student
                    </button>
                </div>

                {/* =====================================================
                    STAT CARDS
                ====================================================== */}

                <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                    <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[#F3EEDD]/50">Total Enrollments</p>
                                <h2 className="mt-2 font-['JetBrains_Mono'] text-2xl font-bold text-[#F3EEDD]">
                                    {totalEnrollments}
                                </h2>
                                <p className="mt-1 text-xs text-[#F3EEDD]/35">Across all courses</p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 text-[#F2B84B]">
                                <GraduationCap size={23} />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[#F3EEDD]/50">Active</p>
                                <h2 className="mt-2 font-['JetBrains_Mono'] text-2xl font-bold text-[#F3EEDD]">
                                    {activeEnrollments}
                                </h2>
                                <p className="mt-1 text-xs text-[#7C9A82]">Currently learning</p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#7C9A82]/25 bg-[#7C9A82]/10 text-[#7C9A82]">
                                <TrendingUp size={23} />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[#F3EEDD]/50">Completed</p>
                                <h2 className="mt-2 font-['JetBrains_Mono'] text-2xl font-bold text-[#F3EEDD]">
                                    {completedEnrollments}
                                </h2>
                                <p className="mt-1 text-xs text-[#F3EEDD]/35">Finished the course</p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#F3EEDD]/15 bg-[#F3EEDD]/10 text-[#F3EEDD]/70">
                                <CheckCircle2 size={23} />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-5 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[#F3EEDD]/50">Dropped</p>
                                <h2 className="mt-2 font-['JetBrains_Mono'] text-2xl font-bold text-[#F3EEDD]">
                                    {droppedEnrollments}
                                </h2>
                                <p className="mt-1 text-xs text-[#D6402C]">Requires follow-up</p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D6402C]/20 bg-[#D6402C]/10 text-[#D6402C]">
                                <XCircle size={23} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    SEARCH + FILTERS
                ====================================================== */}

                <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-4 lg:flex-row lg:items-center lg:justify-between">

                    <div className="relative w-full lg:max-w-md">
                        <Search size={19} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8E89]" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search student, email or course..."
                            className="w-full rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] py-3 pl-10 pr-4 text-sm text-[#F3EEDD] outline-none transition placeholder:text-[#F3EEDD]/30 focus:border-[#F2B84B]/40 focus:ring-2 focus:ring-[#F2B84B]/10"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:w-auto lg:min-w-[420px]">
                        <select
                            value={courseFilter}
                            onChange={(e) => setCourseFilter(e.target.value)}
                            className="rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm font-medium text-[#F3EEDD]/80 outline-none focus:border-[#F2B84B]/40"
                        >
                            {courseOptions.map((course) => (
                                <option key={course} value={course}>
                                    {course === "All" ? "All Courses" : course}
                                </option>
                            ))}
                        </select>

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="rounded-xl border border-[#F3EEDD]/10 bg-[#141C17] px-4 py-3 text-sm font-medium text-[#F3EEDD]/80 outline-none focus:border-[#F2B84B]/40"
                        >
                            <option value="All">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                            <option value="Dropped">Dropped</option>
                        </select>
                    </div>
                </div>

                {/* =====================================================
                    ENROLLMENTS TABLE
                ====================================================== */}

                <section className="overflow-hidden rounded-2xl border border-[#F3EEDD]/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]">

                    <div className="border-b border-[#E7DED5] px-5 py-5 sm:px-6">
                        <h2 className="font-['Space_Grotesk'] text-lg font-bold text-[#303B32]">
                            Enrollment Records
                        </h2>
                        <p className="mt-1 text-sm text-[#7C817B]">
                            {filteredEnrollments.length} of {totalEnrollments} enrollments shown
                        </p>
                    </div>

                    {filteredEnrollments.length === 0 ? (
                        <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F1ECE5] text-[#8A8E89]">
                                <GraduationCap size={26} />
                            </div>
                            <p className="font-['Space_Grotesk'] text-base font-semibold text-[#303B32]">
                                No enrollments found
                            </p>
                            <p className="max-w-xs text-sm text-[#7C817B]">
                                Try adjusting your search or filters to find what you're looking for.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px]">
                                <thead className="bg-[#FBF9F5]">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#7C817B]">Student</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#7C817B]">Course</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#7C817B]">Enrolled On</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#7C817B]">Progress</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#7C817B]">Status</th>
                                        <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-[#7C817B]">Action</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-[#F1ECE5]">
                                    {filteredEnrollments.map((item) => (
                                        <tr key={item.id} className="transition-colors hover:bg-[#FBF9F5]">

                                            {/* STUDENT */}
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7E6B9] text-sm font-bold text-[#536058]">
                                                        {item.student.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-[#303B32]">{item.student}</p>
                                                        <p className="mt-1 text-xs text-[#7C817B]">{item.email}</p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* COURSE */}
                                            <td className="px-6 py-5">
                                                <p className="text-sm font-medium text-[#303B32]">{item.course}</p>
                                            </td>

                                            {/* ENROLLED ON */}
                                            <td className="px-6 py-5">
                                                <p className="text-sm text-[#536058]">{item.enrolledOn}</p>
                                            </td>

                                            {/* PROGRESS */}
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-[#E4DED4]">
                                                        <div
                                                            className="h-full rounded-full bg-[#F2B84B]"
                                                            style={{ width: `${item.progress}%` }}
                                                        />
                                                    </div>
                                                    <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#536058]">
                                                        {item.progress}%
                                                    </span>
                                                </div>
                                            </td>

                                            {/* STATUS */}
                                            <td className="px-6 py-5">
                                                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(item.status)}`}>
                                                    <span className={`h-1.5 w-1.5 rounded-full ${getStatusDot(item.status)}`} />
                                                    {item.status}
                                                </span>
                                            </td>

                                            {/* ACTION */}
                                            <td className="relative px-6 py-5 text-right">
                                                <button
                                                    type="button"
                                                    onClick={() => setOpenMenu(openMenu === item.id ? null : item.id)}
                                                    className="rounded-lg p-2 text-[#8A8E89] transition hover:bg-[#F3EEDD] hover:text-[#303B32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B84B]"
                                                >
                                                    <MoreVertical size={18} />
                                                </button>

                                                {openMenu === item.id && (
                                                    <div className="absolute right-6 top-14 z-30 w-36 overflow-hidden rounded-xl border border-[#E4DED4] bg-white py-1 text-left shadow-[0_15px_35px_rgba(22,31,25,0.15)]">
                                                        <button
                                                            type="button"
                                                            onClick={() => handleView(item)}
                                                            className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-[#536058] transition hover:bg-[#FFF9E9]"
                                                        >
                                                            <Eye size={15} />
                                                            View
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleRemove(item)}
                                                            className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-[#B96868] transition hover:bg-[#FFF3F3]"
                                                        >
                                                            <Trash2 size={15} />
                                                            Remove
                                                        </button>
                                                    </div>
                                                )}
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
                            Showing <span className="font-semibold text-[#303B32]">{filteredEnrollments.length}</span> enrollments
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
                        Enrollment Management
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Enrollments;
