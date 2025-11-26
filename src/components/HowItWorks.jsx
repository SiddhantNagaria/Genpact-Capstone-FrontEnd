import React from "react";

export default function HowItWorks() {
    const steps = [
        {
            title: "Share Your Expertise",
            desc: "Teach skills you already know — coding, design, fitness, music & more.",
            icon: "fa-solid fa-chalkboard-user",
        },
        {
            title: "Learn from Others",
            desc: "Pick a skill you want & match with mentors instantly — no payment required.",
            icon: "fa-solid fa-graduation-cap",
        },
        {
            title: "Grow Together",
            desc: "Exchange skills, schedule meets & upgrade your life — mutually beneficial.",
            icon: "fa-solid fa-handshake",
        },
    ];

    return (
        <section className="py-16 w-full bg-[#04372C] border-t border-[#0A7A5E]/30">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-4xl font-extrabold text-white tracking-tight">
                    How It Works
                </h2>
                <p className="text-white/60 mt-2 text-lg font-light">
                    A simple flow designed for real skill growth.
                </p>

                {/* CARD GRID */}
                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="group p-8 rounded-xl bg-[#064C3B]/45 backdrop-blur-md border border-white/10
                         transition-all duration-400 cursor-pointer hover:bg-[#064C3B]/60 
                         hover:border-white/20"
                        >
                            {/* FontAwesome Icon */}
                            <div className="w-14 h-14 rounded-lg mx-auto mb-6 flex items-center justify-center 
                              text-white text-2xl bg-white/10 group-hover:bg-white/15
                              transition-all duration-300">
                                <i className={step.icon}></i>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/60 text-sm leading-relaxed">
                                {step.desc}
                            </p>

                            {/* Improved Premium Hover Accent Line */}
                            <div className="relative mx-auto mt-6 h-[2px] w-12 bg-white/20 
                              transition-all duration-500 group-hover:bg-white/70 
                              group-hover:w-24 group-hover:translate-y-[2px] 
                              group-hover:shadow-[0_0_6px_rgba(255,255,255,0.35)]" />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
