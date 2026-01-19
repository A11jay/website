'use client';

import { motion } from 'framer-motion';
import { Users, Lock, Laptop, TicketCheck, TrendingUp, CheckCircle2 } from 'lucide-react';

const products = [
    {
        title: 'HRMS & LMS Platform',
        subtitle: 'ERPNext-based',
        description: 'Led a cross-functional team of 6 engineers, 2 business analysts, and 1 project manager to design and launch an end-to-end HRMS and LMS platform, successfully sunsetting Zoho People Plus and TalentLMS.',
        impact: [
            '90% reduction in annual licensing costs',
            'Improved platform extensibility & ownership',
            '30% increase in job applications via ATS'
        ],
        icon: Users,
        color: 'from-blue-500 to-indigo-500'
    },
    {
        title: 'Secure Lockdown Browser',
        subtitle: 'Examination Security',
        description: 'Led a team of 4 developers and a Scrum Master to deliver a proprietary system lockdown browser enabling secure, tamper-proof online examinations for clients in price-sensitive markets.',
        impact: [
            'Created differentiated product offering',
            'Expanded assessment business opportunities',
            'Improved client trust in remote proctoring'
        ],
        icon: Lock,
        color: 'from-emerald-500 to-teal-500'
    },
    {
        title: 'Exam Equipment Rental',
        subtitle: 'E-commerce Platform',
        description: 'Conceptualized and launched an e-commerce rental platform allowing candidates to rent laptops and exam equipment, removing access barriers and improving exam completion rates.',
        impact: [
            'Introduced new revenue stream',
            'Removed candidate access barriers',
            'Aligned with digital assessment ecosystem'
        ],
        icon: Laptop,
        color: 'from-orange-500 to-amber-500'
    },
    {
        title: 'Internal Ticketing System',
        subtitle: 'Enterprise Support',
        description: 'Delivered a centralized enterprise ticketing platform consolidating support requests across departments.',
        impact: [
            'Reduced resolution time by 30%',
            'Improved internal service delivery',
            'Enhanced operational efficiency'
        ],
        icon: TicketCheck,
        color: 'from-purple-500 to-pink-500'
    }
];

export default function ProductsImpact() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Products & Impact</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Delivering scalable solutions and driving measurable business growth.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={product.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
                    >
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${product.color} transition-opacity duration-500`} />

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div className={`p-3 rounded-2xl bg-gradient-to-br ${product.color} bg-opacity-10 shadow-inner`}>
                                    <product.icon className="h-6 w-6 text-white" />
                                </div>
                                <span className="text-xs font-semibold px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                                    {product.subtitle}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="space-y-4 mb-8">
                                <h3 className="text-2xl font-bold tracking-tight text-foreground">{product.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                            </div>

                            {/* Impact Checklist */}
                            <div className="space-y-3 bg-secondary/30 p-4 rounded-2xl border border-secondary">
                                <div className="flex items-center gap-2 mb-2">
                                    <TrendingUp className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-semibold text-primary">Key Impact</span>
                                </div>
                                {product.impact.map((item, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                                        <span className="text-sm text-foreground/80">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
