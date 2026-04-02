"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ClientScrollHandler() {
    const pathname = usePathname();
    const isManualScroll = useRef(false);

    useEffect(() => {
        if (!isManualScroll.current) {
            let id = pathname === '/' ? 'home' : pathname.replace('/', '');
            // default to home if section not expected
            if (!['home', 'about', 'projects', 'contact', 'careers', 'case-studies'].includes(id)) {
                id = 'home';
            }
            const el = document.getElementById(id);
            if (el) {
                // Wait slightly for layout to settle
                setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
            }
        }
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'contact'];
            let currentSection = '';
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // Detect if element is reasonably top of page
                    if (rect.top >= -window.innerHeight / 2 && rect.top < window.innerHeight / 2) {
                        currentSection = section;
                        break;
                    }
                }
            }

            if (currentSection) {
                const newPath = currentSection === 'home' ? '/home' : `/${currentSection}`;
                if (window.location.pathname !== newPath) {
                    isManualScroll.current = true;
                    window.history.replaceState(null, '', newPath);
                    // allow some time before responding to Pathname changes from Next Router if it accidentally triggered
                    setTimeout(() => { isManualScroll.current = false; }, 50);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null;
}
