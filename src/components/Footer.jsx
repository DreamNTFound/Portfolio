import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-border-/50 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 — Built with passion
          </p>
          <div className="flex items-center gap-4">
            <a
              href=""
              className="text-muted-foreground hover:text-primary/30 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href=""
              className="text-muted-foreground hover:text-primary/30 transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href=""
              className="text-muted-foreground hover:text-primary/30 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
