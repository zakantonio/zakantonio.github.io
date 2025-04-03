'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
    children: ReactNode
}

const variants = {
    inactive: {
        y: 20,
        opacity: 0,
        transition: {
            duration: 0
        }
    },
    active: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0
        }
    }
}

const PageTransition = ({ children }: PageTransitionProps) => {
    return (
        <motion.main
            variants={variants}
            initial="inactive"
            animate="active"
            exit="exit"
            className="w-full"
        >
            {children}
        </motion.main>
    )
}

export default PageTransition 