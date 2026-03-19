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
    <section id={id} className={className}>
      <div
        className={`mx-auto px-5 sm:px-7 ${wide ? "w-full" : "max-w-[1100px]"}`}
      >
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
