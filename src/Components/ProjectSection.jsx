import {
    ArrowRight,
    ExternalLink,
    Github
    } from "lucide-react";

const projects = [{
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects and skills.",
    imageUrl: "/portfolio/portfolio.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    projectUrl: "https://harsh-096.github.io/portfolio/",
    githubUrl: "https://github.com/harsh-096/portfolio"
    }, {
    id: 2,
    title: "Power BI Dashboards",
    description: "Two Interactive Dashboards to present Super Market & Air Quality Data.",
    imageUrl: "/portfolio/dashboard1.png",
    tags: ["Excel", "Power BI", "Data Analytics"],
    projectUrl: "https://github.com/harsh-096/Dashboards_01",
    githubUrl: "https://github.com/harsh-096/Dashboards_01"
    }, {
    id: 3,
    title: "Stock Prediction",
    description: "Intraday Stock Prediction model.(Still upgrading the data and model accuracy)",
    imageUrl: "/portfolio/prediction.png",
    tags: ["Python"],
    projectUrl: "https://github.com/harsh-096/stock-prediction",
    githubUrl: "https://github.com/harsh-096/stock-prediction"
    }];

export const ProjectSection = () => {
return <section id="projects" className="py-12 px-4 relative">
    < div className="container mx-auto max-w-5.5xl">
        < h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured 
        {" "} 
            <span className="text-primary"> Projects 
            </span>     
        </h2>
                    < p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> Here are some of the
                        projects I 've worked on recently. Click on any project to learn more about it. </p>

                        <div className="grid grid-cols-1 md;grid-cols-2 lg:grid-cols-3 gap-8"> {projects.map((project,
                            key) => ( 
                            <div key={key}
                                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover light-border">

                                <div className="h-48 overflow-hidden"> <img src={project.imageUrl} alt={project.title}
                                        className="w-full h-full object-cover transitoin-transform duration-500 group-hover:scale-110" />
                                </div>

                                <div className="p-6">

                                    <div className="flex flex-wrap gap-2 mb-4"> {project.tags.map((tag) => ( 
                                        <span
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground"
                                            key={tag}> {tag} </span>
                                            ))} 
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                <div className="flex justify-between items-center">
                                    <div className="flex mb-5 ml-3 space-x-3">
                                        <a href={project.projectUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink />
                                        </a>
                                        <a href={project.githubUrl} target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github />
                                        </a>
                                    </div>
                                </div>
                            </div> ))} 
                            
                        </div>

                        <div className="text-center mt-12"> 
                            <a href="https://github.com/harsh-096" target="_blank"
                                className="cosmic-btn w-fit flex items-center mx-auto gap-2"> Check My Github
                                <ArrowRight size={16} />
                            </a>
                        </div>
    </div>
</section> }