'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 text-center bg-background">
            {/* Ambient Background Effect */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f633,transparent)]" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background blur-3xl opacity-40" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-5xl space-y-8 relative z-10"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-sm hover:bg-primary/20 transition-colors"
                >
                    <Sparkles className="h-4 w-4" />
                    <span>Open to Industry Leadership Roles</span>
                </motion.div>

                {/* Main Heading */}
                <div className="space-y-2">
                    <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl text-foreground">
                        Ajay Singh Rana
                    </h1>

                    {/* Gradient Text with padding to prevent clipping */}
                    <div className="pb-4 pt-2">
                        <span className="text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x leading-tight">
                            AI Product Manager
                        </span>
                    </div>
                </div>

                {/* Subheading */}
                <p className="mx-auto max-w-[800px] text-lg text-muted-foreground md:text-xl font-light leading-relaxed">
                    7+ years of experience leading the end-to-end product lifecycle for global SaaS, HRTech and EdTech platforms. I specialize in bridging the gap between business strategy and cutting-edge technology, with a proven track record of shipping AI-driven capabilities that drive measurable growth.
                </p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
                >
                    <a
                        href="#impact"
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        <span className="mr-2">View Career Impact</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                    </a>

                    <a
                        href="mailto:ranaajaysingh@outlook.com"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm px-8 font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>
    );
}
