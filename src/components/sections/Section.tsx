interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ id, className = '', children }: SectionProps) => {
  return (
    <section
      id={id}
      className={`relative min-h-screen flex items-center justify-center bg-transparent ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;