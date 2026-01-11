import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
    { name: 'Philosophy', href: '#about' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Varieties', href: '#varieties' },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [hoveredLink, setHoveredLink] = useState(null)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navVariants = {
        top: {
            width: "100%",
            maxWidth: "80rem", // max-w-7xl
            y: 0,
            backgroundColor: "rgba(255, 255, 255, 0)",
            backdropFilter: "blur(0px)",
            border: "1px solid rgba(255,255,255,0)",
            borderRadius: "0px",
            padding: "1.5rem 1.5rem"
        },
        scrolled: {
            width: "90%",
            maxWidth: "60rem",
            y: 10,
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.4)",
            borderRadius: "9999px",
            padding: "0.75rem 1.5rem"
        }
    }

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
                <motion.header
                    initial="top"
                    animate={isScrolled ? "scrolled" : "top"}
                    variants={navVariants}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // smooth easeOutQuint-ish
                    className="pointer-events-auto flex items-center justify-between shadow-sm shadow-transparent"
                    style={{
                        boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.04)" : "none"
                    }}
                >
                    {/* Logo Area */}
                    <a href="#" className="flex items-center gap-2 group z-10" onClick={() => window.scrollTo(0, 0)}>
                        <img
                            src="/logo.png"
                            alt="MycoFresh"
                            className="h-20 w-auto object-contain mix-blend-multiply"
                        />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 bg-white/0 rounded-full p-1" onMouseLeave={() => setHoveredLink(null)}>
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-nature-800 transition-colors duration-200 hover:text-nature-900 z-10"
                                onMouseEnter={() => setHoveredLink(link.name)}
                            >
                                {link.name}
                                {hoveredLink === link.name && (
                                    <motion.div
                                        layoutId="navbar-hover"
                                        className="absolute inset-0 bg-white/60 rounded-full shadow-sm border border-white/40 -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </a>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href="#order"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex items-center gap-2 px-5 py-2 bg-nature-900 text-nature-50 text-sm font-medium rounded-full hover:bg-nature-800 transition-all shadow-lg hover:shadow-nature-900/20"
                        >
                            Order
                            <ArrowUpRight className="w-4 h-4" />
                        </motion.a>

                        <button
                            className="md:hidden p-2 text-nature-900 bg-white/50 rounded-full backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </motion.header>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-nature-50/98 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {links.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-4xl font-display font-medium text-nature-900 hover:text-nature-600 transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#order"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-8 px-8 py-4 bg-nature-900 text-white text-xl rounded-full"
                            >
                                Order Now
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
