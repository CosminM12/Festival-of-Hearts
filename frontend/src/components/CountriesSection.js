import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";

const countries = [
    { name: "România", className: "country-romania" },
    { name: "Mexic", className: "country-mexico" },
    { name: "India", className: "country-india" },
    { name: "Japonia", className: "country-japan" },
    { name: "Grecia", className: "country-greece" },
    { name: "Brazilia", className: "country-brazil" },
    { name: "Georgia", className: "country-georgia" },
    { name: "Irlanda", className: "country-ireland" },
    { name: "Turcia", className: "country-turkey" },
    { name: "Serbia", className: "country-serbia" },
    { name: "Columbia", className: "country-colombia" },
    { name: "Polonia", className: "country-poland" },
    { name: "Ungaria", className: "country-hungary" },
    { name: "Maroc", className: "country-morocco" },
];

const CountriesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="countries" className="py-24 md:py-32 relative" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                        Participanți 2025
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl font-bold">
                        Țările <span className="text-gradient-gold">Participante</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-3 max-w-4xl mx-auto"
                >
                    {countries.map((country, i) => (
                        <motion.span
                            key={country.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                            className={`font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground/30 cursor-default transition-all duration-500 ${country.className}`}
                        >
                            {country.name}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-center text-muted-foreground text-sm mt-12"
                >
                    ✦ Treci cu mouse-ul peste numele unei țări pentru a descoperi culorile steagului ✦
                </motion.p>
            </div>
        </section>
    );
};

export default CountriesSection;