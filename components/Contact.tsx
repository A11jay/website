'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Ready to discuss product strategy, AI implementations, or new opportunities?
                        Feel free to reach out through any of the channels below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                    {/* Email */}
                    <a
                        href="mailto:ranaajaysingh@outlook.com"
                        className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-accent/50 transition-all group"
                    >
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-sm text-muted-foreground break-all">ranaajaysingh@outlook.com</p>
                    </a>

                    {/* Phone */}
                    <a
                        href="tel:+919977799434"
                        className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-accent/50 transition-all group"
                    >
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <p className="text-sm text-muted-foreground">+91 99777 99434</p>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/ajay-singh-rana-shrm-cp-562a07176/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-accent/50 transition-all group"
                    >
                        <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Linkedin className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="font-semibold mb-2">LinkedIn</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <span>View Profile</span>
                            <ExternalLink className="h-3 w-3" />
                        </div>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
