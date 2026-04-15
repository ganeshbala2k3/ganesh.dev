"use client";
import React, { useRef, useState } from "react";
import { ParticleCard, GlobalSpotlight } from "../MagicBento";

type Project = {
    id?: string;
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    badge?: string; // e.g. "Featured" | "Open Source" | "In Progress"
};

const projects: Project[] = [
      {
        id: "generative AI",
        title: "Adaptive LLM Orchestration with Prompt Refinement for Cost-Efficient and Reliable AI Systems",
        description:
            "Adaptive LLM Orchestration System – Built a cost-efficient AI pipeline with query analysis, prompt refinement, model routing, and RAG to optimize response quality, latency, and reduce hallucination.",
        tags: ["Blockchain", "Solidity", "Node.js", "Distributed Ledger", "Privacy"],
        githubUrl: "https://github.com/ganeshbala2k3/LLM_Orchestration",
        liveUrl: "#", // User mentioned a publication link below
        badge: "Building in Progress",
    },
    {
        id: "inventory",
        title: "Inventory Management System",
        description:
            "A real-time SaaS application for Bapatla Engineering College to streamline and digitize stock management, significantly reducing manual record-keeping and human effort. Built with RBAC for secure, role-based operations.",
        tags: ["React.js", "Node.js", "MySQL", "Ant Design", "Express.js", "RBAC"],
        githubUrl: "https://github.com/ganeshbala2k3/electrical_inventory",
        badge: "Real-World SaaS",
    },{
   
        id: "blockchain",
        title: "Blockchain Event Ticketing",
        description:
            "A blockchain-based ticketing system that securely stores event and ticket data on a distributed ledger, enabling authenticity verification and enhancing transparency. Reforming the secure event management ecosystem.",
        tags: ["Blockchain", "Solidity", "Node.js", "Distributed Ledger", "Privacy"],
        githubUrl: "https://github.com/ganeshbala2k3/web3.O",
        liveUrl: "#", // User mentioned a publication link below
        badge: "Research Publication",
    }
];

// ────────────────────────────  Icons  ────────────────────────────
const GitHubIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
        aria-hidden="true"
    >
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.021C22 6.484 17.522 2 12 2z" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
        aria-hidden="true"
    >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);
// ─────────────────────────────────────────────────────────────────

const badgeClass: Record<string, string> = {
    Featured: "bg-purple-500/20 text-purple-300 border border-purple-500/40",
    "Open Source": "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
    "In Progress": "bg-amber-500/15 text-amber-300 border border-amber-500/30",
};

export default function ProjectsSection() {
    const gridRef = useRef<HTMLDivElement>(null);
    const glowColor = "132, 0, 255";
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
            {/* Ambient background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-700/10 rounded-full blur-[170px] pointer-events-none" />

            <style>{`
                .projects-bento-section {
                    --glow-x: 50%;
                    --glow-y: 50%;
                    --glow-intensity: 0;
                    --glow-radius: 380px;
                    --glow-color: ${glowColor};
                    --border-color: #2e2040;
                    --bg-card: #07020f;
                }

                .project-card--glow::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    padding: 1px;
                    background: radial-gradient(
                        var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                        rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                        rgba(${glowColor}, calc(var(--glow-intensity) * 0.35)) 30%,
                        transparent 65%
                    );
                    border-radius: inherit;
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask-composite: exclude;
                    pointer-events: none;
                    z-index: 1;
                }

                .project-card--glow:hover {
                    box-shadow: 0 8px 40px rgba(46, 24, 78, 0.5), 0 0 25px rgba(${glowColor}, 0.18);
                }

                .tag-chip {
                    font-size: 0.7rem;
                    padding: 2px 10px;
                    border-radius: 9999px;
                    background: rgba(132, 0, 255, 0.12);
                    color: rgba(200, 160, 255, 0.9);
                    border: 1px solid rgba(132, 0, 255, 0.25);
                    letter-spacing: 0.03em;
                    white-space: nowrap;
                }

                .project-link-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 14px;
                    border-radius: 8px;
                    font-size: 0.8rem;
                    font-weight: 500;
                    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
                    cursor: pointer;
                }

                .project-link-btn.github {
                    background: rgba(255,255,255,0.05);
                    color: rgba(255,255,255,0.75);
                    border: 1px solid rgba(255,255,255,0.1);
                }
                .project-link-btn.github:hover {
                    background: rgba(255,255,255,0.12);
                    color: #fff;
                    box-shadow: 0 0 16px rgba(132, 0, 255, 0.25);
                }

                .project-link-btn.live {
                    background: rgba(132, 0, 255, 0.18);
                    color: rgba(185, 140, 255, 0.95);
                    border: 1px solid rgba(132, 0, 255, 0.35);
                }
                .project-link-btn.live:hover {
                    background: rgba(132, 0, 255, 0.32);
                    color: #fff;
                    box-shadow: 0 0 20px rgba(132, 0, 255, 0.35);
                }
            `}</style>

            <div
                className="z-10 max-w-6xl w-full flex flex-col items-center relative bento-section projects-bento-section"
                ref={gridRef}
            >
                <GlobalSpotlight
                    gridRef={gridRef}
                    enabled={true}
                    spotlightRadius={550}
                    glowColor={glowColor}
                />

                {/* Section header */}
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        My Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A showcase of things I&apos;ve built — from full-stack apps to open-source tools.
                    </p>
                </div>

                {/* Project grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {projects.map((project, idx) => (
                        <ParticleCard
                            key={idx}
                            id={project.id}
                            className={`card project-card--glow flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 relative`}
                            style={{
                                backgroundColor: "var(--bg-card)",
                                borderColor: hoveredIdx === idx
                                    ? "rgba(132, 0, 255, 0.45)"
                                    : "var(--border-color)",
                                color: "white",
                            }}
                            particleCount={10}
                            glowColor={glowColor}
                            enableTilt={false}
                            enableMagnetism={false}
                            clickEffect={true}
                        >
                            {/* Top accent bar */}
                            <div
                                className="h-[2px] w-full transition-all duration-500"
                                style={{
                                    background: hoveredIdx === idx
                                        ? `linear-gradient(to right, transparent, rgba(${glowColor}, 0.7), transparent)`
                                        : `linear-gradient(to right, transparent, rgba(${glowColor}, 0.2), transparent)`,
                                }}
                            />

                            <div
                                className="flex flex-col flex-1 p-6 gap-4"
                                onMouseEnter={() => setHoveredIdx(idx)}
                                onMouseLeave={() => setHoveredIdx(null)}
                            >
                                {/* Header row */}
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-xl font-semibold text-white leading-tight">
                                            {project.title}
                                        </h3>
                                        {project.badge && (
                                            <span
                                                className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full w-fit ${badgeClass[project.badge] ??
                                                    "bg-white/10 text-white/60 border border-white/10"
                                                    }`}
                                            >
                                                {project.badge}
                                            </span>
                                        )}
                                    </div>

                                    {/* Quick links (top right) */}
                                    <div className="flex items-center gap-2 shrink-0 mt-0.5">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${project.title} GitHub`}
                                                className="text-white/40 hover:text-purple-300 transition-colors duration-200"
                                            >
                                                <GitHubIcon />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${project.title} live demo`}
                                                className="text-white/40 hover:text-purple-300 transition-colors duration-200"
                                            >
                                                <ExternalLinkIcon />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tag-chip">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action buttons */}
                                <div className="flex gap-3 pt-1">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link-btn github"
                                        >
                                            <GitHubIcon />
                                            Source Code
                                        </a>
                                    )}
                                  
                                </div>
                            </div>
                        </ParticleCard>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-12 flex flex-col items-center gap-3">
                    <p className="text-gray-500 text-sm">Want to see more?</p>
                    <a
                        href="https://github.com/ganeshbala2k3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium text-purple-300 border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 hover:text-white hover:border-purple-500/60 hover:shadow-[0_0_24px_rgba(132,0,255,0.3)] transition-all duration-300"
                    >
                        <GitHubIcon />
                        View all on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
