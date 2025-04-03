import { Github, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export default function Home() {
    return (
        <main className="relative min-h-screen max-w-3xl mx-auto px-4 py-12 md:px-8 md:py-24">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />

            {/* Header */}
            <div className="relative space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    👋 Hey, I&apos;m Antonio.
                </h1>
                <p className="text-xl text-muted-foreground">
                    Welcome to my corner of the web!
                </p>
            </div>

            {/* Introduction */}
            <div className="relative mt-8 space-y-6 text-lg">
                <p className="leading-relaxed">
                    I am a freelance developer with over 10 years of experience in mobile development and a
                    multidisciplinary background spanning robotics and artificial intelligence.💡
                </p>

                <p className="leading-relaxed">
                    Born and raised in beautiful Puglia 🌊, my journey has taken me through the historic streets of Rome,
                    the bustling energy of Milan, and the serene landscapes near Venice. Each city has added its own flavor
                    to my Italian story 🇮🇹
                </p>

                <p className="leading-relaxed">
                    After several years developing Android applications for various companies 📱, I embraced the
                    freelance path to pursue my passion for emerging technologies. 
                </p>

                <p className="leading-relaxed">Now I combine my mobile expertise
                    with AI development, creating innovative solutions that bridge the gap between users and technology 🤖
                </p>

                <p className="leading-relaxed">
                    When I&apos;m not working, you&apos;ll find me hiking through nature trails 🏃‍♂️, exploring the outdoors,
                    or back at my family house taking care of my beloved pets 🐾
                </p>

                <p className="leading-relaxed">
                    Let&apos;s connect! You can reach me at{' '}
                    <Link
                        href="mailto:antoniozaccaria.work@gmail.com"
                        className="text-lg text-blue-500 font-semibold hover:underline"
                    >
                        antoniozaccaria.work@gmail.com
                    </Link>


                </p>
            </div>

            {/* Social Links */}
            <div className="relative flex gap-4 mt-8">
                <Link
                    href="https://github.com/zakantonio"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                >
                    <Github className="h-6 w-6" />
                </Link>
                <Link
                    href="https://linkedin.com/in/zakantonio"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                >
                    <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                    href="https://youtube.com/@zak.develops"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                >
                    <Youtube className="h-6 w-6" />
                </Link>
            </div>
        </main>
    )
} 