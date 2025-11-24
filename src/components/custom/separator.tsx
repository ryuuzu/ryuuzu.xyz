export const PrimaryCvSeparator = () => (
  <div className="primary-cv-separator border-secondary border-b"></div>
);

export const SecondaryCvSeparator = ({ className }: { className?: string }) => (
  <div
    className={`secondary-cv-separator border-tertiary border-b border-dotted ${className} `}
  ></div>
);
