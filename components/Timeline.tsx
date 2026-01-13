'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: 'Product Manager',
        company: 'ExamRoom.AI',
        location: 'Bangalore, KA',
        period: 'Jun 2021 - Present',
        description: 'Driving product vision and AI initiatives for global remote proctoring solutions.',
        details: [
            'Owned product vision, multi-quarter roadmaps, and strategic direction for HR-Tech, LMS, and Assessment products.',
            'Built business cases and aligned senior leadership on priorities, trade-offs, and customer value.',
            'Led product discovery from end-to-end customer interviews, pain point analysis, and opportunity sizing.',
            'Defined PRDs, user stories, and acceptance criteria aligned with business OKRs.',
            'Collaborated daily with engineering, design, and data science to ensure high-quality increments.',
            'Used Jira’s Rovo AI to automate backlog refinement and sprint planning, improving productivity.',
            'Led agile ceremonies including sprint planning, daily standups, and retrospectives.',
            'Conducted market research to identify whitespace opportunities in HR-Tech and EdTech.',
            'Delivered major releases: Lockdown Browser, OMR Scan & Score, Credentialing, Learning Paths.',
            'Partnered with Sales on 12+ RFPs and 20+ enterprise demos, contributing to $450k+ ARR.',
            'Led enterprise migration from Zoho People Plus to in-house HRMS, saving ₹35L+ annually.'
        ],
        active: true,
    },
    {
        role: 'HR Business Partner (Business Analyst)',
        company: 'TaskUs',
        location: 'Indore, MP',
        period: 'Nov 2019 - Jun 2021',
        description: 'Translated business needs into system workflows (Workday/HRMS) and facilitated global tech adoption.',
        active: false,
        details: [
            'Gathered and documented HR process requirements across onboarding, internal transfers, exits, performance management, and corrective action, translating business needs into clear system workflows.',
            'Partnered with cross-functional stakeholders to align HR policies and operational processes with configurable Workday/HRMS features, ensuring accurate system representation of HR procedures.',
            'Facilitated UAT cycles and conducted user training sessions, ensuring teams understood new functionalities and driving smooth adoption of HR technology across global operations.',
            'Supported post–go-live enhancements, contributing to the rollout of additional modules including Performance Management, Resignation Management, and Corrective Action Management to strengthen overall process coverage.'
        ]
    },
];

export default function Timeline() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Career Timeline</h2>
                <p className="text-muted-foreground text-lg">From HRBP to leading AI Product Strategy.</p>
            </div>

            <div className="relative border-l border-border ml-4 md:ml-0 md:pl-0 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-0"
                    >
                        <div className="md:flex md:gap-12 md:items-start">
                            <div className="md:w-32 md:text-right shrink-0 pt-1">
                                <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                                <div className="text-xs text-muted-foreground/60 mt-1 hidden md:block">{exp.location}</div>
                            </div>

                            <div className="hidden md:flex absolute left-[-41px] top-1 h-5 w-5 items-center justify-center rounded-full border border-border bg-background ring-4 ring-background">
                                <div className={`h-2.5 w-2.5 rounded-full ${exp.active ? 'bg-primary' : 'bg-muted-foreground'}`} />
                            </div>

                            {/* Mobile indicator */}
                            <div className="md:hidden absolute left-[-5px] top-1 h-3 w-3 rounded-full border border-border bg-background ring-4 ring-background">
                                <div className={`h-1.5 w-1.5 rounded-full ${exp.active ? 'bg-primary' : 'bg-muted-foreground'}`} />
                            </div>

                            <div className="mt-2 md:mt-0 relative pb-1">
                                <h3 className="text-xl font-semibold">{exp.role}</h3>
                                <div className="flex items-center gap-2">
                                    <p className="text-lg text-primary">{exp.company}</p>
                                    <span className="text-sm text-muted-foreground md:hidden">• {exp.location}</span>
                                </div>
                                <p className="mt-2 text-muted-foreground">{exp.description}</p>
                                {exp.details && (
                                    <ul className="mt-4 space-y-2 list-disc list-outside ml-4 text-muted-foreground/90 text-sm">
                                        {exp.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
