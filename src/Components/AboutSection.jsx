import { Code, Container, ChartNoAxesCombined  } from "lucide-react"
import resumePDF from '../assets/Resume.pdf';

export const AboutSection = () => {

    return(
        <section id="about" className="py-12 px-4 relative"> {" "}

        {/* Section of About Me in Brief */}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 item-center">
                    <div className="sapce-y-6">
                        <h3 className="text-xl font-bold">Curious about Data</h3>
                        <p className="text-muted-foreground font-semibold">I’m a curious technologist with a simple mindset: if I start something, I make sure it gets done. I enjoy learning by doing, figuring things out along the way, and improving through every challenge. This approach has shaped my journey across development and data, keeping me motivated and consistent in the work I take on.</p>
                        <p className="text-muted-foreground font-semibold">I operate in a hybrid space, combining Full-stack development and Data analytics. I enjoy building end-to-end solutions that are both practical and well-thought-out—from clean interfaces to meaningful data behind the scenes. I’ve applied these skills at HackNUThon 4.0 at Nirma University, where my team built a working prototype under tight deadlines, and I’m currently developing a system for medical store owners and pharmaceutical suppliers to simplify medicine stock and coordination.</p>
                        <p className="text-muted-foreground font-semibold">Beyond code, I’ve learned the value of teamwork through backstage volunteering at Prakarsh ’24. I’m a certified SAP Data Analyst and narrowly missed the SAP Data Engineer certification by 1%—a tough result, but a great learning experience. Curious, reliable, and always improving, I’m motivated by solving real problems and seeing ideas through to completion.</p>
                        
                        

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-btn">Get in Touch</a>

                            <a href={resumePDF} className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300 card-hover" target="_blank">
                            Download Resume 
                            </a>
                        </div>
                    </div>


                    {/* Section Of Main Skills */}
                    <div className="grid grid-cols-1 gap-6">

                        <div className="gradient-border p-6 card-hover light-border">
                            <div className="flex item-start gap-4">
                                <div className="p-3 h-11 w-11 rounded-full bg-primary/10">
                                    <ChartNoAxesCombined className="h-5 w-5 text-primary"/>
                                </div>
                                
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Data Analysis</h4>
                                    <p className="text-muted-foreground">Specialized expertise in business intelligence and certification in SAP Analytics Cloud.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover light-border">
                            <div className="flex item-start gap-4">
                                <div className="p-3 h-11 w-11 rounded-full bg-primary/10">
                                    <Code className="h-5 w-5 text-primary"/>
                                </div>
                                
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Full-stack skills in Python and React.js and experience in the Software Development Life Cycle (SDLC).
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="gradient-border p-6 card-hover light-border">
                            <div className="flex item-start gap-4">
                                <div className="p-3 h-11 w-11 rounded-full bg-primary/10">
                                    <Container className="h-5 w-5 text-primary"/>
                                </div>
                                
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">DevOps Aspirations</h4>
                                    <p className="text-muted-foreground">Expanding knowledge in cloud technologies and a strong interest in DevOps.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )

}