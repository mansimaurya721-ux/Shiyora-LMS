import React, { useState } from "react";
import {
    LifeBuoy,
    Search,
    MessageCircle,
    Mail,
    BookOpen,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

// ============================================================
// FONT IMPORTS
// ============================================================

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";

const Support = () => {
    const [search, setSearch] = useState("");
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            question: "How can I create a new course?",
            answer:
                "Go to the Courses section from the sidebar and use the Create Course option to add a new course.",
        },
        {
            question: "How can I add students?",
            answer:
                "You can manage students from the Students section and add or manage student records for your organization.",
        },
        {
            question: "How can I manage teachers?",
            answer:
                "Open the Teachers section from the sidebar to view and manage teachers associated with your organization.",
        },
        {
            question: "Where can I view reports?",
            answer:
                "Use the Reports section from the sidebar to access organization-level reports and performance information.",
        },
        {
            question: "What should I do if I face a technical problem?",
            answer:
                "If you experience a technical issue, contact the Shiyora support team using the support options provided on this page.",
        },
    ];

    const filteredFaqs = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase())
    );

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#161F19] px-4 py-6 text-[#F3EEDD] sm:px-6 lg:px-8">
            <style>{FONT_IMPORTS}</style>

            {/* =====================================================
                BACKGROUND GLOW
            ===================================================== */}

            <div className="pointer-events-none fixed -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#F2B84B]/[0.05] blur-[130px]" />
            <div className="pointer-events-none fixed -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#7C9A82]/[0.07] blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <div className="mb-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 text-[#F2B84B]">
                            <LifeBuoy size={24} />
                        </div>

                        <div>
                            <p className="font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F2B84B]">
                                Administration
                            </p>
                            <h1 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-[#F3EEDD] sm:text-3xl">
                                Help &amp; Support
                            </h1>
                            <p className="mt-1 text-sm text-[#F3EEDD]/50">
                                Find answers and get help with your Shiyora LMS.
                            </p>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    SUPPORT CARDS
                ===================================================== */}

                <div className="mb-8 grid gap-5 md:grid-cols-3">

                    {/* Documentation */}

                    <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6 shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-[#F2B84B]/30">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 text-[#F2B84B]">
                            <BookOpen size={21} />
                        </div>

                        <h2 className="font-['Space_Grotesk'] text-lg font-semibold text-[#F3EEDD]">
                            Documentation
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-[#F3EEDD]/50">
                            Learn how to use the different features of your
                            organization dashboard.
                        </p>

                        <button
                            type="button"
                            className="mt-4 text-sm font-semibold text-[#F2B84B] transition hover:text-[#F7C968] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B84B]"
                        >
                            View Guides →
                        </button>
                    </div>

                    {/* Support Center */}

                    <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6 shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-[#7C9A82]/30">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#7C9A82]/25 bg-[#7C9A82]/10 text-[#7C9A82]">
                            <MessageCircle size={21} />
                        </div>

                        <h2 className="font-['Space_Grotesk'] text-lg font-semibold text-[#F3EEDD]">
                            Support Center
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-[#F3EEDD]/50">
                            Get assistance with account, course, student,
                            and teacher management.
                        </p>

                        <button
                            type="button"
                            className="mt-4 text-sm font-semibold text-[#7C9A82] transition hover:text-[#9BB89F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C9A82]"
                        >
                            Get Support →
                        </button>
                    </div>

                    {/* Contact Support */}

                    <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-6 shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-[#D6402C]/30">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#D6402C]/20 bg-[#D6402C]/10 text-[#D6402C]">
                            <Mail size={21} />
                        </div>

                        <h2 className="font-['Space_Grotesk'] text-lg font-semibold text-[#F3EEDD]">
                            Contact Support
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-[#F3EEDD]/50">
                            Need direct assistance? Contact the Shiyora
                            support team.
                        </p>

                        <button
                            type="button"
                            className="mt-4 text-sm font-semibold text-[#D6402C] transition hover:text-[#e06148] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6402C]"
                        >
                            Contact Us →
                        </button>
                    </div>
                </div>

                {/* =====================================================
                    FAQ SECTION — styled as a paper index card
                ===================================================== */}

                <div className="rounded-2xl border border-[#F3EEDD]/10 bg-[#F8F5EF] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:p-7">

                    <div className="mb-6 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#F2B84B]" />
                        <div>
                            <p className="font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8C7134]">
                                FAQ
                            </p>
                            <h2 className="mt-1 font-['Space_Grotesk'] text-xl font-semibold text-[#303B32]">
                                Frequently Asked Questions
                            </h2>
                            <p className="mt-1 text-sm text-[#7C817B]">
                                Find quick answers to common questions.
                            </p>
                        </div>
                    </div>

                    {/* Search */}

                    <div className="relative mb-6">
                        <Search
                            size={19}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8E89]"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search questions..."
                            className="w-full rounded-xl border border-[#E4DED4] bg-white py-3 pl-11 pr-4 text-sm text-[#303B32] outline-none transition placeholder:text-[#8A8E89] focus:border-[#F2B84B]/50 focus:ring-2 focus:ring-[#F2B84B]/15"
                        />
                    </div>

                    {/* FAQ LIST */}

                    <div className="space-y-3">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, index) => (
                                <div
                                    key={faq.question}
                                    className="overflow-hidden rounded-xl border border-[#E4DED4]"
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(index)}
                                        className="flex w-full items-center justify-between gap-4 bg-white px-4 py-4 text-left transition hover:bg-[#FFF9E9] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#F2B84B]"
                                    >
                                        <span className="text-sm font-semibold text-[#303B32]">
                                            {faq.question}
                                        </span>

                                        {openFaq === index ? (
                                            <ChevronUp size={18} className="shrink-0 text-[#F2B84B]" />
                                        ) : (
                                            <ChevronDown size={18} className="shrink-0 text-[#8A8E89]" />
                                        )}
                                    </button>

                                    {openFaq === index && (
                                        <div className="border-t border-[#E4DED4] bg-[#FBF9F5] px-4 py-4">
                                            <p className="text-sm leading-6 text-[#536058]">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="rounded-xl bg-[#F1ECE5] px-5 py-8 text-center">
                                <p className="text-sm text-[#7C817B]">No questions found.</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Support;