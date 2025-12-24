'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl space-y-6"
            >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                    Ajay Singh Rana
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-2">
                        AI Product Manager
                    </span>
                </h1>

                <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                    7+ years of experience leading global product lifecycles.
                    AI Product Manager & Vibe Coding Enthusiast.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex justify-center gap-4 pt-4"
                >
                    <a
                        href="#impact"
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background"
                    >
                        <span className="mr-2">View Impact</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
