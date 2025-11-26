import React from "react";

export default function SearchBar({ value, onChange, onSubmit }) {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") onSubmit();
    };

    return (
        <div className="mb-6">
            <label className="block text-sm text-white/70 mb-2">
                Search skills or people
            </label>
            <div className="flex items-center rounded-lg bg-[#021912] border border-white/15 px-3 py-2 shadow-sm">
                <i className="fa-solid fa-magnifying-glass text-white/50 text-sm mr-2" />
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search skills, users, topics..."
                    className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/35"
                />
                <button
                    onClick={onSubmit}
                    type="button"
                    className="ml-3 px-3 py-1.5 rounded-md bg-[#1BD69C] text-xs font-semibold text-[#02241b] hover:bg-[#11b47b] transition"
                >
                    Search
                </button>
            </div>
        </div>
    );
}
