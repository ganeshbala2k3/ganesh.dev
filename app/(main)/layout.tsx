import CardNav from '@/components/CardNav';
import DarkVeil from '@/components/DarkVeil';
import ClientScrollHandler from '@/components/ClientScrollHandler';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import { DemoOne } from '@/components/sections/ContactUs';
import CertificationsSection from '@/components/sections/CertificationsSection';
import Timeline from '@/components/sections/Timeline';
import SkillSection from '@/components/sections/skillsection';
import ProjectsSection from '@/components/sections/ProjectsSection';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const items = [
        {
            label: "Info",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "Home", href: "/home", ariaLabel: "Home Section" },
                { label: "About Me", href: "/about", ariaLabel: "About Section" },
                { label: "My Journey", href: "/timeline", ariaLabel: "Timeline Section" }
            ]
        },
        {
            label: "Expertise",
            bgColor: "#120920",
            textColor: "#fff",
            links: [
                { label: "My Toolkit", href: "/skills", ariaLabel: "Skills Section" },
                { label: "Certifications", href: "/certifications", ariaLabel: "Certifications Section" }
            ]
        },
        {
            label: "Projects",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "All Projects", href: "#projects", ariaLabel: "Projects Section" },
                { label: "GitHub Profile", href: "https://github.com/ganeshbala2k3", ariaLabel: "GitHub" }
            ]
        },
        {
            label: "Connect",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "Contact Form", href: "#contact", ariaLabel: "Contact Section" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/ganesh-bala-9b4a8b1b9/", ariaLabel: "LinkedIn" },
            ]
        }
    ];

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden selection:bg-purple-500/30 bg-black text-white flex flex-col">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <DarkVeil
                    hueShift={0}
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={1}
                    scanlineFrequency={0}
                    warpAmount={0}
                />
            </div>

            <ClientScrollHandler />

            <CardNav
                items={items}
                baseColor="linear-gradient(135deg, rgba(20,20,30,0.7) 0%, rgba(10,10,15,0.8) 100%)"
                menuColor="white"
                buttonBgColor="white"
                buttonTextColor="black"
                ease="power3.out"
                className="fixed top-4 z-50"
            />

            <main className="relative z-10 flex-grow scroll-smooth w-full">
                <div id="home" className="w-full min-h-screen">
                    <HomeSection mounted={true} />
                </div>

                <div id="about" className="w-full min-h-screen">
                    <AboutSection />
                </div>

                <div id="timeline" className="w-full min-h-screen">
                    <Timeline />
                </div>
                <div id="skills" className="w-full min-h-screen">
                    <SkillSection />
                </div>

                <div id="projects" className="w-full min-h-screen">
                    <ProjectsSection />
                </div>

                <div id="certifications" className="w-full min-h-screen">
                    <CertificationsSection />
                </div>
                <div id="contact" className="w-full min-h-screen">
                    <DemoOne />
                </div>


                {/* routing container */}
                <div className="hidden">
                    {children}
                </div>
            </main>
        </div>
    );
}
