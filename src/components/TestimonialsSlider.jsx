import React from "react";

export default function TestimonialsSection() {

    const reviews = [
        {
            name: "Aarav Sharma",
            feedback: "Exchanged guitar lessons for UI design. Best experience – no money, just growth.",
            avatar: "https://i.pravatar.cc/150?img=32",
            rating: 5
        },
        {
            name: "Riya Mehta",
            feedback: "Learnt full-stack development while teaching photography. Love the concept!",
            avatar: "https://i.pravatar.cc/150?img=48",
            rating: 5
        },
        {
            name: "Devansh Rao",
            feedback: "Skill swap boosted my communication & coding confidence. Super smooth!",
            avatar: "https://i.pravatar.cc/150?img=12",
            rating: 4
        },
        {
            name: "Sara Yadav",
            feedback: "Found genuine mentors here. Community vibe feels warm & collaborative.",
            avatar: "https://i.pravatar.cc/150?img=56",
            rating: 5
        }
    ];

    return (
        <section
            className="py-16 border-t border-[#0A7A5E]/30"
            style={{ background: "linear-gradient(120deg,#04372C,#064C3B,#0A7A5E)" }}
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl font-extrabold text-white tracking-tight text-center">
                    What People Say
                </h2>
                <p className="text-white/60 text-lg text-center mt-2">
                    Real learners. Real swaps. Real growth.
                </p>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-14">

                    {reviews.map((r, i) => (
                        <div
                            key={i}
                            className="group p-7 rounded-xl bg-white/8 backdrop-blur-xl border border-white/10
                         hover:bg-white/12 hover:border-white/25 hover:-translate-y-[6px]
                         transition-all duration-400 cursor-pointer
                         hover:shadow-[0_0_30px_-8px_rgba(255,255,255,0.18)]"
                        >
                            {/* Avatar */}
                            <img
                                src={r.avatar}
                                className="w-14 h-14 rounded-full object-cover mx-auto mb-4 border border-white/15"
                            />

                            {/* Name */}
                            <h3 className="text-lg font-semibold text-white text-center group-hover:text-white/95 transition">
                                {r.name}
                            </h3>

                            {/* FontAwesome Star Ratings */}
                            <div className="flex justify-center gap-1 mt-2">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <i
                                        key={idx}
                                        className={
                                            idx < r.rating
                                                ? "fa-solid fa-star text-yellow-400 text-sm"
                                                : "fa-regular fa-star text-yellow-400 text-sm opacity-60"
                                        }
                                    />
                                ))}
                            </div>

                            {/* Feedback */}
                            <p className="text-white/65 mt-4 text-center text-sm leading-relaxed group-hover:text-white/80 transition">
                                {r.feedback}
                            </p>

                            {/* Line hover effect */}
                            <div className="h-[2px] w-10 bg-white/15 mx-auto mt-5 rounded-full 
                              transition-all duration-500 group-hover:w-20 group-hover:bg-white/60"/>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
