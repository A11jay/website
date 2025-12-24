'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

type Message = {
    id: string;
    role: 'user' | 'assistant';
    content: string;
};

const QA_DATA = [
    {
        keywords: ['summary', 'about', 'bio', 'who are you', 'profile'],
        answer: "I am a Product Manager with 7+ years of experience leading AI-driven HR-Tech, SaaS, and assessment platforms across global markets (India, USA, Brazil, Serbia, Nigeria). I specialize in end-to-end product lifecycle management, from discovery to enterprise rollouts, with a focus on delivering measurable business outcomes."
    },
    {
        keywords: ['examroom', 'current role', 'vp', 'operations'],
        answer: "At ExamRoom.AI (Jun 2021 - Present), I serve as VP - Business Operations (Product). I own the product vision for HR-Tech, LMS, and Assessment products. Key achievements include contributing to $450k+ ARR, saving ₹35L+ annually via HRMS migration, and delivering major releases like Lockdown Browser and OMR Scan & Score."
    },
    {
        keywords: ['taskus', 'hrbp', 'analyst', 'previous role'],
        answer: "Previously, I was an HRBP (Business Analyst) at TaskUs (Nov 2019 - Jun 2021). I gathered HR process requirements, partnered with stakeholders for Workday/HRMS alignment, facilitated UAT cycles, and supported post-go-live enhancements for global operations."
    },
    {
        keywords: ['skills', 'expertise', 'competencies'],
        answer: "My core skills include AI Product Strategy, End-to-End Product Lifecycle Management, Requirements Gathering, Agile/Scrum, Stakeholder Leadership, and RFP Execution. I bridge the gap between business strategy and technical implementation."
    },
    {
        keywords: ['tools', 'technologies', 'stack', 'software'],
        answer: "I use a robust stack: Jira, Confluence, Trello for management; Figma, Miro, Lovable for design; Power BI, Google Analytics, Frappe Insights for analytics; and 'Vibe Coding' tools like Antigravity and Kiro. I'm also familiar with SQL, APIs, and HTML/CSS."
    },
    {
        keywords: ['rag', 'superset', 'sql', 'retrieval'],
        answer: "I built an SQL RAG layer for Apache Superset to democratize data access, allowing non-technical users to query data via natural language. This significantly improved data accessibility and reduced dependency on technical teams."
    },
    {
        keywords: ['qa', 'agent', 'testing', 'automation'],
        answer: "I led the design of an AI-powered QA Agent that automates browser flow testing. This proactive approach reduced average QA effort by 50% and removed bottlenecks in our release cycles."
    },
    {
        keywords: ['rfp', 'proposal', 'sales', 'growth'],
        answer: "I launched an AI-driven RFP Automation Agent that analyzes requirements and auto-populates responses, reducing turnaround time by over 80%. I've also partnered with Sales on 12+ RFPs contributing to over $450,000 in ARR."
    },
    {
        keywords: ['education', 'degree', 'college', 'university', 'iit', 'mba'],
        answer: "I hold a Tech Product Management certification from IIT Delhi (2025-2026), an MBA in HR & Marketing from Renaissance University (2020-2022), and a B.COM from Devi Ahilya Vishwa Vidyalaya (2015-2018)."
    },
    {
        keywords: ['certifications', 'certs', 'courses'],
        answer: "My certifications include: Product Manager (Udemy), SHRM-CP, HR Analytics & Management (Udemy), and Advanced Excel Formulas (Skill Nation)."
    },
    {
        keywords: ['contact', 'email', 'phone', 'reach', 'linkedin', 'location'],
        answer: "You can reach me at ranaajaysingh@outlook.com or +919977799434. I am based in Bangalore, KA, India. Connect with me on LinkedIn: https://www.linkedin.com/in/ajay-singh-rana-shrm-cp-562a07176/"
    },
    {
        keywords: ['hello', 'hi', 'hey', 'greetings'],
        answer: "Hello! I am the Ajay AI Career Assistant. I can discuss my experience at ExamRoom.AI and TaskUs, my skills in AI Product Strategy, or my specific projects like the SQL RAG Layer and RFP Automation Agent. How can I help you?"
    }
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'assistant', content: "Hello, I'm Ajay's AI assistant. Ask me anything about Ajay's experience and expertise." }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), role: 'user', content: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');

        // Simulate AI delay
        setTimeout(() => {
            const lowerInput = userMsg.content.toLowerCase();
            let response = "That's a great question. While I focus on my professional highlights here, I'd encourage you to check the 'Impact Gallery' for deep dives into my projects. Is there something specific about RAG or my QA Agent work you'd like to know?";

            const match = QA_DATA.find(item => item.keywords.some(k => lowerInput.includes(k)));
            if (match) {
                response = match.answer;
            }

            const botMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: response };
            setMessages(prev => [...prev, botMsg]);
        }, 600);
    };

    // Helper to render text with clickable links
    const renderContent = (content: string) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const parts = content.split(urlRegex);
        return parts.map((part, i) =>
            urlRegex.test(part) ? (
                <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 break-all text-inherit hover:text-inherit/80">
                    {part}
                </a>
            ) : (
                part
            )
        );
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-20 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] rounded-2xl border border-border bg-card shadow-2xl flex flex-col h-[500px]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/10 rounded-t-2xl">
                            <h3 className="font-semibold flex items-center gap-2">
                                <Bot className="h-5 w-5 text-secondary" />
                                Ask My Resume AI
                            </h3>
                            <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                                        msg.role === "user"
                                            ? "ml-auto bg-primary text-primary-foreground"
                                            : "bg-secondary/10 text-card-foreground"
                                    )}
                                >
                                    {renderContent(msg.content)}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-border">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex items-center gap-2"
                            >
                                <input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask a question..."
                                    className="flex-1 bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="p-2 bg-primary text-primary-foreground rounded-md disabled:opacity-50 hover:bg-primary/90"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
            </motion.button>
        </>
    );
}
