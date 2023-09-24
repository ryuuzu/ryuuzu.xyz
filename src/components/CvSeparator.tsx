export const PrimaryCvSeparator = () => (
    <div className="primary-cv-separator my-4 border-b border-secondary "></div>
);

export const SecondaryCvSeparator = ({ className }: { className?: string }) => (
    <div
        className={`secondary-cv-separator my-5 border-b border-dotted border-tertiary ${className} `}
    ></div>
);
