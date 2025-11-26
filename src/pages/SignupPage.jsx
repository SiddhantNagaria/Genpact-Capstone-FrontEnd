import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API_BASE_URL = "http://localhost:8080/api/users"; // apne backend ke hisaab se change kar sakta hai

const allSkills = [
    { id: 1, label: "Web Development", icon: "fa-solid fa-code" },
    { id: 2, label: "UI/UX Design", icon: "fa-solid fa-bezier-curve" },
    { id: 3, label: "Data Science", icon: "fa-solid fa-chart-line" },
    { id: 4, label: "Public Speaking", icon: "fa-solid fa-microphone" },
    { id: 5, label: "Guitar / Music", icon: "fa-solid fa-guitar" },
    { id: 6, label: "Photography", icon: "fa-solid fa-camera-retro" },
    { id: 7, label: "Digital Marketing", icon: "fa-solid fa-bullhorn" },
    { id: 8, label: "Languages", icon: "fa-solid fa-globe" },
];

export default function SignupPage() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        contact: "",
        bio: "",
    });

    const [teachSkills, setTeachSkills] = useState([]);
    const [learnSkills, setLearnSkills] = useState([]);

    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ----------------- HANDLERS -----------------

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const toggleSkill = (id, type) => {
        if (type === "teach") {
            setTeachSkills((prev) =>
                prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
            );
        } else {
            setLearnSkills((prev) =>
                prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
            );
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            newErrors.email = "Invalid email format";

        if (!form.password) newErrors.password = "Password is required";
        else if (form.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";

        if (!form.contact.trim()) newErrors.contact = "Contact is required";
        if (form.bio.length > 500)
            newErrors.bio = "Bio cannot exceed 500 characters";

        return newErrors;
    };

    const renderSkillChips = (ids) =>
        ids
            .map((id) => allSkills.find((s) => s.id === id)?.label)
            .filter(Boolean)
            .join(", ");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError("");

        const vErrors = validate();
        setErrors(vErrors);
        if (Object.keys(vErrors).length > 0) return;

        setIsSubmitting(true);
        try {
            const payload = {
                name: form.name,
                email: form.email,
                password: form.password,
                contact: form.contact,
                bio: form.bio,
            };

            await axios.post(`${API_BASE_URL}/register`, payload);

            // TODO: yahan baad me teachSkills / learnSkills ke liye
            // alag API calls laga sakte ho.

            navigate("/login");
        } catch (err) {
            console.error(err);
            if (err.response?.data?.message) {
                setSubmitError(err.response.data.message);
            } else {
                setSubmitError("Something went wrong. Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    // ----------------- UI -----------------

    return (
        <div
            className="min-h-screen flex flex-col"
            style={{
                background:
                    "radial-gradient(circle at top, #0A7A5E 0, #032018 45%, #010f0c 100%)",
            }}
        >
            {/* NAVBAR */}
            <Navbar />

            {/* MAIN SIGNUP AREA (CENTERED) */}
            <main className="flex-1 flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-md">
                    {/* Logo / heading */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-extrabold text-[#1BD69C] tracking-tight">
                            Create your account
                        </h1>
                        <p className="text-sm text-white/60 mt-1">
                            Join SkillSwap and start exchanging skills with others.
                        </p>
                    </div>

                    {/* SIGNUP CARD */}
                    <div className="bg-[#032820]/95 border border-white/10 rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.6)] px-6 py-7">
                        {submitError && (
                            <div className="mb-4 text-sm text-red-300 bg-red-900/30 border border-red-500/40 rounded-md px-3 py-2">
                                {submitError}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name */}
                            <div>
                                <label className="block text-sm text-white/80 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full rounded-lg bg-[#021d16] border border-white/15 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#1BD69C]"
                                    placeholder="Enter your full name"
                                />
                                {errors.name && (
                                    <p className="text-xs text-red-300 mt-1">{errors.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm text-white/80 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full rounded-lg bg-[#021d16] border border-white/15 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#1BD69C]"
                                    placeholder="you@example.com"
                                />
                                {errors.email && (
                                    <p className="text-xs text-red-300 mt-1">{errors.email}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm text-white/80 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className="w-full rounded-lg bg-[#021d16] border border-white/15 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#1BD69C]"
                                    placeholder="At least 6 characters"
                                />
                                {errors.password && (
                                    <p className="text-xs text-red-300 mt-1">{errors.password}</p>
                                )}
                            </div>

                            {/* Contact */}
                            <div>
                                <label className="block text-sm text-white/80 mb-1">
                                    Contact
                                </label>
                                <input
                                    type="text"
                                    name="contact"
                                    value={form.contact}
                                    onChange={handleChange}
                                    className="w-full rounded-lg bg-[#021d16] border border-white/15 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#1BD69C]"
                                    placeholder="+91 98765 43210"
                                />
                                {errors.contact && (
                                    <p className="text-xs text-red-300 mt-1">{errors.contact}</p>
                                )}
                            </div>

                            {/* Bio */}
                            <div>
                                <label className="block text-sm text-white/80 mb-1">
                                    Bio (optional)
                                </label>
                                <textarea
                                    name="bio"
                                    value={form.bio}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full rounded-lg bg-[#021d16] border border-white/15 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#1BD69C] resize-none"
                                    placeholder="Tell others a bit about your background & interests..."
                                />
                                {errors.bio && (
                                    <p className="text-xs text-red-300 mt-1">{errors.bio}</p>
                                )}
                            </div>

                            {/* Teach Skills */}
                            <div>
                                <label className="block text-sm text-white/80 mb-1 flex items-center gap-2">
                                    <i className="fa-solid fa-chalkboard-user text-xs text-[#1BD69C]" />
                                    Skills you can teach
                                </label>
                                <div className="relative">
                                    <details className="group">
                                        <summary className="w-full rounded-lg bg-[#021d16] border border-white/15 px-3 py-2 text-sm text-white flex items-center justify-between list-none cursor-pointer">
                                            <span className="truncate text-white/80">
                                                {teachSkills.length
                                                    ? renderSkillChips(teachSkills)
                                                    : "Select skills you can teach"}
                                            </span>
                                            <i className="fa-solid fa-chevron-down text-xs text-white/60" />
                                        </summary>
                                        <div className="absolute left-0 right-0 mt-1 bg-[#021d16] border border-white/20 rounded-lg z-20 max-h-44 overflow-auto">
                                            {allSkills.map((skill) => (
                                                <button
                                                    key={skill.id}
                                                    type="button"
                                                    onClick={() => toggleSkill(skill.id, "teach")}
                                                    className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-left ${teachSkills.includes(skill.id)
                                                            ? "bg-[#0A7A5E] text-white"
                                                            : "text-white/70 hover:bg-white/5"
                                                        }`}
                                                >
                                                    <i className={`${skill.icon} text-sm`} />
                                                    <span>{skill.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </details>
                                </div>
                            </div>

                            {/* Learn Skills */}
                            <div>
                                <label className="block text-sm text-white/80 mb-1 flex items-center gap-2">
                                    <i className="fa-solid fa-graduation-cap text-xs text-[#1BD69C]" />
                                    Skills you want to learn
                                </label>
                                <div className="relative">
                                    <details className="group">
                                        <summary className="w-full rounded-lg bg-[#021d16] border border-white/15 px-3 py-2 text-sm text-white flex items-center justify-between list-none cursor-pointer">
                                            <span className="truncate text-white/80">
                                                {learnSkills.length
                                                    ? renderSkillChips(learnSkills)
                                                    : "Select skills you want to learn"}
                                            </span>
                                            <i className="fa-solid fa-chevron-down text-xs text-white/60" />
                                        </summary>
                                        <div className="absolute left-0 right-0 mt-1 bg-[#021d16] border border-white/20 rounded-lg z-20 max-h-44 overflow-auto">
                                            {allSkills.map((skill) => (
                                                <button
                                                    key={skill.id}
                                                    type="button"
                                                    onClick={() => toggleSkill(skill.id, "learn")}
                                                    className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-left ${learnSkills.includes(skill.id)
                                                            ? "bg-[#0A7A5E] text-white"
                                                            : "text-white/70 hover:bg-white/5"
                                                        }`}
                                                >
                                                    <i className={`${skill.icon} text-sm`} />
                                                    <span>{skill.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </details>
                                </div>
                            </div>

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-2 bg-[#1BD69C] hover:bg-[#12b27c] text-[#02241b] font-semibold py-2.5 rounded-lg text-sm shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Creating account..." : "Create Account"}
                            </button>
                        </form>

                        {/* Login link */}
                        <p className="text-xs text-white/60 mt-4 text-center">
                            Already have an account?{" "}
                            <Link to="/login" className="text-[#1BD69C] hover:text-[#9fffe0]">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </main>

            {/* FOOTER – bottom me proper full width */}
            <Footer />
        </div>
    );
}
