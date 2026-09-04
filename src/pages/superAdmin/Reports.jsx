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
            accent: "gold",
        },
        {
            title: "Users",
            value: "12,480",
            change: "+18.2%",
            icon: Users,
            accent: "green",
        },
        {
            title: "Courses",
            value: "1,245",
            change: "+8.4%",
            icon: BookOpen,
            accent: "gold",
        },
        {
            title: "Revenue",
            value: "₹8.42L",
            change: "+24.6%",
            icon: CreditCard,
            accent: "green",
        },
    ];

    const userGrowth = [
        35, 48, 42, 60, 55, 70, 64, 82, 76, 90, 84, 96,
    ];

    const revenueData = [
        ["Subscriptions", "₹5.20L", "72%"],
        ["Courses", "₹2.10L", "48%"],
        ["Other", "₹1.12L", "28%"],
    ];

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
                            Analytics
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
                            Reports
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
                            Monitor Shiyora LMS platform performance,
                            growth and financial analytics.
                        </p>

                    </div>

                    {/* EXPORT BUTTON */}

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
                        <Download size={18} />
                        Export Report
                    </button>

                </div>

                {/* =================================================
                    REPORT CARDS
                ================================================== */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    {reportCards.map((report) => {
                        const Icon = report.icon;

                        const isGold = report.accent === "gold";

                        return (
                            <div
                                key={report.title}
                                className={`
                                    rounded-2xl
                                    border
                                    border-[#F3EEDD]/10
                                    bg-[#1B241E]
                                    p-5
                                    shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    ${isGold
                                        ? "hover:border-[#F2B84B]/30"
                                        : "hover:border-[#7C9A82]/30"
                                    }
                                `}
                            >

                                <div className="flex items-start justify-between">

                                    <div>

                                        <p className="text-xs text-[#F3EEDD]/45">
                                            {report.title}
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
                                            {report.value}
                                        </h2>

                                        <div
                                            className={`
                                                mt-2
                                                flex
                                                items-center
                                                gap-1
                                                font-['JetBrains_Mono']
                                                text-[11px]
                                                font-semibold
                                                ${isGold
                                                    ? "text-[#F2B84B]"
                                                    : "text-[#7C9A82]"
                                                }
                                            `}
                                        >
                                            <TrendingUp size={14} />
                                            {report.change}
                                        </div>

                                    </div>

                                    <div
                                        className={`
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border
                                            ${isGold
                                                ? "border-[#F2B84B]/20 bg-[#F2B84B]/10 text-[#F2B84B]"
                                                : "border-[#7C9A82]/20 bg-[#7C9A82]/10 text-[#7C9A82]"
                                            }
                                        `}
                                    >
                                        <Icon size={22} />
                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

                {/* =================================================
                    ANALYTICS
                ================================================== */}

                <div
                    className="
                        mt-6
                        grid
                        grid-cols-1
                        gap-6
                        xl:grid-cols-2
                    "
                >

                    {/* =================================================
                        USER GROWTH
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

                        {/* HEADER */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                border-b
                                border-[#E7DED5]
                                bg-[#FBF9F5]
                                p-6
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
                                        Analytics
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
                                    User Growth
                                </h2>

                                <p className="mt-1 text-xs text-[#7C817B]">
                                    Monthly user registrations
                                </p>

                            </div>

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#F2B84B]/30
                                    bg-[#FFF5D9]
                                    text-[#A27E35]
                                "
                            >
                                <BarChart3 size={20} />
                            </div>

                        </div>

                        {/* CHART */}

                        <div className="bg-[#F8F5EF] p-6">

                            <div className="flex h-56 items-end gap-2 sm:gap-3">

                                {userGrowth.map((height, index) => (

                                    <div
                                        key={index}
                                        className="
                                            group
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
                                                w-full
                                                rounded-t-lg
                                                bg-[#F2B84B]
                                                transition-all
                                                duration-300
                                                group-hover:bg-[#DDA73E]
                                            "
                                        />

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
                                    text-[#8A8E89]
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

                    </section>

                    {/* =================================================
                        REVENUE OVERVIEW
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

                        {/* HEADER */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                border-b
                                border-[#E7DED5]
                                bg-[#FBF9F5]
                                p-6
                            "
                        >

                            <div>

                                <div className="flex items-center gap-2">

                                    <span
                                        className="
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-[#7C9A82]
                                        "
                                    />

                                    <p
                                        className="
                                            font-['JetBrains_Mono']
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.18em]
                                            text-[#63816A]
                                        "
                                    >
                                        Financial
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
                                    Revenue Overview
                                </h2>

                                <p className="mt-1 text-xs text-[#7C817B]">
                                    Monthly revenue performance
                                </p>

                            </div>

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#7C9A82]/30
                                    bg-[#EDF4EE]
                                    text-[#63816A]
                                "
                            >
                                <CreditCard size={20} />
                            </div>

                        </div>

                        {/* REVENUE DATA */}

                        <div className="space-y-6 bg-[#F8F5EF] p-6">

                            {revenueData.map(([name, value, width]) => (

                                <div key={name}>

                                    <div className="mb-2 flex justify-between">

                                        <span
                                            className="
                                                text-sm
                                                font-medium
                                                text-[#536058]
                                            "
                                        >
                                            {name}
                                        </span>

                                        <span
                                            className="
                                                font-['JetBrains_Mono']
                                                text-xs
                                                font-semibold
                                                text-[#303B32]
                                            "
                                        >
                                            {value}
                                        </span>

                                    </div>

                                    <div
                                        className="
                                            h-2
                                            overflow-hidden
                                            rounded-full
                                            bg-[#E7DED5]
                                        "
                                    >

                                        <div
                                            style={{ width }}
                                            className="
                                                h-2
                                                rounded-full
                                                bg-[#7C9A82]
                                                transition-all
                                                duration-500
                                            "
                                        />

                                    </div>

                                    <div
                                        className="
                                            mt-1
                                            text-right
                                            font-['JetBrains_Mono']
                                            text-[9px]
                                            text-[#8A8E89]
                                        "
                                    >
                                        {width}
                                    </div>

                                </div>

                            ))}

                        </div>

                    </section>

                </div>

                {/* =================================================
                    REPORT SUMMARY
                ================================================== */}

                <section
                    className="
                        mt-6
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[#F3EEDD]/10
                        bg-[#F8F5EF]
                        shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                    "
                >

                    <div
                        className="
                            border-b
                            border-[#E7DED5]
                            bg-[#FBF9F5]
                            p-6
                        "
                    >

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
                                Overview
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
                            Report Summary
                        </h2>

                    </div>

                    <div className="p-6">

                        <div className="flex items-start gap-4">

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
                                    bg-[#FFF5D9]
                                    text-[#A27E35]
                                "
                            >
                                <TrendingUp size={20} />
                            </div>

                            <p
                                className="
                                    max-w-4xl
                                    text-sm
                                    leading-7
                                    text-[#536058]
                                "
                            >
                                Shiyora currently manages 128 organizations
                                with more than 12,000 registered users and
                                1,200 courses. Platform revenue and user
                                activity continue to show positive monthly
                                growth.
                            </p>

                        </div>

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
                        Platform Reports
                    </p>

                </div>

            </div>

        </main>
    );
};

export default Reports;