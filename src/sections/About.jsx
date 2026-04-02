import FadeInOnScroll from "../components/FadeInOnScroll";

export default function About() {
  return (
    <>
      <div id="about" className="py-24 md:py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-mono text-primary tracking-widest uppercase">
                About Me
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                  Turning ideas into{" "}
                  <span className="text-primary">working applications</span>
                </h2>
                <div className="space-y-4 text-muted-foreground mb-6 leading-relaxed font-inter">
                  <p>
                    I am a passionate Frontend Developer focused on building
                    responsive, user-friendly, and interactive web applications.
                  </p>
                  <p>
                    I have experience developing real-world projects such as
                    inventory systems, landing-pages, and media players, where I
                    applied JavaScript to create dynamic and functional user
                    interfaces.
                  </p>
                  <p>
                    I enjoy turning ideas into working applications and
                    continuously improving my skills in modern frontend
                    development.
                  </p>
                </div>
              </div>
              <FadeInOnScroll>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 hover:bg-primary/5 transition-all duration-500 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-panels-top-left-icon lucide-panels-top-left"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    </div>
                    <h3 className="font-inter font-semibold text-sm text-foreground mb-1">
                      UI Development
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Clean, responsive interfaces
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 hover:bg-primary/5 transition-all duration-500 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                        />
                      </svg>
                    </div>
                    <h3 className="font-inter font-semibold text-sm text-foreground mb-1">
                      JavaScript
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Dynamic & interactive apps
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 hover:bg-primary/5 transition-all duration-500 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-monitor-icon lucide-monitor"
                      >
                        <rect width="20" height="14" x="2" y="3" rx="2" />
                        <line x1="8" x2="16" y1="21" y2="21" />
                        <line x1="12" x2="12" y1="17" y2="21" />
                      </svg>
                    </div>
                    <h3 className="font-inter font-semibold text-sm text-foreground mb-1">
                      Real Projects
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Functional web applications
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 hover:bg-primary/5 transition-all duration-500 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-inter font-semibold text-sm text-foreground mb-1">
                      Performance
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Fast & optimized experiences
                    </p>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </>
  );
}
