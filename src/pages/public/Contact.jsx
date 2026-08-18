function Contact() {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <p className="text-indigo-600 font-semibold uppercase tracking-wider">
                        Contact LearnSphere
                    </p>

                    <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
                        Let's Start a Conversation
                    </h1>

                    <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
                        Have a question, suggestion, or need help with LearnSphere?
                        Our team would love to hear from you.
                    </p>

                </div>
            </section>

            {/* Contact Section */}
            <section className="pb-20">
                <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-8">

                    {/* Contact Information */}
                    <div className="lg:col-span-2 bg-indigo-600 rounded-3xl p-8 md:p-10 text-white">

                        <p className="text-indigo-200 font-semibold uppercase text-sm">
                            Get in touch
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            We're here to help.
                        </h2>

                        <p className="mt-4 text-indigo-100 leading-relaxed">
                            Whether you're an organization, teacher, student, or simply
                            interested in LearnSphere, feel free to reach out.
                        </p>

                        {/* Contact Details */}
                        <div className="mt-10 space-y-7">

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-xl">
                                    ✉️
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        Email
                                    </p>

                                    <p className="mt-1 text-indigo-100">
                                        support@learnsphere.com
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-xl">
                                    📞
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        Phone
                                    </p>

                                    <p className="mt-1 text-indigo-100">
                                        +91 00000 00000
                                    </p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-xl">
                                    📍
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        Location
                                    </p>

                                    <p className="mt-1 text-indigo-100">
                                        India
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Small Note */}
                        <div className="mt-12 pt-7 border-t border-white/20">
                            <p className="text-sm text-indigo-100">
                                We aim to respond to all general inquiries as soon as
                                possible.
                            </p>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3 bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-10">

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                Send us a message
                            </h2>

                            <p className="mt-2 text-gray-500">
                                Fill in the details below and we'll get back to you.
                            </p>
                        </div>

                        <form className="mt-8 space-y-6">

                            {/* Name + Email */}
                            <div className="grid md:grid-cols-2 gap-5">

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Full Name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                    />
                                </div>

                            </div>

                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    rows="6"
                                    placeholder="Write your message here..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                ></textarea>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-indigo-700 active:scale-[0.98] transition"
                            >
                                Send Message →
                            </button>

                        </form>

                    </div>

                </div>
            </section>

            {/* FAQ / Help Section */}
            <section className="bg-white border-t border-gray-200 py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <p className="text-indigo-600 font-semibold uppercase tracking-wider">
                        Need Help?
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-gray-900">
                        We're building a better learning experience.
                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                        LearnSphere is designed to make learning management easier for
                        organizations, teachers, and students.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">

                        <a
                            href="/about"
                            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
                        >
                            Learn More About Us
                        </a>

                        <a
                            href="/subscription"
                            className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                        >
                            View Plans
                        </a>

                    </div>

                </div>
            </section>

        </div>
    );
}

export default Contact;