'use client';

import { motion } from 'framer-motion';
import { Database, Bot, FileText, TrendingUp, Clock } from 'lucide-react';

const projects = [
    {
        title: 'RFP Automation Agent',
        description: 'AI Agent that decomposes RFPs and auto-populates responses using domain knowledge.',
        tags: ['AI Agent', 'Automation', 'Sales'],
        metric: '80% faster turnaround',
        icon: FileText,
        color: 'from-green-500 to-emerald-500',
    },
    {
        title: 'AI-Powered QA Agent',
        description: 'Autonomous agent that allows LLMs to control browser flows for end-user testing.',
        tags: ['AI Agent', 'QA', 'Playwright/Selenium'],
        metric: '50% reduction in QA effort',
        icon: Bot,
        color: 'from-purple-500 to-pink-500',
    },
    {
        title: 'SQL RAG Layer',
        description: 'Natural language interface for Apache Superset to democratize data access for non-tech users.',
        tags: ['RAG', 'SQL', 'Apache Superset'],
        metric: 'Data Democratization',
        icon: Database,
        color: 'from-blue-500 to-cyan-500',
    },
    {
        title: 'Enterprise Migration',
        description: 'Led the migration from Zoho People Plus to an in-house HRMS, defining scope and integrations.',
        tags: ['HR-Tech', 'Migration', 'Cost Savings'],
        metric: 'Saved ₹35,00,000+ Annually',
        icon: TrendingUp,
        color: 'from-yellow-500 to-orange-500',
    },
];

export default function ImpactGallery() {
    return (
        <section id="impact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">AI Impact Gallery</h2>
                <p className="text-muted-foreground text-lg">Key initiatives driving business value through AI.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors duration-300"
                    >
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${project.color} transition-opacity duration-500`} />

                        <div className="p-6 space-y-4">
                            <div className={`p-3 rounded-lg w-fit bg-gradient-to-br ${project.color} bg-opacity-10`}>
                                <project.icon className="h-6 w-6 text-white" />
                            </div>

                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-muted-foreground">{project.description}</p>

                            <div className="pt-4 flex items-center gap-2 text-primary font-medium">
                                <TrendingUp className="h-4 w-4" />
                                <span>{project.metric}</span>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary-foreground border border-secondary/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
