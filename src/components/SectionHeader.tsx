interface SectionHeaderProps {
  number: string;
  title: string;
  description: string;
  style?: React.CSSProperties;
}

function SectionHeader({ number, title, description, style }: SectionHeaderProps) {
  return (
    <div className="section-header" style={style}>
      <div className="grid">
        <span className="section-number">{number}</span>
        <h2 className="section-title">{title}</h2>
        <p className="section-desc">{description}</p>
      </div>
    </div>
  );
}

export default SectionHeader;
