"use client";
import React from "react";
import { Terminal } from "@/components/ui/terminal";

export default function AboutSection() {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto px-6 py-12 md:py-24">
            <h2 className="text-5xl font-bold text-white mb-12 drop-shadow-md text-center">
                About Me
            </h2>

            <div className="flex flex-col lg:flex-row w-full gap-10 items-stretch">
                {/* Left Side: Interactive Terminal */}
                <section className="w-full lg:w-3/5 order-2 lg:order-1 h-full">
                    <Terminal
                        className="w-full shadow-[0_0_30px_rgba(85,56,255,0.15)]"
                        commands={[
                            "Tell me about your self? ",
                            "stack --list",
                            "projects --summary",
                            "status"
                        ]}
                        outputs={{
                            0: [
                                "Full Stack Developer focused on building scalable web applications.",
                                "Strong focus on performance, clean architecture, and real-world usability."
                            ],
                            1: [
                                "Frontend: React, Next.js, Tailwind",
                                "Backend: Node.js, Express",
                                "Database: MySQL / PostgreSQL",
                                "Other: REST APIs, Git, Deployment"
                            ],
                            2: [
                                "✔ Built full-stack CRUD applications",
                                "✔ Implemented REST APIs with database integration",
                                "✔ Deployed projects with proper environment configuration"
                            ],
                            3: [
                                "Actively improving system design and backend architecture skills.",
                                "Open to building real-world scalable projects."
                            ]
                        }}
                        typingSpeed={45}
                        delayBetweenCommands={1000}
                    />
                </section>

                {/* Right Side: Text and Content arrangement */}
                <section className="w-full lg:w-2/5 flex flex-col justify-center order-1 lg:order-2">
                    <div className="bg-[#0D0716]/60 border border-purple-500/20 rounded-2xl p-8 lg:p-10 backdrop-blur-md shadow-2xl h-full flex flex-col gap-6 transform transition-all hover:scale-[1.01] duration-300">
                        <div className="inline-flex items-center px-4 py-1.5 w-max rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                            ✦ My Journey
                        </div>

                        <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                            Writing code to solve <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">real problems</span>.
                        </h3>

                        <div className="text-gray-300 leading-relaxed text-lg flex flex-col gap-4">
                            <p>
                                I am an enthusiastic developer who thrives on creating efficient, scalable, and beautifully designed digital solutions.
                            </p>
                            <p>
                                Welcome to my digital workspace. Grab a coffee, click through my terminal, and feel free to arrange your custom text here. I've designed this container precisely for a biography or personal pitch.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-auto pt-6">
                            <a href="mailto:[ganeshbala2k3@gmail.com]" className="px-6 py-3 rounded-xl bg-white text-black font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                                Let's Talk
                            </a>
                            <button onClick={() => window.open('/GaneshResume.pdf', '_blank')} className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/40">
                                View Resume
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}