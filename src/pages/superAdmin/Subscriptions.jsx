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

    // ============================================================
    // FILTER
    // ============================================================

    const filteredSubscriptions = subscriptions.filter((subscription) => {
        const searchValue = search.toLowerCase();

        const matchesSearch =
            subscription.organization
                .toLowerCase()
                .includes(searchValue) ||
            subscription.id.toLowerCase().includes(searchValue) ||
            subscription.plan.toLowerCase().includes(searchValue);

        const matchesStatus =
            statusFilter === "All" ||
            subscription.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    // ============================================================
    // STATUS STYLE
    // ============================================================

    const getStatusStyle = (status) => {
        if (status === "Active") {
            return "bg-[#EDF6EF] text-[#64856C]";
        }

        if (status === "Pending") {
            return "bg-[#FFF5DD] text-[#A27E35]";
        }

        return "bg-[#FFF0F0] text-[#B96868]";
    };

    // ============================================================
    // STATUS ICON
    // ============================================================

    const getStatusIcon = (status) => {
        if (status === "Active") {
            return <CheckCircle size={14} />;
        }

        if (status === "Pending") {
            return <Clock size={14} />;
        }

        return <XCircle size={14} />;
    };

    // ============================================================
    // PLAN STYLE
    // ============================================================

    const getPlanStyle = (plan) => {
        if (plan === "Enterprise") {
            return "border-[#7C9A82]/40 bg-[#EDF4EE] text-[#587560]";
        }

        if (plan === "Professional") {
            return "border-[#F2B84B]/40 bg-[#FFF5D9] text-[#9A792C]";
        }

        return "border-[#D8D0C2] bg-[#F5F1E9] text-[#817667]";
    };

    // ============================================================
    // RETURN
    // ============================================================

    return (
        <main
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#161F19]
                px-4
                py-6
                text-[#F3EEDD]
                sm:px-6
                lg:px-8
            "
        >

            {/* =====================================================
                BACKGROUND GLOW
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    fixed
                    -left-40
                    -top-40
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#F2B84B]/[0.05]
                    blur-[130px]
                "
            />

            <div
                className="
                    pointer-events-none
                    fixed
                    -right-40
                    bottom-0
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#7C9A82]/[0.07]
                    blur-[140px]
                "
            />

            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="relative z-10">

                {/* =================================================
                    HEADER
                ================================================== */}

                <div
                    className="
                        mb-8
                        flex
                        flex-col
                        gap-5
                        md:flex-row
                        md:items-end
                        md:justify-between
                    "
                >

                    <div>

                        <p
                            className="
                                mb-1
                                font-['JetBrains_Mono']
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-[#F2B84B]
                            "
                        >
                            Administration
                        </p>

                        <h1
                            className="
                                font-['Space_Grotesk']
                                text-3xl
                                font-bold
                                tracking-tight
                                text-[#F3EEDD]
                                md:text-4xl
                            "
                        >
                            Subscriptions
                        </h1>

                        <p
                            className="
                                mt-2
                                max-w-xl
                                text-sm
                                leading-relaxed
                                text-[#F3EEDD]/50
                            "
                        >
                            Manage Shiyora LMS organization subscriptions
                            and billing plans.
                        </p>

                    </div>

                    {/* MANAGE PLANS */}

                    <button
                        type="button"
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-[#F2B84B]/30
                            bg-[#F2B84B]
                            px-5
                            py-3
                            font-['Space_Grotesk']
                            text-sm
                            font-semibold
                            text-[#161F19]
                            shadow-[0_10px_30px_rgba(242,184,75,0.12)]
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-[#F7C968]
                            hover:shadow-[0_12px_35px_rgba(242,184,75,0.18)]
                        "
                    >
                        <CreditCard size={18} />
                        Manage Plans
                    </button>

                </div>

                {/* =================================================
                    SUMMARY CARDS
                ================================================== */}

                <div
                    className="
                        mb-6
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    {/* ACTIVE */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-5
                            shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#7C9A82]/30
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
                                    Active Subscriptions
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-['JetBrains_Mono']
                                        text-2xl
                                        font-semibold
                                        text-[#F3EEDD]
                                    "
                                >
                                    96
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        flex
                                        items-center
                                        gap-1
                                        text-[11px]
                                        text-[#7C9A82]
                                    "
                                >
                                    <TrendingUp size={13} />
                                    +12.4%
                                </p>

                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#7C9A82]/20
                                    bg-[#7C9A82]/10
                                    text-[#7C9A82]
                                "
                            >
                                <CheckCircle size={22} />
                            </div>

                        </div>

                    </div>

                    {/* PENDING */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-5
                            shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#F2B84B]/30
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
                                    Pending
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-['JetBrains_Mono']
                                        text-2xl
                                        font-semibold
                                        text-[#F3EEDD]
                                    "
                                >
                                    8
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        text-[#A27E35]
                                    "
                                >
                                    Awaiting activation
                                </p>

                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#F2B84B]/20
                                    bg-[#F2B84B]/10
                                    text-[#F2B84B]
                                "
                            >
                                <Clock size={22} />
                            </div>

                        </div>

                    </div>

                    {/* EXPIRED */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-5
                            shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#B96868]/30
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
                                    Expired
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-['JetBrains_Mono']
                                        text-2xl
                                        font-semibold
                                        text-[#F3EEDD]
                                    "
                                >
                                    12
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        text-[#B96868]
                                    "
                                >
                                    Need renewal
                                </p>

                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#B96868]/20
                                    bg-[#B96868]/10
                                    text-[#B96868]
                                "
                            >
                                <XCircle size={22} />
                            </div>

                        </div>

                    </div>

                    {/* REVENUE */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-5
                            shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#F2B84B]/30
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
                                    Monthly Revenue
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        font-['JetBrains_Mono']
                                        text-2xl
                                        font-semibold
                                        text-[#F3EEDD]
                                    "
                                >
                                    ₹2.18L
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        flex
                                        items-center
                                        gap-1
                                        text-[11px]
                                        text-[#7C9A82]
                                    "
                                >
                                    <TrendingUp size={13} />
                                    +24.6%
                                </p>

                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#F2B84B]/20
                                    bg-[#F2B84B]/10
                                    text-[#F2B84B]
                                "
                            >
                                <CreditCard size={22} />
                            </div>

                        </div>

                    </div>

                </div>

                {/* =================================================
                    SUBSCRIPTION SECTION
                ================================================== */}

                <section
                    className="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[#F3EEDD]/10
                        bg-[#F8F5EF]
                        shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                    "
                >

                    {/* SECTION HEADER */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            border-b
                            border-[#E7DED5]
                            bg-[#FBF9F5]
                            p-6
                            xl:flex-row
                            xl:items-center
                            xl:justify-between
                        "
                    >

                        <div>

                            <div className="flex items-center gap-2">

                                <span
                                    className="
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-[#F2B84B]
                                    "
                                />

                                <p
                                    className="
                                        font-['JetBrains_Mono']
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.18em]
                                        text-[#8C7134]
                                    "
                                >
                                    Billing
                                </p>

                            </div>

                            <h2
                                className="
                                    mt-1
                                    font-['Space_Grotesk']
                                    text-xl
                                    font-semibold
                                    text-[#303B32]
                                "
                            >
                                All Subscriptions
                            </h2>

                            <p className="mt-1 text-xs text-[#7C817B]">
                                View and manage organization subscription plans.
                            </p>

                        </div>

                        {/* SEARCH + FILTER */}

                        <div className="flex flex-col gap-3 sm:flex-row">

                            {/* SEARCH */}

                            <div className="relative">

                                <Search
                                    size={17}
                                    className="
                                        absolute
                                        left-3
                                        top-1/2
                                        -translate-y-1/2
                                        text-[#8A8E89]
                                    "
                                />

                                <input
                                    type="text"
                                    placeholder="Search subscriptions..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-[#DED7CD]
                                        bg-white
                                        py-2.5
                                        pl-10
                                        pr-4
                                        text-sm
                                        text-[#303B32]
                                        outline-none
                                        placeholder:text-[#AAA69F]
                                        transition
                                        focus:border-[#F2B84B]/60
                                        focus:ring-2
                                        focus:ring-[#F2B84B]/10
                                        sm:w-64
                                    "
                                />

                            </div>

                            {/* FILTER */}

                            <div className="relative">

                                <Filter
                                    size={16}
                                    className="
                                        absolute
                                        left-3
                                        top-1/2
                                        -translate-y-1/2
                                        text-[#8A8E89]
                                    "
                                />

                                <select
                                    value={statusFilter}
                                    onChange={(e) =>
                                        setStatusFilter(e.target.value)
                                    }
                                    className="
                                        appearance-none
                                        rounded-xl
                                        border
                                        border-[#DED7CD]
                                        bg-white
                                        py-2.5
                                        pl-9
                                        pr-9
                                        text-sm
                                        text-[#536058]
                                        outline-none
                                        transition
                                        focus:border-[#F2B84B]/60
                                        focus:ring-2
                                        focus:ring-[#F2B84B]/10
                                    "
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

                    {/* =================================================
                        TABLE
                    ================================================== */}

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[1050px]">

                            <thead className="bg-[#F1ECE5]">

                                <tr>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#817B74]
                                        "
                                    >
                                        Subscription
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#817B74]
                                        "
                                    >
                                        Plan
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#817B74]
                                        "
                                    >
                                        Users
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#817B74]
                                        "
                                    >
                                        Amount
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#817B74]
                                        "
                                    >
                                        Next Billing
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#817B74]
                                        "
                                    >
                                        Status
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-4
                                            text-right
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-[#817B7B]
                                        "
                                    >
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody className="divide-y divide-[#E7DED5]">

                                {filteredSubscriptions.length > 0 ? (

                                    filteredSubscriptions.map(
                                        (subscription) => (

                                            <tr
                                                key={subscription.id}
                                                className="
                                                    transition-colors
                                                    hover:bg-[#FFFDF9]
                                                "
                                            >

                                                {/* ORGANIZATION */}

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
                                                                border
                                                                border-[#F2B84B]/30
                                                                bg-[#F7E6B9]
                                                                font-['Space_Grotesk']
                                                                font-bold
                                                                text-[#6E5926]
                                                            "
                                                        >
                                                            {subscription.organization.charAt(
                                                                0
                                                            )}
                                                        </div>

                                                        <div>

                                                            <p
                                                                className="
                                                                    font-['Space_Grotesk']
                                                                    text-sm
                                                                    font-semibold
                                                                    text-[#303B32]
                                                                "
                                                            >
                                                                {
                                                                    subscription.organization
                                                                }
                                                            </p>

                                                            <p
                                                                className="
                                                                    mt-1
                                                                    font-['JetBrains_Mono']
                                                                    text-[10px]
                                                                    text-[#8A8E89]
                                                                "
                                                            >
                                                                {
                                                                    subscription.id
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
                                                            rounded-lg
                                                            border
                                                            px-3
                                                            py-1
                                                            font-['JetBrains_Mono']
                                                            text-[9px]
                                                            font-semibold
                                                            uppercase
                                                            tracking-wider
                                                            ${getPlanStyle(
                                                            subscription.plan
                                                        )}
                                                        `}
                                                    >
                                                        {
                                                            subscription.plan
                                                        }
                                                    </span>

                                                    <p
                                                        className="
                                                            mt-1
                                                            text-xs
                                                            text-[#8A8E89]
                                                        "
                                                    >
                                                        {
                                                            subscription.billing
                                                        }
                                                    </p>

                                                </td>

                                                {/* USERS */}

                                                <td className="px-6 py-5">

                                                    <div
                                                        className="
                                                            flex
                                                            items-center
                                                            gap-2
                                                            font-['JetBrains_Mono']
                                                            text-xs
                                                            text-[#536058]
                                                        "
                                                    >
                                                        <Users size={15} />
                                                        {
                                                            subscription.users
                                                        }
                                                    </div>

                                                </td>

                                                {/* AMOUNT */}

                                                <td className="px-6 py-5">

                                                    <p
                                                        className="
                                                            font-['Space_Grotesk']
                                                            text-sm
                                                            font-semibold
                                                            text-[#303B32]
                                                        "
                                                    >
                                                        {
                                                            subscription.amount
                                                        }
                                                    </p>

                                                    <p
                                                        className="
                                                            mt-1
                                                            text-xs
                                                            text-[#8A8E89]
                                                        "
                                                    >
                                                        per month
                                                    </p>

                                                </td>

                                                {/* NEXT BILLING */}

                                                <td
                                                    className="
                                                        px-6
                                                        py-5
                                                        font-['JetBrains_Mono']
                                                        text-xs
                                                        text-[#536058]
                                                    "
                                                >
                                                    {
                                                        subscription.nextBilling
                                                    }
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

                                                        {getStatusIcon(
                                                            subscription.status
                                                        )}

                                                        {
                                                            subscription.status
                                                        }

                                                    </span>

                                                </td>

                                                {/* ACTION */}

                                                <td className="px-6 py-5 text-right">

                                                    <button
                                                        type="button"
                                                        className="
                                                            rounded-lg
                                                            p-2
                                                            text-[#8A8E89]
                                                            transition
                                                            hover:bg-[#F3EEDD]
                                                            hover:text-[#303B32]
                                                        "
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
                                            className="px-6 py-14 text-center"
                                        >

                                            <div className="flex flex-col items-center">

                                                <div
                                                    className="
                                                        flex
                                                        h-14
                                                        w-14
                                                        items-center
                                                        justify-center
                                                        rounded-2xl
                                                        bg-[#FFF5DD]
                                                        text-[#A27E35]
                                                    "
                                                >
                                                    <CreditCard size={26} />
                                                </div>

                                                <p
                                                    className="
                                                        mt-4
                                                        font-['Space_Grotesk']
                                                        font-semibold
                                                        text-[#303B32]
                                                    "
                                                >
                                                    No subscriptions found
                                                </p>

                                                <p
                                                    className="
                                                        mt-1
                                                        text-sm
                                                        text-[#8A8E89]
                                                    "
                                                >
                                                    Try changing your search
                                                    or filter.
                                                </p>

                                            </div>

                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                    {/* =================================================
                        FOOTER
                    ================================================== */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-2
                            border-t
                            border-[#E7DED5]
                            bg-[#FBF9F5]
                            px-6
                            py-4
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >

                        <p
                            className="
                                text-xs
                                text-[#8A8E89]
                            "
                        >
                            Showing{" "}
                            <span
                                className="
                                    font-['JetBrains_Mono']
                                    font-semibold
                                    text-[#536058]
                                "
                            >
                                {filteredSubscriptions.length}
                            </span>{" "}
                            subscriptions
                        </p>

                        <p
                            className="
                                font-['JetBrains_Mono']
                                text-[9px]
                                uppercase
                                tracking-wider
                                text-[#AAA69F]
                            "
                        >
                            Shiyora Billing Management
                        </p>

                    </div>

                </section>

                {/* =================================================
                    FOOTER NOTE
                ================================================== */}

                <div className="mt-5 flex items-center justify-between">

                    <p
                        className="
                            font-['JetBrains_Mono']
                            text-[9px]
                            uppercase
                            tracking-wider
                            text-[#F3EEDD]/25
                        "
                    >
                        Shiyora Administration
                    </p>

                    <p
                        className="
                            font-['JetBrains_Mono']
                            text-[9px]
                            uppercase
                            tracking-wider
                            text-[#F3EEDD]/25
                        "
                    >
                        Subscription Management
                    </p>

                </div>

            </div>

        </main>
    );
};

export default Subscriptions;