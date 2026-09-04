import React, { useMemo, useState } from "react";
import {
    CreditCard,
    CheckCircle,
    Clock,
    XCircle,
    TrendingUp,
    Search,
    MoreVertical,
    Eye,
    Pencil,
    Ban,
} from "lucide-react";

// ============================================================
// FONT IMPORTS
// ============================================================

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";

const Subscriptions = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [planFilter, setPlanFilter] = useState("All");
    const [openMenu, setOpenMenu] = useState(null);

    // =====================================================
    // SAMPLE STUDENT SUBSCRIPTION DATA
    // =====================================================

    const subscriptions = [
        {
            id: 1,
            studentName: "Aarav Sharma",
            email: "aarav.sharma@gmail.com",
            studentId: "STU-2026-001",
            plan: "Premium",
            price: "₹5,999",
            startDate: "01 Aug 2026",
            expiryDate: "01 Aug 2027",
            courses: 8,
            courseLimit: 10,
            status: "Active",
        },
        {
            id: 2,
            studentName: "Priya Verma",
            email: "priya.verma@gmail.com",
            studentId: "STU-2026-002",
            plan: "Standard",
            price: "₹3,999",
            startDate: "10 Aug 2026",
            expiryDate: "10 Aug 2027",
            courses: 6,
            courseLimit: 8,
            status: "Active",
        },
        {
            id: 3,
            studentName: "Rahul Singh",
            email: "rahul.singh@gmail.com",
            studentId: "STU-2026-003",
            plan: "Basic",
            price: "₹2,999",
            startDate: "05 Aug 2026",
            expiryDate: "05 Sep 2026",
            courses: 4,
            courseLimit: 5,
            status: "Expiring Soon",
        },
        {
            id: 4,
            studentName: "Ananya Gupta",
            email: "ananya.gupta@gmail.com",
            studentId: "STU-2026-004",
            plan: "Standard",
            price: "₹3,999",
            startDate: "15 Jul 2026",
            expiryDate: "15 Jul 2027",
            courses: 5,
            courseLimit: 8,
            status: "Active",
        },
        {
            id: 5,
            studentName: "Aditya Mishra",
            email: "aditya.mishra@gmail.com",
            studentId: "STU-2026-005",
            plan: "Basic",
            price: "₹2,999",
            startDate: "20 Jun 2026",
            expiryDate: "20 Jul 2026",
            courses: 3,
            courseLimit: 5,
            status: "Expired",
        },
        {
            id: 6,
            studentName: "Sneha Yadav",
            email: "sneha.yadav@gmail.com",
            studentId: "STU-2026-006",
            plan: "Premium",
            price: "₹5,999",
            startDate: "12 Aug 2026",
            expiryDate: "12 Aug 2027",
            courses: 9,
            courseLimit: 10,
            status: "Active",
        },
    ];

    // =====================================================
    // FILTER
    // =====================================================

    const filteredSubscriptions = useMemo(() => {
        return subscriptions.filter((subscription) => {
            const searchText = search.toLowerCase();

            const matchesSearch =
                subscription.studentName
                    .toLowerCase()
                    .includes(searchText) ||
                subscription.email
                    .toLowerCase()
                    .includes(searchText) ||
                subscription.studentId
                    .toLowerCase()
                    .includes(searchText) ||
                subscription.plan
                    .toLowerCase()
                    .includes(searchText);

            const matchesStatus =
                statusFilter === "All" ||
                subscription.status === statusFilter;

            const matchesPlan =
                planFilter === "All" ||
                subscription.plan === planFilter;

            return (
                matchesSearch &&
                matchesStatus &&
                matchesPlan
            );
        });
    }, [search, statusFilter, planFilter]);

    // =====================================================
    // STATISTICS
    // =====================================================

    const totalSubscriptions = subscriptions.length;

    const activeSubscriptions = subscriptions.filter(
        (subscription) =>
            subscription.status === "Active"
    ).length;

    const expiringSubscriptions = subscriptions.filter(
        (subscription) =>
            subscription.status === "Expiring Soon"
    ).length;

    const expiredSubscriptions = subscriptions.filter(
        (subscription) =>
            subscription.status === "Expired"
    ).length;

    // =====================================================
    // PLAN BADGE
    // =====================================================

    const getPlanStyle = (plan) => {
        if (plan === "Premium") {
            return "bg-[#F1ECE5] text-[#303B32]";
        }

        if (plan === "Standard") {
            return "bg-[#FFF9E9] text-[#8C7134]";
        }

        return "bg-[#EDF6EF] text-[#63816A]";
    };

    // =====================================================
    // STATUS BADGE
    // =====================================================

    const getStatusStyle = (status) => {
        if (status === "Active") {
            return "bg-[#EDF6EF] text-[#63816A]";
        }

        if (status === "Expiring Soon") {
            return "bg-[#FFF9E9] text-[#8C7134]";
        }

        return "bg-[#fff3f3] text-[#B96868]";
    };

    // =====================================================
    // COURSE USAGE
    // =====================================================

    const getUsagePercentage = (courses, limit) => {
        return Math.round((courses / limit) * 100);
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#161F19] px-4 py-6 text-[#F3EEDD] sm:px-6 lg:px-8">
            <style>{FONT_IMPORTS}</style>

            {/* =================================================
                BACKGROUND GLOW
            ================================================= */}

            <div className="pointer-events-none fixed -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#F2B84B]/[0.05] blur-[130px]" />

            <div className="pointer-events-none fixed -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#7C9A82]/[0.07] blur-[140px]" />

            <div className="relative z-10">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="mb-8">

                    <p className="mb-1 font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F2B84B]">
                        Administration
                    </p>

                    <h1 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-[#F3EEDD] sm:text-3xl">
                        Subscriptions
                    </h1>

                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#F3EEDD]/50">
                        Manage student subscriptions, plans and
                        billing status.
                    </p>

                </div>


                {/* =================================================
                    STATISTICS
                ================================================= */}

                <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                    {/* TOTAL */}

                    <div
                        className="
                        rounded-2xl
                        border border-[#E4DED4]
                        bg-white
                        p-5
                        shadow-[0_4px_20px_rgba(74,74,74,0.04)]
                    "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-[#536058]">
                                    Total Subscriptions
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-[#303B32]">
                                    {totalSubscriptions}
                                </h2>

                                <p className="mt-1 text-xs text-[#7C817B]">
                                    Student subscriptions
                                </p>

                            </div>

                            <div
                                className="
                                flex h-12 w-12
                                items-center justify-center
                                rounded-xl
                                bg-[#FFF9E9]
                                text-[#F2B84B]
                            "
                            >
                                <CreditCard size={23} />
                            </div>

                        </div>

                    </div>


                    {/* ACTIVE */}

                    <div
                        className="
                        rounded-2xl
                        border border-[#E4DED4]
                        bg-white
                        p-5
                        shadow-[0_4px_20px_rgba(74,74,74,0.04)]
                    "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-[#536058]">
                                    Active
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-[#303B32]">
                                    {activeSubscriptions}
                                </h2>

                                <p className="mt-1 text-xs text-[#7C9A82]">
                                    Currently active
                                </p>

                            </div>

                            <div
                                className="
                                flex h-12 w-12
                                items-center justify-center
                                rounded-xl
                                bg-[#EDF6EF]
                                text-[#64856C]
                            "
                            >
                                <CheckCircle size={23} />
                            </div>

                        </div>

                    </div>


                    {/* EXPIRING */}

                    <div
                        className="
                        rounded-2xl
                        border border-[#E4DED4]
                        bg-white
                        p-5
                        shadow-[0_4px_20px_rgba(74,74,74,0.04)]
                    "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-[#536058]">
                                    Expiring Soon
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-[#303B32]">
                                    {expiringSubscriptions}
                                </h2>

                                <p className="mt-1 text-xs text-[#8C7134]">
                                    Requires attention
                                </p>

                            </div>

                            <div
                                className="
                                flex h-12 w-12
                                items-center justify-center
                                rounded-xl
                                bg-[#FFF9E9]
                                text-[#8C7134]
                            "
                            >
                                <Clock size={23} />
                            </div>

                        </div>

                    </div>


                    {/* EXPIRED */}

                    <div
                        className="
                        rounded-2xl
                        border border-[#E4DED4]
                        bg-white
                        p-5
                        shadow-[0_4px_20px_rgba(74,74,74,0.04)]
                    "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-[#536058]">
                                    Expired
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-[#303B32]">
                                    {expiredSubscriptions}
                                </h2>

                                <p className="mt-1 text-xs text-[#B96868]">
                                    Subscription ended
                                </p>

                            </div>

                            <div
                                className="
                                flex h-12 w-12
                                items-center justify-center
                                rounded-xl
                                bg-[#fff3f3]
                                text-[#B96868]
                            "
                            >
                                <XCircle size={23} />
                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    SEARCH + FILTER
                ================================================= */}

                <div
                    className="
                    mb-6
                    flex flex-col gap-4
                    rounded-2xl
                    border border-[#E4DED4]
                    bg-white
                    p-4
                    shadow-[0_4px_20px_rgba(74,74,74,0.04)]
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                "
                >

                    {/* SEARCH */}

                    <div className="relative w-full lg:max-w-md">

                        <Search
                            size={19}
                            className="
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2
                            text-[#7C817B]
                        "
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            placeholder="Search student, ID or plan..."
                            className="
                            w-full
                            rounded-xl
                            border border-[#E4DED4]
                            bg-[#FBF9F5]
                            py-3
                            pl-10
                            pr-4
                            text-sm
                            text-[#303B32]
                            outline-none
                            placeholder:text-[#8A8E89]
                            transition
                            focus:border-[#F2B84B]
                            focus:ring-2
                            focus:ring-[#F7E6B9]/50
                        "
                        />

                    </div>


                    {/* FILTERS */}

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                        <select
                            value={planFilter}
                            onChange={(e) =>
                                setPlanFilter(e.target.value)
                            }
                            className="
                            rounded-xl
                            border border-[#E4DED4]
                            bg-white
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-[#536058]
                            outline-none
                            focus:border-[#F2B84B]
                        "
                        >

                            <option value="All">
                                All Plans
                            </option>

                            <option value="Basic">
                                Basic
                            </option>

                            <option value="Standard">
                                Standard
                            </option>

                            <option value="Premium">
                                Premium
                            </option>

                        </select>


                        <select
                            value={statusFilter}
                            onChange={(e) =>
                                setStatusFilter(e.target.value)
                            }
                            className="
                            rounded-xl
                            border border-[#E4DED4]
                            bg-white
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-[#536058]
                            outline-none
                            focus:border-[#F2B84B]
                        "
                        >

                            <option value="All">
                                All Status
                            </option>

                            <option value="Active">
                                Active
                            </option>

                            <option value="Expiring Soon">
                                Expiring Soon
                            </option>

                            <option value="Expired">
                                Expired
                            </option>

                        </select>

                    </div>

                </div>


                {/* =================================================
                    SUBSCRIPTIONS TABLE
                ================================================= */}

                <div
                    className="
                    overflow-hidden
                    rounded-2xl
                    border border-[#E4DED4]
                    bg-white
                    shadow-[0_4px_20px_rgba(74,74,74,0.04)]
                "
                >

                    {/* TABLE HEADER */}

                    <div
                        className="
                        border-b border-[#E4DED4]
                        px-5 py-5
                        sm:px-6
                    "
                    >

                        <h2 className="text-lg font-bold text-[#303B32]">
                            Student Subscription Details
                        </h2>

                        <p className="mt-1 text-sm text-[#7C817B]">
                            View and manage student subscription information.
                        </p>

                    </div>


                    {/* TABLE */}

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[1150px]">

                            <thead className="bg-[#FBF9F5]">

                                <tr>

                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#7C817B]">
                                        Student
                                    </th>

                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#7C817B]">
                                        Plan
                                    </th>

                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#7C817B]">
                                        Billing
                                    </th>

                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#7C817B]">
                                        Courses
                                    </th>

                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#7C817B]">
                                        Expiry
                                    </th>

                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#7C817B]">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-[#7C817B]">
                                        Action
                                    </th>

                                </tr>

                            </thead>


                            <tbody className="divide-y divide-[#E4DED4]">

                                {filteredSubscriptions.map(
                                    (subscription) => {

                                        const usage =
                                            getUsagePercentage(
                                                subscription.courses,
                                                subscription.courseLimit
                                            );

                                        return (

                                            <tr
                                                key={subscription.id}
                                                className="
                                                transition-colors
                                                hover:bg-[#FBF9F5]
                                            "
                                            >

                                                {/* STUDENT */}

                                                <td className="px-6 py-5">

                                                    <div className="flex items-center gap-3">

                                                        <div
                                                            className="
                                                            flex
                                                            h-11
                                                            w-11
                                                            shrink-0
                                                            items-center
                                                            justify-center
                                                            rounded-xl
                                                            bg-[#F7E6B9]
                                                            text-sm
                                                            font-bold
                                                            text-[#536058]
                                                        "
                                                        >
                                                            {subscription.studentName.charAt(
                                                                0
                                                            )}
                                                        </div>

                                                        <div>

                                                            <p className="font-semibold text-[#303B32]">
                                                                {
                                                                    subscription.studentName
                                                                }
                                                            </p>

                                                            <p className="mt-1 text-xs text-[#7C817B]">
                                                                {
                                                                    subscription.studentId
                                                                }{" "}
                                                                •{" "}
                                                                {
                                                                    subscription.email
                                                                }
                                                            </p>

                                                        </div>

                                                    </div>

                                                </td>


                                                {/* PLAN */}

                                                <td className="px-6 py-5">

                                                    <span
                                                        className={`
                                                        inline-flex
                                                        rounded-full
                                                        px-3
                                                        py-1.5
                                                        text-xs
                                                        font-semibold
                                                        ${getPlanStyle(
                                                            subscription.plan
                                                        )}
                                                    `}
                                                    >
                                                        {subscription.plan}
                                                    </span>

                                                </td>


                                                {/* BILLING */}

                                                <td className="px-6 py-5">

                                                    <p className="text-sm font-semibold text-[#536058]">
                                                        {
                                                            subscription.price
                                                        }
                                                    </p>

                                                    <p className="mt-1 text-xs text-[#7C817B]">
                                                        Monthly
                                                    </p>

                                                </td>


                                                {/* COURSES */}

                                                <td className="px-6 py-5">

                                                    <div className="w-36">

                                                        <div className="mb-1.5 flex items-center justify-between">

                                                            <span className="text-xs text-[#536058]">
                                                                {
                                                                    subscription.courses
                                                                }
                                                            </span>

                                                            <span className="text-xs font-semibold text-[#F2B84B]">
                                                                {
                                                                    usage
                                                                }%
                                                            </span>

                                                        </div>

                                                        <div className="h-2 overflow-hidden rounded-full bg-[#E4DED4]">

                                                            <div
                                                                className="
                                                                h-full
                                                                rounded-full
                                                                bg-[#F2B84B]
                                                                transition-all
                                                            "
                                                                style={{
                                                                    width: `${usage}%`,
                                                                }}
                                                            />

                                                        </div>

                                                        <p className="mt-1 text-[10px] text-[#7C817B]">
                                                            Limit:{" "}
                                                            {
                                                                subscription.courseLimit
                                                            }
                                                        </p>

                                                    </div>

                                                </td>


                                                {/* EXPIRY */}

                                                <td className="px-6 py-5">

                                                    <p className="text-sm text-[#536058]">
                                                        {
                                                            subscription.expiryDate
                                                        }
                                                    </p>

                                                    <p className="mt-1 text-xs text-[#7C817B]">
                                                        Started{" "}
                                                        {
                                                            subscription.startDate
                                                        }
                                                    </p>

                                                </td>


                                                {/* STATUS */}

                                                <td className="px-6 py-5">

                                                    <span
                                                        className={`
                                                        inline-flex
                                                        items-center
                                                        gap-1.5
                                                        rounded-full
                                                        px-3
                                                        py-1
                                                        text-xs
                                                        font-semibold
                                                        ${getStatusStyle(
                                                            subscription.status
                                                        )}
                                                    `}
                                                    >

                                                        <span
                                                            className={`
                                                            h-1.5
                                                            w-1.5
                                                            rounded-full
                                                            ${subscription.status ===
                                                                    "Active"
                                                                    ? "bg-[#7C9A82]"
                                                                    : subscription.status ===
                                                                        "Expiring Soon"
                                                                        ? "bg-[#8C7134]"
                                                                        : "bg-[#B96868]"
                                                                }
                                                        `}
                                                        />

                                                        {
                                                            subscription.status
                                                        }

                                                    </span>

                                                </td>


                                                {/* ACTION */}

                                                <td className="relative px-6 py-5 text-right">

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMenu(
                                                                openMenu ===
                                                                    subscription.id
                                                                    ? null
                                                                    : subscription.id
                                                            )
                                                        }
                                                        className="
                                                        rounded-lg
                                                        p-2
                                                        text-[#7C817B]
                                                        transition
                                                        hover:bg-[#FFF9E9]
                                                        hover:text-[#536058]
                                                    "
                                                    >

                                                        <MoreVertical
                                                            size={19}
                                                        />

                                                    </button>


                                                    {/* DROPDOWN */}

                                                    {openMenu ===
                                                        subscription.id && (

                                                            <div
                                                                className="
                                                            absolute
                                                            right-6
                                                            top-14
                                                            z-20
                                                            w-40
                                                            overflow-hidden
                                                            rounded-xl
                                                            border
                                                            border-[#E4DED4]
                                                            bg-white
                                                            py-1
                                                            text-left
                                                            shadow-xl
                                                        "
                                                            >

                                                                {/* VIEW */}

                                                                <button
                                                                    type="button"
                                                                    onClick={() =>
                                                                        setOpenMenu(
                                                                            null
                                                                        )
                                                                    }
                                                                    className="
                                                                flex
                                                                w-full
                                                                items-center
                                                                gap-2
                                                                px-4
                                                                py-2.5
                                                                text-sm
                                                                text-[#536058]
                                                                hover:bg-[#FFF9E9]
                                                            "
                                                                >

                                                                    <Eye size={15} />

                                                                    View

                                                                </button>


                                                                {/* EDIT */}

                                                                <button
                                                                    type="button"
                                                                    onClick={() =>
                                                                        setOpenMenu(
                                                                            null
                                                                        )
                                                                    }
                                                                    className="
                                                                flex
                                                                w-full
                                                                items-center
                                                                gap-2
                                                                px-4
                                                                py-2.5
                                                                text-sm
                                                                text-[#536058]
                                                                hover:bg-[#FFF9E9]
                                                            "
                                                                >

                                                                    <Pencil
                                                                        size={15}
                                                                    />

                                                                    Edit

                                                                </button>


                                                                {/* CANCEL */}

                                                                <button
                                                                    type="button"
                                                                    onClick={() =>
                                                                        setOpenMenu(
                                                                            null
                                                                        )
                                                                    }
                                                                    className="
                                                                flex
                                                                w-full
                                                                items-center
                                                                gap-2
                                                                px-4
                                                                py-2.5
                                                                text-sm
                                                                text-[#B96868]
                                                                hover:bg-[#fff3f3]
                                                            "
                                                                >

                                                                    <Ban size={15} />

                                                                    Cancel

                                                                </button>

                                                            </div>

                                                        )}

                                                </td>

                                            </tr>

                                        );
                                    }
                                )}

                            </tbody>

                        </table>

                    </div>


                    {/* =================================================
                        EMPTY STATE
                    ================================================= */}

                    {filteredSubscriptions.length === 0 && (

                        <div className="px-6 py-14 text-center">

                            <div
                                className="
                                mx-auto
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                bg-[#FFF9E9]
                                text-[#F2B84B]
                            "
                            >

                                <CreditCard size={26} />

                            </div>

                            <h3 className="mt-4 font-semibold text-[#303B32]">
                                No student subscriptions found
                            </h3>

                            <p className="mt-1 text-sm text-[#536058]">
                                Try changing your search or filters.
                            </p>

                        </div>

                    )}

                </div>


                {/* =================================================
                    BOTTOM SUMMARY
                ================================================= */}

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">

                    {/* CURRENT PLAN */}

                    <div
                        className="
                        rounded-2xl
                        border border-[#E4DED4]
                        bg-white
                        p-6
                        shadow-[0_4px_20px_rgba(74,74,74,0.04)]
                    "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs font-medium uppercase tracking-wider text-[#7C817B]">
                                    Student Current Plan
                                </p>

                                <h3 className="mt-2 text-xl font-bold text-[#303B32]">
                                    Standard
                                </h3>

                                <p className="mt-1 text-sm text-[#536058]">
                                    ₹3,999 / month
                                </p>

                            </div>

                            <div
                                className="
                                flex h-12 w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#FFF9E9]
                                text-[#F2B84B]
                            "
                            >

                                <CreditCard size={24} />

                            </div>

                        </div>


                        <div className="mt-5">

                            <div className="mb-2 flex justify-between">

                                <span className="text-xs text-[#536058]">
                                    Course usage
                                </span>

                                <span className="text-xs font-semibold text-[#F2B84B]">
                                    62%
                                </span>

                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-[#E4DED4]">

                                <div
                                    className="
                                    h-full
                                    w-[62%]
                                    rounded-full
                                    bg-[#F2B84B]
                                "
                                />

                            </div>

                        </div>

                    </div>


                    {/* BILLING */}

                    <div
                        className="
                        rounded-2xl
                        border border-[#E4DED4]
                        bg-white
                        p-6
                        shadow-[0_4px_20px_rgba(74,74,74,0.04)]
                    "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs font-medium uppercase tracking-wider text-[#7C817B]">
                                    Next Billing Date
                                </p>

                                <h3 className="mt-2 text-xl font-bold text-[#303B32]">
                                    30 Sep 2026
                                </h3>

                                <p className="mt-1 text-sm text-[#536058]">
                                    Automatic renewal enabled
                                </p>

                            </div>

                            <div
                                className="
                                flex h-12 w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#EDF6EF]
                                text-[#64856C]
                            "
                            >

                                <TrendingUp size={24} />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Subscriptions;