'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
    {
        degree: 'Tech Product Management',
        institution: 'Indian Institute Of Technology, Delhi',
        period: '2025 - 2026',
        description: 'Certification Course',
    },
    {
        degree: 'MBA - Human Resources and Marketing',
        institution: 'Renaissance University, Indore',
        period: '2020 - 2022',
        description: 'Specialization in HR & Marketing',
    },
    {
        degree: 'Bachelor of Commerce',
        institution: 'Devi Ahilya Vishwa Vidyalaya, Indore',
        period: '2015 - 2018',
        description: 'Undergraduate Degree',
    },
];

const certifications = [
    'Product Manager (Udemy)',
    'SHRM - Certified Professional',
    'HR Analytics & Management',
    'Advanced Excel Formulas',
];

export default function Education() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Education & Certifications</h2>
                <p className="text-muted-foreground text-lg">Academic foundation and professional credentials.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Education Column */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        Education
                    </h3>
                    <div className="space-y-8 border-l border-border pl-8 relative">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border border-border bg-background ring-4 ring-background" />
                                <h4 className="text-xl font-medium">{edu.institution}</h4>
                                <p className="text-primary font-medium">{edu.degree}</p>
                                <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Column */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
                        <Award className="h-6 w-6 text-secondary" />
                        Certifications
                    </h3>
                    <div className="grid gap-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                                viewport={{ once: true }}
                                className="p-4 rounded-lg border border-border bg-card hover:border-secondary/50 transition-colors flex items-center gap-3"
                            >
                                <div className="h-2 w-2 rounded-full bg-secondary shrink-0" />
                                <span className="font-medium">{cert}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
