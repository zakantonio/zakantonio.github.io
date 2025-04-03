export default function EducationPage() {
    const education = [
        {
            degree: "Master in Coding",
            school: "BigWave",
            period: "Sep 2024 - Feb 2025",
            description: "completed an intensive course covering Unity, Unreal Engine, Python, Deep Learning, Generative AI, and Chatbot development, gaining hands-on experience in building interactive applications, virtual environments, and AI-driven solutions."
        },
        {
            degree: "IT Systems Architect",
            school: "ELIS College",
            period: "2013 - 2015",
            description: "Gained technical skills (development, networking, ecc) and personal skills (AGILE, project management, public speaking, team building)."
        }
    ]

    return (
        <main className="relative min-h-screen max-w-3xl mx-auto px-4 py-12 md:px-8 md:py-24">
            <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Education</h1>
                <div className="space-y-12">
                    <p className="text-muted-foreground italic">These are the key educational experiences that provided me with the foundation to work in this field.</p>
                    {education.map((edu, index) => (
                        <div key={index} className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                <div className="text-muted-foreground">
                                    <p>{edu.school}</p>
                                    <p className="text-sm">{edu.period}</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground ml-4">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
} 