import React, { useMemo, useState } from "react";
import {
    Users as UsersIcon,
    UserCheck,
    UserX,
    Search,
    Plus,
    MoreVertical,
    Eye,
    Pencil,
    Trash2,
    TrendingUp,
} from "lucide-react";

const Users = () => {
    const [search, setSearch] = useState("");
    const [openMenu, setOpenMenu] = useState(null);

    // ============================================================
    // SAMPLE USER DATA
    // ============================================================

    const users = [
        {
            id: 1,
            name: "Rahul Sharma",
            email: "rahul@brightfuture.com",
            role: "Student",
            organization: "Bright Future Academy",
            status: "Active",
        },
        {
            id: 2,
            name: "Priya Singh",
            email: "priya@techvision.com",
            role: "Teacher",
            organization: "TechVision Institute",
            status: "Active",
        },
        {
            id: 3,
            name: "Aman Verma",
            email: "aman@skillhub.com",
            role: "Student",
            organization: "SkillHub Learning",
            status: "Inactive",
        },
        {
            id: 4,
            name: "Neha Gupta",
            email: "neha@knowledgepoint.com",
            role: "Admin",
            organization: "Knowledge Point",
            status: "Active",
        },
        {
            id: 5,
            name: "Arjun Yadav",
            email: "arjun@brightfuture.com",
            role: "Teacher",
            organization: "Bright Future Academy",
            status: "Active",
        },
        {
            id: 6,
            name: "Sneha Verma",
            email: "sneha@techvision.com",
            role: "Student",
            organization: "TechVision Institute",
            status: "Active",
        },
        {
            id: 7,
            name: "Vikas Mishra",
            email: "vikas@skillhub.com",
            role: "Teacher",
            organization: "SkillHub Learning",
            status: "Inactive",
        },
    ];

    // ============================================================
    // FILTER USERS
    // ============================================================

    const filteredUsers = useMemo(() => {
        const searchValue = search.toLowerCase();

        return users.filter((user) => {
            return (
                user.name.toLowerCase().includes(searchValue) ||
                user.email.toLowerCase().includes(searchValue) ||
                user.organization.toLowerCase().includes(searchValue) ||
                user.role.toLowerCase().includes(searchValue)
            );
        });
    }, [search]);

    // ============================================================
    // STATISTICS
    // ============================================================

    const totalUsers = users.length;

    const activeUsers = users.filter(
        (user) => user.status === "Active"
    ).length;

    const inactiveUsers = users.filter(
        (user) => user.status === "Inactive"
    ).length;

    const totalTeachers = users.filter(
        (user) => user.role === "Teacher"
    ).length;

    // ============================================================
    // CLOSE MENU
    // ============================================================

    const closeMenu = () => {
        setOpenMenu(null);
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
                BACKGROUND DECORATION
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
 
                    bg-[#F2B84B]/[0.035]
 
                    blur-[130px]
                "
            />

            <div
                className="
                    pointer-events-none
                    fixed
 
                    right-0
                    top-40
 
                    h-[450px]
                    w-[450px]
 
                    rounded-full
 
                    bg-[#7C9A82]/[0.05]
 
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
                                font-semibold
                                tracking-tight
 
                                text-[#F3EEDD]
 
                                md:text-4xl
                            "
                        >
                            Users
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
                            Manage all users registered across the
                            Shiyora LMS platform.
                        </p>

                    </div>

                    {/* ADD USER */}

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
                        "
                    >
                        <Plus size={18} />
                        Add User
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
                            hover:border-[#F2B84B]/25
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

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
 
                                        text-[#F3EEDD]/30
                                    "
                                >
                                    Registered users
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
                                <UsersIcon size={22} />
                            </div>

                        </div>

                    </div>

                    {/* ACTIVE USERS */}

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
                            hover:border-[#7C9A82]/25
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
                                    Active Users
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
                                    {activeUsers.toLocaleString()}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
 
                                        text-[#7C9A82]/80
                                    "
                                >
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
                                <UserCheck size={22} />
                            </div>

                        </div>

                    </div>

                    {/* INACTIVE USERS */}

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
                            hover:border-[#F3EEDD]/20
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
                                    Inactive Users
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
                                    {inactiveUsers.toLocaleString()}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
 
                                        text-[#F3EEDD]/30
                                    "
                                >
                                    Currently inactive
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
 
                                    bg-[#F3EEDD]/10
 
                                    text-[#F3EEDD]/70
                                "
                            >
                                <UserX size={22} />
                            </div>

                        </div>

                    </div>

                    {/* TEACHERS */}

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
                            hover:border-[#F2B84B]/25
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
                                    Teachers
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
                                    {totalTeachers.toLocaleString()}
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
 
                                        text-[#F3EEDD]/30
                                    "
                                >
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
                                    border-[#F2B84B]/20
 
                                    bg-[#F2B84B]/10
 
                                    text-[#F2B84B]
                                "
                            >
                                <UsersIcon size={22} />
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
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            placeholder="Search users..."
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
                    ALL USERS
                ================================================== */}

                <section
                    className="
                        overflow-hidden
 
                        rounded-2xl
 
                        border
                        border-[#F3EEDD]/30
 
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
                                    User Management
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
                                All Users
                            </h2>

                            <p
                                className="
                                    mt-1
 
                                    text-xs
 
                                    text-[#536058]
                                "
                            >
                                Users registered across the Shiyora
                                LMS platform.
                            </p>

                        </div>

                        {/* RESULTS */}

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
                                className="text-[#6D9D7E]"
                            />

                            <span
                                className="
                                    font-['JetBrains_Mono']
 
                                    text-[10px]
                                    font-semibold
 
                                    text-[#6D9D7E]
                                "
                            >
                                {filteredUsers.length} RESULTS
                            </span>

                        </div>

                    </div>

                    {/* =================================================
                        TABLE
                    ================================================== */}

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[1000px]">

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
 
                                            text-[#536058]
                                        "
                                    >
                                        User
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
 
                                            text-[#536058]
                                        "
                                    >
                                        Role
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
 
                                            text-[#536058]
                                        "
                                    >
                                        Organization
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
 
                                            text-[#536058]
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
 
                                            text-[#536058]
                                        "
                                    >
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody className="divide-y divide-[#E7DED5]">

                                {filteredUsers.map((user) => (

                                    <tr
                                        key={user.id}
                                        className="
                                            transition-colors
 
                                            hover:bg-[#FFFDF9]
                                        "
                                    >

                                        {/* USER */}

                                        <td className="px-6 py-5">

                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    gap-3
                                                "
                                            >

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
                                                        border-[#F2B84B]/20
 
                                                        bg-[#F2B84B]/10
 
                                                        font-['Space_Grotesk']
                                                        font-bold
 
                                                        text-[#8C7134]
                                                    "
                                                >
                                                    {user.name.charAt(0)}
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
                                                        {user.name}
                                                    </p>

                                                    <p
                                                        className="
                                                            mt-1
 
                                                            text-xs
 
                                                            text-[#536058]
                                                        "
                                                    >
                                                        {user.email}
                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        {/* ROLE */}

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
 
                                                    ${user.role === "Admin"
                                                        ? "border-[#D8D0C2] bg-[#F1ECE5] text-[#303B32]"
                                                        : user.role === "Teacher"
                                                            ? "border-[#7C9A82]/40 bg-[#EDF6EF] text-[#64856C]"
                                                            : "border-[#F2B84B]/40 bg-[#FFF9E9] text-[#8C7134]"
                                                    }
                                                `}
                                            >
                                                {user.role}
                                            </span>

                                        </td>

                                        {/* ORGANIZATION */}

                                        <td
                                            className="
                                                px-6
                                                py-5
 
                                                text-sm
 
                                                text-[#536058]
                                            "
                                        >
                                            {user.organization}
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
 
                                                    ${user.status === "Active"
                                                        ? "bg-[#EDF6EF] text-[#64856C]"
                                                        : "bg-[#F1ECE5] text-[#536058]"
                                                    }
                                                `}
                                            >

                                                <span
                                                    className={`
                                                        h-1.5
                                                        w-1.5
 
                                                        rounded-full
 
                                                        ${user.status === "Active"
                                                            ? "bg-[#7C9A82]"
                                                            : "bg-[#8A8E89]"
                                                        }
                                                    `}
                                                />

                                                {user.status}

                                            </span>

                                        </td>

                                        {/* ACTION */}

                                        <td className="relative px-6 py-5 text-right">

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenMenu(
                                                        openMenu === user.id
                                                            ? null
                                                            : user.id
                                                    )
                                                }
                                                className="
                                                    rounded-lg
 
                                                    p-2
 
                                                    text-[#536058]
 
                                                    transition
 
                                                    hover:bg-[#FFF9E9]
                                                    hover:text-[#536058]
                                                "
                                            >
                                                <MoreVertical size={18} />
                                            </button>

                                            {/* DROPDOWN */}

                                            {openMenu === user.id && (

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
 
                                                        shadow-[0_15px_35px_rgba(74,74,74,0.15)]
                                                    "
                                                >

                                                    {/* VIEW */}

                                                    <button
                                                        type="button"
                                                        onClick={closeMenu}
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
 
                                                            hover:bg-[#F8F5EF]
                                                        "
                                                    >
                                                        <Eye size={15} />
                                                        View
                                                    </button>

                                                    {/* EDIT */}

                                                    <button
                                                        type="button"
                                                        onClick={closeMenu}
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
 
                                                            hover:bg-[#F8F5EF]
                                                        "
                                                    >
                                                        <Pencil size={15} />
                                                        Edit
                                                    </button>

                                                    {/* DELETE */}

                                                    <button
                                                        type="button"
                                                        onClick={closeMenu}
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

                    {/* =================================================
                        EMPTY STATE
                    ================================================== */}

                    {filteredUsers.length === 0 && (

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
 
                                    bg-[#F2B84B]/10
 
                                    text-[#8C7134]
                                "
                            >
                                <UsersIcon size={26} />
                            </div>

                            <h3
                                className="
                                    mt-4
 
                                    font-['Space_Grotesk']
                                    font-semibold
 
                                    text-[#303B32]
                                "
                            >
                                No users found
                            </h3>

                            <p
                                className="
                                    mt-1
 
                                    text-sm
 
                                    text-[#536058]
                                "
                            >
                                Try changing your search.
                            </p>

                        </div>

                    )}

                </section>

                {/* =================================================
                    FOOTER NOTE
                ================================================== */}

                <div
                    className="
                        mt-5
 
                        flex
                        items-center
                        justify-between
                    "
                >

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
                        User Management
                    </p>

                </div>

            </div>

        </main>
    );
};

export default Users;