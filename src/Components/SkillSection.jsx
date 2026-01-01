import { cn } from "../libs/utils";
import { useState } from 'react';

const skills = [
    { name: "HTML", level: 90, category: "web-dev" },
    { name: "TailwindCSS", level: 55, category: "web-dev" },
    { name: "Javascript", level: 70, category: "web-dev" },
    { name: "React.js", level: 65, category: "web-dev" },
    { name: "Python", level: 70, category: "web-dev" },

    { name: "Data Analysis & Data Analytics", level: 80, category: "data" },
    { name: "Powe BI", level: 60, category: "data" },
    { name: "Tableau", level: 50, category: "data" },
    { name: "SQL", level: 65, category: "data" },
    { name: "Excel", level: 65, category: "data" },

    { name: "VS Code", level: 80, category: "tools" },
    { name: "Git & Github", level: 50, category: "tools" },
    { name: "Figma", level: 50, category: "tools" },
    { name: "Canva", level: 70, category: "tools" },
    { name: "Docker", level: 30, category: "tools" },
];

const categories = [ "all", "web-dev", "data", "tools" ];


export const SkillSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) =>
        activeCategory === "all" || skill.category === activeCategory
    );

return <section id="skills" className="py-12 px-4 relative bg-secondary/40">
         <div className="container mx-auto max-w-5.5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>


            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}
                    onClick={() => setActiveCategory(category)}
                    > 
                    {category}
                    </button>
                ))}
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover light-border">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{width: skill.level + "%"}}  />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground ">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
         </div>
    </section>


}
