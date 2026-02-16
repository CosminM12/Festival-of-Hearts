import React, { useRef } from 'react';
import { motion, useInView } from "motion/react";
import { MapPin, Mail, Phone, Instagram, Facebook } from "lucide-react";
import './Footer.css';

const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <footer id="contact" className="border-t border-border py-16 md:py-20" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-3 gap-12"
                >
                    {/* Brand */}
                    <div>
                        <h3 className="font-display text-2xl font-bold text-gradient-gold mb-4">
                            Festival Inimilor
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Festivalul Internațional de Folclor al Timișoarei.
                            Celebrând diversitatea culturală din 1990.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact</h4>
                        <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                            <a href="mailto:contact@festivalinimilor.ro" className="flex items-center gap-2 hover:text-primary transition-colors">
                                <Mail className="w-4 h-4" /> contact@festivalinimilor.ro
                            </a>
                            <a href="tel:+40256123456" className="flex items-center gap-2 hover:text-primary transition-colors">
                                <Phone className="w-4 h-4" /> +40 256 123 456
                            </a>
                            <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Timișoara, România
              </span>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-display text-lg font-semibold text-foreground mb-4">Urmărește-ne</h4>
                        <div className="flex gap-3">
                            <a
                                href="https://www.facebook.com/profile.php?id=61577390266071"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.instagram.com/festivalulinimiloroficial/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <span>© 2025 Festivalul Inimilor Timișoara. Toate drepturile rezervate.</span>
                    <span>Organizat de Primăria Municipiului Timișoara</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;