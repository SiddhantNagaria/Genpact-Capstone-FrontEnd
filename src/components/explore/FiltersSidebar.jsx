import React from "react";

export default function FiltersSidebar({
    category,
    setCategory,
    mode,
    setMode,
    minRating,
    setMinRating,
}) {
    const categories = ["All", "Development", "Design", "Music", "Languages", "Business"];

    return (
        <aside className="w-full md:w-64 bg-[#0c1714] md:bg-[#0f1f1a] border border-white/10 rounded-xl p-4 md:p-5 text-sm text-white/80">
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <i className="fa-solid fa-filter text-xs text-[#1BD69C]" />
                Filters
            </h3>

            {/* Category */}
            <div className="mb-4">
                <p className="text-xs font-semibold text-white/60 mb-1">Category</p>
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            onClick={() => setCategory(cat)}
                            className={`px-3 py-1 rounded-full border text-xs ${category === cat
                                    ? "bg-[#1BD69C] text-[#012015] border-transparent"
                                    : "border-white/15 text-white/70 hover:bg-white/5"
                                } transition`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mode */}
            <div className="mb-4">
                <p className="text-xs font-semibold text-white/60 mb-1">Mode</p>
                <div className="flex flex-col gap-1 text-xs">
                    {["Any", "Online", "Offline"].map((opt) => (
                        <label key={opt} className="inline-flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="mode"
                                className="accent-[#1BD69C]"
                                checked={mode === opt}
                                onChange={() => setMode(opt)}
                            />
                            <span className="text-white/70">{opt}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Rating */}
            <div>
                <p className="text-xs font-semibold text-white/60 mb-1">Minimum Rating</p>
                <div className="flex items-center gap-2">
                    <input
                        type="range"
                        min={0}
                        max={5}
                        step={0.5}
                        value={minRating}
                        onChange={(e) => setMinRating(Number(e.target.value))}
                        className="w-full accent-[#1BD69C]"
                    />
                    <span className="text-xs text-white/70 w-8 text-right">{minRating}★</span>
                </div>
            </div>
        </aside>
    );
}
