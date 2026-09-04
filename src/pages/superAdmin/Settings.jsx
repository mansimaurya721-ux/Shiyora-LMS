import React, { useState } from "react";
import {
    Settings as SettingsIcon,
    User,
    Bell,
    Shield,
    Save,
    CheckCircle,
} from "lucide-react";

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [emailAlerts, setEmailAlerts] = useState(true);

    const handleSave = () => {
        alert("Settings saved successfully!");
    };

    return (
        <main
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#161F19]
                px-4
                py-6
                text-[#F3EEDD]
                sm:px-6
                lg:px-8
            "
        >

            {/* =====================================================
                BACKGROUND GLOW
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    fixed
                    -left-40
                    -top-40
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#F2B84B]/[0.05]
                    blur-[130px]
                "
            />

            <div
                className="
                    pointer-events-none
                    fixed
                    -right-40
                    bottom-0
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#7C9A82]/[0.07]
                    blur-[140px]
                "
            />

            <div className="relative z-10">

                {/* =================================================
                    HEADER
                ================================================== */}

                <div className="mb-8">

                    <p
                        className="
                            mb-1
                            font-['JetBrains_Mono']
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-[#F2B84B]
                        "
                    >
                        Administration
                    </p>

                    <div className="flex items-center gap-4">

                        <div
                            className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-[#F2B84B]/20
                                bg-[#F2B84B]/10
                                text-[#F2B84B]
                            "
                        >
                            <SettingsIcon size={23} />
                        </div>

                        <div>

                            <h1
                                className="
                                    font-['Space_Grotesk']
                                    text-3xl
                                    font-bold
                                    tracking-tight
                                    text-[#F3EEDD]
                                    md:text-4xl
                                "
                            >
                                Settings
                            </h1>

                            <p
                                className="
                                    mt-1
                                    text-sm
                                    text-[#F3EEDD]/50
                                "
                            >
                                Manage your SuperAdmin account and platform
                                preferences.
                            </p>

                        </div>

                    </div>

                </div>

                {/* =================================================
                    SETTINGS GRID
                ================================================== */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-6
                        xl:grid-cols-2
                    "
                >

                    {/* =================================================
                        ACCOUNT
                    ================================================== */}

                    <section
                        className="
                            rounded-2xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-6
                            shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                            transition-all
                            duration-300
                            hover:border-[#F2B84B]/20
                        "
                    >

                        <div className="mb-6 flex items-center gap-3">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#F2B84B]/20
                                    bg-[#F2B84B]/10
                                    text-[#F2B84B]
                                "
                            >
                                <User size={20} />
                            </div>

                            <div>

                                <h2
                                    className="
                                        font-['Space_Grotesk']
                                        font-semibold
                                        text-[#F3EEDD]
                                    "
                                >
                                    Account Information
                                </h2>

                                <p className="text-xs text-[#F3EEDD]/35">
                                    Manage your account details
                                </p>

                            </div>

                        </div>

                        <div className="space-y-5">

                            <div>

                                <label
                                    className="
                                        mb-2
                                        block
                                        font-['JetBrains_Mono']
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-wider
                                        text-[#F3EEDD]/45
                                    "
                                >
                                    Name
                                </label>

                                <input
                                    type="text"
                                    defaultValue="SuperAdmin"
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-[#F3EEDD]/10
                                        bg-[#141C17]
                                        px-4
                                        py-3
                                        text-sm
                                        text-[#F3EEDD]
                                        outline-none
                                        transition
                                        placeholder:text-[#F3EEDD]/25
                                        focus:border-[#F2B84B]/40
                                        focus:ring-2
                                        focus:ring-[#F2B84B]/10
                                    "
                                />

                            </div>

                            <div>

                                <label
                                    className="
                                        mb-2
                                        block
                                        font-['JetBrains_Mono']
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-wider
                                        text-[#F3EEDD]/45
                                    "
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    defaultValue="admin@shiyora.com"
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-[#F3EEDD]/10
                                        bg-[#141C17]
                                        px-4
                                        py-3
                                        text-sm
                                        text-[#F3EEDD]
                                        outline-none
                                        transition
                                        focus:border-[#F2B84B]/40
                                        focus:ring-2
                                        focus:ring-[#F2B84B]/10
                                    "
                                />

                            </div>

                        </div>

                    </section>

                    {/* =================================================
                        NOTIFICATIONS
                    ================================================== */}

                    <section
                        className="
                            rounded-2xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-6
                            shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                            transition-all
                            duration-300
                            hover:border-[#7C9A82]/30
                        "
                    >

                        <div className="mb-6 flex items-center gap-3">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#7C9A82]/20
                                    bg-[#7C9A82]/10
                                    text-[#7C9A82]
                                "
                            >
                                <Bell size={20} />
                            </div>

                            <div>

                                <h2
                                    className="
                                        font-['Space_Grotesk']
                                        font-semibold
                                        text-[#F3EEDD]
                                    "
                                >
                                    Notifications
                                </h2>

                                <p className="text-xs text-[#F3EEDD]/35">
                                    Manage notification preferences
                                </p>

                            </div>

                        </div>

                        <div className="space-y-6">

                            {/* PLATFORM NOTIFICATIONS */}

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    gap-5
                                "
                            >

                                <div>

                                    <p className="text-sm font-medium text-[#F3EEDD]/80">
                                        Platform Notifications
                                    </p>

                                    <p className="mt-1 text-xs text-[#F3EEDD]/35">
                                        Receive important platform updates
                                    </p>

                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setNotifications(!notifications)
                                    }
                                    className={`
                                        h-6
                                        w-11
                                        shrink-0
                                        rounded-full
                                        p-1
                                        transition
                                        ${notifications
                                            ? "bg-[#7C9A82]"
                                            : "bg-[#F3EEDD]/20"
                                        }
                                    `}
                                >
                                    <div
                                        className={`
                                            h-4
                                            w-4
                                            rounded-full
                                            bg-[#F3EEDD]
                                            transition
                                            ${notifications
                                                ? "translate-x-5"
                                                : "translate-x-0"
                                            }
                                        `}
                                    />
                                </button>

                            </div>

                            {/* EMAIL ALERTS */}

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    gap-5
                                "
                            >

                                <div>

                                    <p className="text-sm font-medium text-[#F3EEDD]/80">
                                        Email Alerts
                                    </p>

                                    <p className="mt-1 text-xs text-[#F3EEDD]/35">
                                        Receive important alerts through email
                                    </p>

                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setEmailAlerts(!emailAlerts)
                                    }
                                    className={`
                                        h-6
                                        w-11
                                        shrink-0
                                        rounded-full
                                        p-1
                                        transition
                                        ${emailAlerts
                                            ? "bg-[#7C9A82]"
                                            : "bg-[#F3EEDD]/20"
                                        }
                                    `}
                                >
                                    <div
                                        className={`
                                            h-4
                                            w-4
                                            rounded-full
                                            bg-[#F3EEDD]
                                            transition
                                            ${emailAlerts
                                                ? "translate-x-5"
                                                : "translate-x-0"
                                            }
                                        `}
                                    />
                                </button>

                            </div>

                        </div>

                    </section>

                    {/* =================================================
                        SECURITY
                    ================================================== */}

                    <section
                        className="
                            rounded-2xl
                            border
                            border-[#F3EEDD]/10
                            bg-[#1B241E]
                            p-6
                            shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                            transition-all
                            duration-300
                            hover:border-[#F2B84B]/20
                        "
                    >

                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#F2B84B]/20
                                    bg-[#F2B84B]/10
                                    text-[#F2B84B]
                                "
                            >
                                <Shield size={20} />
                            </div>

                            <div>

                                <h2
                                    className="
                                        font-['Space_Grotesk']
                                        font-semibold
                                        text-[#F3EEDD]
                                    "
                                >
                                    Security
                                </h2>

                                <p className="text-xs text-[#F3EEDD]/35">
                                    Account security settings
                                </p>

                            </div>

                        </div>

                        <button
                            type="button"
                            className="
                                mt-6
                                rounded-xl
                                border
                                border-[#F3EEDD]/10
                                bg-[#141C17]
                                px-4
                                py-3
                                font-['Space_Grotesk']
                                text-sm
                                font-medium
                                text-[#F3EEDD]/70
                                transition-all
                                hover:border-[#F2B84B]/30
                                hover:bg-[#F2B84B]/5
                                hover:text-[#F2B84B]
                            "
                        >
                            Change Password
                        </button>

                    </section>

                    {/* =================================================
                        SYSTEM STATUS
                    ================================================== */}

                    <section
                        className="
                            rounded-2xl
                            border
                            border-[#7C9A82]/20
                            bg-[#1B241E]
                            p-6
                            shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                        "
                    >

                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#7C9A82]/20
                                    bg-[#7C9A82]/10
                                    text-[#7C9A82]
                                "
                            >
                                <CheckCircle size={20} />
                            </div>

                            <div>

                                <h2
                                    className="
                                        font-['Space_Grotesk']
                                        font-semibold
                                        text-[#F3EEDD]
                                    "
                                >
                                    System Status
                                </h2>

                                <p className="text-xs text-[#F3EEDD]/35">
                                    Current Shiyora platform status
                                </p>

                            </div>

                        </div>

                        <div className="mt-6 flex items-center gap-3">

                            <span
                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-[#7C9A82]
                                    shadow-[0_0_10px_rgba(124,154,130,0.5)]
                                "
                            />

                            <span className="text-sm text-[#F3EEDD]/70">
                                All systems operational
                            </span>

                        </div>

                    </section>

                </div>

                {/* =================================================
                    SAVE BUTTON
                ================================================== */}

                <div className="mt-6 flex justify-end">

                    <button
                        type="button"
                        onClick={handleSave}
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-[#F2B84B]/30
                            bg-[#F2B84B]
                            px-6
                            py-3
                            font-['Space_Grotesk']
                            text-sm
                            font-semibold
                            text-[#161F19]
                            shadow-[0_10px_30px_rgba(242,184,75,0.12)]
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-[#F7C968]
                            hover:shadow-[0_12px_35px_rgba(242,184,75,0.18)]
                        "
                    >
                        <Save size={18} />
                        Save Settings
                    </button>

                </div>

                {/* =================================================
                    FOOTER
                ================================================== */}

                <div className="mt-5 flex items-center justify-between">

                    <p
                        className="
                            font-['JetBrains_Mono']
                            text-[9px]
                            uppercase
                            tracking-wider
                            text-[#F3EEDD]/25
                        "
                    >
                        Shiyora Administration
                    </p>

                    <p
                        className="
                            font-['JetBrains_Mono']
                            text-[9px]
                            uppercase
                            tracking-wider
                            text-[#F3EEDD]/25
                        "
                    >
                        System Configuration
                    </p>

                </div>

            </div>

        </main>
    );
};

export default Settings;