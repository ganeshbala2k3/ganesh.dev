"use client"

import { Star, ExternalLink, Award } from "lucide-react"
import { cn } from "@/lib/utils"

type ProfileCardProps = {
  name: string
  role: string
  status: "online" | "offline" | "away"
  avatar: string
  tags?: string[]
  isVerified?: boolean
  followers?: number
}

export default function ProfileCardGrid() {
  const certifications: ProfileCardProps[] = [
    {
      name: "AWS Cloud Practitioner",
      role: "Amazon Web Services",
      status: "online",
      avatar: "aws.svg",
      tags: ["Cloud", "Fundamental"],
      isVerified: true,
    },
    {
      name: "Google TensorFlow",
      role: "Google",
      status: "online",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
      tags: ["AI/ML", "Developer"],
      isVerified: true,
    },
    {
      name: "IoT Level 1",
      role: "Tessolve",
      status: "online",
      avatar: "https://cdn-icons-png.flaticon.com/512/1329/1329016.png",
      tags: ["Hardware", "IoT"],
      isVerified: true,
    }
  ]

  return (
    <div className="min-h-screen flex flex-col items-center w-full justify-center p-4 relative overflow-hidden py-24">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(156, 163, 175, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(156, 163, 175, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      <div className="z-10 text-center w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-purple-300 text-sm font-semibold tracking-wider uppercase">
          ✦ Verified Credentials
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight drop-shadow-md">
          My Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center w-full pb-16">
          {certifications.map((cert, index) => (
            <ProfileCard key={index} {...cert} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
      `}</style>
    </div>
  )
}

function ProfileCard({ name, role, status, avatar, tags = [], isVerified, followers }: ProfileCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-[#111] border border-white/10 dark:bg-gray-800 p-5 sm:p-6 w-full max-w-[280px] sm:max-w-[320px] shadow-[12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.02)] transition-all duration-500 hover:shadow-[20px_20px_40px_rgba(168,85,247,0.15),-20px_-20px_40px_rgba(255,255,255,0.05)] hover:scale-[1.02] hover:-translate-y-2 pointer-events-auto flex flex-col h-full">
      {/* Status indicator with pulse animation */}
      <div className="absolute right-4 top-4 z-10">
        <div className="relative">
          <div
            className={cn(
              "h-3 w-3 rounded-full border-2 border-black dark:border-gray-800 transition-all duration-300 group-hover:scale-125",
              status === "online"
                ? "bg-green-500 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
                : status === "away"
                  ? "bg-amber-500"
                  : "bg-gray-400",
            )}
          ></div>
          {status === "online" && (
            <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 animate-ping opacity-30"></div>
          )}
        </div>
      </div>

      {/* Verified badge with bounce animation */}
      {isVerified && (
        <div className="absolute right-4 top-10 z-10">
          <div className="rounded-full bg-purple-500 p-1 shadow-[2px_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            <Star className="h-3 w-3 fill-white text-white" />
          </div>
        </div>
      )}

      {/* Profile Photo with enhanced hover effects */}
      <div className="mb-4 flex justify-center relative z-10">
        <div className="relative group-hover:animate-pulse">
          <div className="h-28 w-28 overflow-hidden rounded-full bg-white/5 p-4 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.5),inset_-6px_-6px_12px_rgba(255,255,255,0.02)] transition-all duration-500 group-hover:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.6),inset_-8px_-8px_16px_rgba(255,255,255,0.05)] group-hover:scale-110 flex items-center justify-center">
            <img
              src={avatar}
              alt={name}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.3))' }}
            />
          </div>
          {/* Glowing ring on hover */}
          <div className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
        </div>
      </div>

      {/* Profile Info with slide-up animation */}
      <div className="text-center relative z-10 transition-transform duration-300 group-hover:-translate-y-1 flex-grow">
        <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-400">
          {name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
          {role}
        </p>

        {followers && (
          <p className="mt-2 text-xs text-gray-500 transition-all duration-300 group-hover:text-purple-500 group-hover:font-medium">
            {followers.toLocaleString()} score
          </p>
        )}
      </div>

      {/* Tags with bounce animation */}
      {tags.length > 0 && (
        <div className="mt-6 flex justify-center gap-2 relative z-10">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={cn(
                "inline-block rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium shadow-[2px_2px_4px_rgba(0,0,0,0.2)] transition-all duration-300",
                "text-gray-300 group-hover:bg-purple-500/20 group-hover:text-purple-300 group-hover:border-purple-500/30 group-hover:scale-105 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Action Buttons with enhanced hover effects */}
      <div className="mt-6 flex gap-3 relative z-10">
        <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3 text-sm font-medium text-white shadow-[2px_2px_8px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-95 active:scale-90 group-hover:bg-purple-600 group-hover:border-purple-500">
          <Award className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          <span>View</span>
        </button>
        <button className="flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-3 text-white shadow-[2px_2px_8px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-95 active:scale-90 group-hover:bg-white/15">
          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
        </button>
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-3xl border border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  )
}
