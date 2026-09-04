import React, { useState } from "react";
import {
    HelpCircle,
    MessageSquare,
    Mail,
    BookOpen,
    ChevronDown,
    Search,
    Send,
    CheckCircle2,
    Clock3,
    Headphones,
} from "lucide-react";

const Support = () => {
    const [search, setSearch] = useState("");
    const [openFaq, setOpenFaq] = useState(null);
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const faqs = [
        {
            id: 1,
            question: "How can I enroll in a course?",
            answer:
                "Open Browse Courses from the sidebar, select the course you want to join, and click the Enroll Now button.",
        },
        {
            id: 2,
            question: "Where can I find my enrolled courses?",
            answer:
                "You can find all your enrolled courses in the My Courses section from the student sidebar.",
        },
        {
            id: 3,
            question: "How can I submit an assignment?",
            answer:
                "Open Assignments from the sidebar, select the required assignment, and use the submission option available on the assignment page.",
        },
        {
            id: 4,
            question: "Where can I see my learning progress?",
            answer:
                "Open the Progress section to view your overall progress, course completion, learning hours, goals, and weekly activity.",
        },
        {
            id: 5,
            question: "When will I receive my certificate?",
            answer:
                "Certificates become available after successfully completing the required course. You can view them from the Certificates section.",
        },
        {
            id: 6,
            question: "How can I update my profile?",
            answer:
                "Open Profile from the sidebar. You can manage your available account information from there.",
        },
    ];

    const filteredFaqs = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase())
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!subject.trim() || !message.trim()) {
            return;
        }

        setSubmitted(true);
        setSubject("");
        setMessage("");

        setTimeout(() => {
            setSubmitted(false);
        }, 4000);
    };

    return (
        <div className="space-y-8">

            {/* =====================================================
                HEADER
            ====================================================== */}
            <section>
                <p className="mb-2 text-sm font-medium text-[#7C9A82]">
                    Student Assistance
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-[#F3EEDD] sm:text-4xl">
                    Help & Support
                </h1>

                <p className="mt-2 max-w-2xl text-sm text-[#7C9A82] sm:text-base">
                    Find answers to common questions or contact our support
                    team if you need additional help.
                </p>
            </section>

            {/* =====================================================
                SUPPORT OPTIONS
            ====================================================== */}
            <section className="grid grid-cols-1 gap-4 md:grid-cols-3">

                <SupportOption
                    icon={MessageSquare}
                    title="Live Support"
                    description="Get help with your learning experience."
                    action="Contact Support"
                />

                <SupportOption
                    icon={Mail}
                    title="Email Support"
                    description="Send us your questions and concerns."
                    action="Send Email"
                />

                <SupportOption
                    icon={BookOpen}
                    title="Knowledge Base"
                    description="Browse guides and helpful resources."
                    action="View Guides"
                />

            </section>

            {/* =====================================================
                FAQ + CONTACT FORM
            ====================================================== */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

                {/* =================================================
                    FAQ
                ================================================== */}
                <section
                    className="
                        rounded-2xl
                        border
                        border-[#7C9A82]/20
                        bg-[#1B241E]
                        xl:col-span-2
                    "
                >
                    <div className="border-b border-[#7C9A82]/20 p-5">

                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-[#F2B84B]/10 p-2.5">
                                <HelpCircle
                                    size={20}
                                    className="text-[#F2B84B]"
                                />
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold text-[#F3EEDD]">
                                    Frequently Asked Questions
                                </h2>

                                <p className="mt-1 text-sm text-[#7C9A82]">
                                    Find quick answers to common questions.
                                </p>
                            </div>
                        </div>

                        {/* FAQ Search */}
                        <div className="relative mt-5">
                            <Search
                                size={18}
                                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-[#7C9A82]
                                "
                            />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder="Search your question..."
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-[#7C9A82]/20
                                    bg-[#161F19]
                                    py-3
                                    pl-11
                                    pr-4
                                    text-sm
                                    text-[#F3EEDD]
                                    outline-none
                                    placeholder:text-[#7C9A82]/70
                                    focus:border-[#F2B84B]/50
                                    focus:ring-2
                                    focus:ring-[#F2B84B]/10
                                "
                            />
                        </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="divide-y divide-[#7C9A82]/15">

                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq) => {
                                const isOpen = openFaq === faq.id;

                                return (
                                    <div key={faq.id}>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenFaq(
                                                    isOpen
                                                        ? null
                                                        : faq.id
                                                )
                                            }
                                            className="
                                                flex
                                                w-full
                                                items-center
                                                justify-between
                                                gap-4
                                                px-5
                                                py-4
                                                text-left
                                                transition
                                                hover:bg-[#161F19]/40
                                            "
                                        >
                                            <span className="text-sm font-medium text-[#F3EEDD]">
                                                {faq.question}
                                            </span>

                                            <ChevronDown
                                                size={18}
                                                className={`
                                                    shrink-0
                                                    text-[#7C9A82]
                                                    transition-transform
                                                    ${isOpen
                                                        ? "rotate-180"
                                                        : ""
                                                    }
                                                `}
                                            />
                                        </button>

                                        {isOpen && (
                                            <div className="px-5 pb-5">
                                                <p className="rounded-xl bg-[#161F19] p-4 text-sm leading-6 text-[#7C9A82]">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        ) : (
                            <div className="px-5 py-12 text-center">
                                <HelpCircle
                                    size={30}
                                    className="mx-auto text-[#7C9A82]"
                                />

                                <p className="mt-3 text-sm font-medium text-[#F3EEDD]">
                                    No questions found
                                </p>

                                <p className="mt-1 text-xs text-[#7C9A82]">
                                    Try searching with a different keyword.
                                </p>
                            </div>
                        )}

                    </div>
                </section>

                {/* =================================================
                    CONTACT FORM
                ================================================== */}
                <section
                    className="
                        rounded-2xl
                        border
                        border-[#7C9A82]/20
                        bg-[#1B241E]
                        p-5
                    "
                >
                    <div className="flex items-center gap-3">

                        <div className="rounded-xl bg-[#F2B84B]/10 p-2.5">
                            <Send
                                size={20}
                                className="text-[#F2B84B]"
                            />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[#F3EEDD]">
                                Contact Support
                            </h2>

                            <p className="mt-1 text-sm text-[#7C9A82]">
                                Send us a message.
                            </p>
                        </div>

                    </div>

                    {submitted ? (
                        <div className="mt-6 rounded-xl border border-[#7C9A82]/30 bg-[#7C9A82]/10 p-5 text-center">

                            <CheckCircle2
                                size={32}
                                className="mx-auto text-[#7C9A82]"
                            />

                            <h3 className="mt-3 text-sm font-semibold text-[#F3EEDD]">
                                Message Sent Successfully
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-[#7C9A82]">
                                Our support team will review your message and
                                get back to you.
                            </p>

                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 space-y-4"
                        >

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-xs font-medium text-[#F3EEDD]"
                                >
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    type="text"
                                    value={subject}
                                    onChange={(e) =>
                                        setSubject(e.target.value)
                                    }
                                    placeholder="Enter subject"
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-[#7C9A82]/20
                                        bg-[#161F19]
                                        px-4
                                        py-3
                                        text-sm
                                        text-[#F3EEDD]
                                        outline-none
                                        placeholder:text-[#7C9A82]/70
                                        focus:border-[#F2B84B]/50
                                        focus:ring-2
                                        focus:ring-[#F2B84B]/10
                                    "
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-xs font-medium text-[#F3EEDD]"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    rows="6"
                                    value={message}
                                    onChange={(e) =>
                                        setMessage(e.target.value)
                                    }
                                    placeholder="Describe your issue..."
                                    className="
                                        w-full
                                        resize-none
                                        rounded-xl
                                        border
                                        border-[#7C9A82]/20
                                        bg-[#161F19]
                                        px-4
                                        py-3
                                        text-sm
                                        text-[#F3EEDD]
                                        outline-none
                                        placeholder:text-[#7C9A82]/70
                                        focus:border-[#F2B84B]/50
                                        focus:ring-2
                                        focus:ring-[#F2B84B]/10
                                    "
                                />
                            </div>

                            <button
                                type="submit"
                                className="
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    bg-[#F2B84B]
                                    px-4
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-[#161F19]
                                    transition
                                    hover:bg-[#F2B84B]/90
                                "
                            >
                                <Send size={16} />
                                Send Message
                            </button>

                        </form>
                    )}

                </section>
            </div>

            {/* =====================================================
                SUPPORT STATUS
            ====================================================== */}
            <section
                className="
                    rounded-2xl
                    border
                    border-[#7C9A82]/20
                    bg-[#1B241E]
                    p-5
                "
            >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7C9A82]/10">
                            <Headphones
                                size={21}
                                className="text-[#7C9A82]"
                            />
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-[#F3EEDD]">
                                Support Team
                            </h2>

                            <p className="mt-1 text-xs text-[#7C9A82]">
                                We're here to help you with your learning
                                experience.
                            </p>
                        </div>

                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-[#7C9A82]/25 bg-[#7C9A82]/10 px-3 py-2">

                        <span className="h-2 w-2 rounded-full bg-[#7C9A82]" />

                        <span className="text-xs font-medium text-[#7C9A82]">
                            Support Available
                        </span>

                    </div>

                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                    <div className="flex items-center gap-3 rounded-xl bg-[#161F19] p-4">
                        <Clock3
                            size={17}
                            className="text-[#F2B84B]"
                        />

                        <div>
                            <p className="text-xs text-[#7C9A82]">
                                Response Time
                            </p>

                            <p className="mt-1 text-sm font-medium text-[#F3EEDD]">
                                Within 24 hours
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-[#161F19] p-4">
                        <Mail
                            size={17}
                            className="text-[#F2B84B]"
                        />

                        <div>
                            <p className="text-xs text-[#7C9A82]">
                                Email
                            </p>

                            <p className="mt-1 text-sm font-medium text-[#F3EEDD]">
                                support@shiyora.com
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

/* =========================================================
   SUPPORT OPTION
========================================================= */

const SupportOption = ({
    icon: Icon,
    title,
    description,
    action,
}) => {
    return (
        <div
            className="
                rounded-2xl
                border
                border-[#7C9A82]/20
                bg-[#1B241E]
                p-5
                transition
                hover:-translate-y-1
                hover:border-[#F2B84B]/30
            "
        >
            <div className="flex items-start gap-4">

                <div className="rounded-xl bg-[#F2B84B]/10 p-3">
                    <Icon
                        size={21}
                        className="text-[#F2B84B]"
                    />
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-[#F3EEDD]">
                        {title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[#7C9A82]">
                        {description}
                    </p>

                    <button
                        type="button"
                        className="
                            mt-3
                            text-xs
                            font-semibold
                            text-[#F2B84B]
                            transition
                            hover:text-[#F3EEDD]
                        "
                    >
                        {action}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Support;