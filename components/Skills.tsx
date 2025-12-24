'use client';

import { motion } from 'framer-motion';
import {
    Brain,
    Database,
    Code2,
    Zap,
    Users,
    Layout,
    BarChart3,
    Layers,
    Terminal
} from 'lucide-react';

const categories = [
    {
        title: "Product Strategy & Leadership",
        description: "Driving vision, execution, and global growth.",
        skills: [
            { name: "AI Product Strategy & Roadmapping", icon: Brain },
            { name: "End-to-End Product Lifecycle", icon: Layers },
            { name: "Requirements & Solution Design", icon: Layout },
            { name: "Agile, Scrum & Release Mgmt", icon: Zap },
            { name: "Stakeholder Leadership", icon: Users },
            { name: "RFP Execution & GTM Enablement", icon: BarChart3 },
        ]
    },
    {
        title: "Tools & Collaboration",
        description: "The stack that powers efficient operations.",
        skills: [
            { name: "Jira, Confluence & Trello", icon: Layout },
            { name: "Figma, Miro & Lovable", icon: Code2 },
            { name: "Power BI & Google Analytics", icon: BarChart3 },
            { name: "Frappe Insights & Excel", icon: Database },
            { name: "Slack & MS Teams", icon: Users },
            { name: "Notion", icon: Layers },
        ]
    },
    {
        title: "AI & Vibe Coding",
        description: "Bridging the gap between code and strategy.",
        skills: [
            { name: "Antigravity & Kiro", icon: Zap },
            { name: "Jira Rovo AI", icon: Brain },
            { name: "SQL & Apache Superset", icon: Database },
            { name: "APIs & Integrations", icon: Terminal },
            { name: "HTML, CSS & ERPNext", icon: Code2 },
            { name: "LLM & RAG Architecture", icon: CpuIcon },
        ]
    }
];

function CpuIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M15 2v2" />
            <path d="M15 20v2" />
            <path d="M2 15h2" />
            <path d="M2 9h2" />
            <path d="M20 15h2" />
            <path d="M20 9h2" />
            <path d="M9 2v2" />
            <path d="M9 20v2" />
        </svg>
    )
}

export default function Skills() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Skills & Tech Stack</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A comprehensive toolkit bridging strategic leadership with technical execution.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="mb-6 space-y-2">
                            <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                            <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>

                        <div className="space-y-4">
                            {category.skills.map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <skill.icon className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="text-sm font-medium">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
