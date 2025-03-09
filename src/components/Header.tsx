import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Variants for menu items animation
    const menuItemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-2xl z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            <header className="fixed w-full z-50 backdrop-blur-md ">
                <div className="flex justify-between items-center container mx-auto py-4 px-6">
                    <a href="/" className="text-sm sm:text-lg md:text-2xl font-jetbrains">Seatplan Generator</a>

                    <nav className="flex items-center gap-6">
                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex gap-4">
                            <li><a href="/features">Features</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>

                        <a href="/start" className="bg-white text-black text-xs sm:text-base px-4 py-2 rounded-lg cursor-pointer">Start Now</a>

                        {/* Hamburger Menu Button */}
                        <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </nav>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="absolute top-full left-0 w-full z-20"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <ul className="flex flex-col gap-4 py-4">
                                {["Features", "About", "Contact"].map((item, index) => (
                                    <motion.li
                                        key={item}
                                        variants={menuItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        transition={{ delay: index * 0.1 }}
                                        className="hover:bg-white hover:text-black rounded-lg py-2 px-4 transition-colors" 
                                    >
                                        <a href={`/${item.toLowerCase()}`} className="block text-lg">{item}</a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Header;
