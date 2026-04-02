import { useState } from "react";
import FadeInOnScroll from "../components/FadeInOnScroll";

export default function Skills() {
  const techStack = {
    frontend: [
      { name: "HTML", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Intermediate" },
      { name: "Responsive Design", level: "Intermediate" },
    ],
    concepts: [
      { name: "Version Control (Git)", level: "Intermediate" },
      { name: "Event Handling", level: "Intermediate" },
      { name: "Fetch API", level: "Familiar" },
      { name: "UI/UX Principles", level: "Familiar" },
    ],
    tools: [
      { name: "Netlify", level: "Familiar" },
      { name: "VS Code", level: "Comfortable" },
      { name: "Git", level: "Comfortable" },
      { name: "Chrome DevTools", level: "Comfortable" },
    ],
  };

  const stackLevel = {
    Learning: "w-1/3",
    Familiar: "w-1/2",
    Intermediate: "w-2/3",
    Comfortable: "w-full",
  };

  // Individual skill item
  function SkillItem({ item, index }) {
    const [visible, setVisible] = useState(false);

    return (
      <FadeInOnScroll onVisible={() => setVisible(true)}>
        <div style={{ animationDelay: `${index * 0.2}s` }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-inter text-foreground">
              {item.name}
            </span>
            <span className="text-sm font-inter text-foreground">
              {item.level}
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-1000 ease-out ${
                visible ? stackLevel[item.level] : "w-0"
              }`}
            />
          </div>
        </div>
      </FadeInOnScroll>
    );
  }

  // TechStack column
  function TechStack({ title, items }) {
    return (
      <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
        <h3 className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
          {title}
        </h3>
        <div className="space-y-5">
          {items.map((item, index) => (
            <SkillItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <FadeInOnScroll>
        <div id="skills" className="py-24 md:py-32 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
          </div>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-mono text-primary tracking-widest uppercase">
                Skills
              </span>
            </div>
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mb-16">
              Tech <span className="text-primary">Stack</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TechStack title="Frontend" items={techStack.frontend} />
              <TechStack title="Concepts" items={techStack.concepts} />
              <TechStack title="Tools" items={techStack.tools} />
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </>
  );
}
