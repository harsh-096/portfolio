import { ArrowDown, Linkedin, Github, Instagram } from "lucide-react";
import myPhoto from "../assets/harsh.jpg"; // adjust path

export const HeroSection = () => {
  return (
<section id="home" className="relative min-h-screen flex items-center px-4">
    <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Text */}
        <div className="text-center md:text-left space-y-6 md:flex-1 pt-16 md:pt-0">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Harsh</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Parmar</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
            Welcome to My Galaxy. I'm an IT Engineer focused on Programming and Data Excellence, crafting solutions across the data lifecycle. My passion for data is almost embarrassing, and my proficiency in code is always matched by my prompting skills. My Personal Mantra: Write once. Debug with AI support forever.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center md:justify-start space-x-6">
            <a href="https://www.linkedin.com/in/harsh-parmar-96324624a/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a href="https://github.com/harsh-096" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-primary" />
            </a>
            <a href="https://www.instagram.com/_harsh_096_" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 text-primary" />
            </a>
          </div>
        </div>

        {/* Right: Image */}
        {/* Right: Portrait Image */}
        {/* Right: Portrait Image */}
        <div className="md:flex-1 flex justify-center md:justify-end">
            <div
                className="
                rounded-3xl overflow-hidden border border-primary/40
                shadow-lg shadow-primary/30 bg-linear-to-b from-primary/10 to-transparent
                w-64 h-80 md:w-75 md:h-95 ">
                <img
                src={myPhoto}
                alt="Harsh Parmar"
                className="w-full h-full object-cover"
                />
            </div>
        </div>


    </div>

      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div> */}
    </section>
  );
};
