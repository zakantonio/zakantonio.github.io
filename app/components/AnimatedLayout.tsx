'use client'

import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import PageTransition from "./PageTransition"
import Navigation from "./Navigation"

export default function AnimatedLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <div className="relative min-h-screen">
            <Navigation />
            <div className="relative z-0">
                <AnimatePresence
                    mode="popLayout"
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <motion.div
                        key={pathname}
                        className="w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                    >
                        <PageTransition>
                            {children}
                        </PageTransition>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
} 