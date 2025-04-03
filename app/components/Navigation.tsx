'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const links = [
        { href: '/', label: 'Home' },
        // { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/experience', label: 'Experience' },
        { href: '/education', label: 'Education' },
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
            {/* Mobile Menu Button */}
            <motion.button
                onClick={toggleMenu}
                className="fixed top-4 right-4 z-50 p-2 lg:hidden text-foreground hover:bg-foreground/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isMenuOpen ? 'close' : 'menu'}
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </motion.div>
                </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
                        onClick={closeMenu}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu Drawer */}
            <motion.nav
                className="fixed top-0 right-0 h-full w-64 bg-background border-l border-foreground/10 p-8 z-50 lg:hidden"
                initial={{ x: '100%' }}
                animate={{ x: isMenuOpen ? 0 : '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <motion.ul
                    className="space-y-6 mt-12"
                    variants={{
                        open: {
                            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                        },
                        closed: {
                            transition: { staggerChildren: 0.05, staggerDirection: -1 }
                        }
                    }}
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                >
                    {links.map((link) => (
                        <motion.li
                            key={link.href}
                            variants={{
                                open: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        y: { stiffness: 1000, velocity: -100 }
                                    }
                                },
                                closed: {
                                    y: 50,
                                    opacity: 0,
                                    transition: {
                                        y: { stiffness: 1000 }
                                    }
                                }
                            }}
                        >
                            <Link
                                href={link.href}
                                onClick={closeMenu}
                                className={`text-lg transition-colors duration-200 block ${pathname === link.href
                                    ? 'text-foreground font-medium'
                                    : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.nav>

            {/* Desktop Navigation */}
            <nav className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:block z-10">
                <ul className="space-y-6">
                    {links.map((link) => (
                        <motion.li
                            key={link.href}
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Link
                                href={link.href}
                                className={`text-sm transition-colors duration-200 relative ${pathname === link.href
                                    ? 'text-foreground font-medium'
                                    : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                <span className="relative z-10">{link.label}</span>
                                {pathname === link.href && (
                                    <motion.span
                                        layoutId="underline"
                                        className="absolute left-0 top-full block h-[2px] w-full bg-foreground"
                                    />
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Navigation 