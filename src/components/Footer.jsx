import shiyoraLogo from "../assets/shiyora-logo.png";

function Footer() {
    return (
        <footer
            className="
                relative
                overflow-hidden
                bg-white
                dark:bg-slate-950
                border-t
                border-gray-200
                dark:border-slate-800
                transition-colors
                duration-500
            "
        >

            {/* ================= BACKGROUND GLOW ================= */}

            <div
                className="
                    absolute
                    -top-32
                    left-1/4
                    w-72
                    h-72
                    bg-indigo-500/10
                    dark:bg-indigo-500/10
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
                    w-72
                    h-72
                    bg-purple-500/10
                    dark:bg-purple-500/10
                    rounded-full
                    blur-3xl
                    pointer-events-none
                "
            />


            {/* ================= MAIN ================= */}

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

                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    w-14
                                    h-14
                                    rounded-2xl
                                    bg-indigo-50
                                    dark:bg-indigo-500/10
                                    border
                                    border-indigo-100
                                    dark:border-indigo-500/20
                                    flex
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    shadow-sm
                                    group-hover:shadow-indigo-500/30
                                    group-hover:scale-105
                                    group-hover:-rotate-2
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


                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-gray-900
                                    dark:text-white
                                    tracking-tight
                                "
                            >
                                Shiyora
                            </h2>

                        </div>


                        {/* DESCRIPTION */}

                        <p
                            className="
                                mt-5
                                text-sm
                                leading-6
                                text-gray-500
                                dark:text-gray-400
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
                                bg-indigo-50
                                dark:bg-indigo-500/10
                                border
                                border-indigo-100
                                dark:border-indigo-500/20
                                text-xs
                                font-medium
                                text-indigo-600
                                dark:text-indigo-400
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
                                font-bold
                                uppercase
                                tracking-wider
                                text-gray-900
                                dark:text-white
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

                                    <a
                                        href={link}
                                        className="
                                            group/link
                                            inline-flex
                                            items-center
                                            text-sm
                                            text-gray-500
                                            dark:text-gray-400
                                            hover:text-indigo-600
                                            dark:hover:text-indigo-400
                                            transition-all
                                            duration-300
                                        "
                                    >

                                        <span
                                            className="
                                                w-0
                                                group-hover/link:w-3
                                                h-px
                                                bg-indigo-600
                                                dark:bg-indigo-400
                                                mr-0
                                                group-hover/link:mr-2
                                                transition-all
                                                duration-300
                                            "
                                        />

                                        {name}

                                    </a>

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
                                font-bold
                                uppercase
                                tracking-wider
                                text-gray-900
                                dark:text-white
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

                                    <a
                                        href={link}
                                        className="
                                            group/link
                                            inline-flex
                                            items-center
                                            text-sm
                                            text-gray-500
                                            dark:text-gray-400
                                            hover:text-indigo-600
                                            dark:hover:text-indigo-400
                                            transition-all
                                            duration-300
                                        "
                                    >

                                        <span
                                            className="
                                                w-0
                                                group-hover/link:w-3
                                                h-px
                                                bg-indigo-600
                                                dark:bg-indigo-400
                                                mr-0
                                                group-hover/link:mr-2
                                                transition-all
                                                duration-300
                                            "
                                        />

                                        {name}

                                    </a>

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
                                font-bold
                                uppercase
                                tracking-wider
                                text-gray-900
                                dark:text-white
                            "
                        >
                            Connect With Us
                        </h3>


                        <p
                            className="
                                mt-5
                                text-sm
                                text-gray-500
                                dark:text-gray-400
                            "
                        >
                            Stay connected with Shiyora and never stop
                            learning.
                        </p>


                        {/* SOCIAL ICONS */}

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
                                    border-gray-200
                                    dark:border-slate-700
                                    flex
                                    items-center
                                    justify-center
                                    font-semibold
                                    text-gray-600
                                    dark:text-gray-300
                                    hover:bg-indigo-600
                                    hover:text-white
                                    hover:border-indigo-600
                                    hover:-translate-y-1
                                    hover:shadow-lg
                                    hover:shadow-indigo-500/20
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
                                    border-gray-200
                                    dark:border-slate-700
                                    flex
                                    items-center
                                    justify-center
                                    font-semibold
                                    text-gray-600
                                    dark:text-gray-300
                                    hover:bg-indigo-600
                                    hover:text-white
                                    hover:border-indigo-600
                                    hover:-translate-y-1
                                    hover:shadow-lg
                                    hover:shadow-indigo-500/20
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
                                    border-gray-200
                                    dark:border-slate-700
                                    flex
                                    items-center
                                    justify-center
                                    font-semibold
                                    text-gray-600
                                    dark:text-gray-300
                                    hover:bg-indigo-600
                                    hover:text-white
                                    hover:border-indigo-600
                                    hover:-translate-y-1
                                    hover:shadow-lg
                                    hover:shadow-indigo-500/20
                                    transition-all
                                    duration-300
                                "
                            >
                                IG
                            </a>

                        </div>

                    </div>

                </div>


                {/* ================= DIVIDER ================= */}

                <div
                    className="
                        border-t
                        border-gray-200
                        dark:border-slate-800
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

                        <p
                            className="
                                text-sm
                                text-gray-500
                                dark:text-gray-400
                                text-center
                            "
                        >
                            © {new Date().getFullYear()} Shiyora.
                            All rights reserved.
                        </p>


                        <p
                            className="
                                text-sm
                                text-gray-500
                                dark:text-gray-400
                            "
                        >
                            Learn smarter. Grow faster.
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