import React, { useState } from "react";
import {
    Settings as SettingsIcon,
    User,
    Bell,
    Shield,
    Save,
} from "lucide-react";

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [emailAlerts, setEmailAlerts] = useState(true);

    const handleSave = () => {
        alert("Settings saved successfully!");
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-6 lg:p-8">

            {/* Header */}

            <div className="mb-8">

                <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <SettingsIcon size={23} />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
                            Settings
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            Manage your SuperAdmin account and platform preferences.
                        </p>
                    </div>

                </div>

            </div>

            {/* Account Settings */}

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

                    <div className="mb-6 flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <User size={20} />
                        </div>

                        <div>
                            <h2 className="font-bold text-slate-800">
                                Account Information
                            </h2>

                            <p className="text-sm text-slate-400">
                                Manage your account details
                            </p>
                        </div>

                    </div>

                    <div className="space-y-4">

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-600">
                                Name
                            </label>

                            <input
                                type="text"
                                defaultValue="SuperAdmin"
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-200
                                    px-4
                                    py-3
                                    text-sm
                                    outline-none
                                    transition
                                    focus:border-indigo-500
                                    focus:ring-2
                                    focus:ring-indigo-100
                                "
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-600">
                                Email
                            </label>

                            <input
                                type="email"
                                defaultValue="admin@shiyora.com"
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-200
                                    px-4
                                    py-3
                                    text-sm
                                    outline-none
                                    transition
                                    focus:border-indigo-500
                                    focus:ring-2
                                    focus:ring-indigo-100
                                "
                            />
                        </div>

                    </div>

                </div>

                {/* Notifications */}

                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

                    <div className="mb-6 flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <Bell size={20} />
                        </div>

                        <div>
                            <h2 className="font-bold text-slate-800">
                                Notifications
                            </h2>

                            <p className="text-sm text-slate-400">
                                Manage notification preferences
                            </p>
                        </div>

                    </div>

                    <div className="space-y-5">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="font-medium text-slate-700">
                                    Platform Notifications
                                </p>

                                <p className="text-xs text-slate-400">
                                    Receive important platform updates
                                </p>
                            </div>

                            <button
                                onClick={() =>
                                    setNotifications(!notifications)
                                }
                                className={`h-6 w-11 rounded-full p-1 transition ${notifications
                                    ? "bg-indigo-600"
                                    : "bg-slate-300"
                                    }`}
                            >
                                <div
                                    className={`h-4 w-4 rounded-full bg-white transition ${notifications
                                        ? "translate-x-5"
                                        : "translate-x-0"
                                        }`}
                                />
                            </button>

                        </div>

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="font-medium text-slate-700">
                                    Email Alerts
                                </p>

                                <p className="text-xs text-slate-400">
                                    Receive important alerts through email
                                </p>
                            </div>

                            <button
                                onClick={() =>
                                    setEmailAlerts(!emailAlerts)
                                }
                                className={`h-6 w-11 rounded-full p-1 transition ${emailAlerts
                                    ? "bg-indigo-600"
                                    : "bg-slate-300"
                                    }`}
                            >
                                <div
                                    className={`h-4 w-4 rounded-full bg-white transition ${emailAlerts
                                        ? "translate-x-5"
                                        : "translate-x-0"
                                        }`}
                                />
                            </button>

                        </div>

                    </div>

                </div>

                {/* Security */}

                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <Shield size={20} />
                        </div>

                        <div>
                            <h2 className="font-bold text-slate-800">
                                Security
                            </h2>

                            <p className="text-sm text-slate-400">
                                Account security settings
                            </p>
                        </div>

                    </div>

                    <button
                        className="
                            mt-6
                            rounded-xl
                            border
                            border-slate-200
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-slate-600
                            transition
                            hover:bg-slate-50
                        "
                    >
                        Change Password
                    </button>

                </div>

            </div>

            {/* Save */}

            <div className="mt-6 flex justify-end">

                <button
                    onClick={handleSave}
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-indigo-600
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        shadow-sm
                        transition
                        hover:bg-indigo-700
                    "
                >
                    <Save size={18} />
                    Save Settings
                </button>

            </div>

        </div>
    );
};

export default Settings;