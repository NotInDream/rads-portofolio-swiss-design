interface SectionHeaderProps {
  number: string;
  title: string;
  description: string;
  style?: React.CSSProperties;
  muted?: boolean;
}

function SectionHeader({
  number,
  title,
  description,
  style,
  muted = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`border-t-2 pt-24 pb-12 ${muted ? "border-grey-dark" : "border-black"}`}
      style={style}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 items-baseline gap-6 px-12 max-tab:gap-4 max-tab:px-6">
        <span className="col-start-1 col-end-2 font-bebas text-[1.5rem] text-red max-tab:col-span-full">
          {number}
        </span>
        <h2 className="col-start-2 col-end-7 font-bebas uppercase leading-none tracking-[-0.01em] text-[clamp(2.5rem,5vw,4.5rem)] max-tab:col-span-full">
          {title}
        </h2>
        <p
          className={`col-start-8 col-end-13 text-[0.9rem] leading-[1.65] max-tab:col-span-full max-tab:mb-4 ${
            muted ? "text-grey" : "text-grey-dark"
          }`}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default SectionHeader;
