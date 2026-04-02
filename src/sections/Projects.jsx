import ProjectCard from "../components/ProjectCard";
import FadeInOnScroll from "../components/FadeInOnScroll";
import aclcStock from "../assets/image/aclc-stock-system.png";
import afSystem from "../assets/image/af-system.png";
import landingPage from "../assets/image/landing-page.png";
import sonicWave from "../assets/image/sonicwave-player.png";

export default function Projects() {
  return (
    <>
      <div id="projects" className="py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono text-primary tracking-widest uppercase">
              Projects
            </span>
          </div>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mb-16">
            Selected Work
          </h2>
          <div className="space-y-24 md:space-y-32">
            <FadeInOnScroll>
              <ProjectCard
                title="ACLC Stock System"
                description="A web-based inventory management system interface that allows to manage and track stock efficiently. Built with a focus on usability and structured data presentation."
                imageUrl={aclcStock}
                projectUrl="https://aclc-stock-system.netlify.app"
                number="01"
                tags={[
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "Node.js",
                  "MongoDB",
                ]}
              />
            </FadeInOnScroll>
            <FadeInOnScroll>
              <ProjectCard
                title="AF System"
                description="An interactive system interface designed to handle user inputs and display structured dynamically using JavaScript."
                imageUrl={afSystem}
                projectUrl="https://af-system.netlify.app"
                number="02"
                tags={["React", "JavaScript", "Tailwind CSS", "UI Design"]}
              />
            </FadeInOnScroll>
            <FadeInOnScroll>
              <ProjectCard
                title="SonicWave Player"
                description="A custom-built music player with interactive controls, dynamic UI updates, and a clean user experience."
                imageUrl={sonicWave}
                projectUrl="https://sonicwave-player.netlify.app"
                number="03"
                tags={["React", "JavaScript", "Tailwind CSS", "Audio API"]}
              />
            </FadeInOnScroll>
            <FadeInOnScroll>
              <ProjectCard
                title="DreamNTFound Landing Page"
                description="A responsive landing page designed with modern layout techniques, focusing on visual hierarchy and user engagement."
                imageUrl={landingPage}
                projectUrl="https://dreamntfound-landing.netlify.app"
                number="04"
                tags={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Responsive Design",
                  "UI/UX",
                ]}
              />
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </>
  );
}
