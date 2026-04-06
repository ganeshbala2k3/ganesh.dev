"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { ParticleCard, GlobalSpotlight } from '../MagicBento';

const skillCategories = [
    {
        title: "Coding",
        skills: [
            { name: "C", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
            { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
            { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
            { name: "Oracle", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
            { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" }
        ]
    },
    {
        title: "Web Development",
        skills: [
            { name: "ReactJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
            { name: "NodeJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
            { name: "ExpressJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
            { name: "Django", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
            { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
            { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
            { name: "Bootstrap", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
            { name: "REST API", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" }
        ]
    },
    {
        title: "DevOps & Tools",
        skills: [
            { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
            { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
            { name: "Jenkins", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
            { name: "Linux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
            { name: "Computer Networks", image: "https://www.svgrepo.com/show/447216/admin-site.svg" }
        ]
    },
    {
        title: "Cloud Computing",
        skills: [
            { name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { name: "Pubic Cloud", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" }
        ]
    }
];

export default function SkillSection() {
    const gridRef = useRef<HTMLDivElement>(null);
    const glowColor = '132, 0, 255';

    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
            <style>
                {`
                  .skills-bento-section {
                    --glow-x: 50%;
                    --glow-y: 50%;
                    --glow-intensity: 0;
                    --glow-radius: 400px;
                    --glow-color: ${glowColor};
                    --border-color: #392e4e;
                    --background-dark: #060010;
                  }
                  
                  .skills-card--border-glow::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    padding: 4px;
                    background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                        rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                        rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                        transparent 60%);
                    border-radius: inherit;
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask-composite: exclude;
                    pointer-events: none;
                    opacity: 1;
                    transition: opacity 0.3s ease;
                    z-index: 1;
                  }
                  
                  .skills-card--border-glow:hover {
                    box-shadow: 0 4px 40px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.2);
                  }
                  
                  .particle::before {
                    content: '';
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    right: -2px;
                    bottom: -2px;
                    background: rgba(${glowColor}, 0.2);
                    border-radius: 50%;
                    z-index: -1;
                  }
                `}
            </style>

            <div className="z-10 max-w-5xl w-full flex flex-col items-center relative bento-section" ref={gridRef}>
                <GlobalSpotlight
                    gridRef={gridRef}
                    enabled={true}
                    spotlightRadius={600}
                    glowColor={glowColor}
                />

                <div className="text-center space-y-4 mb-4">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        My Toolkit
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg hidden md:block">
                        A collection of technologies I have worked with to bring ideas to life.
                    </p>
                </div>

                {/* Single Magic Bento Box holding EVERYTHING */}
                <ParticleCard
                    className="card skills-card--border-glow flex flex-col w-full rounded-[30px] p-8 md:p-12 border border-solid overflow-hidden transition-colors duration-300 relative mt-8 skills-bento-section"
                    style={{
                        backgroundColor: 'var(--background-dark)',
                        borderColor: 'var(--border-color)',
                        color: 'white',
                    }}
                    particleCount={15}
                    glowColor={glowColor}
                    enableTilt={false}
                    enableMagnetism={false}
                    clickEffect={true}
                >
                    <div className="flex flex-col w-full gap-16 relative z-10">
                        {skillCategories.map((category, idx) => (
                            <div key={idx} className="flex flex-col w-full">
                                <h3 className="text-2xl font-semibold mb-8 text-white/90 text-center uppercase tracking-widest text-sm drop-shadow-md">
                                    <span className="bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
                                        {category.title}
                                    </span>
                                </h3>
                                <div className="flex flex-wrap justify-center gap-10 md:gap-14">
                                    {category.skills.map((skill, skillIdx) => (
                                        <div
                                            key={skillIdx}
                                            className="group relative flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 hover:z-20 cursor-pointer"
                                        >
                                            <div className="relative w-14 h-14 md:w-16 md:h-16 transition-all duration-300 transform group-hover:scale-125 group-hover:-translate-y-4">
                                                <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                                                <Image
                                                    src={skill.image}
                                                    alt={skill.name}
                                                    fill
                                                    className="object-contain drop-shadow-[0_0_15px_rgba(132,0,255,0.3)] brightness-90 group-hover:brightness-110 transition-all duration-300"
                                                />
                                            </div>
                                            <span className="absolute bottom-[-15px] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-xs md:text-sm font-medium text-purple-300 text-center whitespace-nowrap">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </ParticleCard>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
        </section>
    );
}