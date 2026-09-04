import React, { useMemo, useState } from "react";
import {
    Building2,
    Users,
    BookOpen,
    Search,
    Plus,
    MoreVertical,
    Eye,
    Pencil,
    Trash2,
    TrendingUp,
} from "lucide-react";

const Organizations = () => {
    const [search, setSearch] = useState("");
    const [openMenu, setOpenMenu] = useState(null);

    // ============================================================
    // SAMPLE ORGANIZATION DATA
    // ============================================================

    const organizations = [
        {
            id: 1,
            name: "Bright Future Academy",
            email: "admin@brightfuture.com",
            users: 850,
            courses: 42,
            plan: "Pro",
            status: "Active",
        },
        {
            id: 2,
            name: "TechVision Institute",
            email: "admin@techvision.com",
            users: 620,
            courses: 35,
            plan: "Enterprise",
            status: "Active",
        },
        {
            id: 3,
            name: "SkillHub Learning",
            email: "admin@skillhub.com",
            users: 430,
            courses: 28,
            plan: "Basic",
            status: "Pending",
        },
        {
            id: 4,
            name: "Knowledge Point",
            email: "admin@knowledgepoint.com",
            users: 310,
            courses: 21,
            plan: "Pro",
            status: "Active",
        },
    ];

    // ============================================================
    // SEARCH
    // ============================================================

    const filteredOrganizations = useMemo(() => {
        const searchValue = search.toLowerCase();

        return organizations.filter((organization) => {
            return (
                organization.name.toLowerCase().includes(searchValue) ||
                organization.email.toLowerCase().includes(searchValue) ||
                organization.plan.toLowerCase().includes(searchValue)
            );
        });
    }, [search]);

    // ============================================================
    // STATISTICS
    // ============================================================

    const totalOrganizations = organizations.length;

    const activeOrganizations = organizations.filter(
        (organization) => organization.status === "Active"
    ).length;

    const totalUsers = organizations.reduce(
        (total, organization) => total + organization.users,
        0
    );

    const totalCourses = organizations.reduce(
        (total, organization) => total + organization.courses,
        0
    );

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
                            Organizations
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
                            Manage all organizations registered on the
                            Shiyora LMS platform.
                        </p>

                    </div>


                    {/* ADD ORGANIZATION */}

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
                        <Plus size={18} />
                        Add Organization
                    </button>

                </div>


                {/* =================================================
                    STATISTICS
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

                    {/* TOTAL ORGANIZATIONS */}

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
                                    Total Organizations
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
                                    {totalOrganizations}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#F3EEDD]/30">
                                    Registered organizations
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
                                <Building2 size={22} />
                            </div>

                        </div>

                    </div>


                    {/* ACTIVE ORGANIZATIONS */}

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
                                    Active Organizations
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
                                    {activeOrganizations}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#7C9A82]">
                                    Currently active
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
                                <Building2 size={22} />
                            </div>

                        </div>

                    </div>


                    {/* TOTAL USERS */}

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
                            hover:border-[#F3EEDD]/25
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
                                    Total Users
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
                                    {totalUsers.toLocaleString()}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#F3EEDD]/30">
                                    Across organizations
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
                                    border-[#F3EEDD]/15
                                    bg-[#F3EEDD]/5
                                    text-[#F3EEDD]/70
                                "
                            >
                                <Users size={22} />
                            </div>

                        </div>

                    </div>


                    {/* TOTAL COURSES */}

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
                                    Total Courses
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
                                    {totalCourses.toLocaleString()}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#F3EEDD]/30">
                                    Published courses
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
                                <BookOpen size={22} />
                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    SEARCH
                ================================================== */}

                <div
                    className="
                        mb-6
                        rounded-2xl
                        border
                        border-[#F3EEDD]/10
                        bg-[#1B241E]
                        p-4
                        shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                    "
                >

                    <div className="relative w-full max-w-md">

                        <Search
                            size={19}
                            className="
                                absolute
                                left-3
                                top-1/2
                                -translate-y-1/2
                                text-[#F3EEDD]/30
                            "
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search organizations..."
                            className="
                                w-full
                                rounded-xl
                                border
                                border-[#F3EEDD]/10
                                bg-[#141C17]
                                py-3
                                pl-10
                                pr-4
                                text-sm
                                text-[#F3EEDD]
                                outline-none
                                placeholder:text-[#F3EEDD]/25
                                transition
                                focus:border-[#F2B84B]/40
                                focus:ring-2
                                focus:ring-[#F2B84B]/10
                            "
                        />

                    </div>

                </div>


                {/* =================================================
                    ORGANIZATION TABLE
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
                            gap-3
                            border-b
                            border-[#E7DED5]
                            bg-[#FBF9F5]
                            p-6
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
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
                                    Organizations
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
                                All Organizations
                            </h2>

                            <p className="mt-1 text-xs text-[#7C817B]">
                                Organizations using the Shiyora LMS platform.
                            </p>

                        </div>


                        <div
                            className="
                                flex
                                w-fit
                                items-center
                                gap-2
                                rounded-lg
                                bg-[#F0EBE3]
                                px-3
                                py-2
                            "
                        >

                            <TrendingUp
                                size={14}
                                className="text-[#7C9A82]"
                            />

                            <span
                                className="
                                    font-['JetBrains_Mono']
                                    text-[10px]
                                    font-semibold
                                    text-[#63816A]
                                "
                            >
                                {filteredOrganizations.length} RESULTS
                            </span>

                        </div>

                    </div>


                    {/* TABLE */}

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[900px]">

                            <thead className="bg-[#F1ECE5]">

                                <tr>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#817B74]">
                                        Organization
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#817B74]">
                                        Users
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#817B74]">
                                        Courses
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#817B74]">
                                        Plan
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#817B74]">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-right text-[10px] font-semibold uppercase tracking-wider text-[#817B74]">
                                        Action
                                    </th>

                                </tr>

                            </thead>


                            <tbody className="divide-y divide-[#E7DED5]">

                                {filteredOrganizations.map((organization) => (

                                    <tr
                                        key={organization.id}
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
                                                    {organization.name.charAt(0)}
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
                                                        {organization.name}
                                                    </p>

                                                    <p className="mt-1 text-xs text-[#8A8E89]">
                                                        {organization.email}
                                                    </p>

                                                </div>

                                            </div>

                                        </td>


                                        {/* USERS */}

                                        <td
                                            className="
                                                px-6
                                                py-5
                                                font-['JetBrains_Mono']
                                                text-xs
                                                text-[#536058]
                                            "
                                        >
                                            {organization.users}
                                        </td>


                                        {/* COURSES */}

                                        <td
                                            className="
                                                px-6
                                                py-5
                                                font-['JetBrains_Mono']
                                                text-xs
                                                text-[#536058]
                                            "
                                        >
                                            {organization.courses}
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

                                                    ${organization.plan ===
                                                        "Enterprise"
                                                        ? "border-[#7C9A82]/40 bg-[#EDF4EE] text-[#587560]"
                                                        : organization.plan ===
                                                            "Pro"
                                                            ? "border-[#F2B84B]/40 bg-[#FFF5D9] text-[#9A792C]"
                                                            : "border-[#D8D0C2] bg-[#F5F1E9] text-[#817667]"
                                                    }
                                                `}
                                            >
                                                {organization.plan}
                                            </span>

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

                                                    ${organization.status ===
                                                        "Active"
                                                        ? "bg-[#EDF6EF] text-[#64856C]"
                                                        : "bg-[#FFF5DD] text-[#A27E35]"
                                                    }
                                                `}
                                            >

                                                <span
                                                    className={`
                                                        h-1.5
                                                        w-1.5
                                                        rounded-full

                                                        ${organization.status ===
                                                            "Active"
                                                            ? "bg-[#7C9A82]"
                                                            : "bg-[#D0A052]"
                                                        }
                                                    `}
                                                />

                                                {organization.status}

                                            </span>

                                        </td>


                                        {/* ACTION */}

                                        <td className="relative px-6 py-5 text-right">

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenMenu(
                                                        openMenu ===
                                                            organization.id
                                                            ? null
                                                            : organization.id
                                                    )
                                                }
                                                className="
                                                    rounded-lg
                                                    p-2
                                                    text-[#8A8E89]
                                                    transition
                                                    hover:bg-[#F3EEDD]
                                                    hover:text-[#303B32]
                                                "
                                            >
                                                <MoreVertical size={18} />
                                            </button>


                                            {/* DROPDOWN */}

                                            {openMenu === organization.id && (

                                                <div
                                                    className="
                                                        absolute
                                                        right-6
                                                        top-14
                                                        z-30
                                                        w-36
                                                        overflow-hidden
                                                        rounded-xl
                                                        border
                                                        border-[#E4DED4]
                                                        bg-white
                                                        py-1
                                                        text-left
                                                        shadow-[0_15px_35px_rgba(22,31,25,0.15)]
                                                    "
                                                >

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMenu(null)
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
                                                            transition
                                                            hover:bg-[#FFF9E9]
                                                        "
                                                    >
                                                        <Eye size={15} />
                                                        View
                                                    </button>


                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMenu(null)
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
                                                            transition
                                                            hover:bg-[#FFF9E9]
                                                        "
                                                    >
                                                        <Pencil size={15} />
                                                        Edit
                                                    </button>


                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMenu(null)
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
                                                            transition
                                                            hover:bg-[#FFF3F3]
                                                        "
                                                    >
                                                        <Trash2 size={15} />
                                                        Delete
                                                    </button>

                                                </div>

                                            )}

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>


                    {/* EMPTY STATE */}

                    {filteredOrganizations.length === 0 && (

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
                                    bg-[#FFF5DD]
                                    text-[#A27E35]
                                "
                            >
                                <Building2 size={26} />
                            </div>

                            <h3
                                className="
                                    mt-4
                                    font-semibold
                                    text-[#303B32]
                                "
                            >
                                No organizations found
                            </h3>

                            <p className="mt-1 text-sm text-[#8A8E89]">
                                Try changing your search.
                            </p>

                        </div>

                    )}

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
                        Organization Management
                    </p>

                </div>

            </div>

        </main>
    );
};

export default Organizations;