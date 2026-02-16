import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import './Header.css';

const navItems = [
    { label: "Acasă", path: "/" },
    // { label: "Program", path: "/program" }, // Removed duplicate Program link
    { label: "Ansambluri", path: "/ansambluri" },
    { label: "Despre", path: "/despre" },
    { label: "Contact", path: "/contact" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled ? "glass border-b border-border" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
                <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl md:text-2xl font-bold text-gradient-gold">
            Festival Inimilor
          </span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 tracking-wide uppercase"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        to="/program"
                        className="nav-cta-button"
                    >
                        Vezi Programul
                    </Link>
                    <LanguageToggle />
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-foreground p-2"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-border overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        to={item.path}
                                        className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors block py-2"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <Link
                                to="/program"
                                className="mt-2 px-5 py-3 bg-primary text-primary-foreground rounded-full text-center font-semibold"
                            >
                                Vezi Programul
                            </Link>
                            <div className="mt-4 flex justify-center">
                                <LanguageToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Header;