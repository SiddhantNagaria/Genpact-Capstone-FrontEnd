import React from "react";

export default function UserCard({ user }) {
    return (
        <div className="group bg-[#021912]/90 border border-white/10 rounded-xl p-4 shadow-sm hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] hover:border-white/25 transition-all duration-300">
            <div className="flex items-center gap-3">
                <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/15"
                />
                <div>
                    <p className="text-sm font-semibold text-white">{user.name}</p>
                    <p className="text-xs text-white/50 flex items-center gap-1">
                        <i className="fa-solid fa-location-dot text-[10px] text-white/40" />
                        {user.location}
                    </p>
                </div>
            </div>

            <div className="mt-3 text-xs text-white/60">
                <p className="flex items-center gap-1">
                    <i className="fa-solid fa-chalkboard-user text-[10px] text-[#1BD69C]" />
                    <span>Teaches:</span>
                    <span className="text-white/80">{user.teaches.join(", ")}</span>
                </p>
                <p className="flex items-center gap-1 mt-1">
                    <i className="fa-solid fa-book-open-reader text-[10px] text-[#1BD69C]" />
                    <span>Wants to learn:</span>
                    <span className="text-white/80">{user.learns.join(", ")}</span>
                </p>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-yellow-400">
                    <i className="fa-solid fa-star text-[11px]" />
                    <span>{user.rating.toFixed(1)}</span>
                </div>
                <span className="px-2 py-[2px] rounded-full border border-white/20 text-white/70">
                    {user.mode}
                </span>
            </div>

            <button
                type="button"
                className="mt-4 w-full text-xs font-semibold px-3 py-2 rounded-md bg-[#1BD69C] text-[#012015] hover:bg-[#12b27c] transition"
            >
                View Profile
            </button>
        </div>
    );
}
