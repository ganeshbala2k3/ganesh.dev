"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import GlitchText from "@/ui_components/GlitchText";

const terminalLines = [
  "> Booting Ganesh.dev...",
  "> Initializing Projects...",
  "> Ready to Build."
];

export default function Home() {
  const router = useRouter();
  const [visibleLineIndex, setVisibleLineIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLineIndex((prev) => {
        if (prev < terminalLines.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 1000);

    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        router.push('/home');
      }, 500);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <main className={`flex h-screen items-center justify-center bg-black p-6 lg:p-24 transition-opacity duration-500 delay-100 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex w-full flex-col items-center justify-center text-center">
        <GlitchText
          speed={3}
          enableShadows
          className="!mx-0 inline-block font-mono tracking-tight text-white"
        >
          {terminalLines[visibleLineIndex]}
        </GlitchText>
      </div>
    </main>
  );
}