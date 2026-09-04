import React, { useMemo, useState } from "react";
import {
    Search,
    MessageCircle,
    Clock,
    CheckCircle,
    AlertCircle,
    User,
    Building2,
    X,
    Send,
    Bot,
    ChevronDown,
} from "lucide-react";

const Support = () => {
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [reply, setReply] = useState("");

    // ============================================================
    // SAMPLE SUPPORT TICKETS
    // ============================================================

    const [tickets, setTickets] = useState([
        {
            id: "#1024",
            user: "Rahul Sharma",
            email: "rahul@example.com",
            role: "Admin",
            organization: "Bright Future Academy",
            subject: "Unable to create a new course",
            message:
                "I am trying to create a new course but the course creation form is not working.",
            priority: "High",
            status: "Open",
            createdAt: "Sep 1, 2026",
            agent: "Unassigned",
            replies: [],
        },

        {
            id: "#1023",
            user: "Priya Singh",
            email: "priya@example.com",
            role: "Teacher",
            organization: "Knowledge Hub",
            subject: "Video upload problem",
            message:
                "My lecture video is not uploading properly. It gets stuck during upload.",
            priority: "Medium",
            status: "Pending",
            createdAt: "Aug 31, 2026",
            agent: "Agent 01",
            replies: [
                {
                    sender: "Agent 01",
                    message:
                        "We are checking the video upload issue.",
                },
            ],
        },

        {
            id: "#1022",
            user: "Aman Verma",
            email: "aman@example.com",
            role: "Student",
            organization: "Bright Future Academy",
            subject: "Unable to access enrolled course",
            message:
                "I enrolled in a course but it is not appearing in my dashboard.",
            priority: "High",
            status: "Resolved",
            createdAt: "Aug 30, 2026",
            agent: "Agent 02",
            replies: [
                {
                    sender: "Agent 02",
                    message:
                        "Your enrollment has been refreshed. Please check again.",
                },
            ],
        },

        {
            id: "#1021",
            user: "Neha Gupta",
            email: "neha@example.com",
            role: "Teacher",
            organization: "Digital Learning School",
            subject: "Quiz result issue",
            message:
                "The quiz result is not showing correctly for some students.",
            priority: "Medium",
            status: "Open",
            createdAt: "Aug 29, 2026",
            agent: "Unassigned",
            replies: [],
        },

        {
            id: "#1020",
            user: "Arjun Patel",
            email: "arjun@example.com",
            role: "Student",
            organization: "Knowledge Hub",
            subject: "Certificate not showing",
            message:
                "I completed my course but I cannot see my certificate.",
            priority: "Low",
            status: "Resolved",
            createdAt: "Aug 28, 2026",
            agent: "Agent 01",
            replies: [],
        },
    ]);

    // ============================================================
    // FILTER TICKETS
    // ============================================================

    const filteredTickets = useMemo(() => {
        const searchValue = search.toLowerCase();

        return tickets.filter((ticket) => {
            const matchesSearch =
                ticket.user.toLowerCase().includes(searchValue) ||
                ticket.subject.toLowerCase().includes(searchValue) ||
                ticket.organization.toLowerCase().includes(searchValue) ||
                ticket.id.toLowerCase().includes(searchValue);

            const matchesRole =
                roleFilter === "All" ||
                ticket.role === roleFilter;

            const matchesStatus =
                statusFilter === "All" ||
                ticket.status === statusFilter;

            return (
                matchesSearch &&
                matchesRole &&
                matchesStatus
            );
        });
    }, [tickets, search, roleFilter, statusFilter]);

    // ============================================================
    // STATISTICS
    // ============================================================

    const totalTickets = tickets.length;

    const openTickets = tickets.filter(
        (ticket) => ticket.status === "Open"
    ).length;

    const pendingTickets = tickets.filter(
        (ticket) => ticket.status === "Pending"
    ).length;

    const resolvedTickets = tickets.filter(
        (ticket) => ticket.status === "Resolved"
    ).length;

    // ============================================================
    // CHANGE STATUS
    // ============================================================

    const changeStatus = (status) => {
        if (!selectedTicket) return;

        setTickets((prev) =>
            prev.map((ticket) =>
                ticket.id === selectedTicket.id
                    ? {
                        ...ticket,
                        status,
                    }
                    : ticket
            )
        );

        setSelectedTicket((prev) => ({
            ...prev,
            status,
        }));
    };

    // ============================================================
    // SEND REPLY
    // ============================================================

    const sendReply = () => {
        if (!reply.trim() || !selectedTicket) return;

        const newReply = {
            sender: "Super Admin",
            message: reply.trim(),
        };

        setTickets((prev) =>
            prev.map((ticket) =>
                ticket.id === selectedTicket.id
                    ? {
                        ...ticket,
                        replies: [
                            ...ticket.replies,
                            newReply,
                        ],
                        status: "Pending",
                    }
                    : ticket
            )
        );

        setSelectedTicket((prev) => ({
            ...prev,
            replies: [
                ...prev.replies,
                newReply,
            ],
            status: "Pending",
        }));

        setReply("");
    };

    // ============================================================
    // STATUS STYLE
    // ============================================================

    const getStatusStyle = (status) => {
        if (status === "Open") {
            return "border-[#D6402C]/30 bg-[#FFF3F3] text-[#B96868]";
        }

        if (status === "Pending") {
            return "border-[#F2B84B]/40 bg-[#FFF9E9] text-[#8C7134]";
        }

        return "border-[#7C9A82]/30 bg-[#EDF6EF] text-[#64856C]";
    };

    // ============================================================
    // PRIORITY STYLE
    // ============================================================

    const getPriorityStyle = (priority) => {
        if (priority === "High") {
            return "text-[#B96868]";
        }

        if (priority === "Medium") {
            return "text-[#8C7134]";
        }

        return "text-[#8A8E89]";
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
                text-[#303B32]
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
                    bg-[#F7E6B9]/[0.06]
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
                    bg-[#7C9A82]/[0.06]
                    blur-[140px]
                "
            />

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
                            Support Center
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
                            Manage queries and support requests from
                            users across the Shiyora LMS platform.
                        </p>

                    </div>

                    {/* AI AGENT */}

                    <div
                        className="
                            flex
                            w-fit
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            px-4
                            py-3
                            shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                        "
                    >

                        <Bot
                            size={18}
                            className="text-[#F2B84B]"
                        />

                        <span
                            className="
                                font-['Space_Grotesk']
                                text-sm
                                font-semibold
                                text-[#F3EEDD]
                            "
                        >
                            AI Agent
                        </span>

                        <span
                            className="
                                rounded-full
                                border
                                border-[#F3EEDD]/10
                                bg-[#F3EEDD]/5
                                px-2
                                py-1
                                font-['JetBrains_Mono']
                                text-[9px]
                                uppercase
                                tracking-wider
                                text-[#F3EEDD]/40
                            "
                        >
                            Coming Soon
                        </span>

                    </div>

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

                    {/* TOTAL */}

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
                                    Total Tickets
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
                                    {totalTickets}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#F3EEDD]/30">
                                    All support requests
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
                                <MessageCircle size={22} />
                            </div>

                        </div>

                    </div>

                    {/* OPEN */}

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
                                    Open Tickets
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
                                    {openTickets}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#B96868]/80">
                                    Needs attention
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
                                <AlertCircle size={22} />
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
                            hover:border-[#F2B84B]/25
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs text-[#F3EEDD]/45">
                                    Pending Tickets
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
                                    {pendingTickets}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#F2B84B]/80">
                                    Waiting for response
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

                    {/* RESOLVED */}

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
                                    Resolved Tickets
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
                                    {resolvedTickets}
                                </h2>

                                <p className="mt-1 text-[11px] text-[#7C9A82]/80">
                                    Successfully resolved
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

                </div>

                {/* =================================================
                    FILTER BAR
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

                    <div className="flex flex-col gap-3 lg:flex-row">

                        {/* SEARCH */}

                        <div className="relative flex-1">

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
                                placeholder="Search tickets, users, organizations..."
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

                        {/* ROLE */}

                        <div className="relative">

                            <select
                                value={roleFilter}
                                onChange={(e) =>
                                    setRoleFilter(e.target.value)
                                }
                                className="
                                    w-full
                                    appearance-none
                                    rounded-xl
                                    border
                                    border-[#F3EEDD]/10
                                    bg-[#141C17]
                                    px-4
                                    py-3
                                    pr-10
                                    text-sm
                                    text-[#F3EEDD]/70
                                    outline-none
                                    lg:w-40
                                    focus:border-[#F2B84B]/40
                                "
                            >
                                <option value="All">
                                    All Roles
                                </option>
                                <option value="Admin">
                                    Admin
                                </option>
                                <option value="Teacher">
                                    Teacher
                                </option>
                                <option value="Student">
                                    Student
                                </option>
                            </select>

                            <ChevronDown
                                size={16}
                                className="
                                    pointer-events-none
                                    absolute
                                    right-3
                                    top-1/2
                                    -translate-y-1/2
                                    text-[#F3EEDD]/30
                                "
                            />

                        </div>

                        {/* STATUS */}

                        <div className="relative">

                            <select
                                value={statusFilter}
                                onChange={(e) =>
                                    setStatusFilter(e.target.value)
                                }
                                className="
                                    w-full
                                    appearance-none
                                    rounded-xl
                                    border
                                    border-[#F3EEDD]/10
                                    bg-[#141C17]
                                    px-4
                                    py-3
                                    pr-10
                                    text-sm
                                    text-[#F3EEDD]/70
                                    outline-none
                                    lg:w-40
                                    focus:border-[#F2B84B]/40
                                "
                            >
                                <option value="All">
                                    All Status
                                </option>
                                <option value="Open">
                                    Open
                                </option>
                                <option value="Pending">
                                    Pending
                                </option>
                                <option value="Resolved">
                                    Resolved
                                </option>
                            </select>

                            <ChevronDown
                                size={16}
                                className="
                                    pointer-events-none
                                    absolute
                                    right-3
                                    top-1/2
                                    -translate-y-1/2
                                    text-[#F3EEDD]/30
                                "
                            />

                        </div>

                    </div>

                </div>

                {/* =================================================
                    SUPPORT TICKETS
                    SAME LIGHT SECTION STYLE AS ORGANIZATIONS
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
                                    Support
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
                                Support Tickets
                            </h2>

                            <p className="mt-1 text-xs text-[#536058]">
                                Manage support requests from Shiyora users.
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

                            <MessageCircle
                                size={14}
                                className="text-[#64856C]"
                            />

                            <span
                                className="
                                    font-['JetBrains_Mono']
                                    text-[10px]
                                    font-semibold
                                    text-[#64856C]
                                "
                            >
                                {filteredTickets.length} RESULTS
                            </span>

                        </div>

                    </div>

                    {/* TABLE */}

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[1100px]">

                            <thead className="bg-[#F1ECE5]">

                                <tr>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#536058]">
                                        Ticket
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#536058]">
                                        User
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#536058]">
                                        Organization
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#536058]">
                                        Subject
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#536058]">
                                        Priority
                                    </th>

                                    <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#536058]">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-right text-[10px] font-semibold uppercase tracking-wider text-[#536058]">
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody className="divide-y divide-[#E7DED5]">

                                {filteredTickets.map((ticket) => (

                                    <tr
                                        key={ticket.id}
                                        className="
                                            transition-colors
                                            hover:bg-[#FFFDF9]
                                        "
                                    >

                                        {/* TICKET */}

                                        <td className="px-6 py-5">

                                            <span
                                                className="
                                                    font-['JetBrains_Mono']
                                                    text-xs
                                                    font-semibold
                                                    text-[#8C7134]
                                                "
                                            >
                                                {ticket.id}
                                            </span>

                                            <p className="mt-1 text-[10px] text-[#8A8E89]">
                                                {ticket.createdAt}
                                            </p>

                                        </td>

                                        {/* USER */}

                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-3">

                                                <div
                                                    className="
                                                        flex
                                                        h-10
                                                        w-10
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-xl
                                                        border
                                                        border-[#F2B84B]/30
                                                        bg-[#F7E6B9]
                                                        font-['Space_Grotesk']
                                                        font-bold
                                                        text-[#536058]
                                                    "
                                                >
                                                    {ticket.user.charAt(0)}
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
                                                        {ticket.user}
                                                    </p>

                                                    <p className="mt-1 text-xs text-[#536058]">
                                                        {ticket.role}
                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        {/* ORGANIZATION */}

                                        <td className="px-6 py-5">

                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                    text-sm
                                                    text-[#536058]
                                                "
                                            >
                                                <Building2
                                                    size={15}
                                                    className="text-[#536058]"
                                                />

                                                {ticket.organization}

                                            </div>

                                        </td>

                                        {/* SUBJECT */}

                                        <td className="px-6 py-5">

                                            <p
                                                className="
                                                    max-w-[240px]
                                                    font-['Space_Grotesk']
                                                    text-sm
                                                    font-semibold
                                                    text-[#303B32]
                                                "
                                            >
                                                {ticket.subject}
                                            </p>

                                        </td>

                                        {/* PRIORITY */}

                                        <td className="px-6 py-5">

                                            <span
                                                className={`
                                                    font-['JetBrains_Mono']
                                                    text-[10px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-wider
                                                    ${getPriorityStyle(
                                                    ticket.priority
                                                )}
                                                `}
                                            >
                                                {ticket.priority}
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
                                                    border
                                                    px-3
                                                    py-1.5
                                                    text-xs
                                                    font-semibold
                                                    ${getStatusStyle(
                                                    ticket.status
                                                )}
                                                `}
                                            >

                                                <span
                                                    className={`
                                                        h-1.5
                                                        w-1.5
                                                        rounded-full
 
                                                        ${ticket.status ===
                                                            "Open"
                                                            ? "bg-[#B96868]"
                                                            : ticket.status ===
                                                                "Pending"
                                                                ? "bg-[#D0A052]"
                                                                : "bg-[#7C9A82]"
                                                        }
                                                    `}
                                                />

                                                {ticket.status}

                                            </span>

                                        </td>

                                        {/* ACTION */}

                                        <td className="px-6 py-5 text-right">

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setSelectedTicket(ticket)
                                                }
                                                className="
                                                    rounded-lg
                                                    border
                                                    border-[#F2B84B]/30
                                                    bg-[#FFF9E9]
                                                    px-4
                                                    py-2
                                                    font-['Space_Grotesk']
                                                    text-xs
                                                    font-semibold
                                                    text-[#8C7134]
                                                    transition
                                                    hover:bg-[#FFF5D9]
                                                "
                                            >
                                                View
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                    {/* EMPTY STATE */}

                    {filteredTickets.length === 0 && (

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
                                <MessageCircle size={26} />
                            </div>

                            <h3
                                className="
                                    mt-4
                                    font-['Space_Grotesk']
                                    font-semibold
                                    text-[#303B32]
                                "
                            >
                                No support tickets found
                            </h3>

                            <p className="mt-1 text-sm text-[#536058]">
                                Try changing your search or filters.
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
                        Support Management
                    </p>

                </div>

            </div>

            {/* =====================================================
                TICKET MODAL
            ====================================================== */}

            {selectedTicket && (

                <div
                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        items-center
                        justify-center
                        bg-black/60
                        p-4
                        backdrop-blur-sm
                    "
                >

                    <div
                        className="
                            w-full
                            max-w-3xl
                            max-h-[90vh]
                            overflow-hidden
                            rounded-2xl
                            border
                            border-[#E7DED5]
                            bg-[#F8F5EF]
                            shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                        "
                    >

                        {/* MODAL HEADER */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                border-b
                                border-[#E7DED5]
                                bg-[#FBF9F5]
                                px-6
                                py-5
                            "
                        >

                            <div>

                                <div className="flex flex-wrap items-center gap-3">

                                    <h2
                                        className="
                                            font-['Space_Grotesk']
                                            text-xl
                                            font-semibold
                                            text-[#303B32]
                                        "
                                    >
                                        {selectedTicket.subject}
                                    </h2>

                                    <span
                                        className={`
                                            rounded-full
                                            border
                                            px-3
                                            py-1
                                            text-xs
                                            font-semibold
                                            ${getStatusStyle(
                                            selectedTicket.status
                                        )}
                                        `}
                                    >
                                        {selectedTicket.status}
                                    </span>

                                </div>

                                <p
                                    className="
                                        mt-1
                                        font-['JetBrains_Mono']
                                        text-[10px]
                                        text-[#536058]
                                    "
                                >
                                    Ticket {selectedTicket.id}
                                </p>

                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedTicket(null);
                                    setReply("");
                                }}
                                className="
                                    rounded-lg
                                    p-2
                                    text-[#536058]
                                    transition
                                    hover:bg-[#F1ECE5]
                                    hover:text-[#303B32]
                                "
                            >
                                <X size={20} />
                            </button>

                        </div>

                        {/* MODAL BODY */}

                        <div
                            className="
                                max-h-[65vh]
                                overflow-y-auto
                                p-6
                            "
                        >

                            {/* USER INFORMATION */}

                            <div
                                className="
                                    mb-6
                                    grid
                                    grid-cols-1
                                    gap-4
                                    md:grid-cols-3
                                "
                            >

                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-[#E7DED5]
                                        bg-[#FBF9F5]
                                        p-4
                                    "
                                >
                                    <p className="text-[10px] uppercase tracking-wider text-[#536058]">
                                        User
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#303B32]">
                                        {selectedTicket.user}
                                    </p>
                                </div>

                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-[#E7DED5]
                                        bg-[#FBF9F5]
                                        p-4
                                    "
                                >
                                    <p className="text-[10px] uppercase tracking-wider text-[#536058]">
                                        Role
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#303B32]">
                                        {selectedTicket.role}
                                    </p>
                                </div>

                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-[#E7DED5]
                                        bg-[#FBF9F5]
                                        p-4
                                    "
                                >
                                    <p className="text-[10px] uppercase tracking-wider text-[#536058]">
                                        Organization
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#303B32]">
                                        {selectedTicket.organization}
                                    </p>
                                </div>

                            </div>

                            {/* USER QUERY */}

                            <div className="mb-6">

                                <p
                                    className="
                                        mb-2
                                        font-['Space_Grotesk']
                                        text-sm
                                        font-semibold
                                        text-[#303B32]
                                    "
                                >
                                    User Query
                                </p>

                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-[#E7DED5]
                                        bg-white
                                        p-4
                                    "
                                >
                                    <p className="text-sm leading-6 text-[#536058]">
                                        {selectedTicket.message}
                                    </p>
                                </div>

                            </div>

                            {/* CONVERSATION */}

                            <div>

                                <p
                                    className="
                                        mb-3
                                        font-['Space_Grotesk']
                                        text-sm
                                        font-semibold
                                        text-[#303B32]
                                    "
                                >
                                    Conversation
                                </p>

                                <div className="space-y-3">

                                    {selectedTicket.replies.length === 0 ? (

                                        <div
                                            className="
                                                rounded-xl
                                                border
                                                border-dashed
                                                border-[#E7DED5]
                                                bg-[#FBF9F5]
                                                p-5
                                                text-center
                                            "
                                        >
                                            <p className="text-sm text-[#536058]">
                                                No replies yet.
                                            </p>
                                        </div>

                                    ) : (

                                        selectedTicket.replies.map(
                                            (item, index) => (

                                                <div
                                                    key={index}
                                                    className="
                                                        rounded-xl
                                                        border
                                                        border-[#F2B84B]/25
                                                        bg-[#FFF9E9]
                                                        p-4
                                                    "
                                                >

                                                    <p
                                                        className="
                                                            mb-1
                                                            font-['JetBrains_Mono']
                                                            text-[10px]
                                                            font-semibold
                                                            uppercase
                                                            tracking-wider
                                                            text-[#8C7134]
                                                        "
                                                    >
                                                        {item.sender}
                                                    </p>

                                                    <p className="text-sm leading-6 text-[#536058]">
                                                        {item.message}
                                                    </p>

                                                </div>

                                            )
                                        )

                                    )}

                                </div>

                            </div>

                        </div>

                        {/* MODAL FOOTER */}

                        <div
                            className="
                                border-t
                                border-[#E7DED5]
                                bg-[#FBF9F5]
                                px-6
                                py-4
                            "
                        >

                            <div className="flex flex-col gap-3 sm:flex-row">

                                {/* REPLY */}

                                <div className="relative flex-1">

                                    <input
                                        type="text"
                                        value={reply}
                                        onChange={(e) =>
                                            setReply(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                sendReply();
                                            }
                                        }}
                                        placeholder="Type your reply..."
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-[#E7DED5]
                                            bg-white
                                            px-4
                                            py-3
                                            pr-12
                                            text-sm
                                            text-[#303B32]
                                            outline-none
                                            placeholder:text-[#536058]
                                            focus:border-[#F2B84B]
                                            focus:ring-2
                                            focus:ring-[#F2B84B]/10
                                        "
                                    />

                                    <button
                                        type="button"
                                        onClick={sendReply}
                                        className="
                                            absolute
                                            right-2
                                            top-1/2
                                            -translate-y-1/2
                                            rounded-lg
                                            bg-[#F2B84B]
                                            p-2
                                            text-[#161F19]
                                            transition
                                            hover:bg-[#F7C968]
                                        "
                                    >
                                        <Send size={16} />
                                    </button>

                                </div>

                                {/* STATUS */}

                                <div className="relative">

                                    <select
                                        value={selectedTicket.status}
                                        onChange={(e) =>
                                            changeStatus(e.target.value)
                                        }
                                        className="
                                            h-full
                                            w-full
                                            appearance-none
                                            rounded-xl
                                            border
                                            border-[#E7DED5]
                                            bg-white
                                            px-4
                                            py-3
                                            pr-10
                                            text-sm
                                            text-[#536058]
                                            outline-none
                                            sm:w-36
                                        "
                                    >

                                        <option value="Open">
                                            Open
                                        </option>

                                        <option value="Pending">
                                            Pending
                                        </option>

                                        <option value="Resolved">
                                            Resolved
                                        </option>

                                    </select>

                                    <ChevronDown
                                        size={16}
                                        className="
                                            pointer-events-none
                                            absolute
                                            right-3
                                            top-1/2
                                            -translate-y-1/2
                                            text-[#536058]
                                        "
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </main>
    );
};

export default Support;