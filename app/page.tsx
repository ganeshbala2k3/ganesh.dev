"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TextType from "@/components/TextType";

const terminalLines = [
  "> Booting Ganesh.dev...",
  "> Initializing Projects...",
  "> Ready to Build."
];

export default function Home() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // 3 lines * ~2 seconds (typing + 1s pause + deleting) = ~6 seconds
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        router.push('/home');
      }, 500);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <main className={`flex h-screen w-full items-center justify-center bg-black p-6 lg:p-24 transition-opacity duration-500 delay-100 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex w-full flex-col items-center justify-center text-center px-4">
        <TextType
          text={terminalLines}
          typingSpeed={40}
          deletingSpeed={20}
          pauseDuration={1000}
          showCursor={true}
          cursorCharacter="_"
          loop={false}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono tracking-tight text-white drop-shadow-md"
        />
      </div>
    </main>
  );
}