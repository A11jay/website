'use client';

import { motion } from 'framer-motion';
import { Cpu, Database, Code2, Globe, Brain, Zap } from 'lucide-react';

const skills = [
    { name: 'AI Product Strategy', icon: Brain, size: 'col-span-1 md:col-span-2 row-span-2', color: 'text-purple-400' },
    { name: 'Jira Rovo & Confluence', icon: Zap, size: 'col-span-1 row-span-1', color: 'text-blue-400' },
    { name: 'SQL & Power BI', icon: Database, size: 'col-span-1 row-span-1', color: 'text-yellow-400' },
    { name: 'Antigravity & Lovable', icon: Code2, size: 'col-span-1 md:col-span-2 row-span-1', color: 'text-pink-400' },
    { name: 'API Design & Integrations', icon: Globe, size: 'col-span-1 row-span-1', color: 'text-green-400' },
    { name: 'LLM & RAG Architecture', icon: Cpu, size: 'col-span-1 md:col-span-2 row-span-1', color: 'text-indigo-400' },
];

export default function Skills() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Skills & Tech Stack</h2>
                <p className="text-muted-foreground text-lg">Tools and technologies I use to build the future.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[150px]">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        viewport={{ once: true }}
                        className={`relative group overflow-hidden rounded-3xl border border-border bg-card hover:bg-white/5 transition-colors p-6 flex flex-col justify-between ${skill.size}`}
                    >
                        <div className={`absolute right-[-20px] top-[-20px] opacity-10 group-hover:opacity-20 transition-opacity`}>
                            <skill.icon className={`w-32 h-32 ${skill.color}`} />
                        </div>

                        <skill.icon className={`w-8 h-8 ${skill.color}`} />

                        <div>
                            <h3 className="text-xl font-medium">{skill.name}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
