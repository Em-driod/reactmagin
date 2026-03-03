import React from 'react';

const Contact = () => {
    return (
        <div className="animate-fadeIn max-w-2xl mx-auto">
            <section className="py-12">
                <h2 className="text-4xl font-bold mb-4 text-primary text-center">Get In Touch</h2>
                <p className="text-center text-text-muted mb-12 text-lg text-balance">Have questions or want to collaborate? Reach out to us through the form below.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    <div className="p-6 bg-card-bg border border-border rounded-xl text-center hover:border-primary transition-colors cursor-pointer">
                        <h4 className="font-bold mb-1">Email</h4>
                        <p className="text-text-muted">hello@example.com</p>
                    </div>
                    <div className="p-6 bg-card-bg border border-border rounded-xl text-center hover:border-primary transition-colors cursor-pointer">
                        <h4 className="font-bold mb-1">Social</h4>
                        <p className="text-text-muted">@mylove_project</p>
                    </div>
                </div>

                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="p-4 bg-card-bg border border-border rounded-lg outline-none focus:border-primary transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="p-4 bg-card-bg border border-border rounded-lg outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="p-4 bg-card-bg border border-border rounded-lg outline-none focus:border-primary transition-colors resize-none"
                    ></textarea>
                    <button type="submit" className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-all hover:-translate-y-1 shadow-lg shadow-primary/20 cursor-pointer">
                        Send Message
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
