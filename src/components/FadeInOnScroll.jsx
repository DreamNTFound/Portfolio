import { useRef, useState, useEffect } from "react";

export default function FadeInOnScroll({
  children,
  className = "",
  onVisible,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          onVisible && onVisible();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={`${className} ${visible ? "fade-in" : "opacity-0"}`}
      >
        {children}
      </div>
    </>
  );
}
