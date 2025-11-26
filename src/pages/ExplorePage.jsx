import { useMemo, useState } from "react";
import FiltersSidebar from "../components/explore/FiltersSidebar";
import ResultsGrid from "../components/explore/ResultsGrid";
import Navbar from "../components/Navbar";
import SearchBar from "../components/explore/Searchbar";
import Footer from "../components/Footer";

// TEMP MOCK DATA – replace later with backend API
const MOCK_USERS = [
    {
        id: 1,
        name: "Aarav Sharma",
        avatar: "https://i.pravatar.cc/150?img=32",
        location: "Mumbai, India",
        teaches: ["Guitar", "Music Theory"],
        learns: ["Web Development"],
        mode: "Online",
        category: "Music",
        rating: 4.8,
    },
    {
        id: 2,
        name: "Riya Mehta",
        avatar: "https://i.pravatar.cc/150?img=48",
        location: "Delhi, India",
        teaches: ["UI/UX Design"],
        learns: ["Public Speaking"],
        mode: "Offline",
        category: "Design",
        rating: 4.9,
    },
    {
        id: 3,
        name: "Devansh Rao",
        avatar: "https://i.pravatar.cc/150?img=12",
        location: "Bengaluru, India",
        teaches: ["Web Development"],
        learns: ["Guitar"],
        mode: "Online",
        category: "Development",
        rating: 4.6,
    },
    {
        id: 4,
        name: "Sara Yadav",
        avatar: "https://i.pravatar.cc/150?img=56",
        location: "Pune, India",
        teaches: ["English Speaking"],
        learns: ["Digital Marketing"],
        mode: "Offline",
        category: "Languages",
        rating: 4.7,
    },
];

export default function ExplorePage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [mode, setMode] = useState("Any");
    const [minRating, setMinRating] = useState(0);

    const filteredUsers = useMemo(() => {
        return MOCK_USERS.filter((u) => {
            const searchMatch =
                !search ||
                u.name.toLowerCase().includes(search.toLowerCase()) ||
                u.teaches.some((t) =>
                    t.toLowerCase().includes(search.toLowerCase())
                );

            const categoryMatch =
                category === "All" || u.category === category;

            const modeMatch =
                mode === "Any" || u.mode.toLowerCase() === mode.toLowerCase();

            const ratingMatch = u.rating >= minRating;

            return searchMatch && categoryMatch && modeMatch && ratingMatch;
        });
    }, [search, category, mode, minRating]);

    const handleSearch = () => {
        // currently filtering locally; when you add API, trigger fetch here
    };

    return (
        <div
            className="min-h-screen"
            style={{
                background:
                    "radial-gradient(circle at top, #0A7A5E 0, #021612 38%, #010b09 100%)",
            }}
        >
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold text-white mb-6">
                    Explore Skills & People
                </h1>

                {/* Top search */}
                <SearchBar
                    value={search}
                    onChange={setSearch}
                    onSubmit={handleSearch}
                />

                {/* Layout: sidebar + results */}
                <div className="mt-6 flex flex-col md:flex-row gap-6">
                    <FiltersSidebar
                        category={category}
                        setCategory={setCategory}
                        mode={mode}
                        setMode={setMode}
                        minRating={minRating}
                        setMinRating={setMinRating}
                    />

                    <main className="flex-1">
                        <ResultsGrid users={filteredUsers} />
                    </main>
                </div>
            </div>
            <Footer />
        </div>

    );
}
