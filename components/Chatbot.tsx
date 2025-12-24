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
        keywords: ['rag', 'superset', 'sql', 'retrieval', 'apache'],
        answer: "I built an SQL RAG layer for Apache Superset, enabling natural language querying. This empowered non-technical users to access data insights instantly, bridging the gap between data and decision-making."
    },
    {
        keywords: ['qa', 'test', 'quality', 'bug', 'testing'],
        answer: "I led the design of an AI-powered QA Agent that reduced manual QA effort by 50% through automated test case generation and execution, significantly accelerating our release cycles."
    },
    {
        keywords: ['rfp', 'proposal', 'automation', 'sales'],
        answer: "I launched an AI-driven RFP Automation Agent that achieved an 80% faster turnaround time for proposal generation, allowing our sales team to respond to opportunities at speed."
    },
    {
        keywords: ['arr', 'revenue', 'money', 'impact', 'value', 'savings'],
        answer: "My initiatives contributed to over $450,000 in ARR through enterprise wins. Additionally, I realized annual savings of approx ₹35,00,000 by leading the migration to an in-house HRMS."
    },
    {
        keywords: ['experience', 'background', 'career', 'work'],
        answer: "I have 7+ years of experience, specializing in AI-driven HR-Tech and SaaS. Currently, I serve as VP of Business Operations (Product) at ExamRoom.AI, following a strong foundation in HR at TaskUs.",
    },
    {
        keywords: ['tech', 'stack', 'skills', 'tools', 'jira', 'rovo'],
        answer: "My technical toolkit includes product lifecycle management, Jira Rovo AI, SQL, APIs, and 'Vibe Coding' tools like Antigravity and Lovable. I bridge the gap between technical complexity and user value."
    },
    {
        keywords: ['contact', 'email', 'hire', 'recruiter', 'linkedin'],
        answer: "I'd love to discuss how I can drive value for your team. Please reach out via email at ranaajaysingh@outlook.com or connect with me on LinkedIn."
    },
    {
        keywords: ['hello', 'hi', 'hey', 'greetings'],
        answer: "Hello! I am the Ajay AI Career Assistant. I can discuss my work on SQL RAG layers, AI QA Agents, or my business impact. How can I help you today?"
    }
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'assistant', content: "Hello, I'm the Ajay AI Career Assistant. Ask me about my experience with RAG, AI Agents, or my impact on ARR." }
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
                                    {msg.content}
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
