import { Link } from "react-router-dom";
import shiyoraLogo from "../../assets/shiyora.logo.png";

function Signup() {
    return (
        <div
            className="
                min-h-screen
                relative
                overflow-hidden

                bg-[#081220]
                text-[#f8fafc]

                flex
                items-center
                justify-center

                px-4
                py-10
            "
        >

            {/* =====================================================
                BACKGROUND GLOW
            ====================================================== */}

            <div
                className="
                    absolute
                    -top-40
                    -left-40

                    w-96
                    h-96

                    rounded-full

                    bg-cyan-400/10

                    blur-3xl

                    pointer-events-none
                "
            />

            <div
                className="
                    absolute
                    -bottom-40
                    -right-40

                    w-[450px]
                    h-[450px]

                    rounded-full

                    bg-indigo-600/10

                    blur-3xl

                    pointer-events-none
                "
            />

            <div
                className="
                    absolute
                    top-1/2
                    left-1/2

                    -translate-x-1/2
                    -translate-y-1/2

                    w-[600px]
                    h-[400px]

                    rounded-full

                    bg-blue-500/[0.025]

                    blur-3xl

                    pointer-events-none
                "
            />

            {/* =====================================================
                GRID BACKGROUND
            ====================================================== */}

            <div
                className="
                    absolute
                    inset-0

                    pointer-events-none

                    opacity-40

                    [background-image:linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)]

                    [background-size:55px_55px]

                    [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_80%)]
                "
            />

            {/* =====================================================
                MAIN CARD
            ====================================================== */}

            <div
                className="
                    relative
                    z-10

                    w-full
                    max-w-5xl

                    overflow-hidden

                    rounded-3xl

                    bg-[#020817]/95

                    border
                    border-[#142238]

                    shadow-[0_25px_80px_rgba(0,0,0,0.45)]

                    backdrop-blur-xl

                    grid
                    md:grid-cols-2
                "
            >

                {/* =================================================
                    SIGNUP FORM
                ================================================== */}

                <div
                    className="
                        p-8
                        md:p-12

                        flex
                        items-center
                    "
                >

                    <div className="w-full max-w-md mx-auto">

                        {/* =================================================
                            LOGO
                        ================================================== */}

                        <div className="text-center">

                            <div
                                className="
                                    mx-auto

                                    w-14
                                    h-14

                                    rounded-2xl

                                    bg-gradient-to-br
                                    from-cyan-400/10
                                    via-blue-500/10
                                    to-indigo-600/10

                                    border
                                    border-cyan-400/20

                                    flex
                                    items-center
                                    justify-center

                                    shadow-[0_0_25px_rgba(34,211,238,0.08)]
                                "
                            >

                                <img
                                    src={shiyoraLogo}
                                    alt="Shiyora Logo"
                                    className="
                                        w-11
                                        h-11

                                        object-contain

                                        drop-shadow-[0_0_10px_rgba(34,211,238,0.25)]
                                    "
                                />

                            </div>

                            <h2
                                className="
                                    mt-5

                                    text-3xl
                                    font-bold
                                    tracking-tight

                                    text-[#f8fafc]
                                "
                            >
                                Create Account
                            </h2>

                            <p
                                className="
                                    mt-2

                                    text-sm
                                    text-slate-400
                                "
                            >
                                Create your{" "}
                                <span className="text-cyan-400">
                                    Shiyora
                                </span>{" "}
                                account
                            </p>

                        </div>


                        {/* =================================================
                            SIGNUP FORM
                        ================================================== */}

                        <form className="mt-7 space-y-4">

                            {/* FULL NAME */}

                            <div>

                                <label
                                    className="
                                        block

                                        text-sm
                                        font-medium

                                        text-slate-300

                                        mb-2
                                    "
                                >
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="
                                        w-full

                                        px-4
                                        py-3

                                        rounded-xl

                                        bg-[#091525]

                                        border
                                        border-[#20334B]

                                        text-[#f8fafc]

                                        placeholder:text-slate-500

                                        outline-none

                                        focus:border-cyan-400

                                        focus:ring-2
                                        focus:ring-cyan-400/10

                                        hover:border-[#2b4563]

                                        transition-all
                                        duration-300
                                    "
                                />

                            </div>


                            {/* EMAIL */}

                            <div>

                                <label
                                    className="
                                        block

                                        text-sm
                                        font-medium

                                        text-slate-300

                                        mb-2
                                    "
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="
                                        w-full

                                        px-4
                                        py-3

                                        rounded-xl

                                        bg-[#091525]

                                        border
                                        border-[#20334B]

                                        text-[#f8fafc]

                                        placeholder:text-slate-500

                                        outline-none

                                        focus:border-cyan-400

                                        focus:ring-2
                                        focus:ring-cyan-400/10

                                        hover:border-[#2b4563]

                                        transition-all
                                        duration-300
                                    "
                                />

                            </div>


                            {/* ACCOUNT TYPE */}

                            <div>

                                <label
                                    className="
                                        block

                                        text-sm
                                        font-medium

                                        text-slate-300

                                        mb-2
                                    "
                                >
                                    Account Type
                                </label>

                                <select
                                    defaultValue=""
                                    className="
                                        w-full

                                        px-4
                                        py-3

                                        rounded-xl

                                        bg-[#091525]

                                        border
                                        border-[#20334B]

                                        text-slate-300

                                        outline-none

                                        focus:border-cyan-400

                                        focus:ring-2
                                        focus:ring-cyan-400/10

                                        hover:border-[#2b4563]

                                        transition-all
                                        duration-300
                                    "
                                >

                                    <option
                                        value=""
                                        disabled
                                        className="bg-[#091525]"
                                    >
                                        Select account type
                                    </option>

                                    <option
                                        value="student"
                                        className="bg-[#091525]"
                                    >
                                        Student
                                    </option>

                                    <option
                                        value="teacher"
                                        className="bg-[#091525]"
                                    >
                                        Teacher
                                    </option>

                                </select>

                            </div>


                            {/* PASSWORD */}

                            <div>

                                <label
                                    className="
                                        block

                                        text-sm
                                        font-medium

                                        text-slate-300

                                        mb-2
                                    "
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Create a password"
                                    className="
                                        w-full

                                        px-4
                                        py-3

                                        rounded-xl

                                        bg-[#091525]

                                        border
                                        border-[#20334B]

                                        text-[#f8fafc]

                                        placeholder:text-slate-500

                                        outline-none

                                        focus:border-cyan-400

                                        focus:ring-2
                                        focus:ring-cyan-400/10

                                        hover:border-[#2b4563]

                                        transition-all
                                        duration-300
                                    "
                                />

                            </div>


                            {/* CONFIRM PASSWORD */}

                            <div>

                                <label
                                    className="
                                        block

                                        text-sm
                                        font-medium

                                        text-slate-300

                                        mb-2
                                    "
                                >
                                    Confirm Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    className="
                                        w-full

                                        px-4
                                        py-3

                                        rounded-xl

                                        bg-[#091525]

                                        border
                                        border-[#20334B]

                                        text-[#f8fafc]

                                        placeholder:text-slate-500

                                        outline-none

                                        focus:border-cyan-400

                                        focus:ring-2
                                        focus:ring-cyan-400/10

                                        hover:border-[#2b4563]

                                        transition-all
                                        duration-300
                                    "
                                />

                            </div>


                            {/* TERMS */}

                            <label
                                className="
                                    flex
                                    items-start
                                    gap-2

                                    text-xs
                                    text-slate-400

                                    pt-1
                                "
                            >

                                <input
                                    type="checkbox"
                                    className="
                                        mt-0.5

                                        accent-cyan-400
                                    "
                                />

                                <span>
                                    I agree to the{" "}
                                    <span className="text-cyan-400">
                                        Shiyora
                                    </span>{" "}
                                    terms and conditions.
                                </span>

                            </label>


                            {/* CREATE ACCOUNT BUTTON */}

                            <button
                                type="submit"
                                className="
                                    w-full

                                    py-3

                                    rounded-xl

                                    bg-gradient-to-r
                                    from-cyan-400
                                    via-blue-400
                                    to-indigo-500

                                    text-[#03101C]

                                    font-bold

                                    shadow-[0_8px_30px_rgba(34,211,238,0.15)]

                                    hover:shadow-[0_8px_35px_rgba(34,211,238,0.25)]

                                    hover:-translate-y-0.5

                                    active:scale-[0.98]

                                    transition-all
                                    duration-300
                                "
                            >
                                Create Account
                            </button>

                        </form>


                        {/* =================================================
                            LOGIN LINK
                        ================================================== */}

                        <p
                            className="
                                mt-7

                                text-center

                                text-sm
                                text-slate-400
                            "
                        >
                            Already have an account?{" "}

                            <Link
                                to="/login"
                                className="
                                    text-cyan-400

                                    font-semibold

                                    hover:text-cyan-300

                                    transition
                                "
                            >
                                Sign In
                            </Link>

                        </p>

                    </div>

                </div>


                {/* =================================================
                    RIGHT INFORMATION PANEL
                ================================================== */}

                <div
                    className="
                        hidden
                        md:flex

                        relative
                        overflow-hidden

                        bg-gradient-to-br
                        from-[#0c2538]
                        via-[#102a46]
                        to-[#161b4a]

                        p-12

                        flex-col
                        justify-center
                    "
                >

                    {/* PANEL GLOW */}

                    <div
                        className="
                            absolute
                            -top-32
                            -right-32

                            w-80
                            h-80

                            rounded-full

                            bg-cyan-400/10

                            blur-3xl

                            pointer-events-none
                        "
                    />

                    <div
                        className="
                            absolute
                            -bottom-32
                            -left-32

                            w-80
                            h-80

                            rounded-full

                            bg-indigo-500/10

                            blur-3xl

                            pointer-events-none
                        "
                    />

                    <div className="relative z-10">

                        {/* LOGO */}

                        <div
                            className="
                                w-20
                                h-20

                                rounded-3xl

                                bg-white/5

                                border
                                border-cyan-400/20

                                flex
                                items-center
                                justify-center

                                shadow-[0_0_30px_rgba(34,211,238,0.12)]
                            "
                        >

                            <img
                                src={shiyoraLogo}
                                alt="Shiyora Logo"
                                className="
                                    w-14
                                    h-14
                                    object-contain
                                "
                            />

                        </div>


                        {/* HEADING */}

                        <h1
                            className="
                                mt-8

                                text-4xl
                                font-bold
                                tracking-tight

                                text-[#f8fafc]
                            "
                        >
                            Start Learning Today
                        </h1>


                        {/* DESCRIPTION */}

                        <p
                            className="
                                mt-5

                                text-slate-300

                                leading-relaxed
                                text-sm

                                max-w-md
                            "
                        >
                            Join{" "}
                            <span className="text-cyan-400 font-medium">
                                Shiyora
                            </span>{" "}
                            and connect with your organization, teachers,
                            courses, lessons and learning resources from one
                            centralized platform.
                        </p>


                        {/* FEATURES */}

                        <div className="mt-10 space-y-5">

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4

                                    text-slate-300
                                "
                            >

                                <span
                                    className="
                                        w-9
                                        h-9

                                        rounded-xl

                                        bg-cyan-400/10

                                        border
                                        border-cyan-400/20

                                        flex
                                        items-center
                                        justify-center

                                        text-cyan-400
                                        font-bold
                                    "
                                >
                                    ✓
                                </span>

                                <span>
                                    Access your learning dashboard
                                </span>

                            </div>


                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4

                                    text-slate-300
                                "
                            >

                                <span
                                    className="
                                        w-9
                                        h-9

                                        rounded-xl

                                        bg-cyan-400/10

                                        border
                                        border-cyan-400/20

                                        flex
                                        items-center
                                        justify-center

                                        text-cyan-400
                                        font-bold
                                    "
                                >
                                    ✓
                                </span>

                                <span>
                                    Explore courses and lessons
                                </span>

                            </div>


                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4

                                    text-slate-300
                                "
                            >

                                <span
                                    className="
                                        w-9
                                        h-9

                                        rounded-xl

                                        bg-cyan-400/10

                                        border
                                        border-cyan-400/20

                                        flex
                                        items-center
                                        justify-center

                                        text-cyan-400
                                        font-bold
                                    "
                                >
                                    ✓
                                </span>

                                <span>
                                    Track your learning progress
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Signup;