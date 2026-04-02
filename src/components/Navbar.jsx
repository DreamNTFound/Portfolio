import { useState, useEffect } from "react";
import Button from "../components/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`No element found with selector: ${href}`);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/50 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-mono text-sm font-semibold text-primary tracking-wider"
          >
            &lt; Developer /&gt;
          </a>
          <div className="hidden md:flex items-center gap-8">
            <Button onClick={(e) => handleNavClick(e, "#about")}>About</Button>
            <Button onClick={(e) => handleNavClick(e, "#projects")}>Projects</Button>
            <Button onClick={(e) => handleNavClick(e, "#skills")}>Skills</Button>
            <Button onClick={(e) => handleNavClick(e, "#contact")}>Contact</Button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-sm font-medium bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-lg hover:bg-primary/20 transition-all duration-300"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
