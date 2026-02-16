import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
    {
        day: "Miercuri",
        date: "2 Iulie",
        title: "Ceremonia de Deschidere",
        time: "19:00",
        venue: "Parcul Rozelor",
        description: "Parada ansamblurilor și spectacol inaugural",
    },
    {
        day: "Joi",
        date: "3 Iulie",
        title: "Noapte Internațională",
        time: "20:00",
        venue: "Piața Libertății",
        description: "Spectacole din Japonia, Brazilia și Georgia",
    },
    {
        day: "Vineri",
        date: "4 Iulie",
        title: "Seara Românească",
        time: "19:30",
        venue: "Parcul Rozelor",
        description: "Cele mai frumoase dansuri tradiționale românești",
    },
    {
        day: "Duminică",
        date: "6 Iulie",
        title: "Gala de Închidere",
        time: "20:00",
        venue: "Piața Unirii",
        description: "Spectacol final cu toate ansamblurile participante",
    },
];

const SchedulePreview = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 md:py-32 relative" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                        Program 2025
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl font-bold">
                        Momente <span className="text-gradient-gold">Cheie</span>
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {highlights.map((event, i) => (
                        <motion.div
                            key={event.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                            className="bg-gradient-card border border-border rounded-xl p-6 hover-glow group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex items-center gap-2 mb-4">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span className="text-primary text-sm font-medium">
                  {event.day} · {event.date}
                </span>
                            </div>

                            <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                {event.title}
                            </h3>

                            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                {event.description}
                            </p>

                            <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> {event.time}
                </span>
                                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" /> {event.venue}
                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <Link
                        to="/program"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold hover-glow hover:bg-gold-light transition-all duration-300"
                    >
                        Vezi Programul Complet →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default SchedulePreview;