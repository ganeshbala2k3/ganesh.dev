"use client";
import React from "react";

type TimelineItem = {
  date: string;
  title: string;
  description: string;
  link?: string;
};

const timelineData: TimelineItem[] = [
  {
    date: "March 2019",
    title: "Completed my 10th grade",
    description:
      "I scored 10 cgpa in my 10th grade.",
    link: "#",
  },
  {
    date: "March 2021",
    title: "Completed my 12th grade",
    description:
      "I scored 95% in my 12th grade.",
  },
  {
    date: "August 2025",
    title: "Started my B.Tech Journey",
    description:
      "I started my B.Tech journey in Computer Science and Engineering.",
  },
  {
    date: "August 2025",
    title: "Working as Course instructor for educational institute",
    description:
      "Teaching and mentoring students in core computer science subjects and programming languages.",
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-4 md:px-8">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4 tracking-tight">
          Experience & Journey
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          A brief overview of my professional timeline, highlighting major milestones and achievements.
        </p>
      </div>

      <div className="relative border-s border-purple-500/30 ml-3 md:ml-0">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-12 ms-8 relative group">
            {/* Animated Dot */}
            <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-900/50 rounded-full -start-11 ring-4 ring-black border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 group-hover:scale-125 group-hover:bg-purple-500">
              <span className="w-2 h-2 rounded-full bg-white transition-all duration-300 group-hover:scale-110"></span>
            </span>

            {/* Content Box */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-purple-500/30 hover:bg-white/[0.04]">
              {/* Date */}
              <time className="block mb-2 text-sm font-medium text-purple-400">
                {item.date}
              </time>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-base leading-relaxed">
                {item.description}
              </p>

              {/* Optional Link */}
              {item.link && (
                <a
                  href={item.link}
                  className="inline-flex items-center mt-5 text-sm font-medium text-white/80 hover:text-white transition-colors group/link"
                >
                  <span className="relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-purple-500 after:scale-x-0 group-hover/link:after:scale-x-100 after:transition-transform after:origin-left">
                    Learn more
                  </span>
                  <svg
                    className="w-4 h-4 ms-2 transform transition-transform group-hover/link:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;