import React, { useState } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    CalendarDays,
    GraduationCap,
    Pencil,
    Lock,
    Save,
    X,
    CheckCircle2,
} from "lucide-react";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [saved, setSaved] = useState(false);

    const [profile, setProfile] = useState({
        firstName: "Mansi",
        lastName: "Maurya",
        email: "student@example.com",
        phone: "+91 98765 43210",
        location: "Gonda, Uttar Pradesh",
        dateOfBirth: "10 June 2008",
        education: "BCA",
        bio: "Currently learning Full Stack Web Development and improving my programming skills.",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();

        setIsEditing(false);
        setSaved(true);

        setTimeout(() => {
            setSaved(false);
        }, 3000);
    };

    return (
        <div className="space-y-8">

            {/* =====================================================
                HEADER
            ====================================================== */}
            <section>
                <p className="mb-2 text-sm font-medium text-[#7C9A82]">
                    Account Settings
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-[#F3EEDD] sm:text-4xl">
                    My Profile
                </h1>

                <p className="mt-2 max-w-2xl text-sm text-[#7C9A82] sm:text-base">
                    Manage your personal information and student account
                    details.
                </p>
            </section>

            {/* =====================================================
                SUCCESS MESSAGE
            ====================================================== */}
            {saved && (
                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-[#7C9A82]/30
                        bg-[#7C9A82]/10
                        px-4
                        py-3
                    "
                >
                    <CheckCircle2
                        size={19}
                        className="text-[#7C9A82]"
                    />

                    <p className="text-sm font-medium text-[#7C9A82]">
                        Profile updated successfully.
                    </p>
                </div>
            )}

            {/* =====================================================
                PROFILE OVERVIEW
            ====================================================== */}
            <section
                className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#7C9A82]/20
                    bg-[#1B241E]
                "
            >
                <div className="h-32 bg-[#161F19]" />

                <div className="px-5 pb-6 sm:px-7">

                    <div className="-mt-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                        {/* Avatar */}
                        <div className="flex items-end gap-4">

                            <div
                                className="
                                    flex
                                    h-24
                                    w-24
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border-4
                                    border-[#1B241E]
                                    bg-[#F2B84B]
                                    text-3xl
                                    font-bold
                                    text-[#161F19]
                                "
                            >
                                M
                            </div>

                            <div className="pb-1">

                                <h2 className="text-xl font-bold text-[#F3EEDD]">
                                    {profile.firstName} {profile.lastName}
                                </h2>

                                <p className="mt-1 text-sm text-[#7C9A82]">
                                    Student / Learner
                                </p>

                            </div>

                        </div>

                        {/* Edit Button */}
                        <button
                            type="button"
                            onClick={() => setIsEditing(true)}
                            className="
                                flex
                                w-fit
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
                            <Pencil size={16} />
                            Edit Profile
                        </button>

                    </div>
                </div>
            </section>

            {/* =====================================================
                PROFILE INFORMATION
            ====================================================== */}
            <section
                className="
                    rounded-2xl
                    border
                    border-[#7C9A82]/20
                    bg-[#1B241E]
                    p-5
                    sm:p-6
                "
            >

                <div className="flex items-center justify-between gap-4">

                    <div className="flex items-center gap-3">

                        <div className="rounded-xl bg-[#F2B84B]/10 p-2.5">
                            <User
                                size={20}
                                className="text-[#F2B84B]"
                            />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[#F3EEDD]">
                                Personal Information
                            </h2>

                            <p className="mt-1 text-sm text-[#7C9A82]">
                                Your basic account information.
                            </p>
                        </div>

                    </div>

                    {!isEditing && (
                        <button
                            type="button"
                            onClick={() => setIsEditing(true)}
                            className="
                                hidden
                                items-center
                                gap-2
                                text-sm
                                font-medium
                                text-[#F2B84B]
                                sm:flex
                            "
                        >
                            <Pencil size={15} />
                            Edit
                        </button>
                    )}

                </div>

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">

                    <InfoItem
                        icon={User}
                        label="First Name"
                        value={profile.firstName}
                    />

                    <InfoItem
                        icon={User}
                        label="Last Name"
                        value={profile.lastName}
                    />

                    <InfoItem
                        icon={Mail}
                        label="Email Address"
                        value={profile.email}
                    />

                    <InfoItem
                        icon={Phone}
                        label="Phone Number"
                        value={profile.phone}
                    />

                    <InfoItem
                        icon={MapPin}
                        label="Location"
                        value={profile.location}
                    />

                    <InfoItem
                        icon={CalendarDays}
                        label="Date of Birth"
                        value={profile.dateOfBirth}
                    />

                    <InfoItem
                        icon={GraduationCap}
                        label="Education"
                        value={profile.education}
                    />

                    <InfoItem
                        icon={Lock}
                        label="Account Role"
                        value="Student"
                    />

                </div>

                {/* Bio */}
                <div className="mt-5">

                    <div className="mb-2 flex items-center gap-2">
                        <User
                            size={15}
                            className="text-[#7C9A82]"
                        />

                        <span className="text-xs font-medium text-[#7C9A82]">
                            About Me
                        </span>
                    </div>

                    <div className="rounded-xl bg-[#161F19] p-4">
                        <p className="text-sm leading-6 text-[#F3EEDD]">
                            {profile.bio}
                        </p>
                    </div>

                </div>
            </section>

            {/* =====================================================
                LEARNING SUMMARY
            ====================================================== */}
            <section
                className="
                    rounded-2xl
                    border
                    border-[#7C9A82]/20
                    bg-[#1B241E]
                    p-5
                    sm:p-6
                "
            >

                <div className="flex items-center gap-3">

                    <div className="rounded-xl bg-[#F2B84B]/10 p-2.5">
                        <GraduationCap
                            size={20}
                            className="text-[#F2B84B]"
                        />
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-[#F3EEDD]">
                            Learning Summary
                        </h2>

                        <p className="mt-1 text-sm text-[#7C9A82]">
                            Your activity on Shiyora.
                        </p>
                    </div>

                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">

                    <SummaryCard
                        value="06"
                        label="Enrolled Courses"
                    />

                    <SummaryCard
                        value="02"
                        label="Completed Courses"
                    />

                    <SummaryCard
                        value="80"
                        label="Lessons Completed"
                    />

                    <SummaryCard
                        value="42h"
                        label="Learning Time"
                    />

                </div>
            </section>

            {/* =====================================================
                ACCOUNT SECURITY
            ====================================================== */}
            <section
                className="
                    rounded-2xl
                    border
                    border-[#7C9A82]/20
                    bg-[#1B241E]
                    p-5
                    sm:p-6
                "
            >

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">

                        <div className="rounded-xl bg-[#F2B84B]/10 p-3">
                            <Lock
                                size={21}
                                className="text-[#F2B84B]"
                            />
                        </div>

                        <div>
                            <h2 className="text-base font-semibold text-[#F3EEDD]">
                                Account Security
                            </h2>

                            <p className="mt-1 text-sm text-[#7C9A82]">
                                Keep your account secure by regularly updating
                                your password.
                            </p>
                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            alert(
                                "Password change functionality will be connected to the backend later."
                            )
                        }
                        className="
                            flex
                            w-fit
                            items-center
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
                        <Lock size={15} />
                        Change Password
                    </button>

                </div>
            </section>

            {/* =====================================================
                EDIT PROFILE MODAL
            ====================================================== */}
            {isEditing && (
                <EditProfileModal
                    profile={profile}
                    onChange={handleChange}
                    onSave={handleSave}
                    onClose={() => setIsEditing(false)}
                />
            )}
        </div>
    );
};

/* =========================================================
   INFO ITEM
========================================================= */

const InfoItem = ({
    icon: Icon,
    label,
    value,
}) => {
    return (
        <div className="rounded-xl bg-[#161F19] p-4">

            <div className="flex items-center gap-2">

                <Icon
                    size={15}
                    className="text-[#7C9A82]"
                />

                <p className="text-xs text-[#7C9A82]">
                    {label}
                </p>

            </div>

            <p className="mt-2 break-words text-sm font-medium text-[#F3EEDD]">
                {value}
            </p>

        </div>
    );
};

/* =========================================================
   SUMMARY CARD
========================================================= */

const SummaryCard = ({
    value,
    label,
}) => {
    return (
        <div className="rounded-xl bg-[#161F19] p-4">

            <p className="text-2xl font-bold text-[#F3EEDD]">
                {value}
            </p>

            <p className="mt-1 text-xs leading-5 text-[#7C9A82]">
                {label}
            </p>

        </div>
    );
};

/* =========================================================
   EDIT PROFILE MODAL
========================================================= */

const EditProfileModal = ({
    profile,
    onChange,
    onSave,
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
                overflow-y-auto
                bg-black/70
                p-4
            "
            onClick={onClose}
        >
            <div
                className="
                    my-8
                    w-full
                    max-w-2xl
                    rounded-2xl
                    border
                    border-[#7C9A82]/20
                    bg-[#1B241E]
                    shadow-2xl
                "
                onClick={(e) => e.stopPropagation()}
            >

                {/* Modal Header */}
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-[#7C9A82]/20
                        p-5
                    "
                >
                    <div>
                        <h2 className="text-lg font-semibold text-[#F3EEDD]">
                            Edit Profile
                        </h2>

                        <p className="mt-1 text-sm text-[#7C9A82]">
                            Update your personal information.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            rounded-lg
                            p-2
                            text-[#7C9A82]
                            transition
                            hover:bg-[#161F19]
                            hover:text-[#F3EEDD]
                        "
                    >
                        <X size={19} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={onSave} className="p-5 sm:p-6">

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                        <FormInput
                            label="First Name"
                            name="firstName"
                            value={profile.firstName}
                            onChange={onChange}
                        />

                        <FormInput
                            label="Last Name"
                            name="lastName"
                            value={profile.lastName}
                            onChange={onChange}
                        />

                        <FormInput
                            label="Email Address"
                            name="email"
                            type="email"
                            value={profile.email}
                            onChange={onChange}
                        />

                        <FormInput
                            label="Phone Number"
                            name="phone"
                            value={profile.phone}
                            onChange={onChange}
                        />

                        <FormInput
                            label="Location"
                            name="location"
                            value={profile.location}
                            onChange={onChange}
                        />

                        <FormInput
                            label="Date of Birth"
                            name="dateOfBirth"
                            value={profile.dateOfBirth}
                            onChange={onChange}
                        />

                        <FormInput
                            label="Education"
                            name="education"
                            value={profile.education}
                            onChange={onChange}
                        />

                    </div>

                    {/* Bio */}
                    <div className="mt-5">

                        <label
                            htmlFor="bio"
                            className="mb-2 block text-xs font-medium text-[#F3EEDD]"
                        >
                            About Me
                        </label>

                        <textarea
                            id="bio"
                            name="bio"
                            rows="4"
                            value={profile.bio}
                            onChange={onChange}
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

                    {/* Actions */}
                    <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                rounded-xl
                                border
                                border-[#7C9A82]/30
                                bg-[#161F19]
                                px-5
                                py-2.5
                                text-sm
                                font-medium
                                text-[#F3EEDD]
                                transition
                                hover:border-[#7C9A82]/50
                            "
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="
                                flex
                                items-center
                                justify-center
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
                            <Save size={16} />
                            Save Changes
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
};

/* =========================================================
   FORM INPUT
========================================================= */

const FormInput = ({
    label,
    name,
    type = "text",
    value,
    onChange,
}) => {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-xs font-medium text-[#F3EEDD]"
            >
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
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
    );
};

export default Profile;