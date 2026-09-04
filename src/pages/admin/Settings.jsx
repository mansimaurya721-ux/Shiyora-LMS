import React, { useState } from "react";
import {
    Settings as SettingsIcon,
    Building2,
    Bell,
    ShieldCheck,
    CreditCard,
    Save,
} from "lucide-react";

// ============================================================
// TOGGLE SWITCH
// ============================================================

function Toggle({ checked, onChange, label, description }) {
    return (
        <div className="flex items-center justify-between gap-4 py-4">
            <div>
                <p className="text-sm font-semibold text-[#303B32]">{label}</p>
                {description && (
                    <p className="mt-0.5 text-xs text-[#7C817B]">{description}</p>
                )}
            </div>

            <button
                type="button"
                role="switch"
                aria-checked={checked}
                aria-label={label}
                onClick={() => onChange(!checked)}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B84B] ${checked ? "bg-[#F2B84B]" : "bg-[#E4DED4]"
                    }`}
            >
                <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.2)] transition-transform duration-300 ${checked ? "translate-x-[22px]" : "translate-x-0.5"
                        }`}
                />
            </button>
        </div>
    );
}

const FONT_IMPORTS =
    "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');";

const Settings = () => {
    const [activeTab, setActiveTab] = useState("organization");

    // ------------------------------------------------------------
    // ORGANIZATION FORM STATE
    // ------------------------------------------------------------

    const [orgName, setOrgName] = useState("Shiyora Academy");
    const [orgEmail, setOrgEmail] = useState("contact@shiyora.com");
    const [orgPhone, setOrgPhone] = useState("+91 98765 43210");
    const [orgTimezone, setOrgTimezone] = useState("Asia/Kolkata");

    // ------------------------------------------------------------
    // NOTIFICATION STATE
    // ------------------------------------------------------------

    const [notifyEnrollments, setNotifyEnrollments] = useState(true);
    const [notifyCompletions, setNotifyCompletions] = useState(true);
    const [notifyBilling, setNotifyBilling] = useState(true);
    const [notifyMarketing, setNotifyMarketing] = useState(false);
    const [weeklyDigest, setWeeklyDigest] = useState(true);

    // ------------------------------------------------------------
    // SECURITY STATE
    // ------------------------------------------------------------

    const [twoFactor, setTwoFactor] = useState(false);
    const [loginAlerts, setLoginAlerts] = useState(true);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // ------------------------------------------------------------
    // TABS
    // ------------------------------------------------------------

    const tabs = [
        { id: "organization", label: "Organization", icon: Building2 },
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "security", label: "Security", icon: ShieldCheck },
        { id: "billing", label: "Billing", icon: CreditCard },
    ];

    const handleSave = (section) => {
        alert(`${section} settings saved (this will be connected to the API later).`);
    };

    // ============================================================
    // RETURN
    // ============================================================

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#161F19] px-4 py-6 text-[#F3EEDD] sm:px-6 lg:px-8">
            <style>{FONT_IMPORTS}</style>

            {/* =====================================================
                BACKGROUND GLOW
            ====================================================== */}

            <div className="pointer-events-none fixed -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#F2B84B]/[0.05] blur-[130px]" />
            <div className="pointer-events-none fixed -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#7C9A82]/[0.07] blur-[140px]" />

            <div className="relative z-10">

                {/* =====================================================
                    HEADER
                ====================================================== */}

                <div className="mb-7 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 text-[#F2B84B]">
                        <SettingsIcon size={22} />
                    </div>

                    <div>
                        <p className="mb-1 font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F2B84B]">
                            Administration
                        </p>
                        <h1 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-[#F3EEDD] sm:text-3xl">
                            Settings
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr]">

                    {/* =================================================
                        TAB NAVIGATION
                    ================================================= */}

                    <nav className="h-fit rounded-2xl border border-[#F3EEDD]/10 bg-[#1B241E] p-2 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B84B] ${isActive
                                        ? "bg-[#F2B84B]/10 text-[#F2B84B]"
                                        : "text-[#F3EEDD]/60 hover:bg-[#F3EEDD]/5 hover:text-[#F3EEDD]"
                                        }`}
                                >
                                    <tab.icon size={17} />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </nav>

                    {/* =================================================
                        PANEL
                    ================================================= */}

                    <section className="rounded-2xl border border-[#F3EEDD]/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]">

                        {/* ---------------- ORGANIZATION ---------------- */}
                        {activeTab === "organization" && (
                            <div className="p-6 sm:p-8">
                                <h2 className="font-['Space_Grotesk'] text-lg font-bold text-[#303B32]">
                                    Organization Details
                                </h2>
                                <p className="mt-1 text-sm text-[#7C817B]">
                                    Basic information about your organization.
                                </p>

                                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#7C817B]">
                                            Organization Name
                                        </label>
                                        <input
                                            type="text"
                                            value={orgName}
                                            onChange={(e) => setOrgName(e.target.value)}
                                            className="w-full rounded-xl border border-[#E4DED4] bg-[#FBF9F5] px-4 py-3 text-sm text-[#303B32] outline-none transition focus:border-[#F2B84B]/50 focus:ring-2 focus:ring-[#F2B84B]/15"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#7C817B]">
                                            Contact Email
                                        </label>
                                        <input
                                            type="email"
                                            value={orgEmail}
                                            onChange={(e) => setOrgEmail(e.target.value)}
                                            className="w-full rounded-xl border border-[#E4DED4] bg-[#FBF9F5] px-4 py-3 text-sm text-[#303B32] outline-none transition focus:border-[#F2B84B]/50 focus:ring-2 focus:ring-[#F2B84B]/15"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#7C817B]">
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            value={orgPhone}
                                            onChange={(e) => setOrgPhone(e.target.value)}
                                            className="w-full rounded-xl border border-[#E4DED4] bg-[#FBF9F5] px-4 py-3 text-sm text-[#303B32] outline-none transition focus:border-[#F2B84B]/50 focus:ring-2 focus:ring-[#F2B84B]/15"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#7C817B]">
                                            Timezone
                                        </label>
                                        <select
                                            value={orgTimezone}
                                            onChange={(e) => setOrgTimezone(e.target.value)}
                                            className="w-full rounded-xl border border-[#E4DED4] bg-[#FBF9F5] px-4 py-3 text-sm text-[#303B32] outline-none focus:border-[#F2B84B]/50"
                                        >
                                            <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                                            <option value="Asia/Dubai">Asia/Dubai (GST)</option>
                                            <option value="Europe/London">Europe/London (GMT)</option>
                                            <option value="America/New_York">America/New York (EST)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-end border-t border-[#E7DED5] pt-6">
                                    <button
                                        type="button"
                                        onClick={() => handleSave("Organization")}
                                        className="inline-flex items-center gap-2 rounded-xl bg-[#F2B84B] px-6 py-3 font-['Space_Grotesk'] text-sm font-semibold text-[#161F19] shadow-[0_10px_30px_rgba(242,184,75,0.15)] transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:bg-[#F7C968] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B84B]"
                                    >
                                        <Save size={16} />
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* ---------------- NOTIFICATIONS ---------------- */}
                        {activeTab === "notifications" && (
                            <div className="p-6 sm:p-8">
                                <h2 className="font-['Space_Grotesk'] text-lg font-bold text-[#303B32]">
                                    Notification Preferences
                                </h2>
                                <p className="mt-1 text-sm text-[#7C817B]">
                                    Choose what you want to be notified about.
                                </p>

                                <div className="mt-4 divide-y divide-[#F1ECE5]">
                                    <Toggle
                                        checked={notifyEnrollments}
                                        onChange={setNotifyEnrollments}
                                        label="New Enrollments"
                                        description="Get notified whenever a student enrolls in a course."
                                    />
                                    <Toggle
                                        checked={notifyCompletions}
                                        onChange={setNotifyCompletions}
                                        label="Course Completions"
                                        description="Get notified when a student completes a course."
                                    />
                                    <Toggle
                                        checked={notifyBilling}
                                        onChange={setNotifyBilling}
                                        label="Billing Alerts"
                                        description="Get notified about invoices, renewals and payment issues."
                                    />
                                    <Toggle
                                        checked={weeklyDigest}
                                        onChange={setWeeklyDigest}
                                        label="Weekly Digest"
                                        description="A weekly summary of activity across your organization."
                                    />
                                    <Toggle
                                        checked={notifyMarketing}
                                        onChange={setNotifyMarketing}
                                        label="Product Updates"
                                        description="Occasional news about new Shiyora features."
                                    />
                                </div>

                                <div className="mt-6 flex justify-end border-t border-[#E7DED5] pt-6">
                                    <button
                                        type="button"
                                        onClick={() => handleSave("Notification")}
                                        className="inline-flex items-center gap-2 rounded-xl bg-[#F2B84B] px-6 py-3 font-['Space_Grotesk'] text-sm font-semibold text-[#161F19] shadow-[0_10px_30px_rgba(242,184,75,0.15)] transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:bg-[#F7C968] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B84B]"
                                    >
                                        <Save size={16} />
                                        Save Preferences
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* ---------------- SECURITY ---------------- */}
                        {activeTab === "security" && (
                            <div className="p-6 sm:p-8">
                                <h2 className="font-['Space_Grotesk'] text-lg font-bold text-[#303B32]">
                                    Security
                                </h2>
                                <p className="mt-1 text-sm text-[#7C817B]">
                                    Manage your password and account protection.
                                </p>

                                <div className="mt-6 grid grid-cols-1 gap-5">
                                    <div>
                                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#7C817B]">
                                            Current Password
                                        </label>
                                        <input
                                            type="password"
                                            value={currentPassword}
                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full rounded-xl border border-[#E4DED4] bg-[#FBF9F5] px-4 py-3 text-sm text-[#303B32] outline-none transition placeholder:text-[#B8B2A7] focus:border-[#F2B84B]/50 focus:ring-2 focus:ring-[#F2B84B]/15"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <div>
                                            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#7C817B]">
                                                New Password
                                            </label>
                                            <input
                                                type="password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                placeholder="••••••••"
                                                className="w-full rounded-xl border border-[#E4DED4] bg-[#FBF9F5] px-4 py-3 text-sm text-[#303B32] outline-none transition placeholder:text-[#B8B2A7] focus:border-[#F2B84B]/50 focus:ring-2 focus:ring-[#F2B84B]/15"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#7C817B]">
                                                Confirm New Password
                                            </label>
                                            <input
                                                type="password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                placeholder="••••••••"
                                                className="w-full rounded-xl border border-[#E4DED4] bg-[#FBF9F5] px-4 py-3 text-sm text-[#303B32] outline-none transition placeholder:text-[#B8B2A7] focus:border-[#F2B84B]/50 focus:ring-2 focus:ring-[#F2B84B]/15"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2 divide-y divide-[#F1ECE5] border-t border-[#F1ECE5]">
                                    <Toggle
                                        checked={twoFactor}
                                        onChange={setTwoFactor}
                                        label="Two-Factor Authentication"
                                        description="Require a verification code in addition to your password."
                                    />
                                    <Toggle
                                        checked={loginAlerts}
                                        onChange={setLoginAlerts}
                                        label="New Login Alerts"
                                        description="Get an email when your account is signed in from a new device."
                                    />
                                </div>

                                <div className="mt-6 flex justify-end border-t border-[#E7DED5] pt-6">
                                    <button
                                        type="button"
                                        onClick={() => handleSave("Security")}
                                        className="inline-flex items-center gap-2 rounded-xl bg-[#F2B84B] px-6 py-3 font-['Space_Grotesk'] text-sm font-semibold text-[#161F19] shadow-[0_10px_30px_rgba(242,184,75,0.15)] transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:bg-[#F7C968] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B84B]"
                                    >
                                        <Save size={16} />
                                        Update Security
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* ---------------- BILLING ---------------- */}
                        {activeTab === "billing" && (
                            <div className="p-6 sm:p-8">
                                <h2 className="font-['Space_Grotesk'] text-lg font-bold text-[#303B32]">
                                    Billing
                                </h2>
                                <p className="mt-1 text-sm text-[#7C817B]">
                                    Your current plan and payment details.
                                </p>

                                <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-[#E4DED4] bg-[#FBF9F5] p-5 sm:flex-row sm:items-center">
                                    <div>
                                        <span className="inline-flex rounded-full bg-[#FFF9E9] px-3 py-1 text-xs font-semibold text-[#8C7134]">
                                            Professional Plan
                                        </span>
                                        <p className="mt-2 text-sm text-[#536058]">
                                            ₹5,999 / month · renews on 14 Oct 2026
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        className="rounded-xl border border-[#E4DED4] bg-white px-4 py-2.5 text-sm font-semibold text-[#303B32] transition hover:border-[#F2B84B]/40 hover:text-[#F2B84B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B84B]"
                                    >
                                        Manage Plan
                                    </button>
                                </div>

                                <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#E4DED4] p-5">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F1ECE5] text-[#536058]">
                                        <CreditCard size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-[#303B32]">
                                            Visa ending in 4242
                                        </p>
                                        <p className="text-xs text-[#7C817B]">Expires 08/28</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>
                </div>

                {/* FOOTER NOTE */}
                <div className="mt-5 flex items-center justify-between">
                    <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-wider text-[#F3EEDD]/25">
                        Shiyora Administration
                    </p>
                    <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-wider text-[#F3EEDD]/25">
                        Account Settings
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Settings;