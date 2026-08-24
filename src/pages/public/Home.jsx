import { Link } from "react-router-dom";

function Home() {
    return (
        <main
            className="
                min-h-screen
                bg-[#f8f9fc]
                text-slate-900
                dark:bg-[#080b14]
                dark:text-white
                transition-colors duration-500
            "
        >

            {/* =====================================================
                HERO SECTION
            ====================================================== */}

            <section className="relative overflow-hidden">

                {/* Background Glow */}

                <div
                    className="
                        absolute
                        -top-40
                        -right-40
                        w-[550px]
                        h-[550px]
                        rounded-full
                        bg-violet-200/40
                        dark:bg-violet-600/10
                        blur-[120px]
                        pointer-events-none
                    "
                />

                <div
                    className="
                        absolute
                        bottom-0
                        -left-40
                        w-[450px]
                        h-[450px]
                        rounded-full
                        bg-cyan-200/30
                        dark:bg-cyan-500/10
                        blur-[120px]
                        pointer-events-none
                    "
                />

                <div
                    className="
                        relative
                        z-10
                        max-w-7xl
                        mx-auto
                        px-6
                        py-20
                        md:py-28
                        grid
                        lg:grid-cols-2
                        gap-16
                        items-center
                    "
                >

                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div>

                        {/* Badge */}

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-4
                                py-2
                                rounded-full
                                bg-violet-50
                                border border-violet-200
                                text-violet-700
                                dark:bg-violet-500/10
                                dark:border-violet-500/20
                                dark:text-violet-300
                                text-sm
                                font-semibold
                            "
                        >

                            <span
                                className="
                                    w-2
                                    h-2
                                    rounded-full
                                    bg-cyan-500
                                    shadow-[0_0_12px_rgba(6,182,212,0.9)]
                                "
                            />

                            Modern Learning Platform

                        </div>


                        {/* Heading */}

                        <h1
                            className="
                                mt-7
                                text-5xl
                                md:text-6xl
                                lg:text-7xl
                                font-black
                                tracking-tight
                                leading-[1.05]
                                text-slate-900
                                dark:text-white
                            "
                        >

                            Learn smarter.

                            <br />

                            <span
                                className="
                                    bg-gradient-to-r
                                    from-violet-600
                                    via-purple-500
                                    to-cyan-400
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                Grow faster.
                            </span>

                        </h1>


                        {/* Description */}

                        <p
                            className="
                                mt-7
                                text-lg
                                leading-relaxed
                                max-w-xl
                                text-slate-600
                                dark:text-slate-400
                            "
                        >
                            Shiyora brings courses, learning resources,
                            assessments and progress tracking together
                            in one intelligent learning platform.
                        </p>


                        {/* Buttons */}

                        <div
                            className="
                                mt-9
                                flex
                                flex-wrap
                                gap-4
                            "
                        >

                            <Link
                                to="/signup"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-7
                                    py-3.5
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-violet-600
                                    to-cyan-500
                                    text-white
                                    font-semibold
                                    shadow-lg
                                    shadow-violet-500/20
                                    hover:-translate-y-1
                                    hover:shadow-cyan-500/20
                                    transition-all
                                    duration-300
                                "
                            >
                                Start Learning
                            </Link>


                            <Link
                                to="/subscription"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-7
                                    py-3.5
                                    rounded-xl
                                    bg-white
                                    border
                                    border-slate-200
                                    text-slate-700
                                    dark:bg-white/5
                                    dark:border-white/10
                                    dark:text-slate-200
                                    font-semibold
                                    hover:border-violet-400
                                    hover:text-violet-600
                                    dark:hover:text-cyan-400
                                    transition-all
                                    duration-300
                                "
                            >
                                Explore Plans
                            </Link>

                        </div>


                        {/* Stats */}

                        <div
                            className="
                                mt-12
                                flex
                                flex-wrap
                                gap-10
                            "
                        >

                            <div>
                                <p
                                    className="
                                        text-2xl
                                        font-black
                                        text-slate-900
                                        dark:text-white
                                    "
                                >
                                    100+
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        text-slate-500
                                        dark:text-slate-500
                                    "
                                >
                                    Learning Resources
                                </p>
                            </div>


                            <div>
                                <p
                                    className="
                                        text-2xl
                                        font-black
                                        text-slate-900
                                        dark:text-white
                                    "
                                >
                                    50+
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        text-slate-500
                                        dark:text-slate-500
                                    "
                                >
                                    Courses
                                </p>
                            </div>


                            <div>
                                <p
                                    className="
                                        text-2xl
                                        font-black
                                        text-slate-900
                                        dark:text-white
                                    "
                                >
                                    24/7
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        text-slate-500
                                        dark:text-slate-500
                                    "
                                >
                                    Learning Access
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        DASHBOARD PREVIEW
                    ================================================= */}

                    <div className="relative flex justify-center">

                        {/* Glow */}

                        <div
                            className="
                                absolute
                                w-80
                                h-80
                                rounded-full
                                bg-violet-500/20
                                dark:bg-violet-500/10
                                blur-[100px]
                            "
                        />


                        {/* Outer Border */}

                        <div
                            className="
                                relative
                                w-full
                                max-w-lg
                                rounded-[2rem]
                                p-[1px]
                                bg-gradient-to-br
                                from-violet-500/60
                                via-purple-500/20
                                to-cyan-400/60
                                shadow-2xl
                            "
                        >

                            {/* Dashboard */}

                            <div
                                className="
                                    rounded-[2rem]
                                    p-6
                                    md:p-8
                                    bg-white
                                    dark:bg-[#0d111c]
                                    transition-colors
                                "
                            >

                                {/* Header */}

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >

                                    <div>

                                        <p
                                            className="
                                                text-sm
                                                text-slate-500
                                                dark:text-slate-500
                                            "
                                        >
                                            Learning Overview
                                        </p>

                                        <h2
                                            className="
                                                text-xl
                                                font-bold
                                                mt-1
                                                text-slate-900
                                                dark:text-white
                                            "
                                        >
                                            Your Progress
                                        </h2>

                                    </div>


                                    <div
                                        className="
                                            w-11
                                            h-11
                                            rounded-xl
                                            bg-violet-100
                                            dark:bg-violet-500/10
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >

                                        <div
                                            className="
                                                w-5
                                                h-5
                                                rounded-full
                                                border-[3px]
                                                border-violet-500
                                                border-t-cyan-400
                                            "
                                        />

                                    </div>

                                </div>


                                {/* Progress */}

                                <div className="mt-8">

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            mb-2
                                        "
                                    >

                                        <span
                                            className="
                                                text-sm
                                                font-medium
                                                text-slate-600
                                                dark:text-slate-400
                                            "
                                        >
                                            Overall Progress
                                        </span>

                                        <span
                                            className="
                                                text-sm
                                                font-bold
                                                text-violet-600
                                                dark:text-cyan-400
                                            "
                                        >
                                            75%
                                        </span>

                                    </div>


                                    <div
                                        className="
                                            w-full
                                            h-2.5
                                            rounded-full
                                            overflow-hidden
                                            bg-slate-100
                                            dark:bg-white/5
                                        "
                                    >

                                        <div
                                            className="
                                                h-full
                                                w-[75%]
                                                rounded-full
                                                bg-gradient-to-r
                                                from-violet-600
                                                to-cyan-400
                                            "
                                        />

                                    </div>

                                </div>


                                {/* Continue Learning */}

                                <div className="mt-8">

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            mb-4
                                        "
                                    >

                                        <h3
                                            className="
                                                font-semibold
                                                text-slate-900
                                                dark:text-white
                                            "
                                        >
                                            Continue Learning
                                        </h3>

                                        <span
                                            className="
                                                text-xs
                                                font-semibold
                                                text-violet-600
                                                dark:text-cyan-400
                                            "
                                        >
                                            View all
                                        </span>

                                    </div>


                                    {/* Course 1 */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                            p-4
                                            rounded-2xl
                                            bg-slate-50
                                            border
                                            border-slate-100
                                            dark:bg-white/[0.03]
                                            dark:border-white/10
                                            hover:border-violet-400/30
                                            transition-all
                                        "
                                    >

                                        <div
                                            className="
                                                w-12
                                                h-12
                                                rounded-xl
                                                bg-violet-100
                                                dark:bg-violet-500/10
                                                flex
                                                items-center
                                                justify-center
                                                shrink-0
                                            "
                                        >

                                            <span
                                                className="
                                                    font-bold
                                                    text-violet-600
                                                    dark:text-violet-400
                                                "
                                            >
                                                WD
                                            </span>

                                        </div>


                                        <div className="flex-1 min-w-0">

                                            <h4
                                                className="
                                                    font-semibold
                                                    text-slate-900
                                                    dark:text-white
                                                "
                                            >
                                                Web Development
                                            </h4>

                                            <p
                                                className="
                                                    text-sm
                                                    mt-1
                                                    text-slate-500
                                                    dark:text-slate-500
                                                "
                                            >
                                                12 lessons
                                            </p>

                                        </div>


                                        <span
                                            className="
                                                text-xs
                                                font-bold
                                                text-cyan-500
                                            "
                                        >
                                            75%
                                        </span>

                                    </div>


                                    {/* Course 2 */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                            p-4
                                            mt-3
                                            rounded-2xl
                                            bg-slate-50
                                            border
                                            border-slate-100
                                            dark:bg-white/[0.03]
                                            dark:border-white/10
                                            hover:border-cyan-400/30
                                            transition-all
                                        "
                                    >

                                        <div
                                            className="
                                                w-12
                                                h-12
                                                rounded-xl
                                                bg-cyan-100
                                                dark:bg-cyan-500/10
                                                flex
                                                items-center
                                                justify-center
                                                shrink-0
                                            "
                                        >

                                            <span
                                                className="
                                                    font-bold
                                                    text-cyan-600
                                                    dark:text-cyan-400
                                                "
                                            >
                                                DA
                                            </span>

                                        </div>


                                        <div className="flex-1 min-w-0">

                                            <h4
                                                className="
                                                    font-semibold
                                                    text-slate-900
                                                    dark:text-white
                                                "
                                            >
                                                Data Analytics
                                            </h4>

                                            <p
                                                className="
                                                    text-sm
                                                    mt-1
                                                    text-slate-500
                                                    dark:text-slate-500
                                                "
                                            >
                                                8 lessons
                                            </p>

                                        </div>


                                        <span
                                            className="
                                                text-xs
                                                font-bold
                                                text-violet-500
                                                dark:text-violet-400
                                            "
                                        >
                                            45%
                                        </span>

                                    </div>

                                </div>


                                {/* Learning Streak */}

                                <div
                                    className="
                                        mt-6
                                        p-4
                                        rounded-2xl
                                        bg-violet-50
                                        border
                                        border-violet-100
                                        dark:bg-[#111625]
                                        dark:border-violet-500/20
                                        transition-colors
                                    "
                                >

                                    <p
                                        className="
                                            text-xs
                                            font-semibold
                                            uppercase
                                            tracking-wide
                                            text-violet-600
                                            dark:text-cyan-400
                                        "
                                    >
                                        Learning Streak
                                    </p>


                                    <div
                                        className="
                                            flex
                                            items-end
                                            justify-between
                                            mt-2
                                        "
                                    >

                                        <p
                                            className="
                                                text-2xl
                                                font-bold
                                                text-slate-900
                                                dark:text-white
                                            "
                                        >
                                            7 Days
                                        </p>

                                        <p
                                            className="
                                                text-sm
                                                text-slate-500
                                                dark:text-slate-400
                                            "
                                        >
                                            Keep going
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FEATURES
            ====================================================== */}

            <section
                className="
                    py-24
                    bg-white
                    dark:bg-[#0b0f19]
                    transition-colors
                "
            >

                <div className="max-w-7xl mx-auto px-6">

                    <div className="max-w-2xl">

                        <p
                            className="
                                text-sm
                                font-bold
                                tracking-widest
                                uppercase
                                text-violet-600
                                dark:text-cyan-400
                            "
                        >
                            Why Shiyora
                        </p>


                        <h2
                            className="
                                mt-3
                                text-3xl
                                md:text-4xl
                                font-black
                                text-slate-900
                                dark:text-white
                            "
                        >
                            Everything you need to learn better
                        </h2>


                        <p
                            className="
                                mt-4
                                leading-relaxed
                                text-slate-600
                                dark:text-slate-400
                            "
                        >
                            Shiyora provides a structured environment
                            for organizations, teachers and students
                            to manage the complete learning experience.
                        </p>

                    </div>


                    <div
                        className="
                            mt-14
                            grid
                            md:grid-cols-3
                            gap-6
                        "
                    >

                        {[
                            {
                                number: "01",
                                title: "Organization Management",
                                text: "Manage organizations, teachers, students and learning activities from one centralized platform."
                            },
                            {
                                number: "02",
                                title: "Complete Course Management",
                                text: "Create structured courses with lessons, videos, study materials and assessments."
                            },
                            {
                                number: "03",
                                title: "Progress & Performance",
                                text: "Monitor course completion, quiz performance and overall student learning progress."
                            }
                        ].map((feature) => (

                            <div
                                key={feature.number}
                                className="
                                    group
                                    p-7
                                    rounded-2xl
                                    bg-slate-50
                                    border
                                    border-slate-200
                                    dark:bg-white/[0.03]
                                    dark:border-white/10
                                    hover:-translate-y-1
                                    hover:border-violet-400/30
                                    hover:shadow-xl
                                    dark:hover:shadow-violet-500/5
                                    transition-all
                                    duration-300
                                "
                            >

                                <div
                                    className="
                                        w-12
                                        h-12
                                        rounded-xl
                                        bg-gradient-to-br
                                        from-violet-600
                                        to-cyan-500
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        font-bold
                                    "
                                >
                                    {feature.number}
                                </div>


                                <h3
                                    className="
                                        mt-6
                                        text-xl
                                        font-bold
                                        text-slate-900
                                        dark:text-white
                                    "
                                >
                                    {feature.title}
                                </h3>


                                <p
                                    className="
                                        mt-3
                                        leading-relaxed
                                        text-slate-600
                                        dark:text-slate-400
                                    "
                                >
                                    {feature.text}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                HOW IT WORKS
            ====================================================== */}

            <section
                className="
                    py-24
                    bg-[#f8f9fc]
                    dark:bg-[#080b14]
                    transition-colors
                "
            >

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-2xl mx-auto">

                        <p
                            className="
                                text-sm
                                font-bold
                                tracking-widest
                                uppercase
                                text-violet-600
                                dark:text-cyan-400
                            "
                        >
                            How It Works
                        </p>


                        <h2
                            className="
                                mt-3
                                text-3xl
                                md:text-4xl
                                font-black
                                text-slate-900
                                dark:text-white
                            "
                        >
                            Learning made simple
                        </h2>


                        <p
                            className="
                                mt-4
                                text-slate-600
                                dark:text-slate-400
                            "
                        >
                            Start learning with just a few simple steps.
                        </p>

                    </div>


                    <div
                        className="
                            mt-14
                            grid
                            md:grid-cols-3
                            gap-8
                        "
                    >

                        {[
                            [
                                "01",
                                "Create an Account",
                                "Join Shiyora and set up your learning profile."
                            ],
                            [
                                "02",
                                "Explore Courses",
                                "Discover courses and choose what you want to learn."
                            ],
                            [
                                "03",
                                "Track Your Progress",
                                "Learn at your own pace and monitor your progress."
                            ]
                        ].map(([number, title, text]) => (

                            <div
                                key={number}
                                className="text-center"
                            >

                                <div
                                    className="
                                        mx-auto
                                        w-14
                                        h-14
                                        rounded-2xl
                                        bg-gradient-to-br
                                        from-violet-600
                                        to-cyan-500
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        font-bold
                                        shadow-lg
                                        shadow-violet-500/20
                                    "
                                >
                                    {number}
                                </div>


                                <h3
                                    className="
                                        mt-5
                                        text-xl
                                        font-bold
                                        text-slate-900
                                        dark:text-white
                                    "
                                >
                                    {title}
                                </h3>


                                <p
                                    className="
                                        mt-3
                                        text-slate-600
                                        dark:text-slate-400
                                    "
                                >
                                    {text}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ====================================================== */}

            <section
                className="
                    py-24
                    bg-white
                    dark:bg-[#0b0f19]
                "
            >

                <div className="max-w-5xl mx-auto px-6">

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[2rem]
                            bg-gradient-to-br
                            from-violet-700
                            via-purple-600
                            to-cyan-500
                            px-8
                            py-16
                            md:px-16
                            text-center
                            shadow-2xl
                            shadow-violet-500/20
                        "
                    >

                        {/* Decorative Glow */}

                        <div
                            className="
                                absolute
                                -top-32
                                -right-32
                                w-80
                                h-80
                                rounded-full
                                bg-white/10
                                blur-2xl
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
                                bg-cyan-300/10
                                blur-2xl
                            "
                        />


                        <div className="relative z-10">

                            <p
                                className="
                                    text-cyan-100
                                    text-sm
                                    font-bold
                                    tracking-widest
                                    uppercase
                                "
                            >
                                Start Your Journey
                            </p>


                            <h2
                                className="
                                    mt-4
                                    text-3xl
                                    md:text-4xl
                                    font-black
                                    text-white
                                "
                            >
                                Ready to learn with Shiyora?
                            </h2>


                            <p
                                className="
                                    mt-5
                                    text-violet-100
                                    text-lg
                                    max-w-2xl
                                    mx-auto
                                    leading-relaxed
                                "
                            >
                                Create your account, explore courses
                                and take control of your learning journey.
                            </p>


                            <Link
                                to="/signup"
                                className="
                                    inline-flex
                                    mt-8
                                    px-8
                                    py-3.5
                                    rounded-xl
                                    bg-white
                                    text-violet-700
                                    font-bold
                                    hover:bg-slate-100
                                    hover:-translate-y-0.5
                                    transition-all
                                "
                            >
                                Create Your Account
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Home;