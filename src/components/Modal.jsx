import { Link } from "react-router-dom";
import {
    BookOpen,
    ArrowRight,
    User,
    PlayCircle,
} from "lucide-react";

function CourseCard({
    title = "Web Development",
    instructor = "Shiyora Instructor",
    lessons = 12,
    level = "Beginner",
    category = "Development",
    progress = 0,
}) {
    return (
        <div
            className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#243247]
                bg-[#111C2E]
                shadow-lg
                shadow-black/10
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/25
                hover:shadow-xl
                hover:shadow-cyan-500/5
            "
        >

            {/* =========================================
                COURSE VISUAL HEADER
            ========================================= */}

            <div
                className="
                    relative
                    h-40
                    overflow-hidden
                    bg-gradient-to-br
                    from-[#10243A]
                    via-[#102038]
                    to-[#17183A]
                    p-5
                "
            >

                {/* Decorative grid */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        opacity-30
                    "
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                rgba(34,211,238,0.12) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                rgba(34,211,238,0.12) 1px,
                                transparent 1px
                            )
                        `,
                        backgroundSize: "24px 24px",
                    }}
                />

                {/* Glow */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-12
                        -top-12
                        h-32
                        w-32
                        rounded-full
                        bg-cyan-400/10
                        blur-3xl
                        transition
                        duration-500
                        group-hover:bg-cyan-400/20
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -bottom-16
                        -left-10
                        h-28
                        w-28
                        rounded-full
                        bg-indigo-500/15
                        blur-3xl
                    "
                />


                {/* Course Icon */}

                <div
                    className="
                        relative
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-cyan-400/15
                        bg-cyan-400/[0.07]
                        text-cyan-300
                        backdrop-blur-sm
                        transition
                        duration-300
                        group-hover:border-cyan-400/30
                        group-hover:bg-cyan-400/10
                    "
                >
                    <BookOpen size={21} />
                </div>


                {/* Category + Level */}

                <div
                    className="
                        absolute
                        bottom-5
                        left-5
                        right-5
                        flex
                        items-center
                        justify-between
                    "
                >

                    <span
                        className="
                            rounded-full
                            border
                            border-cyan-400/15
                            bg-[#081220]/60
                            px-3
                            py-1.5
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-wide
                            text-cyan-300
                            backdrop-blur-md
                        "
                    >
                        {category}
                    </span>


                    <span
                        className="
                            rounded-full
                            border
                            border-[#3A4960]
                            bg-[#081220]/60
                            px-3
                            py-1.5
                            text-[10px]
                            font-medium
                            text-slate-300
                            backdrop-blur-md
                        "
                    >
                        {level}
                    </span>

                </div>

            </div>


            {/* =========================================
                COURSE DETAILS
            ========================================= */}

            <div className="p-5">


                {/* Title */}

                <h3
                    className="
                        line-clamp-2
                        text-lg
                        font-bold
                        leading-6
                        text-white
                        transition
                        duration-300
                        group-hover:text-cyan-300
                    "
                >
                    {title}
                </h3>


                {/* Instructor */}

                <div
                    className="
                        mt-3
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-slate-500
                    "
                >

                    <User size={14} />

                    <span>
                        By {instructor}
                    </span>

                </div>


                {/* =====================================
                    COURSE INFO
                ====================================== */}

                <div
                    className="
                        mt-5
                        flex
                        items-center
                        justify-between
                        border-y
                        border-[#243247]/70
                        py-3
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-xs
                            text-slate-400
                        "
                    >
                        <BookOpen
                            size={14}
                            className="text-cyan-400"
                        />

                        {lessons} Lessons
                    </div>


                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-xs
                            text-slate-400
                        "
                    >
                        <PlayCircle
                            size={14}
                            className="text-indigo-400"
                        />

                        {level}
                    </div>

                </div>


                {/* =====================================
                    PROGRESS
                ====================================== */}

                {progress > 0 && (
                    <div className="mt-5">

                        <div
                            className="
                                mb-2
                                flex
                                items-center
                                justify-between
                            "
                        >

                            <span
                                className="
                                    text-[11px]
                                    font-medium
                                    text-slate-500
                                "
                            >
                                Your Progress
                            </span>


                            <span
                                className="
                                    text-xs
                                    font-bold
                                    text-cyan-300
                                "
                            >
                                {progress}%
                            </span>

                        </div>


                        <div
                            className="
                                h-1.5
                                w-full
                                overflow-hidden
                                rounded-full
                                bg-[#1A293D]
                            "
                        >

                            <div
                                className="
                                    h-full
                                    rounded-full
                                    bg-gradient-to-r
                                    from-cyan-400
                                    to-indigo-500
                                    transition-all
                                    duration-700
                                "
                                style={{
                                    width: `${Math.min(
                                        Math.max(progress, 0),
                                        100
                                    )}%`,
                                }}
                            />

                        </div>

                    </div>
                )}


                {/* =====================================
                    VIEW COURSE
                ====================================== */}

                <Link
                    to="/courses"
                    className="
                        group/button
                        mt-6
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-cyan-400/20
                        bg-cyan-400/[0.06]
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-cyan-300
                        transition-all
                        duration-300
                        hover:border-cyan-400/40
                        hover:bg-cyan-400/10
                        hover:text-cyan-200
                    "
                >

                    View Course

                    <ArrowRight
                        size={16}
                        className="
                            transition-transform
                            duration-300
                            group-hover/button:translate-x-1
                        "
                    />

                </Link>

            </div>

        </div>
    );
}

export default CourseCard;