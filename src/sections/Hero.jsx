import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeInOnScroll from "../components/FadeInOnScroll";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Hero() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background font-inter">
        <FadeInOnScroll>
          <div
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
          >
            {/* Background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
            </div>

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200/20 bg-slate-200/5 mb-8">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-mono text-primary tracking-wider uppercase">
                    Available for work
                  </span>
                </div>
                <h1 className="font-inter font-bold text-4xl sm:text-5xl md:text-7xl leading-tight tracking-tight mb-6">
                  <span className="text-foreground">Frontend</span>
                  <br />
                  <span className="text-sky-400">Developer</span>
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-inter font-light mb-10">
                  I build responsive and interactive web applications with clean
                  user interfaces and functional systems using modern web
                  technologies.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#projects")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-inter font-medium text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    View my work
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-8 py-3.5 border border-border text-primary-foreground rounded-xl font-inter font-medium text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    Contact me
                  </a>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <a
                    href="https://github.com/DreamNTFound"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jenard-hinayon-b387a0377/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <FaEnvelope />
                  </a>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 animate-bounce text-muted-foreground"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
