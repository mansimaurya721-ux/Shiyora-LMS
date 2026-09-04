import React, { useState } from "react";
import {
    Award,
    Download,
    Eye,
    CalendarDays,
    BookOpen,
    CheckCircle2,
    Search,
    X,
} from "lucide-react";

const Certificates = () => {
    const [search, setSearch] = useState("");
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const certificates = [
        {
            id: 1,
            title: "HTML & CSS Fundamentals",
            course: "HTML & CSS Fundamentals",
            instructor: "Neha Gupta",
            issueDate: "15 August 2026",
            certificateId: "SHY-HTML-2026-001",
            score: "92%",
        },
        {
            id: 2,
            title: "JavaScript Essentials",
            course: "JavaScript Essentials",
            instructor: "Rohit Kumar",
            issueDate: "28 July 2026",
            certificateId: "SHY-JS-2026-002",
            score: "88%",
        },
    ];

    const filteredCertificates = certificates.filter((certificate) =>
        `${certificate.title} ${certificate.course} ${certificate.instructor}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="space-y-8">

            {/* HEADER */}
            <section>
                <p className="mb-2 text-sm font-medium text-[#7C9A82]">
                    Achievements
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-[#F3EEDD] sm:text-4xl">
                    My Certificates
                </h1>

                <p className="mt-2 max-w-2xl text-sm text-[#7C9A82] sm:text-base">
                    View and manage the certificates you have earned through
                    your completed courses.
                </p>
            </section>

            {/* STATS */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">

                <StatCard
                    icon={Award}
                    title="Certificates Earned"
                    value="02"
                />

                <StatCard
                    icon={CheckCircle2}
                    title="Courses Completed"
                    value="02"
                />

                <StatCard
                    icon={BookOpen}
                    title="Courses In Progress"
                    value="04"
                />

            </section>

            {/* SEARCH */}
            <section>
                <div className="relative max-w-xl">
                    <Search
                        size={19}
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
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search certificates..."
                        className="
                            w-full
                            rounded-xl
                            border
                            border-[#7C9A82]/20
                            bg-[#1B241E]
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
            </section>

            {/* CERTIFICATE LIST */}
            {filteredCertificates.length > 0 ? (
                <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">

                    {filteredCertificates.map((certificate) => (
                        <CertificateCard
                            key={certificate.id}
                            certificate={certificate}
                            onView={() =>
                                setSelectedCertificate(certificate)
                            }
                        />
                    ))}

                </section>
            ) : (
                <EmptyState />
            )}

            {/* INFO */}
            <section
                className="
                    rounded-2xl
                    border
                    border-[#7C9A82]/20
                    bg-[#1B241E]
                    p-6
                "
            >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F2B84B]/10">
                        <Award
                            size={23}
                            className="text-[#F2B84B]"
                        />
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-[#F3EEDD]">
                            Complete more courses
                        </h2>

                        <p className="mt-1 text-sm leading-6 text-[#7C9A82]">
                            Finish your remaining courses to unlock more
                            certificates and showcase your achievements.
                        </p>
                    </div>
                </div>
            </section>

            {/* CERTIFICATE MODAL */}
            {selectedCertificate && (
                <CertificateModal
                    certificate={selectedCertificate}
                    onClose={() => setSelectedCertificate(null)}
                />
            )}
        </div>
    );
};

/* =========================================================
   STAT CARD
========================================================= */

const StatCard = ({
    icon: Icon,
    title,
    value,
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
                hover:border-[#7C9A82]/40
            "
        >
            <div className="flex items-center justify-between">

                <div>
                    <p className="text-sm text-[#7C9A82]">
                        {title}
                    </p>

                    <p className="mt-2 text-3xl font-bold text-[#F3EEDD]">
                        {value}
                    </p>
                </div>

                <div className="rounded-xl bg-[#F2B84B]/10 p-3">
                    <Icon
                        size={22}
                        className="text-[#F2B84B]"
                    />
                </div>

            </div>
        </div>
    );
};

/* =========================================================
   CERTIFICATE CARD
========================================================= */

const CertificateCard = ({
    certificate,
    onView,
}) => {
    return (
        <article
            className="
                overflow-hidden
                rounded-2xl
                border
                border-[#7C9A82]/20
                bg-[#1B241E]
                transition
                hover:-translate-y-1
                hover:border-[#F2B84B]/30
            "
        >

            {/* Certificate Preview */}
            <div
                className="
                    relative
                    flex
                    min-h-[220px]
                    items-center
                    justify-center
                    overflow-hidden
                    bg-[#161F19]
                    p-6
                "
            >
                {/* Decorative Border */}
                <div
                    className="
                        absolute
                        inset-4
                        rounded-xl
                        border
                        border-[#F2B84B]/30
                    "
                />

                <div
                    className="
                        absolute
                        inset-7
                        rounded-lg
                        border
                        border-[#7C9A82]/20
                    "
                />

                <div className="relative text-center">

                    <Award
                        size={42}
                        className="mx-auto text-[#F2B84B]"
                    />

                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#7C9A82]">
                        Shiyora
                    </p>

                    <h3 className="mt-2 max-w-xs text-xl font-bold text-[#F3EEDD]">
                        Certificate of Completion
                    </h3>

                    <p className="mt-2 text-xs text-[#7C9A82]">
                        {certificate.title}
                    </p>

                </div>
            </div>

            {/* Details */}
            <div className="p-5">

                <div className="flex items-start justify-between gap-4">

                    <div>
                        <h3 className="text-base font-semibold text-[#F3EEDD]">
                            {certificate.title}
                        </h3>

                        <p className="mt-1 text-sm text-[#7C9A82]">
                            {certificate.instructor}
                        </p>
                    </div>

                    <span
                        className="
                            shrink-0
                            rounded-full
                            border
                            border-[#7C9A82]/30
                            bg-[#7C9A82]/10
                            px-3
                            py-1
                            text-xs
                            font-medium
                            text-[#7C9A82]
                        "
                    >
                        Completed
                    </span>

                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-[#161F19] p-3">
                        <div className="flex items-center gap-2">
                            <CalendarDays
                                size={14}
                                className="text-[#F2B84B]"
                            />

                            <span className="text-xs text-[#7C9A82]">
                                Issue Date
                            </span>
                        </div>

                        <p className="mt-2 text-xs font-medium text-[#F3EEDD]">
                            {certificate.issueDate}
                        </p>
                    </div>

                    <div className="rounded-xl bg-[#161F19] p-3">
                        <div className="flex items-center gap-2">
                            <CheckCircle2
                                size={14}
                                className="text-[#7C9A82]"
                            />

                            <span className="text-xs text-[#7C9A82]">
                                Score
                            </span>
                        </div>

                        <p className="mt-2 text-xs font-medium text-[#F3EEDD]">
                            {certificate.score}
                        </p>
                    </div>

                </div>

                <div className="mt-4">
                    <p className="text-[11px] text-[#7C9A82]">
                        Certificate ID
                    </p>

                    <p className="mt-1 font-mono text-xs text-[#F3EEDD]">
                        {certificate.certificateId}
                    </p>
                </div>

                {/* Actions */}
                <div className="mt-5 flex gap-3">

                    <button
                        type="button"
                        onClick={onView}
                        className="
                            flex
                            flex-1
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-[#7C9A82]/30
                            bg-[#161F19]
                            px-4
                            py-2.5
                            text-sm
                            font-medium
                            text-[#F3EEDD]
                            transition
                            hover:border-[#F2B84B]/40
                            hover:text-[#F2B84B]
                        "
                    >
                        <Eye size={16} />
                        View
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            alert(
                                "Certificate download will be connected to the backend later."
                            )
                        }
                        className="
                            flex
                            flex-1
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-[#F2B84B]
                            px-4
                            py-2.5
                            text-sm
                            font-semibold
                            text-[#161F19]
                            transition
                            hover:bg-[#F2B84B]/90
                        "
                    >
                        <Download size={16} />
                        Download
                    </button>

                </div>

            </div>
        </article>
    );
};

/* =========================================================
   CERTIFICATE MODAL
========================================================= */

const CertificateModal = ({
    certificate,
    onClose,
}) => {
    return (
        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/70
                p-4
            "
            onClick={onClose}
        >
            <div
                className="
                    relative
                    w-full
                    max-w-2xl
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#7C9A82]/20
                    bg-[#1B241E]
                    shadow-2xl
                "
                onClick={(e) => e.stopPropagation()}
            >

                {/* Close */}
                <button
                    type="button"
                    onClick={onClose}
                    className="
                        absolute
                        right-4
                        top-4
                        z-10
                        rounded-lg
                        bg-[#161F19]
                        p-2
                        text-[#7C9A82]
                        transition
                        hover:text-[#F3EEDD]
                    "
                >
                    <X size={18} />
                </button>

                {/* Certificate */}
                <div className="p-6 sm:p-10">

                    <div
                        className="
                            rounded-xl
                            border-2
                            border-[#F2B84B]/40
                            bg-[#161F19]
                            p-6
                            text-center
                            sm:p-10
                        "
                    >
                        <div className="rounded-lg border border-[#7C9A82]/25 p-6 sm:p-10">

                            <Award
                                size={50}
                                className="mx-auto text-[#F2B84B]"
                            />

                            <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#7C9A82]">
                                Shiyora Learning Management System
                            </p>

                            <h2 className="mt-4 text-2xl font-bold text-[#F3EEDD] sm:text-3xl">
                                Certificate of Completion
                            </h2>

                            <p className="mt-5 text-sm text-[#7C9A82]">
                                This certificate is awarded for successfully
                                completing
                            </p>

                            <h3 className="mt-3 text-xl font-semibold text-[#F2B84B]">
                                {certificate.course}
                            </h3>

                            <div className="mx-auto mt-6 h-px max-w-xs bg-[#7C9A82]/30" />

                            <p className="mt-5 text-sm text-[#7C9A82]">
                                Instructor
                            </p>

                            <p className="mt-1 text-base font-medium text-[#F3EEDD]">
                                {certificate.instructor}
                            </p>

                            <div className="mt-7 grid grid-cols-2 gap-4">

                                <div>
                                    <p className="text-xs text-[#7C9A82]">
                                        Issue Date
                                    </p>

                                    <p className="mt-1 text-sm text-[#F3EEDD]">
                                        {certificate.issueDate}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-[#7C9A82]">
                                        Score
                                    </p>

                                    <p className="mt-1 text-sm text-[#F3EEDD]">
                                        {certificate.score}
                                    </p>
                                </div>

                            </div>

                            <p className="mt-7 font-mono text-[10px] text-[#7C9A82]">
                                {certificate.certificateId}
                            </p>

                        </div>
                    </div>

                    {/* Modal Actions */}
                    <div className="mt-5 flex justify-end">

                        <button
                            type="button"
                            onClick={() =>
                                alert(
                                    "Certificate download will be connected to the backend later."
                                )
                            }
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-[#F2B84B]
                                px-5
                                py-2.5
                                text-sm
                                font-semibold
                                text-[#161F19]
                                transition
                                hover:bg-[#F2B84B]/90
                            "
                        >
                            <Download size={16} />
                            Download Certificate
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

/* =========================================================
   EMPTY STATE
========================================================= */

const EmptyState = () => {
    return (
        <section
            className="
                rounded-2xl
                border
                border-[#7C9A82]/20
                bg-[#1B241E]
                px-6
                py-16
                text-center
            "
        >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F2B84B]/10">
                <Award
                    size={30}
                    className="text-[#F2B84B]"
                />
            </div>

            <h2 className="mt-5 text-lg font-semibold text-[#F3EEDD]">
                No certificates found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-[#7C9A82]">
                Complete your enrolled courses to earn certificates that
                will appear here.
            </p>
        </section>
    );
};

export default Certificates;