interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
  id?: string;
}

export function SectionWrapper({
  children,
  className = "",
  wide = false,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`mx-auto px-[28px] ${wide ? "w-full" : "max-w-[--max-width-content]"} ${className}`.trim()}
    >
      {children}
    </section>
  );
}

export default SectionWrapper;
