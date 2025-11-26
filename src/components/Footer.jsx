// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-t mt-12">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <div className="text-xl font-semibold text-teal-600">SkillSwap</div>
                    <div className="text-sm text-gray-600 mt-2">Trade skills. Grow together.</div>
                </div>

                <div className="flex gap-8">
                    <div className="text-sm">
                        <div className="font-medium">Company</div>
                        <div className="mt-2 space-y-1">
                            <Link to="/about" className="block text-gray-600 hover:text-teal-600">About</Link>
                            <Link to="/contact" className="block text-gray-600 hover:text-teal-600">Contact</Link>
                            <Link to="/privacy" className="block text-gray-600 hover:text-teal-600">Privacy</Link>
                        </div>
                    </div>

                    <div className="text-sm">
                        <div className="font-medium">Community</div>
                        <div className="mt-2 space-y-1">
                            <Link to="/explore" className="block text-gray-600 hover:text-teal-600">Explore</Link>
                            <Link to="/sessions" className="block text-gray-600 hover:text-teal-600">Sessions</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t">
                <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-500">
                    © {new Date().getFullYear()} SkillSwap · All rights reserved
                </div>
            </div>
        </footer>
    );
}
