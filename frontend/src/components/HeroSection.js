import React from 'react';
import { motion } from "motion/react";
// import heroBg from "../assets/hero-bg.jpg"; // Commented out until image is available

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 bg-gray-900"> {/* Fallback background */}
                {/* <img
                    src={heroBg}
                    alt="Festival of Hearts"
                    className="w-full h-full object-cover"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
            </div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-primary/40"
                    style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
                >
                    Timișoara · 2 – 6 Iulie 2025
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-6"
                >
                    <span className="text-gradient-gold text-shadow-glow">Festivalul</span>
                    <br />
                    <span className="text-foreground">Inimilor</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-muted-foreground text-base md:text-xl max-w-xl mx-auto mb-8 font-light"
                >
                    Festivalul Internațional de Folclor · Ediția a XXXV-a
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="/program"
                        className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold text-base hover-glow hover:bg-gold-light transition-all duration-300"
                    >
                        Descoperă Programul
                    </a>
                    <a
                        href="#about"
                        className="px-8 py-3.5 border border-primary/30 text-primary rounded-full font-semibold text-base hover:bg-primary/10 transition-all duration-300"
                    >
                        Despre Festival
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                {/*<motion.div*/}
                {/*    className="absolute bottom-8 left-1/2 -translate-x-1/2"*/}
                {/*    animate={{ y: [0, 10, 0] }}*/}
                {/*    transition={{ duration: 2, repeat: Infinity }}*/}
                {/*>*/}
                {/*    <div className="w-5 h-8 border-2 rounded-full flex items-start justify-center p-1" style={{ borderColor: 'rgba(150, 0, 24, 0.3)' }}>*/}
                {/*        <motion.div*/}
                {/*            className="w-1.5 h-1.5 bg-primary rounded-full"*/}
                {/*            animate={{ y: [0, 12, 0] }}*/}
                {/*            transition={{ duration: 2, repeat: Infinity }}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</motion.div>*/}
            </div>
        </section>
    );
};

export default HeroSection;