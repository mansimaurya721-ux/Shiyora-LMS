import { Link } from "react-router-dom";
import shiyoraLogo from "../assets/shiyora.logo.png";

function Footer() {
    return (
        <footer
            className="
                relative
                overflow-hidden

                bg-[#141C17]

                border-t
                border-[#F3EEDD]/10

                text-[#F3EEDD]
                font-['Inter']
            "
        >

            {/* =====================================================
                BACKGROUND GLOW
            ====================================================== */}

            <div
                className="
                    absolute
                    -top-32
                    left-1/4

                    w-80
                    h-80

                    bg-[#F2B84B]/10

                    rounded-full
                    blur-3xl

                    pointer-events-none
                "
            />

            <div
                className="
                    absolute
                    -bottom-32
                    right-1/4

                    w-80
                    h-80

                    bg-[#7C9A82]/10

                    rounded-full
                    blur-3xl

                    pointer-events-none
                "
            />

            {/* Subtle center glow */}

            <div
                className="
                    absolute
                    top-1/2
                    left-1/2

                    -translate-x-1/2
                    -translate-y-1/2

                    w-96
                    h-40

                    bg-[#D6402C]/5

                    blur-3xl
                    rounded-full

                    pointer-events-none
                "
            />


            {/* =====================================================
                MAIN
            ====================================================== */}

            <div
                className="
                    relative

                    max-w-7xl
                    mx-auto

                    px-6
                    sm:px-8
                    lg:px-10

                    py-14
                "
            >

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-4

                        gap-10
                    "
                >

                    {/* =================================================
                        BRAND
                    ================================================== */}

                    <div
                        className="
                            group
                            animate-[fadeUp_0.7s_ease-out]
                        "
                    >

                        {/* LOGO */}

                        <Link
                            to="/"
                            className="flex items-center gap-3"
                        >

                            <div
                                className="
                                    relative

                                    w-14
                                    h-14

                                    rounded-2xl

                                    bg-[#F3EEDD]

                                    border
                                    border-[#F2B84B]/30

                                    flex
                                    items-center
                                    justify-center

                                    overflow-hidden

                                    shadow-[0_0_20px_rgba(242,184,75,0.08)]

                                    group-hover:scale-105
                                    group-hover:-rotate-2

                                    group-hover:shadow-[0_0_30px_rgba(242,184,75,0.18)]

                                    transition-all
                                    duration-500
                                "
                            >

                                <img
                                    src={shiyoraLogo}
                                    alt="Shiyora Logo"
                                    className="
                                        w-11
                                        h-11

                                        object-contain

                                        group-hover:scale-110

                                        transition-transform
                                        duration-500
                                    "
                                />

                            </div>


                            {/* BRAND NAME */}

                            <h2
                                className="
                                    text-2xl

                                    font-['Space_Grotesk']
                                    font-bold
                                    tracking-tight

                                    text-[#F3EEDD]
                                "
                            >
                                Shiyora
                            </h2>

                        </Link>


                        {/* DESCRIPTION */}

                        <p
                            className="
                                mt-5

                                text-sm
                                leading-6

                                text-[#F3EEDD]/55

                                max-w-xs
                            "
                        >
                            Your intelligent learning platform designed
                            to help students learn smarter, grow faster,
                            and achieve more.
                        </p>


                        {/* TAG */}

                        <div
                            className="
                                inline-flex

                                mt-5

                                px-3
                                py-1.5

                                rounded-full

                                bg-[#F2B84B]/10

                                border
                                border-[#F2B84B]/20

                                text-xs
                                font-medium

                                font-['JetBrains_Mono']

                                text-[#F2B84B]
                            "
                        >
                            Learn • Grow • Achieve
                        </div>

                    </div>


                    {/* =================================================
                        PLATFORM
                    ================================================== */}

                    <div
                        className="
                            animate-[fadeUp_0.8s_ease-out]
                        "
                    >

                        <h3
                            className="
                                text-sm

                                font-['Space_Grotesk']
                                font-bold
                                uppercase
                                tracking-wider

                                text-[#F3EEDD]
                            "
                        >
                            Platform
                        </h3>


                        <ul className="mt-5 space-y-3">

                            {[
                                ["Home", "/home"],
                                ["Courses", "/courses"],
                                ["About Us", "/about"],
                                ["Contact", "/contact"],
                            ].map(([name, link]) => (

                                <li key={name}>

                                    <Link
                                        to={link}
                                        className="
                                            group/link

                                            inline-flex
                                            items-center

                                            text-sm

                                            text-[#F3EEDD]/55

                                            hover:text-[#F2B84B]

                                            transition-all
                                            duration-300
                                        "
                                    >

                                        <span
                                            className="
                                                w-0
                                                group-hover/link:w-3

                                                h-px

                                                bg-[#F2B84B]

                                                mr-0
                                                group-hover/link:mr-2

                                                transition-all
                                                duration-300
                                            "
                                        />

                                        {name}

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>


                    {/* =================================================
                        RESOURCES
                    ================================================== */}

                    <div
                        className="
                            animate-[fadeUp_0.9s_ease-out]
                        "
                    >

                        <h3
                            className="
                                text-sm

                                font-['Space_Grotesk']
                                font-bold
                                uppercase
                                tracking-wider

                                text-[#F3EEDD]
                            "
                        >
                            Resources
                        </h3>


                        <ul className="mt-5 space-y-3">

                            {[
                                ["Help Center", "/help"],
                                ["FAQs", "/faq"],
                                ["Privacy Policy", "/privacy"],
                                ["Terms & Conditions", "/terms"],
                            ].map(([name, link]) => (

                                <li key={name}>

                                    <Link
                                        to={link}
                                        className="
                                            group/link

                                            inline-flex
                                            items-center

                                            text-sm

                                            text-[#F3EEDD]/55

                                            hover:text-[#F2B84B]

                                            transition-all
                                            duration-300
                                        "
                                    >

                                        <span
                                            className="
                                                w-0
                                                group-hover/link:w-3

                                                h-px

                                                bg-[#F2B84B]

                                                mr-0
                                                group-hover/link:mr-2

                                                transition-all
                                                duration-300
                                            "
                                        />

                                        {name}

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>


                    {/* =================================================
                        CONNECT
                    ================================================== */}

                    <div
                        className="
                            animate-[fadeUp_1s_ease-out]
                        "
                    >

                        <h3
                            className="
                                text-sm

                                font-['Space_Grotesk']
                                font-bold
                                uppercase
                                tracking-wider

                                text-[#F3EEDD]
                            "
                        >
                            Connect With Us
                        </h3>


                        <p
                            className="
                                mt-5

                                text-sm
                                leading-6

                                text-[#F3EEDD]/55
                            "
                        >
                            Stay connected with Shiyora and never stop
                            learning.
                        </p>


                        {/* =================================================
                            SOCIAL ICONS
                        ================================================== */}

                        <div className="flex items-center gap-3 mt-6">

                            {/* LINKEDIN */}

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="
                                    w-10
                                    h-10

                                    rounded-xl

                                    border
                                    border-[#F3EEDD]/10

                                    bg-[#1B241E]

                                    flex
                                    items-center
                                    justify-center

                                    font-['Space_Grotesk']
                                    font-semibold

                                    text-[#F3EEDD]/65

                                    hover:bg-[#F2B84B]
                                    hover:text-[#161F19]
                                    hover:border-[#F2B84B]

                                    hover:-translate-y-1

                                    hover:shadow-[0_8px_25px_rgba(242,184,75,0.18)]

                                    transition-all
                                    duration-300
                                "
                            >
                                in
                            </a>


                            {/* GITHUB */}

                            <a
                                href="#"
                                aria-label="GitHub"
                                className="
                                    w-10
                                    h-10

                                    rounded-xl

                                    border
                                    border-[#F3EEDD]/10

                                    bg-[#1B241E]

                                    flex
                                    items-center
                                    justify-center

                                    font-['Space_Grotesk']
                                    font-semibold

                                    text-[#F3EEDD]/65

                                    hover:bg-[#F2B84B]
                                    hover:text-[#161F19]
                                    hover:border-[#F2B84B]

                                    hover:-translate-y-1

                                    hover:shadow-[0_8px_25px_rgba(242,184,75,0.18)]

                                    transition-all
                                    duration-300
                                "
                            >
                                GH
                            </a>


                            {/* INSTAGRAM */}

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="
                                    w-10
                                    h-10

                                    rounded-xl

                                    border
                                    border-[#F3EEDD]/10

                                    bg-[#1B241E]

                                    flex
                                    items-center
                                    justify-center

                                    font-['Space_Grotesk']
                                    font-semibold

                                    text-[#F3EEDD]/65

                                    hover:bg-[#F2B84B]
                                    hover:text-[#161F19]
                                    hover:border-[#F2B84B]

                                    hover:-translate-y-1

                                    hover:shadow-[0_8px_25px_rgba(242,184,75,0.18)]

                                    transition-all
                                    duration-300
                                "
                            >
                                IG
                            </a>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    DIVIDER
                ====================================================== */}

                <div
                    className="
                        border-t
                        border-[#F3EEDD]/10

                        mt-12
                        pt-6
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            sm:flex-row

                            items-center
                            justify-between

                            gap-3
                        "
                    >

                        {/* COPYRIGHT */}

                        <p
                            className="
                                text-sm

                                text-[#F3EEDD]/35

                                text-center
                            "
                        >
                            © {new Date().getFullYear()} Shiyora.
                            All rights reserved.
                        </p>


                        {/* TAGLINE */}

                        <p
                            className="
                                text-sm

                                text-[#F3EEDD]/35

                                text-center
                            "
                        >
                            Learn smarter.
                            <span className="text-[#F2B84B]">
                                {" "}Grow faster.
                            </span>
                        </p>

                    </div>

                </div>

            </div>


            {/* =====================================================
                ANIMATION
            ====================================================== */}

            <style>
                {`
                    @keyframes fadeUp {
                        from {
                            opacity: 0;
                            transform: translateY(25px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>

        </footer>
    );
}

export default Footer;