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

// ============================================================
// SHIYORA TYPOGRAPHY
// ============================================================

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";

// ============================================================
// DASHBOARD
// ============================================================

const Dashboard = () => {
    // ============================================================
    // STATISTICS
    // ============================================================

    const stats = [
        {
            title: "Total Organizations",
            value: "128",
            change: "+12.5%",
            icon: Building2,
        },
        {
            title: "Total Users",
            value: "12,480",
            change: "+18.2%",
            icon: Users,
        },
        {
            title: "Total Courses",
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

    // ============================================================
    // ORGANIZATIONS
    // ============================================================

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

    // ============================================================
    // CHART DATA
    // ============================================================

    const chartData = [
        45,
        60,
        48,
        72,
        58,
        82,
        68,
        90,
        75,
        95,
        84,
        100,
    ];

    // ============================================================
    // RENDER
    // ============================================================

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#161F19] font-['Inter'] text-[#F3EEDD]">
            <style>{FONT_IMPORTS}</style>

            {/* ========================================================
                BACKGROUND GLOW
            ======================================================== */}

            <div
                className="
                    pointer-events-none
                    fixed
                    -left-40
                    -top-40
                    h-[520px]
                    w-[520px]
                    rounded-full
                    bg-[#F2B84B]/[0.08]
                    blur-[140px]
                "
            />

            <div
                className="
                    pointer-events-none
                    fixed
                    right-[-100px]
                    top-32
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#7C9A82]/[0.07]
                    blur-[150px]
                "
            />

            {/* ========================================================
                CHALK DUST
            ======================================================== */}

            <div
                className="
                    pointer-events-none
                    fixed
                    inset-0
                    opacity-[0.035]
                "
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(243,238,221,0.8) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* ========================================================
                CONTENT
            ======================================================== */}

            <div className="relative z-10 mx-auto w-full max-w-[1600px] p-4 md:p-6 lg:p-8">

                {/* ====================================================
                    HEADER
                ==================================================== */}

                <header
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
                                font-['JetBrains_Mono']
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.22em]
                                text-[#F2B84B]
                            "
                        >
                            Administration
                        </p>

                        <h1
                            className="
                                mt-2
                                font-['Space_Grotesk']
                                text-3xl
                                font-semibold
                                tracking-tight
                                text-[#F3EEDD]
                                md:text-4xl
                            "
                        >
                            SuperAdmin Dashboard
                        </h1>

                        <p
                            className="
                                mt-2
                                max-w-2xl
                                text-sm
                                leading-relaxed
                                text-[#F3EEDD]/50
                            "
                        >
                            Welcome back to the Shiyora LMS administration
                            panel. Manage organizations, users, courses and
                            platform activity from one place.
                        </p>
                    </div>

                    {/* DATE */}

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            px-5
                            py-3
                            shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                        "
                    >
                        <span
                            className="
                                font-['JetBrains_Mono']
                                text-[9px]
                                uppercase
                                tracking-[0.2em]
                                text-[#F3EEDD]/35
                            "
                        >
                            Today
                        </span>

                        <p
                            className="
                                mt-1
                                font-['Space_Grotesk']
                                text-sm
                                font-semibold
                                text-[#F3EEDD]
                            "
                        >
                            Aug 31, 2026
                        </p>

                        <span
                            className="
                                absolute
                                -right-5
                                -top-5
                                h-10
                                w-16
                                rotate-45
                                bg-[#F2B84B]/10
                            "
                        />
                    </div>
                </header>

                {/* ====================================================
                    STATISTICS
                ==================================================== */}

                <section
                    className="
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                        xl:grid-cols-4
                    "
                >
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.title}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-[#F3EEDD]/10
                                    bg-[#1B241E]
                                    p-5
                                    shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-[#F2B84B]/30
                                    hover:shadow-[0_25px_55px_rgba(0,0,0,0.28)]
                                "
                            >
                                {/* Decorative tape */}

                                <span
                                    className="
                                        absolute
                                        -right-6
                                        -top-6
                                        h-12
                                        w-20
                                        rotate-45
                                        bg-[#F2B84B]/10
                                        transition-all
                                        duration-300
                                        group-hover:bg-[#F2B84B]/15
                                    "
                                />

                                <div className="relative flex items-start justify-between">
                                    <div>
                                        <p
                                            className="
                                                text-xs
                                                font-medium
                                                text-[#F3EEDD]/45
                                            "
                                        >
                                            {stat.title}
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
                                            {stat.value}
                                        </h2>

                                        <div className="mt-3 flex items-center gap-1.5">
                                            <TrendingUp
                                                size={14}
                                                className="text-[#7C9A82]"
                                            />

                                            <span
                                                className="
                                                    font-['JetBrains_Mono']
                                                    text-xs
                                                    font-semibold
                                                    text-[#7C9A82]
                                                "
                                            >
                                                {stat.change}
                                            </span>

                                            <span className="text-[10px] text-[#F3EEDD]/30">
                                                this month
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            border
                                            border-[#F2B84B]/20
                                            bg-[#F2B84B]/10
                                            text-[#F2B84B]
                                            transition-all
                                            duration-300
                                            group-hover:border-[#F2B84B]/40
                                            group-hover:bg-[#F2B84B]/15
                                        "
                                    >
                                        <Icon size={20} strokeWidth={1.7} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>

                {/* ====================================================
                    MAIN ANALYTICS GRID
                ==================================================== */}

                <section
                    className="
                        mt-5
                        grid
                        grid-cols-1
                        gap-5
                        xl:grid-cols-3
                    "
                >

                    {/* =================================================
                        PLATFORM OVERVIEW
                    ================================================= */}

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-6
                            shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                            xl:col-span-2
                        "
                    >
                        {/* Tape */}

                        <span
                            className="
                                absolute
                                -top-2
                                left-10
                                h-5
                                w-14
                                -rotate-3
                                bg-[#F2B84B]/60
                            "
                            style={{
                                clipPath:
                                    "polygon(4% 0,96% 0,100% 100%,0% 100%)",
                            }}
                        />

                        <div className="mb-7 flex items-start justify-between gap-4">
                            <div>
                                <p
                                    className="
                                        font-['JetBrains_Mono']
                                        text-[10px]
                                        uppercase
                                        tracking-[0.2em]
                                        text-[#F2B84B]
                                    "
                                >
                                    Analytics
                                </p>

                                <h2
                                    className="
                                        mt-1
                                        font-['Space_Grotesk']
                                        text-xl
                                        font-semibold
                                        text-[#F3EEDD]
                                    "
                                >
                                    Platform Overview
                                </h2>

                                <p className="mt-1 text-xs text-[#F3EEDD]/35">
                                    Shiyora LMS platform statistics
                                </p>
                            </div>

                            <button
                                type="button"
                                className="
                                    rounded-lg
                                    border
                                    border-[#F3EEDD]/10
                                    bg-[#F3EEDD]/5
                                    px-3
                                    py-2
                                    font-['JetBrains_Mono']
                                    text-[9px]
                                    uppercase
                                    tracking-widest
                                    text-[#F3EEDD]/45
                                    transition-all
                                    duration-200
                                    hover:border-[#F2B84B]/30
                                    hover:bg-[#F2B84B]/10
                                    hover:text-[#F2B84B]
                                "
                            >
                                This Year
                            </button>
                        </div>

                        {/* CHART */}

                        <div
                            className="
                                relative
                                flex
                                h-64
                                items-end
                                gap-2
                                border-b
                                border-[#F3EEDD]/10
                            "
                        >
                            {/* Horizontal guide lines */}

                            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between pb-0">
                                {[1, 2, 3, 4].map((line) => (
                                    <div
                                        key={line}
                                        className="border-t border-dashed border-[#F3EEDD]/[0.05]"
                                    />
                                ))}
                            </div>

                            {chartData.map((height, index) => (
                                <div
                                    key={index}
                                    className="
                                        group
                                        relative
                                        z-10
                                        flex
                                        h-full
                                        flex-1
                                        items-end
                                    "
                                >
                                    <div
                                        style={{
                                            height: `${height}%`,
                                        }}
                                        className="
                                            relative
                                            w-full
                                            rounded-t-md
                                            bg-[#7C9A82]/55
                                            transition-all
                                            duration-300
                                            group-hover:bg-[#F2B84B]
                                            group-hover:shadow-[0_0_18px_rgba(242,184,75,0.18)]
                                        "
                                    >
                                        <div
                                            className="
                                                absolute
                                                left-0
                                                right-0
                                                top-0
                                                h-1
                                                rounded-full
                                                bg-[#F3EEDD]/20
                                            "
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* MONTHS */}

                        <div
                            className="
                                mt-4
                                flex
                                justify-between
                                font-['JetBrains_Mono']
                                text-[9px]
                                uppercase
                                tracking-wider
                                text-[#F3EEDD]/30
                            "
                        >
                            <span>Jan</span>
                            <span>Mar</span>
                            <span>May</span>
                            <span>Jul</span>
                            <span>Sep</span>
                            <span>Nov</span>
                        </div>
                    </div>

                    {/* =================================================
                        PLATFORM USERS
                    ================================================= */}

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-6
                            shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                        "
                    >
                        <p
                            className="
                                font-['JetBrains_Mono']
                                text-[10px]
                                uppercase
                                tracking-[0.2em]
                                text-[#F2B84B]
                            "
                        >
                            Distribution
                        </p>

                        <h2
                            className="
                                mt-1
                                font-['Space_Grotesk']
                                text-xl
                                font-semibold
                            "
                        >
                            Platform Users
                        </h2>

                        <p className="mt-1 text-xs text-[#F3EEDD]/35">
                            User distribution
                        </p>

                        <div className="mt-7 space-y-6">

                            {/* TEACHERS */}

                            <div>
                                <div className="mb-2 flex justify-between text-sm">
                                    <span className="flex items-center gap-2 text-[#F3EEDD]/65">
                                        <UserCheck
                                            size={16}
                                            className="text-[#F2B84B]"
                                        />
                                        Teachers
                                    </span>

                                    <span
                                        className="
                                            font-['JetBrains_Mono']
                                            text-xs
                                            font-semibold
                                        "
                                    >
                                        2,140
                                    </span>
                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-[#F3EEDD]/10">
                                    <div className="h-full w-[65%] rounded-full bg-[#F2B84B]" />
                                </div>
                            </div>

                            {/* STUDENTS */}

                            <div>
                                <div className="mb-2 flex justify-between text-sm">
                                    <span className="flex items-center gap-2 text-[#F3EEDD]/65">
                                        <GraduationCap
                                            size={16}
                                            className="text-[#7C9A82]"
                                        />
                                        Students
                                    </span>

                                    <span
                                        className="
                                            font-['JetBrains_Mono']
                                            text-xs
                                            font-semibold
                                        "
                                    >
                                        9,850
                                    </span>
                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-[#F3EEDD]/10">
                                    <div className="h-full w-[85%] rounded-full bg-[#7C9A82]" />
                                </div>
                            </div>

                            {/* ADMINS */}

                            <div>
                                <div className="mb-2 flex justify-between text-sm">
                                    <span className="flex items-center gap-2 text-[#F3EEDD]/65">
                                        <Activity
                                            size={16}
                                            className="text-[#D6402C]"
                                        />
                                        Admins
                                    </span>

                                    <span
                                        className="
                                            font-['JetBrains_Mono']
                                            text-xs
                                            font-semibold
                                        "
                                    >
                                        490
                                    </span>
                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-[#F3EEDD]/10">
                                    <div className="h-full w-[35%] rounded-full bg-[#D6402C]" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ====================================================
                    RECENT ORGANIZATIONS
                ==================================================== */}

                <section
                    className="
                        relative
                        mt-5
                        overflow-hidden
                        rounded-xl
                        border
                        border-[#F3EEDD]/10
                        bg-[#1B241E]
                        shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                    "
                >
                    {/* HEADER */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-3
                            border-b
                            border-[#F3EEDD]/10
                            p-6
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >
                        <div>
                            <p
                                className="
                                    font-['JetBrains_Mono']
                                    text-[10px]
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#F2B84B]
                                "
                            >
                                Organizations
                            </p>

                            <h2
                                className="
                                    mt-1
                                    font-['Space_Grotesk']
                                    text-xl
                                    font-semibold
                                "
                            >
                                Recent Organizations
                            </h2>

                            <p className="mt-1 text-xs text-[#F3EEDD]/35">
                                Recently registered organizations on Shiyora
                            </p>
                        </div>

                        <button
                            type="button"
                            className="
                                flex
                                items-center
                                gap-1
                                self-start
                                font-['JetBrains_Mono']
                                text-xs
                                font-semibold
                                text-[#F2B84B]
                                transition
                                hover:text-[#F7C968]
                            "
                        >
                            View All
                            <ArrowUpRight size={15} />
                        </button>
                    </div>

                    {/* TABLE */}

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[720px]">

                            <thead className="border-b border-[#F3EEDD]/10 bg-[#141C17]">
                                <tr>
                                    {[
                                        "Organization",
                                        "Users",
                                        "Courses",
                                        "Status",
                                        "Action",
                                    ].map((heading, index) => (
                                        <th
                                            key={heading}
                                            className={`
                                                px-6
                                                py-4
                                                font-['JetBrains_Mono']
                                                text-[9px]
                                                font-semibold
                                                uppercase
                                                tracking-[0.16em]
                                                text-[#F3EEDD]/30
                                                ${index === 4
                                                    ? "text-right"
                                                    : "text-left"
                                                }
                                            `}
                                        >
                                            {heading}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-[#F3EEDD]/[0.07]">
                                {organizations.map((org, index) => (
                                    <tr
                                        key={index}
                                        className="
                                            transition-all
                                            duration-200
                                            hover:bg-[#F3EEDD]/[0.025]
                                        "
                                    >
                                        {/* ORGANIZATION */}

                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="
                                                        flex
                                                        h-10
                                                        w-10
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-lg
                                                        border
                                                        border-[#F2B84B]/20
                                                        bg-[#F2B84B]/10
                                                        font-['Space_Grotesk']
                                                        font-semibold
                                                        text-[#F2B84B]
                                                    "
                                                >
                                                    {org.name.charAt(0)}
                                                </div>

                                                <div>
                                                    <p className="font-medium text-[#F3EEDD]">
                                                        {org.name}
                                                    </p>

                                                    <p className="mt-0.5 text-xs text-[#F3EEDD]/35">
                                                        {org.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* USERS */}

                                        <td
                                            className="
                                                px-6
                                                py-4
                                                font-['JetBrains_Mono']
                                                text-xs
                                                text-[#F3EEDD]/55
                                            "
                                        >
                                            {org.users}
                                        </td>

                                        {/* COURSES */}

                                        <td
                                            className="
                                                px-6
                                                py-4
                                                font-['JetBrains_Mono']
                                                text-xs
                                                text-[#F3EEDD]/55
                                            "
                                        >
                                            {org.courses}
                                        </td>

                                        {/* STATUS */}

                                        <td className="px-6 py-4">
                                            <span
                                                className={`
                                                    inline-flex
                                                    rounded-full
                                                    border
                                                    px-3
                                                    py-1
                                                    font-['JetBrains_Mono']
                                                    text-[9px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-wider

                                                    ${org.status === "Active"
                                                        ? "border-[#7C9A82]/30 bg-[#7C9A82]/10 text-[#7C9A82]"
                                                        : "border-[#F2B84B]/30 bg-[#F2B84B]/10 text-[#F2B84B]"
                                                    }
                                                `}
                                            >
                                                {org.status}
                                            </span>
                                        </td>

                                        {/* ACTION */}

                                        <td className="px-6 py-4 text-right">
                                            <button
                                                type="button"
                                                aria-label={`Actions for ${org.name}`}
                                                className="
                                                    rounded-lg
                                                    p-2
                                                    text-[#F3EEDD]/30
                                                    transition-all
                                                    hover:bg-[#F2B84B]/10
                                                    hover:text-[#F2B84B]
                                                "
                                            >
                                                <MoreVertical size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ====================================================
                    SUMMARY CARDS
                ==================================================== */}

                <section
                    className="
                        mt-5
                        grid
                        grid-cols-1
                        gap-5
                        md:grid-cols-3
                    "
                >

                    {/* SUBSCRIPTIONS */}

                    <div
                        className="
                            group
                            relative
                            overflow-hidden
                            rounded-xl
                            border
                            border-[#F2B84B]/20
                            bg-[#1B241E]
                            p-6
                            shadow-[0_15px_35px_rgba(0,0,0,0.20)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#F2B84B]/35
                        "
                    >
                        <div
                            className="
                                absolute
                                -right-10
                                -top-10
                                h-28
                                w-28
                                rounded-full
                                bg-[#F2B84B]/10
                                blur-2xl
                            "
                        />

                        <div className="relative flex items-center justify-between">
                            <div>
                                <p className="text-xs text-[#F3EEDD]/50">
                                    Active Subscriptions
                                </p>

                                <h3
                                    className="
                                        mt-2
                                        font-['JetBrains_Mono']
                                        text-3xl
                                        font-semibold
                                        text-[#F3EEDD]
                                    "
                                >
                                    96
                                </h3>
                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    border-[#F2B84B]/20
                                    bg-[#F2B84B]/10
                                    text-[#F2B84B]
                                "
                            >
                                <CreditCard size={24} />
                            </div>
                        </div>

                        <p className="relative mt-4 text-xs text-[#F3EEDD]/40">
                            14 new subscriptions this month
                        </p>
                    </div>

                    {/* COURSES */}

                    <div
                        className="
                            group
                            relative
                            overflow-hidden
                            rounded-xl
                            border
                            border-[#7C9A82]/20
                            bg-[#1B241E]
                            p-6
                            shadow-[0_15px_35px_rgba(0,0,0,0.20)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#7C9A82]/35
                        "
                    >
                        <div
                            className="
                                absolute
                                -right-10
                                -top-10
                                h-28
                                w-28
                                rounded-full
                                bg-[#7C9A82]/10
                                blur-2xl
                            "
                        />

                        <div className="relative flex items-center justify-between">
                            <div>
                                <p className="text-xs text-[#F3EEDD]/50">
                                    Active Courses
                                </p>

                                <h3
                                    className="
                                        mt-2
                                        font-['JetBrains_Mono']
                                        text-3xl
                                        font-semibold
                                        text-[#F3EEDD]
                                    "
                                >
                                    1,245
                                </h3>
                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    border-[#7C9A82]/20
                                    bg-[#7C9A82]/10
                                    text-[#7C9A82]
                                "
                            >
                                <BookOpen size={24} />
                            </div>
                        </div>

                        <p className="relative mt-4 text-xs text-[#F3EEDD]/40">
                            87 courses added this month
                        </p>
                    </div>

                    {/* REVENUE */}

                    <div
                        className="
                            group
                            relative
                            overflow-hidden
                            rounded-xl
                            border
                            border-[#D6402C]/20
                            bg-[#1B241E]
                            p-6
                            shadow-[0_15px_35px_rgba(0,0,0,0.20)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#D6402C]/35
                        "
                    >
                        <div
                            className="
                                absolute
                                -right-10
                                -top-10
                                h-28
                                w-28
                                rounded-full
                                bg-[#D6402C]/10
                                blur-2xl
                            "
                        />

                        <div className="relative flex items-center justify-between">
                            <div>
                                <p className="text-xs text-[#F3EEDD]/50">
                                    Monthly Revenue
                                </p>

                                <h3
                                    className="
                                        mt-2
                                        font-['JetBrains_Mono']
                                        text-3xl
                                        font-semibold
                                        text-[#F3EEDD]
                                    "
                                >
                                    ₹2.18L
                                </h3>
                            </div>

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    border-[#D6402C]/20
                                    bg-[#D6402C]/10
                                    text-[#D6402C]
                                "
                            >
                                <TrendingUp size={24} />
                            </div>
                        </div>

                        <p className="relative mt-4 text-xs text-[#F3EEDD]/40">
                            24.6% increase from last month
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Dashboard;