export default function Button({ children, className, ...props }) {
  return (
    <>
      <button
        {...props}
        className={`text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-inter ${className}`}
      >
        {children}
      </button>
    </>
  );
}
