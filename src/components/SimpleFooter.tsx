export default function SimpleFooter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <footer
      className={`flex flex-col items-center gap-4 px-5 pb-22 pt-14 tab:px-10 ${className}`}
    >
      {children}
      <div className="mt-5 text-xs text-ink-faint">
        © YOHAKU Lab — Recovery Design Lab
      </div>
    </footer>
  );
}
