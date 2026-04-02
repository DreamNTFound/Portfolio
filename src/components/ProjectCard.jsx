export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  number,
  tags,
}) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <div className="relative group rounded-2xl overflow-hidden border border-border/30 bg-card">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={imageUrl}
                alt={title}
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-primary-foreground"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <span className="font-mono text-xs text-primary tracking-wider">
            {number}
          </span>
          <h3 className="font-inter font-bold text-2xl md:text-3xl text-foreground mb-2 mb-4">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6 font-inter">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-mono px-3 py-1.5 rounded-md bg-secondary/80 text-muted-foreground border border-border/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
