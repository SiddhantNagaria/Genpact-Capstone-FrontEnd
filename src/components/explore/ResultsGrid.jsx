import React from "react";
import UserCard from "./UserCard";

export default function ResultsGrid({ users }) {
    if (!users.length) {
        return (
            <div className="text-center text-white/50 text-sm mt-10">
                No results found. Try adjusting filters or search terms.
            </div>
        );
    }

    return (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((u) => (
                <UserCard key={u.id} user={u} />
            ))}
        </div>
    );
}
