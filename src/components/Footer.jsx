import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer
            className="py-8 border-t border-white/10"
            style={{ background: "linear-gradient(180deg,#021E17,#043226,#064C3B)" }}  // much darker
        >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">

                {/* BRAND */}
                <div>
                    <h2 className="text-xl font-extrabold text-white">SkillSwap</h2>
                    <p className="text-white/60 text-xs mt-2 leading-relaxed max-w-sm">
                        Learn what you want. Teach what you know.
                        Swap value — not money.
                    </p>

                    <div className="flex gap-3 mt-4 text-white/60 text-sm">
                        <a href="#"><i className="fa-brands fa-instagram hover:text-white transition"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin hover:text-white transition"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter hover:text-white transition"></i></a>
                        <a href="#"><i className="fa-brands fa-github hover:text-white transition"></i></a>
                    </div>
                </div>

                {/* Explore */}
                <div>
                    <h4 className="text-white font-medium text-sm">Explore</h4>
                    <ul className="mt-2 space-y-1 text-white/60 text-xs">
                        <li><Link className="hover:text-white transition" to="/explore">Skills</Link></li>
                        <li><Link className="hover:text-white transition" to="/mentors">Mentors</Link></li>
                        <li><Link className="hover:text-white transition" to="/sessions">Sessions</Link></li>
                        <li><Link className="hover:text-white transition" to="/reviews">Reviews</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="text-white font-medium text-sm">Company</h4>
                    <ul className="mt-2 space-y-1 text-white/60 text-xs">
                        <li><Link className="hover:text-white transition" to="/about">About Us</Link></li>
                        <li><Link className="hover:text-white transition" to="/careers">Careers</Link></li>
                        <li><Link className="hover:text-white transition" to="/contact">Contact</Link></li>
                        <li><Link className="hover:text-white transition" to="/blog">Blog</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="text-white font-medium text-sm">Support</h4>
                    <ul className="mt-2 space-y-1 text-white/60 text-xs">
                        <li><Link className="hover:text-white transition" to="/help">Help Center</Link></li>
                        <li><Link className="hover:text-white transition" to="/faq">FAQ</Link></li>
                        <li><Link className="hover:text-white transition" to="/privacy">Privacy Policy</Link></li>
                        <li><Link className="hover:text-white transition" to="/terms">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright - Minimal */}
            <div className="text-center text-white/40 mt-6 text-xs tracking-wide">
                © {new Date().getFullYear()} SkillSwap — All Rights Reserved.
            </div>
        </footer>
    );
}
