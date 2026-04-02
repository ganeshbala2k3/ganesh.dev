"use client";
import React from 'react';
import ProfileCard from '@/components/ProfileCard';
import RotatingText from '@/components/RotatingText';
import LogoLoop from '@/components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiPrisma } from 'react-icons/si';

const techLogos = [
    { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "#" },
    { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "#" },
    { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "#" },
    { node: <SiTailwindcss className="text-[#38B2AC]" />, title: "Tailwind CSS", href: "#" },
    { node: <SiPostgresql className="text-[#336791]" />, title: "PostgreSQL", href: "#" },
    { node: <SiPrisma className="text-white" />, title: "Prisma", href: "#" }
];

export default function HomeSection({ mounted }: { mounted: boolean }) {
    return (
        <div className={`relative z-10 flex flex-col items-center justify-center container mx-auto px-6 pt-32 pb-24 w-full max-w-6xl gap-16 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                <div className="w-full lg:w-5/12 flex justify-center lg:justify-end relative z-20 group">
                    <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[420px] drop-shadow-[0_0_40px_rgba(113,196,255,0.15)] transition-all duration-500 hover:drop-shadow-[0_0_60px_rgba(113,196,255,0.3)]">
                        <ProfileCard
                            name="Ganesh Bala"
                            title="Software Engineer"
                            handle="ganeshbala2k3"
                            status="• Available for hire •"
                            contactText="Contact Me"
                            avatarUrl="/Profile.jpg"
                            showUserInfo={true}
                            enableTilt={false}
                            enableMobileTilt={false}
                            onContactClick={() => {
                                const el = document.getElementById('contact');
                                if (el) {
                                    el.scrollIntoView({ behavior: 'smooth' });
                                } else {
                                    window.location.href = '/contact';
                                }
                            }}
                            behindGlowColor=""
                            behindGlowEnabled={false}
                            innerGradient="linear-gradient(135deg, rgba(30,30,45,0.8) 0%, rgba(10,10,15,0.9) 100%)"
                            className="w-full"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left pointer-events-auto">
                    <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-purple-300 text-sm font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                        ✦ Welcome to my digital space
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-md leading-tight">
                        Hi, I'm <br className="hidden md:block lg:hidden" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 inline-block">
                            Ganesh Bala
                        </span>
                    </h1>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
                        <span>Software</span>
                        <RotatingText
                            texts={['Development', 'Deployments', 'Operations']}
                            mainClassName="px-4 sm:px-5 md:px-6 bg-[#5538FF] text-white overflow-hidden py-1.5 sm:py-2 md:py-2 justify-center rounded-xl shadow-[0_0_30px_rgba(85,56,255,0.4)]"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
                        <button className="px-8 py-3.5 rounded-xl bg-white text-black font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.25)] flex items-center justify-center">
                            View My Projects
                        </button>
                        <button
                            onClick={() => window.open('/GaneshResume.pdf', '_blank')}
                            className="group relative px-8 py-3.5 rounded-xl border border-white/20 bg-white/5 text-white font-semibold tracking-wide backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/40 flex items-center justify-center overflow-hidden w-full sm:w-48"
                        >
                            <span className="absolute transition-all duration-300 group-hover:-translate-y-12">Read Resume</span>
                            <span className="absolute translate-y-12 transition-all duration-300 group-hover:translate-y-0 text-[#a390ff]">Open Resume</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center pt-24 overflow-hidden pointer-events-auto">
                <p className="text-gray-400 uppercase tracking-[0.25em] text-xs font-semibold mb-8 text-center w-full relative">
                    <span className="relative z-10 px-4 bg-[#050505] rounded-full brightness-150">Powering my applications</span>
                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600/50 to-transparent z-0" />
                </p>

                <div className="w-full max-w-5xl h-[120px] flex items-center justify-center relative overflow-hidden backdrop-blur-xl border border-white/10 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent shadow-2xl">
                    <LogoLoop
                        logos={techLogos}
                        speed={45}
                        direction="left"
                        logoHeight={65}
                        gap={70}
                        hoverSpeed={10}
                        scaleOnHover
                        fadeOut={false}
                        ariaLabel="My tech stack"
                    />
                </div>
            </div>
        </div>
    );
}
