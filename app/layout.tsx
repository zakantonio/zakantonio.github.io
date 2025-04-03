import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import AnimatedLayout from "./components/AnimatedLayout"

const inter = Inter({ subsets: ["latin"] })
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: "Antonio Zaccaria - Portfolio",
    description: "Personal portfolio of Antonio Zaccaria, Generative AI & Mobile Software Engineer",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={spaceGrotesk.className}>
            <body>
                <AnimatedLayout>
                    {children}
                </AnimatedLayout>
            </body>
        </html>
    )
} 