import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";
import Resume from '../../assets/Urmil-Ramani-IT-Engineer-Resume.pdf'
import { NavLink } from 'react-router-dom'


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        setOpen(false);
        setMenuOpen(false);
    }, [location]);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <header className="fixed top-1 w-[calc(100%-1rem)] z-50">
                <nav
                    className="flex justify-between items-center leading-none rounded-2xl max-w-6xl mx-auto px-6 py-2 bg-slate-900/50 backdrop-blur-md border border-white/10 shadow-sm text-white"
                >
                    <div className="font-semibold whitespace-nowrap">
                        Urmil
                    </div>

                    <ul className="hidden sm:flex gap-5 justify-center whitespace-nowrap">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/about", label: "About" },
                            { to: "/projects", label: "Projects" },
                            { to: "/contact", label: "Contact" },
                        ].map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "nav-link-active" : ""}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden sm:block relative" ref={dropdownRef}>
                        <button
                            onClick={() => setOpen((prev) => !prev)}
                            className="border-purple-300 border-2 px-4 py-2 rounded-3xl whitespace-nowrap hover:bg-purple-300/10 transition"
                        >
                            View Resume
                        </button>

                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute right-0 mt-3 w-44 bg-slate-900 border border-white/10 rounded-xl shadow-lg overflow-hidden"
                                >
                                    <a
                                        href={Resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-3 hover:bg-white/10"
                                    >
                                        View Online
                                    </a>
                                    <a
                                        href={Resume}
                                        download
                                        className="block px-4 py-3 hover:bg-white/10"
                                    >
                                        Download PDF
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="sm:hidden text-2xl px-2"
                        aria-label="Open Menu"
                    >
                        ☰
                    </button>
                </nav>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ type: "spring", stiffness: 260, damping: 22 }}
                            className="sm:hidden mt-2 mx-auto max-w-6xl rounded-2xl
                                    bg-slate-900/90 backdrop-blur-md border border-white/10
                                    p-4"
                        >
                            <ul className="flex flex-col gap-4 text-center">
                                {[
                                    { to: "/", label: "Home" },
                                    { to: "/about", label: "About" },
                                    { to: "/projects", label: "Projects" },
                                    { to: "/contact", label: "Contact" },
                                ].map((item) => (
                                    <li key={item.to}>
                                        <NavLink
                                            to={item.to}
                                            onClick={() => setMenuOpen(false)}
                                            className={({ isActive }) =>
                                                `block py-2 text-lg nav-link ${isActive ? "nav-link-active" : ""
                                                }`
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                                <hr className="border-white/10 my-2" />
                                <li>
                                    <a
                                        href={Resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setMenuOpen(false)}
                                        className="block py-2 text-lg nav-link text-purple-300"
                                    >
                                        View Resume
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={Resume}
                                        download
                                        onClick={() => setMenuOpen(false)}
                                        className="block py-2 text-lg nav-link text-purple-300"
                                    >
                                        Download Resume
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    )
}

export default Header