import Link from "next/link"

export default function ExperiencePage() {
    const experiences = [
        {
            title: "Generative AI & Mobile Software Engineer",
            company: "Freelance",
            period: "2021 - Present",
            description: [
                "Research and development in AI, GenAI, and robotics",
                "Development of AI-powered applications and chatbots using LLMs",
                "Mobile app development with Android SDK, React Native and Flutter",
                "Working with BLE and connected devices"
            ]
        },
        {
            title: "Android Developer",
            company: "Swisscom SA",
            period: "2022 - 2024",
            link:"https://www.swisscom.ch/",
            description: [
                "Maintained main software for their IPTVs",
                "Developed multi brand functionality on existing codebase",
                "Bash scripting for interacting with the physical device directly"
            ]
        },
        {
            title: "Android Developer",
            company: "HGN s.r.l.",
            link: "https://hagane.com/it",
            description: [
                "Native Android App",
                "BLE communication with physical lock",
                "BLE auto detect for hands free behaviour"
            ]
        },
        {
            title: "Previously",
            company: "",
            period: "2014 - 2021",
            description: [
                "Consultant Android Developr at Abstract Srl (Jan 2021 - Jul 2021)",
                "Senior Android Developer at Sclak (Feb 2020 - Sep 2020)",
                "Consultant Android Developer at WiNK Srl (Sep 2018 - Jan 2018)",
                "Consultant Android Developer at SiliconDev (Jul 2015 - May 2016)",
                "Internship Android Developer at TIM (Dec 2014 - July 2015)",
            ]
        }
    ]

    return (
        <main className="relative min-h-screen max-w-3xl mx-auto px-4 py-12 md:px-8 md:py-24">
            <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Experience</h1>
                <div className="space-y-12">
                    {experiences.map((experience, index) => (
                        <div key={index} className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">{experience.title}</h3>
                                <div className="text-muted-foreground">
                                    <p>
                                    {experience.link ? (
                                        <Link href={experience.link} target="_blank" className="hover:underline">
                                            {experience.company}
                                        </Link>
                                    ) : (
                                        experience.company
                                    )}
                                    </p>
                                    <p className="text-sm">{experience.period}</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                {experience.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
} 