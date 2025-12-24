'use client';

import { motion } from 'framer-motion';
import { Database, Bot, FileText, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';

const projects = [
    {
        title: 'AI-Powered QA Agent',
        description: 'Designed an autonomous agent enabling natural-language-driven end-user testing. Shifts QA from reactive to proactive, allowing LLMs to control and validate browser flows.',
        tags: ['AI Agent', 'Playwright', 'Test Automation'],
        metric: '50% reduction in QA effort',
        icon: Bot,
        color: 'from-purple-500 to-pink-500',
        featured: true
    },
    {
        title: 'SQL RAG Layer',
        description: 'Built a RAG layer on Apache Superset allowing enterprise customers to query analytics via natural language. Democratized data access and improved decision speed.',
        tags: ['RAG', 'Apache Superset', 'Data Engineering'],
        metric: 'Democratized Data Access',
        icon: Database,
        color: 'from-blue-500 to-cyan-500',
        featured: false
    },
    {
        title: 'RFP Automation Agent',
        description: 'Launched an agent that decomposes RFPs into structured plans and auto-populates responses using organizational domain knowledge, accelerating deal cycles.',
        tags: ['Sales AI', 'Automation', 'NLP'],
        metric: '80% faster turnaround',
        icon: FileText,
        color: 'from-green-500 to-emerald-500',
        featured: false
    },
    {
        title: 'AI Exam Integrity Suite',
        description: 'Delivered AI proctoring with behavioral risk scoring and anomaly detection. Strengthened exam integrity and reduced manual proctoring workload.',
        tags: ['Computer Vision', 'Anomaly Detection', 'EdTech'],
        metric: 'Enhanced Exam Integrity',
        icon: ShieldCheck,
        color: 'from-red-500 to-orange-500',
        featured: false
    },
    {
        title: 'AI Scoring & Generation',
        description: 'Developed an AI engine for objective/subjective scoring and automatic item generation. Improved accuracy and reduced content creation time.',
        tags: ['GenAI', 'Assessment', 'Scoring Engine'],
        metric: 'Automated Content & Grading',
        icon: Sparkles,
        color: 'from-yellow-500 to-amber-500',
        featured: false
    },
    {
        title: 'Enterprise HRMS Migration',
        description: 'Led the strategic migration from Zoho People Plus to an in-house HRMS, defining scope, integrations, and rollout execution for global operations.',
        tags: ['Digital Transformation', 'HR-Tech', 'Migration'],
        metric: 'Saved ₹35L+ Annually',
        icon: TrendingUp,
        color: 'from-indigo-500 to-violet-500',
        featured: false
    },
];

export default function ImpactGallery() {
    return (
        <section id="impact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">AI Impact Gallery</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Transforming products and operations through AI-driven innovation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
                    >
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${project.color} transition-opacity duration-500`} />

                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-10 shadow-inner`}>
                                <project.icon className="h-6 w-6 text-white" />
                            </div>
                            {project.featured && (
                                <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                                    Flagship Initiative
                                </span>
                            )}
                        </div>

                        {/* Content */}
                        <div className="space-y-4 mb-8">
                            <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                        </div>

                        {/* Footer */}
                        <div className="mt-auto space-y-6">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-border flex items-center gap-3">
                                <TrendingUp className="h-5 w-5 text-primary" />
                                <span className="font-semibold text-primary">{project.metric}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
