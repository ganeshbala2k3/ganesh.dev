import CardNav from '@/components/CardNav';
import DarkVeil from '@/components/DarkVeil';
import ClientScrollHandler from '@/components/ClientScrollHandler';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const items = [
        {
            label: "About",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "Company", href: "/about", ariaLabel: "About Company" },
                { label: "Careers", href: "/careers", ariaLabel: "About Careers" }
            ]
        },
        {
            label: "Projects",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "Featured", href: "/projects", ariaLabel: "Featured Projects" },
                { label: "Case Studies", href: "/case-studies", ariaLabel: "Project Case Studies" }
            ]
        },
        {
            label: "Contact",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "Email", href: "mailto:test@example.com", ariaLabel: "Email us" },
                { label: "Twitter", href: "https://twitter.com", ariaLabel: "Twitter" },
                { label: "LinkedIn", href: "https://linkedin.com", ariaLabel: "LinkedIn" }
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

                {/* routing container */}
                <div className="hidden">
                    {children}
                </div>
            </main>
        </div>
    );
}
