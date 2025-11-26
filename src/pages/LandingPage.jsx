// src/pages/LandingPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import SkillsCarousel from '../components/SkillsCarousel';
import TestimonialsSlider from '../components/TestimonialsSlider';
import Footer from '../components/Footer';

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <HowItWorks />
                <SkillsCarousel />
                <TestimonialsSlider />
            </main>
            <Footer />
        </div>
    );
}
