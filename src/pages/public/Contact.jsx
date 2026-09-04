import React, { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageCircle,
    Clock,
    CheckCircle,
    ArrowRight,
    Sparkles,
} from "lucide-react";

import shiyoraLogo from "../../assets/shiyora.logo.png";

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        // Frontend demo only
        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    const contactDetails = [
        {
            icon: Mail,
            title: "Email",
            value: "support@shiyora.com",
            color: "text-[#F2B84B]",
            bg: "bg-[#F2B84B]/10",
            border: "border-[#F2B84B]/20",
            hover: "group-hover:border-[#F2B84B]/40",
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+91 XXXXX XXXXX",
            color: "text-[#7C9A82]",
            bg: "bg-[#7C9A82]/10",
            border: "border-[#7C9A82]/20",
            hover: "group-hover:border-[#7C9A82]/40",
        },
        {
            icon: MapPin,
            title: "Location",
            value: "India",
            color: "text-[#D6402C]",
            bg: "bg-[#D6402C]/10",
            border: "border-[#D6402C]/20",
            hover: "group-hover:border-[#D6402C]/40",
        },
        {
            icon: Clock,
            title: "Support Hours",
            value: "Monday – Friday • 9:00 AM – 6:00 PM",
            color: "text-[#F2B84B]",
            bg: "bg-[#F2B84B]/10",
            border: "border-[#F2B84B]/20",
            hover: "group-hover:border-[#F2B84B]/40",
        },
    ];

    return (
        <main className="min-h-screen overflow-hidden bg-[#161F19] font-['Inter'] text-[#F3EEDD]">
            <style>{FONT_IMPORTS}</style>

            {/* =========================================================
                BACKGROUND
            ========================================================== */}

            <div className="pointer-events-none fixed inset-0 overflow-hidden">

                {/* Warm desk-lamp glow */}
                <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#F2B84B]/[0.10] blur-[140px]" />

                {/* Sage glow */}
                <div className="absolute -right-40 top-[20%] h-[500px] w-[500px] rounded-full bg-[#7C9A82]/[0.08] blur-[150px]" />

                {/* Bottom red glow */}
                <div className="absolute bottom-[-250px] left-[35%] h-[500px] w-[500px] rounded-full bg-[#D6402C]/[0.05] blur-[140px]" />

                {/* Chalk dust texture */}
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(243,238,221,0.6) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />
            </div>

            {/* =========================================================
                TOP BRAND
            ========================================================== */}

            <div className="relative z-10 border-b border-[#F3EEDD]/10 bg-[#161F19]/80 backdrop-blur-xl">

                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                    {/* Logo */}

                    <a
                        href="/home"
                        className="group flex items-center gap-3"
                    >
                        <div
                            className="
                                flex h-10 w-10 items-center justify-center
                                rounded-xl
                                border border-[#F3EEDD]/10
                                bg-[#1B241E]
                                shadow-lg shadow-black/20
                                transition-all duration-300
                                group-hover:border-[#F2B84B]/40
                            "
                        >
                            <img
                                src={shiyoraLogo}
                                alt="Shiyora"
                                className="h-8 w-8 object-contain"
                            />
                        </div>

                        <div>
                            <p className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight text-[#F3EEDD]">
                                Shiyora
                            </p>

                            <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-[2px] text-[#F3EEDD]/40">
                                Smart Learning
                            </p>
                        </div>
                    </a>

                    {/* Page indicator */}

                    <div
                        className="
                            hidden items-center gap-2
                            rounded-full
                            border border-[#F2B84B]/20
                            bg-[#F2B84B]/[0.06]
                            px-4 py-2
                            font-['JetBrains_Mono']
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-widest
                            text-[#F2B84B]
                            sm:flex
                        "
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F2B84B]" />

                        Contact & Support
                    </div>
                </div>
            </div>

            {/* =========================================================
                HERO
            ========================================================== */}

            <section className="relative z-10 px-6 pb-14 pt-20 md:pb-20 md:pt-24">

                <div className="mx-auto max-w-5xl text-center">

                    {/* Badge */}

                    <div
                        className="
                            mx-auto mb-6 flex w-fit items-center gap-2
                            rounded-full
                            border border-[#F2B84B]/30
                            bg-[#F2B84B]/10
                            px-4 py-2
                            font-['JetBrains_Mono']
                            text-[11px]
                            font-medium
                            uppercase
                            tracking-widest
                            text-[#F2B84B]
                        "
                    >
                        <MessageCircle size={14} />

                        Contact Shiyora
                    </div>

                    {/* Heading */}

                    <h1
                        className="
                            mx-auto max-w-4xl
                            font-['Space_Grotesk']
                            text-4xl font-semibold
                            leading-[1.05]
                            tracking-tight
                            text-[#F3EEDD]
                            sm:text-5xl
                            md:text-6xl
                            lg:text-[64px]
                        "
                    >
                        Let's build a better
                        <br />

                        <span className="relative inline-block text-[#F2B84B]">
                            learning experience.

                            {/* Red pen underline */}
                            <svg
                                viewBox="0 0 360 18"
                                className="
                                    absolute
                                    -bottom-2
                                    left-0
                                    h-3
                                    w-full
                                    text-[#D6402C]
                                "
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M2 12c70-10 220-10 356 2"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h1>

                    {/* Description */}

                    <p
                        className="
                            mx-auto mt-7 max-w-2xl
                            text-sm leading-7
                            text-[#F3EEDD]/55
                            sm:text-base
                        "
                    >
                        Have a question, suggestion, or need assistance with
                        Shiyora? Send us a message and our team will be happy
                        to help.
                    </p>
                </div>
            </section>

            {/* =========================================================
                CONTACT AREA
            ========================================================== */}

            <section className="relative z-10 px-6 pb-24">

                <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-5">

                    {/* =====================================================
                        CONTACT INFORMATION
                    ====================================================== */}

                    <div
                        className="
                            relative overflow-hidden
                            rounded-2xl
                            border border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-7
                            shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                            lg:col-span-2
                            md:p-9
                        "
                    >

                        {/* Decorative lamp glow */}

                        <div
                            className="
                                pointer-events-none absolute
                                -right-24 -top-24
                                h-64 w-64
                                rounded-full
                                bg-[#F2B84B]/10
                                blur-[90px]
                            "
                        />

                        <div
                            className="
                                pointer-events-none absolute
                                -bottom-24 -left-24
                                h-64 w-64
                                rounded-full
                                bg-[#7C9A82]/10
                                blur-[90px]
                            "
                        />

                        <div className="relative">

                            {/* Label */}

                            <p
                                className="
                                    font-['JetBrains_Mono']
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#F2B84B]
                                "
                            >
                                Get in touch
                            </p>

                            <h2
                                className="
                                    mt-3
                                    font-['Space_Grotesk']
                                    text-3xl
                                    font-semibold
                                    tracking-tight
                                    text-[#F3EEDD]
                                "
                            >
                                We're here to help.
                            </h2>

                            <p
                                className="
                                    mt-4
                                    text-sm
                                    leading-7
                                    text-[#F3EEDD]/55
                                "
                            >
                                Whether you're an organization, teacher,
                                student, or simply interested in Shiyora,
                                feel free to reach out.
                            </p>

                            {/* Contact details */}

                            <div className="mt-9 space-y-6">

                                {contactDetails.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="group flex items-start gap-4"
                                        >
                                            <div
                                                className={`
                                                    flex h-11 w-11 shrink-0
                                                    items-center justify-center
                                                    rounded-lg
                                                    border
                                                    ${item.border}
                                                    ${item.bg}
                                                    ${item.color}
                                                    transition-all duration-300
                                                    ${item.hover}
                                                `}
                                            >
                                                <Icon size={19} />
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-[#F3EEDD]">
                                                    {item.title}
                                                </p>

                                                <p className="mt-1 text-sm leading-6 text-[#F3EEDD]/45">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Note */}

                            <div className="mt-9 border-t border-[#F3EEDD]/10 pt-6">

                                <div className="flex items-start gap-2">

                                    <Sparkles
                                        size={15}
                                        className="mt-0.5 shrink-0 text-[#F2B84B]"
                                    />

                                    <p className="text-xs leading-5 text-[#F3EEDD]/40">
                                        We aim to respond to general inquiries
                                        as soon as possible.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =====================================================
                        CONTACT FORM
                    ====================================================== */}

                    <div
                        className="
                            rounded-2xl
                            border border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-7
                            shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                            lg:col-span-3
                            md:p-9
                        "
                    >

                        {/* Form header */}

                        <div>

                            <div
                                className="
                                    flex h-12 w-12
                                    items-center justify-center
                                    rounded-xl
                                    border border-[#F2B84B]/20
                                    bg-[#F2B84B]/10
                                    text-[#F2B84B]
                                "
                            >
                                <Send size={20} />
                            </div>

                            <h2
                                className="
                                    mt-5
                                    font-['Space_Grotesk']
                                    text-2xl
                                    font-semibold
                                    tracking-tight
                                    text-[#F3EEDD]
                                "
                            >
                                Send us a message
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-[#F3EEDD]/45">
                                Fill in the details below and we'll get back
                                to you as soon as possible.
                            </p>
                        </div>

                        {/* FORM */}

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-6"
                        >

                            {/* Name + Email */}

                            <div className="grid gap-5 md:grid-cols-2">

                                {/* Name */}

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="
                                            mb-2 block
                                            text-sm font-semibold
                                            text-[#F3EEDD]/80
                                        "
                                    >
                                        Full Name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        placeholder="Enter your name"
                                        className="
                                            w-full
                                            rounded-lg
                                            border border-[#F3EEDD]/10
                                            bg-[#161F19]
                                            px-4 py-3.5
                                            text-sm text-[#F3EEDD]
                                            outline-none
                                            transition-all duration-300
                                            placeholder:text-[#F3EEDD]/25
                                            focus:border-[#F2B84B]/50
                                            focus:bg-[#141C17]
                                            focus:ring-4
                                            focus:ring-[#F2B84B]/5
                                        "
                                    />
                                </div>

                                {/* Email */}

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="
                                            mb-2 block
                                            text-sm font-semibold
                                            text-[#F3EEDD]/80
                                        "
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        className="
                                            w-full
                                            rounded-lg
                                            border border-[#F3EEDD]/10
                                            bg-[#161F19]
                                            px-4 py-3.5
                                            text-sm text-[#F3EEDD]
                                            outline-none
                                            transition-all duration-300
                                            placeholder:text-[#F3EEDD]/25
                                            focus:border-[#F2B84B]/50
                                            focus:bg-[#141C17]
                                            focus:ring-4
                                            focus:ring-[#F2B84B]/5
                                        "
                                    />
                                </div>
                            </div>

                            {/* Subject */}

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="
                                        mb-2 block
                                        text-sm font-semibold
                                        text-[#F3EEDD]/80
                                    "
                                >
                                    Subject
                                </label>

                                <select
                                    id="subject"
                                    required
                                    defaultValue=""
                                    className="
                                        w-full
                                        rounded-lg
                                        border border-[#F3EEDD]/10
                                        bg-[#161F19]
                                        px-4 py-3.5
                                        text-sm text-[#F3EEDD]/70
                                        outline-none
                                        transition-all duration-300
                                        focus:border-[#F2B84B]/50
                                        focus:bg-[#141C17]
                                        focus:ring-4
                                        focus:ring-[#F2B84B]/5
                                    "
                                >
                                    <option
                                        value=""
                                        disabled
                                        className="bg-[#161F19]"
                                    >
                                        Select a subject
                                    </option>

                                    <option
                                        value="general"
                                        className="bg-[#161F19]"
                                    >
                                        General Inquiry
                                    </option>

                                    <option
                                        value="support"
                                        className="bg-[#161F19]"
                                    >
                                        Technical Support
                                    </option>

                                    <option
                                        value="organization"
                                        className="bg-[#161F19]"
                                    >
                                        Organization Support
                                    </option>

                                    <option
                                        value="course"
                                        className="bg-[#161F19]"
                                    >
                                        Course Related
                                    </option>

                                    <option
                                        value="feedback"
                                        className="bg-[#161F19]"
                                    >
                                        Feedback & Suggestions
                                    </option>
                                </select>
                            </div>

                            {/* Message */}

                            <div>
                                <label
                                    htmlFor="message"
                                    className="
                                        mb-2 block
                                        text-sm font-semibold
                                        text-[#F3EEDD]/80
                                    "
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    required
                                    rows="6"
                                    placeholder="Tell us how we can help..."
                                    className="
                                        w-full resize-none
                                        rounded-lg
                                        border border-[#F3EEDD]/10
                                        bg-[#161F19]
                                        px-4 py-3.5
                                        text-sm text-[#F3EEDD]
                                        outline-none
                                        transition-all duration-300
                                        placeholder:text-[#F3EEDD]/25
                                        focus:border-[#F2B84B]/50
                                        focus:bg-[#141C17]
                                        focus:ring-4
                                        focus:ring-[#F2B84B]/5
                                    "
                                />
                            </div>

                            {/* Submit */}

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                                <button
                                    type="submit"
                                    disabled={submitted}
                                    className="
                                        group
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-lg
                                        bg-[#F2B84B]
                                        px-7 py-3.5
                                        text-sm
                                        font-semibold
                                        text-[#161F19]
                                        shadow-[0_0_30px_rgba(242,184,75,0.15)]
                                        transition-all duration-300
                                        hover:bg-[#f7c968]
                                        hover:shadow-[0_0_35px_rgba(242,184,75,0.22)]
                                        motion-safe:hover:-translate-y-1
                                        active:scale-[0.98]
                                        disabled:cursor-not-allowed
                                        disabled:opacity-70
                                    "
                                >
                                    {submitted ? (
                                        <>
                                            <CheckCircle size={18} />
                                            Message Sent
                                        </>
                                    ) : (
                                        <>
                                            <Send
                                                size={18}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                <p className="text-xs leading-5 text-[#F3EEDD]/30">
                                    Your information is only used to respond
                                    to your inquiry.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* =========================================================
                BOTTOM CTA
            ========================================================== */}

            <section
                className="
                    relative z-10
                    border-t border-[#F3EEDD]/10
                    bg-[#141C17]
                    px-6 py-24
                "
            >

                <div className="mx-auto max-w-5xl">

                    <div
                        className="
                            relative overflow-hidden
                            rounded-2xl
                            border border-[#F2B84B]/20
                            bg-[#1B241E]
                            px-8 py-16
                            text-center
                            md:px-16
                        "
                    >

                        {/* Lamp glow */}

                        <div
                            className="
                                pointer-events-none
                                absolute left-1/2 top-0
                                h-40 w-72
                                -translate-x-1/2
                                bg-[#F2B84B]/10
                                blur-[90px]
                            "
                        />

                        <div className="relative z-10">

                            {/* Icon */}

                            <div
                                className="
                                    mx-auto flex h-14 w-14
                                    items-center justify-center
                                    rounded-2xl
                                    border border-[#F2B84B]/20
                                    bg-[#F2B84B]/10
                                    text-[#F2B84B]
                                "
                            >
                                <MessageCircle size={24} />
                            </div>

                            {/* Label */}

                            <p
                                className="
                                    mt-5
                                    font-['JetBrains_Mono']
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#F2B84B]
                                "
                            >
                                Explore Shiyora
                            </p>

                            {/* Heading */}

                            <h2
                                className="
                                    mt-3
                                    font-['Space_Grotesk']
                                    text-3xl
                                    font-semibold
                                    tracking-tight
                                    text-[#F3EEDD]
                                    md:text-4xl
                                "
                            >
                                Everything you need for{" "}
                                <span className="text-[#F2B84B]">
                                    better learning.
                                </span>
                            </h2>

                            <p
                                className="
                                    mx-auto mt-4 max-w-2xl
                                    text-sm leading-7
                                    text-[#F3EEDD]/45
                                "
                            >
                                Discover Shiyora's learning, course management,
                                organization, and educational features.
                            </p>

                            {/* Buttons */}

                            <div className="mt-8 flex flex-wrap justify-center gap-3">

                                <a
                                    href="/about"
                                    className="
                                        group
                                        inline-flex
                                        items-center gap-2
                                        rounded-lg
                                        border border-[#F3EEDD]/10
                                        bg-[#161F19]
                                        px-6 py-3
                                        text-sm font-semibold
                                        text-[#F3EEDD]/70
                                        transition-all duration-300
                                        hover:border-[#F2B84B]/30
                                        hover:text-[#F2B84B]
                                    "
                                >
                                    Learn More

                                    <ArrowRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </a>

                                <a
                                    href="/subscription"
                                    className="
                                        group
                                        inline-flex
                                        items-center gap-2
                                        rounded-lg
                                        bg-[#F2B84B]
                                        px-6 py-3
                                        text-sm font-semibold
                                        text-[#161F19]
                                        transition-all duration-300
                                        hover:bg-[#f7c968]
                                        motion-safe:hover:-translate-y-1
                                    "
                                >
                                    Explore Plans

                                    <ArrowRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                FOOTER SIGNATURE
            ========================================================== */}

            <div
                className="
                    relative z-10
                    border-t border-[#F3EEDD]/10
                    bg-[#161F19]
                    px-6 py-7
                    text-center
                "
            >
                <p
                    className="
                        font-['JetBrains_Mono']
                        text-[10px]
                        uppercase
                        tracking-[2px]
                        text-[#F3EEDD]/30
                    "
                >
                    Learn
                    <span className="mx-3 text-[#F2B84B]">•</span>
                    Grow
                    <span className="mx-3 text-[#F2B84B]">•</span>
                    Achieve
                </p>

                <p className="mt-2 text-[10px] text-[#F3EEDD]/20">
                    © {new Date().getFullYear()} Shiyora. All rights reserved.
                </p>
            </div>
        </main>
    );
}

export default Contact;