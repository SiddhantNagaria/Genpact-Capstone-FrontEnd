import React from "react";

export default function PopularSkillsCarousel() {

    const skills = [
        { name: "Web Development", icon: "fa-solid fa-code" },
        { name: "UI/UX Design", icon: "fa-solid fa-bezier-curve" },
        { name: "Data Science", icon: "fa-solid fa-chart-line" },
        { name: "Public Speaking", icon: "fa-solid fa-microphone" },
        { name: "Photography", icon: "fa-solid fa-camera-retro" },
        { name: "Music & Guitar", icon: "fa-solid fa-guitar" },
        { name: "Digital Marketing", icon: "fa-solid fa-bullhorn" },
        { name: "AI / ML Concepts", icon: "fa-solid fa-brain" },
        { name: "Video Editing", icon: "fa-solid fa-film" },
    ];

    return (
        <section
            className="py-16 overflow-hidden border-t border-[#0A7A5E]/30 select-none"
            style={{ background: "linear-gradient(120deg,#064C3B,#0A7A5E,#095B47)" }}  // matches hero dark theme
        >

            <div className="max-w-7xl mx-auto px-6">

                {/* TITLE */}
                <h2 className="text-3xl font-bold text-[#E7FFF4] tracking-tight mb-10">
                    Popular Skills
                </h2>

                {/* INFINITE LOOP SLIDER */}
                <div className="relative w-full overflow-hidden">

                    <div className="animate-scroll-x flex gap-6">
                        {[...skills, ...skills, ...skills].map((skill, i) => (

                            <div
                                key={i}
                                className="group min-w-[240px] p-6 rounded-xl flex-shrink-0 
                           bg-white/10 border border-white/10 backdrop-blur-xl
                           transition-all duration-400 cursor-pointer
                           hover:bg-white/15 hover:border-white/25 hover:scale-[1.04]"
                            >
                                {/* ICON */}
                                <div className="text-white text-3xl mb-4 opacity-95">
                                    <i className={skill.icon}></i>
                                </div>

                                {/* SKILL NAME */}
                                <h3 className="text-lg font-semibold text-white tracking-wide">
                                    {skill.name}
                                </h3>

                                {/* 🔥 PREMIUM HOVER UNDERLINE */}
                                <div className="
                  h-[2px] w-12 mx-auto mt-3 bg-white/20 rounded-full 
                  transition-all duration-500 
                  group-hover:w-24 group-hover:bg-white/60 group-hover:shadow-[0_0_6px_rgba(255,255,255,0.35)]
                " />
                            </div>

                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
