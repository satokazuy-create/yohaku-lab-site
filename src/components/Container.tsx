export default function Container({
  children,
  className = "",
  maxWidth = "1200px",
}: {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}) {
  return (
    <div
      className={`mx-auto px-5 tab:px-10 ${className}`}
      style={{ maxWidth }}
    >
      {children}
    </div>
  );
}
