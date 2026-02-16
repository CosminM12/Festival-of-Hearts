import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Heart, Globe, Music, Users } from "lucide-react";

const stats = [
    { icon: Globe, label: "Țări", value: "14" },
    { icon: Users, label: "Ansambluri", value: "35" },
    { icon: Music, label: "Spectacole", value: "50+" },
    { icon: Heart, label: "Ani de Tradiție", value: "35" },
];

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 md:py-32 relative" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                            Despre Festival
                        </p>
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Unde Tradițiile
                            <br />
                            <span className="text-gradient-gold">Unesc Inimile</span>
                        </h2>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                            Din 1990, Festivalul Inimilor aduce în Timișoara cele mai frumoase tradiții
                            folclorice din întreaga lume. Muzică, dans și costume tradiționale — toate reunite
                            în inima Banatului, transformând orașul într-o scenă globală a culturii populare.
                        </p>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                            Fiecare ediție celebrează diversitatea culturală prin spectacole de dans și muzică
                            tradițională, ateliere interactive și parade colorate care unesc comunități din
                            peste 14 țări.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                                className="bg-gradient-card border border-border rounded-xl p-6 text-center hover-glow group"
                            >
                                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                                    {stat.value}
                                </p>
                                <p className="text-muted-foreground text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;